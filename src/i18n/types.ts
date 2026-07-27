import type { PageId } from './config';

/**
 * Nachsichtiger Typ für den Fall, dass eine Sprachfassung vorübergehend
 * unvollständig ist – etwa während ein neuer Abschnitt übersetzt wird.
 *
 * Derzeit nutzt ihn keine Datei: Alle 17 Fassungen sind vollständig und
 * annotieren `Dictionary`, damit TypeScript fehlende Schlüssel meldet.
 * getDictionary() ergänzt Lücken zusätzlich zur Laufzeit aus dem Deutschen
 * und warnt beim Build, falls doch einmal eine entsteht.
 */
export type LocaleDictionary = {
  [Section in keyof Dictionary]?: Partial<Dictionary[Section]>;
};

/** Karte mit Titel, Beschreibung und optionalen Stichpunkten. */
export interface Card {
  title: string;
  text: string;
}

export interface CardWithBullets extends Card {
  bullets: string[];
}

export interface Section {
  title: string;
  body: string[];
}

/**
 * Vollständiges Übersetzungsschema.
 *
 * TypeScript erzwingt, dass jede Sprachdatei sämtliche Schlüssel liefert –
 * eine fehlende Übersetzung führt zum Build-Fehler, nicht zu einer leeren Seite.
 *
 * Nicht übersetzt werden bewusst: Firmenname, Personennamen, Telefonnummern,
 * E-Mail-Adressen, Anschrift, Steuernummer und Sprachbezeichnungen der
 * Angebotsliste (diese stehen in src/data/languages.ts).
 */
export interface Dictionary {
  /** Menütitel je Seite. */
  nav: Record<PageId, string>;

  ui: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    languageSwitcher: string;
    languageSwitcherHint: string;
    currentLanguage: string;
    breadcrumb: string;
    home: string;
    phone: string;
    mobile: string;
    fax: string;
    email: string;
    address: string;
    postalAddress: string;
    callNow: string;
    writeEmail: string;
    requestQuote: string;
    learnMore: string;
    allLanguages: string;
    backToHome: string;
    legallyBindingNote: string;
    /** Beschriftung des durchgängig sichtbaren Bewerbungs-Buttons. */
    applyCta: string;
    applyCtaShort: string;
    /**
     * Hinweis auf die Sprachfassungen der Website.
     * Enthält {count} – wird zur Laufzeit durch die Zahl der tatsächlich
     * vorhandenen Sprachdateien ersetzt und kann dadurch nicht veralten.
     */
    websiteLanguages: string;
  };

  home: {
    metaTitle: string;
    metaDescription: string;
    heroKicker: string;
    heroTitle: string;
    heroLead: string;
    heroPrimary: string;
    heroSecondary: string;
    heroBadges: string[];
    statLanguages: string;
    statLanguagesLabel: string;
    statYears: string;
    statYearsLabel: string;
    statCoverage: string;
    statCoverageLabel: string;
    servicesTitle: string;
    servicesLead: string;
    servicesCta: string;
    audienceTitle: string;
    audienceLead: string;
    audienceCta: string;
    expertiseTitle: string;
    expertiseLead: string;
    languagesTitle: string;
    languagesLead: string;
    languagesCta: string;
    processTitle: string;
    processLead: string;
    process: Card[];
    valuesTitle: string;
    valuesLead: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };

  services: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    items: CardWithBullets[];
    noteTitle: string;
    noteText: string;
  };

  expertise: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    items: CardWithBullets[];
    noteTitle: string;
    noteText: string;
  };

  authorities: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    audienceTitle: string;
    audienceLead: string;
    /**
     * Klarstellung: Die genannten Stellen sind Zielgruppen unseres Angebots,
     * keine bestehenden Auftraggeber. Muss auf der Seite sichtbar sein.
     */
    audienceDisclaimer: string;
    audience: Card[];
    tendersTitle: string;
    tendersText: string;
    principlesTitle: string;
    principlesLead: string;
    principles: Card[];
    procurementTitle: string;
    procurementText: string;
    procurementBullets: string[];
  };

  business: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    items: Card[];
    processTitle: string;
    processLead: string;
    process: Card[];
    ctaTitle: string;
    ctaText: string;
  };

  coverage: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    baseTitle: string;
    baseText: string;

    /** Abschnitt „Bundesweit und europaweit im Einsatz“. */
    europeTitle: string;
    europeText: string;
    /** Konkrete Einsatzformen und Schwerpunkte als Aufzählung. */
    capabilities: string[];

    /**
     * Abschnitt zu europäischen Grenz- und Asylverfahren.
     * Formuliert ausschließlich Verfügbarkeit für Anfragen – keine bestehende
     * Zusammenarbeit mit Frontex, EUAA oder anderen Stellen.
     */
    bordersTitle: string;
    bordersText: string;
    bordersNote: string;

    /** Abschnitt „Europäische Einsatz- und Vermittlungsgebiete“. */
    countriesTitle: string;
    countriesNote: string;

    nationwideTitle: string;
    nationwideText: string;
    internationalTitle: string;
    internationalText: string;
    remoteTitle: string;
    remoteText: string;
  };

  languages: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    searchLabel: string;
    searchPlaceholder: string;
    clearSearch: string;
    resultsOne: string;
    resultsMany: string;
    noResults: string;
    noResultsHint: string;
    /** Schlüssel entsprechen den Gruppen-IDs in src/data/languages.ts. */
    groupTitles: Record<string, string>;
    groupIntros: Record<string, string>;
    missingTitle: string;
    missingText: string;
  };

  about: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    body: string[];
    quote: string;
    valuesTitle: string;
    values: Card[];
  };

  careers: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    requirementsTitle: string;
    requirements: string[];
    offerTitle: string;
    offer: string[];
    applyTitle: string;
    applyText: string;
    closing: string;
    /** Abschnitt „Warum mit Translation Admy zusammenarbeiten?“ */
    networkTitle: string;
    networkLead: string;
    benefits: Card[];
    ctaTitle: string;
    ctaText: string;
  };

  /** Bewerbungsseite für Dolmetscherinnen, Dolmetscher und Übersetzende. */
  apply: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;

    sectionPerson: string;
    sectionLanguages: string;
    sectionProfile: string;
    sectionDocuments: string;

    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    country: string;
    nationality: string;
    spokenLanguages: string;
    spokenLanguagesHint: string;
    workingLanguages: string;
    workingLanguagesHint: string;

    fieldsLabel: string;
    fieldsHint: string;
    /** Schlüssel entsprechen APPLICATION_FIELDS. */
    fieldLabels: Record<string, string>;

    serviceModesLabel: string;
    serviceModeLabels: Record<string, string>;

    deliveryModesLabel: string;
    deliveryModeLabels: Record<string, string>;

    travelLabel: string;
    travelLabels: Record<string, string>;

    availabilityLabel: string;
    availabilityLabels: Record<string, string>;

    experienceLabel: string;
    experienceLabels: Record<string, string>;

    messageLabel: string;
    messageHint: string;

    cvLabel: string;
    cvHint: string;
    certificatesLabel: string;
    certificatesHint: string;

    consent: string;
    optional: string;
    requiredHint: string;
    submit: string;
    sending: string;

    successTitle: string;
    successText: string;
    referenceLabel: string;

    errorTitle: string;
    errorText: string;
    errorNotDelivered: string;

    /** Fehlermeldungen; Schlüssel entsprechen den Codes aus validate.ts. */
    validation: Record<string, string>;

    /** Getrennte Upload-Felder je Dokumentart. */
    uploadLabels: Record<string, string>;
    uploadHint: string;
    /**
     * Hinweis, dass Führungszeugnisse bewusst nicht mit der Bewerbung
     * hochgeladen werden – sie werden erst bei konkretem Einsatz angefordert.
     */
    criminalRecordNotice: string;
    /** Hinweis, solange kein gesicherter Versand eingerichtet ist. */
    uploadBackendNotice: string;

    confirmationsTitle: string;
    /** Vier Pflichtbestätigungen vor dem Absenden. */
    confirmations: string[];
    privacyLinkText: string;
  };

  /**
   * Länderabhängige Voraussetzungen im Bewerbungsformular.
   * Bezeichnungen amtlicher Zeugnisse stehen in src/data/countries.ts und
   * werden bewusst nicht übersetzt.
   */
  requirements: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;

    countryLabel: string;
    countryPlaceholder: string;
    countryHint: string;

    /** Überschrift des dynamischen Bereichs; enthält {country}. */
    panelTitle: string;

    /** Klarstellung: Bildungsabschluss ist kein Sprachnachweis. */
    separationNotice: string;

    languageTitle: string;
    languageLead: string;
    languageItems: string[];

    educationTitle: string;
    educationLead: string;
    educationItems: string[];

    certLabel: string;
    entranceLabel: string;
    vocationalLabel: string;
    higherLabel: string;
    criminalLabel: string;

    legalTitle: string;
    legalItems: string[];

    clientTitle: string;
    clientText: string;

    /** Wird angezeigt, wo keine belastbare Zuordnung möglich ist. */
    individualNotice: string;
    /** Wird angezeigt, solange die fachliche Prüfung eines Landes aussteht. */
    reviewPending: string;

    sourcesLabel: string;
    fullRequirementsLink: string;
    backToApply: string;
  };

  contact: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    detailsTitle: string;
    formTitle: string;
    formLead: string;
    fieldName: string;
    fieldEmail: string;
    fieldOrg: string;
    fieldOrgHint: string;
    fieldSubject: string;
    fieldMessage: string;
    subjectOptions: string[];
    consent: string;
    requiredHint: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    mailtoNote: string;
    validationName: string;
    validationEmail: string;
    validationMessage: string;
    validationConsent: string;
  };

  imprint: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    providerTitle: string;
    representedBy: string;
    taxNumberLabel: string;
    /** Muss den Verweis auf § 27a UStG enthalten – rechtlich vorgeschrieben. */
    vatIdLabel: string;
    contactTitle: string;
    responsibleTitle: string;
    responsibleText: string;
    disputeTitle: string;
    disputeText: string;
    liabilityContentTitle: string;
    liabilityContentText: string;
    liabilityLinksTitle: string;
    liabilityLinksText: string;
    copyrightTitle: string;
    copyrightText: string;
  };

  privacy: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    lead: string;
    sections: Section[];
  };

  notFound: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    text: string;
    cta: string;
  };

  footer: {
    tagline: string;
    servicesHeading: string;
    companyHeading: string;
    contactHeading: string;
    legalHeading: string;
    copyright: string;
    languageHeading: string;
  };
}
