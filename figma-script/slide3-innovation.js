// ============================================================
// SATUTIM — Slide 3: Innovation Concept
// IBM Carbon Design System | 1920×1080px
// Paste ke Figma Console (Plugins → Development → Open Console)
// ============================================================

(async () => {

const C = {
  primary:   { r: 0.059, g: 0.384, b: 0.996 },
  blue60:    { r: 0,     g: 0.263, b: 0.808 },
  ink:       { r: 0.086, g: 0.086, b: 0.086 },
  inkMuted:  { r: 0.322, g: 0.322, b: 0.322 },
  inkSubtle: { r: 0.549, g: 0.549, b: 0.549 },
  canvas:    { r: 1,     g: 1,     b: 1     },
  surface1:  { r: 0.957, g: 0.957, b: 0.957 },
  hairline:  { r: 0.878, g: 0.878, b: 0.878 },
  success:   { r: 0.141, g: 0.631, b: 0.282 },
  error:     { r: 0.855, g: 0.118, b: 0.157 },
  teal:      { r: 0.051, g: 0.580, b: 0.533 },
  amber:     { r: 0.961, g: 0.620, b: 0.043 },
};

const W = 1920, H = 1080, FOOTER_H = 64;
const MARGIN = 80, TOP = 60;

function solidPaint(c, o = 1) { return [{ type: 'SOLID', color: c, opacity: o }]; }
async function loadFont(f, s) { try { await figma.loadFontAsync({ family: f, style: s }); } catch(e) {} }

async function makeText(content, size, weight, color, opts = {}) {
  await loadFont('IBM Plex Sans', weight);
  const t = figma.createText();
  t.fontName = { family: 'IBM Plex Sans', style: weight };
  t.fontSize = size;
  t.characters = content;
  t.fills = solidPaint(color);
  if (opts.letterSpacing) t.letterSpacing = { value: opts.letterSpacing, unit: 'PIXELS' };
  if (opts.lineHeight)    t.lineHeight    = { value: opts.lineHeight, unit: 'PERCENT' };
  if (opts.width)         { t.textAutoResize = 'HEIGHT'; t.resize(opts.width, 100); }
  if (opts.align)         t.textAlignHorizontal = opts.align;
  return t;
}

function rect(w, h, fill, opts = {}) {
  const r = figma.createRectangle();
  r.resize(w, h);
  r.fills = solidPaint(fill);
  if (opts.stroke) { r.strokes = [{ type: 'SOLID', color: opts.stroke }]; r.strokeWeight = opts.sw || 1; r.strokeAlign = 'INSIDE'; }
  return r;
}

function frame(w, h, fill, name = '') {
  const f = figma.createFrame();
  f.resize(w, h); f.fills = solidPaint(fill);
  f.name = name; f.clipsContent = true;
  return f;
}

function pos(n, x, y) { n.x = x; n.y = y; return n; }

// ── MAIN FRAME ───────────────────────────────────────────────
const slide = frame(W, H, C.canvas, 'Slide 3 — Innovation Concept');
figma.currentPage.appendChild(slide);
slide.x = 3960; // 3rd slide position

// ── FOOTER ───────────────────────────────────────────────────
const footer = frame(W, FOOTER_H, C.surface1, 'Footer');
footer.strokes = [{ type: 'SOLID', color: C.hairline }];
footer.strokeWeight = 1; footer.strokeAlign = 'INSIDE';
pos(footer, 0, H - FOOTER_H);
slide.appendChild(footer);
for (const [txt, size, w, col, x, align] of [
  ['SatuTim', 14, 'Medium', C.primary, MARGIN, null],
  ['Code the Future · Beginner Track · Tema 2', 12, 'Regular', C.inkSubtle, (W - 320) / 2, 'CENTER'],
  ['03', 14, 'SemiBold', C.ink, W - MARGIN - 20, null],
]) {
  const t = await makeText(txt, size, w, col, align ? { align, width: 320 } : {});
  pos(t, x, (FOOTER_H - size) / 2);
  footer.appendChild(t);
}

// ── HEADER ───────────────────────────────────────────────────
let curY = TOP;

const eyebrow = await makeText('INNOVATION CONCEPT', 11, 'SemiBold', C.primary, { letterSpacing: 1.5 });
pos(eyebrow, MARGIN, curY); slide.appendChild(eyebrow); curY += 24;

const headline = await makeText(
  'SatuTim: IBM Bob yang Mengisi Gap — Bukan Sekadar Task Manager',
  38, 'Light', C.ink, { lineHeight: 120, width: W - 2 * MARGIN }
);
pos(headline, MARGIN, curY); slide.appendChild(headline);
curY += headline.height + 20;

// ── FLOW DIAGRAM ─────────────────────────────────────────────
const flowW    = W - 2 * MARGIN;
const nodeW    = Math.floor((flowW - 3 * 40) / 4); // 4 nodes, 3 arrows of 40px
const nodeH    = 110;
const arrowW   = 40;
const flowPhases = [
  { label: 'COCOKKAN',    l1: 'Upload CV', l2: 'IBM Bob ekstrak profil\n+ gap analysis', active: true  },
  { label: 'BAGI TUGAS',  l1: 'IBM Bob split sub-tugas', l2: 'Definition of Done\nper anggota', active: true  },
  { label: 'MONITOR',     l1: 'Update 1-tap', l2: 'Magic link WA\n→ update tanpa buka app', active: false },
  { label: 'LOG',         l1: 'Laporan kontribusi', l2: 'Portofolio\nKolaborasi', active: false },
];

for (let i = 0; i < flowPhases.length; i++) {
  const p = flowPhases[i];
  const nx = MARGIN + i * (nodeW + arrowW);
  const fill = p.active ? C.primary : C.surface1;
  const textCol = p.active ? C.canvas : C.ink;
  const subCol  = p.active ? { r: 0.8, g: 0.85, b: 1 } : C.inkMuted;

  // Node box
  const nodeBox = rect(nodeW, nodeH, fill, p.active ? {} : { stroke: C.hairline, sw: 1 });
  pos(nodeBox, nx, curY); slide.appendChild(nodeBox);

  // Phase label (eyebrow)
  const phLabel = await makeText(p.label, 10, 'SemiBold', textCol, { letterSpacing: 1.2, width: nodeW - 16 });
  pos(phLabel, nx + 12, curY + 12); slide.appendChild(phLabel);

  // Line 1
  const l1 = await makeText(p.l1, 13, 'SemiBold', textCol, { width: nodeW - 16 });
  pos(l1, nx + 12, curY + 30); slide.appendChild(l1);

  // Line 2
  const l2 = await makeText(p.l2, 11, 'Regular', subCol, { width: nodeW - 16, lineHeight: 140 });
  pos(l2, nx + 12, curY + 52); slide.appendChild(l2);

  // IBM Bob badge (for active phases)
  if (p.active) {
    const badgeBg = rect(80, 18, C.blue60);
    pos(badgeBg, nx + (nodeW - 80) / 2, curY + nodeH + 6);
    slide.appendChild(badgeBg);
    const badgeTxt = await makeText('IBM BOB', 9, 'SemiBold', C.canvas, { letterSpacing: 0.8, align: 'CENTER', width: 80 });
    pos(badgeTxt, nx + (nodeW - 80) / 2, curY + nodeH + 8);
    slide.appendChild(badgeTxt);
  }

  // Arrow (→) between nodes
  if (i < flowPhases.length - 1) {
    const arrowX = nx + nodeW + 8;
    const arrow = await makeText('→', 24, 'Light', C.primary);
    pos(arrow, arrowX + 6, curY + (nodeH - 28) / 2);
    slide.appendChild(arrow);
  }
}

// UX note
const uxNote = await makeText(
  'Wizard 7 langkah  ·  Setup ≤5 menit  ·  Koordinator selesai setup sebelum anggota join',
  11, 'Regular', C.inkSubtle, { align: 'CENTER', width: flowW }
);
pos(uxNote, MARGIN, curY + nodeH + 32); slide.appendChild(uxNote);
curY += nodeH + 60;

// ── BOTTOM: TABLE (left 60%) + BADGES (right 38%) ────────────
const bottomY   = curY;
const tableW    = Math.floor((W - 2 * MARGIN) * 0.60);
const badgeColX = MARGIN + tableW + 32;
const badgeColW = W - badgeColX - MARGIN;

// TABLE TITLE
const tblTitle = await makeText('Apa yang hanya SatuTim bisa lakukan', 13, 'SemiBold', C.ink);
pos(tblTitle, MARGIN, bottomY); slide.appendChild(tblTitle);

// TABLE
const tblY   = bottomY + 24;
const rowH   = 36;
const col1W  = tableW - 3 * 110;
const colW   = 110;
const headers = ['', 'Trello / Notion', 'Notion AI', 'SatuTim ✓'];
const rows = [
  ['Gap analysis berbasis CV profil', '✗', '✗', '✓'],
  ['Pembagian peran per jenis tugas', '✗', '✗', '✓'],
  ['Akuntabilitas + log kontribusi otomatis', '✗', '✗', '✓'],
];

// Header row
const hdrBg = rect(tableW, rowH, C.surface1, { stroke: C.hairline, sw: 1 });
pos(hdrBg, MARGIN, tblY); slide.appendChild(hdrBg);

// Last header cell — IBM Blue
const lastHdrBg = rect(colW, rowH, C.primary);
pos(lastHdrBg, MARGIN + tableW - colW, tblY); slide.appendChild(lastHdrBg);

let hx = MARGIN;
for (let h = 0; h < headers.length; h++) {
  const hW = h === 0 ? col1W : colW;
  const hCol = h === 3 ? C.canvas : C.inkMuted;
  if (headers[h]) {
    const hTxt = await makeText(headers[h], 12, 'SemiBold', hCol, { align: 'CENTER', width: hW });
    pos(hTxt, hx, tblY + (rowH - 14) / 2); slide.appendChild(hTxt);
  }
  if (h < headers.length - 1) {
    const vDiv = rect(1, rowH, C.hairline);
    pos(vDiv, hx + hW, tblY); slide.appendChild(vDiv);
  }
  hx += hW;
}

// Data rows
rows.forEach((row, ri) => {
  const ry = tblY + rowH * (ri + 1);
  const rowBg = rect(tableW, rowH, ri % 2 === 0 ? C.canvas : C.surface1, { stroke: C.hairline, sw: 1 });
  pos(rowBg, MARGIN, ry); slide.appendChild(rowBg);

  let cx2 = MARGIN;
  for (let ci = 0; ci < row.length; ci++) {
    const cW = ci === 0 ? col1W : colW;
    const isCheck = row[ci] === '✓';
    const isCross = row[ci] === '✗';
    const col = ci === 0 ? C.ink : isCheck ? C.success : isCross ? C.error : C.ink;
    const fw = ci === 0 ? 'Regular' : 'SemiBold';
    const al = ci === 0 ? 'LEFT' : 'CENTER';
    const pad = ci === 0 ? 12 : 0;
    const txt = await makeText(row[ci], ci === 0 ? 12 : 14, fw, col, { align: al, width: cW - (ci === 0 ? 16 : 0) });
    pos(txt, cx2 + pad, ry + (rowH - txt.height) / 2); slide.appendChild(txt);
    if (ci < row.length - 1) {
      const vDiv = rect(1, rowH, C.hairline);
      pos(vDiv, cx2 + cW, ry); slide.appendChild(vDiv);
    }
    cx2 += cW;
  }
});

// Citation below table
const tblCite = await makeText('Oakley et al. (2004)  ·  van Knippenberg et al. (2004)  ·  Barrett (2007)', 11, 'Regular', C.inkSubtle);
pos(tblCite, MARGIN, tblY + rowH * 4 + 8); slide.appendChild(tblCite);

// ── THEME 2 BADGES ───────────────────────────────────────────
const badgeLabel = await makeText('KECOCOKAN TEMA 2', 11, 'SemiBold', C.primary, { letterSpacing: 1.5 });
pos(badgeLabel, badgeColX, bottomY); slide.appendChild(badgeLabel);

const badges = [
  { tag: 'CONNECT',                  text: 'Gap analysis → peran sesuai\nkeahlian nyata',             color: C.primary },
  { tag: 'COLLABORATE',              text: 'Pembagian adil, visibilitas,\nakuntabilitas bersama',      color: C.primary },
  { tag: 'ENGAGE WITH OPPORTUNITIES', text: 'Portofolio Kolaborasi → bukti\nuntuk lomba & magang',    color: C.teal    },
];

let bY = bottomY + 26;
for (const b of badges) {
  const badgeBg = rect(badgeColW, 72, C.canvas, { stroke: C.primary, sw: 1 });
  pos(badgeBg, badgeColX, bY); slide.appendChild(badgeBg);

  // Left accent
  const bAccent = rect(4, 72, b.color);
  pos(bAccent, badgeColX, bY); slide.appendChild(bAccent);

  const bTag = await makeText(b.tag, 10, 'SemiBold', b.color, { letterSpacing: 1.0 });
  pos(bTag, badgeColX + 16, bY + 10); slide.appendChild(bTag);

  const bTxt = await makeText(b.text, 12, 'Regular', C.inkMuted, { width: badgeColW - 24, lineHeight: 140 });
  pos(bTxt, badgeColX + 16, bY + 28); slide.appendChild(bTxt);

  bY += 80;
}

// ── DONE ─────────────────────────────────────────────────────
figma.viewport.scrollAndZoomIntoView([slide]);
console.log('✅ Slide 3 — Innovation Concept created!');

})();
