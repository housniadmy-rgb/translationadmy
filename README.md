# Translation Admy – Website

Mehrsprachige Website des Dolmetscherbüros Translation Admy, Bingen am Rhein.

Gebaut mit [Astro 5](https://astro.build). 17 Sprachfassungen, 13 Seiten je Sprache,
221 vorgerenderte Seiten plus eine Server-Route für Bewerbungen.

---

## Schnellstart

```bash
npm install
npm run dev          # Entwicklungsserver auf http://localhost:4321
```

```bash
npm run verify       # Typprüfung + Production Build + Tests
```

---

## Befehle

| Befehl               | Wirkung                                                        |
| -------------------- | -------------------------------------------------------------- |
| `npm run dev`        | Entwicklungsserver mit Hot Reload                              |
| `npm run build`      | Typprüfung und Production Build nach `dist/`                    |
| `npm run build:only` | Build ohne vorgeschaltete Typprüfung                            |
| `npm run preview`    | Gebaute Seite lokal ausliefern                                  |
| `npm run check`      | TypeScript- und Astro-Diagnose                                  |
| `npm test`           | Testsuite (setzt einen vorhandenen Build voraus)                |
| `npm run verify`     | Alles zusammen – vor jedem Deployment empfohlen                 |

---

## Sprachen

Deutsch ist die Hauptfassung und der redaktionelle Master; `x-default` zeigt darauf.

| | | | |
|---|---|---|---|
| `de` Deutsch | `en` English | `fr` Français | `it` Italiano |
| `es` Español | `el` Ελληνικά | `bg` Български | `ro` Română |
| `pl` Polski | `hu` Magyar | `hr` Hrvatski | `mt` Malti |
| `lt` Lietuvių | `lv` Latviešu | `et` Eesti | `fi` Suomi |
| `nl` Nederlands | | | |

Die Auswahl deckt die EU-Amtssprachen ab, die im Kontext von EU-Außengrenzen,
Asylverfahren, Aufnahmeeinrichtungen sowie Einsätzen von Frontex und EUAA am
häufigsten gebraucht werden.

### URLs

Jede Sprache hat eigene, suchmaschinenfreundliche Pfade in der jeweiligen Sprache:

```
/de/leistungen/          /en/services/            /fr/prestations/
/de/behoerden-und-institutionen/   /en/public-authorities/
/de/bewerbung/           /en/apply/               /nl/sollicitatie/
```

`/` ist eine Sprachweiche: Sie erkennt die zuvor gewählte Sprache
(`localStorage`, kein Cookie) oder die Browsersprache und leitet weiter. Ohne
JavaScript greift ein Meta-Refresh auf `/de/`; zusätzlich sind alle
Sprachfassungen als echte Links im Body verlinkt, damit Suchmaschinen sie finden.

Der Sprachwechsel bleibt immer auf derselben Unterseite – aus
`/de/fachgebiete/` wird `/fi/erikoisalat/`, nicht die Startseite.

### Texte ändern

Alle Texte liegen in `src/i18n/locales/<code>.ts`. Jede Datei deklariert sich als
`Dictionary` (`src/i18n/types.ts`). Fehlt ein Schlüssel, schlägt `npm run check`
fehl – eine unvollständige Übersetzung kann also nicht unbemerkt live gehen.

Bewusst **nicht** übersetzt: Firmenname, Personennamen, Anschrift,
Telefonnummern, E-Mail-Adresse, Steuernummer sowie die Bezeichnungen der
angebotenen Sprachen (`src/data/languages.ts`).

### Sprache hinzufügen

1. Code in `LOCALES`, `LOCALE_NAMES` und `LOCALE_TAGS` in `src/i18n/config.ts` ergänzen.
2. Für jede Seite in `SLUGS` ein URL-Segment hinterlegen.
3. `src/i18n/locales/<code>.ts` anlegen (am einfachsten `de.ts` kopieren und übersetzen).
4. `npm run verify` – Typprüfung und Tests melden alles Fehlende.

Sitemap, hreflang, Sprachumschalter und Footer-Sprachliste aktualisieren sich
automatisch.

---

## Bewerbungen von Dolmetschern

Die Seite `/<sprache>/bewerbung/` nimmt Bewerbungen mit Lebenslauf und
Zertifikaten entgegen. Es gibt bewusst **keine Registrierung, kein Benutzerkonto
und kein Passwort**.

Ablauf: Formular → `POST /api/apply` → Prüfung → E-Mail an das Büro mit allen
Angaben und Anhängen → Eingangsbestätigung an die bewerbende Person.

### SMTP einrichten

Datei- und E-Mail-Versand brauchen einen Server; rein statisches Hosting genügt
dafür nicht. Konfiguration über Umgebungsvariablen (siehe `.env.example`):

```
SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_SECURE, MAIL_FROM
```

Ist SMTP nicht konfiguriert, meldet das Formular offen, dass der Versand noch
eingerichtet werden muss, und verweist auf die E-Mail-Adresse. So geht keine
Bewerbung stillschweigend verloren.

### Grenzen der Uploads

Lebenslauf ist Pflicht, Zertifikate sind freiwillig. Zulässig sind PDF, JPG und
PNG mit je maximal 8 MB, höchstens 5 Zertifikate. Die Grenzen stehen in
`src/server/applications/types.ts` und werden serverseitig durchgesetzt.

---

## Architektur

```
src/
  consts.ts                 Stammdaten: Kontakt, Anschrift, rechtliche Angaben
  data/languages.ts         Sprachangebot (119 Sprachen und Dialekte)
  i18n/
    config.ts               Sprachen, Seiten, lokalisierte URL-Segmente
    types.ts                Übersetzungsschema – erzwingt Vollständigkeit
    index.ts                Routing-Hilfen, hreflang, Sprachwechsel
    locales/*.ts            17 Sprachdateien
  components/               Header, Footer, Formulare, Icons, SEO-Head
  sections/                 Seiteninhalte (eine Datei je Seitentyp)
  layouts/Layout.astro      Grundgerüst
  pages/
    [...path].astro         erzeugt alle Sprachfassungen aller Seiten
    index.astro             Sprachweiche
    404.astro
    api/apply.ts            Bewerbungs-Endpunkt (läuft zur Laufzeit)
  server/applications/      Fachlogik der Bewerbungen
    types.ts                Datenmodell und Upload-Grenzen
    validate.ts             Prüfung der Formulardaten
    store.ts                Ablage (austauschbar)
    mailer.ts               Versand (austauschbar)
    service.ts              Ablauf: aufnehmen → benachrichtigen → bestätigen
```

Eine einzige Route (`[...path].astro`) erzeugt sämtliche Sprachfassungen aus der
zentralen Slug-Tabelle. Navigation, Sitemap und hreflang können dadurch nicht
auseinanderlaufen.

### Vorbereitet für den Ausbau

Die Bewerbungslogik ist bewusst in Schichten geschnitten. Für spätere
Erweiterungen genügt es, eine Implementierung auszutauschen – Formular und
HTTP-Route bleiben unverändert:

| Ausbaustufe                       | Ansatzpunkt                                              |
| --------------------------------- | -------------------------------------------------------- |
| Dolmetscher-Datenbank             | `ApplicationStore` implementieren, `setStore()` aufrufen |
| Bewerberverwaltung / Dashboard    | zusätzliche Routen unter `src/pages/`, Store als Quelle  |
| Automatische E-Mail-Benachrichtigungen | weitere Aufrufe in `service.ts`                     |
| Anderer Mailversand               | `Mailer` implementieren, `setMailer()` aufrufen          |
| Login (falls später gewünscht)    | Middleware vor die neuen Routen, öffentliche Seiten bleiben unberührt |

`src/server/applications/types.ts` ist die eine Stelle, an der die Struktur einer
Bewerbung definiert ist – Formular, Prüfung, Versand und ein späterer
Datenbank-Store greifen alle darauf zu.

---

## Deployment

Der Build erzeugt zwei Verzeichnisse:

- `dist/client/` – alle statischen Seiten und Assets
- `dist/server/` – der Node-Server für `/api/apply`

Start in Produktion:

```bash
npm run build
node ./dist/server/entry.mjs
```

Der Server hört auf `HOST` und `PORT` (Voreinstellung `0.0.0.0:4321`) und wird
üblicherweise hinter einem Reverse Proxy mit TLS betrieben.

### Anderer Hoster

Für Vercel, Netlify oder Cloudflare genügt der Austausch des Adapters in
`astro.config.mjs`:

```bash
npx astro add vercel     # oder netlify / cloudflare
```

### Reines Static Hosting

Möglich, wenn auf Datei-Uploads verzichtet wird: Adapter entfernen und
`src/pages/api/apply.ts` löschen. Die Bewerbungsseite muss dann auf einen
externen Formulardienst umgestellt werden.

---

## SEO

- Eigener Meta-Titel und eigene Meta-Beschreibung je Seite **und** je Sprache
- `hreflang` für alle 17 Fassungen plus `x-default` auf die deutsche Fassung
- Canonical je Sprachfassung
- Sitemap unter `/sitemap-index.xml`, alle Sprachen enthalten, 404 ausgenommen
- Strukturierte Daten: `ProfessionalService`, `WebSite`, `BreadcrumbList`
- Open Graph und Twitter Cards mit eigenem Vorschaubild
- Keine externen Ressourcen – Schriften und Grafiken liegen auf dem eigenen
  Server (durch einen Test abgesichert)

---

## Datenschutz

Keine Cookies zu Analyse-, Werbe- oder Tracking-Zwecken. Keine Analysedienste
Dritter. Keine externen Schriftarten. Die gewählte Sprache wird ausschließlich
lokal im Browser (`localStorage`) gespeichert und nicht übertragen.

---

## Tests

141 Tests in fünf Dateien:

- `config.test.ts` – Domain, Sitemap-Verweis, Eindeutigkeit der URL-Segmente, Navigation
- `i18n.test.ts` – alle 17 Sprachdateien vollständig, keine leeren Werte,
  eigene Meta-Angaben je Seite, keine versehentlich kopierten Fassungen
- `content.test.ts` – Sprachdaten, Kontakt- und Rechtsangaben unverändert übernommen
- `applications.test.ts` – Prüflogik des Bewerbungsformulars, Upload-Grenzen
- `build.test.ts` – prüft die tatsächlich gebauten HTML-Seiten: Titel, Beschreibung,
  genau eine H1, Canonical, hreflang, strukturierte Daten, interne Links,
  Formularbeschriftungen, Sitemap

`build.test.ts` überspringt sich selbst, wenn kein Build vorliegt. Für einen
vollständigen Durchlauf `npm run verify` nutzen.

---

## Redaktionelle Grundsätze

Alle Inhalte stammen von der bestehenden Website oder sind belegbare
Beschreibungen des Angebots. Bewusst **nicht** enthalten sind erfundene
Referenzen, Auftraggeber, Zertifizierungen oder Partnerschaften.

Behörden und Organisationen wie BAMF, EUAA oder Frontex werden ausschließlich
als **Zielgruppen** des Angebots benannt. Auf der Seite „Behörden &
Institutionen“ steht dazu in jeder Sprachfassung eine ausdrückliche
Klarstellung, dass es sich nicht um Referenzen handelt und keine Zusammenarbeit
besteht. Ein Test stellt sicher, dass dieser Hinweis in allen Sprachen vorhanden
bleibt.
