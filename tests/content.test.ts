import { describe, expect, it } from 'vitest';

import {
  LANGUAGE_COUNT,
  LANGUAGE_GROUPS,
  UNIQUE_LANGUAGES,
  FEATURED_LANGUAGES,
  LANGUAGE_AUTONYMS,
  RTL_SCRIPT_LANGUAGES,
} from '../src/data/languages';
import { CONTACT, ADDRESS, LEGAL, SITE, COVERAGE_COUNTRIES } from '../src/consts';
import { COUNTRY_REQUIREMENTS } from '../src/data/countries';

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
    for (const locale of ['de', 'el', 'mt', 'fi', 'lv', 'ar']) {
      const names = new Intl.DisplayNames([locale], { type: 'region' });
      for (const code of COVERAGE_COUNTRIES) {
        expect(names.of(code), `${code} ohne Namen in ${locale}`).not.toBe(code);
      }
    }
  });
});

describe('Eigenbezeichnungen der angebotenen Sprachen', () => {
  it('ordnet jedes Autonym einer tatsächlich angebotenen Sprache zu', () => {
    // Ein Autonym ohne passenden Eintrag wäre tote Datenpflege.
    const angeboten = new Set(UNIQUE_LANGUAGES);
    for (const name of Object.keys(LANGUAGE_AUTONYMS)) {
      expect(angeboten.has(name), `"${name}" hat ein Autonym, steht aber nicht im Angebot`).toBe(
        true,
      );
    }
  });

  it('deckt die nachgefragten Sprachen der Startseite ab', () => {
    /*
      Wer die Startseite in seiner Sprache erreicht, soll seine Sprache dort
      auch in eigener Schrift wiederfinden. Für die hervorgehobenen Sprachen
      ist ein Autonym deshalb Pflicht.
    */
    const ohne = FEATURED_LANGUAGES.filter((name) => !LANGUAGE_AUTONYMS[name]);
    expect(ohne, `hervorgehobene Sprachen ohne Autonym: ${ohne.join(', ')}`).toEqual([]);
  });

  it('enthält keine leeren oder mit der deutschen Bezeichnung identischen Autonyme', () => {
    for (const [name, autonym] of Object.entries(LANGUAGE_AUTONYMS)) {
      expect(autonym.trim(), `leeres Autonym bei ${name}`).not.toBe('');
      expect(autonym, `Autonym bei ${name} ist ungetrimmt`).toBe(autonym.trim());
    }
  });

  it('kennzeichnet rechtsläufige Schriften vollständig', () => {
    /*
      Autonyme in arabischer oder syrischer Schrift brauchen dir="rtl".
      Der Test findet die Schriftzeichen selbst, damit eine neue Sprache nicht
      versehentlich ohne Kennzeichnung hinzukommt.
    */
    const rtlZeichen = /[؀-ۿ܀-ݏݐ-ݿࢠ-ࣿ]/;
    const fehlend: string[] = [];
    const ueberfluessig: string[] = [];

    for (const [name, autonym] of Object.entries(LANGUAGE_AUTONYMS)) {
      const brauchtRtl = rtlZeichen.test(autonym);
      const istMarkiert = RTL_SCRIPT_LANGUAGES.has(name);
      if (brauchtRtl && !istMarkiert) fehlend.push(name);
      if (!brauchtRtl && istMarkiert) ueberfluessig.push(name);
    }

    expect(fehlend, `ohne dir="rtl": ${fehlend.join(', ')}`).toEqual([]);
    expect(ueberfluessig, `unnötig als rtl geführt: ${ueberfluessig.join(', ')}`).toEqual([]);
  });

  it('führt die im Asylkontext wichtigsten Sprachen mit Eigenbezeichnung', () => {
    const erwartet: Record<string, string> = {
      Arabisch: 'العربية',
      'Kurdisch (Sorani)': 'کوردیی سۆرانی',
      Farsi: 'فارسی',
      Dari: 'دری',
      Paschto: 'پښتو',
      Tigrinia: 'ትግርኛ',
      Somalisch: 'Soomaali',
      Türkisch: 'Türkçe',
      Russisch: 'Русский',
      Ukrainisch: 'Українська',
    };
    for (const [name, autonym] of Object.entries(erwartet)) {
      expect(LANGUAGE_AUTONYMS[name], `Autonym für ${name}`).toBe(autonym);
    }
  });
});

describe('Voraussetzungen nach Einsatzland', () => {
  it('deckt genau die beworbenen Einsatzgebiete ab', () => {
    /*
      Beide Listen müssen deckungsgleich bleiben:

      Ein Einsatzgebiet ohne Voraussetzungen führt die Bewerbung ins Leere –
      das Land steht im Auswahlfeld, aber es erscheinen keine Angaben dazu.
      Umgekehrt sind Voraussetzungen für ein Land, das gar nicht beworben
      wird, für niemanden von Nutzen.
    */
    const withRequirements = COUNTRY_REQUIREMENTS.map((entry) => entry.code).sort();
    const advertised = [...COVERAGE_COUNTRIES].sort();

    expect(withRequirements, 'Einsatzgebiete und Voraussetzungen weichen ab').toEqual(advertised);
  });

  it('nennt für jedes Land Nachweise und amtliche Quellen', () => {
    for (const entry of COUNTRY_REQUIREMENTS) {
      expect(entry.languageCertificates.length, `Sprachnachweise ${entry.code}`).toBeGreaterThan(0);
      expect(
        entry.entranceQualification.length,
        `Hochschulzugang ${entry.code}`,
      ).toBeGreaterThan(0);
      expect(entry.higherEducation.length, `Hochschulabschluss ${entry.code}`).toBeGreaterThan(0);
      expect(entry.criminalRecord.length, `Strafregister ${entry.code}`).toBeGreaterThan(0);
      expect(entry.sources.length, `Quellen ${entry.code}`).toBeGreaterThan(0);

      for (const source of entry.sources) {
        // Nur amtliche Quellen über gesicherte Verbindung.
        expect(source.url, `Quelle ohne https bei ${entry.code}`).toMatch(/^https:\/\//);
        expect(source.name.trim().length, `Quellenname bei ${entry.code}`).toBeGreaterThan(3);
      }
    }
  });

  it('kennzeichnet ungeprüfte Länder als solche', () => {
    /*
      Solange keine fachkundige Stelle geprüft hat, muss das sichtbar bleiben –
      die Seite zeigt dafür einen Hinweis je Land. Ein „verified“ ohne Datum
      wäre eine unbelegte Zusicherung.
    */
    for (const entry of COUNTRY_REQUIREMENTS) {
      if (entry.reviewStatus === 'verified') {
        expect(entry.reviewedOn, `${entry.code} ist geprüft, nennt aber kein Datum`).toMatch(
          /^\d{4}-\d{2}-\d{2}$/,
        );
      } else {
        expect(entry.reviewedOn, `${entry.code} ist ungeprüft, nennt aber ein Datum`).toBeNull();
      }
    }
  });
});
