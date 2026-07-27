import { CONTACT, SITE } from '../../consts';
import { getMailer } from '../applications/mailer';

/**
 * Kontaktanfragen von Auftraggebern.
 *
 * Bewusst schlanker als die Bewerbungen: keine Dateianhänge, keine
 * Vorgangsnummer. Der Versand läuft aber über denselben, TLS-gesicherten
 * Mailer – Anfragen verlassen den Server nie unverschlüsselt.
 */

export interface ContactRequest {
  name: string;
  email: string;
  organisation: string;
  subject: string;
  message: string;
  locale: string;
  receivedAt: Date;
}

export type ContactErrors = Record<string, string>;

export interface ContactValidation {
  ok: boolean;
  errors: ContactErrors;
  request?: ContactRequest;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(value: FormDataEntryValue | null, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

/** Prüft die Formulardaten; Meldungen sind Schlüssel, keine fertigen Sätze. */
export function validateContact(form: FormData): ContactValidation {
  const errors: ContactErrors = {};

  const name = text(form.get('name'), 150);
  const email = text(form.get('email'), 200);
  const organisation = text(form.get('organisation'), 200);
  const subject = text(form.get('subject'), 150);
  const message = text(form.get('message'), 5000);
  const locale = text(form.get('locale'), 5) || 'de';

  if (!name) errors.name = 'required';
  if (!EMAIL_PATTERN.test(email)) errors.email = 'email';
  if (!message) errors.message = 'required';

  if (form.get('consent') !== 'on' && form.get('consent') !== 'true') {
    errors.consent = 'required';
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    errors: {},
    request: { name, email, organisation, subject, message, locale, receivedAt: new Date() },
  };
}

function buildNotification(request: ContactRequest): string {
  return [
    'Neue Anfrage über das Kontaktformular',
    `Eingegangen: ${request.receivedAt.toISOString()}`,
    `Sprachfassung der Website: ${request.locale}`,
    '',
    `Name: ${request.name}`,
    `E-Mail: ${request.email}`,
    `Behörde / Unternehmen: ${request.organisation || '— keine Angabe —'}`,
    `Anliegen: ${request.subject || '— keine Angabe —'}`,
    '',
    '— Nachricht —',
    request.message,
  ].join('\n');
}

function buildConfirmation(request: ContactRequest): string {
  return [
    `Guten Tag ${request.name},`,
    '',
    `vielen Dank für Ihre Anfrage bei ${SITE.legalName}.`,
    'Wir haben sie erhalten und melden uns so schnell wie möglich bei Ihnen.',
    '',
    'Bei Rückfragen erreichen Sie uns unter:',
    `Telefon: ${CONTACT.phone}`,
    `E-Mail: ${CONTACT.email}`,
    '',
    'Mit freundlichen Grüßen',
    SITE.legalName,
  ].join('\n');
}

export interface ContactResult {
  /** false, wenn kein SMTP eingerichtet ist – die Route meldet das als Fehler. */
  delivered: boolean;
}

export async function submitContact(request: ContactRequest): Promise<ContactResult> {
  const mailer = getMailer();

  await mailer.send({
    to: CONTACT.email,
    replyTo: request.email,
    subject: `Anfrage über die Website: ${request.subject || 'Allgemein'} – ${request.name}`,
    text: buildNotification(request),
  });

  // Eingangsbestätigung ist Komfort – ein Fehler hier darf die Anfrage
  // nicht scheitern lassen.
  if (mailer.isConfigured) {
    try {
      await mailer.send({
        to: request.email,
        subject: `Ihre Anfrage bei ${SITE.name}`,
        text: buildConfirmation(request),
      });
    } catch (error) {
      console.error('[contact] Eingangsbestätigung fehlgeschlagen', error);
    }
  }

  return { delivered: mailer.isConfigured };
}
