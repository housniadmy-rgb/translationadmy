import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

import { PAGE_IDS, SLUGS } from '../src/i18n/config';

/**
 * Weiterleitungen der alten Adressen ohne Sprachpräfix.
 *
 * Die Vorgängerwebsite lag unter www.translationadmy.de/leistungen, /kontakt
 * und so fort. Diese Adressen stehen im Google-Index und in fremden
 * Verlinkungen; ohne Weiterleitung liefern sie 404.
 */
const DIST = fileURLToPath(new URL('../dist/client/', import.meta.url));
const hasBuild = existsSync(DIST);

const config = readFileSync(new URL('../astro.config.mjs', import.meta.url), 'utf8');

/** Liest die Weiterleitungen aus der Konfiguration. */
function gelesen(): { von: string; nach: string; status: number }[] {
  const abschnitt = config.slice(config.indexOf('redirects: {'), config.indexOf('security: {'));
  return [
    ...abschnitt.matchAll(
      /'(\/[^']*)':\s*\{\s*status:\s*(\d+),\s*destination:\s*'([^']+)'/g,
    ),
  ].map((m) => ({ von: m[1]!, status: Number(m[2]), nach: m[3]! }));
}

const weiterleitungen = gelesen();

describe('Weiterleitungen alter Wurzeladressen', () => {
  it('sind überhaupt vorhanden', () => {
    expect(weiterleitungen.length, 'keine Weiterleitungen gefunden').toBeGreaterThan(0);
  });

  it('deckt jeden deutschen Slug ab', () => {
    /*
      Jede deutsche Unterseite muss auch ohne Sprachpräfix erreichbar sein –
      sonst bleibt genau die Lücke, die den 404 verursacht hat. Die Startseite
      ist ausgenommen: Dort liegt die Sprachweiche.
    */
    const quellen = new Set(weiterleitungen.map((w) => w.von));
    const fehlend = PAGE_IDS.filter((seite) => seite !== 'home').filter(
      (seite) => !quellen.has(`/${SLUGS[seite].de}`),
    );

    expect(fehlend, `ohne Weiterleitung: ${fehlend.join(', ')}`).toEqual([]);
  });

  it('leitet dauerhaft weiter, nicht vorübergehend', () => {
    /*
      301 überträgt die Bewertung der alten Adresse auf die neue. Mit 302
      führt die Suchmaschine beide weiter und die alte bleibt im Index.
    */
    for (const { von, status } of weiterleitungen) {
      expect(status, `${von} leitet mit ${status} weiter`).toBe(301);
    }
  });

  it('zeigt ausschließlich auf die deutsche Fassung', () => {
    // Wer eine deutschsprachige Adresse aufruft, erwartet Deutsch.
    for (const { von, nach } of weiterleitungen) {
      expect(nach, `${von} zeigt nicht auf /de/`).toMatch(/^\/de\/.+\/$/);
    }
  });

  it.skipIf(!hasBuild)('zeigt ausschließlich auf Seiten, die es gibt', () => {
    const fehlend = weiterleitungen.filter(
      ({ nach }) => !existsSync(join(DIST, nach, 'index.html')),
    );
    expect(
      fehlend.map((w) => `${w.von} -> ${w.nach}`),
      'Weiterleitungsziel ohne Seite',
    ).toEqual([]);
  });

  it('leitet die frühere Bewerbungsadresse mit', () => {
    // Die Seite heißt /de/bewerbung/; /bewerben kursiert als alte Adresse.
    const bewerben = weiterleitungen.find((w) => w.von === '/bewerben');
    expect(bewerben, '/bewerben fehlt').toBeDefined();
    expect(bewerben!.nach).toBe('/de/bewerbung/');
  });

  it('lässt die Startseite unberührt', () => {
    /*
      Unter / liegt die Sprachweiche. Eine Weiterleitung dort würde die
      Erkennung der Browsersprache aushebeln und alle Besucher nach /de/
      zwingen.
    */
    expect(weiterleitungen.map((w) => w.von)).not.toContain('/');
  });

  it.skipIf(!hasBuild)('die Startseite bleibt erreichbar und zeigt auf /de/', () => {
    const start = join(DIST, 'index.html');
    expect(existsSync(start), 'Startseite fehlt').toBe(true);

    const html = readFileSync(start, 'utf8');
    expect(html, 'Meta-Refresh fehlt').toMatch(/http-equiv="refresh" content="0; url=\/de\/"/);
  });
});

describe('Weiterleitungen in der Zielumgebung', () => {
  const VERCEL = fileURLToPath(new URL('../.vercel/output/config.json', import.meta.url));
  const hasVercel = existsSync(VERCEL);

  it.skipIf(!hasVercel)('erreichen die Vercel-Konfiguration', () => {
    /*
      Astro kennt die Weiterleitungen; ausgeführt werden sie aber von Vercel.
      Ohne Eintrag in config.json bliebe die Konfiguration wirkungslos.
    */
    const config = JSON.parse(readFileSync(VERCEL, 'utf8')) as {
      routes?: { src?: string; status?: number; headers?: Record<string, string> }[];
    };

    const routen = (config.routes ?? []).filter((r) => r.status === 301);
    expect(routen.length, 'keine 301-Routen in config.json').toBe(weiterleitungen.length);

    for (const { von, nach } of weiterleitungen) {
      const treffer = routen.find((r) => r.src === `^${von}$`);
      expect(treffer, `Route für ${von} fehlt`).toBeDefined();
      expect(treffer!.headers?.Location, `falsches Ziel für ${von}`).toBe(nach);
    }
  });
});

describe('Sitemap und Weiterleitungen', () => {
  it.skipIf(!hasBuild)('führt keine Weiterleitungsquelle in der Sitemap', () => {
    /*
      Eine Adresse, die nur weiterleitet, gehört nicht in die Sitemap – sie
      liefert nie 200 und erzeugt in der Search Console Meldungen.
    */
    const sitemap = readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8');
    const gemeldet = weiterleitungen.filter(({ von }) =>
      new RegExp(`translationadmy\\.de${von}/?<`).test(sitemap),
    );

    expect(
      gemeldet.map((w) => w.von),
      'Weiterleitungsquelle steht in der Sitemap',
    ).toEqual([]);
  });
});
