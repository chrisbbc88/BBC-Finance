// HTML-Darstellung eines Belegs (Vorschau). Rendert dasselbe Modell wie das PDF.
// Alle Maße hängen an der Blattbreite (Container-Einheiten), so skaliert das Blatt stufenlos.

import { html } from './core.js';

export function DocSheet({ model }) {
  const L = model.labels;
  const c = model.columns;
  return html`<div class="sheet-wrap">
    <article class="sheet" style=${`--doc-brand:${model.brandColor}`} lang=${model.lang}>
      ${model.draftMark && html`<div class="sheet-mark" aria-hidden="true">${model.draftMark}</div>`}
      <div class="sheet-head">
        ${model.logoUrl
          ? html`<img class="sheet-logo" src=${model.logoUrl} alt=${model.companyName} />`
          : html`<div class="sheet-company">${model.companyName || ' '}</div>`}
      </div>
      <div class="sheet-top">
        <div class="sheet-address">
          <div class="sheet-sender">${model.senderLine}</div>
          ${model.recipient.length
            ? model.recipient.map((l, i) => html`<div class=${i === 0 ? 'sheet-strong' : ''}>${l}</div>`)
            : html`<div class="sheet-placeholder">${model.lang === 'en' ? 'Customer' : 'Kunde'}</div>`}
          ${model.recipientExtra.map((l) => html`<div class="sheet-small">${l}</div>`)}
        </div>
        <dl class="sheet-meta">
          ${model.meta.map(([k, v], i) => html`<div><dt>${k}</dt><dd class=${i === 0 ? 'sheet-strong' : ''}>${v}</dd></div>`)}
        </dl>
      </div>
      <h1 class="sheet-title">${model.title}${model.number && html` <span>${model.number}</span>`}</h1>
      ${model.subtitle && html`<div class="sheet-subtitle">${model.subtitle}</div>`}
      ${model.intro && html`<p class="sheet-text">${model.intro}</p>`}
      <table class="sheet-items">
        <thead><tr>
          <th>${L.pos}</th>
          <th>${L.description}</th>
          <th class="r">${L.qty}</th>
          <th>${L.unit}</th>
          <th class="r">${L.price}</th>
          ${c.discount && html`<th class="r">${L.discount}</th>`}
          ${c.tax && html`<th class="r">${L.tax}</th>`}
          <th class="r">${L.amount}</th>
        </tr></thead>
        <tbody>
          ${model.rows.map((r) => html`<tr>
            <td>${r.pos}</td>
            <td><div class="sheet-strong">${r.name || ' '}</div>${r.description && html`<div class="sheet-desc">${r.description}</div>`}</td>
            <td class="r nw">${r.qty}</td>
            <td>${r.unit}</td>
            <td class="r nw">${r.price}</td>
            ${c.discount && html`<td class="r nw">${r.discount}</td>`}
            ${c.tax && html`<td class="r nw">${r.tax}</td>`}
            <td class="r nw">${r.amount}</td>
          </tr>`)}
          ${!model.rows.length && html`<tr><td colspan="8" class="sheet-placeholder">${model.lang === 'en' ? 'No items yet' : 'Noch keine Positionen'}</td></tr>`}
        </tbody>
      </table>
      <div class="sheet-sums">
        <table>
          ${model.sums.map((s) => html`<tr class=${s.strong ? 'is-total' : ''}><td>${s.label}</td><td class="r nw">${s.value}</td></tr>`)}
        </table>
        ${model.secondary && html`<div class="sheet-secondary">${model.secondary.line}</div>`}
        ${model.secondary && model.secondary.fx && html`<div class="sheet-fx">${model.secondary.fx}</div>`}
      </div>
      ${model.notes.length > 0 && html`<div class="sheet-notes">${model.notes.map((n) => html`<p>${n}</p>`)}</div>`}
      ${model.payment && html`<div class="sheet-payment">
        <div class="sheet-strong">${model.payment.title}</div>
        ${model.payment.rows.length > 0 && html`<table>${model.payment.rows.map(([k, v]) => html`<tr><td class="sheet-muted">${k}</td><td>${v}</td></tr>`)}</table>`}
        ${model.payment.extra.map((t) => html`<p>${t}</p>`)}
      </div>`}
      <footer class="sheet-footer">
        <div class="sheet-footer-cols">
          ${model.footerCols.map((col) => html`<div>${col.map((l) => html`<div>${l}</div>`)}</div>`)}
        </div>
        ${model.footerText && html`<div class="sheet-footer-text">${model.footerText}</div>`}
      </footer>
    </article>
  </div>`;
}
