// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

/**
 * Alle Inhaltsseiten werden vorgerendert (statisch, schnell, gut indexierbar).
 * Nur die Bewerbungs-API läuft zur Laufzeit – sie nimmt Datei-Uploads entgegen
 * und versendet E-Mails, was statisches Hosting nicht leisten kann.
 *
 * Für einen Wechsel des Hosters genügt es, den Adapter auszutauschen
 * (@astrojs/vercel, @astrojs/netlify, @astrojs/cloudflare).
 */
export default defineConfig({
  // Muss mit SITE_URL in src/consts.ts übereinstimmen – abgesichert durch tests/config.test.ts.
  site: 'https://www.translationadmy.de',
  trailingSlash: 'ignore',
  adapter: node({ mode: 'standalone' }),
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
