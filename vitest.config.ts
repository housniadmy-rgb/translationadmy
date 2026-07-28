import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      /*
        `astro:env/server` ist ein virtuelles Modul, das erst beim Astro-Build
        entsteht. Unter Vitest wird der Mailer über src/server/contact/service.ts
        transitiv geladen; ohne diesen Ersatz wäre der Import nicht auflösbar
        und die gesamte Testreihe bräche ab.

        Der Ersatz bildet das Laufzeitverhalten wortgleich nach – siehe
        tests/stubs/astro-env-server.ts.
      */
      'astro:env/server': fileURLToPath(
        new URL('./tests/stubs/astro-env-server.ts', import.meta.url),
      ),
    },
  },
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
    testTimeout: 20_000,
  },
});
