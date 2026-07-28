/**
 * Zentrale Stammdaten.
 * Firmenname, Personennamen, Anschrift, Telefonnummern, E-Mail-Adresse und
 * Steuernummer stammen 1:1 von www.translationadmy.de und werden bewusst
 * in keiner Sprachfassung übersetzt.
 */

export const SITE_URL = 'https://www.translationadmy.de';

export const SITE = {
  name: 'Translation Admy',
  legalName: 'Dolmetscherbüro Translation Admy',
  experienceYears: 10,
} as const;

/**
 * Kontaktdaten in der vom Auftraggeber vorgegebenen Schreibweise.
 * Die *Href*-Varianten enthalten dieselbe Nummer nur ohne Leerzeichen –
 * so bleibt die Anzeige lesbar und der Link auf Mobilgeräten wählbar.
 */
export const CONTACT = {
  phone: '+49 6721 9875872',
  phoneHref: 'tel:+4967219875872',
  fax: '+49 6721 9875873',
  faxHref: 'fax:+4967219875873',
  mobile: '+49 176 614 174 09',
  mobileHref: 'tel:+4917661417409',
  email: 'translationadmy@web.de',
  emailHref: 'mailto:translationadmy@web.de',
} as const;

export const ADDRESS = {
  street: 'Berlinstraße 37',
  postalCode: '55411',
  city: 'Bingen am Rhein',
  region: 'Rheinland-Pfalz',
  country: 'Deutschland',
  countryCode: 'DE',
} as const;

/**
 * Pflichtangaben der Anbieterkennzeichnung.
 *
 * Firmenname, Anschrift, Inhaber und Steuernummer stammen unverändert von
 * www.translationadmy.de. Die Umsatzsteuer-Identifikationsnummer wurde
 * zusätzlich vom Auftraggeber übermittelt.
 *
 * BEWUSST NICHT ENTHALTEN, weil nicht belegt: Handelsregisternummer,
 * Registergericht, zuständige Kammer, Aufsichtsbehörde, Berufsbezeichnung
 * und berufsrechtliche Regelungen. Diese Angaben sind nur zu ergänzen, wenn
 * sie tatsächlich zutreffen – erfundene Angaben wären ein Abmahnrisiko.
 */
export const LEGAL = {
  representedBy: 'Housni Admy',
  taxNumber: '08/001/00039',
  vatId: 'DE410290042',
} as const;

/**
 * Europäische Einsatz- und Vermittlungsgebiete, für die das Dolmetschernetzwerk
 * aufgebaut wird – passend zu den Sprachfassungen dieser Website.
 *
 * Bewusst als ISO-3166-Codes hinterlegt: Die Ländernamen werden zur Laufzeit
 * über Intl.DisplayNames in der jeweiligen Seitensprache ausgegeben. Dadurch
 * sind sie in allen 18 Fassungen korrekt, ohne 18 × 19 Namen zu pflegen.
 *
 * Es handelt sich ausdrücklich um mögliche Einsatzgebiete, nicht um
 * Niederlassungen oder zugesagte Verfügbarkeiten.
 */
export const COVERAGE_COUNTRIES: string[] = [
  'DE', // Sitz des Büros
  'AT',
  'BE',
  'BG',
  'HR',
  'EE',
  'FI',
  'FR',
  'GR',
  'HU',
  'IE',
  'IT',
  'LV',
  'LT',
  'MT',
  'NL',
  'PL',
  'RO',
  'ES',
];

/**
 * Endpunkt für das Kontaktformular (z. B. Formspree oder eigener Handler).
 * Ohne gesetzte Variable fällt das Formular auf einen vorbereiteten
 * E-Mail-Entwurf zurück – die Seite funktioniert also auch ohne Backend.
 */
export const CONTACT_ENDPOINT: string = import.meta.env.PUBLIC_CONTACT_ENDPOINT ?? '';
