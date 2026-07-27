/**
 * Fachliches Modell einer Dolmetscher-Bewerbung.
 *
 * Dieses Modul ist bewusst frei von HTTP-, Mail- oder Datenbankdetails.
 * Es ist die eine Stelle, an der die Struktur einer Bewerbung definiert ist –
 * Formular, Validierung, Versand und ein späterer Datenbank-Store greifen
 * alle auf dieselben Typen zu.
 */

/** Art der Tätigkeit. */
export const SERVICE_MODES = ['interpreting', 'translation'] as const;
export type ServiceMode = (typeof SERVICE_MODES)[number];

/** Einsatzform. */
export const DELIVERY_MODES = ['onsite', 'phone', 'video'] as const;
export type DeliveryMode = (typeof DELIVERY_MODES)[number];

/** Fachgebiete, in denen Bewerbende eingesetzt werden können. */
export const APPLICATION_FIELDS = [
  'asylum',
  'authorities',
  'police',
  'courts',
  'medical',
  'social',
  'education',
  'business',
  'technical',
] as const;
export type ApplicationField = (typeof APPLICATION_FIELDS)[number];

/** Reisebereitschaft. */
export const TRAVEL_RANGES = ['local', 'regional', 'national', 'european'] as const;
export type TravelRange = (typeof TRAVEL_RANGES)[number];

/** Umfang der Verfügbarkeit. */
export const AVAILABILITY_OPTIONS = [
  'fulltime',
  'parttime',
  'occasional',
  'on-call',
] as const;
export type Availability = (typeof AVAILABILITY_OPTIONS)[number];

/** Berufserfahrung in Jahren. */
export const EXPERIENCE_LEVELS = ['lt1', '1-3', '3-5', '5-10', 'gt10'] as const;
export type ExperienceLevel = (typeof EXPERIENCE_LEVELS)[number];

/** Eine hochgeladene Datei in transportneutraler Form. */
export interface UploadedFile {
  filename: string;
  mimeType: string;
  size: number;
  content: Uint8Array;
}

/**
 * Dokumentarten, die getrennt hochgeladen werden können.
 *
 * Ein Strafregister- bzw. Führungszeugnisnachweis fehlt hier bewusst:
 * Er wird erst angefordert, wenn er für einen konkreten Einsatz erforderlich
 * ist, und nicht schon mit der Erstbewerbung erhoben.
 */
export const DOCUMENT_KINDS = [
  'cv',
  'languageCertificate',
  'schoolCertificate',
  'vocationalCertificate',
  'degree',
  'residencePermit',
  'workPermit',
  'other',
] as const;
export type DocumentKind = (typeof DOCUMENT_KINDS)[number];

/** Nur der Lebenslauf ist Pflicht. */
export const REQUIRED_DOCUMENTS: DocumentKind[] = ['cv'];

/** Pflichtbestätigungen vor dem Absenden. */
export const CONFIRMATIONS = [
  'requirementsRead',
  'workPermit',
  'truthful',
  'individualReview',
] as const;
export type Confirmation = (typeof CONFIRMATIONS)[number];

/** Vollständige, bereits validierte Bewerbung. */
export interface Application {
  /** ISO-3166-Code des Wohnsitz- bzw. Einsatzlandes. */
  assignmentCountry: string;
  /** Hochgeladene Dateien je Dokumentart. */
  documents: Partial<Record<DocumentKind, UploadedFile[]>>;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  /** Freiwillige Angabe. */
  nationality: string;
  /** Gesprochene Sprachen, frei erfasst. */
  spokenLanguages: string;
  /** Arbeitssprachen, z. B. "Arabisch → Deutsch". */
  workingLanguages: string;
  fields: ApplicationField[];
  serviceModes: ServiceMode[];
  deliveryModes: DeliveryMode[];
  travelRange: TravelRange;
  availability: Availability;
  experience: ExperienceLevel;
  message: string;
  /** Zeitpunkt des Eingangs, gesetzt vom Service. */
  receivedAt: Date;
  /** Sprachfassung, aus der die Bewerbung kam – für die Rückmeldung. */
  locale: string;
}

/** Feldbezogene Fehlermeldungen; Schlüssel entsprechen den Formularfeldern. */
export type ValidationErrors = Record<string, string>;

export interface ValidationResult {
  ok: boolean;
  errors: ValidationErrors;
  application?: Application;
}

/** Grenzen für Uploads – auch serverseitig durchgesetzt. */
export const UPLOAD_LIMITS = {
  cvMaxBytes: 8 * 1024 * 1024,
  certificateMaxBytes: 8 * 1024 * 1024,
  maxCertificates: 5,
  /** Obergrenze je Dokumentart, damit ein Upload nicht zum Massenversand wird. */
  maxFilesPerKind: 5,
  allowedMimeTypes: [
    'application/pdf',
    'image/jpeg',
    'image/png',
  ] as const,
  allowedExtensions: ['.pdf', '.jpg', '.jpeg', '.png'] as const,
} as const;
