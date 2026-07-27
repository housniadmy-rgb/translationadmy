import { COUNTRY_REQUIREMENTS_BY_CODE } from '../../data/countries';
import {
  APPLICATION_FIELDS,
  AVAILABILITY_OPTIONS,
  CONFIRMATIONS,
  DELIVERY_MODES,
  DOCUMENT_KINDS,
  EXPERIENCE_LEVELS,
  REQUIRED_DOCUMENTS,
  SERVICE_MODES,
  TRAVEL_RANGES,
  UPLOAD_LIMITS,
  type Application,
  type ApplicationField,
  type Availability,
  type DeliveryMode,
  type DocumentKind,
  type ExperienceLevel,
  type ServiceMode,
  type TravelRange,
  type UploadedFile,
  type ValidationResult,
} from './types';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(value: FormDataEntryValue | null, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function pickMany<T extends string>(
  values: FormDataEntryValue[],
  allowed: readonly T[],
): T[] {
  const allowedSet = new Set<string>(allowed);
  return values
    .filter((value): value is string => typeof value === 'string')
    .filter((value) => allowedSet.has(value)) as T[];
}

function pickOne<T extends string>(
  value: FormDataEntryValue | null,
  allowed: readonly T[],
): T | null {
  if (typeof value !== 'string') return null;
  return (allowed as readonly string[]).includes(value) ? (value as T) : null;
}

function hasAllowedExtension(filename: string): boolean {
  const lower = filename.toLowerCase();
  return UPLOAD_LIMITS.allowedExtensions.some((extension) => lower.endsWith(extension));
}

async function readFile(file: File): Promise<UploadedFile> {
  const buffer = await file.arrayBuffer();
  return {
    filename: file.name,
    mimeType: file.type,
    size: file.size,
    content: new Uint8Array(buffer),
  };
}

/** Prüft die Dateien einer Dokumentart und meldet den ersten Verstoß. */
async function collectDocuments(
  form: FormData,
  kind: DocumentKind,
  errors: Record<string, string>,
): Promise<UploadedFile[]> {
  const entries = form
    .getAll(`documents.${kind}`)
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (entries.length === 0) {
    if (REQUIRED_DOCUMENTS.includes(kind)) errors[`documents.${kind}`] = 'required';
    return [];
  }

  if (entries.length > UPLOAD_LIMITS.maxFilesPerKind) {
    errors[`documents.${kind}`] = 'tooMany';
    return [];
  }

  const files: UploadedFile[] = [];
  for (const entry of entries) {
    if (entry.size > UPLOAD_LIMITS.certificateMaxBytes) {
      errors[`documents.${kind}`] = 'tooLarge';
      return [];
    }
    if (!hasAllowedExtension(entry.name)) {
      errors[`documents.${kind}`] = 'fileType';
      return [];
    }
    files.push(await readFile(entry));
  }
  return files;
}

/**
 * Prüft die eingehenden Formulardaten und baut daraus eine Bewerbung.
 * Die Meldungen sind Schlüssel, keine fertigen Sätze – die Übersetzung
 * übernimmt das Frontend anhand der jeweiligen Sprachdatei.
 */
export async function validateApplication(form: FormData): Promise<ValidationResult> {
  const errors: Record<string, string> = {};

  const firstName = text(form.get('firstName'), 100);
  const lastName = text(form.get('lastName'), 100);
  const email = text(form.get('email'), 200);
  const phone = text(form.get('phone'), 60);
  const city = text(form.get('city'), 120);
  const country = text(form.get('country'), 120);
  const nationality = text(form.get('nationality'), 120);
  const spokenLanguages = text(form.get('spokenLanguages'), 1000);
  const workingLanguages = text(form.get('workingLanguages'), 1000);
  const message = text(form.get('message'), 5000);
  const locale = text(form.get('locale'), 5) || 'de';

  if (!firstName) errors.firstName = 'required';
  if (!lastName) errors.lastName = 'required';
  if (!EMAIL_PATTERN.test(email)) errors.email = 'email';
  if (!phone) errors.phone = 'required';
  if (!city) errors.city = 'required';
  if (!country) errors.country = 'required';
  if (!spokenLanguages) errors.spokenLanguages = 'required';
  if (!workingLanguages) errors.workingLanguages = 'required';

  // Einsatzland muss aus der hinterlegten Länderliste stammen.
  const assignmentCountry = text(form.get('assignmentCountry'), 2).toUpperCase();
  if (!COUNTRY_REQUIREMENTS_BY_CODE.has(assignmentCountry)) {
    errors.assignmentCountry = 'required';
  }

  const fields: ApplicationField[] = pickMany(form.getAll('fields'), APPLICATION_FIELDS);
  if (fields.length === 0) errors.fields = 'required';

  const serviceModes: ServiceMode[] = pickMany(form.getAll('serviceModes'), SERVICE_MODES);
  if (serviceModes.length === 0) errors.serviceModes = 'required';

  const deliveryModes: DeliveryMode[] = pickMany(form.getAll('deliveryModes'), DELIVERY_MODES);
  if (deliveryModes.length === 0) errors.deliveryModes = 'required';

  const travelRange: TravelRange | null = pickOne(form.get('travelRange'), TRAVEL_RANGES);
  if (!travelRange) errors.travelRange = 'required';

  const availability: Availability | null = pickOne(
    form.get('availability'),
    AVAILABILITY_OPTIONS,
  );
  if (!availability) errors.availability = 'required';

  const experience: ExperienceLevel | null = pickOne(
    form.get('experience'),
    EXPERIENCE_LEVELS,
  );
  if (!experience) errors.experience = 'required';

  if (form.get('consent') !== 'on' && form.get('consent') !== 'true') {
    errors.consent = 'required';
  }

  // Alle vier Bestätigungen sind Pflicht.
  for (const confirmation of CONFIRMATIONS) {
    const value = form.get(`confirm.${confirmation}`);
    if (value !== 'on' && value !== 'true') {
      errors[`confirm.${confirmation}`] = 'required';
    }
  }

  const documents: Partial<Record<DocumentKind, UploadedFile[]>> = {};
  for (const kind of DOCUMENT_KINDS) {
    const files = await collectDocuments(form, kind, errors);
    if (files.length > 0) documents[kind] = files;
  }

  if (Object.keys(errors).length > 0 || !travelRange || !availability || !experience) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    errors: {},
    application: {
      assignmentCountry,
      documents,
      firstName,
      lastName,
      email,
      phone,
      city,
      country,
      nationality,
      spokenLanguages,
      workingLanguages,
      fields,
      serviceModes,
      deliveryModes,
      travelRange,
      availability,
      experience,
      message,
      receivedAt: new Date(),
      locale,
    },
  };
}
