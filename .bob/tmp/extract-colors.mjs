import { readFileSync } from 'fs';
import { inflateSync } from 'zlib';

const buf = readFileSync('D:/2026/01_Projects/Active/SatuTim-CodeTheFuture/Code the Future Program Guidelines.pdf');
const text = buf.toString('latin1');

// Find all stream/endstream pairs
const streamRe = /stream\r?\n([\s\S]*?)endstream/g;
let m;
const colors = new Set();
const fonts = new Set();
let streamCount = 0;

while ((m = streamRe.exec(text)) !== null) {
  streamCount++;
  const raw = m[1];
  // Try inflate (FlateDecode)
  let decoded = '';
  try {
    const rawBuf = Buffer.from(raw, 'latin1');
    decoded = inflateSync(rawBuf).toString('latin1');
  } catch {
    decoded = raw; // uncompressed
  }

  // Extract RGB float colors (rg = fill, RG = stroke, sc, SC)
  const colorRe = /([\d.]+)\s+([\d.]+)\s+([\d.]+)\s+(?:rg|RG|sc|SC)\b/g;
  let cm;
  while ((cm = colorRe.exec(decoded)) !== null) {
    const r = Math.round(parseFloat(cm[1]) * 255);
    const g = Math.round(parseFloat(cm[2]) * 255);
    const b = Math.round(parseFloat(cm[3]) * 255);
    const hex = '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('').toUpperCase();
    colors.add(hex);
  }

  // Extract CMYK colors
  const cmykRe = /([\d.]+)\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)\s+(?:k|K)\b/g;
  while ((cm = cmykRe.exec(decoded)) !== null) {
    const c=parseFloat(cm[1]),mg=parseFloat(cm[2]),y=parseFloat(cm[3]),k=parseFloat(cm[4]);
    const r = Math.round(255*(1-c)*(1-k));
    const g = Math.round(255*(1-mg)*(1-k));
    const b = Math.round(255*(1-y)*(1-k));
    const hex = '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('').toUpperCase();
    colors.add(`${hex} [CMYK]`);
  }

  // Extract font names
  const fontRe = /\/([\w\-+]{4,})\s+\d+\s+Tf/g;
  while ((cm = fontRe.exec(decoded)) !== null) fonts.add(cm[1]);
}

console.log(`Streams processed: ${streamCount}`);
console.log('\n=== ALL COLORS FOUND ===');
[...colors].sort().forEach(c => console.log(c));
console.log('\n=== FONTS IN STREAMS ===');
[...fonts].sort().forEach(f => console.log(f));
