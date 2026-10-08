// JSON-Backup: vollständiger Export aller Sammlungen (inklusive Belegdateien) und Wiederherstellung.
// Der API-Key wird bewusst nie exportiert.
//
// Dateiaufbau (gültiges JSON, aber zeilenweise geschrieben, damit auch sehr große Backups
// Stück für Stück gelesen und geschrieben werden können):
//   {"format":"bbc-finance-backup", … ,"data":{…},"files":{
//   "<id>":"data:image/jpeg;base64,…",
//   "<id>":"data:application/pdf;base64,…"
//   }}

import { COLLECTIONS, SCHEMA_VERSION, DEFAULT_SETTINGS } from './schema.js';
import { getAll, transact, ALL_STORES, keyPathOf } from './db.js';
import { state, reload, write, broadcastChange } from './store.js';
import { nowISO, uid } from './util.js';

const SECRET_SETTINGS = ['aiApiKey'];
const LOCAL_SETTINGS = ['lastBackupAt', 'changesSinceBackup'];
export const BACKUP_FORMAT = 'bbc-finance-backup';

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result);
    fr.onerror = () => reject(fr.error);
    fr.readAsDataURL(blob);
  });
}

export function dataUrlToBlob(dataUrl) {
  const m = /^data:([^,]*),/.exec(String(dataUrl).slice(0, 300));
  if (!m) throw new Error('Ungültige Datei im Backup');
  const meta = m[1];
  const body = String(dataUrl).slice(m[0].length);
  const isBase64 = /;base64$/i.test(meta);
  const mime = meta.replace(/;base64$/i, '') || 'application/octet-stream';
  if (isBase64) {
    const bin = atob(body);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new Blob([bytes], { type: mime });
  }
  return new Blob([decodeURIComponent(body)], { type: mime });
}

export function backupFileName(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return `bbc-finance-backup-${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}.json`;
}

/**
 * Baut das Backup als Blob. Die Belegdateien werden einzeln angehängt – es entsteht nie
 * eine einzige riesige Zeichenkette. includeFiles=false lässt die Belegdateien weg.
 */
export async function buildBackupBlob({ includeFiles = true } = {}) {
  const data = {};
  for (const c of COLLECTIONS) data[c] = await getAll(c);
  const settingsRows = await getAll('settings');
  const settings = {};
  for (const row of settingsRows) {
    if (SECRET_SETTINGS.includes(row.key) || LOCAL_SETTINGS.includes(row.key)) continue;
    settings[row.key] = row.value;
  }
  const head = {
    format: BACKUP_FORMAT,
    schemaVersion: SCHEMA_VERSION,
    exportedAt: nowISO(),
    includesFiles: includeFiles,
    counts: Object.fromEntries(COLLECTIONS.map((c) => [c, data[c].length])),
    settings,
    data,
  };
  const headText = JSON.stringify(head);
  const parts = [`${headText.slice(0, -1)},"files":{`];
  if (includeFiles) {
    const rows = await getAll('blobs');
    for (let i = 0; i < rows.length; i++) {
      const url = await blobToDataUrl(rows[i].blob);
      parts.push(new Blob([`\n${JSON.stringify(rows[i].id)}:${JSON.stringify(url)}${i < rows.length - 1 ? ',' : ''}`]));
    }
  }
  parts.push('\n}}\n');
  return new Blob(parts, { type: 'application/json' });
}

export async function markBackupDone() {
  await write(async (w) => {
    await w.setting('lastBackupAt', nowISO());
    await w.setting('changesSinceBackup', 0);
  });
}

/* ---------- Einlesen ---------- */

/**
 * Liest eine Backup-Datei. Zeilenweise, wenn sie im eigenen Zeilenformat vorliegt (beliebig groß),
 * sonst als Ganzes. Ergebnis: { json (ohne Dateien), files: Map<id, Blob>, badFiles }.
 */
export async function readBackupFile(file) {
  const files = new Map();
  let badFiles = 0;
  const takeFile = (id, url) => {
    try { files.set(id, dataUrlToBlob(url)); } catch (_) { badFiles += 1; }
  };

  let json = null;
  let buffer = '';
  let lineNo = 0;
  let streaming = false;
  const handleLine = (raw) => {
    lineNo += 1;
    const line = raw.trim();
    if (!line) return;
    if (lineNo === 1 && /"files":\{$/.test(line)) {
      json = JSON.parse(`${line}}}`);
      streaming = true;
      return;
    }
    if (!streaming) throw new SyntaxError('kein Zeilenformat');
    if (line === '}}') return;
    const entry = JSON.parse(`{${line.replace(/,$/, '')}}`);
    for (const [id, url] of Object.entries(entry)) takeFile(id, url);
  };

  const whole = async () => {
    let parsed;
    try { parsed = JSON.parse(await file.text()); } catch (_) { throw new Error('Die Datei ist kein gültiges JSON.'); }
    if (parsed && typeof parsed === 'object' && parsed.files && typeof parsed.files === 'object') {
      for (const [id, url] of Object.entries(parsed.files)) takeFile(id, url);
      delete parsed.files;
    }
    return parsed;
  };

  if (!file.stream || typeof TextDecoderStream === 'undefined') {
    json = await whole();
    return { json, files, badFiles };
  }
  try {
    const reader = file.stream().pipeThrough(new TextDecoderStream()).getReader();
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += value;
      let nl = buffer.indexOf('\n');
      while (nl >= 0) {
        handleLine(buffer.slice(0, nl));
        buffer = buffer.slice(nl + 1);
        nl = buffer.indexOf('\n');
      }
      // Eine Datei ohne Zeilenumbrüche ist kein Zeilenformat – dann als Ganzes lesen.
      if (!streaming && buffer.length > 64 * 1024 * 1024) throw new SyntaxError('kein Zeilenformat');
    }
    if (buffer.trim()) handleLine(buffer);
    if (!streaming || !json) throw new SyntaxError('kein Zeilenformat');
  } catch (err) {
    if (!(err instanceof SyntaxError)) throw err;
    files.clear();
    badFiles = 0;
    json = await whole();
  }
  return { json, files, badFiles };
}

const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const isNum = (v) => typeof v === 'number' && Number.isFinite(v);

/** Prüft den Inhalt eines Backups, ohne etwas zu verändern. Wirft bei fremden oder beschädigten Dateien. */
export function inspectBackup(json, files) {
  if (!isObj(json) || json.format !== BACKUP_FORMAT) {
    throw new Error('Das ist keine Backup-Datei von BBC Finance.');
  }
  if (!Number.isInteger(json.schemaVersion) || json.schemaVersion > SCHEMA_VERSION) {
    throw new Error('Dieses Backup stammt aus einer neueren Version des Tools und kann hier nicht eingelesen werden.');
  }
  if (!isObj(json.data)) throw new Error('Das Backup enthält keine Daten.');
  const broken = (c, why) => new Error(`Das Backup ist beschädigt (Sammlung „${c}“: ${why}).`);
  for (const c of COLLECTIONS) {
    const rows = json.data[c];
    if (rows == null) continue;
    if (!Array.isArray(rows)) throw broken(c, 'keine Liste');
    const key = keyPathOf(c);
    for (const r of rows) {
      if (!isObj(r) || typeof r[key] !== 'string' || !r[key]) throw broken(c, 'Datensatz ohne Schlüssel');
    }
  }
  if (!Array.isArray(json.data.companies) || json.data.companies.length === 0) {
    throw new Error('Das Backup enthält kein Unternehmen – es würde ein leeres Tool hinterlassen.');
  }
  for (const c of ['invoices', 'quotes']) {
    const seen = new Set();
    for (const r of json.data[c] || []) {
      if (!Array.isArray(r.items)) throw broken(c, 'Beleg ohne Positionsliste');
      if (typeof r.status !== 'string') throw broken(c, 'Beleg ohne Status');
      if (r.number != null && typeof r.number !== 'string') throw broken(c, 'ungültige Belegnummer');
      if (r.status !== 'draft') {
        if (!isObj(r.totals) || !isNum(r.totals.totalCents) || !isNum(r.totals.netCents) || !isNum(r.totals.taxCents)) {
          throw broken(c, `Beleg ${r.number || ''} ohne Summen`);
        }
        if (!r.number) throw broken(c, 'erstellter Beleg ohne Nummer');
      }
      if (!r.number) continue;
      // Doppelte Belegnummern würden beim Einspielen am eindeutigen Index scheitern – vorher prüfen.
      if (seen.has(r.number)) throw new Error(`Das Backup enthält die Belegnummer ${r.number} doppelt.`);
      seen.add(r.number);
    }
  }
  for (const p of json.data.payments || []) {
    if (!isNum(p.amountCents) || typeof p.invoiceId !== 'string') throw broken('payments', 'Zahlung ohne Betrag oder Rechnung');
  }
  for (const e of json.data.expenses || []) {
    if (![e.netCents, e.taxCents, e.totalCents].every(isNum)) throw broken('expenses', 'Ausgabe ohne Beträge');
  }
  for (const a of json.data.assets || []) {
    if (typeof a.dataUrl !== 'string' || !/^data:image\/(png|jpeg|webp);base64,/.test(a.dataUrl)) throw broken('assets', 'ungültiges Logo');
  }
  const counts = Object.fromEntries(COLLECTIONS.map((c) => [c, (json.data[c] || []).length]));
  return {
    exportedAt: typeof json.exportedAt === 'string' ? json.exportedAt : null,
    includesFiles: !!json.includesFiles,
    counts,
    fileCount: files ? files.size : (isObj(json.files) ? Object.keys(json.files).length : 0),
  };
}

/** Nur bekannte Einstellungen mit passendem Typ übernehmen. */
export function cleanSettings(raw) {
  const out = {};
  if (!isObj(raw)) return out;
  for (const key of Object.keys(DEFAULT_SETTINGS)) {
    if (!Object.hasOwn(raw, key)) continue;
    if (SECRET_SETTINGS.includes(key) || LOCAL_SETTINGS.includes(key)) continue;
    const def = DEFAULT_SETTINGS[key];
    const val = raw[key];
    if (Array.isArray(def)) {
      const wantNum = typeof def[0] === 'number';
      if (!Array.isArray(val) || !val.every((v) => (wantNum ? isNum(v) : typeof v === 'string'))) continue;
      out[key] = val;
    } else if (isObj(def)) {
      if (isObj(val)) out[key] = val;
    } else if (typeof val === typeof def) {
      out[key] = val;
    }
  }
  if (out.theme && !['auto', 'light', 'dark'].includes(out.theme)) delete out.theme;
  return out;
}

/**
 * Spielt ein eingelesenes Backup ein und ersetzt dabei den gesamten Datenbestand.
 * Der API-Key dieses Browsers bleibt erhalten.
 */
export async function restoreBackup({ json, files, badFiles = 0 }) {
  inspectBackup(json, files);
  const keepKey = state.settings.aiApiKey || '';
  const settings = cleanSettings(json.settings);
  await transact(ALL_STORES, async (tx) => {
    for (const s of ALL_STORES) await tx.clear(s);
    for (const c of COLLECTIONS) {
      for (const row of json.data[c] || []) await tx.put(c, row);
    }
    for (const [id, blob] of files) await tx.put('blobs', { id, blob });
    for (const [key, value] of Object.entries(settings)) await tx.put('settings', { key, value });
    if (keepKey) await tx.put('settings', { key: 'aiApiKey', value: keepKey });
    await tx.put('settings', { key: 'seeded', value: true });
    await tx.put('settings', { key: 'lastBackupAt', value: typeof json.exportedAt === 'string' ? json.exportedAt : nowISO() });
    await tx.put('settings', { key: 'changesSinceBackup', value: 0 });
    await tx.put('audit', {
      id: uid(), at: nowISO(), user: state.settings.userName || 'Lokaler Benutzer',
      action: 'Backup eingespielt', entity: 'system', entityId: '', label: typeof json.exportedAt === 'string' ? json.exportedAt : '',
      prev: null, next: { counts: isObj(json.counts) ? json.counts : null },
    });
  });
  await reload();
  broadcastChange();
  const missing = (json.data.attachments || []).filter((a) => !files.has(a.id)).length;
  return { missingFiles: missing, badFiles };
}

/** Löscht alle Daten in diesem Browser (API-Key inklusive). */
export async function wipeAll() {
  await transact(ALL_STORES, async (tx) => {
    for (const s of ALL_STORES) await tx.clear(s);
  });
  await reload();
  broadcastChange();
}
