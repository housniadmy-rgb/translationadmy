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
  /** Ist ein echter Versand konfiguriert? */
  readonly isConfigured: boolean;
}

/** Versand über SMTP – konfiguriert über Umgebungsvariablen. */
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
}

/**
 * Fallback ohne SMTP-Konfiguration: schreibt eine Zusammenfassung ins
 * Serverprotokoll, damit im Betrieb sofort erkennbar ist, dass eine Bewerbung
 * eingegangen ist, aber der Versand noch eingerichtet werden muss.
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
}

let cached: Mailer | null = null;

/**
 * Baut den Mailer aus den Umgebungsvariablen:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_SECURE, MAIL_FROM
 * Fehlt eine der Pflichtangaben, wird der protokollierende Fallback genutzt.
 */
export function getMailer(): Mailer {
  if (cached) return cached;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const from = process.env.MAIL_FROM ?? user;

  if (!host || !user || !password || !from) {
    cached = new LoggingMailer();
    return cached;
  }

  const port = Number(process.env.SMTP_PORT ?? 587);
  const transport = nodemailer.createTransport({
    host,
    port,
    // Port 465 spricht implizites TLS, 587 startet TLS über STARTTLS.
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
    auth: { user, pass: password },
  });

  cached = new SmtpMailer(transport, from);
  return cached;
}

/** Austauschpunkt für Tests. */
export function setMailer(next: Mailer | null): void {
  cached = next;
}
