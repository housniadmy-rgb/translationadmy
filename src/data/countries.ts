/**
 * Länderbezogene Angaben zu Qualifikationsnachweisen.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * WICHTIGER HINWEIS ZUR VERBINDLICHKEIT
 *
 * Diese Datei sammelt die *üblichen Bezeichnungen* von Abschlüssen und
 * Nachweisen im jeweiligen Land. Sie trifft ausdrücklich KEINE Aussage
 * darüber, ob ein Abschluss einem deutschen Abschluss gleichwertig ist oder
 * anerkannt wird. Eine solche Feststellung treffen ausschließlich die
 * zuständigen amtlichen Anerkennungsstellen.
 *
 * Deshalb steht jedes Land auf `reviewStatus: 'needs-review'` und
 * `reviewedOn: null`. Erst wenn eine fachkundige Stelle ein Land geprüft hat,
 * darf der Status geändert und ein Datum eingetragen werden.
 *
 * Bezeichnungen amtlicher Zeugnisse und Zertifikate stehen bewusst in der
 * Originalsprache und werden in keiner Sprachfassung übersetzt – eine
 * Übersetzung würde den Namen des Dokuments verfälschen.
 * ────────────────────────────────────────────────────────────────────────────
 */

export interface OfficialSource {
  /** Name der Stelle, nicht übersetzt. */
  name: string;
  url: string;
}

export interface CountryRequirements {
  /** ISO-3166-1-Alpha-2; der Landesname kommt über Intl.DisplayNames. */
  code: string;

  /**
   * Im Land verbreitete Sprachzertifikate auf C1-/C2-Niveau.
   * Originalbezeichnungen der Anbieter, nicht übersetzt.
   */
  languageCertificates: string[];

  /** Bezeichnung der Hochschulzugangsberechtigung. */
  entranceQualification: string[];

  /** Typische Berufsbildungsabschlüsse. */
  vocationalQualification: string[];

  /** Typische Hochschulabschlüsse. */
  higherEducation: string[];

  /** Bezeichnung des Strafregister- bzw. Führungszeugnisnachweises. */
  criminalRecord: string[];

  /**
   * Maßgebliche amtliche Informationsquelle.
   * Bewusst nur amtliche Stellen und das ENIC-NARIC-Netzwerk – keine Blogs
   * oder kommerziellen Vergleichsportale.
   */
  sources: OfficialSource[];

  /** 'needs-review', bis eine fachkundige Stelle das Land geprüft hat. */
  reviewStatus: 'verified' | 'needs-review';

  /** ISO-Datum der letzten fachlichen Prüfung; null, solange keine erfolgt ist. */
  reviewedOn: string | null;
}

/** Für alle Länder gleichermaßen gültige, EU-weit definierte Grundlage. */
export const CEFR_REFERENCE: OfficialSource = {
  name: 'Common European Framework of Reference for Languages (Council of Europe)',
  url: 'https://www.coe.int/en/web/common-european-framework-reference-languages',
};

/** Europäisches Netzwerk der amtlichen Anerkennungsstellen. */
export const ENIC_NARIC: OfficialSource = {
  name: 'ENIC-NARIC – European Network of Information Centres',
  url: 'https://www.enic-naric.net/',
};

/**
 * Basisquellen, die für jedes Land gelten. Länder ergänzen darüber hinaus
 * nur Quellen, die eindeutig amtlich sind.
 */
const BASE_SOURCES: OfficialSource[] = [ENIC_NARIC, CEFR_REFERENCE];

function country(
  code: string,
  data: Omit<CountryRequirements, 'code' | 'reviewStatus' | 'reviewedOn' | 'sources'> & {
    sources?: OfficialSource[];
  },
): CountryRequirements {
  return {
    code,
    ...data,
    sources: [...(data.sources ?? []), ...BASE_SOURCES],
    // Bis zur fachlichen Prüfung bleibt jedes Land ungeprüft.
    reviewStatus: 'needs-review',
    reviewedOn: null,
  };
}

export const COUNTRY_REQUIREMENTS: CountryRequirements[] = [
  country('DE', {
    languageCertificates: [
      'Goethe-Zertifikat C1 / C2',
      'telc Deutsch C1 / C1 Hochschule',
      'TestDaF',
      'DSH-2 / DSH-3',
    ],
    entranceQualification: ['Allgemeine Hochschulreife (Abitur)', 'Fachhochschulreife'],
    vocationalQualification: ['Abschlusszeugnis einer anerkannten Berufsausbildung'],
    higherEducation: ['Bachelor', 'Master', 'Diplom', 'Magister', 'Staatsexamen'],
    criminalRecord: ['Führungszeugnis (Bundeszentralregister)'],
    sources: [
      { name: 'anabin – Datenbank der Kultusministerkonferenz', url: 'https://anabin.kmk.org/' },
      { name: 'Bundesamt für Justiz – Führungszeugnis', url: 'https://www.bundesjustizamt.de/' },
    ],
  }),

  country('AT', {
    languageCertificates: ['ÖSD Zertifikat C1 / C2', 'Goethe-Zertifikat C1 / C2'],
    entranceQualification: ['Reifeprüfung (Matura)', 'Reife- und Diplomprüfung'],
    vocationalQualification: ['Lehrabschlussprüfung', 'Abschluss einer berufsbildenden Schule'],
    higherEducation: ['Bachelor', 'Master', 'Diplomstudium'],
    criminalRecord: ['Strafregisterbescheinigung'],
  }),

  country('BE', {
    languageCertificates: ['DELF / DALF C1 – C2', 'CNaVT', 'Goethe-Zertifikat C1 / C2'],
    entranceQualification: [
      'Diploma secundair onderwijs',
      'Certificat d’enseignement secondaire supérieur (CESS)',
    ],
    vocationalQualification: ['Beroepssecundair onderwijs', 'Enseignement professionnel'],
    higherEducation: ['Bachelor', 'Master'],
    criminalRecord: [
      'Uittreksel uit het strafregister',
      'Extrait de casier judiciaire',
    ],
  }),

  country('BG', {
    languageCertificates: ['Сертификат за ниво C1 / C2 по ОЕЕР'],
    entranceQualification: ['Диплома за средно образование'],
    vocationalQualification: ['Свидетелство за професионална квалификация'],
    higherEducation: ['Диплома за висше образование (бакалавър, магистър)'],
    criminalRecord: ['Свидетелство за съдимост'],
  }),

  country('HR', {
    languageCertificates: ['Potvrda o poznavanju jezika na razini C1 / C2 (CEFR)'],
    entranceQualification: ['Svjedodžba o državnoj maturi'],
    vocationalQualification: ['Svjedodžba o završnom radu (strukovno obrazovanje)'],
    higherEducation: ['Diploma (sveučilišni / stručni studij)'],
    criminalRecord: ['Uvjerenje o nekažnjavanju'],
  }),

  country('EE', {
    languageCertificates: ['Keeleoskuse tunnistus tasemel C1 / C2 (CEFR)'],
    entranceQualification: ['Gümnaasiumi lõputunnistus'],
    vocationalQualification: ['Kutseõppe lõputunnistus'],
    higherEducation: ['Bakalaureusekraad', 'Magistrikraad'],
    criminalRecord: ['Karistusregistri teade'],
  }),

  country('FI', {
    languageCertificates: [
      'Yleinen kielitutkinto (YKI), ylin taso',
      'Kielitodistus tasolla C1 / C2 (CEFR)',
    ],
    entranceQualification: ['Ylioppilastutkintotodistus'],
    vocationalQualification: ['Ammatillinen perustutkinto', 'Ammattitutkinto'],
    higherEducation: ['Kandidaatin tutkinto', 'Maisterin tutkinto'],
    criminalRecord: ['Rikosrekisteriote'],
  }),

  country('FR', {
    languageCertificates: ['DALF C1 / C2', 'TCF', 'DELF'],
    entranceQualification: ['Baccalauréat général / technologique / professionnel'],
    vocationalQualification: ['CAP', 'BTS', 'Titre professionnel'],
    higherEducation: ['Licence', 'Master', 'Doctorat'],
    criminalRecord: ['Bulletin n° 3 du casier judiciaire'],
  }),

  country('GR', {
    languageCertificates: ['Κρατικό Πιστοποιητικό Γλωσσομάθειας (επίπεδο Γ1 / Γ2)'],
    entranceQualification: ['Απολυτήριο Γενικού Λυκείου'],
    vocationalQualification: ['Πτυχίο ΙΕΚ', 'Πτυχίο ΕΠΑΛ'],
    higherEducation: ['Πτυχίο ΑΕΙ', 'Μεταπτυχιακό δίπλωμα'],
    criminalRecord: ['Αντίγραφο Ποινικού Μητρώου'],
  }),

  country('HU', {
    languageCertificates: ['Államilag elismert nyelvvizsga C1 szinten', 'ECL C1'],
    entranceQualification: ['Érettségi bizonyítvány'],
    vocationalQualification: ['Szakmai bizonyítvány', 'Technikusi oklevél'],
    higherEducation: ['Alapfokozat (BA/BSc)', 'Mesterfokozat (MA/MSc)'],
    criminalRecord: ['Hatósági erkölcsi bizonyítvány'],
  }),

  country('IE', {
    languageCertificates: ['Language certificate at CEFR level C1 / C2'],
    entranceQualification: ['Leaving Certificate'],
    vocationalQualification: ['QQI Level 5 / 6 award'],
    higherEducation: ['Bachelor’s degree', 'Master’s degree'],
    criminalRecord: ['Garda Vetting Disclosure', 'Police Certificate'],
  }),

  country('IT', {
    languageCertificates: ['CILS C1 / C2', 'CELI 4 / CELI 5', 'PLIDA C1 / C2'],
    entranceQualification: ['Diploma di esame di Stato (maturità)'],
    vocationalQualification: ['Qualifica professionale', 'Diploma professionale (IeFP)'],
    higherEducation: ['Laurea triennale', 'Laurea magistrale'],
    criminalRecord: ['Certificato del casellario giudiziale'],
  }),

  country('LV', {
    languageCertificates: ['Valsts valodas prasmes apliecība (C līmenis)'],
    entranceQualification: ['Atestāts par vispārējo vidējo izglītību'],
    vocationalQualification: ['Profesionālās kvalifikācijas apliecība'],
    higherEducation: ['Bakalaura diploms', 'Maģistra diploms'],
    criminalRecord: ['Izziņa no Sodu reģistra'],
  }),

  country('LT', {
    languageCertificates: ['Valstybinės kalbos mokėjimo pažymėjimas (III kategorija)'],
    entranceQualification: ['Brandos atestatas'],
    vocationalQualification: ['Profesinio mokymo diplomas'],
    higherEducation: ['Bakalauro diplomas', 'Magistro diplomas'],
    criminalRecord: ['Pažyma apie teistumą'],
  }),

  country('MT', {
    languageCertificates: ['Language certificate at CEFR level C1 / C2'],
    entranceQualification: ['Matriculation Certificate'],
    vocationalQualification: ['MQF Level 4 / 5 award'],
    higherEducation: ['Bachelor’s degree', 'Master’s degree'],
    criminalRecord: ['Police Conduct Certificate'],
  }),

  country('NL', {
    languageCertificates: ['CNaVT – Educatief Professioneel (C1)', 'NT2 Staatsexamen Programma II'],
    entranceQualification: ['VWO-diploma', 'HAVO-diploma'],
    vocationalQualification: ['Mbo-diploma (niveau 3 / 4)'],
    higherEducation: ['Hbo-bachelor', 'Wo-bachelor', 'Master'],
    criminalRecord: ['Verklaring Omtrent het Gedrag (VOG)'],
  }),

  country('PL', {
    languageCertificates: ['Certyfikat znajomości języka na poziomie C1 / C2 (ESOKJ)'],
    entranceQualification: ['Świadectwo dojrzałości (matura)'],
    vocationalQualification: ['Dyplom zawodowy', 'Świadectwo kwalifikacji zawodowej'],
    higherEducation: ['Dyplom licencjata', 'Dyplom magistra'],
    criminalRecord: ['Zaświadczenie o niekaralności (Krajowy Rejestr Karny)'],
  }),

  country('RO', {
    languageCertificates: ['Certificat de competență lingvistică nivel C1 / C2 (CECRL)'],
    entranceQualification: ['Diplomă de bacalaureat'],
    vocationalQualification: ['Certificat de calificare profesională'],
    higherEducation: ['Diplomă de licență', 'Diplomă de master'],
    criminalRecord: ['Certificat de cazier judiciar'],
  }),

  country('ES', {
    languageCertificates: ['DELE C1 / C2 (Instituto Cervantes)', 'SIELE', 'Certificado EOI nivel C1 / C2'],
    entranceQualification: ['Título de Bachiller'],
    vocationalQualification: [
      'Título de Técnico (Formación Profesional de Grado Medio)',
      'Título de Técnico Superior (Grado Superior)',
    ],
    higherEducation: ['Título de Grado', 'Título de Máster'],
    criminalRecord: ['Certificado de Antecedentes Penales'],
  }),
];

/** Schneller Zugriff über den Ländercode. */
export const COUNTRY_REQUIREMENTS_BY_CODE = new Map(
  COUNTRY_REQUIREMENTS.map((entry) => [entry.code, entry]),
);

/** Länder, für die noch eine fachliche Prüfung aussteht. */
export function countriesNeedingReview(): string[] {
  return COUNTRY_REQUIREMENTS.filter((entry) => entry.reviewStatus === 'needs-review').map(
    (entry) => entry.code,
  );
}
