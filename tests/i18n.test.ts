import { describe, expect, it } from 'vitest';

import { LOCALES, PAGE_IDS, DEFAULT_LOCALE, type Locale } from '../src/i18n/config';
import type { Dictionary } from '../src/i18n/types';

/**
 * Lädt alle Sprachdateien direkt aus dem Dateisystem – unabhängig von Astro,
 * damit die Prüfung auch ohne Build läuft.
 */
const modules = import.meta.glob<{ default: Dictionary }>('../src/i18n/locales/*.ts', {
  eager: true,
});

const dictionaries = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [
    path.replace(/.*\/locales\//, '').replace('.ts', ''),
    mod.default,
  ]),
) as Record<string, Dictionary>;

const german = dictionaries[DEFAULT_LOCALE]!;

/** Sammelt alle Schlüsselpfade eines Objekts, damit Fassungen vergleichbar sind. */
function keyPaths(value: unknown, prefix = ''): string[] {
  if (Array.isArray(value)) {
    // Arrays: Struktur des ersten Eintrags zählt, die Länge prüfen wir separat.
    return value.length > 0 ? keyPaths(value[0], `${prefix}[]`) : [prefix];
  }
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) =>
      keyPaths(child, prefix ? `${prefix}.${key}` : key),
    );
  }
  return [prefix];
}

/** Alle Zeichenketten eines Wörterbuchs mit ihrem Pfad. */
function stringEntries(value: unknown, prefix = ''): [string, string][] {
  if (typeof value === 'string') return [[prefix, value]];
  if (Array.isArray(value)) {
    return value.flatMap((child, index) => stringEntries(child, `${prefix}[${index}]`));
  }
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) =>
      stringEntries(child, prefix ? `${prefix}.${key}` : key),
    );
  }
  return [];
}

describe('Übersetzungen', () => {
  it('für jede konfigurierte Sprache existiert eine Datei', () => {
    for (const locale of LOCALES) {
      expect(dictionaries[locale], `Sprachdatei fehlt: ${locale}.ts`).toBeDefined();
    }
  });

  it('enthält keine überzähligen Sprachdateien', () => {
    for (const code of Object.keys(dictionaries)) {
      expect(
        (LOCALES as readonly string[]).includes(code),
        `${code}.ts ist nicht in LOCALES eingetragen`,
      ).toBe(true);
    }
  });

  const germanKeys = keyPaths(german).sort();

  it('alle Sprachfassungen sind vollständig', () => {
    // Kein Abschnitt darf mehr auf die deutsche Fassung zurückfallen.
    const incomplete = LOCALES.filter((locale) => {
      const keys = keyPaths(dictionaries[locale]!);
      return germanKeys.some((key) => !keys.includes(key));
    });

    expect(incomplete, `unvollständige Fassungen: ${incomplete.join(', ')}`).toEqual([]);
  });

  it.each(LOCALES)('%s hat dieselbe Struktur wie die deutsche Fassung', (locale: Locale) => {
    const dictionary = dictionaries[locale];
    expect(dictionary).toBeDefined();
    const keys = keyPaths(dictionary!).sort();

    const missing = germanKeys.filter((key) => !keys.includes(key));
    const extra = keys.filter((key) => !germanKeys.includes(key));

    expect(missing, `fehlende Schlüssel in ${locale}`).toEqual([]);
    expect(extra, `unbekannte Schlüssel in ${locale}`).toEqual([]);
  });

  it.each(LOCALES)('%s enthält keine leeren Texte', (locale: Locale) => {
    const entries = stringEntries(dictionaries[locale]);
    const empty = entries.filter(([, value]) => value.trim() === '').map(([path]) => path);
    expect(empty, `leere Werte in ${locale}`).toEqual([]);
  });

  it.each(LOCALES)('%s liefert für jede Seite Meta-Titel und -Beschreibung', (locale: Locale) => {
    const dictionary = dictionaries[locale]!;
    for (const page of PAGE_IDS) {
      const section = dictionary[page as keyof Dictionary] as
        | { metaTitle?: string; metaDescription?: string }
        | undefined;
      expect(section?.metaTitle, `metaTitle fehlt: ${locale}/${page}`).toBeTruthy();
      expect(section?.metaDescription, `metaDescription fehlt: ${locale}/${page}`).toBeTruthy();
    }
  });

  it.each(LOCALES)('%s hat sprachspezifische Meta-Beschreibungen', (locale: Locale) => {
    // Doppelte Beschreibungen wären für Suchmaschinen ein Duplicate-Content-Signal.
    const dictionary = dictionaries[locale]!;
    const descriptions = PAGE_IDS.map((page) => {
      const section = dictionary[page as keyof Dictionary] as { metaDescription: string };
      return section.metaDescription;
    });
    expect(new Set(descriptions).size, `doppelte Beschreibungen in ${locale}`).toBe(
      descriptions.length,
    );
  });

  it.each(LOCALES.filter((locale) => locale !== DEFAULT_LOCALE))(
    '%s unterscheidet sich inhaltlich vom Deutschen',
    (locale: Locale) => {
      // Schutz vor versehentlich kopierten Sprachdateien.
      const own = stringEntries(dictionaries[locale]);
      const base = new Map(stringEntries(german));
      const identical = own.filter(([path, value]) => base.get(path) === value);
      const ratio = identical.length / own.length;
      expect(ratio, `${locale} ist zu ${Math.round(ratio * 100)} % identisch mit de`).toBeLessThan(
        0.3,
      );
    },
  );

  it('behält Marken- und Eigennamen unübersetzt', () => {
    for (const locale of LOCALES) {
      const all = stringEntries(dictionaries[locale])
        .map(([, value]) => value)
        .join(' ');
      // Der Firmenname darf in keiner Fassung übersetzt oder verändert werden.
      expect(all, `Firmenname fehlt in ${locale}`).toContain('Translation Admy');
    }
  });

  it('nennt Frontex und EUAA nur als Zielgruppe, nicht als Auftraggeber', () => {
    for (const locale of LOCALES) {
      const authorities = dictionaries[locale]!.authorities;
      expect(
        authorities.audienceDisclaimer.trim().length,
        `Klarstellung fehlt in ${locale}`,
      ).toBeGreaterThan(40);
    }
  });

  it('verwendet den Platzhalter {count} in der Trefferanzeige', () => {
    for (const locale of LOCALES) {
      expect(
        dictionaries[locale]!.languages.resultsMany,
        `{count} fehlt in ${locale}`,
      ).toContain('{count}');
    }
  });

  it('nennt keine unbelegte Sprachzahl in Marketingtexten', () => {
    // Die frühere Aussage „über 100 Sprachen“ wurde bewusst entfernt.
    for (const locale of LOCALES) {
      const dictionary = dictionaries[locale]!;
      const marketing = [
        dictionary.home.metaTitle,
        dictionary.home.metaDescription,
        dictionary.home.heroTitle,
        dictionary.services.metaDescription,
        dictionary.business.metaDescription,
        dictionary.languages.metaTitle,
        dictionary.languages.metaDescription,
        dictionary.footer.tagline,
      ].join(' ');
      expect(marketing, `${locale} nennt noch eine Sprachzahl`).not.toMatch(/\b\d{2,}\b/);
    }
  });

  it('beschreibt Frontex und EUAA nur als mögliche Einsatzfelder', () => {
    // Zusagen einer bestehenden Zusammenarbeit wären unbelegt und unzulässig.
    const forbidden = [
      /offizieller partner/i,
      /official partner/i,
      /auftragnehmer von frontex/i,
      /contractor (for|of) frontex/i,
      /wir arbeiten (bereits )?für (frontex|euaa)/i,
      /we (already )?work for (frontex|euaa)/i,
      /zertifiziert durch (frontex|euaa)/i,
      /certified by (frontex|euaa)/i,
    ];
    for (const locale of LOCALES) {
      const all = stringEntries(dictionaries[locale])
        .map(([, value]) => value)
        .join(' ');
      for (const pattern of forbidden) {
        expect(all, `${locale} erweckt den Eindruck einer Zusammenarbeit`).not.toMatch(pattern);
      }
    }
  });

  it('enthält den Abschnitt zu europäischen Grenz- und Asylverfahren', () => {
    for (const locale of LOCALES) {
      const coverage = dictionaries[locale]!.coverage;
      expect(coverage.bordersTitle.trim().length, `bordersTitle in ${locale}`).toBeGreaterThan(10);
      expect(coverage.bordersText, `Frontex fehlt in ${locale}`).toContain('Frontex');
      expect(coverage.bordersText, `EUAA fehlt in ${locale}`).toContain('EUAA');
      expect(coverage.capabilities.length, `Einsatzformen in ${locale}`).toBe(7);
    }
  });

  it('führt keinen regionalen Städte-Schwerpunkt mehr', () => {
    // Der frühere Abschnitt „Regionaler Schwerpunkt“ wurde bewusst entfernt.
    for (const locale of LOCALES) {
      const coverage = dictionaries[locale]!.coverage as Record<string, unknown>;
      expect(coverage.regionsTitle, `regionsTitle noch vorhanden in ${locale}`).toBeUndefined();
      expect(coverage.regionsLead, `regionsLead noch vorhanden in ${locale}`).toBeUndefined();
    }
  });

  it('nennt die Umsatzsteuer-ID mit dem Verweis auf § 27a UStG', () => {
    for (const locale of LOCALES) {
      expect(
        dictionaries[locale]!.imprint.vatIdLabel,
        `§ 27a UStG fehlt in ${locale}`,
      ).toContain('27a');
    }
  });

  it('gibt die Zahl der Sprachfassungen korrekt an', () => {
    for (const locale of LOCALES) {
      const dictionary = dictionaries[locale]!;
      // Kennzahl auf der Startseite muss zur tatsächlichen Sprachanzahl passen.
      expect(dictionary.home.statLanguages, `Kennzahl in ${locale}`).toBe(String(LOCALES.length));
      // Der Hinweistext füllt die Zahl zur Laufzeit über {count}.
      expect(
        dictionary.ui.websiteLanguages,
        `{count} fehlt im Sprachhinweis von ${locale}`,
      ).toContain('{count}');
    }
  });
});
