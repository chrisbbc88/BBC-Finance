// Umgang mit hochgeladenen Dateien: Belege verkleinern, Logos aufbereiten, Blobs lesen.

import { getOne } from './db.js';

export const RECEIPT_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf'];
export const MAX_FILE_BYTES = 15 * 1024 * 1024;

export function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(String(fr.result).split(',')[1] || '');
    fr.onerror = () => reject(fr.error);
    fr.readAsDataURL(blob);
  });
}

function loadImage(blob) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Das Bild konnte nicht gelesen werden.')); };
    img.src = url;
  });
}

function canvasBlob(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Das Bild konnte nicht umgewandelt werden.'))), type, quality);
  });
}

async function drawScaled(blob, maxEdge, background) {
  const img = await loadImage(blob);
  const w = img.naturalWidth || img.width;
  const h = img.naturalHeight || img.height;
  if (!w || !h) throw new Error('Das Bild hat keine lesbare Größe.');
  const scale = Math.min(1, maxEdge / Math.max(w, h));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(w * scale));
  canvas.height = Math.max(1, Math.round(h * scale));
  const ctx = canvas.getContext('2d');
  if (background) { ctx.fillStyle = background; ctx.fillRect(0, 0, canvas.width, canvas.height); }
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  return { canvas, scaled: scale < 1 };
}

const isHeic = (file) => /heic|heif/i.test(file.type || '') || /\.(heic|heif)$/i.test(file.name || '');

/**
 * Bereitet eine Belegdatei zum Speichern vor.
 * Fotos werden (wenn gewünscht) auf höchstens 2000 px verkleinert und als JPEG gespeichert;
 * PDFs bleiben unverändert.
 */
export async function prepareReceipt(file, { shrink = true } = {}) {
  if (file.size > MAX_FILE_BYTES) throw new Error(`„${file.name}“ ist größer als 15 MB.`);
  let type = file.type;
  if (!type && /\.pdf$/i.test(file.name || '')) type = 'application/pdf';
  if (type === 'application/pdf') return { blob: file, name: file.name, mime: type };
  if (isHeic(file)) {
    try {
      const { canvas } = await drawScaled(file, 2000, '#ffffff');
      const blob = await canvasBlob(canvas, 'image/jpeg', 0.85);
      return { blob, name: file.name.replace(/\.(heic|heif)$/i, '.jpg'), mime: 'image/jpeg' };
    } catch (_) {
      throw new Error(`„${file.name}“ ist ein HEIC-Foto, das dieser Browser nicht lesen kann. Bitte in Safari hochladen oder vorher als JPG oder PDF exportieren.`);
    }
  }
  if (!RECEIPT_TYPES.includes(type)) {
    throw new Error(`„${file.name}“ hat ein Format, das nicht unterstützt wird. Möglich sind JPG, PNG, WebP und PDF.`);
  }
  if (!shrink) return { blob: file, name: file.name, mime: type };
  try {
    const { canvas, scaled } = await drawScaled(file, 2000, '#ffffff');
    const blob = await canvasBlob(canvas, 'image/jpeg', 0.85);
    // Nur übernehmen, wenn es wirklich kleiner wird.
    if (!scaled && blob.size >= file.size) return { blob: file, name: file.name, mime: type };
    return { blob, name: file.name.replace(/\.(png|webp|gif|jpeg|jpg)$/i, '') + '.jpg', mime: 'image/jpeg' };
  } catch (_) {
    return { blob: file, name: file.name, mime: type };
  }
}

/** Bild für die KI-Erkennung: höchstens 1568 px Kantenlänge, JPEG. */
export async function imageForAI(blob) {
  const { canvas } = await drawScaled(blob, 1568, '#ffffff');
  return canvasBlob(canvas, 'image/jpeg', 0.85);
}

/** Logo auf höchstens 800 px Breite bringen und als PNG-Data-URL liefern (auch aus SVG). */
export async function prepareLogo(file) {
  if (file.size > 5 * 1024 * 1024) throw new Error('Das Logo ist größer als 5 MB.');
  if (!/^image\//.test(file.type)) throw new Error('Bitte eine Bilddatei wählen (PNG, JPG oder SVG).');
  const { canvas } = await drawScaled(file, 800, null);
  return canvas.toDataURL('image/png');
}

export async function attachmentBlob(id) {
  const row = await getOne('blobs', id);
  return row ? row.blob : null;
}
