import nodemailer from 'nodemailer';

export interface MailAttachment {
  filename: string;
  content: Uint8Array;
  contentType: string;
}

export interface MailMessage {
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  attachments?: MailAttachment[];
}

/**
 * Transportschicht für E-Mails.
 * Die Anwendung kennt nur dieses Interface – ob dahinter SMTP, ein
 * Transaktionsmail-Dienst oder eine Warteschlange steht, ist austauschbar.
 */
export interface Mailer {
  send(message: MailMessage): Promise<void>;
  /** Prüft Verbindung, TLS und Anmeldung, ohne eine Mail zu versenden. */
  verify(): Promise<void>;
  /** Ist ein echter Versand konfiguriert? */
  readonly isConfigured: boolean;
}

/**
 * Versand über SMTP mit erzwungener Transportverschlüsselung.
 *
 * Zwei Betriebsarten, beide verschlüsselt:
 *   • Port 465 – SMTPS, die Verbindung ist von der ersten Sekunde an per TLS
 *     geschützt (`secure: true`).
 *   • Port 587/25 – STARTTLS, die Verbindung wird nach dem Handshake auf TLS
 *     hochgestuft. `requireTLS: true` sorgt dafür, dass der Versand
 *     abgebrochen wird, falls der Server kein STARTTLS anbietet – die Mail
 *     geht dann lieber gar nicht raus als im Klartext.
 */
class SmtpMailer implements Mailer {
  readonly isConfigured = true;

  constructor(
    private readonly transport: nodemailer.Transporter,
    private readonly from: string,
  ) {}

  async send(message: MailMessage): Promise<void> {
    await this.transport.sendMail({
      from: this.from,
      to: message.to,
      replyTo: message.replyTo,
      subject: message.subject,
      text: message.text,
      attachments: message.attachments?.map((attachment) => ({
        filename: attachment.filename,
        content: Buffer.from(attachment.content),
        contentType: attachment.contentType,
      })),
    });
  }

  async verify(): Promise<void> {
    await this.transport.verify();
  }
}

/**
 * Fallback ohne SMTP-Konfiguration: schreibt eine Zusammenfassung ins
 * Serverprotokoll. Die Routen werten `isConfigured` aus und melden dem
 * Absender einen Fehler, statt einen erfolgreichen Versand vorzutäuschen.
 */
class LoggingMailer implements Mailer {
  readonly isConfigured = false;

  async send(message: MailMessage): Promise<void> {
    console.warn(
      '[mailer] SMTP ist nicht konfiguriert – E-Mail wurde nicht versendet.\n' +
        `An: ${message.to}\nBetreff: ${message.subject}\n` +
        `Anhänge: ${message.attachments?.length ?? 0}\n\n${message.text}`,
    );
  }

  async verify(): Promise<void> {
    throw new Error(
      'SMTP ist nicht konfiguriert. Bitte SMTP_HOST, SMTP_USER, SMTP_PASSWORD ' +
        'und MAIL_FROM setzen – siehe .env.example.',
    );
  }
}

let cached: Mailer | null = null;

/** Liest eine Umgebungsvariable und entfernt versehentliche Leerzeichen. */
function env(name: string): string | undefined {
  const value = process.env[name];
  return value?.trim() || undefined;
}

/**
 * Baut den Mailer aus den Umgebungsvariablen:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, MAIL_FROM
 *   optional: SMTP_SECURE, SMTP_ALLOW_SELF_SIGNED
 *
 * Fehlt eine Pflichtangabe, wird der protokollierende Fallback genutzt.
 * Zugangsdaten gehören ausschließlich in die Umgebung, niemals ins Repository.
 */
export function getMailer(): Mailer {
  if (cached) return cached;

  const host = env('SMTP_HOST');
  const user = env('SMTP_USER');
  const password = env('SMTP_PASSWORD');
  const from = env('MAIL_FROM') ?? user;

  if (!host || !user || !password || !from) {
    cached = new LoggingMailer();
    return cached;
  }

  const port = Number(env('SMTP_PORT') ?? 587);

  // Port 465 spricht implizites TLS, alles andere wird über STARTTLS hochgestuft.
  const secure = env('SMTP_SECURE') ? env('SMTP_SECURE') === 'true' : port === 465;

  /*
    Nur für Testumgebungen mit selbstsigniertem Zertifikat.
    In Produktion niemals setzen: Ohne Zertifikatsprüfung ist die Verbindung
    zwar verschlüsselt, aber nicht gegen einen Man-in-the-Middle geschützt.
  */
  const allowSelfSigned = env('SMTP_ALLOW_SELF_SIGNED') === 'true';
  if (allowSelfSigned) {
    console.warn(
      '[mailer] SMTP_ALLOW_SELF_SIGNED ist aktiv – Zertifikate werden NICHT geprüft. ' +
        'Diese Einstellung gehört nicht in den Produktivbetrieb.',
    );
  }

  const transport = nodemailer.createTransport({
    host,
    port,
    secure,
    // Erzwingt STARTTLS, wenn die Verbindung nicht bereits verschlüsselt ist.
    requireTLS: !secure,
    auth: { user, pass: password },
    tls: {
      // Veraltete Protokollversionen ausschließen.
      minVersion: 'TLSv1.2',
      rejectUnauthorized: !allowSelfSigned,
      servername: host,
    },
  });

  cached = new SmtpMailer(transport, from);
  return cached;
}

/** Austauschpunkt für Tests. */
export function setMailer(next: Mailer | null): void {
  cached = next;
}
