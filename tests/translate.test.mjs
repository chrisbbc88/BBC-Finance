// Übersetzen: Texte sammeln, Request, Antwort auswerten, zurückschreiben (ohne Netzwerk).
import test from 'node:test';
import assert from 'node:assert/strict';
import { buildTranslateRequest, parseTranslateResponse, docTexts, applyTexts } from '../js/lib/translate.js';

const doc = {
  language: 'de', intro: 'Vielen Dank für Ihren Auftrag.', paymentTerms: '', footer: 'IBAN DE00 1234',
  items: [{ id: 'a', name: 'Website-Erstellung', description: 'Mit 5 Unterseiten\nInkl. SEO' }, { id: 'b', name: 'Hosting', description: '' }],
};

test('Texte sammeln: Positionen, Einleitung, Fußzeile – leere nicht', () => {
  assert.deepEqual(docTexts(doc).map((t) => t.id), ['i:a:name', 'i:a:description', 'i:b:name', 'd:intro', 'd:footer']);
});

test('Request: erzwungenes Werkzeug, Zielsprache, Regeln für Namen und Zahlen', () => {
  const r = buildTranslateRequest({ model: 'm', texts: docTexts(doc), target: 'en' });
  assert.equal(r.tool_choice.name, 'translations');
  assert.match(r.system, /ins Englisch/);
  assert.match(r.system, /IBAN/);
  assert.match(r.messages[0].content, /Zielsprache: Englisch/);
  assert.ok(r.max_tokens >= 400);
});

test('Antwort: unbekannte ids werden ignoriert, Übersetzung wird zurückgeschrieben', () => {
  const texts = docTexts(doc);
  const { map, sources } = parseTranslateResponse({ content: [{ type: 'tool_use', name: 'translations', input: { items: [
    { id: 'i:a:name', text: 'Website creation', source: 'de' },
    { id: 'i:a:description', text: 'With 5 subpages\nIncl. SEO', source: 'de' },
    { id: 'd:intro', text: 'Thank you for your order.' },
    { id: 'x:fremd', text: 'nope' },
  ] } }] }, texts);
  assert.equal(Object.keys(map).length, 3);
  assert.equal(sources['i:a:name'], 'de');
  const out = applyTexts(doc, map);
  assert.equal(out.items[0].name, 'Website creation');
  assert.equal(out.items[0].description, 'With 5 subpages\nIncl. SEO');
  assert.equal(out.items[1].name, 'Hosting');
  assert.equal(out.intro, 'Thank you for your order.');
  assert.equal(out.footer, 'IBAN DE00 1234');
  assert.equal(doc.items[0].name, 'Website-Erstellung', 'Original bleibt unverändert');
});

test('Antwort ohne Werkzeug: verständlicher Fehler', () => {
  assert.throws(() => parseTranslateResponse({ content: [{ type: 'text', text: 'hi' }] }, []), /nicht zurück/);
});
