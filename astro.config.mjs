// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

/**
 * Zielumgebung: Vercel.
 *
 * Alle 252 Inhaltsseiten werden vorgerendert und als statische Dateien vom
 * CDN ausgeliefert – schnell und gut indexierbar. Ein Adapter ist trotzdem
 * nötig, denn zwei Routen können nicht statisch sein:
 *
 *   /api/contact  nimmt das Anfrageformular entgegen
 *   /api/apply    nimmt Bewerbungen samt Datei-Uploads entgegen
 *
 * Beide versenden über SMTP (nodemailer) und brauchen deshalb Node zur
 * Laufzeit. Ohne Adapter würden sie beim Build wegfallen und beide Formulare
 * ins Leere laufen. Astro rendert sie als Vercel-Funktionen, alles andere
 * bleibt statisch – das ist derselbe Aufbau wie zuvor, nur für Vercel statt
 * für einen eigenen Node-Server.
 *
 * Für einen Wechsel des Hosters genügt der Austausch dieses Adapters
 * (@astrojs/netlify, @astrojs/cloudflare, @astrojs/node).
 */
export default defineConfig({
  // Muss mit SITE_URL in src/consts.ts übereinstimmen – abgesichert durch tests/config.test.ts.
  site: 'https://www.translationadmy.de',
  trailingSlash: 'ignore',
  adapter: vercel(),

  /*
    Bildverarbeitung abschalten.

    Astro bündelt sonst sharp samt libvips in die Serverfunktion – rund 19 MB,
    davon plattformabhängige Binärdateien. Die Website nutzt ausschließlich
    handgezeichnete Inline-SVGs (Icons, Logo, Hero) und zwei SVG-Dateien unter
    public/; Astros Bildpipeline kommt nirgends zum Einsatz.

    Ohne diese Zeile wiegt die Funktion 22 MB statt 3 MB, und die unter Windows
    erzeugten .dll-Dateien wären auf Vercels Linux-Laufzeit ohnehin unbrauchbar.
  */
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
  build: {
    // Erzeugt /leistungen/index.html – saubere URLs ohne .html-Endung.
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/api/'),
      changefreq: 'monthly',
      lastmod: new Date('2026-07-27'),
      serialize(item) {
        // Startseite bekommt die höchste Priorität, rechtliche Seiten die niedrigste.
        const path = new URL(item.url).pathname.replace(/\/$/, '');
        if (path === '') return { ...item, priority: 1.0, changefreq: 'weekly' };
        if (path === '/impressum' || path === '/datenschutz') {
          return { ...item, priority: 0.2, changefreq: 'yearly' };
        }
        return { ...item, priority: 0.8 };
      },
    }),
  ],
  vite: {
    ssr: {
      // nodemailer ist eine reine Node-Abhängigkeit und darf nicht gebündelt werden.
      external: ['nodemailer'],
    },
  },
});
