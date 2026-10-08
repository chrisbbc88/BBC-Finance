// Grundgerüst der Oberfläche: Preact + htm (ohne Build-Schritt), Store-Anbindung,
// Hash-Router, Toasts und Dialoge.

import {
  h, html, render, Component, useState, useEffect, useRef, useMemo, useCallback, useLayoutEffect,
} from '../vendor/preact-htm.js';
import { state, subscribe } from '../lib/store.js';

export {
  h, html, render, Component, useState, useEffect, useRef, useMemo, useCallback, useLayoutEffect,
};

/** Rendert die Komponente neu, sobald sich Daten im Store ändern. */
export function useStore() {
  const [, setV] = useState(state.version);
  useEffect(() => subscribe((v) => setV(v)), []);
  return state;
}

/* ---------- Router ---------- */

const routeListeners = new Set();
let guard = null;           // () => true | Promise<boolean>  – darf die Seite verlassen werden?
let current = parseHash();
let suppress = false;

function parseHash() {
  const raw = (location.hash || '#/').replace(/^#/, '');
  const [path, query = ''] = raw.split('?');
  const parts = path.split('/').filter(Boolean).map((seg) => { try { return decodeURIComponent(seg); } catch (_) { return seg; } });
  const params = Object.fromEntries(new URLSearchParams(query));
  return { path: '/' + parts.join('/'), parts, params, raw };
}

async function onHashChange() {
  if (suppress) { suppress = false; return; }
  const next = parseHash();
  if (next.raw === current.raw) return;
  if (guard) {
    const ok = await guard();
    if (!ok) {
      // Zurück zur bisherigen Adresse, ohne erneut zu fragen.
      suppress = true;
      location.hash = current.raw;
      return;
    }
    guard = null;
  }
  current = next;
  for (const fn of routeListeners) fn(current);
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', onHashChange);

export function navigate(path, { replace = false } = {}) {
  const target = '#' + path;
  if (replace) {
    history.replaceState(null, '', target);
    onHashChange();
  } else if (location.hash === target) {
    onHashChange();
  } else {
    location.hash = path;
  }
}

/** Seite ohne Rückfrage verlassen (nach erfolgreichem Speichern). */
export function navigateForce(path) {
  guard = null;
  navigate(path);
}

export function setNavGuard(fn) { guard = fn; }
export function clearNavGuard() { guard = null; }
export const hasNavGuard = () => !!guard;

export function useRoute() {
  const [r, setR] = useState(current);
  useEffect(() => {
    routeListeners.add(setR);
    return () => routeListeners.delete(setR);
  }, []);
  return r;
}

/* ---------- Toasts ---------- */

let toastId = 0;
const toastListeners = new Set();
let toasts = [];

export function toast(message, tone = 'info', ms) {
  const id = ++toastId;
  toasts = [...toasts, { id, message: String(message), tone }].slice(-3);
  toastListeners.forEach((fn) => fn(toasts));
  setTimeout(() => dismissToast(id), ms || (tone === 'bad' ? 9000 : 4500));
}
export function dismissToast(id) {
  toasts = toasts.filter((t) => t.id !== id);
  toastListeners.forEach((fn) => fn(toasts));
}
export function useToasts() {
  const [list, setList] = useState(toasts);
  useEffect(() => { toastListeners.add(setList); return () => toastListeners.delete(setList); }, []);
  return list;
}

/* Die Warnung beim Schließen kurz aussetzen (z. B. wenn ein mailto-Link das E-Mail-Programm öffnet). */
let unloadPauseUntil = 0;
export function pauseUnloadWarning(ms = 2000) { unloadPauseUntil = Date.now() + ms; }
export const unloadWarningPaused = () => Date.now() < unloadPauseUntil;

/** Fehler eines Vorgangs verständlich anzeigen. */
export function showError(err) {
  // eslint-disable-next-line no-console
  console.error(err);
  const msg = err && err.message ? err.message : 'Unbekannter Fehler';
  if (err && err.name === 'ConstraintError') {
    toast('Diese Belegnummer ist bereits vergeben. Bitte den Vorgang wiederholen.', 'bad');
  } else if (err && err.name === 'QuotaExceededError') {
    toast('Der Speicher des Browsers ist voll. Bitte ein Backup ziehen und alte Belegdateien entfernen.', 'bad');
  } else {
    toast(msg, 'bad');
  }
}

/** Führt einen asynchronen Vorgang aus und meldet Fehler als Toast. Gibt undefined bei Fehler zurück. */
export async function attempt(fn) {
  try { return await fn(); } catch (err) { showError(err); return undefined; }
}

/* ---------- Dialoge (ersetzen window.confirm / prompt) ---------- */

const dialogListeners = new Set();
let dialog = null;

function setDialog(d) {
  dialog = d;
  dialogListeners.forEach((fn) => fn(dialog));
}
export function useDialog() {
  const [d, setD] = useState(dialog);
  useEffect(() => { dialogListeners.add(setD); return () => dialogListeners.delete(setD); }, []);
  return d;
}

/**
 * Rückfrage. opts: { title, text, confirmLabel, cancelLabel, danger, input: {label, value, placeholder, multiline} }
 * Ergebnis: true/false – oder bei input der eingegebene Text bzw. null bei Abbruch.
 */
export function ask(opts) {
  return new Promise((resolve) => {
    setDialog({
      ...opts,
      resolve: (value) => { setDialog(null); resolve(value); },
    });
  });
}

/** Standard-Rückfrage beim Verlassen einer Seite mit ungespeicherten Änderungen. */
export const confirmLeave = () => ask({
  title: 'Änderungen verwerfen?',
  text: 'Du hast ungespeicherte Änderungen. Wenn du die Seite verlässt, gehen sie verloren.',
  confirmLabel: 'Verwerfen',
  cancelLabel: 'Weiter bearbeiten',
  danger: true,
});
