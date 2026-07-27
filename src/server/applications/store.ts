import type { Application } from './types';

/**
 * Ablage für eingegangene Bewerbungen.
 *
 * Aktuell werden Bewerbungen ausschließlich per E-Mail zugestellt; es wird
 * nichts dauerhaft gespeichert. Die Schnittstelle existiert trotzdem bereits,
 * damit später eine Datenbank ergänzt werden kann, ohne Route oder Service
 * anzufassen: Es genügt, eine weitere Implementierung zu hinterlegen und in
 * `createStore()` auszuwählen.
 */
export interface ApplicationStore {
  /**
   * Nimmt eine Bewerbung auf und gibt eine Referenz zurück, unter der sie
   * später auffindbar ist (z. B. Datenbank-ID oder Vorgangsnummer).
   */
  save(application: Application): Promise<{ reference: string }>;
}

/**
 * Vergibt eine gut lesbare Vorgangsnummer, damit Bewerbung und Rückfrage
 * einander zugeordnet werden können – auch ohne Datenbank.
 */
function buildReference(application: Application): string {
  const stamp = application.receivedAt
    .toISOString()
    .replace(/[-:T]/g, '')
    .slice(0, 12);
  const initials = (
    application.firstName.charAt(0) + application.lastName.charAt(0)
  ).toUpperCase();
  return `TA-${stamp}-${initials || 'XX'}`;
}

/**
 * Standardimplementierung: vergibt nur eine Vorgangsnummer.
 * Die Bewerbung selbst wird vom Mailer zugestellt.
 */
export class TransientApplicationStore implements ApplicationStore {
  async save(application: Application): Promise<{ reference: string }> {
    return { reference: buildReference(application) };
  }
}

let store: ApplicationStore = new TransientApplicationStore();

export function getStore(): ApplicationStore {
  return store;
}

/**
 * Austauschpunkt für eine spätere Datenbankanbindung oder für Tests.
 */
export function setStore(next: ApplicationStore): void {
  store = next;
}
