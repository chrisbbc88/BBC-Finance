// Tabellen-Export: CSV (Excel-freundlich mit Semikolon und BOM), Excel (.xlsx) und PDF.

import { saveBlob, downloadTablePdf } from './pdf.js';
import { safeFileName } from './util.js';

let xlsxReady = null;
function loadXLSX() {
  if (!xlsxReady) {
    xlsxReady = new Promise((resolve, reject) => {
      const el = document.createElement('script');
      el.src = 'js/vendor/xlsx.mini.min.js';
      el.onload = () => (window.XLSX ? resolve(window.XLSX) : reject(new Error('Excel-Export konnte nicht geladen werden.')));
      el.onerror = () => reject(new Error('Excel-Export konnte nicht geladen werden.'));
      document.head.appendChild(el);
    }).catch((err) => { xlsxReady = null; throw err; });
  }
  return xlsxReady;
}

/**
 * Tabelle: {
 *   title, subtitle, fileName,
 *   columns: [{ label, align, type: 'text'|'money'|'number'|'date' }],
 *   rows:   [[{ v: Rohwert, t: Anzeigetext }]],   – v für Excel/CSV, t für PDF und Bildschirm
 *   totals: [{ v, t }] | null
 * }
 */
const raw = (cell) => (cell && typeof cell === 'object' ? cell.v : cell);
const text = (cell) => (cell && typeof cell === 'object' ? (cell.t != null ? cell.t : cell.v) : cell);

function csvCell(value) {
  if (value == null) return '';
  let s;
  if (typeof value === 'number') s = String(value).replace('.', ',');
  else s = String(value);
  // Schutz vor Formel-Injektion beim Öffnen in Excel.
  if (/^[=+\-@\t\r]/.test(s) && typeof value !== 'number') s = `'${s}`;
  return /[";\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export function toCSV(table) {
  const lines = [table.columns.map((c) => csvCell(c.label)).join(';')];
  for (const row of table.rows) lines.push(row.map((c) => csvCell(raw(c))).join(';'));
  if (table.totals) lines.push(table.totals.map((c) => csvCell(raw(c))).join(';'));
  return '﻿' + lines.join('\r\n') + '\r\n';
}

export function exportCSV(table) {
  const blob = new Blob([toCSV(table)], { type: 'text/csv;charset=utf-8' });
  saveBlob(blob, `${safeFileName(table.fileName)}.csv`);
}

export async function exportXLSX(table) {
  const XLSX = await loadXLSX();
  const aoa = [table.columns.map((c) => c.label)];
  for (const row of table.rows) aoa.push(row.map(raw));
  if (table.totals) aoa.push(table.totals.map(raw));
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  // Zahlenformate und Spaltenbreiten
  table.columns.forEach((col, ci) => {
    for (let ri = 1; ri < aoa.length; ri++) {
      const ref = XLSX.utils.encode_cell({ r: ri, c: ci });
      const cell = ws[ref];
      if (!cell) continue;
      if (typeof cell.v === 'number' && col.type === 'money') cell.z = '#,##0.00';
      if (typeof cell.v === 'string' && /^[=+\-@]/.test(cell.v)) cell.t = 's';
    }
  });
  ws['!cols'] = table.columns.map((c, ci) => ({
    wch: Math.min(48, Math.max(c.label.length, ...aoa.slice(1).map((r) => String(r[ci] == null ? '' : r[ci]).length)) + 2),
  }));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, safeFileName(table.title).slice(0, 31) || 'Report');
  const out = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  saveBlob(new Blob([out], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), `${safeFileName(table.fileName)}.xlsx`);
}

export async function exportPDF(table) {
  await downloadTablePdf({
    title: table.title,
    subtitle: table.subtitle,
    columns: table.columns,
    rows: table.rows.map((r) => r.map(text)),
    totals: table.totals ? table.totals.map(text) : null,
    fileName: `${safeFileName(table.fileName)}.pdf`,
    landscape: table.columns.length > 6,
  });
}
