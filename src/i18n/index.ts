import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_NAMES,
  LOCALE_TAGS,
  PAGE_IDS,
  SLUGS,
  type Locale,
  type PageId,
} from './config';
import type { Dictionary } from './types';

export * from './config';
export type { Dictionary } from './types';

/**
 * Alle Sprachdateien werden zur Build-Zeit eingesammelt.
 * Jede Datei deklariert sich selbst als `Dictionary` und wird deshalb
 * einzeln von TypeScript geprüft.
 */
const modules = import.meta.glob<{ default: Dictionary }>('./locales/*.ts', {
  eager: true,
});

const dictionaries = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const code = path.replace('./locales/', '').replace('.ts', '');
    return [code, mod.default];
  }),
) as Record<string, Dictionary>;

/** Sprachen, für die tatsächlich eine Übersetzungsdatei vorliegt. */
export const AVAILABLE_LOCALES: Locale[] = LOCALES.filter(
  (locale) => dictionaries[locale] !== undefined,
);

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

const german = dictionaries[DEFAULT_LOCALE]!;

/**
 * Sprachfassungen, in denen mindestens ein Abschnitt noch fehlt.
 * Wird beim Build ausgegeben und von tests/i18n.test.ts geprüft.
 */
export const INCOMPLETE_LOCALES: { locale: string; missing: string[] }[] = LOCALES.flatMap(
  (locale) => {
    const dict = dictionaries[locale];
    if (!dict) return [{ locale, missing: ['<gesamte Datei>'] }];
    const missing: string[] = [];
    for (const section of Object.keys(german) as (keyof Dictionary)[]) {
      const own = dict[section] as Record<string, unknown> | undefined;
      if (own === undefined) {
        missing.push(section);
        continue;
      }
      // Auch einzelne fehlende Schlüssel innerhalb eines Abschnitts melden.
      const base = german[section] as Record<string, unknown>;
      const gaps = Object.keys(base).filter((key) => own[key] === undefined);
      if (gaps.length > 0) missing.push(`${section}.{${gaps.join(', ')}}`);
    }
    return missing.length > 0 ? [{ locale, missing }] : [];
  },
);

if (INCOMPLETE_LOCALES.length > 0) {
  // Bewusst laut: Eine unvollständige Fassung darf nicht unbemerkt live gehen.
  console.warn(
    '[i18n] Unvollständige Sprachfassungen – es wird abschnittsweise auf Deutsch zurückgefallen:\n' +
      INCOMPLETE_LOCALES.map((entry) => `  ${entry.locale}: ${entry.missing.join(', ')}`).join('\n'),
  );
}

/**
 * Liefert das Wörterbuch einer Sprache.
 *
 * Fehlt ein ganzer Abschnitt, wird er aus der deutschen Fassung ergänzt.
 * Das ist ein Sicherheitsnetz für den Entwicklungsstand – es verhindert
 * Abstürze, ersetzt aber keine Übersetzung. Welche Abschnitte betroffen sind,
 * steht in INCOMPLETE_LOCALES und wird beim Build ausgegeben.
 */
export function getDictionary(locale: Locale): Dictionary {
  const dict = dictionaries[locale];
  if (!dict) {
    if (import.meta.env.DEV) {
      console.warn(`[i18n] Keine Übersetzungsdatei für "${locale}" – nutze "${DEFAULT_LOCALE}".`);
    }
    return german;
  }

  // Abschnittsweise zusammenführen, damit auch einzelne fehlende Schlüssel
  // aufgefüllt werden und keine Seite auf "undefined" läuft.
  // Aufbau über ein loses Record; TypeScript kann den indizierten Zugriff auf
  // Dictionary nicht je Abschnitt verengen. Die Vollständigkeit sichert die
  // deutsche Fassung als Basis – jeder Abschnitt ist danach befüllt.
  const merged: Record<string, unknown> = {};
  for (const section of Object.keys(german) as (keyof Dictionary)[]) {
    merged[section] = {
      ...(german[section] as object),
      ...((dict[section] ?? {}) as object),
    };
  }
  return merged as unknown as Dictionary;
}

/**
 * Baut den Pfad einer Seite in einer bestimmten Sprache.
 * Immer mit führendem und abschließendem Slash: /de/, /en/services/
 */
export function localizedPath(locale: Locale, page: PageId): string {
  const slug = SLUGS[page][locale];
  return slug === '' ? `/${locale}/` : `/${locale}/${slug}/`;
}

/** Absolute URL einer Seite – für Canonical, hreflang und strukturierte Daten. */
export function absoluteUrl(siteUrl: string, locale: Locale, page: PageId): string {
  return new URL(localizedPath(locale, page), siteUrl).href;
}

export interface AlternateLink {
  locale: Locale;
  /** hreflang-Wert, z. B. "de-DE" oder "x-default". */
  hreflang: string;
  href: string;
  label: string;
}

/**
 * Erzeugt die hreflang-Alternativen einer Seite.
 * Der Sprachwechsel bleibt dadurch immer auf derselben Unterseite.
 */
export function getAlternates(siteUrl: string, page: PageId): AlternateLink[] {
  return AVAILABLE_LOCALES.map((locale) => ({
    locale,
    hreflang: LOCALE_TAGS[locale],
    href: absoluteUrl(siteUrl, locale, page),
    label: LOCALE_NAMES[locale],
  }));
}

/** x-default zeigt auf die deutsche Hauptfassung. */
export function getXDefault(siteUrl: string, page: PageId): string {
  return absoluteUrl(siteUrl, DEFAULT_LOCALE, page);
}

/** Ermittelt aus einem Pfad die Seite und Sprache – Basis für den Sprachumschalter. */
export function resolvePath(pathname: string): { locale: Locale; page: PageId } | null {
  const segments = pathname.split('/').filter(Boolean);
  const [maybeLocale, maybeSlug = ''] = segments;
  if (!maybeLocale || !isLocale(maybeLocale)) return null;

  const page = PAGE_IDS.find((id) => SLUGS[id][maybeLocale] === maybeSlug);
  return page ? { locale: maybeLocale, page } : null;
}

/** Alle (Sprache, Seite)-Kombinationen – Grundlage für getStaticPaths. */
export function allRoutes(): { locale: Locale; page: PageId }[] {
  return AVAILABLE_LOCALES.flatMap((locale) =>
    PAGE_IDS.map((page) => ({ locale, page })),
  );
}

/** Ersetzt Platzhalter der Form {count} in Übersetzungsstrings. */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
