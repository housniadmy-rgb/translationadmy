import type { APIRoute } from 'astro';

import { submitContact, validateContact } from '../../server/contact/service';

/** Diese Route wird zur Laufzeit ausgeführt, nicht vorgerendert. */
export const prerender = false;

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

/**
 * Nimmt Kontaktanfragen entgegen und stellt sie per TLS-gesichertem SMTP zu.
 * Bewusst dünn gehalten: Prüfung und Versand liegen in src/server/contact.
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
    return json({ ok: true }, 200);
  }

  const result = validateContact(form);
  if (!result.ok || !result.request) {
    return json({ ok: false, error: 'validation', errors: result.errors }, 422);
  }

  try {
    const { delivered } = await submitContact(result.request);

    if (!delivered) {
      // Ohne konfigurierten Versand darf keine Erfolgsmeldung erscheinen.
      return json({ ok: false, error: 'notDelivered' }, 503);
    }

    return json({ ok: true }, 200);
  } catch (error) {
    console.error('[api/contact] Anfrage konnte nicht verarbeitet werden', error);
    return json({ ok: false, error: 'server' }, 500);
  }
};

export const ALL: APIRoute = () => json({ ok: false, error: 'methodNotAllowed' }, 405);
