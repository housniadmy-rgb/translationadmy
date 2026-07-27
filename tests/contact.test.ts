import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

import { validateContact } from '../src/server/contact/service';

function buildForm(overrides: Record<string, string | null> = {}): FormData {
  const form = new FormData();
  form.set('name', 'Kerstin Vogel');
  form.set('email', 'k.vogel@beispielamt.de');
  form.set('organisation', 'Ausländerbehörde Musterstadt');
  form.set('subject', 'Dolmetscheinsatz');
  form.set('message', 'Wir benötigen am 12. des Monats eine Dolmetschung auf Tigrinia.');
  form.set('consent', 'on');
  form.set('locale', 'de');

  for (const [key, value] of Object.entries(overrides)) {
    if (value === null) form.delete(key);
    else form.set(key, value);
  }
  return form;
}

describe('Kontaktanfragen', () => {
  it('akzeptiert eine vollständige Anfrage', () => {
    const result = validateContact(buildForm());
    expect(result.errors).toEqual({});
    expect(result.ok).toBe(true);
    expect(result.request?.name).toBe('Kerstin Vogel');
    expect(result.request?.organisation).toBe('Ausländerbehörde Musterstadt');
  });

  it('verlangt Name, Nachricht und Einwilligung', () => {
    const form = buildForm({ name: '  ', message: '' });
    form.delete('consent');
    const result = validateContact(form);

    expect(result.ok).toBe(false);
    expect(result.errors.name).toBe('required');
    expect(result.errors.message).toBe('required');
    expect(result.errors.consent).toBe('required');
  });

  it('weist ungültige E-Mail-Adressen ab', () => {
    for (const email of ['keine-mail', 'a@b', 'a b@example.org', '']) {
      expect(validateContact(buildForm({ email })).errors.email, email).toBe('email');
    }
  });

  it('behandelt Organisation und Anliegen als freiwillig', () => {
    const result = validateContact(buildForm({ organisation: '', subject: '' }));
    expect(result.ok).toBe(true);
  });

  it('kürzt überlange Nachrichten, statt sie abzulehnen', () => {
    const result = validateContact(buildForm({ message: 'x'.repeat(9000) }));
    expect(result.ok).toBe(true);
    expect(result.request!.message.length).toBeLessThanOrEqual(5000);
  });
});

describe('Transportverschlüsselung', () => {
  const mailer = readFileSync(
    new URL('../src/server/applications/mailer.ts', import.meta.url),
    'utf8',
  );

  it('erzwingt STARTTLS, wenn die Verbindung nicht bereits verschlüsselt ist', () => {
    // Ohne requireTLS würde nodemailer im Zweifel unverschlüsselt senden.
    expect(mailer).toMatch(/requireTLS:\s*!secure/);
  });

  it('schließt veraltete TLS-Versionen aus', () => {
    expect(mailer).toMatch(/minVersion:\s*'TLSv1\.2'/);
  });

  it('prüft Serverzertifikate, sofern nicht ausdrücklich abgeschaltet', () => {
    expect(mailer).toMatch(/rejectUnauthorized:\s*!allowSelfSigned/);
  });
});

describe('Zugangsdaten', () => {
  it('stehen nicht im Repository', () => {
    // .env.example enthält nur Platzhalter, niemals echte Werte.
    const example = readFileSync(new URL('../.env.example', import.meta.url), 'utf8');
    expect(example).toMatch(/^SMTP_PASSWORD=\s*$/m);
    expect(example).toContain('SMTP_HOST=smtp.example.de');
  });

  it('die .env ist von der Versionsverwaltung ausgeschlossen', () => {
    const ignore = readFileSync(new URL('../.gitignore', import.meta.url), 'utf8');
    expect(ignore).toMatch(/^\.env$/m);
  });
});
