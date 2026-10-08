// Zentraler Zustand. Alle Sammlungen liegen im Arbeitsspeicher und werden bei jeder
// Änderung in derselben IndexedDB-Transaktion gespeichert, in der auch der Audit-Eintrag
// entsteht. Erst wenn die Transaktion steht, wird der Arbeitsspeicher aktualisiert.

import { COLLECTIONS, DEFAULT_SETTINGS } from './schema.js';
import { getAll, transact, ALL_STORES, keyPathOf, requestPersistence } from './db.js';
import { uid, nowISO, clone } from './util.js';

export const state = {
  ready: false,
  version: 0,
  settings: clone(DEFAULT_SETTINGS),
};
const maps = {};
for (const c of COLLECTIONS) { state[c] = []; maps[c] = new Map(); }

const listeners = new Set();
export function subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); }
let paused = 0;
let pendingEmit = false;
function emit() {
  state.version += 1;
  memo.clear();
  if (paused) { pendingEmit = true; return; }
  for (const fn of listeners) fn(state.version);
}

/** Viele Schreibvorgänge am Stück: die Oberfläche wird erst am Ende einmal aktualisiert. */
export async function batch(fn) {
  paused += 1;
  try {
    return await fn();
  } finally {
    paused -= 1;
    if (!paused && pendingEmit) {
      pendingEmit = false;
      for (const l of listeners) l(state.version);
    }
  }
}

let channel = null;
try {
  if (typeof window !== 'undefined' && typeof BroadcastChannel !== 'undefined') {
    channel = new BroadcastChannel('bbc-finance-sync');
    channel.onmessage = (ev) => { if (ev.data === 'changed') reload(); };
  }
} catch (_) { channel = null; }

/** Stores, deren Änderungen als „seit dem letzten Backup geändert“ zählen. */
const BACKUP_RELEVANT = new Set(COLLECTIONS.filter((c) => c !== 'rates'));

export async function reload() {
  const rows = await Promise.all([...COLLECTIONS, 'settings'].map((c) => getAll(c)));
  COLLECTIONS.forEach((c, i) => {
    maps[c] = new Map(rows[i].map((r) => [r[keyPathOf(c)], r]));
    state[c] = rows[i];
  });
  const settings = clone(DEFAULT_SETTINGS);
  for (const row of rows[COLLECTIONS.length]) {
    if (Object.hasOwn(DEFAULT_SETTINGS, row.key)) settings[row.key] = row.value;
  }
  state.settings = settings;
  state.ready = true;
  emit();
}

export async function load() {
  await reload();
  requestPersistence();
}

export const all = (coll) => state[coll];
export const byId = (coll, id) => (id ? maps[coll].get(id) : undefined);

/* ---------- Abgeleitete Daten (pro Zustandsversion zwischengespeichert) ---------- */

const memo = new Map();
function cached(key, fn) {
  if (!memo.has(key)) memo.set(key, fn());
  return memo.get(key);
}

function groupBy(coll, field) {
  return cached(`group:${coll}:${field}`, () => {
    const m = new Map();
    for (const row of state[coll]) {
      const k = row[field];
      if (!m.has(k)) m.set(k, []);
      m.get(k).push(row);
    }
    return m;
  });
}
const EMPTY = Object.freeze([]);
export const paymentsOf = (invoiceId) => groupBy('payments', 'invoiceId').get(invoiceId) || EMPTY;
export const remindersOf = (invoiceId) => groupBy('reminders', 'invoiceId').get(invoiceId) || EMPTY;
export const assetUrl = (id) => (id && maps.assets.get(id) ? maps.assets.get(id).dataUrl : '');
export const activeCompanies = () => cached('activeCompanies', () => state.companies.filter((c) => !c.archived)
  .sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1)));

/** Aktuell im Company Switcher gewähltes Unternehmen (oder null für „Alle“). */
export function currentCompany() {
  const id = state.settings.activeCompany;
  if (!id || id === 'all') return null;
  const c = byId('companies', id);
  return c && !c.archived ? c : null;
}
/** Filter für Listen: passt der Datensatz zum gewählten Unternehmen? */
export function inScope(row) {
  const c = currentCompany();
  return !c || row.companyId === c.id;
}

/* ---------- Schreiben ---------- */

export function makeAudit({ action, entity, entityId, label, prev, next }) {
  return {
    id: uid(),
    at: nowISO(),
    user: state.settings.userName || 'Lokaler Benutzer',
    action,
    entity: entity || '',
    entityId: entityId || '',
    label: label || '',
    prev: prev == null ? null : prev,
    next: next == null ? null : next,
  };
}

/**
 * Führt Änderungen atomar aus.
 * fn erhält einen Schreiber `w` mit get/put/del/byIndex/audit/setting. Wirft fn einen Fehler,
 * wird nichts gespeichert und der Arbeitsspeicher bleibt unverändert.
 */
export async function write(fn) {
  const pending = [];
  let relevant = false;
  const settingsPatch = {};
  const result = await transact(ALL_STORES, async (tx) => {
    const w = {
      get: tx.get,
      byIndex: tx.byIndex,
      allByIndex: tx.allByIndex,
      put(store, value) {
        pending.push({ store, value });
        if (BACKUP_RELEVANT.has(store) && store !== 'audit') relevant = true;
        return tx.put(store, value);
      },
      del(store, id) {
        pending.push({ store, id, del: true });
        if (BACKUP_RELEVANT.has(store)) relevant = true;
        return tx.del(store, id);
      },
      clear(store) {
        pending.push({ store, clear: true });
        return tx.clear(store);
      },
      blobPut: (id, blob) => tx.put('blobs', { id, blob }),
      blobDel: (id) => tx.del('blobs', id),
      audit(entry) {
        const e = makeAudit(entry);
        pending.push({ store: 'audit', value: e });
        return tx.put('audit', e);
      },
      setting(key, value) {
        settingsPatch[key] = value;
        return tx.put('settings', { key, value });
      },
    };
    const res = await fn(w);
    if (relevant && !('changesSinceBackup' in settingsPatch)) {
      const row = await tx.get('settings', 'changesSinceBackup');
      const n = (row && Number(row.value)) || 0;
      settingsPatch.changesSinceBackup = n + 1;
      await tx.put('settings', { key: 'changesSinceBackup', value: n + 1 });
    }
    return res;
  });

  // Transaktion steht – jetzt den Arbeitsspeicher nachziehen.
  const touched = new Set();
  for (const p of pending) {
    if (!maps[p.store]) continue;
    if (p.clear) maps[p.store] = new Map();
    else if (p.del) maps[p.store].delete(p.id);
    else maps[p.store].set(p.value[keyPathOf(p.store)], p.value);
    touched.add(p.store);
  }
  for (const s of touched) state[s] = [...maps[s].values()];
  if (Object.keys(settingsPatch).length) state.settings = { ...state.settings, ...settingsPatch };
  emit();
  if (channel) { try { channel.postMessage('changed'); } catch (_) { /* egal */ } }
  return result;
}

/** Andere offene Tabs zum Neuladen des Datenbestands auffordern (nach Einspielen, Leeren, Löschen). */
export function broadcastChange() {
  if (channel) { try { channel.postMessage('changed'); } catch (_) { /* egal */ } }
}

export async function setSetting(key, value) {
  return write((w) => w.setting(key, value));
}

export async function setSettings(patch) {
  return write(async (w) => {
    for (const [k, v] of Object.entries(patch)) await w.setting(k, v);
  });
}
