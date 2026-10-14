// To-dos: bei Kontakten, aus Terminen, im Dashboard und als eigene Liste.

import { html, useState, useStore, toast, attempt, ask } from '../ui/core.js';
import { Button, PageHeader, Modal, TextField, TextArea, DateField, SelectField, Field, Combobox, Panel, Chips, EmptyState } from '../ui/components.js';
import { Icon } from '../ui/icons.js';
import { state, byId, activeCompanies, currentCompany } from '../lib/store.js';
import { newTodo, customerName } from '../lib/schema.js';
import { saveTodo, setTodoDone, deleteTodo } from '../lib/actions.js';
import { date } from '../lib/format.js';
import { todayISO, addDays, daysBetween, matches } from '../lib/util.js';
import { CompanyTag } from './shared.js';

/** Passt das To-do zum gewählten Unternehmen? To-dos ohne Unternehmen gelten überall. */
export const todoInScope = (t) => { const c = currentCompany(); return !c || !t.companyId || t.companyId === c.id; };

export function openTodos(filter = () => true) {
  return state.todos.filter((t) => !t.done && filter(t)).sort(byDue);
}
export const byDue = (a, b) => ((a.due || '9999') < (b.due || '9999') ? -1 : (a.due || '9999') > (b.due || '9999') ? 1 : (a.createdAt < b.createdAt ? -1 : 1));

export function dueInfo(t, today = todayISO()) {
  if (!t.due) return { text: 'ohne Termin', tone: '' };
  if (t.done) return { text: date(t.due), tone: '' };
  if (t.due < today) { const d = daysBetween(t.due, today); return { text: `überfällig seit ${d} ${d === 1 ? 'Tag' : 'Tagen'}`, tone: 'bad' }; }
  if (t.due === today) return { text: 'heute', tone: 'warn' };
  if (t.due === addDays(today, 1)) return { text: 'morgen', tone: '' };
  return { text: `bis ${date(t.due)}`, tone: '' };
}

/** Anzahl fälliger To-dos (überfällig und heute) – für die Navigation. */
export const dueTodoCount = () => { const today = todayISO(); return state.todos.filter((t) => !t.done && t.due && t.due <= today && todoInScope(t)).length; };

async function toggle(t) {
  const rec = await attempt(() => setTodoDone(t.id, !t.done));
  if (rec && rec.done) toast(`Erledigt: ${t.title}`, 'good');
}

export function TodoList({ items, showCustomer = true, onEdit, empty }) {
  if (!items.length) return empty ? html`<p class="muted-text">${empty}</p>` : null;
  return html`<ul class="todo-list">
    ${items.map((t) => {
      const due = dueInfo(t);
      const c = t.customerId ? byId('customers', t.customerId) : null;
      const appt = t.appointmentId ? byId('appointments', t.appointmentId) : null;
      return html`<li key=${t.id} class=${t.done ? 'is-done' : ''}>
        <input type="checkbox" class="todo-check" checked=${!!t.done} aria-label=${`${t.title} ${t.done ? 'wieder öffnen' : 'erledigt'}`} onChange=${() => toggle(t)} />
        <button type="button" class="todo-body" onClick=${() => onEdit && onEdit(t)}>
          <span class="todo-title">${t.title}</span>
          <span class="cell-sub">
            <span class=${due.tone ? `tone-${due.tone}` : ''}>${t.done ? `erledigt${t.doneAt ? ` am ${date(t.doneAt.slice(0, 10))}` : ''}` : due.text}</span>
            ${showCustomer && c && html` · ${customerName(c)}`}
            ${appt && html` · aus Termin ${date(appt.date)}`}
          </span>
        </button>
        ${t.companyId && html`<span class="todo-co"><${CompanyTag} id=${t.companyId} /></span>`}
      </li>`;
    })}
  </ul>`;
}

/** Schnell ein To-do anlegen: Text, Fälligkeit, Enter. */
export function TodoQuickAdd({ customerId = '', companyId = '', withCustomer = false }) {
  const [title, setTitle] = useState('');
  const [due, setDue] = useState(addDays(todayISO(), 7));
  const [cust, setCust] = useState(customerId);
  const options = state.customers.filter((c) => c.active !== false).sort((a, b) => customerName(a).localeCompare(customerName(b), 'de'))
    .map((c) => ({ id: c.id, label: customerName(c), sub: c.number }));
  async function add(e) {
    if (e) e.preventDefault();
    if (!title.trim()) return;
    const company = companyId || (currentCompany() ? currentCompany().id : '');
    const rec = await attempt(() => saveTodo(newTodo({ title, due, customerId: cust || customerId, companyId: company })));
    if (rec) { setTitle(''); toast('To-do angelegt', 'good'); }
  }
  return html`<form class=${`todo-add${withCustomer ? ' with-customer' : ''}`} onSubmit=${add}>
    <input class="input" placeholder="Neues To-do, z. B. Angebot schicken" aria-label="Neues To-do" value=${title} onInput=${(e) => setTitle(e.target.value)} />
    ${withCustomer && html`<${Combobox} options=${options} value=${cust} onChange=${setCust} placeholder="Kontakt (optional)" label="Kontakt zum To-do" />`}
    <input class="input todo-add-date" type="date" aria-label="Fällig am" value=${due} onInput=${(e) => setDue(e.target.value)} />
    <${Button} type="submit" icon="plus" disabled=${!title.trim()}>Hinzufügen<//>
  </form>`;
}

export function TodoModal({ todo, onClose }) {
  const isNew = !byId('todos', todo.id);
  const [t, setT] = useState(() => ({ ...todo }));
  const [busy, setBusy] = useState(false);
  const set = (k) => (v) => setT((p) => ({ ...p, [k]: v }));
  const options = [...state.customers].sort((a, b) => customerName(a).localeCompare(customerName(b), 'de')).map((c) => ({ id: c.id, label: customerName(c), sub: c.number }));
  const appt = t.appointmentId ? byId('appointments', t.appointmentId) : null;
  async function submit() {
    setBusy(true);
    const rec = await attempt(() => saveTodo(t));
    setBusy(false);
    if (rec) { toast(isNew ? 'To-do angelegt' : 'To-do gespeichert', 'good'); onClose(); }
  }
  async function remove() {
    const ok = await ask({ title: 'To-do löschen?', text: `„${t.title}“ wird gelöscht. Im Protokoll bleibt der Eintrag erhalten.`, confirmLabel: 'Löschen', danger: true });
    if (!ok) return;
    const done = await attempt(async () => { await deleteTodo(t.id); return true; });
    if (done) { toast('To-do gelöscht', 'good'); onClose(); }
  }
  return html`<${Modal} title=${isNew ? 'Neues To-do' : 'To-do bearbeiten'} onClose=${onClose} onSubmit=${submit}
    footer=${html`${!isNew && html`<${Button} variant="ghost" icon="trash" onClick=${remove}>Löschen<//>`}<span class="spacer"></span>
      <${Button} onClick=${onClose}>Abbrechen<//><${Button} variant="primary" type="submit" busy=${busy}>Speichern<//>`}>
    <div class="form-grid">
      <${TextField} class="span-6" label="Was ist zu tun?" value=${t.title} onInput=${set('title')} />
      <${DateField} class="span-2" label="Fällig am" value=${t.due} onInput=${set('due')} />
      <${Field} class="span-4" label="Kontakt">
        <${Combobox} options=${options} value=${t.customerId} onChange=${(v) => set('customerId')(v || '')} placeholder="Ohne Kontakt" label="Kontakt" />
      <//>
      <${SelectField} class="span-3" label="Unternehmen" value=${t.companyId} onChange=${set('companyId')} placeholder="Ohne Zuordnung"
        options=${activeCompanies().map((c) => ({ id: c.id, label: c.name }))} />
      <div class="span-3 field field-inline">${!isNew && html`<label class="check"><input type="checkbox" checked=${!!t.done}
        onChange=${(e) => setT((p) => ({ ...p, done: e.target.checked, doneAt: e.target.checked ? new Date().toISOString() : null }))} /> Erledigt</label>`}</div>
      <${TextArea} class="span-6" label="Notiz" value=${t.note} onInput=${set('note')} rows=${3} />
      ${appt && html`<p class="span-6 field-hint">Aus dem Termin „${appt.title}“ am ${date(appt.date)}.</p>`}
    </div>
  <//>`;
}

/** Dashboard: offene To-dos, Fälliges zuerst. */
export function DashboardTodos() {
  const [editing, setEditing] = useState(null);
  const items = openTodos(todoInScope);
  const shown = items.slice(0, 8);
  return html`<${Panel} title=${`To-dos${items.length ? ` (${items.length})` : ''}`} class="dash-todos" action=${html`<a class="panel-link" href="#/todos">Alle To-dos</a>`}>
    <${TodoList} items=${shown} onEdit=${setEditing} empty="Keine offenen To-dos." />
    ${items.length > shown.length && html`<p class="cell-sub"><a href="#/todos">${items.length - shown.length} weitere</a></p>`}
    <${TodoQuickAdd} withCustomer />
    ${editing && html`<${TodoModal} key=${editing.id} todo=${editing} onClose=${() => setEditing(null)} />`}
  <//>`;
}

/** Eigene Seite: alle To-dos mit Filter. */
export function TodosView() {
  useStore();
  const [filter, setFilter] = useState('open');
  const [q, setQ] = useState('');
  const [editing, setEditing] = useState(null);
  const today = todayISO();
  const scoped = state.todos.filter(todoInScope);
  const groups = {
    open: scoped.filter((t) => !t.done),
    due: scoped.filter((t) => !t.done && t.due && t.due <= today),
    done: scoped.filter((t) => t.done),
  };
  const custName = (t) => (t.customerId ? customerName(byId('customers', t.customerId)) : '');
  let rows = groups[filter].filter((t) => matches(q, t.title, t.note, custName(t)));
  rows = filter === 'done' ? rows.sort((a, b) => ((a.doneAt || '') < (b.doneAt || '') ? 1 : -1)) : rows.sort(byDue);
  return html`
    <${PageHeader} title="To-dos" sub=${currentCompany() ? `To-dos für ${currentCompany().name} und ohne Zuordnung` : 'Alle To-dos'}>
      <${Button} variant="primary" icon="plus" onClick=${() => setEditing(newTodo({ due: addDays(today, 7), companyId: currentCompany() ? currentCompany().id : '' }))}>Neues To-do<//>
    <//>
    <div class="filters">
      <input class="input filter-select" type="search" placeholder="To-dos durchsuchen" aria-label="To-dos durchsuchen" value=${q} onInput=${(e) => setQ(e.target.value)} />
      <${Chips} label="Filter" value=${filter} onChange=${setFilter} options=${[
        { id: 'open', label: 'Offen', count: groups.open.length },
        { id: 'due', label: 'Fällig', count: groups.due.length },
        { id: 'done', label: 'Erledigt', count: groups.done.length },
      ]} />
    </div>
    <${Panel}>
      <${TodoQuickAdd} withCustomer />
      ${rows.length ? html`<${TodoList} items=${rows} onEdit=${setEditing} />`
        : html`<${EmptyState} icon="check" title=${filter === 'done' ? 'Noch nichts erledigt' : 'Nichts offen'} text="To-dos legst du hier, beim Kontakt oder beim Dokumentieren eines Termins an." />`}
    <//>
    ${editing && html`<${TodoModal} key=${editing.id} todo=${editing} onClose=${() => setEditing(null)} />`}
  `;
}

export { Icon };
