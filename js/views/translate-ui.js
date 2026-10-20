// Übersetzen-Baustein für Vorlagen und Verträge: Sprachwechsel übersetzt Positionen und Texte (mit API-Key).

import { html, useState, attempt } from '../ui/core.js';
import { Button, Notice } from '../ui/components.js';
import { state } from '../lib/store.js';
import { translateTexts, docTexts, applyTexts } from '../lib/translate.js';

/**
 * doc: aktueller Stand mit items (+ intro …); setDoc(fn) wie bei useState.
 * Gibt { translate(lang, base?), busy, notice } zurück.
 */
export function useTranslation(doc, setDoc) {
  const [busy, setBusy] = useState(false);
  const [info, setInfo] = useState(null);
  async function translate(lang, base = doc, { setLanguage = false } = {}) {
    if (!state.settings.aiApiKey) { setInfo({ noKey: true }); return; }
    const texts = docTexts(base);
    if (!texts.length) return;
    setBusy(true);
    const res = await attempt(() => translateTexts({ apiKey: state.settings.aiApiKey, model: state.settings.aiModel, texts, target: lang }));
    setBusy(false);
    if (!res) return;
    const original = Object.fromEntries(texts.map((t) => [t.id, t.text]));
    setDoc((d) => {
      const current = Object.fromEntries(docTexts(d).map((t) => [t.id, t.text]));
      const safe = Object.fromEntries(Object.entries(res.map).filter(([id]) => current[id] === original[id]));
      return { ...applyTexts(d, safe), ...(setLanguage ? { language: lang } : {}) };
    });
    setInfo({ lang, count: res.count, before: base });
  }
  function undo() {
    if (!info || !info.before) return;
    const before = info.before;
    setDoc((d) => ({ ...applyTexts(d, Object.fromEntries(docTexts(before).map((t) => [t.id, t.text]))), ...('language' in before ? { language: before.language } : {}) }));
    setInfo(null);
  }
  const notice = info && (info.noKey
    ? html`<${Notice} tone="info">Zum Übersetzen braucht es den API-Key aus den Einstellungen.<//>`
    : html`<${Notice} tone="good" action=${html`<${Button} small onClick=${undo}>Rückgängig<//>`}>
        ${info.count ? `${info.count} ${info.count === 1 ? 'Text' : 'Texte'} ins ${info.lang === 'en' ? 'Englische' : 'Deutsche'} übersetzt – bitte kurz prüfen.` : `Alle Texte waren schon ${info.lang === 'en' ? 'Englisch' : 'Deutsch'}.`}<//>`);
  return { translate, busy, notice, hasKey: !!state.settings.aiApiKey };
}

/** Zwei kleine Knöpfe „Auf Deutsch“ / „Auf Englisch“. */
export function TranslateButtons({ tr, base, label = 'Positionen übersetzen' }) {
  if (!tr.hasKey || !docTexts(base).length) return null;
  return html`<span class="translate-buttons"><span class="muted-text">${label}:</span>
    <button type="button" class="link-btn" disabled=${tr.busy} onClick=${() => tr.translate('de', base)}>Deutsch</button>
    <button type="button" class="link-btn" disabled=${tr.busy} onClick=${() => tr.translate('en', base)}>Englisch</button>
    ${tr.busy && html`<span class="muted-text">wird übersetzt …</span>`}</span>`;
}
