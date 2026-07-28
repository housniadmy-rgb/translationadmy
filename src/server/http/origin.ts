/**
 * Herkunftsprüfung für Formularanfragen.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * WARUM DIESE DATEI EXISTIERT
 *
 * Astro bringt mit `security.checkOrigin` eine eigene Prüfung mit. Sie
 * vergleicht den `Origin`-Kopf strikt mit `url.origin` der Anfrage:
 *
 *     request.headers.get('origin') === url.origin
 *
 * Auf Vercel scheitert dieser Vergleich immer, und zwar aus einem Grund, der
 * mit der eigentlichen Herkunft nichts zu tun hat: Astro verwirft seit 5.14
 * den `Host`- und `X-Forwarded-Host`-Kopf, solange `security.allowedDomains`
 * nicht gesetzt ist (Schutz vor Host-Header-Injection). In
 * `NodeApp.createRequest` bleibt dann nur die Ersatzkette
 *
 *     validated.host ?? validatedHostname ?? 'localhost'
 *
 * übrig – beide Werte sind ohne `allowedDomains` undefiniert. Die Anfrage-URL
 * lautet damit `https://localhost/api/contact`, während der Browser
 * `Origin: https://www.translationadmy.de` sendet. Ergebnis: 403.
 *
 * Die Konfiguration setzt `allowedDomains` deshalb jetzt korrekt. Die Prüfung
 * hier bleibt trotzdem, aus drei Gründen:
 *
 *   1. Sie hängt nicht davon ab, wie ein Adapter die Anfrage-URL rekonstruiert.
 *      Der `Origin`-Kopf kommt unverändert vom Browser.
 *   2. Sie antwortet mit JSON. Astros Prüfung liefert reinen Text; das Formular
 *      ruft `response.json()` auf und landete dadurch in der Fehlerbehandlung
 *      mit einer nichtssagenden Meldung.
 *   3. Sie ist als Einheit prüfbar – siehe tests/origin.test.ts.
 * ────────────────────────────────────────────────────────────────────────────
 */

/**
 * Ursprünge, von denen Formulare abgeschickt werden dürfen.
 *
 * Bewusst als vollständige Zeichenketten und mit exaktem Vergleich: Ein
 * Abgleich auf Teilzeichenketten oder Endungen wäre angreifbar, denn
 * `https://www.translationadmy.de.beispiel-angriff.de` endet nicht, aber
 * beginnt mit der erlaubten Zeichenfolge.
 *
 * Die Apex-Domain steht mit in der Liste: Sie wird zwar auf www weitergeleitet,
 * eine bereits ausgelieferte Seite auf der Apex-Domain würde aber mit deren
 * Origin abschicken.
 */
export const PRODUCTION_ORIGINS: readonly string[] = [
  'https://www.translationadmy.de',
  'https://translationadmy.de',
];

/** Nur während der Entwicklung zusätzlich erlaubt. */
export const DEVELOPMENT_ORIGINS: readonly string[] = [
  'http://localhost:4321',
  'http://127.0.0.1:4321',
];

/** Alle erlaubten Ursprünge für die jeweilige Umgebung. */
export function allowedOrigins(isDevelopment: boolean): string[] {
  return isDevelopment
    ? [...PRODUCTION_ORIGINS, ...DEVELOPMENT_ORIGINS]
    : [...PRODUCTION_ORIGINS];
}

/**
 * Darf diese Anfrage ein Formular abschicken?
 *
 * Eine fehlende Herkunftsangabe gilt als nicht erlaubt. Browser senden bei
 * POST immer einen `Origin`-Kopf; fehlt er, stammt die Anfrage nicht aus einem
 * Formular dieser Website.
 */
export function isAllowedOrigin(
  request: Request,
  isDevelopment: boolean = import.meta.env.DEV,
): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return false;
  return allowedOrigins(isDevelopment).includes(origin);
}

/**
 * Antwort bei nicht erlaubter Herkunft.
 *
 * Nennt bewusst weder die erlaubten Ursprünge noch die empfangene Herkunft –
 * eine Fehlermeldung ist kein Ort, um die eigene Konfiguration auszuplaudern.
 */
export function forbiddenOriginResponse(): Response {
  return new Response(JSON.stringify({ ok: false, error: 'forbiddenOrigin' }), {
    status: 403,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}
