/**
 * Prüft die SMTP-Konfiguration und verschickt auf Wunsch eine Testmail.
 *
 *   node scripts/check-smtp.mjs                 nur Verbindung und TLS prüfen
 *   node scripts/check-smtp.mjs --send          zusätzlich eine Testmail senden
 *   node scripts/check-smtp.mjs --send you@example.de   an eine andere Adresse
 *
 * Die Zugangsdaten kommen ausschließlich aus der Umgebung bzw. aus .env –
 * es steht nichts davon im Repository.
 */
import { existsSync, readFileSync } from 'node:fs';
import nodemailer from 'nodemailer';

/** Minimaler .env-Leser; bewusst ohne zusätzliche Abhängigkeit. */
function loadEnvFile(path = '.env') {
  if (!existsSync(path)) return;
  for (const rawLine of readFileSync(path, 'utf8').split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const index = line.indexOf('=');
    if (index === -1) continue;
    const key = line.slice(0, index).trim();
    let value = line.slice(index + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnvFile();

const host = process.env.SMTP_HOST?.trim();
const user = process.env.SMTP_USER?.trim();
const password = process.env.SMTP_PASSWORD?.trim();
const from = process.env.MAIL_FROM?.trim() || user;
const port = Number(process.env.SMTP_PORT?.trim() || 587);

const missing = [
  ['SMTP_HOST', host],
  ['SMTP_USER', user],
  ['SMTP_PASSWORD', password],
  ['MAIL_FROM', from],
].filter(([, value]) => !value);

if (missing.length > 0) {
  console.error('Fehlende Angaben:', missing.map(([name]) => name).join(', '));
  console.error('Bitte .env.example nach .env kopieren und ausfüllen.');
  process.exit(1);
}

const secure = process.env.SMTP_SECURE
  ? process.env.SMTP_SECURE.trim() === 'true'
  : port === 465;
const allowSelfSigned = process.env.SMTP_ALLOW_SELF_SIGNED?.trim() === 'true';

console.log('SMTP-Prüfung');
console.log(`  Server      : ${host}:${port}`);
console.log(`  Verfahren   : ${secure ? 'SMTPS (implizites TLS)' : 'STARTTLS (erzwungen)'}`);
console.log(`  Benutzer    : ${user}`);
console.log(`  Absender    : ${from}`);
console.log(`  Zertifikate : ${allowSelfSigned ? 'NICHT geprüft (nur für Tests!)' : 'werden geprüft'}`);
console.log('');

const transport = nodemailer.createTransport({
  host,
  port,
  secure,
  requireTLS: !secure,
  auth: { user, pass: password },
  tls: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: !allowSelfSigned,
    servername: host,
  },
});

try {
  await transport.verify();
  console.log('✓ Verbindung, TLS und Anmeldung erfolgreich.');
} catch (error) {
  console.error('✗ Verbindung fehlgeschlagen:', error instanceof Error ? error.message : error);
  console.error('');
  console.error('Häufige Ursachen:');
  console.error('  • falscher Port (587 für STARTTLS, 465 für SMTPS)');
  console.error('  • Benutzername oder Passwort falsch');
  console.error('  • der Anbieter verlangt ein eigenes App-Passwort');
  console.error('  • der Server bietet kein STARTTLS an – dann Port 465 nutzen');
  process.exit(1);
}

const wantsSend = process.argv.includes('--send');
if (!wantsSend) {
  console.log('');
  console.log('Zum Versand einer Testmail: node scripts/check-smtp.mjs --send');
  process.exit(0);
}

const explicit = process.argv[process.argv.indexOf('--send') + 1];
const recipient = explicit && !explicit.startsWith('--') ? explicit : from;

try {
  const info = await transport.sendMail({
    from,
    to: recipient,
    subject: 'Testmail – Translation Admy Website',
    text: [
      'Diese Testmail bestätigt, dass der Versand über eine verschlüsselte',
      'SMTP-Verbindung funktioniert.',
      '',
      `Server    : ${host}:${port}`,
      `Verfahren : ${secure ? 'SMTPS (implizites TLS)' : 'STARTTLS'}`,
      '',
      'Damit sind Bewerbungs- und Kontaktformular betriebsbereit.',
    ].join('\n'),
  });

  console.log(`✓ Testmail an ${recipient} versendet.`);
  console.log(`  Message-ID: ${info.messageId}`);
} catch (error) {
  console.error('✗ Versand fehlgeschlagen:', error instanceof Error ? error.message : error);
  process.exit(1);
}
