// ============================================================
// SATUTIM — Slide 5: Expected Impact
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
};

const W = 1920, H = 1080, FOOTER_H = 64, MARGIN = 80, TOP = 60;

function sp(c, o = 1) { return [{ type: 'SOLID', color: c, opacity: o }]; }
async function lf(f, s) { try { await figma.loadFontAsync({ family: f, style: s }); } catch(e) {} }

async function tx(content, size, weight, color, opts = {}) {
  await lf('IBM Plex Sans', weight);
  const t = figma.createText();
  t.fontName = { family: 'IBM Plex Sans', style: weight };
  t.fontSize = size; t.characters = content; t.fills = sp(color);
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
const slide = fr(W, H, C.canvas, 'Slide 5 — Expected Impact');
figma.currentPage.appendChild(slide);
slide.x = 7920;

// ── FOOTER ───────────────────────────────────────────────────
const footer = fr(W, FOOTER_H, C.surface1, 'Footer');
footer.strokes = [{ type: 'SOLID', color: C.hairline }];
footer.strokeWeight = 1; footer.strokeAlign = 'INSIDE';
pos(footer, 0, H - FOOTER_H); slide.appendChild(footer);

const ftL = await tx('SatuTim', 14, 'Medium', C.primary); pos(ftL, MARGIN, (FOOTER_H-18)/2); footer.appendChild(ftL);
const ftC = await tx('Code the Future · Beginner Track · Tema 2', 12, 'Regular', C.inkSubtle, { al: 'CENTER', w: 380 }); pos(ftC, (W-380)/2, (FOOTER_H-16)/2); footer.appendChild(ftC);
const ftR = await tx('05', 14, 'SemiBold', C.ink); pos(ftR, W-MARGIN-20, (FOOTER_H-18)/2); footer.appendChild(ftR);

// ── HEADER ───────────────────────────────────────────────────
let curY = TOP;
const eyebrow = await tx('EXPECTED IMPACT', 11, 'SemiBold', C.primary, { ls: 1.5 });
pos(eyebrow, MARGIN, curY); slide.appendChild(eyebrow); curY += 24;

const headline = await tx('Kolaborasi yang Adil, Terdokumentasi, dan Bisa Dibuktikan', 38, 'Light', C.ink, { lh: 120, w: W - 2*MARGIN });
pos(headline, MARGIN, curY); slide.appendChild(headline); curY += headline.height + 8;

const mechNote = await tx('Berbasis mekanisme yang terbukti — bukan klaim tanpa bukti', 17, 'Regular', C.inkMuted, { w: W - 2*MARGIN });
pos(mechNote, MARGIN, curY); slide.appendChild(mechNote); curY += mechNote.height + 22;

// ── MIDDLE: TWO COLUMNS ──────────────────────────────────────
const colW   = Math.floor((W - 2*MARGIN - 32) / 2);
const leftX  = MARGIN;
const rightX = MARGIN + colW + 32;
const midY   = curY;

// ── LEFT: 2×2 METRIC GRID ────────────────────────────────────
const metricLabel = await tx('Sinyal Sukses yang Diusulkan', 13, 'SemiBold', C.ink);
pos(metricLabel, leftX, midY); slide.appendChild(metricLabel);

const metrics = [
  { num: '< 15%',  label: 'Ketimpangan per Tim',   sub: 'Selisih terberat vs. teringan\ndi ≥60% tim',   mech: '↳ Akuntabilitas visible (Kerr & Bruun, 1983)' },
  { num: '≥ 80%',  label: 'Onboarding Selesai',    sub: 'Dalam 24 jam pertama',                          mech: '↳ Wizard 7 langkah ≤5 menit'                  },
  { num: '≥ 70%',  label: 'Sub-tugas Diupdate',    sub: 'Sebelum deadline internal',                     mech: '↳ Magic link 1-tap dari WA'                   },
  { num: '≥ 40%',  label: 'Room Capai Laporan',    sub: 'Laporan kontribusi final',                      mech: '↳ Portofolio Kolaborasi (Barrett, 2007)'       },
];

const mCardW = Math.floor((colW - 16) / 2);
const mCardH = 126;
const mGap   = 16;

metrics.forEach((m, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const mx  = leftX + col * (mCardW + mGap);
  const my  = midY + 26 + row * (mCardH + mGap);

  const mBox = rc(mCardW, mCardH, C.canvas, C.hairline, 1);
  pos(mBox, mx, my); slide.appendChild(mBox);

  // Blue left accent
  const mAccent = rc(4, mCardH, C.primary, null);
  pos(mAccent, mx, my); slide.appendChild(mAccent);

  tx(m.num, 34, 'Light', C.primary, { lh: 110 }).then(t => { pos(t, mx + 16, my + 10); slide.appendChild(t); });
  tx(m.label, 12, 'SemiBold', C.ink, { w: mCardW - 24 }).then(t => { pos(t, mx + 16, my + 52); slide.appendChild(t); });
  tx(m.sub, 10, 'Regular', C.inkSubtle, { w: mCardW - 24, lh: 140 }).then(t => { pos(t, mx + 16, my + 68); slide.appendChild(t); });
  tx(m.mech, 10, 'Regular', C.primary, { w: mCardW - 24 }).then(t => { pos(t, mx + 16, my + 100); slide.appendChild(t); });
});

// Metric footnote
const mFootY = midY + 26 + 2 * mCardH + mGap + 6;
const mNote = await tx('Sinyal sukses yang diusulkan — akan divalidasi setelah pilot pertama', 10, 'Regular', C.inkSubtle, { al: 'CENTER', w: colW });
pos(mNote, leftX, mFootY); slide.appendChild(mNote);

// ── RIGHT: BEFORE/AFTER PANEL ────────────────────────────────
const baBgH  = 2 * mCardH + mGap + 26 + 20;
const panelY = midY;

const panelOuter = rc(colW, baBgH, C.canvas, C.hairline, 1);
pos(panelOuter, rightX, panelY); slide.appendChild(panelOuter);

// Header row
const hdrH = 40;
const hdrBg = rc(colW, hdrH, C.surface1, C.hairline, 1);
pos(hdrBg, rightX, panelY); slide.appendChild(hdrBg);

const hDivider = rc(1, hdrH, C.hairline, null);
pos(hDivider, rightX + colW / 2, panelY); slide.appendChild(hDivider);

const hLeft = await tx('SEBELUM SatuTim', 10, 'SemiBold', C.error, { ls: 0.8, al: 'CENTER', w: colW / 2 });
pos(hLeft, rightX, panelY + (hdrH - 12) / 2); slide.appendChild(hLeft);

const hRight = await tx('SESUDAH SatuTim', 10, 'SemiBold', C.success, { ls: 0.8, al: 'CENTER', w: colW / 2 });
pos(hRight, rightX + colW / 2, panelY + (hdrH - 12) / 2); slide.appendChild(hRight);

// Comparison rows
const compRows = [
  { before: '📱  Chat WA — koordinasi kacau',          after: '📊  Board terstruktur, semua terlihat' },
  { before: '❓  Siapa ngerjain apa? Tidak jelas',       after: '✅  Role eksplisit + DoD per anggota'  },
  { before: '😤  Kerja keras tidak bisa dibuktikan',    after: '📄  Laporan kontribusi otomatis'        },
];

const rowH = Math.floor((baBgH - hdrH) / compRows.length);

compRows.forEach((row, ri) => {
  const ry  = panelY + hdrH + ri * rowH;
  const bg  = ri % 2 === 0 ? C.canvas : C.surface1;
  const rowBg = rc(colW, rowH, bg, null);
  pos(rowBg, rightX, ry); slide.appendChild(rowBg);

  const vDiv = rc(1, rowH, C.hairline, null);
  pos(vDiv, rightX + colW / 2, ry); slide.appendChild(vDiv);

  const hLine = rc(colW, 1, C.hairline, null);
  pos(hLine, rightX, ry); slide.appendChild(hLine);

  tx(row.before, 12, 'Regular', C.inkMuted, { w: colW / 2 - 16 }).then(t => {
    pos(t, rightX + 12, ry + (rowH - 14) / 2); slide.appendChild(t);
  });
  tx(row.after, 12, 'SemiBold', C.ink, { w: colW / 2 - 16 }).then(t => {
    pos(t, rightX + colW / 2 + 12, ry + (rowH - 14) / 2); slide.appendChild(t);
  });
});

// Mechanism citation below panel
const mCiteY = panelY + baBgH + 8;
const mCite = await tx('Mekanisme: Johnson & Johnson (2009)  ·  Deci & Ryan (2000 — SDT)', 10, 'Regular', C.inkSubtle, { al: 'CENTER', w: colW });
pos(mCite, rightX, mCiteY); slide.appendChild(mCite);

// ── QUOTE BAR ────────────────────────────────────────────────
const quoteY  = midY + baBgH + 36;
const quoteH  = H - FOOTER_H - quoteY - 8;
const quoteBg = rc(W - 2*MARGIN, quoteH, C.surface1, C.hairline, 1);
pos(quoteBg, MARGIN, quoteY); slide.appendChild(quoteBg);

// Left blue accent strip
const qAccent = rc(4, quoteH, C.primary, null);
pos(qAccent, MARGIN, quoteY); slide.appendChild(qAccent);

const quoteText = await tx(
  '"Selama ini mahasiswa yang bekerja keras tidak punya cara membuktikannya.\n SatuTim mengisi gap itu — dengan AI yang mendukung, bukan mengawasi."',
  16, 'Light Italic', C.ink,
  { al: 'CENTER', w: W - 2*MARGIN - 80, lh: 155 }
);
pos(quoteText, MARGIN + 40, quoteY + (quoteH - quoteText.height - 18) / 2);
slide.appendChild(quoteText);

const qCite = await tx('Johnson & Johnson (2009)  ·  Deci & Ryan (2000)  ·  Barrett (2007)', 10, 'Regular', C.inkSubtle, { al: 'CENTER', w: W - 2*MARGIN - 80 });
pos(qCite, MARGIN + 40, quoteY + quoteH - 18);
slide.appendChild(qCite);

// Theme 2 badge (right-aligned in quote box)
const t2Bg = rc(230, 22, C.canvas, C.primary, 1);
pos(t2Bg, W - MARGIN - 230 - 16, quoteY + 8); slide.appendChild(t2Bg);
const t2Txt = await tx('Tema 2: Connect · Collaborate · Engage ✓', 10, 'SemiBold', C.primary, { al: 'CENTER', w: 230 });
pos(t2Txt, W - MARGIN - 230 - 16, quoteY + 10); slide.appendChild(t2Txt);

// ── DONE ─────────────────────────────────────────────────────
figma.viewport.scrollAndZoomIntoView([slide]);
console.log('✅ Slide 5 — Expected Impact created!');

})();
