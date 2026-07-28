import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import { parseHTML } from 'linkedom';
import { describe, expect, it } from 'vitest';

import {
  LOCALES,
  LOCALE_NAMES,
  PAGE_IDS,
  SLUGS,
  DEFAULT_LOCALE,
  localeDirection,
} from '../src/i18n/config';
import type { Dictionary } from '../src/i18n/types';

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

/**
 * Durchgängige Prüfung aller Sprachfassungen an den erzeugten Seiten.
 *
 * Die übrigen Testdateien prüfen einzelne Bausteine; hier geht es um die
 * Zusagen, die auf jeder Seite jeder Sprache gelten müssen: Zahl der
 * Sprachfassungen, Erfahrungsangabe, europäisches Einsatzgebiet und die
 * Sprachwahl in Landessprache.
 */
const DIST = fileURLToPath(new URL('../dist/client/', import.meta.url));
const hasBuild = existsSync(DIST);

const modules = import.meta.glob<{ default: Dictionary }>('../src/i18n/locales/*.ts', {
  eager: true,
});
const dictionaries = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [
    path.replace(/.*\/locales\//, '').replace('.ts', ''),
    mod.default,
  ]),
) as Record<string, Dictionary>;

function distPath(locale: string, page: string): string {
  const slug = SLUGS[page as keyof typeof SLUGS][locale as keyof typeof LOCALE_NAMES];
  return slug === '' ? join(DIST, locale, 'index.html') : join(DIST, locale, slug, 'index.html');
}

describe('Alle Sprachfassungen', () => {
  it('nennt in jeder Fassung die tatsächliche Zahl der Sprachversionen', () => {
    // Kennzahl auf der Startseite und Hinweis in der Fußzeile müssen zur
    // Zahl der vorhandenen Sprachdateien passen – derzeit 18.
    for (const locale of LOCALES) {
      expect(dictionaries[locale]!.home.statLanguages, `Kennzahl in ${locale}`).toBe(
        String(LOCALES.length),
      );
    }
  });

  it('nennt in jeder Fassung über zehn Jahre Erfahrung', () => {
    for (const locale of LOCALES) {
      const dictionary = dictionaries[locale]!;
      expect(dictionary.home.statYears, `Kennzahl in ${locale}`).toBe('10+');

      // Keine abweichende Jahreszahl in den Fließtexten.
      const texts = [
        dictionary.home.statYearsLabel,
        dictionary.home.heroLead,
        dictionary.about.lead,
        dictionary.about.metaDescription,
        dictionary.about.values[1]!.text,
      ].join(' ');

      const jahreszahlen = texts.match(/\b(\d{1,3})\b/g) ?? [];
      const abweichend = jahreszahlen.filter((zahl) => zahl !== '10');
      expect(abweichend, `abweichende Jahreszahl in ${locale}: ${abweichend.join(', ')}`).toEqual(
        [],
      );
    }
  });

  it('stellt das Einsatzgebiet in jeder Fassung europäisch dar', () => {
    for (const locale of LOCALES) {
      const coverage = dictionaries[locale]!.coverage;

      // Die Kennzahl auf der Startseite nennt Europa, nicht ein einzelnes Land.
      const statCoverage = dictionaries[locale]!.home.statCoverage;
      expect(statCoverage.trim().length, `Einsatzgebiet in ${locale}`).toBeGreaterThan(2);

      // Die Einsatzgebietsseite darf kein Land als Reichweite ausgeben.
      const seite = [
        coverage.metaTitle,
        coverage.metaDescription,
        coverage.lead,
        coverage.europeTitle,
        coverage.europeText,
        coverage.nationwideTitle,
        coverage.nationwideText,
        coverage.capabilities.join(' '),
      ].join(' ');

      /*
        Länderbezeichnungen, die früher fälschlich als Reichweite standen –
        je Fassung hatte die Übersetzung das eigene Land eingesetzt.
      */
      const laender = [
        /\bDeutschland\b/,
        /\bbundesweit\b/i,
        /\bGermany\b/,
        /\bl’Allemagne\b/,
        /\bGermania\b/,
        /\bAlemania\b/,
        /Γερμανία/,
        /Германия/,
        /\bGermaniei?\b/,
        /\bNiemc/,
        /Németország/,
        /\bNjemačk/,
        /Ġermanja/,
        /\bVokietij/,
        /\bVācij/,
        /\bSaksama/,
        /\bSaksa/,
        /\bDuitsland\b/,
        /ألمانيا/,
      ];
      for (const muster of laender) {
        expect(seite, `${locale}: Einsatzgebiet nennt ein Land (${muster})`).not.toMatch(muster);
      }
    }
  });

  it('führt jede Sprache im Umschalter unter ihrem eigenen Namen', () => {
    // Endonyme: Deutsch, English, Français, العربية, Ελληνικά, Български …
    const erwartet: Record<string, string> = {
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

    for (const locale of LOCALES) {
      expect(LOCALE_NAMES[locale], `Endonym für ${locale}`).toBe(erwartet[locale]);
    }
    expect(Object.keys(erwartet).length, 'Endonyme decken alle Sprachen ab').toBe(LOCALES.length);
  });

  it.skipIf(!hasBuild)('zeigt die Sprachwahl auf jeder Seite ausgeschrieben', () => {
    /*
      An drei Stellen wählbar: Dropdown im Kopf, Fußzeile und Hamburger-Menü.

      In der Fußzeile stand früher nur das Kürzel – der Name steckte allein im
      title-Attribut und war auf Berührbildschirmen nicht erreichbar. Im
      Hamburger-Menü lag die Sprachwahl früher ganz unten hinter dreizehn
      Menüpunkten; sie steht jetzt als Dropdown direkt unter dem Logo.
    */
    for (const locale of LOCALES) {
      const { document } = parseHTML(readFileSync(distPath(locale, 'home'), 'utf8'));

      for (const bereich of ['#language-menu', '.footer-languages', '#mobile-language-menu']) {
        const wurzel = document.querySelector(bereich);
        expect(wurzel, `${bereich} fehlt in ${locale}`).toBeTruthy();
        const text = wurzel!.textContent ?? '';

        for (const andere of LOCALES) {
          expect(text, `${LOCALE_NAMES[andere]} fehlt in ${bereich} von ${locale}`).toContain(
            LOCALE_NAMES[andere],
          );
        }
      }
    }
  });

  it.skipIf(!hasBuild)('erzeugt jede Seite in jeder Sprache mit passender Richtung', () => {
    const fehlend: string[] = [];
    for (const locale of LOCALES) {
      for (const page of PAGE_IDS) {
        const datei = distPath(locale, page);
        if (!existsSync(datei)) {
          fehlend.push(`${locale}/${page}`);
          continue;
        }
        const html = readFileSync(datei, 'utf8');
        const dir = html.match(/<html [^>]*dir="(ltr|rtl)"/)?.[1];
        if (dir !== localeDirection(locale)) fehlend.push(`${locale}/${page} (dir=${dir})`);
      }
    }
    expect(fehlend, `fehlerhafte Seiten:\n${fehlend.join('\n')}`).toEqual([]);
  });

  it('enthält keine Spuren maschineller Übersetzung', () => {
    /*
      Prüfbare Merkmale automatischer Übersetzung. Nicht prüfbar ist, ob ein
      Satz idiomatisch klingt – das bleibt der redaktionellen Durchsicht
      vorbehalten. Was hier auffällt, ist aber immer ein echter Fehler.
    */
    const befunde: string[] = [];

    for (const locale of LOCALES) {
      const deutsch = new Map(stringEntries(dictionaries[DEFAULT_LOCALE]));

      for (const [pfad, wert] of stringEntries(dictionaries[locale]!)) {
        // Ein zerschossener Platzhalter zeigt sich als roher Text auf der Seite.
        const platzhalter = wert.match(/\{\w+\}/g) ?? [];
        for (const p of platzhalter) {
          expect(['{count}', '{country}'], `unbekannter Platzhalter in ${locale}.${pfad}`).toContain(
            p,
          );
        }

        if (/\s{2,}/.test(wert)) befunde.push(`${locale}.${pfad}: doppeltes Leerzeichen`);
        if (/--/.test(wert)) befunde.push(`${locale}.${pfad}: doppelter Bindestrich`);
        if (/^\s|\s$/.test(wert)) befunde.push(`${locale}.${pfad}: Leerzeichen am Rand`);

        /*
          Endet der deutsche Satz mit einem Satzzeichen, muss die Übersetzung
          das auch tun. Griechisch setzt als Fragezeichen das Erotimatiko „;“ –
          optisch ein Semikolon, inhaltlich ein Fragezeichen.
        */
        const vorlage = deutsch.get(pfad);
        if (vorlage && wert.length > 40 && /[.!?]$/.test(vorlage) && !/[.!?…:;;]$/.test(wert)) {
          befunde.push(`${locale}.${pfad}: Satzzeichen am Ende fehlt`);
        }
      }
    }

    expect(befunde, `Auffälligkeiten:\n${befunde.join('\n')}`).toEqual([]);
  });

  it('nennt im Hero den Sitz Deutschland und europäische Länder', () => {
    /*
      Einheitliche Linie in allen Fassungen: Deutschland als tatsächlicher Sitz
      des Büros plus zahlreiche europäische Länder als Einsatzgebiet.

      Bewusst NICHT das Land der Lesenden: Formulierungen wie „in tutta Italia“
      oder „w całej Polsce“ behaupten eine flächendeckende Tätigkeit in einem
      Land, in dem das Büro weder Niederlassung noch Vertrag hat. Genau diese
      Fassungen standen so in den Sprachdateien und sind hier ausgeschlossen.
    */
    const deutschland: Record<string, string> = {
      de: 'Deutschland',
      en: 'Germany',
      fr: 'Allemagne',
      it: 'Germania',
      es: 'Alemania',
      el: 'Γερμανία',
      bg: 'Германия',
      ro: 'Germania',
      pl: 'Niemczech',
      hu: 'Németországban',
      hr: 'Njemačkoj',
      mt: 'Ġermanja',
      lt: 'Vokietijoje',
      lv: 'Vācijā',
      et: 'Saksamaal',
      fi: 'Saksassa',
      nl: 'Duitsland',
      ar: 'ألمانيا',
    };

    /** Das Land der jeweiligen Sprachfassung – darf im Hero nicht als Reichweite stehen. */
    const eigenesLand: Record<string, RegExp | null> = {
      de: null, // Sitzland, hier korrekt
      en: null,
      fr: /France/,
      it: /Italia/,
      es: /España/,
      el: /Ελλάδα/,
      bg: /България/,
      ro: /România/,
      pl: /Polsce|Polski|Polska/,
      hu: /Magyarország/,
      hr: /Hrvatsk/,
      mt: /Malta/,
      lt: /Lietuv/,
      lv: /Latvij/,
      et: /Eesti/,
      fi: /Suome/,
      nl: /Nederland/,
      ar: null,
    };

    for (const locale of LOCALES) {
      const heroLead = dictionaries[locale]!.home.heroLead;

      expect(heroLead, `Hero in ${locale} nennt den Sitz Deutschland nicht`).toContain(
        deutschland[locale],
      );

      const eigenes = eigenesLand[locale];
      if (eigenes) {
        expect(heroLead, `Hero in ${locale} behauptet Tätigkeit im eigenen Land`).not.toMatch(
          eigenes,
        );
      }
    }
  });
});
