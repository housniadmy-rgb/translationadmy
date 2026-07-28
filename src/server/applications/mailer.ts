import { getSecret } from 'astro:env/server';
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
    /*
      Bewusst ohne den Inhalt der Nachricht.

      Zuvor stand hier der vollständige Text – bei einer Bewerbung also Name,
      Anschrift, Rufnummer, Sprachen und Nachricht. Solange SMTP nicht
      eingerichtet ist, läuft jede Absendung durch diesen Zweig; auf einer
      gehosteten Umgebung wären die Angaben damit ins Protokoll geschrieben
      worden, das häufig breiter einsehbar ist als das Postfach.

      Für den Zweck der Meldung – „hier wäre etwas rausgegangen“ – genügen
      Betreff und Zahl der Anhänge.
    */
    console.warn(
      '[mailer] SMTP ist nicht konfiguriert – es wurde nichts versendet. ' +
        `Betreff: ${message.subject} · Anhänge: ${message.attachments?.length ?? 0}`,
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

/**
 * Liest eine serverseitige Umgebungsvariable und entfernt versehentliche
 * Leerzeichen – etwa den Zeilenumbruch, der beim Einfügen leicht mitkommt.
 *
 * Bewusst über Astros Adapter-Schnittstelle statt direkt über process.env:
 * Der jeweilige Adapter bestimmt, woher Werte zur Laufzeit stammen. Beim
 * Vercel-Adapter ist das derzeit process.env, bei Cloudflare oder Deno wären
 * es die Bindings der Plattform. Der Zugriff bleibt dadurch beim Hosterwechsel
 * unverändert.
 */
function env(name: string): string | undefined {
  const value = getSecret(name);
  return value?.trim() || undefined;
}

/**
 * Für den Versand zwingend erforderliche Variablen.
 *
 * MAIL_FROM steht bewusst mit in der Liste, ist aber nicht zwingend: Fehlt es,
 * dient SMTP_USER als Absender. Die Meldung nennt es trotzdem, damit beim
 * Nachsehen in den Projekteinstellungen nichts übersehen wird.
 */
const SMTP_VARIABLES = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD', 'MAIL_FROM'] as const;

/**
 * Namen der Variablen, die zur Laufzeit nicht gesetzt sind.
 *
 * Gibt ausschließlich Namen zurück, niemals Werte. Ein Protokoll ist auf vielen
 * Plattformen breiter einsehbar als die Projekteinstellungen; ein dorthin
 * geschriebenes Passwort gilt als offengelegt und müsste gewechselt werden.
 */
export function missingSmtpVariables(): string[] {
  return SMTP_VARIABLES.filter((name) => env(name) === undefined);
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
    /*
      Diagnose für den Fall, dass auf der Zielumgebung nichts versendet wird.

      Ohne diese Meldung sieht man im Protokoll nur, dass keine Verbindung
      aufgebaut wurde – aber nicht, welche Angabe fehlt. Ausgegeben werden
      ausschließlich die NAMEN der fehlenden Variablen. Werte, und erst recht
      das Passwort, gehören unter keinen Umständen in ein Protokoll.
    */
    const missing = missingSmtpVariables();
    console.error('[mailer] Fehlende SMTP-Variablen:', missing.join(', ') || '(keine)');

    if (!missing.includes('MAIL_FROM') || missing.length > 1) {
      console.error(
        '[mailer] Ohne SMTP_HOST, SMTP_USER und SMTP_PASSWORD wird nichts versendet. ' +
          'MAIL_FROM ist entbehrlich – fehlt es, dient SMTP_USER als Absender.',
      );
    }

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

    /*
      Zeitgrenzen ausdrücklich setzen.

      Nodemailer wartet in der Voreinstellung bis zu zwei Minuten auf den
      Verbindungsaufbau. Ist der Mailserver nicht erreichbar, hängt die
      Formularanfrage genauso lange – die absendende Person sieht nur einen
      drehenden Button, und bei mehreren Anfragen belegen die offenen
      Verbindungen den Server. Lieber nach 10 Sekunden ehrlich scheitern:
      Die Route meldet dann einen Fehler samt E-Mail-Adresse als Ausweg.

      Der Socket darf länger offen bleiben: Bewerbungen tragen Anhänge von
      bis zu 8 MB, deren Übertragung braucht Zeit.
    */
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 30_000,

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
