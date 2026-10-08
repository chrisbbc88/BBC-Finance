// Wiederverwendbare Bausteine der Oberfläche.

import {
  html, useState, useEffect, useRef, useMemo, useToasts, dismissToast, useDialog,
} from './core.js';
import { Icon } from './icons.js';
import { parseNum, norm } from '../lib/util.js';
import { toCents } from '../lib/calc.js';
import { centsToInput, numToInput } from '../lib/format.js';

let seq = 0;
export const useId = (prefix = 'f') => useMemo(() => `${prefix}-${++seq}`, []);

/* ---------- Buttons ---------- */

export function Button({
  variant = 'default', icon, onClick, disabled, type = 'button', title, small, busy, children, class: extra = '', ...rest
}) {
  const cls = `btn btn-${variant}${small ? ' btn-small' : ''}${!children ? ' btn-icon' : ''}${extra ? ` ${extra}` : ''}`;
  return html`<button type=${type} class=${cls} onClick=${onClick} disabled=${disabled || busy}
    title=${title} aria-label=${!children ? title : undefined} ...${rest}>
    ${icon && html`<${Icon} name=${busy ? 'refresh' : icon} size=${small ? 16 : 18} class=${busy ? 'spin' : ''} />`}
    ${children && html`<span>${children}</span>`}
  </button>`;
}

export function LinkButton({ href, variant = 'default', icon, small, children }) {
  return html`<a href=${href} class=${`btn btn-${variant}${small ? ' btn-small' : ''}`}>
    ${icon && html`<${Icon} name=${icon} size=${small ? 16 : 18} />`}<span>${children}</span>
  </a>`;
}

/* ---------- Formularfelder ---------- */

export function Field({ label, hint, error, children, class: cls = '', htmlFor }) {
  return html`<div class=${`field ${cls}${error ? ' has-error' : ''}`}>
    ${label && html`<label class="field-label" for=${htmlFor}>${label}</label>`}
    ${children}
    ${error ? html`<div class="field-error">${error}</div>` : (hint && html`<div class="field-hint">${hint}</div>`)}
  </div>`;
}

export function TextField({ label, hint, error, value, onInput, type = 'text', class: cls, ...rest }) {
  const id = useId();
  return html`<${Field} label=${label} hint=${hint} error=${error} class=${cls} htmlFor=${id}>
    <input id=${id} class="input" type=${type} value=${value ?? ''} onInput=${(e) => onInput && onInput(e.target.value)} ...${rest} />
  <//>`;
}

export function TextArea({ label, hint, value, onInput, rows = 3, class: cls, ...rest }) {
  const id = useId();
  return html`<${Field} label=${label} hint=${hint} class=${cls} htmlFor=${id}>
    <textarea id=${id} class="input textarea" rows=${rows} value=${value ?? ''} onInput=${(e) => onInput && onInput(e.target.value)} ...${rest}></textarea>
  <//>`;
}

export function SelectField({ label, hint, error, value, onChange, options, class: cls, placeholder, ...rest }) {
  const id = useId();
  return html`<${Field} label=${label} hint=${hint} error=${error} class=${cls} htmlFor=${id}>
    <select id=${id} class="input select" value=${value ?? ''} onChange=${(e) => onChange && onChange(e.target.value)} ...${rest}>
      ${placeholder != null && html`<option value="">${placeholder}</option>`}
      ${options.map((o) => {
        const opt = typeof o === 'object' ? o : { id: o, label: o };
        return html`<option value=${opt.id} selected=${String(opt.id) === String(value ?? '')}>${opt.label}</option>`;
      })}
    </select>
  <//>`;
}

/**
 * Zahlenfeld mit deutscher Eingabe. Während des Tippens bleibt der Text unangetastet;
 * beim Verlassen wird er als Zahl gelesen und einheitlich dargestellt.
 * mode: 'money' (Wert in Cent) | 'number'
 */
export function NumberInput({
  value, onChange, mode = 'number', digits = 3, min, max, allowEmpty, class: cls = '', suffix, ...rest
}) {
  const show = (v) => (v == null || v === '' ? '' : (mode === 'money' ? centsToInput(v) : numToInput(v, digits)));
  const [text, setText] = useState(show(value));
  const [focused, setFocused] = useState(false);
  const [bad, setBad] = useState(false);
  useEffect(() => { if (!focused) setText(show(value)); }, [value, focused]);

  function commit(raw) {
    if (String(raw).trim() === '') {
      setBad(false);
      onChange(allowEmpty ? null : 0);
      return;
    }
    let n = parseNum(raw, { decimalOnly: mode !== 'money' });
    if (Number.isNaN(n)) { setBad(true); return; }
    if (min != null && n < min) n = min;
    if (max != null && n > max) n = max;
    setBad(false);
    onChange(mode === 'money' ? toCents(n) : Number(n.toFixed(digits)));
  }

  const input = html`<input class=${`input num ${bad ? 'is-bad' : ''} ${suffix ? `has-suffix${String(suffix).length > 2 ? ' suffix-long' : ''}` : ''} ${cls}`} type="text" inputmode="decimal" autocomplete="off"
    value=${text}
    onFocus=${(e) => { setFocused(true); e.target.select(); }}
    onInput=${(e) => { setText(e.target.value); commit(e.target.value); }}
    onBlur=${(e) => { setFocused(false); commit(e.target.value); }}
    aria-invalid=${bad} ...${rest} />`;
  if (!suffix) return input;
  return html`<span class="input-wrap">${input}<span class="input-suffix">${suffix}</span></span>`;
}

export function NumberField({ label, hint, error, class: cls, ...rest }) {
  const id = useId();
  return html`<${Field} label=${label} hint=${hint} error=${error} class=${cls} htmlFor=${id}>
    <${NumberInput} id=${id} ...${rest} />
  <//>`;
}

export function DateField({ label, hint, error, value, onInput, class: cls, ...rest }) {
  const id = useId();
  return html`<${Field} label=${label} hint=${hint} error=${error} class=${cls} htmlFor=${id}>
    <input id=${id} class="input" type="date" value=${value ?? ''} onInput=${(e) => onInput(e.target.value)} ...${rest} />
  <//>`;
}

export function Checkbox({ label, checked, onChange, hint, disabled }) {
  const id = useId('c');
  return html`<div class="check">
    <input id=${id} type="checkbox" checked=${!!checked} disabled=${disabled} onChange=${(e) => onChange(e.target.checked)} />
    <label for=${id}>${label}${hint && html`<span class="check-hint">${hint}</span>`}</label>
  </div>`;
}

/** Umschalter zwischen wenigen Optionen (z. B. % / Betrag). */
export function Segmented({ value, onChange, options, label }) {
  return html`<div class="seg" role="group" aria-label=${label}>
    ${options.map((o) => html`<button type="button" class=${`seg-btn${String(o.id) === String(value) ? ' is-on' : ''}`}
      aria-pressed=${String(o.id) === String(value)} onClick=${() => onChange(o.id)}>${o.label}</button>`)}
  </div>`;
}

/* ---------- Auswahl mit Suche ---------- */

/**
 * options: [{ id, label, sub, search }]
 * onCreate(text): optionaler „Neu anlegen“-Eintrag.
 * freeText: Eingabe darf auch ohne Auswahl stehen bleiben (Positionsname).
 */
export function Combobox({
  options, value, onChange, placeholder, onCreate, createLabel, freeText, text, onText, autoFocus, label, id: givenId, disabled,
}) {
  const autoId = useId('cb');
  const id = givenId || autoId;
  const selected = options.find((o) => o.id === value);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inputRef = useRef(null);
  const shown = freeText ? (text ?? '') : (open ? query : (selected ? selected.label : ''));

  const filtered = useMemo(() => {
    const q = norm(freeText ? (open ? text : '') : query).trim();
    const list = !q ? options : options.filter((o) => norm(`${o.label} ${o.sub || ''} ${o.search || ''}`).includes(q));
    return list.slice(0, 50);
  }, [options, query, text, open, freeText]);

  useEffect(() => {
    if (!open) return undefined;
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) { setOpen(false); setQuery(''); } };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);
  useEffect(() => { if (autoFocus && inputRef.current) inputRef.current.focus(); }, []);

  const canCreate = onCreate && !freeText;
  const total = filtered.length + (canCreate ? 1 : 0);

  function pick(o) {
    onChange(o.id, o);
    setOpen(false);
    setQuery('');
  }
  function onKey(e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); setActive((a) => Math.min(a + 1, total - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === 'Enter') {
      if (!open) return;
      if (freeText && !filtered.length) { setOpen(false); return; }
      e.preventDefault();
      if (active < filtered.length) pick(filtered[active]);
      else if (canCreate) { onCreate(query); setOpen(false); setQuery(''); }
    } else if (e.key === 'Escape') { if (open) { e.stopPropagation(); setOpen(false); setQuery(''); } }
    else if (e.key === 'Tab') { setOpen(false); setQuery(''); }
  }

  return html`<div class="combo" ref=${ref}>
    <input ref=${inputRef} id=${id} class="input combo-input" type="text" role="combobox" autocomplete="off"
      aria-expanded=${open} aria-label=${label} aria-autocomplete="list" disabled=${disabled}
      placeholder=${open && selected && !freeText ? selected.label : placeholder} value=${shown}
      onClick=${() => { setOpen(true); setActive(0); }}
      onInput=${(e) => {
        setOpen(true); setActive(0);
        if (freeText) onText(e.target.value); else setQuery(e.target.value);
      }}
      onKeyDown=${onKey} />
    ${!freeText && html`<span class="combo-caret"><${Icon} name="chevronDown" size=${16} /></span>`}
    ${open && total > 0 && html`<ul class="combo-list" role="listbox">
      ${filtered.map((o, i) => html`<li role="option" aria-selected=${i === active}
          class=${`combo-item${i === active ? ' is-active' : ''}${o.id === value ? ' is-selected' : ''}`}
          onMouseEnter=${() => setActive(i)}
          onMouseDown=${(e) => { e.preventDefault(); pick(o); }}>
          <span class="combo-label">${o.label}</span>
          ${o.sub && html`<span class="combo-sub">${o.sub}</span>`}
        </li>`)}
      ${canCreate && html`<li role="option" class=${`combo-item combo-create${active === filtered.length ? ' is-active' : ''}`}
          onMouseEnter=${() => setActive(filtered.length)}
          onMouseDown=${(e) => { e.preventDefault(); onCreate(query); setOpen(false); setQuery(''); }}>
          <${Icon} name="plus" size=${16} />
          <span>${query.trim() ? `„${query.trim()}“ ${createLabel || 'neu anlegen'}` : (createLabel ? `Neu: ${createLabel}` : 'Neu anlegen')}</span>
        </li>`}
    </ul>`}
    ${open && total === 0 && !freeText && html`<div class="combo-list combo-empty">Keine Treffer</div>`}
  </div>`;
}

/* ---------- Anzeige ---------- */

const TONE_ICON = { good: 'good', bad: 'bad', warn: 'clock', info: 'info', neutral: 'edit', mute: 'x' };

export function Badge({ tone = 'neutral', children, icon }) {
  return html`<span class=${`badge badge-${tone}`}>
    <${Icon} name=${icon || TONE_ICON[tone] || 'info'} size=${14} />${children}
  </span>`;
}

export function PageHeader({ title, sub, back, children }) {
  return html`<header class="page-head">
    <div class="page-head-text">
      ${back && html`<a class="back-link" href=${back.href}><${Icon} name="chevronLeft" size=${16} />${back.label}</a>`}
      <h1>${title}</h1>
      ${sub && html`<p class="page-sub">${sub}</p>`}
    </div>
    ${children && html`<div class="page-actions">${children}</div>`}
  </header>`;
}

export function EmptyState({ icon = 'file', title, text, children }) {
  return html`<div class="empty">
    <div class="empty-icon"><${Icon} name=${icon} size=${26} /></div>
    <h3>${title}</h3>
    ${text && html`<p>${text}</p>`}
    ${children && html`<div class="empty-actions">${children}</div>`}
  </div>`;
}

export function Panel({ title, action, children, class: cls = '', flush }) {
  return html`<section class=${`panel ${cls}`}>
    ${(title || action) && html`<div class="panel-head"><h2>${title}</h2>${action}</div>`}
    <div class=${flush ? 'panel-body flush' : 'panel-body'}>${children}</div>
  </section>`;
}

export function Notice({ tone = 'info', children, action }) {
  return html`<div class=${`notice notice-${tone}`} role=${tone === 'bad' ? 'alert' : 'status'}>
    <${Icon} name=${tone === 'bad' ? 'bad' : tone === 'warn' ? 'warn' : tone === 'good' ? 'good' : 'info'} />
    <div class="notice-text">${children}</div>
    ${action}
  </div>`;
}

/** Firmen-Kennzeichen: Farbfeld mit Kürzel. */
export function CompanyDot({ company, size = 10 }) {
  if (!company) return null;
  return html`<span class="co-dot" style=${`background:${company.brandColor};width:${size}px;height:${size}px`} title=${company.name}></span>`;
}

/* ---------- Menü ---------- */

export function Menu({ label = 'Mehr', icon = 'more', items, variant = 'default', small }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc); };
  }, [open]);
  const list = items.filter(Boolean);
  if (!list.length) return null;
  return html`<div class="menu" ref=${ref}>
    <${Button} variant=${variant} icon=${icon} small=${small} onClick=${() => setOpen(!open)} aria-haspopup="menu" aria-expanded=${open}>${label}<//>
    ${open && html`<div class="menu-list" role="menu">
      ${list.map((it) => html`<button type="button" role="menuitem" class=${`menu-item${it.danger ? ' is-danger' : ''}`} disabled=${it.disabled}
        onClick=${() => { setOpen(false); it.onClick(); }}>
        ${it.icon && html`<${Icon} name=${it.icon} size=${16} />`}<span>${it.label}</span>
      </button>`)}
    </div>`}
  </div>`;
}

/* ---------- Modal ---------- */

export function Modal({ title, onClose, children, footer, size = 'md', onSubmit }) {
  const ref = useRef(null);
  useEffect(() => {
    const prev = document.activeElement;
    const el = ref.current;
    if (el) {
      const first = el.querySelector('[autofocus], input:not([type=hidden]):not([disabled]), select, textarea, button.btn-primary');
      if (first) first.focus();
    }
    const onKey = (e) => {
      if (e.key === 'Escape') { e.stopPropagation(); onClose(); }
      if (e.key === 'Tab' && el) {
        const nodes = [...el.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled])')]
          .filter((n) => n.offsetParent !== null);
        if (!nodes.length) return;
        const firstN = nodes[0], lastN = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === firstN) { e.preventDefault(); lastN.focus(); }
        else if (!e.shiftKey && document.activeElement === lastN) { e.preventDefault(); firstN.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('modal-open');
      if (prev && prev.focus) prev.focus();
    };
  }, []);
  const body = html`
    <div class="modal-head">
      <h2>${title}</h2>
      <${Button} variant="ghost" icon="x" title="Schließen" onClick=${onClose} />
    </div>
    <div class="modal-body">${children}</div>
    ${footer && html`<div class="modal-foot">${footer}</div>`}`;
  return html`<div class="modal-backdrop" onMouseDown=${(e) => { if (e.target === e.currentTarget) onClose(); }}>
    ${onSubmit
      ? html`<form class=${`modal modal-${size}`} ref=${ref} role="dialog" aria-modal="true" aria-label=${title} noValidate
          onSubmit=${(e) => { e.preventDefault(); onSubmit(); }}>${body}</form>`
      : html`<div class=${`modal modal-${size}`} ref=${ref} role="dialog" aria-modal="true" aria-label=${title}>${body}</div>`}
  </div>`;
}

/** Host für ask()-Rückfragen. */
export function DialogHost() {
  const d = useDialog();
  const [text, setText] = useState('');
  useEffect(() => { setText(d && d.input ? (d.input.value || '') : ''); }, [d]);
  if (!d) return null;
  const cancel = () => d.resolve(d.input ? null : false);
  const ok = () => d.resolve(d.input ? text : true);
  return html`<${Modal} title=${d.title} onClose=${cancel} size="sm" onSubmit=${ok}
    footer=${html`
      <${Button} onClick=${cancel}>${d.cancelLabel || 'Abbrechen'}<//>
      <${Button} variant=${d.danger ? 'danger' : 'primary'} type="submit">${d.confirmLabel || 'OK'}<//>`}>
    ${d.text && html`<p class="dialog-text">${d.text}</p>`}
    ${d.list && html`<ul class="dialog-list">${d.list.map((l) => html`<li>${l}</li>`)}</ul>`}
    ${d.input && (d.input.multiline
      ? html`<${TextArea} label=${d.input.label} value=${text} onInput=${setText} placeholder=${d.input.placeholder} rows=${3} />`
      : html`<${TextField} label=${d.input.label} value=${text} onInput=${setText} placeholder=${d.input.placeholder} />`)}
  <//>`;
}

export function ToastHost() {
  const list = useToasts();
  return html`<div class="toasts" aria-live="polite">
    ${list.map((t) => html`<div class=${`toast toast-${t.tone}`} key=${t.id}>
      <${Icon} name=${t.tone === 'bad' ? 'bad' : t.tone === 'good' ? 'good' : 'info'} />
      <span>${t.message}</span>
      <button type="button" class="toast-x" aria-label="Meldung schließen" onClick=${() => dismissToast(t.id)}><${Icon} name="x" size=${14} /></button>
    </div>`)}
  </div>`;
}

/* ---------- Tabelle ---------- */

/**
 * columns: [{ key, label, align, render(row), sort(row), width, class }]
 * Klick auf den Spaltenkopf sortiert, sofern `sort` gesetzt ist.
 */
export function DataTable({ columns, rows, onRowClick, rowKey = (r) => r.id, initialSort, footer, empty, rowClass }) {
  const [sort, setSort] = useState(initialSort || null);
  const sorted = useMemo(() => {
    if (!sort) return rows;
    const col = columns.find((c) => c.key === sort.key);
    if (!col || !col.sort) return rows;
    const dir = sort.dir === 'desc' ? -1 : 1;
    return [...rows].sort((a, b) => {
      const x = col.sort(a), y = col.sort(b);
      if (x == null && y == null) return 0;
      if (x == null) return 1;
      if (y == null) return -1;
      if (typeof x === 'number' && typeof y === 'number') return (x - y) * dir;
      return String(x).localeCompare(String(y), 'de', { numeric: true }) * dir;
    });
  }, [rows, sort, columns]);

  if (!rows.length && empty) return empty;
  const toggle = (c) => {
    if (!c.sort) return;
    setSort((s) => (s && s.key === c.key ? { key: c.key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key: c.key, dir: c.align === 'right' ? 'desc' : 'asc' }));
  };
  return html`<div class="table-wrap">
    <table class="table">
      <thead><tr>
        ${columns.map((c) => html`<th class=${`${c.align === 'right' ? 'r' : ''} ${c.class || ''}`} style=${c.width ? `width:${c.width}` : ''}
            aria-sort=${sort && sort.key === c.key ? (sort.dir === 'asc' ? 'ascending' : 'descending') : undefined}>
          ${c.sort
            ? html`<button type="button" class="th-btn" onClick=${() => toggle(c)}>${c.label}
                ${sort && sort.key === c.key && html`<${Icon} name=${sort.dir === 'asc' ? 'arrowUp' : 'arrowDown'} size=${13} />`}</button>`
            : c.label}
        </th>`)}
      </tr></thead>
      <tbody>
        ${sorted.map((r) => html`<tr key=${rowKey(r)} class=${`${onRowClick ? 'is-click' : ''} ${rowClass ? rowClass(r) : ''}`}
            tabindex=${onRowClick ? 0 : undefined}
            onClick=${onRowClick ? (e) => { if (!e.target.closest('button, a, input, select')) onRowClick(r); } : undefined}
            onKeyDown=${onRowClick ? (e) => { if (e.key === 'Enter' && e.target === e.currentTarget) onRowClick(r); } : undefined}>
          ${columns.map((c) => html`<td class=${`${c.align === 'right' ? 'r' : ''} ${c.class || ''}`}>${c.render ? c.render(r) : r[c.key]}</td>`)}
        </tr>`)}
      </tbody>
      ${footer && html`<tfoot><tr>${footer.map((f, i) => html`<td class=${columns[i] && columns[i].align === 'right' ? 'r' : ''}>${f}</td>`)}</tr></tfoot>`}
    </table>
  </div>`;
}

/** Filter-Chips (Einfachauswahl). */
export function Chips({ options, value, onChange, label }) {
  return html`<div class="chips" role="group" aria-label=${label}>
    ${options.map((o) => html`<button type="button" class=${`chip${o.id === value ? ' is-on' : ''}`} aria-pressed=${o.id === value}
      onClick=${() => onChange(o.id)}>${o.label}${o.count != null && html`<span class="chip-count">${o.count}</span>`}</button>`)}
  </div>`;
}

export function SearchInput({ value, onInput, placeholder = 'Suchen' }) {
  return html`<div class="search-box">
    <${Icon} name="search" size=${16} />
    <input class="input" type="search" value=${value} placeholder=${placeholder} aria-label=${placeholder}
      onInput=${(e) => onInput(e.target.value)} />
  </div>`;
}

/** Kennzahl-Kachel. */
export function Stat({ label, value, sub, tone, href, title }) {
  const inner = html`
    <div class="stat-label">${label}</div>
    <div class=${`stat-value${tone ? ` tone-${tone}` : ''}`} title=${title}>${value}</div>
    ${sub && html`<div class="stat-sub">${sub}</div>`}`;
  return href
    ? html`<a class="stat is-link" href=${href}>${inner}</a>`
    : html`<div class="stat">${inner}</div>`;
}

/** Definitionsliste für Detailansichten. */
export function KV({ rows }) {
  return html`<dl class="kv">
    ${rows.filter((r) => r && r[1] != null && r[1] !== '').map(([k, v]) => html`<div class="kv-row"><dt>${k}</dt><dd>${v}</dd></div>`)}
  </dl>`;
}
