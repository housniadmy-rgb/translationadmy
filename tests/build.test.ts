import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';
import { beforeAll, describe, expect, it } from 'vitest';

import { SITE_URL, CONTACT, ADDRESS, LEGAL } from '../src/consts';
import {
  LOCALES,
  LOCALE_TAGS,
  PAGE_IDS,
  SLUGS,
  DEFAULT_LOCALE,
  localeDirection,
} from '../src/i18n/config';

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
    // 18 Sprachen × 14 Seiten + Sprachweiche + 404
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

  it('gibt auf jeder Seite ein <html>-Element mit lang und dir aus', () => {
    /*
      Regressionsschutz: Ein JSX-Kommentar zwischen <!doctype html> und <html>
      genügt, damit Astro das Dokument nicht mehr als vollständiges
      HTML-Dokument erkennt und das <html>-Element samt lang und dir
      stillschweigend weglässt. Im Quelltext ist das kaum zu sehen, im Build
      fehlt dann auf jeder Seite die Sprach- und Richtungsangabe.

      Geprüft wird deshalb am Rohtext, nicht über den Parser: linkedom ergänzt
      ein fehlendes <html> beim Einlesen von selbst.
    */
    for (const page of pages) {
      if (page.url === '/') continue; // Sprachweiche, eigenes Markup
      expect(page.html, `<html lang=…> fehlt: ${page.url}`).toMatch(/<html lang="[^"]+"/);
      expect(page.html, `dir fehlt: ${page.url}`).toMatch(/<html [^>]*dir="(ltr|rtl)"/);
    }
  });

  it('setzt die Textrichtung je Sprachfassung', () => {
    for (const locale of LOCALES) {
      for (const page of PAGE_IDS) {
        const html = readFileSync(distPath(locale, page), 'utf8');
        const dir = html.match(/<html [^>]*dir="(ltr|rtl)"/)?.[1];
        expect(dir, `dir für ${locale}/${page}`).toBe(localeDirection(locale));
      }
    }
  });

  it('stellt Kontaktdaten in der arabischen Fassung von links nach rechts dar', () => {
    /*
      Rufnummern, Faxnummer, E-Mail-Adresse, Anschrift, USt-IdNr. und
      Steuernummer sind lateinische Zeichenfolgen. Ohne dir="ltr" rückt der
      Bidi-Algorithmus im arabischen Textfluss führende Zeichen an die falsche
      Seite: aus „+49 6721 9875872“ würde „9875872 6721 49+“.
    */
    const values = [CONTACT.phone, CONTACT.mobile, CONTACT.fax, CONTACT.email];

    for (const page of ['home', 'contact', 'imprint'] as const) {
      const { document } = parseHTML(readFileSync(distPath('ar', page), 'utf8'));
      const ltrText = [...document.querySelectorAll('[dir="ltr"]')]
        .map((node) => node.textContent ?? '')
        .join(' ');

      for (const value of values) {
        if (!(document.body.textContent ?? '').includes(value)) continue;
        expect(ltrText, `${value} ohne dir="ltr" auf /ar/${page}`).toContain(value);
      }
    }

    // Impressum: Pflichtangaben mit Zahlen und Schrägstrichen.
    const { document } = parseHTML(readFileSync(distPath('ar', 'imprint'), 'utf8'));
    const ltrText = [...document.querySelectorAll('[dir="ltr"]')]
      .map((node) => node.textContent ?? '')
      .join(' ');
    expect(ltrText, 'USt-IdNr. ohne dir="ltr"').toContain(LEGAL.vatId);
    expect(ltrText, 'Steuernummer ohne dir="ltr"').toContain(LEGAL.taxNumber);
    expect(ltrText, 'Straße ohne dir="ltr"').toContain(ADDRESS.street);
  });

  it('spiegelt nur richtungsgebundene Symbole', () => {
    // Der Weiter-Pfeil trägt eine Leserichtung, das Telefonsymbol nicht.
    const { document } = parseHTML(readFileSync(distPath('ar', 'home'), 'utf8'));
    const directional = document.querySelectorAll('svg.icon-directional');
    expect(directional.length, 'kein gespiegeltes Symbol gefunden').toBeGreaterThan(0);
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

  it('das Hamburger-Menü führt jede Seite und jede Sprachfassung auf', () => {
    /*
      Im Kompaktmodus (Smartphone und Tablet) ist dieses Menü der einzige
      Zugang zur Navigation. Fehlt dort eine Seite, ist sie auf dem Gerät
      praktisch nicht erreichbar – „Einsatzgebiete“ und „Über uns“ waren
      genau so verloren gegangen.
    */
    const missing: string[] = [];

    for (const locale of LOCALES) {
      const { document } = parseHTML(readFileSync(distPath(locale, 'home'), 'utf8'));
      const menu = document.querySelector('#mobile-menu');
      expect(menu, `Menü fehlt in ${locale}`).toBeTruthy();

      const hrefs = new Set(
        [...menu!.querySelectorAll('a[href]')].map((node) => node.getAttribute('href')),
      );

      for (const page of PAGE_IDS) {
        const slug = SLUGS[page][locale as keyof typeof LOCALE_TAGS];
        const target = slug === '' ? `/${locale}/` : `/${locale}/${slug}/`;
        if (!hrefs.has(target)) missing.push(`${locale} → ${page}`);
      }

      // Die Sprachwahl steht im Kompaktmodus ausschließlich im Menü.
      for (const other of LOCALES) {
        if (!hrefs.has(`/${other}/`)) missing.push(`${locale} → Sprache ${other}`);
      }
    }

    expect(missing, `im Menü fehlen:\n${missing.join('\n')}`).toEqual([]);
  });

  it('führt die Sprachwahl im Hamburger-Menü vor dem ersten Menüpunkt', () => {
    /*
      Reihenfolge im Panel: Logo, Sprachwahl, Menüpunkte, Handlungsaufrufe.

      Die Sprachwahl stand früher ganz unten – hinter dreizehn Menüpunkten und
      zwei Buttons. Wer die Seitensprache nicht lesen kann, muss die Sprachwahl
      aber als Erstes finden, ohne das halbe Menü durchscrollen zu müssen.
    */
    for (const locale of LOCALES) {
      const html = readFileSync(distPath(locale, 'home'), 'utf8');
      const { document } = parseHTML(html);
      const panel = document.querySelector('.mobile-menu-panel');
      expect(panel, `Panel fehlt in ${locale}`).toBeTruthy();

      const kinder = [...panel!.children].map((node) => node.className);
      expect(kinder, `Aufbau des Panels in ${locale}`).toEqual([
        'mobile-menu-head',
        'mobile-menu-lang',
        'mobile-menu-nav',
        'mobile-menu-cta',
      ]);

      // Die Sprachwahl ist derselbe Baustein wie im Kopf, mit eigener Kennung.
      const umschalter = panel!.querySelector('#mobile-language-menu');
      expect(umschalter, `Sprachwahl fehlt im Menü von ${locale}`).toBeTruthy();
      expect(
        umschalter!.querySelectorAll('a[href]').length,
        `Sprachen im Menü von ${locale}`,
      ).toBe(LOCALES.length);
    }
  });

  it('vergibt die Kennung der Sprachliste nur einmal je Seite', () => {
    /*
      Der Umschalter steht zweimal im Dokument – im Kopf und im Menü. Ohne
      eigene Kennung je Instanz zeigte aria-controls auf das falsche Element.
    */
    for (const page of pages) {
      if (page.url === '/') continue;
      const treffer = page.html.match(/id="(mobile-)?language-menu"/g) ?? [];
      expect(treffer.sort(), `doppelte Kennung auf ${page.url}`).toEqual([
        'id="language-menu"',
        'id="mobile-language-menu"',
      ]);
    }
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
