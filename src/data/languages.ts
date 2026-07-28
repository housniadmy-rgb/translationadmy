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

/**
 * Eigenbezeichnungen (Autonyme) der angebotenen Sprachen.
 *
 * Angezeigt wird im Sprachverzeichnis das Autonym zuerst und die deutsche
 * Bezeichnung darunter. Beides hat seinen Zweck: Das Autonym erkennt, wer die
 * Sprache spricht – oft ohne Deutschkenntnisse; die deutsche Bezeichnung
 * brauchen Behörden und Unternehmen, die den Einsatz bestellen, und sie trägt
 * die Suchbegriffe. Die Suche vergleicht beide Schreibweisen.
 *
 * Nicht jeder Eintrag hat ein belegbares Autonym: Sammelbezeichnungen wie
 * „Pidgin-Französisch“ oder kleine Sprachen ohne verschriftlichte Norm stehen
 * bewusst NICHT in dieser Liste. Dort erscheint allein die deutsche
 * Bezeichnung – eine erfundene Eigenbezeichnung wäre schlimmer als keine.
 */
export const LANGUAGE_AUTONYMS: Record<string, string> = {
  // Asiatische und vorderasiatische Sprachen
  Arabisch: 'العربية',
  Assyrisch: 'ܣܘܪܝܝܐ',
  Aserbaidschanisch: 'Azərbaycanca',
  Azeri: 'Azərbaycan dili',
  Belutschi: 'بلۏچی',
  Bengali: 'বাংলা',
  Chinesisch: '中文',
  Dari: 'دری',
  Farsi: 'فارسی',
  Hindi: 'हिन्दी',
  Indonesisch: 'Bahasa Indonesia',
  Japanisch: '日本語',
  Koreanisch: '한국어',
  'Kurdisch (Badinani)': 'کوردیی بادینی',
  'Kurdisch (Feili)': 'کوردیی فەیلی',
  'Kurdisch (Gorani)': 'گۆرانی',
  'Kurdisch (Kurmanci)': 'Kurmancî',
  'Kurdisch (Sorani)': 'کوردیی سۆرانی',
  'Kurdisch (Zaza)': 'Zazakî',
  Luri: 'لۊری',
  Mandarin: '普通话',
  Nepali: 'नेपाली',
  Paschaie: 'پشه‌ای',
  Paschto: 'پښتو',
  Punjabi: 'ਪੰਜਾਬੀ',
  Singhalesisch: 'සිංහල',
  Tadschikisch: 'тоҷикӣ',
  Tagalog: 'Tagalog',
  Tamil: 'தமிழ்',
  Türkisch: 'Türkçe',
  Uigurisch: 'ئۇيغۇرچە',
  Urdu: 'اردو',
  Usbekisch: 'Oʻzbekcha',
  Vietnamesisch: 'Tiếng Việt',

  // Europäische Sprachen
  Albanisch: 'Shqip',
  Armenisch: 'Հայերեն',
  Bosnisch: 'Bosanski',
  Bulgarisch: 'Български',
  Englisch: 'English',
  Estnisch: 'Eesti',
  Finnisch: 'Suomi',
  Französisch: 'Français',
  Georgisch: 'ქართული',
  Griechisch: 'Ελληνικά',
  Italienisch: 'Italiano',
  Lettisch: 'Latviešu',
  Litauisch: 'Lietuvių',
  Mazedonisch: 'Македонски',
  Niederländisch: 'Nederlands',
  Polnisch: 'Polski',
  Portugiesisch: 'Português',
  Romani: 'Romani čhib',
  Rumänisch: 'Română',
  Russisch: 'Русский',
  Schwedisch: 'Svenska',
  Serbokroatisch: 'Srpskohrvatski / Српскохрватски',
  Spanisch: 'Español',
  Ukrainisch: 'Українська',
  Ungarisch: 'Magyar',
  Weißrussisch: 'Беларуская',

  // Nordafrikanische Sprachen
  Maghrebinisch: 'الدارجة',
  Tamazight: 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
  'Taqbailit (Kabylisch)': 'ⵜⴰⵇⴱⴰⵢⵍⵉⵜ',
  Tarifit: 'ⵜⴰⵔⵉⴼⵉⵜ',
  Taschelhit: 'ⵜⴰⵛⵍⵃⵉⵜ',

  // Afrikanische Sprachen
  Akan: 'Akan',
  Amharisch: 'አማርኛ',
  'Aschanti (Asante)': 'Asante Twi',
  Bambara: 'Bamanankan',
  'Bamun (Bamoun)': 'Shüpamom',
  Diola: 'Joola',
  Duala: 'Duálá',
  Edo: 'Ẹ̀dó',
  Esan: 'Esan',
  'Ewe (Eve)': 'Eʋegbe',
  'Fe’fe’': 'Fè’éfě’è',
  Fula: 'Pulaar',
  Fulfulde: 'Fulfulde',
  Hausa: 'Hausa',
  Igbo: 'Igbo',
  Kanuri: 'Kanuri',
  Kikuyu: 'Gĩkũyũ',
  Kotokoli: 'Tem',
  Lingala: 'Lingála',
  Luganda: 'Luganda',
  Luo: 'Dholuo',
  Malinka: 'Maninkakan',
  'Mandinka (Mandingo)': 'Mandinka',
  Oromo: 'Afaan Oromoo',
  Pulaar: 'Pulaar',
  Serer: 'Seereer',
  Somalisch: 'Soomaali',
  Songhai: 'Soŋay',
  Soninke: 'Sooninkanxanne',
  Susu: 'Sosoxui',
  Swahili: 'Kiswahili',
  Tigre: 'ትግረ',
  Tigrinia: 'ትግርኛ',
  Twi: 'Twi',
  Ukwani: 'Ukwuani',
  Wolof: 'Wolof',
  Yemba: 'Yemba',
  Yoruba: 'Yorùbá',
  Zarma: 'Zarmaciine',
};

/**
 * Sprachen, deren Autonym in einer von rechts nach links geschriebenen
 * Schrift steht (arabische und syrische Schrift). Sie brauchen im Markup
 * dir="rtl", sonst rücken Klammern und Zusätze auf die falsche Seite.
 *
 * Nicht enthalten sind Amharisch, Tigre und Tigrinia (äthiopische Schrift)
 * sowie die Tifinagh-Schrift der Berbersprachen – beide laufen von links
 * nach rechts.
 */
export const RTL_SCRIPT_LANGUAGES: ReadonlySet<string> = new Set([
  'Arabisch',
  'Assyrisch',
  'Belutschi',
  'Dari',
  'Farsi',
  'Kurdisch (Badinani)',
  'Kurdisch (Feili)',
  'Kurdisch (Gorani)',
  'Kurdisch (Sorani)',
  'Luri',
  'Maghrebinisch',
  'Paschaie',
  'Paschto',
  'Uigurisch',
  'Urdu',
]);

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
