// Fester Ordner für Backups (File System Access API, Chrome und Edge). Der Browser merkt sich den
// gewählten Ordner; ein Klick auf „Backup“ legt die Datei dann direkt dort ab statt unter Downloads.
// Die Ordner-Freigabe liegt in einer eigenen kleinen Datenbank dieses Geräts – nie im Backup.

const DB = 'bbc-finance-device';
const STORE = 'handles';
const KEY = 'backupFolder';

export const folderSupported = () => typeof window !== 'undefined' && typeof window.showDirectoryPicker === 'function' && window.isSecureContext !== false;

function openDevDB() {
  return new Promise((resolve, reject) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => { if (!r.result.objectStoreNames.contains(STORE)) r.result.createObjectStore(STORE); };
    r.onsuccess = () => resolve(r.result);
    r.onerror = () => reject(r.error);
  });
}
async function idb(mode, fn) {
  const db = await openDevDB();
  try {
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, mode);
      const req = fn(tx.objectStore(STORE));
      tx.oncomplete = () => resolve(req && req.result);
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  } finally { db.close(); }
}

/** Gemerkter Ordner oder null. */
export async function getBackupFolder() {
  if (!folderSupported()) return null;
  try { return (await idb('readonly', (s) => s.get(KEY))) || null; } catch (_) { return null; }
}

/** Ordner auswählen lassen und merken. Gibt den Ordner zurück oder null, wenn abgebrochen. */
export async function pickBackupFolder() {
  let handle;
  try {
    handle = await window.showDirectoryPicker({ id: 'bbc-finance-backups', mode: 'readwrite', startIn: 'documents' });
  } catch (err) {
    if (err && err.name === 'AbortError') return null;
    throw new Error('Der Ordner konnte nicht gewählt werden. Systemordner wie „Downloads“ oder der Schreibtisch selbst sind teils gesperrt – bitte einen Unterordner wählen.');
  }
  await idb('readwrite', (s) => s.put(handle, KEY));
  return handle;
}

export async function clearBackupFolder() {
  try { await idb('readwrite', (s) => s.delete(KEY)); } catch (_) { /* egal */ }
}

/**
 * Schreibrecht sicherstellen. Nach einem Neustart des Browsers fragt Chrome einmal nach
 * („Bearbeiten erlauben“) – das muss direkt aus einem Klick heraus passieren.
 */
async function permitted(handle) {
  const opts = { mode: 'readwrite' };
  if (typeof handle.queryPermission === 'function' && (await handle.queryPermission(opts)) === 'granted') return true;
  if (typeof handle.requestPermission === 'function') return (await handle.requestPermission(opts)) === 'granted';
  return typeof handle.queryPermission !== 'function';
}

/**
 * Datei in den gemerkten Ordner schreiben. `makeBlob` wird erst nach der Freigabe aufgerufen,
 * damit die Rückfrage des Browsers noch zum Klick gehört.
 * Ergebnis: { saved: true, folder } oder { saved: false, reason } (dann lädt der Aufrufer normal herunter).
 */
export async function saveToBackupFolder(name, makeBlob) {
  const handle = await getBackupFolder();
  if (!handle) return { saved: false, reason: 'none' };
  let ok = false;
  try { ok = await permitted(handle); } catch (_) { ok = false; }
  if (!ok) return { saved: false, reason: 'denied', folder: handle.name };
  const blob = await makeBlob();
  try {
    const file = await handle.getFileHandle(name, { create: true });
    const w = await file.createWritable();
    await w.write(blob);
    await w.close();
    return { saved: true, folder: handle.name, size: blob.size, blob };
  } catch (err) {
    return { saved: false, reason: 'error', folder: handle.name, blob, message: err && err.message };
  }
}
