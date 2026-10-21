// ============================================================
// SATUTIM — Slide 2: Target Audience
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
  amber:     { r: 0.961, g: 0.620, b: 0.043 }, // #F59E0B
  amberDark: { r: 0.851, g: 0.471, b: 0.0   }, // #D97706
  teal:      { r: 0.051, g: 0.580, b: 0.533 }, // #0D9488
};

const W = 1920, H = 1080, FOOTER_H = 64;
const MARGIN = 80, TOP = 60;

function solidPaint(color, opacity = 1) {
  return [{ type: 'SOLID', color, opacity }];
}

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
  if (opts.stroke) {
    r.strokes = [{ type: 'SOLID', color: opts.stroke }];
    r.strokeWeight = opts.strokeWeight || 1;
    r.strokeAlign = 'INSIDE';
  }
  return r;
}

function makeFrame(w, h, fill, name) {
  const f = figma.createFrame();
  f.resize(w, h);
  f.fills = solidPaint(fill);
  f.name = name || '';
  f.clipsContent = true;
  return f;
}

function pos(node, x, y) { node.x = x; node.y = y; return node; }

// ── MAIN FRAME ───────────────────────────────────────────────
const slide = makeFrame(W, H, C.canvas, 'Slide 2 — Target Audience');
figma.currentPage.appendChild(slide);

// position to the right of slide 1
slide.x = 1980;

// ── FOOTER ───────────────────────────────────────────────────
const footer = makeFrame(W, FOOTER_H, C.surface1, 'Footer');
footer.strokes = [{ type: 'SOLID', color: C.hairline }];
footer.strokeWeight = 1;
footer.strokeAlign = 'INSIDE';
pos(footer, 0, H - FOOTER_H);
slide.appendChild(footer);

const ftLeft   = await makeText('SatuTim', 14, 'Medium', C.primary);
const ftCenter = await makeText('Code the Future · Beginner Track · Tema 2', 12, 'Regular', C.inkSubtle, { align: 'CENTER' });
const ftRight  = await makeText('02', 14, 'SemiBold', C.ink);
pos(ftLeft,   MARGIN, (FOOTER_H - 18) / 2);
pos(ftCenter, (W - 320) / 2, (FOOTER_H - 16) / 2);
pos(ftRight,  W - MARGIN - 20, (FOOTER_H - 18) / 2);
footer.appendChild(ftLeft);
footer.appendChild(ftCenter);
footer.appendChild(ftRight);

// ── HEADER ───────────────────────────────────────────────────
let curY = TOP;

const eyebrow = await makeText('TARGET AUDIENCE', 11, 'SemiBold', C.primary, { letterSpacing: 1.5, align: 'CENTER', width: W - 2 * MARGIN });
pos(eyebrow, MARGIN, curY);
slide.appendChild(eyebrow);
curY += 24;

const headline = await makeText('Tiga Orang dalam Setiap Kelompok', 42, 'Light', C.ink, { align: 'CENTER', width: W - 2 * MARGIN, lineHeight: 120 });
pos(headline, MARGIN, curY);
slide.appendChild(headline);
curY += headline.height + 10;

const supportText = await makeText('Bukan soal karakter — tiga hambatan berbeda yang butuh respons berbeda', 18, 'Regular', C.inkMuted, { align: 'CENTER', width: W - 2 * MARGIN });
pos(supportText, MARGIN, curY);
slide.appendChild(supportText);

const citeInline = await makeText('(Piezon & Ferree, 2008)', 11, 'Regular', C.inkSubtle, { align: 'CENTER', width: W - 2 * MARGIN });
pos(citeInline, MARGIN, curY + supportText.height + 2);
slide.appendChild(citeInline);
curY += supportText.height + citeInline.height + 20;

// ── PERSONA CARDS ────────────────────────────────────────────
const cardW   = Math.floor((W - 2 * MARGIN - 2 * 28) / 3); // 3 cards, 2 gaps of 28px
const cardH   = 380;
const cardY   = curY;
const cardGap = 28;

const personas = [
  {
    accent:   C.primary,
    accentHex: '#0F62FE',
    initial:  'RA',
    name:     'Rahma',
    tag:      'SI PENGGERAK',
    tagColor: C.primary,
    quote:    '"Aku capek jadi satu-satunya yang ngejar orang."',
    need:     'Visibilitas ketimpangan tanpa konflik',
    badge:    'Pengguna Primer',
  },
  {
    accent:   C.amber,
    initial:  'DT',
    name:     'Dito',
    tag:      'SI SIBUK',
    tagColor: C.amberDark,
    quote:    '"Aku mau ngerjain tapi nggak tau mulai dari mana."',
    need:     'Kejelasan tugas + pengingat tanpa rasa malu',
    badge:    'Pengguna Kritis',
  },
  {
    accent:   C.teal,
    initial:  'SI',
    name:     'Sinta',
    tag:      'SI BINGUNG',
    tagColor: C.teal,
    quote:    '"Aku nggak mau keliatan bego nanya di grup."',
    need:     'Onboarding privat + kriteria selesai yang jelas',
    badge:    'Pengguna Kritis',
  },
];

for (let i = 0; i < personas.length; i++) {
  const p = personas[i];
  const cx = MARGIN + i * (cardW + cardGap);

  // Card background
  const card = makeRect(cardW, cardH, C.canvas, { stroke: C.hairline, strokeWeight: 1 });
  pos(card, cx, cardY);
  slide.appendChild(card);

  // Top accent bar
  const accentBar = makeRect(cardW, 6, p.accent);
  pos(accentBar, cx, cardY);
  slide.appendChild(accentBar);

  // Avatar circle (rectangle with no border-radius in Figma Console — use ellipse)
  const avatar = figma.createEllipse();
  avatar.resize(56, 56);
  avatar.fills = solidPaint(p.accent);
  pos(avatar, cx + 24, cardY + 22);
  slide.appendChild(avatar);

  const initText = await makeText(p.initial, 16, 'SemiBold', C.canvas, { align: 'CENTER', width: 56 });
  pos(initText, cx + 24, cardY + 22 + (56 - 20) / 2);
  slide.appendChild(initText);

  // Name
  const nameNode = await makeText(p.name, 22, 'Regular', C.ink);
  pos(nameNode, cx + 24, cardY + 90);
  slide.appendChild(nameNode);

  // Tag
  const tagNode = await makeText(p.tag, 10, 'SemiBold', p.tagColor, { letterSpacing: 1.2 });
  pos(tagNode, cx + 24, cardY + 120);
  slide.appendChild(tagNode);

  // Quote
  const quoteNode = await makeText(p.quote, 13, 'Regular Italic', C.inkMuted, { width: cardW - 48, lineHeight: 150 });
  pos(quoteNode, cx + 24, cardY + 148);
  slide.appendChild(quoteNode);

  // Divider
  const divider = makeRect(cardW - 48, 1, C.hairline);
  pos(divider, cx + 24, cardY + 148 + quoteNode.height + 14);
  slide.appendChild(divider);

  const divY = cardY + 148 + quoteNode.height + 22;

  // "Yang Dibutuhkan" label
  const needLabel = await makeText('YANG DIBUTUHKAN', 10, 'SemiBold', C.ink, { letterSpacing: 0.8 });
  pos(needLabel, cx + 24, divY);
  slide.appendChild(needLabel);

  // Need text
  const needText = await makeText(p.need, 13, 'Regular', C.inkMuted, { width: cardW - 48, lineHeight: 140 });
  pos(needText, cx + 24, divY + 18);
  slide.appendChild(needText);

  // Bottom badge strip
  const badgeY = cardY + cardH - 36;
  const badgeBg = makeRect(cardW, 36, C.surface1);
  pos(badgeBg, cx, badgeY);
  slide.appendChild(badgeBg);

  const badgeText = await makeText(p.badge, 11, 'Regular', C.inkMuted, { align: 'CENTER', width: cardW });
  pos(badgeText, cx, badgeY + (36 - 14) / 2);
  slide.appendChild(badgeText);
}

// ── DEMOGRAPHIC BAR ──────────────────────────────────────────
const demoY = cardY + cardH + 20;
const demoBg = makeRect(W - 2 * MARGIN, 36, C.surface1, { stroke: C.hairline, strokeWeight: 1 });
pos(demoBg, MARGIN, demoY);
slide.appendChild(demoBg);

const demoText = await makeText(
  'Mahasiswa S1 aktif  ·  Surabaya  ·  Semua jurusan (T1) dan teknis (T2)',
  13, 'Regular', C.inkMuted,
  { align: 'CENTER', width: W - 2 * MARGIN }
);
pos(demoText, MARGIN, demoY + (36 - 16) / 2);
slide.appendChild(demoText);

// ── DONE ─────────────────────────────────────────────────────
figma.viewport.scrollAndZoomIntoView([slide]);
console.log('✅ Slide 2 — Target Audience created!');

})();
