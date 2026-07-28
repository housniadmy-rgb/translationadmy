import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

import { SITE_URL } from '../src/consts';
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_NAMES,
  LOCALE_TAGS,
  PAGE_IDS,
  SLUGS,
  HEADER_NAV,
  FOOTER_NAV,
  RTL_LOCALES,
  localeDirection,
} from '../src/i18n/config';

describe('Site-Konfiguration', () => {
  it('astro.config.mjs nutzt dieselbe Domain wie consts.ts', () => {
    const config = readFileSync(new URL('../astro.config.mjs', import.meta.url), 'utf8');
    const match = config.match(/site:\s*'([^']+)'/);
    expect(match, 'site-Eintrag in astro.config.mjs gefunden').not.toBeNull();
    expect(match![1]).toBe(SITE_URL);
  });

  it('robots.txt verweist auf die Sitemap derselben Domain', () => {
    const robots = readFileSync(new URL('../public/robots.txt', import.meta.url), 'utf8');
    expect(robots).toContain(`${SITE_URL}/sitemap-index.xml`);
  });

  it('nutzt den Vercel-Adapter und keinen anderen', () => {
    const config = readFileSync(new URL('../astro.config.mjs', import.meta.url), 'utf8');
    const paket = JSON.parse(
      readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
    ) as { dependencies: Record<string, string>; devDependencies?: Record<string, string> };
    const alle = { ...paket.dependencies, ...paket.devDependencies };

    expect(config, 'Vercel-Adapter wird nicht importiert').toMatch(
      /^import .* from '@astrojs\/vercel';$/m,
    );
    expect(alle['@astrojs/vercel'], 'Vercel-Adapter fehlt in package.json').toBeTruthy();

    /*
      Ein zweiter Adapter im Baum führt zu schwer auffindbaren Build-Fehlern.
      Geprüft wird die Import-Zeile, nicht jede Erwähnung: Die Kommentare in
      der Konfiguration nennen die anderen Adapter bewusst als Hinweis für
      einen späteren Hoster-Wechsel.
    */
    for (const anderer of ['@astrojs/node', '@astrojs/netlify', '@astrojs/cloudflare']) {
      expect(alle[anderer], `${anderer} ist noch installiert`).toBeUndefined();
      const importZeile = new RegExp(`^import .* from '${anderer.replace('/', '\\/')}';$`, 'm');
      expect(config, `${anderer} wird noch importiert`).not.toMatch(importZeile);
    }
  });

  it('braucht den Adapter für die beiden Formularrouten', () => {
    /*
      Erklärt, warum die Website trotz statischer Ausrichtung einen Adapter
      hat: Ohne ihn fielen diese Routen beim Build weg und beide Formulare
      liefen ins Leere. Alle übrigen Seiten werden vorgerendert.
    */
    for (const route of ['apply', 'contact']) {
      const quelle = readFileSync(
        new URL(`../src/pages/api/${route}.ts`, import.meta.url),
        'utf8',
      );
      expect(quelle, `prerender-Schalter fehlt in api/${route}.ts`).toContain(
        'export const prerender = false',
      );
    }
  });

  it('legt die Node-Version für die Zielumgebung fest', () => {
    /*
      Ohne engines.node wählt Vercel die Version nach eigenem Standard, und
      der ändert sich mit der Zeit. Fiele er unter Astros Mindestanforderung,
      schlüge der Build dort fehl, obwohl er lokal durchläuft.

      Bewusst als Bereich und nicht als feste Hauptversion: So bleibt die
      Angabe auch bei einem Hosterwechsel gültig und muss nicht gepflegt
      werden, sobald eine Laufzeit ausläuft.
    */
    const paket = JSON.parse(
      readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
    ) as { engines?: { node?: string } };

    expect(paket.engines?.node, 'engines.node fehlt in package.json').toBeTruthy();

    // Muss die Anforderung von Astro erfüllen (18.20.8 || ^20.3.0 || >=22).
    const astro = JSON.parse(
      readFileSync(new URL('../node_modules/astro/package.json', import.meta.url), 'utf8'),
    ) as { engines?: { node?: string } };
    expect(astro.engines?.node, 'Astro nennt keine Node-Anforderung').toBeTruthy();

    const untergrenze = Number(paket.engines!.node!.replace(/[^\d.]/g, '').split('.')[0]);
    expect(untergrenze, 'Node-Untergrenze zu niedrig für Astro 5').toBeGreaterThanOrEqual(20);
  });

  it('bündelt keine Bildverarbeitung in die Serverfunktion', () => {
    /*
      Astro packt sonst sharp samt libvips in die Funktion – rund 19 MB
      plattformabhängiger Binärdateien, die unter Windows erzeugt auf Vercels
      Linux-Laufzeit unbrauchbar wären. Die Website nutzt ausschließlich
      Inline-SVGs; ein Wechsel auf <Image> müsste diese Zeile bewusst entfernen.
    */
    const config = readFileSync(new URL('../astro.config.mjs', import.meta.url), 'utf8');
    expect(config, 'Bilddienst nicht abgeschaltet').toContain('astro/assets/services/noop');
  });
});

describe('Sprachkonfiguration', () => {
  it('Deutsch ist die Hauptsprache', () => {
    expect(DEFAULT_LOCALE).toBe('de');
    expect(LOCALES).toContain(DEFAULT_LOCALE);
  });

  it('enthält keine doppelten Sprachcodes', () => {
    expect(new Set(LOCALES).size).toBe(LOCALES.length);
  });

  it('jede Sprache hat einen Anzeigenamen und einen BCP-47-Tag', () => {
    for (const locale of LOCALES) {
      expect(LOCALE_NAMES[locale], `Name für ${locale}`).toBeTruthy();
      expect(LOCALE_TAGS[locale], `hreflang für ${locale}`).toBeTruthy();
    }
  });

  /*
    Arabisch war zwischenzeitlich entfernt und wurde auf Wunsch wieder
    aufgenommen – als einzige Fassung mit Textrichtung von rechts nach links.
    Der frühere Test hat genau das Gegenteil geprüft; er ist hier ersetzt.
  */
  it('führt Arabisch als Fassung von rechts nach links', () => {
    expect(LOCALES).toContain('ar');
    expect(RTL_LOCALES).toContain('ar');
    expect(localeDirection('ar')).toBe('rtl');
    expect(LOCALE_NAMES.ar).toBe('العربية');
    expect(LOCALE_TAGS.ar).toBe('ar');
  });

  it('setzt für alle anderen Sprachen die Richtung von links nach rechts', () => {
    for (const locale of LOCALES) {
      if (locale === 'ar') continue;
      expect(localeDirection(locale), `Richtung von ${locale}`).toBe('ltr');
    }
  });
});

describe('Lokalisierte URL-Segmente', () => {
  it('jede Seite hat für jede Sprache ein Segment', () => {
    for (const page of PAGE_IDS) {
      for (const locale of LOCALES) {
        expect(
          SLUGS[page][locale],
          `Slug fehlt: ${page}/${locale}`,
        ).toBeTypeOf('string');
      }
    }
  });

  it('nur die Startseite hat ein leeres Segment', () => {
    for (const page of PAGE_IDS) {
      for (const locale of LOCALES) {
        const slug = SLUGS[page][locale];
        if (page === 'home') expect(slug).toBe('');
        else expect(slug, `${page}/${locale} darf nicht leer sein`).not.toBe('');
      }
    }
  });

  it('Segmente sind innerhalb einer Sprache eindeutig', () => {
    for (const locale of LOCALES) {
      const slugs = PAGE_IDS.map((page) => SLUGS[page][locale]);
      const duplicates = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
      expect(duplicates, `doppelte Segmente in ${locale}: ${duplicates.join(', ')}`).toEqual([]);
    }
  });

  it('Segmente sind URL-sicher (Kleinbuchstaben, Ziffern, Bindestriche)', () => {
    for (const page of PAGE_IDS) {
      for (const locale of LOCALES) {
        const slug = SLUGS[page][locale];
        if (slug === '') continue;
        expect(slug, `${page}/${locale} = "${slug}"`).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
      }
    }
  });
});

describe('Navigation', () => {
  it('verweist ausschließlich auf existierende Seiten', () => {
    const known = new Set<string>(PAGE_IDS);
    const referenced = [
      ...HEADER_NAV,
      ...FOOTER_NAV.services,
      ...FOOTER_NAV.company,
      ...FOOTER_NAV.legal,
    ];
    for (const page of referenced) {
      expect(known.has(page), `unbekannte Seite in der Navigation: ${page}`).toBe(true);
    }
  });

  it('erreicht jede Seite über Header oder Footer', () => {
    const reachable = new Set<string>([
      'home',
      ...HEADER_NAV,
      ...FOOTER_NAV.services,
      ...FOOTER_NAV.company,
      ...FOOTER_NAV.legal,
    ]);
    for (const page of PAGE_IDS) {
      expect(reachable.has(page), `${page} ist nicht verlinkt`).toBe(true);
    }
  });
});
