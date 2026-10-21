// ============================================================
// SATUTIM — Slide 1: Problem Identification
// IBM Carbon Design System | 1920×1080px
// Paste seluruh script ini ke Figma Console lalu tekan Enter
// Figma Console: Menu → Plugins → Development → Open Console
// ============================================================

(async () => {

// ── DESIGN TOKENS ────────────────────────────────────────────
const C = {
  primary:   { r: 0.059, g: 0.384, b: 0.996 }, // #0F62FE IBM Blue
  blue60:    { r: 0,     g: 0.263, b: 0.808 }, // #0043CE
  ink:       { r: 0.086, g: 0.086, b: 0.086 }, // #161616
  inkMuted:  { r: 0.322, g: 0.322, b: 0.322 }, // #525252
  inkSubtle: { r: 0.549, g: 0.549, b: 0.549 }, // #8C8C8C
  canvas:    { r: 1,     g: 1,     b: 1     }, // #FFFFFF
  surface1:  { r: 0.957, g: 0.957, b: 0.957 }, // #F4F4F4
  hairline:  { r: 0.878, g: 0.878, b: 0.878 }, // #E0E0E0
  success:   { r: 0.141, g: 0.631, b: 0.282 }, // #24A148
  error:     { r: 0.855, g: 0.118, b: 0.157 }, // #DA1E28
  warning:   { r: 0.945, g: 0.761, b: 0.106 }, // #F1C21B
};

const W = 1920, H = 1080;
const MARGIN = 80, TOP = 60, FOOTER_H = 64;

// ── HELPERS ──────────────────────────────────────────────────
function solidPaint(color, opacity = 1) {
  return [{ type: 'SOLID', color, opacity }];
}
function strokePaint(color) {
  return [{ type: 'SOLID', color }];
}
function noStroke() { return []; }

async function loadFont(family, style) {
  try { await figma.loadFontAsync({ family, style }); } catch(e) {}
}

async function makeText(content, fontSize, weight, color, opts = {}) {
  await loadFont('IBM Plex Sans', weight);
  const t = figma.createText();
  t.fontName = { family: 'IBM Plex Sans', style: weight };
  t.fontSize = fontSize;
  t.characters = content;
  t.fills = solidPaint(color);
  if (opts.letterSpacing) t.letterSpacing = { value: opts.letterSpacing, unit: 'PIXELS' };
  if (opts.lineHeight)    t.lineHeight = { value: opts.lineHeight, unit: 'PERCENT' };
  if (opts.width)         { t.textAutoResize = 'HEIGHT'; t.resize(opts.width, 100); }
  if (opts.align)         t.textAlignHorizontal = opts.align;
  return t;
}

function makeRect(w, h, fill, opts = {}) {
  const r = figma.createRectangle();
  r.resize(w, h);
  r.fills = solidPaint(fill);
  if (opts.stroke) { r.strokes = strokePaint(opts.stroke); r.strokeWeight = opts.strokeWeight || 1; r.strokeAlign = 'INSIDE'; }
  return r;
}

function makeFrame(w, h, fill = C.canvas, name = '') {
  const f = figma.createFrame();
  f.resize(w, h);
  f.fills = solidPaint(fill);
  f.name = name;
  f.clipsContent = true;
  return f;
}

function pos(node, x, y) { node.x = x; node.y = y; return node; }

// ── MAIN FRAME ───────────────────────────────────────────────
const slide = makeFrame(W, H, C.canvas, 'Slide 1 — Problem Identification');
figma.currentPage.appendChild(slide);

// ── FOOTER ───────────────────────────────────────────────────
const footer = makeFrame(W, FOOTER_H, C.surface1, 'Footer');
footer.strokes = strokePaint(C.hairline);
footer.strokeWeight = 1;
footer.strokeAlign = 'INSIDE';
pos(footer, 0, H - FOOTER_H);
slide.appendChild(footer);

const ftLeft  = await makeText('SatuTim', 14, 'Medium', C.primary);
const ftCenter = await makeText('Code the Future · Beginner Track · Tema 2', 12, 'Regular', C.inkSubtle, { align: 'CENTER' });
const ftRight = await makeText('01', 14, 'SemiBold', C.ink);

pos(ftLeft,   MARGIN, (FOOTER_H - 18) / 2);
pos(ftCenter, (W - 320) / 2, (FOOTER_H - 16) / 2);
pos(ftRight,  W - MARGIN - 20, (FOOTER_H - 18) / 2);

footer.appendChild(ftLeft);
footer.appendChild(ftCenter);
footer.appendChild(ftRight);

// ── CONTENT AREA dimensions ──────────────────────────────────
const contentH = H - FOOTER_H - TOP; // ~956px
const leftW    = 1040;  // ~54% of 1920 - 2*margin
const rightX   = MARGIN + leftW + 40;
const rightW   = W - rightX - MARGIN;

let curY = TOP;

// ── LEFT COLUMN ──────────────────────────────────────────────

// Eyebrow
const eyebrow = await makeText('PROBLEM IDENTIFICATION', 11, 'SemiBold', C.primary, { letterSpacing: 1.5 });
pos(eyebrow, MARGIN, curY);
slide.appendChild(eyebrow);
curY += 28;

// Headline
const headline = await makeText(
  'Tugas Kelompok: Semua Dapat Nilai Sama,\nTapi Tidak Semua Bekerja Sama',
  42, 'Light', C.ink, { lineHeight: 120, width: leftW }
);
pos(headline, MARGIN, curY);
slide.appendChild(headline);
curY += headline.height + 14;

// Sub-headline
const sub = await makeText(
  'Meta-analisis 78 studi membuktikan: ini bukan pengecualian',
  20, 'Regular', C.primary, { width: leftW }
);
pos(sub, MARGIN, curY);
slide.appendChild(sub);
curY += sub.height + 4;

// Citation badge
const badgeBg = makeRect(200, 22, C.surface1, { stroke: C.hairline, strokeWeight: 1 });
pos(badgeBg, MARGIN, curY);
slide.appendChild(badgeBg);
const badgeText = await makeText('Karau & Williams, 1993', 11, 'Regular', C.inkMuted);
pos(badgeText, MARGIN + 6, curY + 3);
slide.appendChild(badgeText);
curY += 34;

// ── 3 PROBLEM POINTS ─────────────────────────────────────────
const points = [
  {
    accent: C.primary,
    title: 'Social loafing terdokumentasi lintas budaya & jenis tugas',
    body:  '78 studi meta-analitik — efek konsisten lintas budaya, bukan pengecualian',
    cite:  'Karau & Williams, 1993 · Latané et al., 1979',
  },
  {
    accent: C.primary,
    title: 'Norma penghindaran konflik → anggota aktif ambil alih',
    body:  'Anggota aktif pilih mengambil alih — menghapus konsekuensi bagi yang pasif',
    cite:  'Tjosvold et al., 2009 · Jehn & Mannix, 2001',
  },
  {
    accent: C.hairline,
    title: 'Trello & Notion tidak bisa deteksi ketimpangan beban kerja',
    body:  'Tool yang ada tidak tahu siapa anggotamu, apa jenis tugasmu',
    cite:  'Analisis kompetitor — plans/07 §3.1',
  },
];

curY += 8;
for (const p of points) {
  // accent bar
  const bar = makeRect(3, 72, p.accent);
  pos(bar, MARGIN, curY);
  slide.appendChild(bar);

  const titleNode = await makeText(p.title, 14, 'SemiBold', C.ink, { width: leftW - 20 });
  pos(titleNode, MARGIN + 14, curY);
  slide.appendChild(titleNode);

  const bodyNode = await makeText(p.body, 13, 'Regular', C.inkMuted, { width: leftW - 20 });
  pos(bodyNode, MARGIN + 14, curY + titleNode.height + 2);
  slide.appendChild(bodyNode);

  const citeNode = await makeText(p.cite, 11, 'Regular', C.inkSubtle, { width: leftW - 20 });
  pos(citeNode, MARGIN + 14, curY + titleNode.height + bodyNode.height + 4);
  slide.appendChild(citeNode);

  curY += Math.max(72, titleNode.height + bodyNode.height + citeNode.height + 6) + 14;
}

// ── 3 GAP BOXES ──────────────────────────────────────────────
const gapY = H - FOOTER_H - 110;
const gaps = [
  { label: 'Tidak Ada Pembagian', sub: 'Peran yang eksplisit' },
  { label: 'Tidak Ada Visibilitas', sub: 'Progres bersama real-time' },
  { label: 'Tidak Ada Catatan', sub: 'Kontribusi individual' },
];
const gapW = (leftW - 32) / 3;

gaps.forEach((g, i) => {
  const gx = MARGIN + i * (gapW + 16);
  const box = makeRect(gapW, 90, C.surface1, { stroke: C.hairline, strokeWeight: 1 });
  pos(box, gx, gapY);
  slide.appendChild(box);

  // icon placeholder dot
  const dot = makeRect(20, 20, C.primary);
  pos(dot, gx + 16, gapY + 14);
  slide.appendChild(dot);

  makeText(g.label, 13, 'SemiBold', C.ink, { width: gapW - 40 }).then(t => {
    pos(t, gx + 44, gapY + 14);
    slide.appendChild(t);
  });
  makeText(g.sub, 11, 'Regular', C.inkMuted, { width: gapW - 40 }).then(t => {
    pos(t, gx + 44, gapY + 36);
    slide.appendChild(t);
  });
});

// ── RIGHT COLUMN: CYCLE DIAGRAM ──────────────────────────────
const diagCX = rightX + rightW / 2;
const diagCY = TOP + 160;
const radius  = 200;

const nodes = [
  { angle: -90, label: 'Kelompok\nTerbentuk',     active: true  },
  { angle:  -18, label: 'Tidak Ada\nKesepakatan', active: false },
  { angle:   54, label: 'Anggota\nPasif',         active: false },
  { angle:  126, label: 'Aktif\nAmbil Alih',      active: false },
  { angle:  198, label: 'Tidak Ada\nKonsekuensi', active: false },
];

// Diagram label
const diagLabel = await makeText('SIKLUS KETIMPANGAN', 11, 'SemiBold', C.primary, { letterSpacing: 1.5, align: 'CENTER', width: rightW });
pos(diagLabel, rightX, TOP);
slide.appendChild(diagLabel);

// Draw arrows first (behind nodes)
for (let i = 0; i < nodes.length; i++) {
  const a1 = (nodes[i].angle * Math.PI) / 180;
  const a2 = (nodes[(i + 1) % nodes.length].angle * Math.PI) / 180;
  const x1 = diagCX + radius * Math.cos(a1);
  const y1 = diagCY + radius * Math.sin(a1);
  const x2 = diagCX + radius * Math.cos(a2);
  const y2 = diagCY + radius * Math.sin(a2);

  const line = figma.createLine();
  line.x = x1;
  line.y = y1;
  line.resize(Math.sqrt((x2-x1)**2 + (y2-y1)**2), 0);
  line.rotation = -Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  line.strokes = strokePaint(C.primary);
  line.strokeWeight = 2;
  slide.appendChild(line);
}

// Draw nodes
for (const n of nodes) {
  const rad = (n.angle * Math.PI) / 180;
  const nx = diagCX + radius * Math.cos(rad);
  const ny = diagCY + radius * Math.sin(rad);
  const nW = 148, nH = 52;

  const nodeBox = makeRect(nW, nH,
    n.active ? C.primary : C.surface1,
    n.active ? {} : { stroke: C.hairline, strokeWeight: 1 }
  );
  pos(nodeBox, nx - nW / 2, ny - nH / 2);
  slide.appendChild(nodeBox);

  const nodeText = await makeText(n.label, 12, n.active ? 'SemiBold' : 'Regular',
    n.active ? C.canvas : C.ink,
    { align: 'CENTER', width: nW - 8, lineHeight: 140 }
  );
  pos(nodeText, nx - nW / 2 + 4, ny - nH / 2 + 8);
  slide.appendChild(nodeText);
}

// Center label
const centerLabel = await makeText('terus berulang ↻', 11, 'Regular', C.inkSubtle, { align: 'CENTER', width: 120 });
pos(centerLabel, diagCX - 60, diagCY - 10);
slide.appendChild(centerLabel);

// Footnote below diagram
const footnote = await makeText(
  'Piezon & Ferree (2008) — free-riding dipicu ketidakjelasan peran\n& lemahnya akuntabilitas individual',
  11, 'Regular', C.inkSubtle, { align: 'CENTER', width: rightW, lineHeight: 140 }
);
pos(footnote, rightX, diagCY + radius + 70);
slide.appendChild(footnote);

// ── DONE ─────────────────────────────────────────────────────
figma.viewport.scrollAndZoomIntoView([slide]);
console.log('✅ Slide 1 — Problem Identification created!');

})();
