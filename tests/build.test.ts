import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';
import { beforeAll, describe, expect, it } from 'vitest';

import { SITE_URL } from '../src/consts';
import { LOCALES, LOCALE_TAGS, PAGE_IDS, SLUGS, DEFAULT_LOCALE } from '../src/i18n/config';

/**
 * Prüft die tatsächlich erzeugten Seiten.
 * Voraussetzung: `npm run build:only` wurde ausgeführt.
 */
const DIST = fileURLToPath(new URL('../dist/client/', import.meta.url));

function collectHtmlFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const full = join(directory, entry);
    if (statSync(full).isDirectory()) return collectHtmlFiles(full);
    return full.endsWith('.html') ? [full] : [];
  });
}

const hasBuild = existsSync(DIST);

/** Erwarteter Pfad einer Seite im dist-Verzeichnis. */
function distPath(locale: string, page: string): string {
  const slug = SLUGS[page as keyof typeof SLUGS][locale as keyof typeof LOCALE_TAGS];
  return slug === ''
    ? join(DIST, locale, 'index.html')
    : join(DIST, locale, slug, 'index.html');
}

describe.skipIf(!hasBuild)('Erzeugte Seiten', () => {
  let pages: { file: string; url: string; html: string }[] = [];

  beforeAll(() => {
    pages = collectHtmlFiles(DIST).map((file) => ({
      file,
      url: '/' + relative(DIST, file).replace(/\\/g, '/').replace(/index\.html$/, ''),
      html: readFileSync(file, 'utf8'),
    }));
  });

  it('erzeugt jede Seite in jeder Sprache', () => {
    const missing: string[] = [];
    for (const locale of LOCALES) {
      for (const page of PAGE_IDS) {
        if (!existsSync(distPath(locale, page))) missing.push(`${locale}/${page}`);
      }
    }
    expect(missing, `fehlende Seiten: ${missing.join(', ')}`).toEqual([]);
  });

  it('erzeugt die erwartete Gesamtzahl an Seiten', () => {
    // 17 Sprachen × 13 Seiten + Sprachweiche + 404
    expect(pages.length).toBe(LOCALES.length * PAGE_IDS.length + 2);
  });

  it('jede Seite hat Titel, Beschreibung und genau eine H1', () => {
    for (const page of pages) {
      if (page.url === '/') continue; // Sprachweiche, bewusst ohne H1-Struktur
      const { document } = parseHTML(page.html);

      const title = document.querySelector('title')?.textContent?.trim();
      expect(title, `Titel fehlt: ${page.url}`).toBeTruthy();
      expect(title!.length, `Titel zu kurz: ${page.url}`).toBeGreaterThan(10);

      const description = document
        .querySelector('meta[name="description"]')
        ?.getAttribute('content');
      expect(description, `Beschreibung fehlt: ${page.url}`).toBeTruthy();

      // Für indexierbare Seiten zählt die Länge – die 404-Seite ist bewusst noindex.
      const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content') ?? '';
      if (!robots.includes('noindex')) {
        expect(description!.length, `Beschreibung zu kurz: ${page.url}`).toBeGreaterThan(50);
      }

      const headings = document.querySelectorAll('h1');
      expect(headings.length, `H1-Anzahl bei ${page.url}`).toBe(1);
    }
  });

  it('setzt lang passend zur Sprachfassung', () => {
    for (const locale of LOCALES) {
      const html = readFileSync(distPath(locale, 'home'), 'utf8');
      const { document } = parseHTML(html);
      expect(document.documentElement.getAttribute('lang'), `lang für ${locale}`).toBe(
        LOCALE_TAGS[locale],
      );
    }
  });

  it('setzt für jede Seite ein Canonical auf die eigene URL', () => {
    for (const locale of LOCALES) {
      for (const page of PAGE_IDS) {
        const { document } = parseHTML(readFileSync(distPath(locale, page), 'utf8'));
        const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
        const slug = SLUGS[page][locale];
        const expected = slug === '' ? `${SITE_URL}/${locale}/` : `${SITE_URL}/${locale}/${slug}/`;
        expect(canonical, `Canonical bei ${locale}/${page}`).toBe(expected);
      }
    }
  });

  it('verweist per hreflang auf dieselbe Unterseite in allen Sprachen', () => {
    for (const page of PAGE_IDS) {
      const { document } = parseHTML(readFileSync(distPath(DEFAULT_LOCALE, page), 'utf8'));
      const alternates = [...document.querySelectorAll('link[rel="alternate"][hreflang]')];

      // Eine Alternative je Sprache plus x-default.
      expect(alternates.length, `hreflang-Anzahl bei ${page}`).toBe(LOCALES.length + 1);

      for (const locale of LOCALES) {
        const link = alternates.find(
          (node) => node.getAttribute('hreflang') === LOCALE_TAGS[locale],
        );
        expect(link, `hreflang ${LOCALE_TAGS[locale]} fehlt bei ${page}`).toBeTruthy();

        const slug = SLUGS[page][locale];
        const expected = slug === '' ? `${SITE_URL}/${locale}/` : `${SITE_URL}/${locale}/${slug}/`;
        expect(link!.getAttribute('href'), `hreflang-Ziel ${locale}/${page}`).toBe(expected);
      }

      const xDefault = alternates.find((node) => node.getAttribute('hreflang') === 'x-default');
      expect(xDefault, `x-default fehlt bei ${page}`).toBeTruthy();
      expect(xDefault!.getAttribute('href')).toContain(`/${DEFAULT_LOCALE}/`);
    }
  });

  it('enthält gültige strukturierte Daten', () => {
    const { document } = parseHTML(readFileSync(distPath(DEFAULT_LOCALE, 'home'), 'utf8'));
    const blocks = [...document.querySelectorAll('script[type="application/ld+json"]')];
    expect(blocks.length).toBeGreaterThanOrEqual(2);

    const parsed = blocks.map((block) => JSON.parse(block.textContent ?? '{}'));
    for (const entry of parsed) {
      expect(entry['@context']).toBe('https://schema.org');
      expect(entry['@type']).toBeTruthy();
    }

    const organisation = parsed.find((entry) => entry['@type'] === 'ProfessionalService');
    expect(organisation, 'ProfessionalService fehlt').toBeTruthy();
    expect(organisation.address.addressLocality).toBe('Bingen am Rhein');
  });

  it('alle internen Links zeigen auf existierende Seiten', () => {
    const broken: string[] = [];

    for (const page of pages) {
      const { document } = parseHTML(page.html);
      for (const anchor of document.querySelectorAll('a[href]')) {
        const href = anchor.getAttribute('href') ?? '';
        if (!href.startsWith('/')) continue; // externe Links, tel:, mailto:, Anker
        const target = href.split('#')[0]!.split('?')[0]!;
        if (target === '/') continue;

        const candidates = [
          join(DIST, target),
          join(DIST, target, 'index.html'),
          join(DIST, `${target}.html`),
        ];
        if (!candidates.some((candidate) => existsSync(candidate))) {
          broken.push(`${page.url} → ${href}`);
        }
      }
    }

    expect(broken, `defekte Links:\n${broken.join('\n')}`).toEqual([]);
  });

  it('bindet keine externen Ressourcen ein', () => {
    // Alle Schriften und Skripte kommen vom eigenen Server – wichtig für die
    // Aussage in der Datenschutzerklärung.
    const offenders: string[] = [];
    for (const page of pages) {
      const { document } = parseHTML(page.html);
      const nodes = [
        ...document.querySelectorAll('script[src]'),
        ...document.querySelectorAll('link[href]'),
        ...document.querySelectorAll('img[src]'),
      ];
      for (const node of nodes) {
        const value = node.getAttribute('src') ?? node.getAttribute('href') ?? '';
        if (/^https?:\/\//i.test(value) && !value.startsWith(SITE_URL)) {
          offenders.push(`${page.url} → ${value}`);
        }
      }
    }
    expect(offenders, `externe Ressourcen:\n${offenders.join('\n')}`).toEqual([]);
  });

  it('nimmt die 404-Seite aus dem Index', () => {
    const { document } = parseHTML(readFileSync(join(DIST, '404.html'), 'utf8'));
    expect(document.querySelector('meta[name="robots"]')?.getAttribute('content')).toContain(
      'noindex',
    );
  });

  it('die Sprachweiche verlinkt jede Sprachfassung ohne JavaScript', () => {
    const { document } = parseHTML(readFileSync(join(DIST, 'index.html'), 'utf8'));
    const hrefs = [...document.querySelectorAll('body a[href]')].map((node) =>
      node.getAttribute('href'),
    );
    for (const locale of LOCALES) {
      expect(hrefs, `Sprachweiche verlinkt ${locale} nicht`).toContain(`/${locale}/`);
    }
  });

  it('erzeugt eine Sitemap mit allen Sprachfassungen', () => {
    const index = readFileSync(join(DIST, 'sitemap-index.xml'), 'utf8');
    expect(index).toContain('sitemap-0.xml');

    const sitemap = readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8');
    for (const locale of LOCALES) {
      expect(sitemap, `Sitemap ohne ${locale}`).toContain(`${SITE_URL}/${locale}/`);
    }
    expect(sitemap, 'Sitemap enthält die 404-Seite').not.toContain('/404');
  });

  it('jedes Formularfeld hat eine zugeordnete Beschriftung', () => {
    for (const locale of LOCALES) {
      for (const page of ['contact', 'apply'] as const) {
        const { document } = parseHTML(readFileSync(distPath(locale, page), 'utf8'));
        for (const field of document.querySelectorAll('input, select, textarea')) {
          const type = field.getAttribute('type');
          if (type === 'hidden') continue;

          // Zulässig sind drei Wege: label[for], umschließendes label, aria-label.
          const id = field.getAttribute('id');
          const explicitLabel = id ? document.querySelector(`label[for="${id}"]`) : null;
          const wrappingLabel = field.closest('label');
          const ariaLabel = field.getAttribute('aria-label');

          expect(
            Boolean(explicitLabel) || Boolean(wrappingLabel) || Boolean(ariaLabel),
            `Feld "${id ?? field.getAttribute('name')}" auf ${locale}/${page} hat keine Beschriftung`,
          ).toBe(true);
        }
      }
    }
  });

  it('das Bewerbungsformular sendet an die API-Route', () => {
    const { document } = parseHTML(readFileSync(distPath(DEFAULT_LOCALE, 'apply'), 'utf8'));
    const form = document.querySelector('form[data-apply-form]');
    expect(form, 'Bewerbungsformular fehlt').toBeTruthy();
    expect(form!.getAttribute('action')).toBe('/api/apply');
    expect(form!.getAttribute('method')?.toLowerCase()).toBe('post');
    expect(form!.getAttribute('enctype')).toBe('multipart/form-data');
  });

  it('Impressum und Datenschutz sind von jeder Seite mit einem Klick erreichbar', () => {
    const missing: string[] = [];

    for (const page of pages) {
      if (page.url === '/') continue; // Sprachweiche leitet sofort weiter
      const locale = page.url.split('/')[1];
      if (!locale || !(LOCALES as readonly string[]).includes(locale)) continue;

      const { document } = parseHTML(page.html);
      const hrefs = new Set(
        [...document.querySelectorAll('a[href]')].map((node) => node.getAttribute('href')),
      );

      for (const legal of ['imprint', 'privacy'] as const) {
        const target = `/${locale}/${SLUGS[legal][locale as keyof typeof LOCALE_TAGS]}/`;
        if (!hrefs.has(target)) missing.push(`${page.url} → ${legal}`);
      }
    }

    expect(missing, `Pflichtlinks fehlen:\n${missing.join('\n')}`).toEqual([]);
  });

  it('das Impressum nennt alle Pflichtangaben und macht Nummern wählbar', () => {
    for (const locale of LOCALES) {
      const { document } = parseHTML(readFileSync(distPath(locale, 'imprint'), 'utf8'));
      const text = document.body.textContent ?? '';

      // Anbieterkennzeichnung
      expect(text, `Firmenname fehlt in ${locale}`).toContain('Dolmetscherbüro Translation Admy');
      expect(text, `Inhaber fehlt in ${locale}`).toContain('Housni Admy');
      expect(text, `Straße fehlt in ${locale}`).toContain('Berlinstraße 37');
      expect(text, `Ort fehlt in ${locale}`).toContain('Bingen am Rhein');

      // Kontakt- und Steuerangaben in exakter Schreibweise
      expect(text, `Telefon fehlt in ${locale}`).toContain('+49 6721 9875872');
      expect(text, `Fax fehlt in ${locale}`).toContain('+49 6721 9875873');
      expect(text, `Mobil fehlt in ${locale}`).toContain('+49 176 614 174 09');
      expect(text, `USt-IdNr fehlt in ${locale}`).toContain('DE410290042');
      expect(text, `§ 27a UStG fehlt in ${locale}`).toContain('27a');

      // Auf Mobilgeräten wählbar
      const telLinks = [...document.querySelectorAll('a[href^="tel:"]')].map((node) =>
        node.getAttribute('href'),
      );
      expect(telLinks, `Telefon nicht wählbar in ${locale}`).toContain('tel:+4967219875872');
      expect(telLinks, `Mobil nicht wählbar in ${locale}`).toContain('tel:+4917661417409');
    }
  });

  it('nennt keine unbelegten Registerangaben im Impressum', () => {
    // Erfundene Handelsregister- oder Kammerangaben wären ein Abmahnrisiko.
    const { document } = parseHTML(readFileSync(distPath(DEFAULT_LOCALE, 'imprint'), 'utf8'));
    const text = document.body.textContent ?? '';
    for (const term of ['Handelsregister', 'HRB', 'Registergericht', 'Aufsichtsbehörde']) {
      expect(text, `unbelegte Angabe "${term}" im Impressum`).not.toContain(term);
    }
  });

  it('der Bewerbungs-Button ist auf jeder Seite erreichbar', () => {
    for (const locale of LOCALES) {
      const applyPath = `/${locale}/${SLUGS.apply[locale]}/`;
      for (const page of ['home', 'services', 'contact'] as const) {
        const html = readFileSync(distPath(locale, page), 'utf8');
        expect(html, `Bewerbungslink fehlt auf ${locale}/${page}`).toContain(applyPath);
      }
    }
  });
});
