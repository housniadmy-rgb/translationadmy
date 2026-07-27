import { describe, expect, it } from 'vitest';

import {
  LANGUAGE_COUNT,
  LANGUAGE_GROUPS,
  UNIQUE_LANGUAGES,
  FEATURED_LANGUAGES,
} from '../src/data/languages';
import { CONTACT, ADDRESS, LEGAL, SITE, COVERAGE_COUNTRIES } from '../src/consts';

describe('Sprachangebot', () => {
  it('enthält alle vier Sprachgruppen', () => {
    expect(LANGUAGE_GROUPS.map((group) => group.id)).toEqual([
      'asiatisch',
      'europaeisch',
      'nordafrikanisch',
      'afrikanisch',
    ]);
  });

  it('keine Gruppe ist leer', () => {
    for (const group of LANGUAGE_GROUPS) {
      expect(group.languages.length, `Gruppe ${group.id}`).toBeGreaterThan(0);
    }
  });

  it('enthält innerhalb einer Gruppe keine Dubletten', () => {
    for (const group of LANGUAGE_GROUPS) {
      const duplicates = group.languages.filter(
        (language, index) => group.languages.indexOf(language) !== index,
      );
      expect(duplicates, `Dubletten in ${group.id}`).toEqual([]);
    }
  });

  it('enthält ein breites Sprachangebot', () => {
    // Die Texte nennen bewusst keine Zahl mehr; die Liste selbst ist der Beleg.
    expect(LANGUAGE_COUNT).toBeGreaterThan(50);
  });

  it('enthält keine leeren oder ungetrimmten Einträge', () => {
    for (const language of UNIQUE_LANGUAGES) {
      expect(language).toBe(language.trim());
      expect(language.length).toBeGreaterThan(1);
    }
  });

  it('die Startseiten-Auswahl stammt aus der vollständigen Liste', () => {
    const all = new Set(UNIQUE_LANGUAGES);
    for (const language of FEATURED_LANGUAGES) {
      expect(all.has(language), `"${language}" fehlt in der Gesamtliste`).toBe(true);
    }
  });

  it('deckt die für Asylverfahren wichtigen Sprachen ab', () => {
    const all = new Set(UNIQUE_LANGUAGES);
    for (const language of ['Arabisch', 'Dari', 'Paschto', 'Tigrinia', 'Somalisch', 'Farsi']) {
      expect(all.has(language), `"${language}" fehlt`).toBe(true);
    }
  });
});

describe('Stammdaten', () => {
  it('übernimmt die vom Auftraggeber vorgegebenen Kontaktdaten zeichengenau', () => {
    expect(CONTACT.phone).toBe('+49 6721 9875872');
    expect(CONTACT.fax).toBe('+49 6721 9875873');
    expect(CONTACT.mobile).toBe('+49 176 614 174 09');
    expect(CONTACT.email).toBe('translationadmy@web.de');
  });

  it('übernimmt Anschrift und rechtliche Angaben unverändert', () => {
    expect(SITE.legalName).toBe('Dolmetscherbüro Translation Admy');
    expect(ADDRESS.street).toBe('Berlinstraße 37');
    expect(ADDRESS.postalCode).toBe('55411');
    expect(ADDRESS.city).toBe('Bingen am Rhein');
    expect(LEGAL.representedBy).toBe('Housni Admy');
    expect(LEGAL.taxNumber).toBe('08/001/00039');
    expect(LEGAL.vatId).toBe('DE410290042');
  });

  it('bildet gültige tel:-Links ohne Leerzeichen', () => {
    expect(CONTACT.phoneHref).toMatch(/^tel:\+\d+$/);
    expect(CONTACT.mobileHref).toMatch(/^tel:\+\d+$/);
    expect(CONTACT.emailHref).toBe(`mailto:${CONTACT.email}`);
  });

  it('die Wähl-Links enthalten dieselben Ziffern wie die Anzeige', () => {
    // Schützt davor, dass Anzeige und Link auseinanderlaufen.
    const digits = (value: string) => value.replace(/\D/g, '');
    expect(digits(CONTACT.phoneHref)).toBe(digits(CONTACT.phone));
    expect(digits(CONTACT.mobileHref)).toBe(digits(CONTACT.mobile));
    expect(digits(CONTACT.faxHref)).toBe(digits(CONTACT.fax));
  });

  it('die Umsatzsteuer-ID hat das deutsche Format', () => {
    expect(LEGAL.vatId).toMatch(/^DE\d{9}$/);
  });

});

describe('Europäische Einsatzgebiete', () => {
  it('enthält das Sitzland und keine Dubletten', () => {
    expect(COVERAGE_COUNTRIES).toContain('DE');
    expect(new Set(COVERAGE_COUNTRIES).size).toBe(COVERAGE_COUNTRIES.length);
  });

  it('verwendet ausschließlich gültige ISO-3166-Ländercodes', () => {
    const known = new Intl.DisplayNames(['de'], { type: 'region' });
    for (const code of COVERAGE_COUNTRIES) {
      expect(code, `"${code}" ist kein zweistelliger Großbuchstaben-Code`).toMatch(/^[A-Z]{2}$/);
      // Ein unbekannter Code liefert den Code selbst zurück statt eines Namens.
      expect(known.of(code), `unbekannter Ländercode: ${code}`).not.toBe(code);
    }
  });

  it('lässt sich in jede Sprachfassung übersetzen', () => {
    // Absicherung, dass Intl in der Build-Umgebung vollständige Sprachdaten hat.
    for (const locale of ['de', 'el', 'mt', 'fi', 'lv']) {
      const names = new Intl.DisplayNames([locale], { type: 'region' });
      for (const code of COVERAGE_COUNTRIES) {
        expect(names.of(code), `${code} ohne Namen in ${locale}`).not.toBe(code);
      }
    }
  });
});
