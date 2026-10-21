// ============================================================
// SatuTim Proposal — Figma Plugin Script
// IBM Carbon Design System · 1920×1080px · 5 slides
//
// HOW TO RUN:
//   1. Open Figma desktop (the file TZclf91LaUonooQdzBDw2g)
//   2. Menu → Plugins → Development → Open Console
//   3. Paste this entire script and press Enter
// ============================================================

// ─── DESIGN TOKENS ──────────────────────────────────────────
const C = {
  blue:    { r: 0.059, g: 0.384, b: 0.996 }, // #0f62fe
  ink:     { r: 0.086, g: 0.086, b: 0.086 }, // #161616
  inkMut:  { r: 0.322, g: 0.322, b: 0.322 }, // #525252
  inkSub:  { r: 0.549, g: 0.549, b: 0.549 }, // #8c8c8c
  white:   { r: 1,     g: 1,     b: 1     }, // #ffffff
  surf:    { r: 0.957, g: 0.957, b: 0.957 }, // #f4f4f4
  hair:    { r: 0.878, g: 0.878, b: 0.878 }, // #e0e0e0
  green:   { r: 0.141, g: 0.631, b: 0.282 }, // #24a148
  red:     { r: 0.855, g: 0.118, b: 0.157 }, // #da1e28
};

// ─── HELPERS ────────────────────────────────────────────────
function solid(c) { return [{ type: 'SOLID', color: c }]; }

async function loadFont(family, style) {
  await figma.loadFontAsync({ family, style });
}

async function loadAllFonts() {
  const fonts = [
    { family: 'IBM Plex Sans', style: 'Light' },
    { family: 'IBM Plex Sans', style: 'Regular' },
    { family: 'IBM Plex Sans', style: 'SemiBold' },
    { family: 'IBM Plex Sans', style: 'Light Italic' },
    { family: 'IBM Plex Sans', style: 'Italic' },
    { family: 'IBM Plex Sans Mono', style: 'Regular' },
  ];
  for (const f of fonts) {
    try { await figma.loadFontAsync(f); } catch (e) { /* skip if unavailable */ }
  }
}

function rect(parent, { x, y, w, h, fill, stroke, strokeW = 1, radius = 0, name = 'rect' }) {
  const r = figma.createRectangle();
  r.name = name;
  r.x = x; r.y = y; r.resize(w, h);
  if (fill) r.fills = solid(fill);
  else r.fills = [];
  if (stroke) { r.strokes = solid(stroke); r.strokeWeight = strokeW; }
  r.cornerRadius = radius;
  parent.appendChild(r);
  return r;
}

function txt(parent, { x, y, w, content, size, weight, color, italic = false, align = 'LEFT', name = 'text' }) {
  const t = figma.createText();
  t.name = name;
  t.x = x; t.y = y;
  let style = weight >= 600 ? 'SemiBold' : weight === 300 ? 'Light' : 'Regular';
  if (italic) style = weight === 300 ? 'Light Italic' : 'Italic';
  t.fontName = { family: 'IBM Plex Sans', style };
  t.fontSize = size;
  t.fills = solid(color);
  t.textAlignHorizontal = align;
  t.characters = content;
  if (w) { t.textAutoResize = 'HEIGHT'; t.resize(w, t.height); }
  parent.appendChild(t);
  return t;
}

function monoTxt(parent, { x, y, w, content, size, color, name = 'mono' }) {
  const t = figma.createText();
  t.name = name;
  t.x = x; t.y = y;
  try { t.fontName = { family: 'IBM Plex Sans Mono', style: 'Regular' }; }
  catch (e) { t.fontName = { family: 'IBM Plex Sans', style: 'Regular' }; }
  t.fontSize = size;
  t.fills = solid(color);
  t.characters = content;
  if (w) { t.textAutoResize = 'HEIGHT'; t.resize(w, t.height); }
  parent.appendChild(t);
  return t;
}

function frame(parent, { x, y, w, h, fill = C.white, name = 'frame' }) {
  const f = figma.createFrame();
  f.name = name;
  f.x = x; f.y = y;
  f.resize(w, h);
  f.fills = solid(fill);
  f.clipsContent = false;
  parent.appendChild(f);
  return f;
}

// ─── FOOTER (shared across all slides) ──────────────────────
function buildFooter(slide, slideNum) {
  rect(slide, { x: 0, y: 1016, w: 1920, h: 64, fill: C.ink, name: 'footer-bg' });
  txt(slide, { x: 80, y: 1033, content: 'SatuTim', size: 16, weight: 600, color: C.white, name: 'footer-wordmark' });
  txt(slide, { x: 0, y: 1037, w: 1920, content: 'Code the Future · Tema 2 · IBM Bob', size: 12, weight: 400, color: C.inkSub, align: 'CENTER', name: 'footer-center' });
  txt(slide, { x: 1800, y: 1037, content: `${slideNum} / 5`, size: 12, weight: 400, color: C.white, name: 'footer-page' });
}

// ─── EYEBROW + HEADLINE pattern ─────────────────────────────
function buildEyebrowHeadline(slide, { eyebrow, headline, subheadline }) {
  txt(slide, { x: 80, y: 64, w: 1760, content: eyebrow, size: 14, weight: 400, color: C.blue, name: 'eyebrow' });
  txt(slide, { x: 80, y: 92, w: 1760, content: headline, size: 56, weight: 300, color: C.ink, name: 'headline' });
  if (subheadline) {
    txt(slide, { x: 80, y: 232, w: 1760, content: subheadline, size: 24, weight: 400, color: C.inkMut, name: 'subheadline' });
  }
}

// ─── DIVIDER ────────────────────────────────────────────────
function divider(slide, y) {
  rect(slide, { x: 80, y, w: 1760, h: 1, fill: C.hair, name: 'divider' });
}

// ─── FEATURE CARD (white, 1px border, 4px left accent) ──────
function featureCard(slide, { x, y, w, h, accentColor = C.blue, name = 'card' }) {
  rect(slide, { x, y, w, h, fill: C.white, stroke: C.hair, strokeW: 1, name: `${name}-bg` });
  rect(slide, { x, y, w: 4, h, fill: accentColor, name: `${name}-accent` });
}

// ─── STAT CARD (white, 4px top accent) ──────────────────────
function statCard(slide, { x, y, w, h, accentColor = C.blue, name = 'stat' }) {
  rect(slide, { x, y, w, h, fill: C.white, stroke: C.hair, strokeW: 1, name: `${name}-bg` });
  rect(slide, { x, y, w, h: 4, fill: accentColor, name: `${name}-top-accent` });
}

// ════════════════════════════════════════════════════════════
// SLIDE 1 — Problem Identification
// ════════════════════════════════════════════════════════════
function buildS1(page) {
  const s = frame(page, { x: 0, y: 0, w: 1920, h: 1080, name: 'S1 Problem' });

  // Header
  buildEyebrowHeadline(s, {
    eyebrow: 'PROBLEM IDENTIFICATION',
    headline: 'Tugas Kelompok: Semua Dapat Nilai Sama,\nTapi Tidak Semua Bekerja Sama',
    subheadline: 'Meta-analisis 78 studi membuktikan — ini bukan pengecualian',
  });
  divider(s, 285);

  // LEFT COLUMN — 3 bullets
  const bullets = [
    { text: 'Social loafing terdokumentasi lintas budaya & jenis tugas', cite: '(Karau & Williams, 1993 — meta-analisis 78 studi)', y: 308 },
    { text: 'Norma penghindaran konflik → anggota aktif ambil alih,\nbukan menegur', cite: '(Tjosvold et al., 2009)', y: 390 },
    { text: 'Trello & Notion tidak mendeteksi ketimpangan beban kerja', cite: '', y: 472 },
  ];
  bullets.forEach(b => {
    rect(s, { x: 80, y: b.y + 3, w: 24, h: 24, fill: C.blue, name: 'bullet-icon' });
    txt(s, { x: 120, y: b.y, w: 860, content: b.text, size: 18, weight: 400, color: C.inkMut, name: 'bullet-text' });
    if (b.cite) txt(s, { x: 120, y: b.y + 52, w: 860, content: b.cite, size: 12, weight: 400, color: C.inkSub, name: 'bullet-cite' });
  });

  // RIGHT COLUMN — Cycle diagram
  rect(s, { x: 1056, y: 300, w: 784, h: 490, fill: C.surf, stroke: C.hair, name: 'cycle-bg' });
  txt(s, { x: 1056, y: 310, w: 784, content: 'Lingkaran Setan', size: 14, weight: 600, color: C.blue, align: 'CENTER', name: 'cycle-title' });

  // 5 nodes arranged in a pentagon
  const nodes = [
    { x: 1360, y: 344, text: 'Kelompok terbentuk' },
    { x: 1600, y: 460, text: 'Tidak ada kesepakatan' },
    { x: 1520, y: 600, text: 'Anggota pasif' },
    { x: 1200, y: 600, text: 'Aktif ambil alih' },
    { x: 1080, y: 460, text: 'Tidak ada konsekuensi' },
  ];
  nodes.forEach((n, i) => {
    rect(s, { x: n.x, y: n.y, w: 200, h: 44, fill: C.surf, stroke: C.blue, strokeW: 2, radius: 0, name: `node${i + 1}` });
    txt(s, { x: n.x + 8, y: n.y + 12, w: 184, content: n.text, size: 13, weight: 400, color: C.ink, name: `node${i + 1}-text` });
  });

  // Arrows (simple right-angle lines as thin rects)
  rect(s, { x: 1460, y: 374, w: 2, h: 90, fill: C.blue, name: 'arrow1' });
  rect(s, { x: 1620, y: 502, w: 2, h: 100, fill: C.blue, name: 'arrow2' });
  rect(s, { x: 1400, y: 642, w: 2, h: 40, fill: C.blue, name: 'arrow3' });
  rect(s, { x: 1180, y: 502, w: 2, h: 100, fill: C.blue, name: 'arrow4' });
  rect(s, { x: 1280, y: 372, w: 2, h: 90, fill: C.blue, name: 'arrow5' });

  // BOTTOM ROW — 3 gap cards
  const gaps = [
    { x: 80, text: 'Tidak ada pembagian peran eksplisit' },
    { x: 680, text: 'Tidak ada visibilitas progres bersama' },
    { x: 1280, text: 'Tidak ada catatan kontribusi individual' },
  ];
  gaps.forEach(g => {
    featureCard(s, { x: g.x, y: 820, w: 560, h: 80, name: `gap-card-${g.x}` });
    rect(s, { x: g.x + 16, y: 834, w: 24, h: 24, fill: C.blue, name: 'gap-icon' });
    txt(s, { x: g.x + 56, y: 840, w: 480, content: g.text, size: 14, weight: 400, color: C.ink, name: 'gap-text' });
  });

  buildFooter(s, 1);
  return s;
}

// ════════════════════════════════════════════════════════════
// SLIDE 2 — Target Audience
// ════════════════════════════════════════════════════════════
function buildS2(page) {
  const s = frame(page, { x: 2000, y: 0, w: 1920, h: 1080, name: 'S2 Target Audience' });

  buildEyebrowHeadline(s, {
    eyebrow: 'TARGET AUDIENCE',
    headline: 'Tiga Orang dalam Setiap Kelompok',
    subheadline: null,
  });
  divider(s, 200);

  // 3 persona cards — equal width 560px each
  const personas = [
    {
      x: 80, accentColor: C.blue, avatarFill: C.blue, initial: 'R',
      name: 'Rahma', role: 'Si Penggerak',
      quote: '"Aku capek jadi satu-satunya yang ngejar orang."',
      need: 'Visibilitas ketimpangan tanpa konflik',
      badgeBg: C.blue,
    },
    {
      x: 680, accentColor: C.ink, avatarFill: C.ink, initial: 'D',
      name: 'Dito', role: 'Si Sibuk',
      quote: '"Aku mau ngerjain tapi nggak tau mulai dari mana."',
      need: 'Kejelasan tugas + reminder tanpa rasa malu',
      badgeBg: C.ink,
    },
    {
      x: 1280, accentColor: C.inkMut, avatarFill: C.inkMut, initial: 'S',
      name: 'Sinta', role: 'Si Bingung',
      quote: '"Aku nggak mau keliatan bego nanya di grup."',
      need: 'Onboarding privat + kriteria selesai yang jelas',
      badgeBg: C.inkMut,
    },
  ];

  personas.forEach(p => {
    // Card bg
    rect(s, { x: p.x, y: 220, w: 560, h: 680, fill: C.white, stroke: C.hair, strokeW: 1, name: `card-${p.name}-bg` });
    // Top accent bar
    rect(s, { x: p.x, y: 220, w: 560, h: 6, fill: p.accentColor, name: `card-${p.name}-top` });
    // Avatar circle (approximated as rect)
    rect(s, { x: p.x + 248, y: 262, w: 64, h: 64, fill: p.avatarFill, radius: 0, name: `avatar-${p.name}` });
    txt(s, { x: p.x + 248, y: 276, w: 64, content: p.initial, size: 24, weight: 600, color: C.white, align: 'CENTER', name: `avatar-${p.name}-initial` });
    // Name
    txt(s, { x: p.x + 24, y: 350, w: 512, content: p.name, size: 24, weight: 400, color: C.ink, align: 'CENTER', name: `name-${p.name}` });
    // Role badge
    rect(s, { x: p.x + 168, y: 390, w: 224, h: 32, fill: p.badgeBg, radius: 0, name: `badge-${p.name}-bg` });
    txt(s, { x: p.x + 168, y: 398, w: 224, content: p.role, size: 12, weight: 400, color: C.white, align: 'CENTER', name: `badge-${p.name}-text` });
    // Quote
    txt(s, { x: p.x + 24, y: 448, w: 512, content: p.quote, size: 16, weight: 300, color: C.inkMut, italic: true, align: 'CENTER', name: `quote-${p.name}` });
    // Divider
    rect(s, { x: p.x + 24, y: 560, w: 512, h: 1, fill: C.hair, name: `div-${p.name}` });
    // Need label
    txt(s, { x: p.x + 24, y: 572, w: 80, content: 'Butuh:', size: 14, weight: 600, color: C.ink, name: `need-label-${p.name}` });
    txt(s, { x: p.x + 110, y: 572, w: 426, content: p.need, size: 14, weight: 400, color: C.inkMut, name: `need-text-${p.name}` });
  });

  // Bottom demographic label
  txt(s, { x: 80, y: 940, w: 1760, content: 'Mahasiswa S1 aktif · Surabaya · Semua jurusan (T1 Makalah) & jurusan teknis (T2 Proyek IT)', size: 12, weight: 400, color: C.inkSub, align: 'CENTER', name: 'demo-label' });

  buildFooter(s, 2);
  return s;
}

// ════════════════════════════════════════════════════════════
// SLIDE 3 — Innovation Concept
// ════════════════════════════════════════════════════════════
function buildS3(page) {
  const s = frame(page, { x: 4000, y: 0, w: 1920, h: 1080, name: 'S3 Innovation' });

  buildEyebrowHeadline(s, {
    eyebrow: 'INNOVATION CONCEPT',
    headline: 'SatuTim: IBM Bob yang Mengisi Gap — Bukan Sekadar Task Manager',
    subheadline: null,
  });
  divider(s, 200);

  // TOP — 4-phase flow diagram
  const phases = [
    { x: 80,   label: 'COCOKKAN',   sub: 'IBM Bob ekstrak CV\n+ gap analysis',      bg: C.blue },
    { x: 540,  label: 'BAGI TUGAS', sub: 'Sub-tugas per role\n+ DoD',               bg: C.blue },
    { x: 1000, label: 'MONITOR',    sub: 'Update 1 tap ·\nmagic link WA',           bg: C.ink  },
    { x: 1460, label: 'LOG',        sub: 'Laporan kontribusi\n+ Portofolio',         bg: C.ink  },
  ];
  phases.forEach((p, i) => {
    // Node box
    rect(s, { x: p.x, y: 220, w: 360, h: 200, fill: C.white, stroke: C.hair, strokeW: 1, name: `phase${i + 1}-bg` });
    // Icon area
    rect(s, { x: p.x, y: 220, w: 360, h: 6, fill: p.bg, name: `phase${i + 1}-accent` });
    rect(s, { x: p.x + 160, y: 238, w: 40, h: 40, fill: p.bg, name: `phase${i + 1}-icon` });
    // Labels
    txt(s, { x: p.x + 16, y: 296, w: 328, content: p.label, size: 16, weight: 600, color: C.ink, align: 'CENTER', name: `phase${i + 1}-label` });
    txt(s, { x: p.x + 16, y: 322, w: 328, content: p.sub, size: 13, weight: 400, color: C.inkMut, align: 'CENTER', name: `phase${i + 1}-sub` });
    // Arrow (except last)
    if (i < 3) {
      rect(s, { x: p.x + 368, y: 315, w: 52, h: 2, fill: C.blue, name: `arrow${i + 1}` });
      rect(s, { x: p.x + 406, y: 306, w: 2, h: 20, fill: C.blue, name: `arrow${i + 1}-head` });
    }
  });

  // UX strip
  rect(s, { x: 80, y: 436, w: 1760, h: 40, fill: C.surf, name: 'ux-strip' });
  txt(s, { x: 80, y: 448, w: 1760, content: 'Wizard 7 langkah · Setup ≤5 menit · Anggota pasif update tanpa buka app', size: 13, weight: 400, color: C.inkMut, align: 'CENTER', name: 'ux-strip-text' });

  // BOTTOM LEFT — Comparison table
  const tableX = 80;
  const tableY = 500;
  const colW = [340, 200, 200, 200];
  const rowH = 44;

  // Header row
  rect(s, { x: tableX, y: tableY, w: 940, h: rowH, fill: C.ink, name: 'table-header-bg' });
  ['', 'Trello / Notion', 'Notion AI', 'SatuTim'].forEach((h, ci) => {
    const xOff = colW.slice(0, ci).reduce((a, b) => a + b, 0);
    if (h) txt(s, { x: tableX + xOff + 8, y: tableY + 13, w: colW[ci] - 16, content: h, size: 12, weight: 600, color: C.white, align: 'CENTER', name: `th-${ci}` });
  });

  const rows = [
    { label: 'Gap analysis berbasis CV',               vals: ['✗', '✗', '✓'] },
    { label: 'Pembagian peran per jenis tugas',        vals: ['✗', '✗', '✓'] },
    { label: 'Akuntabilitas terlihat + notif privat',  vals: ['✗', '✗', '✓'] },
  ];
  rows.forEach((row, ri) => {
    const rowY = tableY + rowH + ri * rowH;
    const bg = ri % 2 === 0 ? C.white : C.surf;
    rect(s, { x: tableX, y: rowY, w: 940, h: rowH, fill: bg, stroke: C.hair, strokeW: 1, name: `row${ri}-bg` });
    txt(s, { x: tableX + 8, y: rowY + 13, w: 324, content: row.label, size: 12, weight: 400, color: C.ink, name: `row${ri}-label` });
    row.vals.forEach((v, ci) => {
      const xOff = colW.slice(0, ci + 1).reduce((a, b) => a + b, 0);
      const color = v === '✓' ? C.green : C.red;
      txt(s, { x: tableX + xOff + 8, y: rowY + 13, w: colW[ci + 1] - 16, content: v, size: 18, weight: 600, color, align: 'CENTER', name: `row${ri}-val${ci}` });
    });
  });

  txt(s, { x: tableX, y: tableY + rowH * 4 + 8, w: 940, content: 'van Knippenberg et al. (2004) · Oakley et al. (2004) · Barrett (2007)', size: 12, weight: 400, color: C.inkSub, name: 'table-citation' });

  // BOTTOM RIGHT — Tema 2 badges
  const badges = [
    { label: '🔗  Connect',                     bg: C.blue },
    { label: '🤝  Collaborate',                  bg: C.ink  },
    { label: '🎯  Engage with Opportunities',    bg: C.blue },
  ];
  badges.forEach((b, bi) => {
    rect(s, { x: 1080, y: 500 + bi * 80, w: 760, h: 56, fill: b.bg, name: `badge${bi}-bg` });
    txt(s, { x: 1096, y: 518 + bi * 80, w: 728, content: b.label, size: 18, weight: 600, color: C.white, name: `badge${bi}-text` });
  });
  txt(s, { x: 1080, y: 754, w: 760, content: 'van Knippenberg et al. (2004) · Barrett (2007) · Oakley et al. (2004)', size: 12, weight: 400, color: C.inkSub, align: 'CENTER', name: 'badge-citation' });

  buildFooter(s, 3);
  return s;
}

// ════════════════════════════════════════════════════════════
// SLIDE 4 — IBM Bob Utilization
// ════════════════════════════════════════════════════════════
function buildS4(page) {
  const s = frame(page, { x: 6000, y: 0, w: 1920, h: 1080, name: 'S4 Bob Utilization' });

  buildEyebrowHeadline(s, {
    eyebrow: 'IBM BOB UTILIZATION',
    headline: 'IBM Bob di Setiap Langkah: 23 Sesi, 3 Mode, 2 Koreksi Besar',
    subheadline: null,
  });
  divider(s, 200);

  // TOP — 3 stat cards
  const stats = [
    { x: 80,   num: '23', label: 'Sesi Terdokumentasi' },
    { x: 680,  num: '3',  label: 'Mode Bob Digunakan'  },
    { x: 1280, num: '2',  label: 'Koreksi Manusia Dicatat' },
  ];
  stats.forEach(st => {
    statCard(s, { x: st.x, y: 220, w: 560, h: 120, name: `stat-${st.num}` });
    txt(s, { x: st.x + 24, y: 244, w: 512, content: st.num, size: 64, weight: 600, color: C.blue, align: 'CENTER', name: `stat-${st.num}-num` });
    txt(s, { x: st.x + 24, y: 316, w: 512, content: st.label, size: 14, weight: 400, color: C.inkMut, align: 'CENTER', name: `stat-${st.num}-label` });
  });

  // MIDDLE — Mode bar chart
  const barY = 380;
  txt(s, { x: 80, y: barY, content: 'Distribusi Mode Penggunaan', size: 14, weight: 600, color: C.ink, name: 'bar-title' });

  const bars = [
    { label: 'Agent', pct: 0.913, num: '21 sesi', fill: C.blue },
    { label: 'Plan',  pct: 0.043, num: '1 sesi (Sesi 03)', fill: C.ink  },
    { label: 'Ask',   pct: 0.043, num: '1 sesi (Sesi 12)', fill: C.inkMut },
  ];
  bars.forEach((b, bi) => {
    const barRowY = barY + 32 + bi * 48;
    txt(s, { x: 80, y: barRowY + 6, w: 80, content: b.label, size: 14, weight: 400, color: C.ink, name: `bar-label-${bi}` });
    const barW = Math.max(8, Math.round(b.pct * 800));
    rect(s, { x: 180, y: barRowY, w: barW, h: 32, fill: b.fill, name: `bar-fill-${bi}` });
    txt(s, { x: 180 + barW + 12, y: barRowY + 6, w: 300, content: b.num, size: 12, weight: 400, color: C.inkSub, name: `bar-num-${bi}` });
  });
  txt(s, { x: 80, y: barY + 184, w: 900, content: 'Multi-mode utilization memenuhi sub-kriteria rubrik juri', size: 12, weight: 400, color: C.inkSub, name: 'bar-note' });

  // BOTTOM — 2 correction blocks
  const corrY = 620;
  // Block 1
  rect(s, { x: 80, y: corrY, w: 860, h: 210, fill: C.white, stroke: C.hair, strokeW: 1, name: 'corr1-bg' });
  rect(s, { x: 80, y: corrY, w: 860, h: 4, fill: C.red, name: 'corr1-accent' });
  txt(s, { x: 96, y: corrY + 16, w: 828, content: 'Koreksi #1: Sesi 06 → 07', size: 14, weight: 600, color: C.ink, name: 'corr1-title' });
  rect(s, { x: 96, y: corrY + 44, w: 380, h: 60, fill: C.surf, name: 'corr1-before-bg' });
  txt(s, { x: 104, y: corrY + 52, w: 364, content: 'SEBELUM: Bob rekomendasikan WA-based solution (Kickoff Pact)', size: 12, weight: 400, color: C.inkMut, name: 'corr1-before' });
  rect(s, { x: 500, y: corrY + 62, w: 40, h: 2, fill: C.red, name: 'corr1-arrow' });
  rect(s, { x: 524, y: corrY + 44, w: 4, h: 60, fill: C.green, name: 'corr1-after-accent' });
  txt(s, { x: 536, y: corrY + 52, w: 364, content: 'SESUDAH: Alur 4 fase terpadu dalam satu app', size: 12, weight: 400, color: C.ink, name: 'corr1-after' });
  txt(s, { x: 96, y: corrY + 124, w: 828, content: 'Alasan: Tim tolak — WA adalah masalah yang diserang, bukan solusi', size: 13, weight: 400, color: C.inkMut, name: 'corr1-reason' });

  // Block 2
  rect(s, { x: 980, y: corrY, w: 860, h: 210, fill: C.white, stroke: C.hair, strokeW: 1, name: 'corr2-bg' });
  rect(s, { x: 980, y: corrY, w: 860, h: 4, fill: C.red, name: 'corr2-accent' });
  txt(s, { x: 996, y: corrY + 16, w: 828, content: 'Koreksi #2: Sesi 08', size: 14, weight: 600, color: C.ink, name: 'corr2-title' });
  rect(s, { x: 996, y: corrY + 44, w: 380, h: 60, fill: C.surf, name: 'corr2-before-bg' });
  txt(s, { x: 1004, y: corrY + 52, w: 364, content: 'SEBELUM: Bob tidak bahas jenis tugas & skill imbalance', size: 12, weight: 400, color: C.inkMut, name: 'corr2-before' });
  rect(s, { x: 1400, y: corrY + 62, w: 40, h: 2, fill: C.red, name: 'corr2-arrow' });
  rect(s, { x: 1424, y: corrY + 44, w: 4, h: 60, fill: C.green, name: 'corr2-after-accent' });
  txt(s, { x: 1436, y: corrY + 52, w: 364, content: 'SESUDAH: Gap analysis T2 — 15 frontend / 5 backend', size: 12, weight: 400, color: C.ink, name: 'corr2-after' });
  txt(s, { x: 996, y: corrY + 124, w: 828, content: 'Tim angkat kasus nyata: kelas 20 mahasiswa → AI butuh gap analysis', size: 13, weight: 400, color: C.inkMut, name: 'corr2-reason' });

  // Prompt example
  rect(s, { x: 80, y: 860, w: 860, h: 80, fill: C.surf, stroke: C.hair, strokeW: 1, name: 'prompt-bg' });
  monoTxt(s, { x: 96, y: 876, w: 828, content: '"Identifikasi ≥8 masalah mahasiswa Indonesia relevan Tema 2..."', size: 12, color: C.ink, name: 'prompt-text' });
  txt(s, { x: 96, y: 912, w: 828, content: '→ Menghasilkan plans/01-problem-discovery.md (LOG Sesi 01)', size: 11, weight: 400, color: C.inkSub, name: 'prompt-caption' });

  buildFooter(s, 4);
  return s;
}

// ════════════════════════════════════════════════════════════
// SLIDE 5 — Expected Impact
// ════════════════════════════════════════════════════════════
function buildS5(page) {
  const s = frame(page, { x: 8000, y: 0, w: 1920, h: 1080, name: 'S5 Impact' });

  buildEyebrowHeadline(s, {
    eyebrow: 'EXPECTED IMPACT',
    headline: 'Kolaborasi yang Adil, Terdokumentasi, dan Bisa Dibuktikan',
    subheadline: null,
  });
  divider(s, 200);

  // TOP LEFT — 4 metric cards in 2×2 grid
  const metrics = [
    { x: 80,  y: 220, num: '< 15%', label: 'Ketimpangan kontribusi per tim' },
    { x: 680, y: 220, num: '≥ 80%', label: 'Onboarding selesai dalam 24 jam' },
    { x: 80,  y: 420, num: '≥ 70%', label: 'Sub-tugas diupdate sebelum deadline' },
    { x: 680, y: 420, num: '≥ 40%', label: 'Room capai laporan akhir' },
  ];
  metrics.forEach(m => {
    statCard(s, { x: m.x, y: m.y, w: 560, h: 160, name: `metric-${m.num}` });
    txt(s, { x: m.x + 24, y: m.y + 24, w: 512, content: m.num, size: 56, weight: 600, color: C.blue, name: `metric-num-${m.x}` });
    txt(s, { x: m.x + 24, y: m.y + 100, w: 512, content: m.label, size: 14, weight: 400, color: C.inkMut, name: `metric-label-${m.x}` });
  });
  txt(s, { x: 80, y: 600, w: 1160, content: 'Sinyal sukses yang diusulkan — bukan standar industri', size: 12, weight: 400, color: C.inkSub, name: 'metric-note' });

  // TOP RIGHT — Before / After split panel
  const panelX = 1280;
  const panelY = 220;
  const panelH = 400;
  // BEFORE side
  rect(s, { x: panelX, y: panelY, w: 300, h: panelH, fill: C.surf, stroke: C.hair, strokeW: 1, name: 'before-bg' });
  rect(s, { x: panelX, y: panelY, w: 300, h: 40, fill: C.red, name: 'before-header-bg' });
  txt(s, { x: panelX, y: panelY + 11, w: 300, content: 'SEBELUM', size: 14, weight: 600, color: C.white, align: 'CENTER', name: 'before-header' });
  const beforeItems = ['Chat WA tidak terstruktur', 'Tidak ada kejelasan siapa\nmengerjakan apa', 'Kontribusi tidak bisa dibuktikan'];
  beforeItems.forEach((item, i) => {
    txt(s, { x: panelX + 16, y: panelY + 56 + i * 80, w: 268, content: '• ' + item, size: 13, weight: 400, color: C.inkMut, name: `before-item${i}` });
  });

  // AFTER side
  rect(s, { x: panelX + 320, y: panelY, w: 320, h: panelH, fill: C.white, stroke: C.hair, strokeW: 1, name: 'after-bg' });
  rect(s, { x: panelX + 320, y: panelY, w: 320, h: 40, fill: C.green, name: 'after-header-bg' });
  txt(s, { x: panelX + 320, y: panelY + 11, w: 320, content: 'SESUDAH SATUTIM', size: 14, weight: 600, color: C.white, align: 'CENTER', name: 'after-header' });
  const afterItems = ['Board status terlihat\nsemua anggota', 'Laporan kontribusi otomatis', 'Portofolio kolaborasi\nuntuk UKM / magang'];
  afterItems.forEach((item, i) => {
    txt(s, { x: panelX + 336, y: panelY + 56 + i * 80, w: 288, content: '✓ ' + item, size: 13, weight: 400, color: C.ink, name: `after-item${i}` });
  });

  // BOTTOM — Closing quote
  rect(s, { x: 80, y: 660, w: 1760, h: 160, fill: C.surf, name: 'quote-bg' });
  txt(s, { x: 112, y: 690, w: 1696, content: '"Selama ini mahasiswa yang bekerja keras tidak punya cara untuk membuktikannya.\nSatuTim hadir untuk mengisi gap itu — dengan AI yang mendukung, bukan mengawasi."', size: 24, weight: 300, color: C.ink, italic: true, align: 'CENTER', name: 'quote-text' });
  txt(s, { x: 112, y: 788, w: 1696, content: 'Didukung: Johnson & Johnson (2009) · Deci & Ryan (2000) · Barrett (2007)', size: 12, weight: 400, color: C.inkSub, align: 'CENTER', name: 'quote-citation' });

  buildFooter(s, 5);
  return s;
}

// ════════════════════════════════════════════════════════════
// MAIN — run everything
// ════════════════════════════════════════════════════════════
async function main() {
  await loadAllFonts();

  // Rename page
  const page = figma.currentPage;
  page.name = 'SatuTim Proposal';

  // Build all slides
  const s1 = buildS1(page);
  const s2 = buildS2(page);
  const s3 = buildS3(page);
  const s4 = buildS4(page);
  const s5 = buildS5(page);

  // Add speaker notes (stored as descriptions on each frame)
  s1.setPluginData('speakerNotes', "Mulai dengan pertanyaan retoris: 'Siapa di sini pernah mengerjakan hampir semua tugas kelompok sendirian sementara yang lain tidak aktif?' Jangan sebut solusi dulu.");
  s2.setPluginData('speakerNotes', "Tekankan bahwa Dito dan Sinta bukan pemalas — free-riding lebih sering disebabkan struktur, bukan motivasi (Piezon & Ferree, 2008).");
  s3.setPluginData('speakerNotes', "Fokus pada satu momen dramatis: 'Dodi mengerjakan 5%. Selama ini tidak ada yang bisa membuktikan ini ke dosen — sekarang bisa.' Demo Mode tersedia: board pre-loaded Tim Fiksi.");
  s4.setPluginData('speakerNotes', "Ceritakan Koreksi #1 — berdampak ke seluruh arsitektur produk. Ini bukti critical thinking, bukan pasif menerima output AI. LOG.md harus ter-screenshot sebelum submit.");
  s5.setPluginData('speakerNotes', "Tegaskan bahwa semua angka adalah target yang diusulkan. Tutup dengan kalimat dampak — emosional, singkat, menyentuh kedua sisi pengguna.");

  // Zoom to fit
  figma.viewport.scrollAndZoomIntoView([s1, s2, s3, s4, s5]);

  figma.closePlugin('✅ SatuTim Proposal — 5 slides built successfully!');
}

main().catch(err => {
  console.error(err);
  figma.closePlugin('❌ Error: ' + err.message);
});
