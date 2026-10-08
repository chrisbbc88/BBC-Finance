// Einstellungen: Profil, Backup, KI-Belegerkennung, Listen, Vorlagen, Daten.

import { html, useState, useEffect, useRef, useStore, toast, attempt, ask, navigate } from '../ui/core.js';
import {
  Button, PageHeader, Panel, TextField, TextArea, SelectField, Checkbox, Notice, NumberInput, Field, Segmented, KV,
} from '../ui/components.js';
import { state, setSetting, setSettings } from '../lib/store.js';
import {
  buildBackupBlob, markBackupDone, inspectBackup, restoreBackup, readBackupFile, wipeAll, backupFileName,
} from '../lib/backup.js';
import { saveBlob } from '../lib/pdf.js';
import { testConnection } from '../lib/ai.js';
import { estimateUsage } from '../lib/db.js';
import { loadDemo, clearData } from '../lib/demo.js';
import { dateTime } from '../lib/format.js';
import { fileSize } from '../lib/util.js';
import { REMINDER_LEVELS, DEFAULT_SETTINGS } from '../lib/schema.js';
import { seedCompanies } from '../lib/seed.js';

/** Backup-Datei herunterladen und den Zähler „Änderungen seit letztem Backup“ zurücksetzen. */
export async function downloadBackup(includeFiles = true) {
  const blob = await buildBackupBlob({ includeFiles });
  saveBlob(blob, backupFileName());
  await markBackupDone();
  return blob.size;
}

function BackupPanel() {
  const [busy, setBusy] = useState('');
  const [usage, setUsage] = useState(null);
  const fileRef = useRef(null);
  useEffect(() => { estimateUsage().then(setUsage); }, [state.version]);

  async function download(includeFiles) {
    setBusy(includeFiles ? 'full' : 'lite');
    const size = await attempt(() => downloadBackup(includeFiles));
    setBusy('');
    if (size != null) toast(`Backup gespeichert (${fileSize(size)})`, 'good');
  }

  async function restore(file) {
    if (!file) return;
    setBusy('restore');
    await attempt(async () => {
      const parsed = await readBackupFile(file);
      const info = inspectBackup(parsed.json, parsed.files);
      const c = info.counts;
      const ok = await ask({
        title: 'Backup einspielen?',
        text: `Das Backup vom ${info.exportedAt ? dateTime(info.exportedAt) : 'unbekannten Zeitpunkt'} ersetzt alle Daten in diesem Browser. Der aktuelle Stand geht verloren, wenn du ihn nicht vorher gesichert hast.`,
        list: [
          `${c.companies} Unternehmen, ${c.customers} Kunden, ${c.services} Leistungen`,
          `${c.invoices} Rechnungen, ${c.quotes} Angebote, ${c.payments} Zahlungen`,
          `${c.expenses} Ausgaben, ${info.includesFiles ? `${info.fileCount} Belegdateien` : 'ohne Belegdateien'}`,
        ],
        confirmLabel: 'Daten ersetzen', danger: true,
      });
      if (!ok) return;
      const res = await restoreBackup(parsed);
      toast(res.missingFiles ? `Backup eingespielt. ${res.missingFiles} Belegdateien waren im Backup nicht enthalten oder nicht lesbar.` : 'Backup eingespielt', 'good', 7000);
      navigate('/');
    });
    setBusy('');
  }

  const s = state.settings;
  return html`<${Panel} title="Backup und Wiederherstellung">
    <p class="panel-intro">
      Deine Daten liegen nur in diesem Browser auf diesem Gerät. Die Backup-Datei ist deine Sicherung – und der Weg, die Daten auf ein anderes Gerät zu übertragen.
    </p>
    <${KV} rows=${[
      ['Letztes Backup', s.lastBackupAt ? dateTime(s.lastBackupAt) : 'Noch keines'],
      ['Änderungen seitdem', String(s.changesSinceBackup || 0)],
      usage && usage.usage != null && ['Belegter Speicher', `${fileSize(usage.usage)}${usage.quota ? ` von ${fileSize(usage.quota)} verfügbar` : ''}`],
    ]} />
    <div class="button-row">
      <${Button} variant="primary" icon="download" busy=${busy === 'full'} disabled=${!!busy} onClick=${() => download(true)}>Backup herunterladen<//>
      <${Button} icon="download" busy=${busy === 'lite'} disabled=${!!busy} onClick=${() => download(false)}>Ohne Belegdateien<//>
      <${Button} icon="upload" busy=${busy === 'restore'} disabled=${!!busy} onClick=${() => fileRef.current && fileRef.current.click()}>Backup einspielen<//>
      <input ref=${fileRef} type="file" class="visually-hidden" accept="application/json,.json" tabindex="-1"
        onChange=${(e) => { restore(e.target.files[0]); e.target.value = ''; }} />
    </div>
    <${Checkbox} label="Beim Schließen warnen, wenn es Änderungen ohne Backup gibt" checked=${s.warnOnClose !== false}
      onChange=${(v) => attempt(() => setSetting('warnOnClose', v))} />
    <p class="field-hint">Der API-Key ist nie Teil des Backups. Lege Backup-Dateien nicht in ein öffentliches GitHub-Repository.</p>
  <//>`;
}

function AIPanel() {
  const s = state.settings;
  const [key, setKey] = useState(s.aiApiKey || '');
  const [model, setModel] = useState(s.aiModel || DEFAULT_SETTINGS.aiModel);
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState('');
  const changed = key !== (s.aiApiKey || '') || model !== (s.aiModel || '');

  async function save() {
    setBusy('save');
    const ok = await attempt(async () => { await setSettings({ aiApiKey: key.trim(), aiModel: model.trim() || DEFAULT_SETTINGS.aiModel }); return true; });
    setBusy('');
    if (ok) toast('KI-Einstellungen gespeichert', 'good');
  }
  async function test() {
    setBusy('test');
    const ok = await attempt(() => testConnection({ apiKey: key.trim(), model: model.trim() }));
    setBusy('');
    if (ok) toast('Verbindung steht – der API-Key funktioniert.', 'good');
  }

  return html`<${Panel} title="KI-Belegerkennung">
    <p class="panel-intro">
      Mit einem API-Key von Anthropic liest das Tool hochgeladene Belege aus: Lieferant, Datum, Beträge, Steuer, Währung und eine passende Kategorie.
      Der Beleg wird dafür direkt aus deinem Browser an die Anthropic-API gesendet. Du prüfst jede Ausgabe, bevor sie gebucht wird.
    </p>
    <div class="form-grid">
      <${Field} class="span-4" label="API-Key" htmlFor="ai-key" hint="Wird nur in diesem Browser gespeichert – nicht im Code, nicht im Backup.">
        <div class="inline-controls">
          <input id="ai-key" class="input" type=${show ? 'text' : 'password'} autocomplete="off" spellcheck="false" value=${key}
            placeholder="sk-ant-…" onInput=${(e) => setKey(e.target.value)} />
          <${Button} onClick=${() => setShow(!show)}>${show ? 'Verbergen' : 'Zeigen'}<//>
        </div>
      <//>
      <${Field} class="span-2" label="Modell" htmlFor="ai-model" hint="Das kleinste Modell reicht für Belege meist aus.">
        <input id="ai-model" class="input" list="ai-models" value=${model} onInput=${(e) => setModel(e.target.value)} />
        <datalist id="ai-models"><option value="claude-haiku-5-5"></option><option value="claude-sonnet-5-5"></option><option value="claude-opus-5-5"></option></datalist>
      <//>
    </div>
    <div class="button-row">
      <${Button} variant="primary" busy=${busy === 'save'} disabled=${!changed} onClick=${save}>Speichern<//>
      <${Button} busy=${busy === 'test'} disabled=${!key.trim()} onClick=${test}>Verbindung testen<//>
      ${s.aiApiKey && html`<${Button} variant="ghost" icon="trash" onClick=${async () => { setKey(''); await attempt(() => setSetting('aiApiKey', '')); toast('API-Key entfernt', 'good'); }}>Key entfernen<//>`}
    </div>
    <${Checkbox} label="Belegfotos beim Hochladen verkleinern" checked=${s.shrinkImages !== false}
      hint="Auf höchstens 2000 Pixel, gut lesbar und deutlich kleinere Backups. PDFs bleiben unverändert."
      onChange=${(v) => attempt(() => setSetting('shrinkImages', v))} />
  <//>`;
}

function ListEditor({ label, settingKey, hint }) {
  const stored = (Array.isArray(state.settings[settingKey]) ? state.settings[settingKey] : []).join('\n');
  const [text, setText] = useState(stored);
  useEffect(() => { setText(stored); }, [stored]);
  async function save() {
    const list = [...new Set(text.split('\n').map((l) => l.trim()).filter(Boolean))];
    const ok = await attempt(async () => { await setSetting(settingKey, list); return true; });
    if (ok) toast('Liste gespeichert', 'good');
  }
  return html`<div class="span-2">
    <${TextArea} label=${label} value=${text} onInput=${setText} rows=${8} hint=${hint} />
    ${text !== stored && html`<${Button} small variant="primary" onClick=${save}>Speichern<//>`}
  </div>`;
}

function TemplatesPanel() {
  const s = state.settings;
  const [lang, setLang] = useState('de');
  const [which, setWhich] = useState('invoice');
  const isReminder = /^r\d$/.test(which);
  const level = isReminder ? Number(which.slice(1)) : 0;
  const current = isReminder
    ? (((s.reminderTemplates || {})[lang] || {})[level] || { subject: '', body: '' })
    : (((s.emailTemplates || {})[lang] || {})[which] || { subject: '', body: '' });
  const [subject, setSubject] = useState(current.subject);
  const [body, setBody] = useState(current.body);
  useEffect(() => { setSubject(current.subject); setBody(current.body); }, [lang, which, state.version]);
  const changed = subject !== current.subject || body !== current.body;
  const days = s.reminderDays || [7, 14, 21];

  async function save() {
    const ok = await attempt(async () => {
      if (isReminder) {
        const all = JSON.parse(JSON.stringify(s.reminderTemplates || {}));
        all[lang] = { ...(all[lang] || {}), [level]: { subject, body } };
        await setSetting('reminderTemplates', all);
      } else {
        const all = JSON.parse(JSON.stringify(s.emailTemplates || {}));
        all[lang] = { ...(all[lang] || {}), [which]: { subject, body } };
        await setSetting('emailTemplates', all);
      }
      return true;
    });
    if (ok) toast('Vorlage gespeichert', 'good');
  }

  return html`<${Panel} title="E-Mail-Texte und Zahlungserinnerungen">
    <p class="panel-intro">
      Das Tool markiert überfällige Rechnungen und schlägt die passende Stufe vor. Den Text übergibst du mit einem Klick an dein E-Mail-Programm.
      Platzhalter: {NUMBER}, {DATE}, {DUE}, {TOTAL}, {OPEN}, {CONTACT}, {CUSTOMER}, {COMPANY}, {SENDER}.
    </p>
    <div class="form-grid">
      <${Field} class="span-6" label="Erinnern ab so vielen Tagen nach Fälligkeit">
        <div class="inline-controls">
          ${REMINDER_LEVELS.map((l, i) => html`<label class="mini-field">
            <span>${l.label}</span>
            <${NumberInput} value=${days[i]} digits=${0} min=${0} max=${365} suffix="Tage" aria-label=${`${l.label}: Tage nach Fälligkeit`}
              onChange=${(v) => { const next = [...days]; next[i] = v; attempt(() => setSetting('reminderDays', next)); }} />
          </label>`)}
        </div>
      <//>
      <${SelectField} class="span-4" label="Vorlage" value=${which} onChange=${setWhich} options=${[
        { id: 'invoice', label: 'Rechnung versenden' },
        { id: 'quote', label: 'Angebot versenden' },
        ...REMINDER_LEVELS.map((l) => ({ id: `r${l.id}`, label: l.label })),
      ]} />
      <${Field} class="span-2" label="Sprache">
        <${Segmented} label="Sprache der Vorlage" value=${lang} onChange=${setLang} options=${[{ id: 'de', label: 'Deutsch' }, { id: 'en', label: 'Englisch' }]} />
      <//>
      <${TextField} class="span-6" label="Betreff" value=${subject} onInput=${setSubject} />
      <${TextArea} class="span-6" label="Text" value=${body} onInput=${setBody} rows=${9} />
    </div>
    ${changed && html`<div class="button-row"><${Button} variant="primary" onClick=${save}>Vorlage speichern<//></div>`}
  <//>`;
}

function DataPanel() {
  const [busy, setBusy] = useState('');
  const hasData = state.customers.length || state.invoices.length || state.expenses.length || state.services.length;

  async function demo() {
    setBusy('demo');
    const ok = await attempt(async () => { await loadDemo(); return true; });
    setBusy('');
    if (ok) { toast('Beispieldaten geladen', 'good'); navigate('/'); }
  }
  async function clear() {
    const ok = await ask({
      title: 'Alle Kunden, Leistungen und Belege löschen?',
      text: 'Kunden, Leistungen, Rechnungen, Angebote, Zahlungen, Ausgaben, Belegdateien, Nummernzähler und das Protokoll werden gelöscht – auch selbst angelegte Einträge. Unternehmen und Einstellungen bleiben erhalten.',
      confirmLabel: 'Löschen', danger: true,
    });
    if (!ok) return;
    setBusy('clear');
    const done = await attempt(async () => { await clearData(); return true; });
    setBusy('');
    if (done) { toast('Daten gelöscht', 'good'); navigate('/'); }
  }
  async function wipe() {
    const typed = await ask({
      title: 'Wirklich alles löschen?',
      text: 'Sämtliche Daten in diesem Browser werden gelöscht, einschließlich Unternehmen, Einstellungen und API-Key. Ohne Backup lässt sich das nicht rückgängig machen.',
      input: { label: 'Zum Bestätigen LÖSCHEN eintippen', placeholder: 'LÖSCHEN' },
      confirmLabel: 'Alles löschen', danger: true,
    });
    if (typed === null) return;
    if (String(typed).trim().toUpperCase() !== 'LÖSCHEN') { toast('Nicht gelöscht – die Bestätigung stimmt nicht.', 'info'); return; }
    setBusy('wipe');
    const done = await attempt(async () => { await wipeAll(); await seedCompanies(); return true; });
    setBusy('');
    if (done) { toast('Alle Daten gelöscht', 'good'); navigate('/'); }
  }

  return html`<${Panel} title="Daten">
    ${state.settings.demoLoaded && html`<${Notice} tone="warn">Im Tool sind Beispieldaten geladen. Entferne sie, bevor du echte Rechnungen schreibst.<//>`}
    <div class="button-row">
      <${Button} icon="sparkle" busy=${busy === 'demo'} disabled=${!!hasData || !!busy} onClick=${demo}
        title=${hasData ? 'Nur möglich, solange keine Kunden, Leistungen oder Belege angelegt sind' : ''}>Beispieldaten laden<//>
      <${Button} icon="trash" busy=${busy === 'clear'} disabled=${!hasData || !!busy} onClick=${clear}>Kunden, Leistungen und Belege löschen<//>
      <${Button} variant="danger" icon="trash" busy=${busy === 'wipe'} disabled=${!!busy} onClick=${wipe}>Alles löschen<//>
    </div>
  <//>`;
}

const LATER = [
  ['Anmeldung, Benutzerrollen, Steuerberater-Zugang', 'Dafür braucht es einen Server. Diese Version läuft ohne – wer das Gerät nutzt, sieht die Daten.'],
  ['Gemeinsame Daten auf mehreren Geräten', 'Die Daten liegen im Browser. Übertragen lassen sie sich über die Backup-Datei.'],
  ['E-Mail-Versand aus dem Tool, automatische Erinnerungen', 'Aktuell bereitet das Tool Text und PDF vor; verschickt wird über dein E-Mail-Programm.'],
  ['Automatisches Anlegen wiederkehrender Rechnungen', 'Fällige Vorlagen werden angezeigt; den Entwurf legst du per Klick an.'],
  ['Teilgutschriften, Mahngebühren, Verzugszinsen', 'Gutschriften gibt es über den vollen Rechnungsbetrag, Erstattungen dazu lassen sich eintragen.'],
  ['Belege in nicht lateinischer Schrift', 'Die PDF-Schrift kennt lateinische, griechische und kyrillische Zeichen. Arabisch, Chinesisch und andere Schriften fehlen; das Tool weist vor dem Erstellen darauf hin.'],
  ['Stripe, PayPal, Bankabgleich, DATEV-Export', 'Als Erweiterung vorgesehen. Der CSV- und Excel-Export steht schon bereit.'],
  ['Zeiterfassung, Projekte, Kundenportal', 'Nicht enthalten.'],
];

export function SettingsView() {
  useStore();
  const s = state.settings;
  const [name, setName] = useState(s.userName || '');
  useEffect(() => { setName(s.userName || ''); }, [s.userName]);

  return html`
    <${PageHeader} title="Einstellungen" />
    <div class="form-page">
      <${Panel} title="Profil und Darstellung">
        <div class="form-grid">
          <${Field} class="span-4" label="Dein Name" htmlFor="user-name" hint="Erscheint im Protokoll und als Gruß in E-Mail-Texten.">
            <div class="inline-controls">
              <input id="user-name" class="input" value=${name} onInput=${(e) => setName(e.target.value)} />
              <${Button} disabled=${name === (s.userName || '')} onClick=${async () => { const ok = await attempt(async () => { await setSetting('userName', name.trim()); return true; }); if (ok) toast('Name gespeichert', 'good'); }}>Speichern<//>
            </div>
          <//>
          <${Field} class="span-2" label="Darstellung">
            <${Segmented} label="Darstellung" value=${s.theme || 'auto'} onChange=${(v) => attempt(() => setSetting('theme', v))}
              options=${[{ id: 'auto', label: 'System' }, { id: 'light', label: 'Hell' }, { id: 'dark', label: 'Dunkel' }]} />
          <//>
        </div>
      <//>
      <${BackupPanel} />
      <${AIPanel} />
      <${Panel} title="Auswahllisten">
        <div class="form-grid">
          <${ListEditor} label="Ausgabenkategorien" settingKey="expenseCategories" hint="Ein Eintrag pro Zeile" />
          <${ListEditor} label="Kategorien für Leistungen" settingKey="serviceCategories" hint="Ein Eintrag pro Zeile" />
          <${ListEditor} label="Zahlungsarten" settingKey="paymentMethods" hint="Ein Eintrag pro Zeile" />
        </div>
      <//>
      <${TemplatesPanel} />
      <${DataPanel} />
      <${Panel} title="In dieser Version nicht enthalten">
        <p class="panel-intro">Damit im Tool nichts vorgibt, etwas zu können, was es nicht kann:</p>
        <dl class="later">
          ${LATER.map(([k, v]) => html`<div><dt>${k}</dt><dd>${v}</dd></div>`)}
        </dl>
      <//>
    </div>
  `;
}
