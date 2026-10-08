// Dünne Schicht über IndexedDB. Jede Sammlung ist ein Object Store mit Schlüssel `id`
// (Zähler und Einstellungen: `key`). Belegdateien liegen als Blob im Store `blobs`.

import { DB_NAME, COLLECTIONS } from './schema.js';

const DB_VERSION = 1;
let dbPromise = null;

const req = (r) => new Promise((resolve, reject) => {
  r.onsuccess = () => resolve(r.result);
  r.onerror = () => reject(r.error);
});

const done = (tx) => new Promise((resolve, reject) => {
  tx.oncomplete = () => resolve();
  tx.onerror = () => reject(tx.error);
  tx.onabort = () => reject(tx.error || new Error('Transaktion abgebrochen'));
});

export function keyPathOf(store) {
  return store === 'counters' || store === 'settings' ? 'key' : 'id';
}

export const ALL_STORES = [...COLLECTIONS, 'settings', 'blobs'];

export function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const open = indexedDB.open(DB_NAME, DB_VERSION);
    open.onupgradeneeded = () => {
      const db = open.result;
      for (const name of ALL_STORES) {
        if (db.objectStoreNames.contains(name)) continue;
        const os = db.createObjectStore(name, { keyPath: keyPathOf(name) });
        // Eindeutiger Index: die Datenbank selbst verhindert doppelte Belegnummern.
        // Entwürfe haben number = null und werden vom Index nicht erfasst.
        if (name === 'invoices' || name === 'quotes') os.createIndex('number', 'number', { unique: true });
        if (name === 'payments' || name === 'reminders') os.createIndex('invoiceId', 'invoiceId');
        if (name === 'audit') os.createIndex('at', 'at');
      }
    };
    open.onsuccess = () => {
      const db = open.result;
      db.onversionchange = () => db.close();
      resolve(db);
    };
    open.onerror = () => reject(open.error);
    open.onblocked = () => reject(new Error('Die Datenbank ist in einem anderen Tab blockiert.'));
  });
  return dbPromise;
}

export async function getAll(store) {
  const db = await openDB();
  return req(db.transaction(store, 'readonly').objectStore(store).getAll());
}

export async function getOne(store, key) {
  const db = await openDB();
  return req(db.transaction(store, 'readonly').objectStore(store).get(key));
}

/**
 * Führt `fn(tx)` in einer Schreib-Transaktion über die genannten Stores aus.
 * `fn` bekommt Helfer { get, put, del, byIndex } und darf nur IndexedDB-Aufrufe
 * abwarten (kein fetch o. Ä.), sonst schließt der Browser die Transaktion.
 * Schlägt irgendein Schritt fehl, wird nichts gespeichert.
 */
export async function transact(stores, fn) {
  const db = await openDB();
  const tx = db.transaction(stores, 'readwrite');
  const finished = done(tx);
  const api = {
    get: (s, k) => req(tx.objectStore(s).get(k)),
    put: (s, v) => req(tx.objectStore(s).put(v)),
    del: (s, k) => req(tx.objectStore(s).delete(k)),
    byIndex: (s, idx, k) => req(tx.objectStore(s).index(idx).get(k)),
    allByIndex: (s, idx, k) => req(tx.objectStore(s).index(idx).getAll(k)),
    clear: (s) => req(tx.objectStore(s).clear()),
  };
  let result;
  try {
    result = await fn(api);
  } catch (err) {
    try { tx.abort(); } catch (_) { /* bereits beendet */ }
    await finished.catch(() => {});
    throw err;
  }
  await finished;
  return result;
}

export async function estimateUsage() {
  if (!navigator.storage || !navigator.storage.estimate) return null;
  try { return await navigator.storage.estimate(); } catch (_) { return null; }
}

/** Bittet den Browser, die Daten nicht bei Speicherknappheit zu löschen. */
export async function requestPersistence() {
  if (!navigator.storage || !navigator.storage.persist) return null;
  try {
    if (await navigator.storage.persisted()) return true;
    return await navigator.storage.persist();
  } catch (_) { return null; }
}
