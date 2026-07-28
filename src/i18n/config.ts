/**
 * Sprach- und Routing-Konfiguration.
 *
 * Die Sprachauswahl deckt die EU-Amtssprachen ab, die im Kontext von
 * EU-Außengrenzen, Asylverfahren, Aufnahmeeinrichtungen sowie Einsätzen
 * von Frontex und EUAA am häufigsten benötigt werden.
 *
 * Deutsch ist die Hauptsprache (x-default).
 */

export const LOCALES = [
  'de',
  'en',
  'fr',
  'it',
  'es',
  'el',
  'bg',
  'ro',
  'pl',
  'hu',
  'hr',
  'mt',
  'lt',
  'lv',
  'et',
  'fi',
  'nl',
  // Arabisch: keine EU-Amtssprache, im Asyl- und Grenzkontext aber die am
  // häufigsten benötigte Sprache. Läuft von rechts nach links – siehe RTL_LOCALES.
  'ar',
] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'de';

/** Endonyme für den Sprachumschalter – bewusst in der jeweiligen Sprache selbst. */
export const LOCALE_NAMES: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Français',
  it: 'Italiano',
  es: 'Español',
  el: 'Ελληνικά',
  bg: 'Български',
  ro: 'Română',
  pl: 'Polski',
  hu: 'Magyar',
  hr: 'Hrvatski',
  mt: 'Malti',
  lt: 'Lietuvių',
  lv: 'Latviešu',
  et: 'Eesti',
  fi: 'Suomi',
  nl: 'Nederlands',
  ar: 'العربية',
};

/** BCP-47-Tags für das lang-Attribut und hreflang. */
export const LOCALE_TAGS: Record<Locale, string> = {
  de: 'de-DE',
  en: 'en',
  fr: 'fr',
  it: 'it',
  es: 'es',
  el: 'el',
  bg: 'bg',
  ro: 'ro',
  pl: 'pl',
  hu: 'hu',
  hr: 'hr',
  mt: 'mt',
  lt: 'lt',
  lv: 'lv',
  et: 'et',
  fi: 'fi',
  nl: 'nl',
  ar: 'ar',
};

/**
 * Sprachen, die von rechts nach links gesetzt werden.
 *
 * Bewusst als Liste und nicht als Eigenschaft je Sprache: So bleibt an einer
 * Stelle sichtbar, welche Fassungen RTL sind, und ein Vergessen fällt auf.
 */
export const RTL_LOCALES: readonly Locale[] = ['ar'];

/** Textrichtung einer Sprache – für das dir-Attribut am <html>-Element. */
export function localeDirection(locale: Locale): 'ltr' | 'rtl' {
  return RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';
}

/** Alle Seitentypen der Website. */
export const PAGE_IDS = [
  'home',
  'services',
  'expertise',
  'authorities',
  'business',
  'coverage',
  'languages',
  'about',
  'careers',
  'apply',
  'requirements',
  'contact',
  'imprint',
  'privacy',
] as const;

export type PageId = (typeof PAGE_IDS)[number];

/**
 * Lokalisierte URL-Segmente. Suchmaschinenfreundlich in der jeweiligen Sprache.
 * Die Startseite hat ein leeres Segment: /de/, /en/, ...
 */
export const SLUGS: Record<PageId, Record<Locale, string>> = {
  home: {
    de: '', en: '', fr: '', it: '', es: '', el: '', bg: '', ro: '', pl: '',
    hu: '', hr: '', mt: '', lt: '', lv: '', et: '', fi: '', nl: '', ar: '',
  },
  services: {
    de: 'leistungen',
    en: 'services',
    fr: 'prestations',
    it: 'servizi',
    es: 'servicios',
    el: 'ypiresies',
    bg: 'uslugi',
    ro: 'servicii',
    pl: 'uslugi',
    hu: 'szolgaltatasok',
    hr: 'usluge',
    mt: 'servizzi',
    lt: 'paslaugos',
    lv: 'pakalpojumi',
    et: 'teenused',
    fi: 'palvelut',
    nl: 'diensten',
    ar: 'khadamat',
  },
  expertise: {
    de: 'fachgebiete',
    en: 'areas-of-expertise',
    fr: 'domaines-de-specialite',
    it: 'settori-di-specializzazione',
    es: 'areas-de-especializacion',
    el: 'tomeis-exeidikefsis',
    bg: 'oblasti-na-specializatsiya',
    ro: 'domenii-de-specializare',
    pl: 'dziedziny-specjalizacji',
    hu: 'szakteruletek',
    hr: 'podrucja-strucnosti',
    mt: 'oqsma-ta-specjalizzazzjoni',
    lt: 'specializacijos-sritys',
    lv: 'specializacijas-jomas',
    et: 'erialavaldkonnad',
    fi: 'erikoisalat',
    nl: 'vakgebieden',
    ar: 'majalat-al-takhassus',
  },
  authorities: {
    de: 'behoerden-und-institutionen',
    en: 'public-authorities',
    fr: 'autorites-et-institutions',
    it: 'autorita-e-istituzioni',
    es: 'autoridades-e-instituciones',
    el: 'dimosies-arches',
    bg: 'organi-i-institutsii',
    ro: 'autoritati-si-institutii',
    pl: 'urzedy-i-instytucje',
    hu: 'hatosagok-es-intezmenyek',
    hr: 'tijela-i-institucije',
    mt: 'awtoritajiet-u-istituzzjonijiet',
    lt: 'institucijos-ir-istaigos',
    lv: 'iestades-un-institucijas',
    et: 'ametiasutused-ja-institutsioonid',
    fi: 'viranomaiset-ja-instituutiot',
    nl: 'overheid-en-instellingen',
    ar: 'al-jihat-al-rasmiya',
  },
  business: {
    de: 'fuer-unternehmen',
    en: 'for-business',
    fr: 'pour-les-entreprises',
    it: 'per-le-imprese',
    es: 'para-empresas',
    el: 'gia-epicheiriseis',
    bg: 'za-biznesa',
    ro: 'pentru-companii',
    pl: 'dla-firm',
    hu: 'vallalatoknak',
    hr: 'za-tvrtke',
    mt: 'ghan-negozji',
    lt: 'imonems',
    lv: 'uznemumiem',
    et: 'ettevotetele',
    fi: 'yrityksille',
    nl: 'voor-bedrijven',
    ar: 'lil-sharikat',
  },
  coverage: {
    de: 'einsatzgebiete',
    en: 'coverage-areas',
    fr: 'zones-d-intervention',
    it: 'aree-di-intervento',
    es: 'areas-de-actuacion',
    el: 'perioches-drastiriotitas',
    bg: 'rayoni-na-deynost',
    ro: 'zone-de-actiune',
    pl: 'obszary-dzialania',
    hu: 'mukodesi-teruletek',
    hr: 'podrucja-djelovanja',
    mt: 'zoni-ta-operazzjoni',
    lt: 'veiklos-teritorijos',
    lv: 'darbibas-teritorijas',
    et: 'tegevuspiirkonnad',
    fi: 'toiminta-alueet',
    nl: 'inzetgebieden',
    ar: 'manatiq-al-amal',
  },
  languages: {
    de: 'sprachen',
    en: 'languages',
    fr: 'langues',
    it: 'lingue',
    es: 'idiomas',
    el: 'glosses',
    bg: 'ezitsi',
    ro: 'limbi',
    pl: 'jezyki',
    hu: 'nyelvek',
    hr: 'jezici',
    mt: 'lingwi',
    lt: 'kalbos',
    lv: 'valodas',
    et: 'keeled',
    fi: 'kielet',
    nl: 'talen',
    ar: 'al-lughat',
  },
  about: {
    de: 'ueber-uns',
    en: 'about-us',
    fr: 'a-propos',
    it: 'chi-siamo',
    es: 'sobre-nosotros',
    el: 'schetika-me-emas',
    bg: 'za-nas',
    ro: 'despre-noi',
    pl: 'o-nas',
    hu: 'rolunk',
    hr: 'o-nama',
    mt: 'dwarna',
    lt: 'apie-mus',
    lv: 'par-mums',
    et: 'meist',
    fi: 'tietoa-meista',
    nl: 'over-ons',
    ar: 'man-nahnu',
  },
  careers: {
    de: 'karriere',
    en: 'careers',
    fr: 'carrieres',
    it: 'lavora-con-noi',
    es: 'empleo',
    el: 'karieres',
    bg: 'kariera',
    ro: 'cariere',
    pl: 'kariera',
    hu: 'karrier',
    hr: 'karijera',
    mt: 'karrieri',
    lt: 'karjera',
    lv: 'karjera',
    et: 'karjaar',
    fi: 'ura',
    nl: 'werken-bij',
    ar: 'wazaif',
  },
  apply: {
    de: 'bewerbung',
    en: 'apply',
    fr: 'candidature',
    it: 'candidatura',
    es: 'candidatura',
    el: 'aitisi',
    bg: 'kandidatstvane',
    ro: 'aplicare',
    pl: 'aplikacja',
    hu: 'jelentkezes',
    hr: 'prijava',
    mt: 'applikazzjoni',
    lt: 'paraiska',
    lv: 'pieteikums',
    et: 'kandideerimine',
    fi: 'hakemus',
    nl: 'sollicitatie',
    ar: 'taqdim-talab',
  },
  requirements: {
    de: 'voraussetzungen',
    en: 'requirements',
    fr: 'conditions-requises',
    it: 'requisiti',
    es: 'requisitos',
    el: 'proypotheseis',
    bg: 'iziskvaniya',
    ro: 'cerinte',
    pl: 'wymagania',
    hu: 'feltetelek',
    hr: 'uvjeti',
    mt: 'rekwiziti',
    lt: 'reikalavimai',
    lv: 'prasibas',
    et: 'nouded',
    fi: 'edellytykset',
    nl: 'voorwaarden',
    ar: 'al-mutatalabat',
  },
  contact: {
    de: 'kontakt',
    en: 'contact',
    fr: 'contact',
    it: 'contatti',
    es: 'contacto',
    el: 'epikoinonia',
    bg: 'kontakti',
    ro: 'contact',
    pl: 'kontakt',
    hu: 'kapcsolat',
    hr: 'kontakt',
    mt: 'kuntatt',
    lt: 'kontaktai',
    lv: 'kontakti',
    et: 'kontakt',
    fi: 'yhteystiedot',
    nl: 'contact',
    ar: 'ittisal',
  },
  imprint: {
    de: 'impressum',
    en: 'legal-notice',
    fr: 'mentions-legales',
    it: 'note-legali',
    es: 'aviso-legal',
    el: 'nomikes-plirofories',
    bg: 'pravna-informatsiya',
    ro: 'informatii-legale',
    pl: 'nota-prawna',
    hu: 'impresszum',
    hr: 'pravne-informacije',
    mt: 'avviz-legali',
    lt: 'teisine-informacija',
    lv: 'juridiska-informacija',
    et: 'oiguslik-teave',
    fi: 'oikeudellinen-huomautus',
    nl: 'colofon',
    ar: 'bayanat-qanuniya',
  },
  privacy: {
    de: 'datenschutz',
    en: 'privacy-policy',
    fr: 'protection-des-donnees',
    it: 'privacy',
    es: 'proteccion-de-datos',
    el: 'prostasia-dedomenon',
    bg: 'zashtita-na-dannite',
    ro: 'protectia-datelor',
    pl: 'ochrona-danych',
    hu: 'adatvedelem',
    hr: 'zastita-podataka',
    mt: 'protezzjoni-tad-data',
    lt: 'duomenu-apsauga',
    lv: 'datu-aizsardziba',
    et: 'andmekaitse',
    fi: 'tietosuoja',
    nl: 'privacybeleid',
    ar: 'himayat-al-bayanat',
  },
};

/**
 * Navigation im Header – bewusst auf fünf Einträge begrenzt.
 *
 * Die Beschriftungen unterscheiden sich je Sprache stark in der Länge
 * (Maltesisch und Finnisch brauchen rund ein Drittel mehr Platz als Deutsch).
 * Mit sieben Einträgen passte die längste Fassung selbst auf breiten
 * Bildschirmen nicht mehr neben Sprachwahl und Buttons.
 *
 * „Einsatzgebiete“ und „Über uns“ bleiben über Footer, mobiles Menü und
 * Querverweise erreichbar – ein Test stellt sicher, dass keine Seite
 * unverlinkt bleibt.
 */
export const HEADER_NAV: PageId[] = [
  'services',
  'expertise',
  'authorities',
  'business',
  'languages',
];

/** Gruppierung für den Footer. */
export const FOOTER_NAV: { services: PageId[]; company: PageId[]; legal: PageId[] } = {
  services: ['services', 'expertise', 'languages', 'coverage'],
  company: ['about', 'authorities', 'business', 'careers', 'apply', 'requirements'],
  legal: ['contact', 'imprint', 'privacy'],
};
