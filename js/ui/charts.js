// Diagramme als SVG, gezeichnet in echter Pixelgröße (kein skaliertes viewBox, damit Schrift scharf bleibt).
// Regeln: eine Achse, dünne Marken (höchstens 24 px), 4 px Rundung am Datenende, 2 px Abstand zwischen
// gestapelten Segmenten, Raster als Haarlinie, Tooltip per Maus und Tastatur, Tabellenansicht als Zwilling.

import { html, useState, useRef, useLayoutEffect } from './core.js';

/** Ist gerade die dunkle Darstellung aktiv? */
export function isDark() {
  const t = document.documentElement.getAttribute('data-theme');
  if (t === 'dark') return true;
  if (t === 'light') return false;
  return typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Markenfarbe eines Unternehmens für Diagramm-Marken. Sehr dunkle Farben gehen auf dunklem,
 * sehr helle auf hellem Grund unter – dann wird die Farbe zur Mitte hin gemischt. Der Farbton bleibt.
 */
export function markColor(hex) {
  const m = /^#([0-9a-f]{6})$/i.exec(String(hex || ''));
  if (!m) return hex;
  const n = parseInt(m[1], 16);
  const rgb = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  const lin = rgb.map((v) => { const c = v / 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); });
  const lum = 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
  const dark = isDark();
  if (dark && lum < 0.16) return `color-mix(in srgb, ${hex} 62%, #ffffff)`;
  if (!dark && lum > 0.72) return `color-mix(in srgb, ${hex} 72%, #000000)`;
  return hex;
}

function useWidth() {
  const ref = useRef(null);
  const [w, setW] = useState(0);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    setW(el.clientWidth);
    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver((entries) => setW(Math.round(entries[0].contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, w];
}

/** „Schöne“ Achsenschritte: 0 / 1.000 / 2.000 … */
export function niceScale(min, max, target = 4) {
  if (max <= 0 && min >= 0) return { lo: 0, hi: 1, step: 1, ticks: [0, 1] };
  const span = Math.max(max, 0) - Math.min(min, 0);
  const rawStep = span / target;
  const pow = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const frac = rawStep / pow;
  const step = (frac <= 1 ? 1 : frac <= 2 ? 2 : frac <= 2.5 ? 2.5 : frac <= 5 ? 5 : 10) * pow;
  const lo = Math.floor(Math.min(min, 0) / step) * step;
  const hi = Math.ceil(Math.max(max, 0) / step) * step;
  const ticks = [];
  for (let v = lo; v <= hi + step / 2; v += step) ticks.push(Math.round(v / step) * step);
  return { lo, hi, step, ticks };
}

/** Rechteck mit Rundung nur am Datenende (oben bei positiven, unten bei negativen Werten). */
function barPath(x, y, w, hgt, r, up) {
  const rr = Math.min(r, w / 2, hgt);
  if (hgt <= 0) return '';
  if (up) {
    return `M${x},${y + hgt}V${y + rr}Q${x},${y} ${x + rr},${y}H${x + w - rr}Q${x + w},${y} ${x + w},${y + rr}V${y + hgt}Z`;
  }
  return `M${x},${y}V${y + hgt - rr}Q${x},${y + hgt} ${x + rr},${y + hgt}H${x + w - rr}Q${x + w},${y + hgt} ${x + w},${y + hgt - rr}V${y}Z`;
}

/**
 * Säulendiagramm.
 * groups: [{ key, label, title, values: { [seriesId]: number } }]
 * series: [{ id, label, color }]
 * mode: 'stacked' | 'grouped'
 * format(v): Anzeige eines Werts, axisFormat(v): kompakte Achsenbeschriftung
 */
export function ColumnChart({ groups, series, mode = 'stacked', format, axisFormat, height = 240, ariaLabel }) {
  const [ref, width] = useWidth();
  const [hover, setHover] = useState(null);
  const pad = { top: 12, right: 8, bottom: 26, left: 56 };

  let max = 0, min = 0;
  for (const g of groups) {
    if (mode === 'stacked') {
      let pos = 0, neg = 0;
      for (const s of series) { const v = g.values[s.id] || 0; if (v >= 0) pos += v; else neg += v; }
      max = Math.max(max, pos); min = Math.min(min, neg);
    } else {
      for (const s of series) { const v = g.values[s.id] || 0; max = Math.max(max, v); min = Math.min(min, v); }
    }
  }
  const scale = niceScale(min, max);
  const plotW = Math.max(width - pad.left - pad.right, 10);
  const plotH = height - pad.top - pad.bottom;
  const y = (v) => pad.top + plotH - ((v - scale.lo) / (scale.hi - scale.lo || 1)) * plotH;
  const band = plotW / Math.max(groups.length, 1);
  const zeroY = y(0);
  const labelEvery = Math.max(1, Math.ceil(groups.length / Math.max(1, Math.floor(plotW / 46))));

  const bars = [];
  groups.forEach((g, gi) => {
    const x0 = pad.left + gi * band;
    if (mode === 'stacked') {
      const bw = Math.min(24, Math.max(band - 10, 3));
      const x = x0 + (band - bw) / 2;
      let up = zeroY, down = zeroY;
      const present = series.filter((s) => (g.values[s.id] || 0) !== 0);
      const lastPos = [...present].reverse().find((s) => g.values[s.id] > 0);
      const lastNeg = [...present].reverse().find((s) => g.values[s.id] < 0);
      for (const s of present) {
        const v = g.values[s.id];
        const hpx = Math.abs(y(v) - zeroY);
        if (v > 0) {
          const top = up - hpx;
          const isEnd = lastPos && lastPos.id === s.id;
          // 2 px Abstand zwischen Segmenten: das untere Segment wird oben gekürzt.
          const gap = isEnd ? 0 : Math.min(2, hpx - 1);
          bars.push({ d: isEnd ? barPath(x, top, bw, hpx, 4, true) : `M${x},${top + gap}H${x + bw}V${up}H${x}Z`, color: s.color, key: `${g.key}-${s.id}` });
          up = top;
        } else {
          const isEnd = lastNeg && lastNeg.id === s.id;
          const gap = isEnd ? 0 : Math.min(2, hpx - 1);
          bars.push({ d: isEnd ? barPath(x, down, bw, hpx, 4, false) : `M${x},${down}H${x + bw}V${down + hpx - gap}H${x}Z`, color: s.color, key: `${g.key}-${s.id}` });
          down += hpx;
        }
      }
    } else {
      const n = series.length;
      const bw = Math.min(18, Math.max((band - 10 - (n - 1) * 2) / n, 2));
      const totalW = n * bw + (n - 1) * 2;
      series.forEach((s, si) => {
        const v = g.values[s.id] || 0;
        if (!v) return;
        const hpx = Math.abs(y(v) - zeroY);
        const x = x0 + (band - totalW) / 2 + si * (bw + 2);
        bars.push({ d: barPath(x, v > 0 ? zeroY - hpx : zeroY, bw, hpx, 4, v > 0), color: s.color, key: `${g.key}-${s.id}` });
      });
    }
  });

  const hg = hover != null ? groups[hover] : null;
  const tipLeft = hover != null ? pad.left + hover * band + band / 2 : 0;
  const tipRight = tipLeft > width * 0.6;

  return html`<div class="chart" ref=${ref} style=${`height:${height}px`}>
    ${width > 0 && html`<svg width=${width} height=${height} role="img" aria-label=${ariaLabel}>
      ${scale.ticks.map((t) => html`<g key=${t}>
        <line x1=${pad.left} x2=${width - pad.right} y1=${y(t)} y2=${y(t)} class=${t === 0 ? 'chart-base' : 'chart-grid'} />
        <text x=${pad.left - 8} y=${y(t) + 4} text-anchor="end" class="chart-tick">${(axisFormat || format)(t)}</text>
      </g>`)}
      ${hover != null && html`<rect x=${pad.left + hover * band} y=${pad.top} width=${band} height=${plotH} class="chart-hover" />`}
      ${bars.map((b) => html`<path key=${b.key} d=${b.d} fill=${b.color} />`)}
      ${groups.map((g, gi) => (gi % labelEvery === 0) && html`<text key=${g.key} x=${pad.left + gi * band + band / 2} y=${height - 8}
        text-anchor="middle" class="chart-tick">${g.label}</text>`)}
      ${groups.map((g, gi) => html`<rect key=${`hit-${g.key}`} x=${pad.left + gi * band} y=${pad.top} width=${band} height=${plotH + pad.bottom}
        fill="transparent" tabindex="0" class="chart-hit" aria-label=${`${g.title || g.label}: ${series.map((s) => `${s.label} ${format(g.values[s.id] || 0)}`).join(', ')}`}
        onMouseEnter=${() => setHover(gi)} onMouseLeave=${() => setHover(null)}
        onFocus=${() => setHover(gi)} onBlur=${() => setHover(null)} />`)}
    </svg>`}
    ${hg && html`<div class=${`chart-tip${tipRight ? ' is-left' : ''}`} style=${`left:${tipLeft}px;top:${pad.top}px`}>
      <div class="chart-tip-title">${hg.title || hg.label}</div>
      ${series.filter((s) => series.length === 1 || (hg.values[s.id] || 0) !== 0).map((s) => html`<div class="chart-tip-row" key=${s.id}>
        <span class="chart-key" style=${`background:${s.color}`}></span>
        <strong>${format(hg.values[s.id] || 0)}</strong><span>${s.label}</span>
      </div>`)}
      ${series.length > 1 && mode === 'stacked' && html`<div class="chart-tip-row chart-tip-total">
        <span class="chart-key"></span><strong>${format(series.reduce((a, s) => a + (hg.values[s.id] || 0), 0))}</strong><span>Gesamt</span>
      </div>`}
    </div>`}
  </div>`;
}

export function Legend({ series }) {
  if (series.length < 2) return null;
  return html`<ul class="legend">
    ${series.map((s) => html`<li key=${s.id}><span class="legend-swatch" style=${`background:${s.color}`}></span>${s.label}</li>`)}
  </ul>`;
}

/**
 * Rahmen für ein Diagramm mit Umschalter zur Tabellenansicht.
 * table: { columns: [label], rows: [[text]] }
 */
export function ChartFigure({ title, sub, series = [], table, children }) {
  const [asTable, setAsTable] = useState(false);
  return html`<figure class="figure">
    <figcaption class="figure-head">
      <div>
        <h2>${title}</h2>
        ${sub && html`<p class="figure-sub">${sub}</p>`}
      </div>
      ${table && html`<button type="button" class="link-btn" aria-pressed=${asTable} onClick=${() => setAsTable(!asTable)}>
        ${asTable ? 'Diagramm zeigen' : 'Als Tabelle zeigen'}
      </button>`}
    </figcaption>
    ${!asTable && html`<${Legend} series=${series} />`}
    ${asTable && table
      ? html`<div class="table-wrap"><table class="table table-compact">
          <thead><tr>${table.columns.map((c, i) => html`<th class=${i ? 'r' : ''}>${c}</th>`)}</tr></thead>
          <tbody>${table.rows.map((r) => html`<tr>${r.map((c, i) => html`<td class=${i ? 'r' : ''}>${c}</td>`)}</tr>`)}</tbody>
        </table></div>`
      : children}
  </figure>`;
}

/**
 * Rangliste mit waagerechten Balken (eine Farbe – die Länge trägt den Wert).
 * rows: [{ key, label, sub, value, display, href, color }]
 */
export function BarList({ rows, max, limit = 6, emptyText = 'Noch keine Daten in diesem Zeitraum.' }) {
  const list = rows.slice(0, limit);
  const top = max || Math.max(0, ...list.map((r) => r.value));
  if (!list.length) return html`<p class="muted-text">${emptyText}</p>`;
  return html`<ol class="barlist">
    ${list.map((r) => {
      const w = top > 0 ? Math.max((Math.max(r.value, 0) / top) * 100, r.value > 0 ? 1.5 : 0) : 0;
      const label = r.href ? html`<a href=${r.href}>${r.label}</a>` : r.label;
      return html`<li key=${r.key}>
        <div class="barlist-top">
          <span class="barlist-label">${label}${r.sub && html`<span class="barlist-sub">${r.sub}</span>`}</span>
          <span class="barlist-value">${r.display}</span>
        </div>
        <div class="barlist-track"><div class="barlist-bar" style=${`width:${w}%;${r.color ? `background:${r.color}` : ''}`}></div></div>
      </li>`;
    })}
  </ol>`;
}
