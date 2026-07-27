import type { APIRoute } from 'astro';

import { validateApplication } from '../../server/applications/validate';
import { submitApplication } from '../../server/applications/service';

/** Diese Route wird zur Laufzeit ausgeführt, nicht vorgerendert. */
export const prerender = false;

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

/**
 * Nimmt Bewerbungen entgegen.
 * Bewusst dünn gehalten: Diese Datei kennt nur HTTP. Prüfung, Zustellung und
 * Ablage liegen in src/server/applications und bleiben unverändert, wenn
 * später eine Datenbank oder ein Bewerber-Dashboard ergänzt wird.
 */
export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'badRequest' }, 400);
  }

  // Honeypot: von Menschen nie ausgefüllt.
  if (typeof form.get('website') === 'string' && form.get('website') !== '') {
    return json({ ok: true, reference: null }, 200);
  }

  const result = await validateApplication(form);
  if (!result.ok || !result.application) {
    return json({ ok: false, error: 'validation', errors: result.errors }, 422);
  }

  try {
    const { reference, delivered } = await submitApplication(result.application);

    if (!delivered) {
      // Ohne konfigurierten Versand darf keine Erfolgsmeldung erscheinen –
      // sonst hielte sich die bewerbende Person für angenommen.
      return json({ ok: false, error: 'notDelivered' }, 503);
    }

    return json({ ok: true, reference }, 200);
  } catch (error) {
    console.error('[api/apply] Bewerbung konnte nicht verarbeitet werden', error);
    return json({ ok: false, error: 'server' }, 500);
  }
};

/** Andere Methoden sind nicht vorgesehen. */
export const ALL: APIRoute = () => json({ ok: false, error: 'methodNotAllowed' }, 405);
