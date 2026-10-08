// Unternehmen: Profile mit Absenderdaten, Branding, Bank, Nummernkreisen und Beleg-Standards.

import {
  html, useState, useEffect, useRef, useStore, navigate, navigateForce, toast, attempt, ask, setNavGuard, clearNavGuard, confirmLeave,
} from '../ui/core.js';
import {
  Button, PageHeader, Panel, TextField, TextArea, SelectField, NumberField, Checkbox, EmptyState, Badge, Notice, Field, NumberInput, Menu,
} from '../ui/components.js';
import { state, byId, assetUrl } from '../lib/store.js';
import { newCompany, DOC_CURRENCIES, LANGUAGES } from '../lib/schema.js';
import { saveCompany, archiveCompany, deleteCompany, companyInUse, peekNumber, setCounter } from '../lib/actions.js';
import { validatePattern, numberingOf, counterKey } from '../lib/numbering.js';
import { prepareLogo } from '../lib/files.js';
import { todayISO, clone } from '../lib/util.js';

export function CompaniesView() {
  useStore();
  const [next, setNext] = useState({});
  const companies = [...state.companies].sort((a, b) => (a.archived === b.archived ? (a.createdAt < b.createdAt ? -1 : 1) : (a.archived ? 1 : -1)));

  useEffect(() => {
    let alive = true;
    Promise.all(companies.map((c) => peekNumber(c, 'invoice', todayISO()).catch(() => ''))).then((list) => {
      if (alive) setNext(Object.fromEntries(companies.map((c, i) => [c.id, list[i]])));
    });
    return () => { alive = false; };
  }, [state.version]);

  return html`
    <${PageHeader} title="Unternehmen" sub="Jedes Unternehmen hat eigene Absenderdaten, Bankverbindung, Nummernkreise und ein eigenes Rechnungsdesign.">
      <${Button} variant="primary" icon="plus" onClick=${() => navigate('/companies/new')}>Neues Unternehmen<//>
    <//>
    ${companies.length === 0
      ? html`<${EmptyState} icon="company" title="Noch kein Unternehmen" text="Lege das Unternehmen an, in dessen Namen du Rechnungen schreibst.">
          <${Button} variant="primary" icon="plus" onClick=${() => navigate('/companies/new')}>Unternehmen anlegen<//>
        <//>`
      : html`<ul class="company-list">
        ${companies.map((c) => {
          const missing = [
            !c.street || !c.city ? 'Adresse' : '',
            !c.iban && !c.altBank && !c.otherPayment ? 'Zahlungsinformationen' : '',
            !c.logoAssetId ? 'Logo' : '',
          ].filter(Boolean);
          return html`<li key=${c.id}>
            <a class=${`company-card${c.archived ? ' is-archived' : ''}`} href=${`#/companies/${c.id}`}>
              <span class="company-swatch" style=${`background:${c.brandColor}`}>
                ${assetUrl(c.logoAssetId) ? html`<img src=${assetUrl(c.logoAssetId)} alt="" />` : (c.invoicePrefix || c.name.slice(0, 2)).slice(0, 3)}
              </span>
              <span class="company-info">
                <strong>${c.name}</strong>
                <span class="cell-sub">${[c.city, c.country].filter(Boolean).join(', ') || 'Adresse noch nicht hinterlegt'}</span>
              </span>
              <span class="company-meta">
                <span class="cell-sub">Nächste Rechnung</span>
                <span class="mono-num">${next[c.id] || '–'}</span>
              </span>
              <span class="company-state">
                ${c.archived ? html`<${Badge} tone="mute">Archiviert<//>`
                  : missing.length ? html`<${Badge} tone="warn">Es fehlt: ${missing.join(', ')}<//>`
                  : html`<${Badge} tone="good">Vollständig<//>`}
              </span>
            </a>
          </li>`;
        })}
      </ul>`}
  `;
}

export function CompanyEditView({ id }) {
  useStore();
  const existing = id && id !== 'new' ? byId('companies', id) : null;
  const [c, setCRaw] = useState(() => (existing ? clone(existing) : newCompany()));
  const [logo, setLogo] = useState(null);         // neu gewähltes Logo als Data-URL
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState(false);
  const [previews, setPreviews] = useState({});
  const [counter, setCounterValue] = useState(null);
  const fileRef = useRef(null);
  const today = todayISO();

  const setC = (fn) => { setCRaw(fn); setDirty(true); };
  const set = (k) => (v) => setC((p) => ({ ...p, [k]: v }));

  useEffect(() => {
    if (dirty) setNavGuard(confirmLeave); else clearNavGuard();
    return () => clearNavGuard();
  }, [dirty]);

  // Vorschau der nächsten Nummern
  useEffect(() => {
    let alive = true;
    Promise.all(['invoice', 'quote', 'credit'].map((k) => peekNumber(c, k, today).catch(() => ''))).then(([i, q, g]) => {
      if (alive) setPreviews({ invoice: i, quote: q, credit: g });
    });
    return () => { alive = false; };
  }, [c.invoicePrefix, c.invoicePattern, c.quotePrefix, c.quotePattern, c.creditPrefix, c.creditPattern, c.numberDigits, state.version]);

  if (id && id !== 'new' && !existing) {
    return html`<${EmptyState} icon="company" title="Unternehmen nicht gefunden"><${Button} onClick=${() => navigate('/companies')}>Zur Übersicht<//><//>`;
  }

  const storedCounter = existing ? byId('counters', counterKey(existing.id, 'invoice', numberingOf(existing, 'invoice').pattern, today)) : null;
  const lastUsed = storedCounter ? storedCounter.last : 0;
  const logoUrl = logo || assetUrl(c.logoAssetId);
  const patternErr = {
    invoice: validatePattern(c.invoicePattern), quote: validatePattern(c.quotePattern), credit: validatePattern(c.creditPattern),
  };

  async function pickLogo(file) {
    if (!file) return;
    const url = await attempt(() => prepareLogo(file));
    if (url) { setLogo(url); setDirty(true); }
  }

  async function save() {
    setBusy(true);
    const saved = await attempt(() => saveCompany(c, logo));
    setBusy(false);
    if (!saved) return;
    setLogo(null);
    setCRaw(clone(saved));
    setDirty(false);
    toast('Unternehmen gespeichert', 'good');
    if (!existing) navigateForce(`/companies/${saved.id}`);
  }

  async function applyCounter() {
    if (counter == null || !existing) return;
    const ok = await ask({
      title: 'Nummernkreis anpassen?',
      text: `Die zuletzt vergebene laufende Nummer für ${today.slice(0, 4)} wird auf ${counter} gesetzt. Die nächste Rechnung erhält die nächste freie Nummer danach. Bereits vergebene Nummern werden nie doppelt verwendet.`,
      confirmLabel: 'Anpassen',
    });
    if (!ok) return;
    const done = await attempt(async () => { await setCounter(existing, 'invoice', today, counter); return true; });
    if (done) { toast('Nummernkreis angepasst', 'good'); setCounterValue(null); }
  }

  async function archive() {
    const done = await attempt(async () => { await archiveCompany(existing.id, !existing.archived); return true; });
    if (done) { toast(existing.archived ? 'Unternehmen reaktiviert' : 'Unternehmen archiviert', 'good'); setCRaw((p) => ({ ...p, archived: !existing.archived })); }
  }
  async function remove() {
    const ok = await ask({ title: 'Unternehmen löschen?', text: `${existing.name} wird endgültig gelöscht.`, confirmLabel: 'Löschen', danger: true });
    if (!ok) return;
    const done = await attempt(async () => { await deleteCompany(existing.id); return true; });
    if (done) { toast('Unternehmen gelöscht', 'good'); navigateForce('/companies'); }
  }

  return html`
    <${PageHeader} title=${existing ? existing.name : 'Neues Unternehmen'} back=${{ href: '#/companies', label: 'Unternehmen' }}>
      ${existing && html`<${Menu} items=${[
        { label: existing.archived ? 'Reaktivieren' : 'Archivieren', icon: 'file', onClick: archive },
        { label: 'Löschen', icon: 'trash', danger: true, disabled: companyInUse(existing.id), onClick: remove },
      ]} />`}
      <${Button} variant="primary" icon="check" busy=${busy} onClick=${save}>Unternehmen speichern<//>
    <//>
    ${existing && existing.archived && html`<${Notice} tone="warn">Dieses Unternehmen ist archiviert und steht für neue Belege nicht zur Auswahl.<//>`}

    <div class="form-page">
      <${Panel} title="Name und Erscheinungsbild">
        <div class="form-grid">
          <${TextField} class="span-4" label="Unternehmensname" value=${c.name} onInput=${set('name')} hint="So steht er als Rechnungssteller auf den Belegen, inklusive Rechtsform" />
          <${TextField} class="span-2" label="Kurzname" value=${c.shortName} onInput=${set('shortName')} hint="Für den Company Switcher" />
          <${TextField} class="span-2" label="Rechtsform" value=${c.legalForm} onInput=${set('legalForm')} />
          <${Field} class="span-2" label="Markenfarbe" htmlFor="brand-color" hint="Akzentfarbe auf Belegen und im Tool">
            <div class="color-row">
              <input id="brand-color" type="color" class="color-input" value=${c.brandColor} onInput=${(e) => set('brandColor')(e.target.value)} />
              <span class="mono-num">${c.brandColor}</span>
            </div>
          <//>
          <${Field} class="span-6" label="Logo" hint="PNG, JPG oder SVG. Wird auf höchstens 800 Pixel verkleinert.">
            <div class="logo-row">
              <div class="logo-preview">${logoUrl ? html`<img src=${logoUrl} alt="Logo-Vorschau" />` : html`<span class="muted-text">Kein Logo</span>`}</div>
              <${Button} icon="upload" onClick=${() => fileRef.current && fileRef.current.click()}>${logoUrl ? 'Logo ersetzen' : 'Logo hochladen'}<//>
              ${logoUrl && html`<${Button} variant="ghost" icon="trash" onClick=${() => { setLogo(null); set('logoAssetId')(''); }}>Entfernen<//>`}
              <input ref=${fileRef} type="file" class="visually-hidden" accept="image/png,image/jpeg,image/svg+xml,image/webp" tabindex="-1"
                onChange=${(e) => { pickLogo(e.target.files[0]); e.target.value = ''; }} />
            </div>
          <//>
        </div>
      <//>

      <${Panel} title="Anschrift und Kontakt">
        <div class="form-grid">
          <${TextField} class="span-6" label="Straße und Hausnummer" value=${c.street} onInput=${set('street')} />
          <${TextField} class="span-2" label="PLZ" value=${c.zip} onInput=${set('zip')} />
          <${TextField} class="span-4" label="Ort" value=${c.city} onInput=${set('city')} />
          <${TextField} class="span-3" label="Bundesland / Region" value=${c.region} onInput=${set('region')} />
          <${TextField} class="span-3" label="Land" value=${c.country} onInput=${set('country')} />
          <${TextField} class="span-2" label="Telefon" value=${c.phone} onInput=${set('phone')} />
          <${TextField} class="span-2" label="E-Mail" type="email" value=${c.email} onInput=${set('email')} />
          <${TextField} class="span-2" label="Website" value=${c.website} onInput=${set('website')} />
        </div>
      <//>

      <${Panel} title="Steuer und Register">
        <p class="panel-intro">Diese Angaben erscheinen in der Fußzeile der Belege. Trage nur ein, was für dein Unternehmen gilt – das Tool ergänzt nichts von sich aus.</p>
        <div class="form-grid">
          <${TextField} class="span-3" label="Steuernummer / Tax ID" value=${c.taxId} onInput=${set('taxId')} />
          <${TextField} class="span-3" label="USt-IdNr. / VAT ID" value=${c.vatId} onInput=${set('vatId')} />
          <${TextField} class="span-6" label="Handelsregister oder vergleichbare Angabe" value=${c.registerInfo} onInput=${set('registerInfo')} />
        </div>
      <//>

      <${Panel} title="Bank und Zahlung">
        <div class="form-grid">
          <${TextField} class="span-3" label="Kontoinhaber" value=${c.accountHolder} onInput=${set('accountHolder')} />
          <${TextField} class="span-3" label="Bank" value=${c.bankName} onInput=${set('bankName')} />
          <${TextField} class="span-4" label="IBAN" value=${c.iban} onInput=${set('iban')} />
          <${TextField} class="span-2" label="BIC" value=${c.bic} onInput=${set('bic')} />
          <${TextArea} class="span-6" label="Weitere Bankdaten" value=${c.altBank} onInput=${set('altBank')} rows=${2}
            hint="Zum Beispiel Kontonummer und Routing-Nummer für Zahlungen aus den USA" />
          <${TextArea} class="span-6" label="Andere Zahlungsmöglichkeiten" value=${c.otherPayment} onInput=${set('otherPayment')} rows=${2}
            hint="Zum Beispiel PayPal-Adresse oder Zahlungslink" />
        </div>
      <//>

      <${Panel} title="Nummernkreise">
        <p class="panel-intro">Platzhalter: {COMPANY} = Präfix, {YEAR} = Jahr, {MONTH} = Monat, {NUMBER} = laufende Nummer. Mit {YEAR} beginnt die Zählung jedes Jahr neu.</p>
        <div class="form-grid">
          <${TextField} class="span-2" label="Präfix Rechnungen" value=${c.invoicePrefix} onInput=${set('invoicePrefix')} placeholder="z. B. HL" />
          <${TextField} class="span-3" label="Muster Rechnungen" value=${c.invoicePattern} onInput=${set('invoicePattern')} error=${patternErr.invoice}
            hint=${previews.invoice ? `Nächste Rechnung: ${previews.invoice}` : ''} />
          <${NumberField} class="span-1" label="Stellen" value=${c.numberDigits} digits=${0} min=${1} max=${8} onChange=${set('numberDigits')} />
          <${TextField} class="span-2" label="Präfix Angebote" value=${c.quotePrefix} onInput=${set('quotePrefix')} placeholder=${`${c.invoicePrefix || 'HL'} A`} />
          <${TextField} class="span-4" label="Muster Angebote" value=${c.quotePattern} onInput=${set('quotePattern')} error=${patternErr.quote}
            hint=${previews.quote ? `Nächstes Angebot: ${previews.quote}` : ''} />
          <${TextField} class="span-2" label="Präfix Gutschriften" value=${c.creditPrefix} onInput=${set('creditPrefix')} placeholder=${`${c.invoicePrefix || 'HL'} GS`} />
          <${TextField} class="span-4" label="Muster Gutschriften" value=${c.creditPattern} onInput=${set('creditPattern')} error=${patternErr.credit}
            hint=${previews.credit ? `Nächste Gutschrift: ${previews.credit}` : ''} />
        </div>
        ${existing && html`<div class="counter-row">
          <${Field} label=${`Zuletzt vergebene laufende Rechnungsnummer ${today.slice(0, 4)}`} htmlFor="counter-last"
            hint="Nur anpassen, wenn du in diesem Jahr schon Rechnungen außerhalb des Tools geschrieben hast.">
            <div class="inline-controls">
              <${NumberInput} id="counter-last" value=${counter != null ? counter : lastUsed} digits=${0} min=${0} onChange=${(v) => setCounterValue(v)} />
              <${Button} disabled=${counter == null || counter === lastUsed} onClick=${applyCounter}>Übernehmen<//>
            </div>
          <//>
        </div>`}
      <//>

      <${Panel} title="Standards für neue Belege">
        <div class="form-grid">
          <${SelectField} class="span-2" label="Währung" value=${c.currency} onChange=${set('currency')} options=${DOC_CURRENCIES} />
          <${SelectField} class="span-2" label="Belegsprache" value=${c.language} onChange=${set('language')} options=${LANGUAGES} />
          <${NumberField} class="span-2" label="Zahlungsziel" value=${c.paymentTermDays} digits=${0} min=${0} max=${365} suffix="Tage" onChange=${set('paymentTermDays')} />
          <${NumberField} class="span-2" label="Standard-Steuersatz" value=${c.defaultTaxRate} digits=${3} min=${0} max=${100} suffix="%" onChange=${set('defaultTaxRate')}
            hint="0, wenn du keine Steuer ausweist" />
          <${TextField} class="span-2" label="Bezeichnung der Steuer" value=${c.taxLabel} onInput=${set('taxLabel')} placeholder="z. B. USt, VAT, Sales Tax" />
          <div class="span-2"></div>
          <${TextArea} class="span-6" label="Steuerhinweis auf Belegen" value=${c.taxNote} onInput=${set('taxNote')} rows=${2}
            hint="Freier Text unter den Summen, falls für dein Unternehmen ein Hinweis nötig ist. Bleibt leer, wenn du nichts einträgst." />
          <div class="span-6"><${Checkbox} label="Gesamtbetrag zusätzlich in der Zweitwährung zeigen" checked=${c.showSecondary} onChange=${set('showSecondary')}
            hint="USD-Belege zeigen den Betrag auch in EUR und umgekehrt" /></div>
          <div class="span-6"><${Checkbox} label="Verwendeten Wechselkurs auf dem Beleg nennen" checked=${c.showFxNote !== false} onChange=${set('showFxNote')} /></div>
        </div>
      <//>

      <${Panel} title="Texte auf Belegen">
        <div class="form-grid">
          <${TextArea} class="span-6" label="Einleitung Rechnung" value=${c.invoiceText} onInput=${set('invoiceText')} rows=${2} />
          <${TextArea} class="span-6" label="Einleitung Angebot" value=${c.quoteText} onInput=${set('quoteText')} rows=${2} />
          <${TextArea} class="span-6" label="Zahlungsbedingungen" value=${c.paymentTerms} onInput=${set('paymentTerms')} rows=${2} />
          <${TextArea} class="span-6" label="Fußzeile" value=${c.footer} onInput=${set('footer')} rows=${2} hint="Zusätzliche rechtliche Angaben oder ein Dank" />
        </div>
      <//>

      <div class="form-page-foot">
        <${Button} variant="primary" icon="check" busy=${busy} onClick=${save}>Unternehmen speichern<//>
      </div>
    </div>
  `;
}
