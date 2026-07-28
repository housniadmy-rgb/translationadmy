import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

import {
  DEVELOPMENT_ORIGINS,
  PRODUCTION_ORIGINS,
  allowedOrigins,
  forbiddenOriginResponse,
  isAllowedOrigin,
} from '../src/server/http/origin';
import { SITE_URL } from '../src/consts';

/** Baut eine Formularanfrage mit der angegebenen Herkunft. */
function anfrage(origin: string | null): Request {
  const headers = new Headers({ 'content-type': 'multipart/form-data; boundary=x' });
  if (origin !== null) headers.set('origin', origin);
  return new Request('https://www.translationadmy.de/api/contact', {
    method: 'POST',
    headers,
  });
}

describe('Herkunftsprüfung der Formularrouten', () => {
  it('lässt die Produktionsdomains zu', () => {
    for (const origin of PRODUCTION_ORIGINS) {
      expect(isAllowedOrigin(anfrage(origin), false), `${origin} müsste erlaubt sein`).toBe(true);
      expect(isAllowedOrigin(anfrage(origin), true), `${origin} müsste erlaubt sein`).toBe(true);
    }
  });

  it('lässt die Entwicklungsadressen nur während der Entwicklung zu', () => {
    for (const origin of DEVELOPMENT_ORIGINS) {
      expect(isAllowedOrigin(anfrage(origin), true), `${origin} in Entwicklung`).toBe(true);
      expect(isAllowedOrigin(anfrage(origin), false), `${origin} in Produktion`).toBe(false);
    }
  });

  it('weist fremde Herkünfte ab', () => {
    const fremd = [
      'https://beispiel-angriff.de',
      'http://www.translationadmy.de', // unverschlüsselt
      'https://translationadmy.vercel.app', // Vorschau-Bereitstellung
      'null', // sandboxed iframe
      '',
    ];
    for (const origin of fremd) {
      expect(isAllowedOrigin(anfrage(origin), false), `${origin} müsste abgewiesen werden`).toBe(
        false,
      );
      expect(isAllowedOrigin(anfrage(origin), true), `${origin} müsste abgewiesen werden`).toBe(
        false,
      );
    }
  });

  it('weist Herkünfte ab, die die erlaubte nur enthalten', () => {
    /*
      Der häufigste Fehler bei solchen Prüfungen ist ein Vergleich auf Anfang,
      Ende oder Teilzeichenkette. Jeder dieser Werte würde damit durchrutschen.
    */
    const getarnt = [
      'https://www.translationadmy.de.beispiel-angriff.de',
      'https://beispiel-angriff.de/https://www.translationadmy.de',
      'https://wwwXtranslationadmy.de',
      'https://www.translationadmy.de:8443',
      'https://www.translationadmy.de/',
      'https://sub.www.translationadmy.de',
    ];
    for (const origin of getarnt) {
      expect(isAllowedOrigin(anfrage(origin), false), `${origin} müsste abgewiesen werden`).toBe(
        false,
      );
    }
  });

  it('weist eine fehlende Herkunftsangabe ab', () => {
    // Browser senden bei POST immer einen Origin-Kopf.
    expect(isAllowedOrigin(anfrage(null), false)).toBe(false);
    expect(isAllowedOrigin(anfrage(null), true)).toBe(false);
  });

  it('antwortet mit JSON und Status 403', async () => {
    /*
      Astros eingebaute Prüfung antwortet mit reinem Text. Das Formular ruft
      response.json() auf und landete dadurch in der Fehlerbehandlung mit
      einer nichtssagenden Meldung statt der eigentlichen Ursache.
    */
    const antwort = forbiddenOriginResponse();
    expect(antwort.status).toBe(403);
    expect(antwort.headers.get('content-type')).toContain('application/json');

    const inhalt = (await antwort.json()) as { ok: boolean; error: string };
    expect(inhalt).toEqual({ ok: false, error: 'forbiddenOrigin' });
  });

  it('verrät in der Fehlermeldung keine Konfiguration', () => {
    // Eine Fehlermeldung ist kein Ort, um erlaubte Ursprünge aufzuzählen.
    const text = JSON.stringify(forbiddenOriginResponse());
    for (const origin of [...PRODUCTION_ORIGINS, ...DEVELOPMENT_ORIGINS]) {
      expect(text).not.toContain(origin);
    }
  });

  it('führt die kanonische Adresse der Website', () => {
    // Verhindert, dass Domain und Herkunftsliste auseinanderlaufen.
    expect(PRODUCTION_ORIGINS).toContain(SITE_URL);
  });

  it('nennt in Produktion ausschließlich verschlüsselte Ursprünge', () => {
    for (const origin of allowedOrigins(false)) {
      expect(origin, `${origin} ist unverschlüsselt`).toMatch(/^https:\/\//);
    }
  });
});

describe('Einbindung in die Formularrouten', () => {
  const routen = ['contact', 'apply'] as const;

  it.each(routen)('prüft in api/%s.ts die Herkunft', (route) => {
    const quelle = readFileSync(new URL(`../src/pages/api/${route}.ts`, import.meta.url), 'utf8');
    expect(quelle, `isAllowedOrigin fehlt in api/${route}.ts`).toContain('isAllowedOrigin(request)');
    expect(quelle, `forbiddenOriginResponse fehlt in api/${route}.ts`).toContain(
      'forbiddenOriginResponse()',
    );
  });

  it.each(routen)('prüft die Herkunft vor dem Lesen des Formulars in api/%s.ts', (route) => {
    /*
      Reihenfolge ist wesentlich: Eine Bewerbung bringt bis zu sechs Dateien
      mit je 8 MB mit. Würde erst gelesen und dann geprüft, nähme der Server
      die gesamte Last entgegen, bevor er die Anfrage verwirft.
    */
    const quelle = readFileSync(new URL(`../src/pages/api/${route}.ts`, import.meta.url), 'utf8');
    const pruefung = quelle.indexOf('isAllowedOrigin(request)');
    const lesen = quelle.indexOf('request.formData()');

    expect(pruefung, `keine Prüfung in api/${route}.ts`).toBeGreaterThan(-1);
    expect(lesen, `kein formData-Aufruf in api/${route}.ts`).toBeGreaterThan(-1);
    expect(pruefung, `Prüfung steht nach dem Lesen in api/${route}.ts`).toBeLessThan(lesen);
  });

  it.each(routen)('behält Honeypot und serverseitige Prüfung in api/%s.ts', (route) => {
    const quelle = readFileSync(new URL(`../src/pages/api/${route}.ts`, import.meta.url), 'utf8');
    expect(quelle, `Honeypot fehlt in api/${route}.ts`).toContain("form.get('website')");
    expect(quelle, `Validierung fehlt in api/${route}.ts`).toMatch(/validate(Contact|Application)/);
  });

  it('schaltet Astros eigene Prüfung ab und benennt die vertrauten Hosts', () => {
    const config = readFileSync(new URL('../astro.config.mjs', import.meta.url), 'utf8');
    expect(config, 'checkOrigin nicht abgeschaltet').toMatch(/checkOrigin:\s*false/);
    expect(config, 'allowedDomains fehlt').toContain('allowedDomains');
    expect(config, 'Produktionsdomain fehlt in allowedDomains').toContain(
      'www.translationadmy.de',
    );
  });

  it('schickt die Formulare an relative Pfade', () => {
    /*
      Ein relativer Pfad geht immer an genau den Ursprung, der die Seite
      ausgeliefert hat. Damit stimmt der Origin-Kopf zwangsläufig mit dem Ziel
      überein – eine absolute URL könnte auf eine andere Domain zeigen und die
      Prüfung scheitern lassen.
    */
    for (const datei of ['ContactForm', 'ApplicationForm']) {
      const quelle = readFileSync(
        new URL(`../src/components/${datei}.astro`, import.meta.url),
        'utf8',
      );
      expect(quelle, `absolute action in ${datei}`).toMatch(/action="\/api\/(contact|apply)"/);
      expect(quelle, `absolute URL im fetch von ${datei}`).not.toMatch(
        /fetch\(\s*['"`]https?:\/\//,
      );
      expect(quelle, `${datei} nutzt nicht den relativen Pfad`).toContain(
        "fetch(form.getAttribute('action')",
      );
    }
  });
});
