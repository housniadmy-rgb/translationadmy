import { describe, expect, it } from 'vitest';

import { validateApplication } from '../src/server/applications/validate';
import { CONFIRMATIONS, DOCUMENT_KINDS, UPLOAD_LIMITS } from '../src/server/applications/types';
import { TransientApplicationStore } from '../src/server/applications/store';
import { COUNTRY_REQUIREMENTS, countriesNeedingReview } from '../src/data/countries';

function pdf(name: string, bytes = 3): File {
  return new File([new Uint8Array(bytes)], name, { type: 'application/pdf' });
}

/** Baut ein vollständiges, gültiges Formular; einzelne Felder lassen sich überschreiben. */
function buildForm(overrides: Record<string, string | File | null> = {}): FormData {
  const form = new FormData();
  form.set('firstName', 'Amira');
  form.set('lastName', 'Haddad');
  form.set('email', 'amira.haddad@example.org');
  form.set('phone', '+49 170 1234567');
  form.set('city', 'Mainz');
  form.set('country', 'Deutschland');
  form.set('nationality', '');
  form.set('assignmentCountry', 'ES');
  form.set('spokenLanguages', 'Arabisch, Französisch, Deutsch');
  form.set('workingLanguages', 'Arabisch → Deutsch');
  form.append('fields', 'asylum');
  form.append('fields', 'courts');
  form.append('serviceModes', 'interpreting');
  form.append('deliveryModes', 'onsite');
  form.set('travelRange', 'national');
  form.set('availability', 'parttime');
  form.set('experience', '3-5');
  form.set('message', '');
  form.set('consent', 'on');
  form.set('locale', 'de');
  form.set('documents.cv', pdf('lebenslauf.pdf'));
  for (const key of CONFIRMATIONS) form.set(`confirm.${key}`, 'on');

  for (const [key, value] of Object.entries(overrides)) {
    if (value === null) form.delete(key);
    else form.set(key, value);
  }
  return form;
}

describe('Bewerbungsprüfung', () => {
  it('akzeptiert eine vollständige Bewerbung', async () => {
    const result = await validateApplication(buildForm());
    expect(result.errors).toEqual({});
    expect(result.ok).toBe(true);
    expect(result.application?.firstName).toBe('Amira');
    expect(result.application?.assignmentCountry).toBe('ES');
    expect(result.application?.documents.cv?.[0]?.filename).toBe('lebenslauf.pdf');
  });

  it('verlangt die Pflichtfelder', async () => {
    const result = await validateApplication(
      buildForm({ firstName: '', lastName: '  ', phone: '', city: '', country: '' }),
    );
    expect(result.ok).toBe(false);
    for (const field of ['firstName', 'lastName', 'phone', 'city', 'country']) {
      expect(result.errors[field], field).toBe('required');
    }
  });

  it('weist ungültige E-Mail-Adressen ab', async () => {
    for (const email of ['keine-mail', 'a@b', 'a b@example.org', '']) {
      const result = await validateApplication(buildForm({ email }));
      expect(result.errors.email, `akzeptierte "${email}"`).toBe('email');
    }
  });

  it('verlangt ein Einsatzland aus der hinterlegten Liste', async () => {
    const withoutCountry = await validateApplication(buildForm({ assignmentCountry: '' }));
    expect(withoutCountry.errors.assignmentCountry).toBe('required');

    const unknownCountry = await validateApplication(buildForm({ assignmentCountry: 'XX' }));
    expect(unknownCountry.errors.assignmentCountry).toBe('required');
  });

  it('akzeptiert jedes hinterlegte Land', async () => {
    for (const entry of COUNTRY_REQUIREMENTS) {
      const result = await validateApplication(buildForm({ assignmentCountry: entry.code }));
      expect(result.ok, `Land ${entry.code} abgelehnt`).toBe(true);
    }
  });

  it('verlangt alle vier Bestätigungen', async () => {
    for (const key of CONFIRMATIONS) {
      const form = buildForm();
      form.delete(`confirm.${key}`);
      const result = await validateApplication(form);
      expect(result.errors[`confirm.${key}`], `Bestätigung ${key}`).toBe('required');
    }
  });

  it('verlangt mindestens ein Fachgebiet, eine Tätigkeit und eine Einsatzform', async () => {
    const form = buildForm();
    form.delete('fields');
    form.delete('serviceModes');
    form.delete('deliveryModes');
    const result = await validateApplication(form);
    expect(result.errors.fields).toBe('required');
    expect(result.errors.serviceModes).toBe('required');
    expect(result.errors.deliveryModes).toBe('required');
  });

  it('ignoriert Auswahlwerte, die nicht im Katalog stehen', async () => {
    const form = buildForm();
    form.append('fields', 'geheimdienst');
    const result = await validateApplication(form);
    expect(result.application?.fields).toEqual(['asylum', 'courts']);
  });

  it('verlangt die Einwilligung', async () => {
    const form = buildForm();
    form.delete('consent');
    const result = await validateApplication(form);
    expect(result.errors.consent).toBe('required');
  });

  it('verlangt einen Lebenslauf', async () => {
    const form = buildForm();
    form.delete('documents.cv');
    const result = await validateApplication(form);
    expect(result.errors['documents.cv']).toBe('required');
  });

  it('nimmt die übrigen Dokumentarten optional entgegen', async () => {
    const optional = DOCUMENT_KINDS.filter((kind) => kind !== 'cv');
    const form = buildForm();
    for (const kind of optional) form.set(`documents.${kind}`, pdf(`${kind}.pdf`));

    const result = await validateApplication(form);
    expect(result.ok).toBe(true);
    for (const kind of optional) {
      expect(result.application?.documents[kind]?.[0]?.filename, kind).toBe(`${kind}.pdf`);
    }
  });

  it('erhebt bewusst keinen Strafregisternachweis', () => {
    // Sensible Unterlage – wird erst bei konkretem Einsatz angefordert.
    expect(DOCUMENT_KINDS).not.toContain('criminalRecord' as never);
  });

  it('weist unzulässige Dateitypen ab', async () => {
    const result = await validateApplication(
      buildForm({
        'documents.cv': new File([new Uint8Array([1])], 'lebenslauf.exe', {
          type: 'application/octet-stream',
        }),
      }),
    );
    expect(result.errors['documents.cv']).toBe('fileType');
  });

  it('weist zu große Dateien ab', async () => {
    const tooBig = new Uint8Array(UPLOAD_LIMITS.certificateMaxBytes + 1);
    const result = await validateApplication(
      buildForm({
        'documents.cv': new File([tooBig], 'gross.pdf', { type: 'application/pdf' }),
      }),
    );
    expect(result.errors['documents.cv']).toBe('tooLarge');
  });

  it('begrenzt die Anzahl der Dateien je Dokumentart', async () => {
    const form = buildForm();
    for (let i = 0; i <= UPLOAD_LIMITS.maxFilesPerKind; i++) {
      form.append('documents.other', pdf(`zeugnis-${i}.pdf`));
    }
    const result = await validateApplication(form);
    expect(result.errors['documents.other']).toBe('tooMany');
  });

  it('kürzt überlange Eingaben, statt sie abzulehnen', async () => {
    const result = await validateApplication(buildForm({ message: 'x'.repeat(9000) }));
    expect(result.ok).toBe(true);
    expect(result.application!.message.length).toBeLessThanOrEqual(5000);
  });
});

describe('Vorgangsnummer', () => {
  it('folgt einem nachvollziehbaren Muster', async () => {
    const result = await validateApplication(buildForm());
    const { reference } = await new TransientApplicationStore().save(result.application!);
    expect(reference).toMatch(/^TA-\d{12}-AH$/);
  });
});

describe('Länderdaten', () => {
  it('behauptet für kein Land eine geprüfte Gleichwertigkeit', () => {
    // Solange keine fachkundige Stelle geprüft hat, bleibt jedes Land ungeprüft.
    for (const entry of COUNTRY_REQUIREMENTS) {
      expect(entry.reviewStatus, entry.code).toBe('needs-review');
      expect(entry.reviewedOn, entry.code).toBeNull();
    }
    expect(countriesNeedingReview().length).toBe(COUNTRY_REQUIREMENTS.length);
  });

  it('nennt für jedes Land amtliche Quellen', () => {
    for (const entry of COUNTRY_REQUIREMENTS) {
      expect(entry.sources.length, entry.code).toBeGreaterThanOrEqual(2);
      for (const source of entry.sources) {
        expect(source.url, `${entry.code}: ${source.name}`).toMatch(/^https:\/\//);
      }
    }
  });

  it('füllt für jedes Land alle Qualifikationsfelder', () => {
    for (const entry of COUNTRY_REQUIREMENTS) {
      expect(entry.languageCertificates.length, entry.code).toBeGreaterThan(0);
      expect(entry.entranceQualification.length, entry.code).toBeGreaterThan(0);
      expect(entry.vocationalQualification.length, entry.code).toBeGreaterThan(0);
      expect(entry.higherEducation.length, entry.code).toBeGreaterThan(0);
      expect(entry.criminalRecord.length, entry.code).toBeGreaterThan(0);
    }
  });
});
