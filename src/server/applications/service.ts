import { CONTACT, SITE } from '../../consts';
import { getMailer, type MailAttachment } from './mailer';
import { getStore } from './store';
import type { Application } from './types';

/**
 * Orchestriert die Verarbeitung einer Bewerbung:
 * aufnehmen (Store) → benachrichtigen (Mailer) → Eingangsbestätigung.
 *
 * Später ergänzbare Schritte – Datenbankeintrag, Bewerberverwaltung,
 * automatische Freischaltung – gehören genau hierher und lassen sich
 * einfügen, ohne die HTTP-Route zu verändern.
 */

const LABELS = {
  fields: {
    asylum: 'Asyl',
    authorities: 'Behörden',
    police: 'Polizei',
    courts: 'Gerichte',
    medical: 'Medizin',
    social: 'Soziales',
    education: 'Bildung',
    business: 'Wirtschaft',
    technical: 'Technik',
  },
  serviceModes: {
    interpreting: 'Dolmetschen',
    translation: 'Übersetzen',
  },
  deliveryModes: {
    onsite: 'Vor Ort',
    phone: 'Telefonisch',
    video: 'Videodolmetschen',
  },
  /*
    Muss zu apply.travelLabels in den Sprachdateien passen – sonst steht in
    der Benachrichtigung etwas anderes, als die bewerbende Person angeklickt
    hat. „national“ meint seit der Umstellung auf europaweite Bewerbungen das
    Wohnsitzland der bewerbenden Person, nicht mehr Deutschland.
  */
  travelRange: {
    local: 'Wohnort und Umgebung',
    regional: 'Regional',
    national: 'Landesweit im Wohnsitzland',
    european: 'Europaweit',
  },
  availability: {
    fulltime: 'Vollzeit',
    parttime: 'Teilzeit',
    occasional: 'Gelegentlich',
    'on-call': 'Kurzfristig auf Abruf',
  },
  experience: {
    lt1: 'Weniger als 1 Jahr',
    '1-3': '1–3 Jahre',
    '3-5': '3–5 Jahre',
    '5-10': '5–10 Jahre',
    gt10: 'Mehr als 10 Jahre',
  },
} as const;

/** Baut die Benachrichtigung als gut lesbaren Klartext. */
function buildNotification(application: Application, reference: string): string {
  const lines = [
    `Neue Bewerbung als Dolmetscher/Übersetzer`,
    `Vorgangsnummer: ${reference}`,
    `Eingegangen: ${application.receivedAt.toISOString()}`,
    `Sprachfassung der Website: ${application.locale}`,
    `Einsatzland: ${application.assignmentCountry}`,
    '',
    '— Person —',
    `Name: ${application.firstName} ${application.lastName}`,
    `E-Mail: ${application.email}`,
    `Telefon: ${application.phone}`,
    `Wohnort: ${application.city}`,
    `Land: ${application.country}`,
    `Nationalität: ${application.nationality || '— keine Angabe —'}`,
    '',
    '— Sprachen —',
    `Gesprochene Sprachen: ${application.spokenLanguages}`,
    `Arbeitssprachen: ${application.workingLanguages}`,
    '',
    '— Einsatzprofil —',
    `Fachgebiete: ${application.fields.map((field) => LABELS.fields[field]).join(', ')}`,
    `Tätigkeit: ${application.serviceModes.map((mode) => LABELS.serviceModes[mode]).join(', ')}`,
    `Einsatzform: ${application.deliveryModes.map((mode) => LABELS.deliveryModes[mode]).join(', ')}`,
    `Reisebereitschaft: ${LABELS.travelRange[application.travelRange]}`,
    `Verfügbarkeit: ${LABELS.availability[application.availability]}`,
    `Berufserfahrung: ${LABELS.experience[application.experience]}`,
    '',
    '— Nachricht —',
    application.message || '— keine Angabe —',
    '',
    '— Anhänge —',
    ...Object.entries(application.documents).map(
      ([kind, files]) =>
        `${kind}: ${files
          .map((file) => `${file.filename} (${Math.round(file.size / 1024)} KB)`)
          .join(', ')}`,
    ),
    '',
    'Hinweis: Ein Strafregisternachweis wird mit der Bewerbung bewusst nicht erhoben.',
  ];

  return lines.join('\n');
}

/** Eingangsbestätigung an die bewerbende Person. */
function buildConfirmation(application: Application, reference: string): string {
  return [
    `Guten Tag ${application.firstName} ${application.lastName},`,
    '',
    `vielen Dank für Ihre Bewerbung bei ${SITE.legalName}.`,
    `Wir haben Ihre Unterlagen erhalten und melden uns bei Ihnen.`,
    '',
    `Ihre Vorgangsnummer: ${reference}`,
    '',
    'Bei Rückfragen erreichen Sie uns unter:',
    `Telefon: ${CONTACT.phone}`,
    `E-Mail: ${CONTACT.email}`,
    '',
    'Mit freundlichen Grüßen',
    SITE.legalName,
  ].join('\n');
}

function toAttachments(application: Application): MailAttachment[] {
  // Dateiname mit Dokumentart voranstellen, damit die Zuordnung im Postfach klar ist.
  return Object.entries(application.documents).flatMap(([kind, files]) =>
    files.map((file) => ({
      filename: `${kind}-${file.filename}`,
      content: file.content,
      contentType: file.mimeType || 'application/octet-stream',
    })),
  );
}

export interface SubmissionResult {
  reference: string;
  /** false, wenn kein SMTP eingerichtet ist – die Route meldet das als Fehler. */
  delivered: boolean;
}

export async function submitApplication(
  application: Application,
): Promise<SubmissionResult> {
  const { reference } = await getStore().save(application);
  const mailer = getMailer();

  await mailer.send({
    to: CONTACT.email,
    replyTo: application.email,
    subject: `Bewerbung Dolmetscher: ${application.firstName} ${application.lastName} (${reference})`,
    text: buildNotification(application, reference),
    attachments: toAttachments(application),
  });

  // Eingangsbestätigung ist Komfort, kein Muss – ein Fehler hier darf die
  // Bewerbung nicht scheitern lassen.
  if (mailer.isConfigured) {
    try {
      await mailer.send({
        to: application.email,
        subject: `Ihre Bewerbung bei ${SITE.name} (${reference})`,
        text: buildConfirmation(application, reference),
      });
    } catch (error) {
      console.error('[applications] Eingangsbestätigung fehlgeschlagen', error);
    }
  }

  return { reference, delivered: mailer.isConfigured };
}
