// PDF-Erzeugung im Browser mit pdfmake (echte Vektor-PDFs mit markierbarem Text).
// Die Bibliothek ist groß und wird erst beim ersten PDF nachgeladen.

let pdfMakeReady = null;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const el = document.createElement('script');
    el.src = src;
    el.onload = () => resolve();
    el.onerror = () => reject(new Error(`Die Datei ${src} konnte nicht geladen werden.`));
    document.head.appendChild(el);
  });
}

export function loadPdfMake() {
  if (!pdfMakeReady) {
    pdfMakeReady = (async () => {
      await loadScript('js/vendor/pdfmake.min.js');
      await loadScript('js/vendor/vfs_fonts.js');
      if (!window.pdfMake) throw new Error('Die PDF-Bibliothek konnte nicht gestartet werden.');
      return window.pdfMake;
    })().catch((err) => { pdfMakeReady = null; throw err; });
  }
  return pdfMakeReady;
}

const INK = '#16191d';
const GREY = '#5c636b';
const LIGHT = '#d9dde1';
const MARGIN = 50;

function footerHeight(model) {
  const lines = Math.max(0, ...model.footerCols.map((c) => c.length));
  const text = model.footerText ? Math.ceil(model.footerText.length / 105) : 0;
  return 46 + lines * 10 + text * 10;
}

/** pdfmake-Dokumentdefinition für Rechnung, Angebot oder Gutschrift. */
export function docDefinition(model) {
  const L = model.labels;
  const brand = model.brandColor;

  /* Kopf: Logo oder Firmenname */
  const head = model.logoUrl
    ? { image: model.logoUrl, fit: [190, 62], margin: [0, 0, 0, 26] }
    : { text: model.companyName, fontSize: 17, bold: true, color: INK, margin: [0, 6, 0, 30] };

  /* Anschrift links, Kopfdaten rechts */
  const address = {
    width: '*',
    stack: [
      { text: model.senderLine, fontSize: 7, color: GREY, margin: [0, 0, 0, 6] },
      ...model.recipient.map((line, i) => ({ text: line, fontSize: 10.5, bold: i === 0 })),
      ...model.recipientExtra.map((line) => ({ text: line, fontSize: 8.5, color: GREY, margin: [0, 4, 0, 0] })),
    ],
  };
  const meta = {
    width: 210,
    table: {
      widths: ['auto', '*'],
      body: model.meta.map(([k, v]) => [
        { text: k, color: GREY, fontSize: 9 },
        { text: v, alignment: 'right', fontSize: 9, bold: k === L[`number_${model.kind}`] },
      ]),
    },
    layout: {
      hLineWidth: () => 0, vLineWidth: () => 0,
      paddingLeft: () => 0, paddingRight: () => 0, paddingTop: () => 1.5, paddingBottom: () => 1.5,
    },
  };

  /* Positionen */
  const cols = [
    { key: 'pos', label: L.pos, width: 22, align: 'left' },
    { key: 'desc', label: L.description, width: '*', align: 'left' },
    { key: 'qty', label: L.qty, width: 'auto', align: 'right' },
    { key: 'unit', label: L.unit, width: 'auto', align: 'left' },
    { key: 'price', label: L.price, width: 'auto', align: 'right' },
  ];
  if (model.columns.discount) cols.push({ key: 'discount', label: L.discount, width: 'auto', align: 'right' });
  if (model.columns.tax) cols.push({ key: 'tax', label: L.tax, width: 'auto', align: 'right' });
  cols.push({ key: 'amount', label: L.amount, width: 'auto', align: 'right' });

  const headerRow = cols.map((c) => ({ text: c.label, fontSize: 8, color: GREY, alignment: c.align, noWrap: true }));
  const bodyRows = model.rows.map((r) => cols.map((c) => {
    if (c.key === 'desc') {
      const stack = [{ text: r.name, bold: true }];
      if (r.description) stack.push({ text: r.description, color: GREY, fontSize: 8.5, margin: [0, 1.5, 0, 0] });
      return { stack };
    }
    return { text: r[c.key] || '', alignment: c.align, noWrap: c.key !== 'unit' };
  }));
  const itemsTable = {
    margin: [0, 18, 0, 0],
    table: {
      headerRows: 1,
      dontBreakRows: true,
      widths: cols.map((c) => c.width),
      body: [headerRow, ...bodyRows],
    },
    layout: {
      hLineWidth: (i, node) => (i === 0 ? 0 : (i === 1 ? 1.2 : 0.5)),
      hLineColor: (i) => (i === 1 ? brand : LIGHT),
      vLineWidth: () => 0,
      paddingLeft: (i) => (i === 0 ? 0 : 7),
      paddingRight: (i, node) => (i === node.table.widths.length - 1 ? 0 : 7),
      paddingTop: (i) => (i === 0 ? 0 : 6),
      paddingBottom: (i) => (i === 0 ? 5 : 6),
    },
  };

  /* Summen */
  const sumsTable = {
    unbreakable: true,
    margin: [0, 12, 0, 0],
    columns: [
      { width: '*', text: '' },
      {
        width: 250,
        stack: [
          {
            table: {
              widths: ['*', 'auto'],
              body: model.sums.map((s) => [
                { text: s.label, bold: !!s.strong, fontSize: s.strong ? 11.5 : 9.5, color: s.strong ? INK : GREY },
                { text: s.value, bold: !!s.strong, fontSize: s.strong ? 11.5 : 9.5, alignment: 'right', noWrap: true },
              ]),
            },
            layout: {
              hLineWidth: (i, node) => (i === node.table.body.length - 1 && node.table.body.length > 1 ? 1.2 : 0),
              hLineColor: () => brand,
              vLineWidth: () => 0,
              paddingLeft: () => 0, paddingRight: () => 0,
              paddingTop: (i, node) => (i === node.table.body.length - 1 ? 6 : 2.5),
              paddingBottom: () => 2.5,
            },
          },
          ...(model.secondary ? [
            { text: model.secondary.line, alignment: 'right', fontSize: 9, color: GREY, margin: [0, 3, 0, 0] },
            ...(model.secondary.fx ? [{ text: model.secondary.fx, alignment: 'right', fontSize: 7.5, color: GREY, margin: [0, 1.5, 0, 0] }] : []),
          ] : []),
        ],
      },
    ],
  };

  const content = [
    head,
    { columns: [address, meta], columnGap: 30 },
    {
      text: [
        { text: model.title, bold: true },
        model.number ? { text: `  ${model.number}`, bold: false, color: GREY } : '',
      ],
      fontSize: 19, margin: [0, 34, 0, 0],
    },
  ];
  if (model.subtitle) content.push({ text: model.subtitle, color: GREY, margin: [0, 2, 0, 0] });
  if (model.intro) content.push({ text: model.intro, margin: [0, 12, 0, 0] });
  content.push(itemsTable, sumsTable);
  if (model.notes.length) {
    content.push({ stack: model.notes.map((n) => ({ text: n, margin: [0, 0, 0, 4] })), margin: [0, 22, 0, 0] });
  }
  if (model.payment) {
    content.push({
      unbreakable: true,
      margin: [0, 16, 0, 0],
      stack: [
        { text: model.payment.title, bold: true, margin: [0, 0, 0, 4] },
        ...(model.payment.rows.length ? [{
          table: {
            widths: ['auto', '*'],
            body: model.payment.rows.map(([k, v]) => [{ text: k, color: GREY }, { text: v }]),
          },
          layout: {
            hLineWidth: () => 0, vLineWidth: () => 0,
            paddingLeft: (i) => (i === 0 ? 0 : 10), paddingRight: () => 0,
            paddingTop: () => 1, paddingBottom: () => 1,
          },
        }] : []),
        ...model.payment.extra.map((t) => ({ text: t, margin: [0, 4, 0, 0] })),
      ],
    });
  }

  const fh = footerHeight(model);
  return {
    pageSize: 'A4',
    pageMargins: [MARGIN, 46, MARGIN, fh + 14],
    info: { title: `${model.title} ${model.number}`.trim(), author: model.companyName, creator: 'BBC Finance' },
    defaultStyle: { font: 'Roboto', fontSize: 9.5, lineHeight: 1.22, color: INK },
    ...(model.draftMark ? { watermark: { text: model.draftMark, color: '#000000', opacity: 0.06, bold: true } } : {}),
    footer: (page, pages) => ({
      margin: [MARGIN, 0, MARGIN, 0],
      stack: [
        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 595.28 - 2 * MARGIN, y2: 0, lineWidth: 0.5, lineColor: LIGHT }] },
        {
          margin: [0, 7, 0, 0],
          columnGap: 16,
          columns: model.footerCols.map((col) => ({
            width: '*',
            stack: col.map((line, i) => ({ text: line, fontSize: 7.5, color: GREY, bold: false })),
          })),
        },
        ...(model.footerText ? [{ text: model.footerText, fontSize: 7.5, color: GREY, margin: [0, 6, 0, 0] }] : []),
        {
          text: model.labels.page.replace('{P}', page).replace('{N}', pages),
          fontSize: 7, color: GREY, alignment: 'right', margin: [0, 5, 0, 0],
        },
      ],
    }),
    content,
  };
}

export async function pdfBlob(definition) {
  const pdfMake = await loadPdfMake();
  return new Promise((resolve, reject) => {
    try {
      pdfMake.createPdf(definition).getBlob((blob) => resolve(blob));
    } catch (err) { reject(err); }
  });
}

export function saveBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

export async function downloadDocPdf(model) {
  const blob = await pdfBlob(docDefinition(model));
  saveBlob(blob, model.fileName);
  return blob;
}

/** Schlichte Tabellen-PDF für Reports. columns: [{label, align}], rows: string[][] */
export async function downloadTablePdf({ title, subtitle, columns, rows, totals, fileName, landscape }) {
  const body = [
    columns.map((c) => ({ text: c.label, bold: true, fontSize: 8, color: GREY, alignment: c.align || 'left' })),
    ...rows.map((r) => r.map((cell, i) => ({ text: cell == null ? '' : String(cell), alignment: columns[i].align || 'left' }))),
  ];
  if (totals) {
    body.push(totals.map((cell, i) => ({ text: cell == null ? '' : String(cell), bold: true, alignment: columns[i].align || 'left' })));
  }
  const def = {
    pageSize: 'A4',
    pageOrientation: landscape ? 'landscape' : 'portrait',
    pageMargins: [40, 40, 40, 44],
    defaultStyle: { font: 'Roboto', fontSize: 8.5, color: INK },
    info: { title, creator: 'BBC Finance' },
    footer: (page, pages) => ({ text: `Seite ${page} von ${pages}`, alignment: 'right', fontSize: 7, color: GREY, margin: [40, 14, 40, 0] }),
    content: [
      { text: title, fontSize: 15, bold: true },
      subtitle ? { text: subtitle, color: GREY, margin: [0, 3, 0, 0] } : '',
      {
        margin: [0, 14, 0, 0],
        table: {
          headerRows: 1,
          dontBreakRows: true,
          widths: columns.map((c, i) => (i === 0 ? '*' : 'auto')),
          body,
        },
        layout: {
          hLineWidth: (i, node) => (i === 0 ? 0 : (i === 1 || (totals && i === node.table.body.length - 1) ? 1 : 0.5)),
          hLineColor: (i, node) => (i === 1 || (totals && i === node.table.body.length - 1) ? INK : LIGHT),
          vLineWidth: () => 0,
          paddingLeft: (i) => (i === 0 ? 0 : 6),
          paddingRight: (i, node) => (i === node.table.widths.length - 1 ? 0 : 6),
          paddingTop: () => 4, paddingBottom: () => 4,
        },
      },
    ],
  };
  const blob = await pdfBlob(def);
  saveBlob(blob, fileName);
}
