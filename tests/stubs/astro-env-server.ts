/**
 * Ersatz für das virtuelle Modul `astro:env/server` in der Testumgebung.
 *
 * Das echte Modul erzeugt Astro erst beim Build; unter Vitest gibt es es nicht.
 * Die Nachbildung ist bewusst wortgleich mit dem, was Astro zur Laufzeit tut:
 *
 *   astro/templates/env.mjs     export const getSecret = (key) => getEnv(key);
 *   astro/dist/env/runtime.js   let _getEnv = (key) => process.env[key];
 *
 * Der Vercel-Adapter überschreibt diese Vorgabe mit exakt derselben Funktion
 * (@astrojs/vercel/dist/serverless/entrypoint.js: setGetEnv((key) => process.env[key])).
 * Der Ersatz bildet das Verhalten also nicht bloß ähnlich, sondern genau ab.
 */
export function getSecret(key: string): string | undefined {
  return process.env[key];
}
