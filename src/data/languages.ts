/**
 * Sprachangebot von Translation Admy.
 * Die Listen entsprechen der Aufstellung auf www.translationadmy.de/unsere-leistung.
 *
 * Die Sprachbezeichnungen werden bewusst nicht übersetzt – sie sind
 * Bestandteil des Angebots. Die Gruppen-Überschriften und -Einleitungen
 * liegen in den Sprachdateien unter `languages.groupIntros`.
 */

export interface LanguageGroup {
  id: 'asiatisch' | 'europaeisch' | 'nordafrikanisch' | 'afrikanisch';
  languages: string[];
}

export const LANGUAGE_GROUPS: LanguageGroup[] = [
  {
    id: 'asiatisch',
    languages: [
      'Arabisch',
      'Assyrisch',
      'Aserbaidschanisch',
      'Azeri',
      'Belutschi',
      'Bengali',
      'Chinesisch',
      'Dari',
      'Farsi',
      'Hindi',
      'Indonesisch',
      'Japanisch',
      'Koreanisch',
      'Kurdisch (Badinani)',
      'Kurdisch (Feili)',
      'Kurdisch (Gorani)',
      'Kurdisch (Kurmanci)',
      'Kurdisch (Sorani)',
      'Kurdisch (Zaza)',
      'Luri',
      'Mandarin',
      'Nepali',
      'Paschaie',
      'Paschto',
      'Punjabi',
      'Singhalesisch',
      'Tadschikisch',
      'Tagalog',
      'Tamil',
      'Türkisch',
      'Uigurisch',
      'Urdu',
      'Usbekisch',
      'Vietnamesisch',
    ],
  },
  {
    id: 'europaeisch',
    languages: [
      'Albanisch',
      'Armenisch',
      'Bosnisch',
      'Bulgarisch',
      'Englisch',
      'Estnisch',
      'Finnisch',
      'Französisch',
      'Georgisch',
      'Griechisch',
      'Italienisch',
      'Lettisch',
      'Litauisch',
      'Mazedonisch',
      'Niederländisch',
      'Polnisch',
      'Portugiesisch',
      'Romani',
      'Rumänisch',
      'Russisch',
      'Schwedisch',
      'Serbokroatisch',
      'Spanisch',
      'Ukrainisch',
      'Ungarisch',
      'Weißrussisch',
    ],
  },
  {
    id: 'nordafrikanisch',
    languages: [
      'Maghrebinisch',
      'Tamazight',
      'Taqbailit (Kabylisch)',
      'Tarifit',
      'Taschelhit',
    ],
  },
  {
    id: 'afrikanisch',
    languages: [
      'Akan',
      'Amharisch',
      'Aschanti (Asante)',
      'Bambara',
      'Bamileke',
      'Bamun (Bamoun)',
      'Beni',
      'Diola',
      'Duala',
      'Edo',
      'Esan',
      'Ewe (Eve)',
      'Fe’fe’',
      'Fula',
      'Fulfulde',
      'Hausa',
      'Igbo',
      'Ishan',
      'Kanuri',
      'Kikuyu',
      'Kotokoli',
      'Kreolenglisch',
      'Kreolfranzösisch',
      'Lingala',
      'Luganda',
      'Luo',
      'Malinka',
      'Mandinka (Mandingo)',
      'Mina',
      'Mogamo',
      'Oromo',
      'Pidgin-Englisch',
      'Pidgin-Französisch',
      'Pulaar',
      'Senegalese',
      'Serer',
      'Somalisch',
      'Songhai',
      'Soninke',
      'Susu',
      'Swahili',
      'Temba',
      'Teve',
      'Tigre',
      'Tigrinia',
      'Tim',
      'Timu',
      'Twi',
      'Ukwani',
      'Wolof',
      'Yamba',
      'Yemba',
      'Yoruba',
      'Zarma',
    ],
  },
];

/** Eindeutige Sprachen über alle Gruppen hinweg (Aserbaidschanisch kam doppelt vor). */
export const UNIQUE_LANGUAGES: string[] = Array.from(
  new Set(LANGUAGE_GROUPS.flatMap((group) => group.languages)),
).sort((a, b) => a.localeCompare(b, 'de'));

export const LANGUAGE_COUNT = UNIQUE_LANGUAGES.length;

/**
 * Konservativ abgerundete Angabe für Marketingtexte.
 * tests/content.test.ts stellt sicher, dass die Zahl nie überschritten wird.
 */
export const LANGUAGE_COUNT_ROUNDED = Math.floor(LANGUAGE_COUNT / 10) * 10;

/** Häufig nachgefragte Sprachen – Vorschau auf der Startseite. */
export const FEATURED_LANGUAGES: string[] = [
  'Arabisch',
  'Türkisch',
  'Kurdisch (Sorani)',
  'Kurdisch (Kurmanci)',
  'Farsi',
  'Dari',
  'Paschto',
  'Tigrinia',
  'Somalisch',
  'Russisch',
  'Ukrainisch',
  'Rumänisch',
  'Bulgarisch',
  'Albanisch',
  'Französisch',
  'Englisch',
];
