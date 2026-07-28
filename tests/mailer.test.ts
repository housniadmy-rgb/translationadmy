import { readFileSync } from 'node:fs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { getMailer, missingSmtpVariables, setMailer } from '../src/server/applications/mailer';

/**
 * Verhalten des Mailers bei vollständiger und bei fehlender SMTP-Konfiguration.
 *
 * Die Werte kommen über `getSecret` aus `astro:env/server`. Unter Vitest wird
 * dieses virtuelle Modul auf tests/stubs/astro-env-server.ts umgeleitet, das
 * `process.env` liest – genau wie Astro und der Vercel-Adapter zur Laufzeit.
 * Die Tests setzen deshalb `process.env` und prüfen damit denselben Pfad.
 */

const SMTP_KEYS = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD', 'MAIL_FROM', 'SMTP_PORT'] as const;

const VOLLSTAENDIG: Record<string, string> = {
  SMTP_HOST: 'smtp.beispiel.de',
  SMTP_USER: 'postfach@beispiel.de',
  SMTP_PASSWORD: 'geheim-nur-im-test',
  MAIL_FROM: 'postfach@beispiel.de',
};

let gesichert: Record<string, string | undefined> = {};

beforeEach(() => {
  gesichert = Object.fromEntries(SMTP_KEYS.map((key) => [key, process.env[key]]));
  for (const key of SMTP_KEYS) delete process.env[key];
  // Der Mailer merkt sich seine Entscheidung – vor jedem Fall zurücksetzen.
  setMailer(null);
});

afterEach(() => {
  for (const [key, value] of Object.entries(gesichert)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
  setMailer(null);
  vi.restoreAllMocks();
});

describe('SMTP-Konfiguration erkannt', () => {
  it('meldet bei vollständiger Konfiguration keine fehlenden Variablen', () => {
    Object.assign(process.env, VOLLSTAENDIG);
    expect(missingSmtpVariables()).toEqual([]);
  });

  it('wählt bei vollständiger Konfiguration den echten Versand', () => {
    Object.assign(process.env, VOLLSTAENDIG);
    expect(getMailer().isConfigured).toBe(true);
  });

  it('kommt ohne MAIL_FROM aus und nutzt SMTP_USER als Absender', () => {
    // MAIL_FROM ist entbehrlich; ohne SMTP_USER wäre es das nicht.
    Object.assign(process.env, VOLLSTAENDIG);
    delete process.env.MAIL_FROM;

    expect(missingSmtpVariables()).toEqual(['MAIL_FROM']);
    expect(getMailer().isConfigured).toBe(true);
  });

  it('ignoriert versehentliche Leerzeichen und Zeilenumbrüche', () => {
    // Beim Einfügen in die Projekteinstellungen kommt leicht ein Umbruch mit.
    Object.assign(process.env, {
      SMTP_HOST: '  smtp.beispiel.de\n',
      SMTP_USER: ' postfach@beispiel.de ',
      SMTP_PASSWORD: '\tgeheim-nur-im-test\n',
      MAIL_FROM: ' postfach@beispiel.de\n',
    });

    expect(missingSmtpVariables()).toEqual([]);
    expect(getMailer().isConfigured).toBe(true);
  });

  it('behandelt eine leere Variable wie eine fehlende', () => {
    Object.assign(process.env, VOLLSTAENDIG, { SMTP_PASSWORD: '   ' });
    expect(missingSmtpVariables()).toEqual(['SMTP_PASSWORD']);
    expect(getMailer().isConfigured).toBe(false);
  });
});

describe('SMTP-Konfiguration fehlt', () => {
  it('nennt alle fehlenden Variablen beim Namen', () => {
    expect(missingSmtpVariables()).toEqual([
      'SMTP_HOST',
      'SMTP_USER',
      'SMTP_PASSWORD',
      'MAIL_FROM',
    ]);
  });

  it('nennt gezielt die eine fehlende Variable', () => {
    Object.assign(process.env, VOLLSTAENDIG);
    delete process.env.SMTP_HOST;
    expect(missingSmtpVariables()).toEqual(['SMTP_HOST']);
  });

  it('fällt auf den protokollierenden Ersatz zurück', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(getMailer().isConfigured).toBe(false);
  });

  it('protokolliert die Namen der fehlenden Variablen', () => {
    const fehler = vi.spyOn(console, 'error').mockImplementation(() => {});
    getMailer();

    const ausgabe = fehler.mock.calls.map((args) => args.join(' ')).join('\n');
    expect(ausgabe, 'Meldung fehlt').toContain('Fehlende SMTP-Variablen');
    for (const name of ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD', 'MAIL_FROM']) {
      expect(ausgabe, `${name} nicht genannt`).toContain(name);
    }
  });

  it('protokolliert unter keinen Umständen Werte', () => {
    /*
      Ein Protokoll ist auf vielen Plattformen breiter einsehbar als die
      Projekteinstellungen. Ein dorthin geschriebenes Passwort gilt als
      offengelegt und müsste gewechselt werden.
    */
    Object.assign(process.env, VOLLSTAENDIG);
    delete process.env.SMTP_HOST;

    const fehler = vi.spyOn(console, 'error').mockImplementation(() => {});
    const warnung = vi.spyOn(console, 'warn').mockImplementation(() => {});
    getMailer();

    const ausgabe = [...fehler.mock.calls, ...warnung.mock.calls]
      .map((args) => args.join(' '))
      .join('\n');

    for (const wert of Object.values(VOLLSTAENDIG)) {
      expect(ausgabe, `Wert "${wert}" steht im Protokoll`).not.toContain(wert);
    }
  });
});

describe('Herkunft der Zugangsdaten', () => {
  const quelle = readFileSync(
    new URL('../src/server/applications/mailer.ts', import.meta.url),
    'utf8',
  );

  it('liest die Werte über Astros Adapter-Schnittstelle', () => {
    expect(quelle, 'getSecret wird nicht importiert').toMatch(
      /import \{ getSecret \} from 'astro:env\/server';/,
    );
    expect(quelle, 'env() nutzt getSecret nicht').toMatch(/getSecret\(name\)/);
  });

  it('greift nicht mehr unmittelbar auf process.env zu', () => {
    /*
      Welche Quelle gilt, bestimmt der Adapter. Ein direkter Zugriff hier würde
      beim Wechsel auf eine Plattform ohne process.env stillschweigend ins
      Leere laufen. Kommentare sind ausgenommen.
    */
    const ohneKommentare = quelle
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/^\s*\/\/.*$/gm, '')
      .replace(/^\s*\*.*$/gm, '');

    expect(ohneKommentare, 'process.env wird noch direkt gelesen').not.toContain('process.env');
  });

  it('gibt in der Diagnose ausschließlich Variablennamen aus', () => {
    /*
      Kein console-Aufruf darf einen gelesenen Wert weiterreichen.

      Geprüft wird auf die Bezeichner der Werte – kleingeschrieben und mit
      Wortgrenze. Die Namen der Umgebungsvariablen (SMTP_PASSWORD und so fort)
      dürfen ausdrücklich vorkommen: Sie sind der Zweck der Meldung. Da der
      Unterstrich als Wortzeichen gilt, trennt \b sie sauber vom Bezeichner
      `password`.
    */
    const protokollzeilen = quelle.match(/console\.(error|warn|log|info)\([\s\S]*?\);/g) ?? [];
    expect(protokollzeilen.length, 'keine Diagnose vorhanden').toBeGreaterThan(0);

    const wertbezeichner = [
      /\bpassword\b/,
      /\bhost\b/,
      /\buser\b/,
      /\bfrom\b/,
      /getSecret\s*\(/,
      /\benv\s*\(/,
    ];

    for (const zeile of protokollzeilen) {
      for (const muster of wertbezeichner) {
        expect(zeile, `verdächtige Ausgabe (${muster}): ${zeile}`).not.toMatch(muster);
      }
    }
  });

  it('schreibt den Inhalt der Nachricht nicht ins Protokoll', () => {
    /*
      Solange SMTP nicht eingerichtet ist, läuft jede Absendung durch den
      protokollierenden Ersatz. Stünde dort der Nachrichtentext, landeten Name,
      Rufnummer, Anschrift und Sprachen der bewerbenden Person im Log der
      Zielumgebung – das ist regelmäßig breiter einsehbar als das Postfach.
    */
    expect(quelle, 'message.text wird protokolliert').not.toMatch(
      /console\.\w+\([\s\S]*?message\.text[\s\S]*?\);/,
    );
    expect(quelle, 'Empfänger wird protokolliert').not.toMatch(
      /console\.\w+\([\s\S]*?message\.to[\s\S]*?\);/,
    );
  });
});
