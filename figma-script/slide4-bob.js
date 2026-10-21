// ============================================================
// SATUTIM — Slide 4: IBM Bob Utilization
// IBM Carbon Design System | 1920×1080px
// Paste ke Figma Console (Plugins → Development → Open Console)
// ============================================================

(async () => {

const C = {
  primary:   { r: 0.059, g: 0.384, b: 0.996 },
  ink:       { r: 0.086, g: 0.086, b: 0.086 },
  inkMuted:  { r: 0.322, g: 0.322, b: 0.322 },
  inkSubtle: { r: 0.549, g: 0.549, b: 0.549 },
  canvas:    { r: 1,     g: 1,     b: 1     },
  surface1:  { r: 0.957, g: 0.957, b: 0.957 },
  hairline:  { r: 0.878, g: 0.878, b: 0.878 },
  success:   { r: 0.141, g: 0.631, b: 0.282 },
  error:     { r: 0.855, g: 0.118, b: 0.157 },
  warmGray:  { r: 0.322, g: 0.322, b: 0.322 },
};

const W = 1920, H = 1080, FOOTER_H = 64, MARGIN = 80, TOP = 60;

function sp(c, o = 1) { return [{ type: 'SOLID', color: c, opacity: o }]; }
async function lf(f, s) { try { await figma.loadFontAsync({ family: f, style: s }); } catch(e) {} }

async function tx(content, size, weight, color, opts = {}) {
  await lf('IBM Plex Sans', weight);
  const t = figma.createText();
  t.fontName = { family: 'IBM Plex Sans', style: weight };
  t.fontSize = size;
  t.characters = content;
  t.fills = sp(color);
  if (opts.ls) t.letterSpacing = { value: opts.ls, unit: 'PIXELS' };
  if (opts.lh) t.lineHeight    = { value: opts.lh, unit: 'PERCENT' };
  if (opts.w)  { t.textAutoResize = 'HEIGHT'; t.resize(opts.w, 100); }
  if (opts.al) t.textAlignHorizontal = opts.al;
  return t;
}

function rc(w, h, fill, stroke, sw = 1) {
  const r = figma.createRectangle();
  r.resize(w, h); r.fills = sp(fill);
  if (stroke) { r.strokes = [{ type: 'SOLID', color: stroke }]; r.strokeWeight = sw; r.strokeAlign = 'INSIDE'; }
  return r;
}

function fr(w, h, fill, name = '') {
  const f = figma.createFrame();
  f.resize(w, h); f.fills = sp(fill); f.name = name; f.clipsContent = true;
  return f;
}

function pos(n, x, y) { n.x = x; n.y = y; return n; }

// ── MAIN FRAME ───────────────────────────────────────────────
const slide = fr(W, H, C.canvas, 'Slide 4 — IBM Bob Utilization');
figma.currentPage.appendChild(slide);
slide.x = 5940;

// ── FOOTER ───────────────────────────────────────────────────
const footer = fr(W, FOOTER_H, C.surface1, 'Footer');
footer.strokes = [{ type: 'SOLID', color: C.hairline }];
footer.strokeWeight = 1; footer.strokeAlign = 'INSIDE';
pos(footer, 0, H - FOOTER_H); slide.appendChild(footer);

pos(await tx('SatuTim', 14, 'Medium', C.primary), MARGIN, (FOOTER_H - 18) / 2);
footer.appendChild((await tx('SatuTim', 14, 'Medium', C.primary)));

const ftL = await tx('SatuTim', 14, 'Medium', C.primary); pos(ftL, MARGIN, (FOOTER_H-18)/2); footer.appendChild(ftL);
const ftC = await tx('Code the Future · Beginner Track · Tema 2', 12, 'Regular', C.inkSubtle, { al: 'CENTER', w: 380 }); pos(ftC, (W-380)/2, (FOOTER_H-16)/2); footer.appendChild(ftC);
const ftR = await tx('04', 14, 'SemiBold', C.ink); pos(ftR, W-MARGIN-20, (FOOTER_H-18)/2); footer.appendChild(ftR);

// ── HEADER ───────────────────────────────────────────────────
let curY = TOP;
const eyebrow = await tx('IBM BOB UTILIZATION', 11, 'SemiBold', C.primary, { ls: 1.5 });
pos(eyebrow, MARGIN, curY); slide.appendChild(eyebrow); curY += 24;

const headline = await tx('IBM Bob di Setiap Langkah: 23 Sesi, 3 Mode, 2 Koreksi Besar', 38, 'Light', C.ink, { lh: 120, w: W - 2*MARGIN - 260 });
pos(headline, MARGIN, curY); slide.appendChild(headline);

// context badge
const ctxBg = rc(230, 24, C.canvas, C.primary, 1);
pos(ctxBg, W - MARGIN - 230, curY + 6); slide.appendChild(ctxBg);
const ctxTxt = await tx('Komponen 40% dari total skor', 11, 'Regular', C.primary, { al: 'CENTER', w: 230 });
pos(ctxTxt, W - MARGIN - 230, curY + 10); slide.appendChild(ctxTxt);

curY += headline.height + 24;

// ── STAT ROW ─────────────────────────────────────────────────
const statW = Math.floor((W - 2*MARGIN - 2*24) / 3);
const statH = 100;
const stats = [
  { num: '23', label: 'Sesi Terdokumentasi', sub: 'LOG.md — semua baris terisi' },
  { num: '3',  label: 'Mode IBM Bob',        sub: 'Agent  ·  Plan  ·  Ask' },
  { num: '2',  label: 'Koreksi Besar',       sub: 'Tim menolak output Bob — critical thinking' },
];

stats.forEach((s, i) => {
  const sx = MARGIN + i * (statW + 24);
  const box = rc(statW, statH, C.canvas, C.hairline, 1);
  pos(box, sx, curY); slide.appendChild(box);
  // blue left accent
  const accent = rc(4, statH, C.primary, null);
  pos(accent, sx, curY); slide.appendChild(accent);

  tx(s.num, 48, 'Light', C.primary, { lh: 110 }).then(t => { pos(t, sx + 20, curY + 10); slide.appendChild(t); });
  tx(s.label, 13, 'SemiBold', C.ink).then(t => { pos(t, sx + 20, curY + 60); slide.appendChild(t); });
  tx(s.sub, 11, 'Regular', C.inkSubtle, { w: statW - 30 }).then(t => { pos(t, sx + 20, curY + 78); slide.appendChild(t); });
});
curY += statH + 28;

// ── TWO-COLUMN DETAIL ────────────────────────────────────────
const colW   = Math.floor((W - 2*MARGIN - 32) / 2);
const leftX  = MARGIN;
const rightX = MARGIN + colW + 32;
const detailY = curY;

// LEFT: BAR CHART + PROMPT EXAMPLE
const barLabel = await tx('Distribusi Penggunaan Mode', 13, 'SemiBold', C.ink);
pos(barLabel, leftX, detailY); slide.appendChild(barLabel);

const bars = [
  { label: 'Agent', count: '21 sesi', width: 0.88, color: C.primary },
  { label: 'Plan',  count: '1 sesi',  width: 0.06, color: C.warmGray },
  { label: 'Ask',   count: '1 sesi',  width: 0.06, color: C.warmGray },
];
const chartX     = leftX + 54;
const chartMaxW  = colW - 100;
let barY = detailY + 24;

for (const b of bars) {
  const lbl = await tx(b.label, 12, 'Regular', b.width === 0.88 ? C.ink : C.inkMuted);
  pos(lbl, leftX, barY + 6); slide.appendChild(lbl);

  const bw  = Math.floor(chartMaxW * b.width);
  const bar = rc(bw, 24, b.color, null);
  pos(bar, chartX, barY); slide.appendChild(bar);

  const cnt = await tx(b.count, 11, b.width === 0.88 ? 'SemiBold' : 'Regular', b.width === 0.88 ? C.primary : C.inkSubtle);
  pos(cnt, chartX + bw + 8, barY + 5); slide.appendChild(cnt);
  barY += 36;
}

const barNote = await tx('Sesi 03 = Plan (evaluasi & perbandingan opsi)  ·  Sesi 12 = Ask (panduan good practices)', 10, 'Regular', C.inkSubtle, { w: colW });
pos(barNote, leftX, barY + 4); slide.appendChild(barNote);

// Prompt example box
const promptY = barY + 24;
const pBox = rc(colW, 110, C.surface1, C.hairline, 1);
pos(pBox, leftX, promptY); slide.appendChild(pBox);
const pLabel = await tx('CONTOH PROMPT AKTUAL', 10, 'SemiBold', C.primary, { ls: 0.8 });
pos(pLabel, leftX + 16, promptY + 12); slide.appendChild(pLabel);
const p1 = await tx('"Identifikasi ≥8 masalah nyata mahasiswa Indonesia\nrelevan Tema 2..."', 11, 'Regular', C.ink, { lh: 140, w: colW - 32 });
pos(p1, leftX + 16, promptY + 30); slide.appendChild(p1);
const p1src = await tx('→ Menghasilkan plans/01-problem-discovery.md (Sesi 01)', 10, 'Regular', C.inkSubtle);
pos(p1src, leftX + 16, promptY + 76); slide.appendChild(p1src);
const divLine = rc(colW - 32, 1, C.hairline, null);
pos(divLine, leftX + 16, promptY + 92); slide.appendChild(divLine);

// RIGHT: CORRECTION BLOCKS
const corLabel = await tx('Koreksi Manusia — Bukti Critical Thinking', 13, 'SemiBold', C.ink);
pos(corLabel, rightX, detailY); slide.appendChild(corLabel);

const corrections = [
  {
    tag:    'KOREKSI #1 — SESI 06→07',
    before: '→  Bob rekomendasikan: Kickoff Pact + AI Mediator berbasis WA',
    reject: '✗  Tim tolak: fragmentasi WA adalah masalah, bukan solusi',
    after:  '✓  Diubah: Alur 4 fase terpadu dalam satu app',
    impact: 'Dampak: perubahan arsitektur produk',
  },
  {
    tag:    'KOREKSI #2 — SESI 08',
    before: '→  Bob tidak bahas: jenis tugas & skill imbalance dalam tim',
    reject: '✗  Tim tambah: kasus nyata 15 frontend / 5 backend',
    after:  '✓  Diubah: Gap analysis menjadi inti Fase 1 (Cocokkan)',
    impact: 'Dampak: logika inti sistem berubah',
  },
];

let cY = detailY + 24;
for (const cor of corrections) {
  const cBox = rc(colW, 118, C.surface1, C.hairline, 1);
  pos(cBox, rightX, cY); slide.appendChild(cBox);

  const cTag = await tx(cor.tag, 10, 'SemiBold', C.primary, { ls: 0.8 });
  pos(cTag, rightX + 14, cY + 10); slide.appendChild(cTag);

  const divL = rc(colW - 28, 1, C.hairline, null);
  pos(divL, rightX + 14, cY + 28); slide.appendChild(divL);

  const cBefore = await tx(cor.before, 11, 'Regular', C.inkMuted, { w: colW - 28 });
  pos(cBefore, rightX + 14, cY + 36); slide.appendChild(cBefore);

  const cReject = await tx(cor.reject, 11, 'SemiBold', C.error, { w: colW - 28 });
  pos(cReject, rightX + 14, cY + 54); slide.appendChild(cReject);

  const cAfter = await tx(cor.after, 11, 'SemiBold', C.success, { w: colW - 28 });
  pos(cAfter, rightX + 14, cY + 72); slide.appendChild(cAfter);

  // impact badge
  const impBg = rc(colW - 28, 20, C.canvas, C.primary, 1);
  pos(impBg, rightX + 14, cY + 92); slide.appendChild(impBg);
  const impTxt = await tx(cor.impact, 10, 'Regular', C.primary, { w: colW - 28, al: 'CENTER' });
  pos(impTxt, rightX + 14, cY + 94); slide.appendChild(impTxt);

  cY += 128;
}

// Quality summary row
const qY = cY + 8;
const qLabel = await tx('Keputusan per sesi:', 11, 'Regular', C.inkMuted);
pos(qLabel, rightX, qY); slide.appendChild(qLabel);

const qualityBadges = [
  { text: 'Diterima: 19 sesi', bg: C.success },
  { text: 'Diterima dengan catatan: 3 sesi', bg: { r: 0.961, g: 0.620, b: 0.043 } },
  { text: 'Diubah: 1 sesi', bg: C.primary },
];
let qx = rightX + 130;
for (const qb of qualityBadges) {
  const approxW = qb.text.length * 7 + 16;
  const qbg = rc(approxW, 20, qb.bg, null);
  pos(qbg, qx, qY - 2); slide.appendChild(qbg);
  const qtx = await tx(qb.text, 10, 'SemiBold', C.canvas, { al: 'CENTER', w: approxW });
  pos(qtx, qx, qY + 1); slide.appendChild(qtx);
  qx += approxW + 8;
}

// ── DONE ─────────────────────────────────────────────────────
figma.viewport.scrollAndZoomIntoView([slide]);
console.log('✅ Slide 4 — IBM Bob Utilization created!');

})();
