// ============================================================
// SATUTIM — MASTER SCRIPT: Semua 5 Slide Sekaligus
// IBM Carbon Design System | 1920×1080px
// ============================================================
//
// CARA MENJALANKAN:
// 1. Buka file Figma kamu: https://www.figma.com/design/jjqlLvNJWD9SBJnV8J6CXQ/
// 2. Menu atas → Plugins → Development → Open console
//    (atau shortcut: Ctrl+Alt+I / Cmd+Option+I)
// 3. Copy semua isi file ini (Ctrl+A → Ctrl+C)
// 4. Paste di console Figma → tekan Enter
// 5. Tunggu ~15–30 detik, semua 5 slide akan muncul
//
// CATATAN:
// - Script ini memerlukan font "IBM Plex Sans" tersedia di Figma
//   (tambahkan via Resources → Fonts jika belum ada)
// - Semua slide akan dibuat di "Page 1" berjajar horizontal
// - Setiap slide 1920×1080px, jarak antar slide 60px
// ============================================================

(async () => {
  console.log('🚀 SatuTim — Membuat 5 slide...');

// ════════════════════════════════════════════════════════════
// SHARED UTILITIES
// ════════════════════════════════════════════════════════════

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
  warning:   { r: 0.945, g: 0.761, b: 0.106 },
  amber:     { r: 0.961, g: 0.620, b: 0.043 },
  amberDk:   { r: 0.851, g: 0.471, b: 0.0   },
  teal:      { r: 0.051, g: 0.580, b: 0.533 },
};

const W = 1920, H = 1080, FOOTER_H = 64, MARGIN = 80, TOP = 60;
const SLIDE_GAP = 60;

function sp(c, o = 1) { return [{ type: 'SOLID', color: c, opacity: o }]; }
async function lf(s) { try { await figma.loadFontAsync({ family: 'IBM Plex Sans', style: s }); } catch(e) {} }

async function tx(content, size, weight, color, opts = {}) {
  await lf(weight);
  const t = figma.createText();
  t.fontName = { family: 'IBM Plex Sans', style: weight };
  t.fontSize = size; t.characters = String(content); t.fills = sp(color);
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

async function addFooter(slide, num) {
  const footer = fr(W, FOOTER_H, C.surface1, 'Footer');
  footer.strokes = [{ type: 'SOLID', color: C.hairline }];
  footer.strokeWeight = 1; footer.strokeAlign = 'INSIDE';
  pos(footer, 0, H - FOOTER_H); slide.appendChild(footer);
  const ftL = await tx('SatuTim', 14, 'Medium', C.primary);
  pos(ftL, MARGIN, (FOOTER_H-18)/2); footer.appendChild(ftL);
  const ftC = await tx('Code the Future · Beginner Track · Tema 2', 12, 'Regular', C.inkSubtle, { al: 'CENTER', w: 380 });
  pos(ftC, (W-380)/2, (FOOTER_H-16)/2); footer.appendChild(ftC);
  const ftR = await tx(String(num).padStart(2,'0'), 14, 'SemiBold', C.ink);
  pos(ftR, W-MARGIN-20, (FOOTER_H-18)/2); footer.appendChild(ftR);
}

// ════════════════════════════════════════════════════════════
// SLIDE 1 — Problem Identification
// ════════════════════════════════════════════════════════════

async function buildSlide1(offsetX) {
  const slide = fr(W, H, C.canvas, 'Slide 1 — Problem Identification');
  figma.currentPage.appendChild(slide);
  slide.x = offsetX;
  await addFooter(slide, 1);

  const leftW = 1020, rightX = MARGIN + leftW + 40, rightW = W - (MARGIN + leftW + 40) - MARGIN;
  let curY = TOP;

  const ey = await tx('PROBLEM IDENTIFICATION', 11, 'SemiBold', C.primary, { ls: 1.5 });
  pos(ey, MARGIN, curY); slide.appendChild(ey); curY += 26;

  const hl = await tx('Tugas Kelompok: Semua Dapat Nilai Sama,\nTapi Tidak Semua Bekerja Sama', 40, 'Light', C.ink, { lh: 120, w: leftW });
  pos(hl, MARGIN, curY); slide.appendChild(hl); curY += hl.height + 12;

  const sub = await tx('Meta-analisis 78 studi membuktikan: ini bukan pengecualian', 19, 'Regular', C.primary, { w: leftW });
  pos(sub, MARGIN, curY); slide.appendChild(sub); curY += sub.height + 4;

  const bb = rc(192, 20, C.surface1, C.hairline, 1);
  pos(bb, MARGIN, curY); slide.appendChild(bb);
  const bt = await tx('Karau & Williams, 1993', 10, 'Regular', C.inkMuted);
  pos(bt, MARGIN+8, curY+3); slide.appendChild(bt);
  curY += 30;

  const points = [
    { title: 'Social loafing terdokumentasi lintas budaya & jenis tugas', body: '78 studi meta-analitik — efek konsisten di berbagai budaya & jenis tugas', cite: 'Karau & Williams, 1993  ·  Latané et al., 1979', accent: C.primary },
    { title: 'Norma penghindaran konflik → anggota aktif ambil alih', body: 'Anggota aktif pilih mengambil alih — menghapus konsekuensi bagi yang pasif', cite: 'Tjosvold et al., 2009  ·  Jehn & Mannix, 2001', accent: C.primary },
    { title: 'Trello & Notion tidak bisa deteksi ketimpangan beban kerja', body: 'Tool yang ada tidak tahu siapa anggotamu, apa jenis tugasmu', cite: 'Analisis kompetitor — plans/07 §3.1', accent: C.hairline },
  ];

  curY += 6;
  for (const p of points) {
    const bar = rc(3, 68, p.accent); pos(bar, MARGIN, curY); slide.appendChild(bar);
    const titleN = await tx(p.title, 13, 'SemiBold', C.ink, { w: leftW - 18 }); pos(titleN, MARGIN+14, curY); slide.appendChild(titleN);
    const bodyN  = await tx(p.body,  12, 'Regular',  C.inkMuted, { w: leftW - 18, lh: 140 }); pos(bodyN, MARGIN+14, curY+titleN.height+2); slide.appendChild(bodyN);
    const citeN  = await tx(p.cite,  10, 'Regular',  C.inkSubtle, { w: leftW - 18 }); pos(citeN, MARGIN+14, curY+titleN.height+bodyN.height+4); slide.appendChild(citeN);
    curY += Math.max(68, titleN.height+bodyN.height+citeN.height+6) + 12;
  }

  // Gap boxes
  const gapY = H - FOOTER_H - 100;
  const gapW = (leftW - 32) / 3;
  [['Tidak Ada Pembagian','Peran yang eksplisit'],['Tidak Ada Visibilitas','Progres bersama real-time'],['Tidak Ada Catatan','Kontribusi individual']].forEach(([lbl,sub2],i) => {
    const gx = MARGIN + i*(gapW+16);
    pos(rc(gapW, 88, C.surface1, C.hairline, 1), gx, gapY); slide.appendChild(slide.children[slide.children.length-1].remove() || rc(gapW, 88, C.surface1, C.hairline, 1));
    // re-add properly
    const gb = rc(gapW, 88, C.surface1, C.hairline, 1); pos(gb, gx, gapY); slide.appendChild(gb);
    const gd = rc(18, 18, C.primary); pos(gd, gx+12, gapY+14); slide.appendChild(gd);
    tx(lbl, 12, 'SemiBold', C.ink, { w: gapW-38 }).then(t => { pos(t, gx+38, gapY+12); slide.appendChild(t); });
    tx(sub2, 10, 'Regular', C.inkMuted, { w: gapW-38 }).then(t => { pos(t, gx+38, gapY+30); slide.appendChild(t); });
  });

  // Cycle diagram (right)
  const dCX = rightX + rightW/2, dCY = TOP + 220, rad = 190;
  const dLbl = await tx('SIKLUS KETIMPANGAN', 11, 'SemiBold', C.primary, { ls: 1.5, al: 'CENTER', w: rightW });
  pos(dLbl, rightX, TOP+4); slide.appendChild(dLbl);

  const nData = [
    { a: -90,  label: 'Kelompok\nTerbentuk',    active: true  },
    { a: -18,  label: 'Tidak Ada\nKesepakatan', active: false },
    { a:  54,  label: 'Anggota\nPasif',         active: false },
    { a:  126, label: 'Aktif\nAmbil Alih',      active: false },
    { a:  198, label: 'Tidak Ada\nKonsekuensi', active: false },
  ];

  // arrows
  for (let i = 0; i < nData.length; i++) {
    const a1 = nData[i].a * Math.PI/180, a2 = nData[(i+1)%nData.length].a * Math.PI/180;
    const x1 = dCX + rad*Math.cos(a1), y1 = dCY + rad*Math.sin(a1);
    const x2 = dCX + rad*Math.cos(a2), y2 = dCY + rad*Math.sin(a2);
    const line = figma.createLine();
    line.x = x1; line.y = y1;
    line.resize(Math.sqrt((x2-x1)**2+(y2-y1)**2), 0);
    line.rotation = -Math.atan2(y2-y1, x2-x1)*180/Math.PI;
    line.strokes = sp(C.primary); line.strokeWeight = 2;
    slide.appendChild(line);
  }

  // nodes
  for (const n of nData) {
    const nx = dCX + rad*Math.cos(n.a*Math.PI/180), ny = dCY + rad*Math.sin(n.a*Math.PI/180);
    const nW = 144, nH = 50;
    const nb = rc(nW, nH, n.active ? C.primary : C.surface1, n.active ? null : C.hairline, 1);
    pos(nb, nx-nW/2, ny-nH/2); slide.appendChild(nb);
    const nt = await tx(n.label, 11, n.active ? 'SemiBold' : 'Regular', n.active ? C.canvas : C.ink, { al: 'CENTER', w: nW-8, lh: 140 });
    pos(nt, nx-nW/2+4, ny-nH/2+6); slide.appendChild(nt);
  }

  const cl = await tx('terus berulang ↻', 10, 'Regular', C.inkSubtle, { al: 'CENTER', w: 110 });
  pos(cl, dCX-55, dCY-8); slide.appendChild(cl);

  const fn = await tx('Piezon & Ferree (2008) — free-riding dipicu ketidakjelasan peran & lemahnya akuntabilitas', 10, 'Regular', C.inkSubtle, { al: 'CENTER', w: rightW, lh: 140 });
  pos(fn, rightX, dCY+rad+56); slide.appendChild(fn);

  console.log('  ✅ Slide 1 done');
  return slide;
}

// ════════════════════════════════════════════════════════════
// SLIDE 2 — Target Audience
// ════════════════════════════════════════════════════════════

async function buildSlide2(offsetX) {
  const slide = fr(W, H, C.canvas, 'Slide 2 — Target Audience');
  figma.currentPage.appendChild(slide);
  slide.x = offsetX;
  await addFooter(slide, 2);
  let curY = TOP;

  const ey = await tx('TARGET AUDIENCE', 11, 'SemiBold', C.primary, { ls: 1.5, al: 'CENTER', w: W-2*MARGIN });
  pos(ey, MARGIN, curY); slide.appendChild(ey); curY += 24;
  const hl = await tx('Tiga Orang dalam Setiap Kelompok', 40, 'Light', C.ink, { al: 'CENTER', w: W-2*MARGIN, lh: 120 });
  pos(hl, MARGIN, curY); slide.appendChild(hl); curY += hl.height + 8;
  const sup = await tx('Bukan soal karakter — tiga hambatan berbeda yang butuh respons berbeda  (Piezon & Ferree, 2008)', 16, 'Regular', C.inkMuted, { al: 'CENTER', w: W-2*MARGIN });
  pos(sup, MARGIN, curY); slide.appendChild(sup); curY += sup.height + 22;

  const cardW = Math.floor((W-2*MARGIN-56)/3), cardH = 368, gap = 28;
  const personas = [
    { accent: C.primary, init:'RA', name:'Rahma', tag:'SI PENGGERAK', tCol: C.primary, quote:'"Aku capek jadi satu-satunya yang ngejar orang."', need:'Visibilitas ketimpangan tanpa konflik', badge:'Pengguna Primer' },
    { accent: C.amber,   init:'DT', name:'Dito',  tag:'SI SIBUK',     tCol: C.amberDk, quote:'"Aku mau ngerjain tapi nggak tau mulai dari mana."', need:'Kejelasan tugas + pengingat tanpa rasa malu', badge:'Pengguna Kritis' },
    { accent: C.teal,    init:'SI', name:'Sinta', tag:'SI BINGUNG',   tCol: C.teal,    quote:'"Aku nggak mau keliatan bego nanya di grup."', need:'Onboarding privat + kriteria selesai yang jelas', badge:'Pengguna Kritis' },
  ];

  for (let i = 0; i < personas.length; i++) {
    const p = personas[i], cx = MARGIN + i*(cardW+gap);
    pos(rc(cardW, cardH, C.canvas, C.hairline, 1), cx, curY); slide.appendChild(slide.children[slide.children.length-1].remove() || rc(cardW, cardH, C.canvas, C.hairline, 1));
    const card = rc(cardW, cardH, C.canvas, C.hairline, 1); pos(card, cx, curY); slide.appendChild(card);
    const topBar = rc(cardW, 6, p.accent); pos(topBar, cx, curY); slide.appendChild(topBar);
    const av = figma.createEllipse(); av.resize(52,52); av.fills = sp(p.accent); pos(av, cx+22, curY+18); slide.appendChild(av);
    const it = await tx(p.init, 15, 'SemiBold', C.canvas, { al:'CENTER', w:52 }); pos(it, cx+22, curY+18+(52-18)/2); slide.appendChild(it);
    const nm = await tx(p.name, 21, 'Regular', C.ink); pos(nm, cx+22, curY+84); slide.appendChild(nm);
    const tg = await tx(p.tag, 10, 'SemiBold', p.tCol, { ls:1.0 }); pos(tg, cx+22, curY+112); slide.appendChild(tg);
    const qt = await tx(p.quote, 12, 'Regular Italic', C.inkMuted, { w:cardW-44, lh:150 }); pos(qt, cx+22, curY+134); slide.appendChild(qt);
    const dv = rc(cardW-44, 1, C.hairline); pos(dv, cx+22, curY+134+qt.height+12); slide.appendChild(dv);
    const dvY = curY+134+qt.height+20;
    const nl = await tx('YANG DIBUTUHKAN', 10, 'SemiBold', C.ink, { ls:0.6 }); pos(nl, cx+22, dvY); slide.appendChild(nl);
    const nt = await tx(p.need, 12, 'Regular', C.inkMuted, { w:cardW-44, lh:140 }); pos(nt, cx+22, dvY+16); slide.appendChild(nt);
    const bY = curY+cardH-32;
    const bBg = rc(cardW, 32, C.surface1); pos(bBg, cx, bY); slide.appendChild(bBg);
    const bTx = await tx(p.badge, 11, 'Regular', C.inkMuted, { al:'CENTER', w:cardW }); pos(bTx, cx, bY+(32-13)/2); slide.appendChild(bTx);
  }

  const demoY = curY+cardH+16;
  const db = rc(W-2*MARGIN, 34, C.surface1, C.hairline, 1); pos(db, MARGIN, demoY); slide.appendChild(db);
  const dt = await tx('Mahasiswa S1 aktif  ·  Surabaya  ·  Semua jurusan (T1) dan teknis (T2)', 12, 'Regular', C.inkMuted, { al:'CENTER', w:W-2*MARGIN }); pos(dt, MARGIN, demoY+(34-14)/2); slide.appendChild(dt);

  console.log('  ✅ Slide 2 done');
  return slide;
}

// ════════════════════════════════════════════════════════════
// SLIDE 3 — Innovation Concept
// ════════════════════════════════════════════════════════════

async function buildSlide3(offsetX) {
  const slide = fr(W, H, C.canvas, 'Slide 3 — Innovation Concept');
  figma.currentPage.appendChild(slide);
  slide.x = offsetX;
  await addFooter(slide, 3);
  let curY = TOP;

  const ey = await tx('INNOVATION CONCEPT', 11, 'SemiBold', C.primary, { ls: 1.5 }); pos(ey, MARGIN, curY); slide.appendChild(ey); curY += 24;
  const hl = await tx('SatuTim: IBM Bob yang Mengisi Gap — Bukan Sekadar Task Manager', 36, 'Light', C.ink, { lh:120, w:W-2*MARGIN }); pos(hl, MARGIN, curY); slide.appendChild(hl); curY += hl.height + 18;

  // Flow diagram
  const fW = W-2*MARGIN, nW = Math.floor((fW - 3*44)/4), nH = 106;
  const phases = [
    { lbl:'COCOKKAN',   l1:'Upload CV', l2:'IBM Bob ekstrak profil\n+ gap analysis', active:true  },
    { lbl:'BAGI TUGAS', l1:'IBM Bob split sub-tugas', l2:'Definition of Done\nper anggota', active:true  },
    { lbl:'MONITOR',    l1:'Update 1-tap', l2:'Magic link WA\n→ tanpa buka app', active:false },
    { lbl:'LOG',        l1:'Laporan kontribusi', l2:'Portofolio\nKolaborasi', active:false },
  ];

  for (let i = 0; i < phases.length; i++) {
    const p = phases[i], nx = MARGIN + i*(nW+44);
    const fill = p.active ? C.primary : C.surface1;
    const tc = p.active ? C.canvas : C.ink, sc = p.active ? { r:0.8,g:0.85,b:1 } : C.inkMuted;
    const nb = rc(nW, nH, fill, p.active ? null : C.hairline, 1); pos(nb, nx, curY); slide.appendChild(nb);
    const pl = await tx(p.lbl, 10, 'SemiBold', tc, { ls:1.0, w:nW-16 }); pos(pl, nx+12, curY+10); slide.appendChild(pl);
    const l1 = await tx(p.l1, 12, 'SemiBold', tc, { w:nW-16 }); pos(l1, nx+12, curY+28); slide.appendChild(l1);
    const l2 = await tx(p.l2, 11, 'Regular', sc, { w:nW-16, lh:140 }); pos(l2, nx+12, curY+48); slide.appendChild(l2);
    if (p.active) {
      const bb = rc(72, 17, C.blue60); pos(bb, nx+(nW-72)/2, curY+nH+5); slide.appendChild(bb);
      const bt = await tx('IBM BOB', 9, 'SemiBold', C.canvas, { ls:0.6, al:'CENTER', w:72 }); pos(bt, nx+(nW-72)/2, curY+nH+7); slide.appendChild(bt);
    }
    if (i < phases.length-1) {
      const arr = await tx('→', 22, 'Light', C.primary); pos(arr, nx+nW+10, curY+(nH-26)/2); slide.appendChild(arr);
    }
  }

  const uxN = await tx('Wizard 7 langkah  ·  Setup ≤5 menit  ·  Koordinator selesai setup sebelum anggota join', 10, 'Regular', C.inkSubtle, { al:'CENTER', w:fW }); pos(uxN, MARGIN, curY+nH+28); slide.appendChild(uxN);
  curY += nH + 52;

  // Table + Badges
  const tW = Math.floor((W-2*MARGIN)*0.60), bColX = MARGIN+tW+30, bColW = W-bColX-MARGIN;
  const tblTit = await tx('Apa yang hanya SatuTim bisa lakukan', 12, 'SemiBold', C.ink); pos(tblTit, MARGIN, curY); slide.appendChild(tblTit);
  const tblY = curY+22, rowH = 34, c1W = tW-3*100, cW = 100;
  const hdrs = ['', 'Trello/Notion','Notion AI','SatuTim ✓'];
  const rows = [['Gap analysis berbasis CV profil','✗','✗','✓'],['Pembagian peran per jenis tugas','✗','✗','✓'],['Akuntabilitas + log kontribusi','✗','✗','✓']];

  const hBg = rc(tW, rowH, C.surface1, C.hairline, 1); pos(hBg, MARGIN, tblY); slide.appendChild(hBg);
  const lHdr = rc(cW, rowH, C.primary); pos(lHdr, MARGIN+tW-cW, tblY); slide.appendChild(lHdr);
  let hx = MARGIN;
  for (let h = 0; h < hdrs.length; h++) {
    const hW2 = h===0?c1W:cW, hCol = h===3?C.canvas:C.inkMuted;
    if (hdrs[h]) { const ht = await tx(hdrs[h], 11, 'SemiBold', hCol, { al:'CENTER', w:hW2 }); pos(ht, hx, tblY+(rowH-13)/2); slide.appendChild(ht); }
    if (h < hdrs.length-1) { const vd = rc(1, rowH, C.hairline); pos(vd, hx+hW2, tblY); slide.appendChild(vd); }
    hx += hW2;
  }

  rows.forEach((row, ri) => {
    const ry = tblY+rowH*(ri+1);
    const rb = rc(tW, rowH, ri%2===0?C.canvas:C.surface1, C.hairline, 1); pos(rb, MARGIN, ry); slide.appendChild(rb);
    let cx2 = MARGIN;
    row.forEach((cell, ci) => {
      const cW2 = ci===0?c1W:cW;
      const col2 = ci===0?C.ink:cell==='✓'?C.success:C.error, fw = ci===0?'Regular':'SemiBold', al = ci===0?'LEFT':'CENTER';
      tx(cell, ci===0?11:13, fw, col2, { al, w:cW2-(ci===0?16:0) }).then(t => { pos(t, cx2+(ci===0?10:0), ry+(rowH-t.height)/2); slide.appendChild(t); });
      if (ci < row.length-1) { const vd2 = rc(1, rowH, C.hairline); pos(vd2, cx2+cW2, ry); slide.appendChild(vd2); }
      cx2 += cW2;
    });
  });
  const tblCite = await tx('Oakley et al. (2004)  ·  van Knippenberg et al. (2004)  ·  Barrett (2007)', 10, 'Regular', C.inkSubtle); pos(tblCite, MARGIN, tblY+rowH*4+6); slide.appendChild(tblCite);

  // Badges
  const bLbl = await tx('KECOCOKAN TEMA 2', 11, 'SemiBold', C.primary, { ls:1.5 }); pos(bLbl, bColX, curY); slide.appendChild(bLbl);
  const badges = [
    { tag:'CONNECT',                   text:'Gap analysis → peran sesuai keahlian nyata', col: C.primary },
    { tag:'COLLABORATE',               text:'Pembagian adil, visibilitas, akuntabilitas', col: C.primary },
    { tag:'ENGAGE WITH OPPORTUNITIES', text:'Portofolio Kolaborasi → lomba & magang',     col: C.teal   },
  ];
  let bY = curY+22;
  for (const b of badges) {
    const bBg = rc(bColW, 66, C.canvas, C.primary, 1); pos(bBg, bColX, bY); slide.appendChild(bBg);
    const bAc = rc(4, 66, b.col); pos(bAc, bColX, bY); slide.appendChild(bAc);
    const bTg = await tx(b.tag, 10, 'SemiBold', b.col, { ls:0.8 }); pos(bTg, bColX+14, bY+8); slide.appendChild(bTg);
    const bTx = await tx(b.text, 11, 'Regular', C.inkMuted, { w:bColW-22, lh:140 }); pos(bTx, bColX+14, bY+24); slide.appendChild(bTx);
    bY += 74;
  }

  console.log('  ✅ Slide 3 done');
  return slide;
}

// ════════════════════════════════════════════════════════════
// SLIDE 4 — IBM Bob Utilization
// ════════════════════════════════════════════════════════════

async function buildSlide4(offsetX) {
  const slide = fr(W, H, C.canvas, 'Slide 4 — IBM Bob Utilization');
  figma.currentPage.appendChild(slide);
  slide.x = offsetX;
  await addFooter(slide, 4);
  let curY = TOP;

  const ey = await tx('IBM BOB UTILIZATION', 11, 'SemiBold', C.primary, { ls:1.5 }); pos(ey, MARGIN, curY); slide.appendChild(ey); curY += 24;
  const hl = await tx('IBM Bob di Setiap Langkah: 23 Sesi, 3 Mode, 2 Koreksi Besar', 36, 'Light', C.ink, { lh:120, w:W-2*MARGIN-240 }); pos(hl, MARGIN, curY); slide.appendChild(hl);
  const ctxBg = rc(228, 22, C.canvas, C.primary, 1); pos(ctxBg, W-MARGIN-228, curY+4); slide.appendChild(ctxBg);
  const ctxT = await tx('Komponen 40% dari total skor', 10, 'Regular', C.primary, { al:'CENTER', w:228 }); pos(ctxT, W-MARGIN-228, curY+8); slide.appendChild(ctxT);
  curY += hl.height + 22;

  // Stat cards
  const sW = Math.floor((W-2*MARGIN-48)/3), sH = 96;
  [['23','Sesi Terdokumentasi','LOG.md — semua baris terisi'],['3','Mode IBM Bob','Agent  ·  Plan  ·  Ask'],['2','Koreksi Besar Manusia','Tim menolak output Bob — critical thinking']].forEach(([num,lbl,sub],i) => {
    const sx = MARGIN+i*(sW+24);
    const sb = rc(sW, sH, C.canvas, C.hairline, 1); pos(sb, sx, curY); slide.appendChild(sb);
    const sa = rc(4, sH, C.primary); pos(sa, sx, curY); slide.appendChild(sa);
    tx(num, 44, 'Light', C.primary, { lh:110 }).then(t => { pos(t, sx+18, curY+8); slide.appendChild(t); });
    tx(lbl, 12, 'SemiBold', C.ink).then(t => { pos(t, sx+18, curY+58); slide.appendChild(t); });
    tx(sub, 10, 'Regular', C.inkSubtle, { w:sW-26 }).then(t => { pos(t, sx+18, curY+74); slide.appendChild(t); });
  });
  curY += sH + 26;

  // Two columns
  const cW = Math.floor((W-2*MARGIN-32)/2), lX = MARGIN, rX = MARGIN+cW+32;

  // Left: bar chart
  const blbl = await tx('Distribusi Penggunaan Mode', 12, 'SemiBold', C.ink); pos(blbl, lX, curY); slide.appendChild(blbl);
  const barsData = [['Agent','21 sesi',0.88,C.primary],['Plan','1 sesi',0.05,C.inkMuted],['Ask','1 sesi',0.05,C.inkMuted]];
  let barY2 = curY+22, chartMaxW = cW-80;
  for (const [lbl2,cnt,pct,col2] of barsData) {
    const lb = await tx(lbl2, 11, pct===0.88?'Regular':'Regular', pct===0.88?C.ink:C.inkMuted); pos(lb, lX, barY2+6); slide.appendChild(lb);
    const bw = Math.floor(chartMaxW*pct), bar2 = rc(bw, 22, col2); pos(bar2, lX+50, barY2); slide.appendChild(bar2);
    const ct = await tx(cnt, 10, pct===0.88?'SemiBold':'Regular', pct===0.88?C.primary:C.inkSubtle); pos(ct, lX+50+bw+6, barY2+5); slide.appendChild(ct);
    barY2 += 32;
  }
  const bNote = await tx('Sesi 03 = Plan (evaluasi & perbandingan opsi)  ·  Sesi 12 = Ask (panduan good practices)', 10, 'Regular', C.inkSubtle, { w:cW }); pos(bNote, lX, barY2+4); slide.appendChild(bNote);

  // Prompt box
  const pY = barY2+22;
  const pBg = rc(cW, 104, C.surface1, C.hairline, 1); pos(pBg, lX, pY); slide.appendChild(pBg);
  const pLbl = await tx('CONTOH PROMPT AKTUAL', 10, 'SemiBold', C.primary, { ls:0.6 }); pos(pLbl, lX+14, pY+10); slide.appendChild(pLbl);
  const p1 = await tx('"Identifikasi ≥8 masalah nyata mahasiswa Indonesia\nrelevan Tema 2..."', 10, 'Regular', C.ink, { lh:140, w:cW-28 }); pos(p1, lX+14, pY+28); slide.appendChild(p1);
  const p1s = await tx('→ Menghasilkan plans/01-problem-discovery.md (Sesi 01)', 9, 'Regular', C.inkSubtle); pos(p1s, lX+14, pY+72); slide.appendChild(p1s);
  const pdiv = rc(cW-28, 1, C.hairline); pos(pdiv, lX+14, pY+88); slide.appendChild(pdiv);

  // Right: Corrections
  const cLbl = await tx('Koreksi Manusia — Bukti Critical Thinking', 12, 'SemiBold', C.ink); pos(cLbl, rX, curY); slide.appendChild(cLbl);
  const cors = [
    { tag:'KOREKSI #1 — SESI 06→07', bef:'→  Bob rekomendasikan: Kickoff Pact + AI Mediator berbasis WA', rej:'✗  Tim tolak: fragmentasi WA adalah masalah, bukan solusi', aft:'✓  Diubah: Alur 4 fase terpadu dalam satu app', imp:'Dampak: perubahan arsitektur produk' },
    { tag:'KOREKSI #2 — SESI 08', bef:'→  Bob tidak bahas: jenis tugas & skill imbalance dalam tim', rej:'✗  Tim tambah: kasus nyata 15 frontend / 5 backend', aft:'✓  Diubah: Gap analysis menjadi inti Fase 1 (Cocokkan)', imp:'Dampak: logika inti sistem berubah' },
  ];
  let cY2 = curY+22;
  for (const cor of cors) {
    const cb = rc(cW, 112, C.surface1, C.hairline, 1); pos(cb, rX, cY2); slide.appendChild(cb);
    const ct = await tx(cor.tag, 10, 'SemiBold', C.primary, { ls:0.6 }); pos(ct, rX+12, cY2+8); slide.appendChild(ct);
    const cd = rc(cW-24, 1, C.hairline); pos(cd, rX+12, cY2+26); slide.appendChild(cd);
    const cb2 = await tx(cor.bef, 11, 'Regular', C.inkMuted, { w:cW-24 }); pos(cb2, rX+12, cY2+32); slide.appendChild(cb2);
    const cr = await tx(cor.rej, 11, 'SemiBold', C.error, { w:cW-24 }); pos(cr, rX+12, cY2+50); slide.appendChild(cr);
    const ca = await tx(cor.aft, 11, 'SemiBold', C.success, { w:cW-24 }); pos(ca, rX+12, cY2+68); slide.appendChild(ca);
    const ib = rc(cW-24, 18, C.canvas, C.primary, 1); pos(ib, rX+12, cY2+88); slide.appendChild(ib);
    const it = await tx(cor.imp, 9, 'Regular', C.primary, { al:'CENTER', w:cW-24 }); pos(it, rX+12, cY2+90); slide.appendChild(it);
    cY2 += 120;
  }

  console.log('  ✅ Slide 4 done');
  return slide;
}

// ════════════════════════════════════════════════════════════
// SLIDE 5 — Expected Impact
// ════════════════════════════════════════════════════════════

async function buildSlide5(offsetX) {
  const slide = fr(W, H, C.canvas, 'Slide 5 — Expected Impact');
  figma.currentPage.appendChild(slide);
  slide.x = offsetX;
  await addFooter(slide, 5);
  let curY = TOP;

  const ey = await tx('EXPECTED IMPACT', 11, 'SemiBold', C.primary, { ls:1.5 }); pos(ey, MARGIN, curY); slide.appendChild(ey); curY += 24;
  const hl = await tx('Kolaborasi yang Adil, Terdokumentasi, dan Bisa Dibuktikan', 36, 'Light', C.ink, { lh:120, w:W-2*MARGIN }); pos(hl, MARGIN, curY); slide.appendChild(hl); curY += hl.height + 8;
  const mn = await tx('Berbasis mekanisme yang terbukti — bukan klaim tanpa bukti', 16, 'Regular', C.inkMuted, { w:W-2*MARGIN }); pos(mn, MARGIN, curY); slide.appendChild(mn); curY += mn.height + 20;

  const colW = Math.floor((W-2*MARGIN-32)/2), lX = MARGIN, rX = MARGIN+colW+32, midY = curY;

  // Left: 2x2 metric grid
  const mLbl = await tx('Sinyal Sukses yang Diusulkan', 12, 'SemiBold', C.ink); pos(mLbl, lX, midY); slide.appendChild(mLbl);
  const mets = [
    ['< 15%','Ketimpangan per Tim','Selisih terberat vs. teringan\ndi ≥60% tim','↳ Akuntabilitas visible (Kerr & Bruun, 1983)'],
    ['≥ 80%','Onboarding Selesai','Dalam 24 jam pertama','↳ Wizard 7 langkah ≤5 menit'],
    ['≥ 70%','Sub-tugas Diupdate','Sebelum deadline internal','↳ Magic link 1-tap dari WA'],
    ['≥ 40%','Room Capai Laporan','Laporan kontribusi final','↳ Portofolio Kolaborasi (Barrett, 2007)'],
  ];
  const mCW = Math.floor((colW-16)/2), mCH = 120, mGap = 16;
  mets.forEach(([num,lbl,sub,mech],i) => {
    const col = i%2, row = Math.floor(i/2);
    const mx = lX+col*(mCW+mGap), my = midY+24+row*(mCH+mGap);
    const mb = rc(mCW, mCH, C.canvas, C.hairline, 1); pos(mb, mx, my); slide.appendChild(mb);
    const ma = rc(4, mCH, C.primary); pos(ma, mx, my); slide.appendChild(ma);
    tx(num, 32, 'Light', C.primary, { lh:110 }).then(t => { pos(t, mx+14, my+8); slide.appendChild(t); });
    tx(lbl, 11, 'SemiBold', C.ink, { w:mCW-22 }).then(t => { pos(t, mx+14, my+50); slide.appendChild(t); });
    tx(sub, 10, 'Regular', C.inkSubtle, { w:mCW-22, lh:138 }).then(t => { pos(t, mx+14, my+66); slide.appendChild(t); });
    tx(mech, 9, 'Regular', C.primary, { w:mCW-22 }).then(t => { pos(t, mx+14, my+98); slide.appendChild(t); });
  });
  const mFnY = midY+24+2*mCH+mGap+6;
  const mFn = await tx('Sinyal sukses yang diusulkan — akan divalidasi setelah pilot pertama', 10, 'Regular', C.inkSubtle, { al:'CENTER', w:colW }); pos(mFn, lX, mFnY); slide.appendChild(mFn);

  // Right: Before/After
  const baBgH = 2*mCH+mGap+24+18;
  const po = rc(colW, baBgH, C.canvas, C.hairline, 1); pos(po, rX, midY); slide.appendChild(po);
  const hH = 38;
  const hb = rc(colW, hH, C.surface1, C.hairline, 1); pos(hb, rX, midY); slide.appendChild(hb);
  const hd = rc(1, hH, C.hairline); pos(hd, rX+colW/2, midY); slide.appendChild(hd);
  const hL = await tx('SEBELUM SatuTim', 10, 'SemiBold', C.error, { ls:0.6, al:'CENTER', w:colW/2 }); pos(hL, rX, midY+(hH-12)/2); slide.appendChild(hL);
  const hR = await tx('SESUDAH SatuTim', 10, 'SemiBold', C.success, { ls:0.6, al:'CENTER', w:colW/2 }); pos(hR, rX+colW/2, midY+(hH-12)/2); slide.appendChild(hR);

  const cRows = [
    ['📱  Chat WA — koordinasi kacau','📊  Board terstruktur, semua terlihat'],
    ['❓  Siapa ngerjain apa? Tidak jelas','✅  Role eksplisit + DoD per anggota'],
    ['😤  Kerja keras tidak bisa dibuktikan','📄  Laporan kontribusi otomatis'],
  ];
  const crH = Math.floor((baBgH-hH)/cRows.length);
  cRows.forEach((row, ri) => {
    const ry = midY+hH+ri*crH;
    const rb = rc(colW, crH, ri%2===0?C.canvas:C.surface1); pos(rb, rX, ry); slide.appendChild(rb);
    const vd = rc(1, crH, C.hairline); pos(vd, rX+colW/2, ry); slide.appendChild(vd);
    const hl2 = rc(colW, 1, C.hairline); pos(hl2, rX, ry); slide.appendChild(hl2);
    tx(row[0], 11, 'Regular', C.inkMuted, { w:colW/2-16 }).then(t => { pos(t, rX+10, ry+(crH-t.height)/2); slide.appendChild(t); });
    tx(row[1], 11, 'SemiBold', C.ink, { w:colW/2-16 }).then(t => { pos(t, rX+colW/2+10, ry+(crH-t.height)/2); slide.appendChild(t); });
  });

  const mCite = await tx('Mekanisme: Johnson & Johnson (2009)  ·  Deci & Ryan (2000 — SDT)', 10, 'Regular', C.inkSubtle, { al:'CENTER', w:colW }); pos(mCite, rX, midY+baBgH+6); slide.appendChild(mCite);

  // Quote bar
  const qY = midY+baBgH+28, qH = H-FOOTER_H-qY-8;
  const qBg = rc(W-2*MARGIN, qH, C.surface1, C.hairline, 1); pos(qBg, MARGIN, qY); slide.appendChild(qBg);
  const qAc = rc(4, qH, C.primary); pos(qAc, MARGIN, qY); slide.appendChild(qAc);
  const qTx = await tx('"Selama ini mahasiswa yang bekerja keras tidak punya cara membuktikannya.\n SatuTim mengisi gap itu — dengan AI yang mendukung, bukan mengawasi."', 15, 'Light Italic', C.ink, { al:'CENTER', w:W-2*MARGIN-80, lh:155 }); pos(qTx, MARGIN+40, qY+(qH-qTx.height-16)/2); slide.appendChild(qTx);
  const qCi = await tx('Johnson & Johnson (2009)  ·  Deci & Ryan (2000)  ·  Barrett (2007)', 10, 'Regular', C.inkSubtle, { al:'CENTER', w:W-2*MARGIN-80 }); pos(qCi, MARGIN+40, qY+qH-16); slide.appendChild(qCi);
  const t2Bg = rc(228, 20, C.canvas, C.primary, 1); pos(t2Bg, W-MARGIN-228-14, qY+6); slide.appendChild(t2Bg);
  const t2Tx = await tx('Tema 2: Connect · Collaborate · Engage ✓', 9, 'SemiBold', C.primary, { al:'CENTER', w:228 }); pos(t2Tx, W-MARGIN-228-14, qY+8); slide.appendChild(t2Tx);

  console.log('  ✅ Slide 5 done');
  return slide;
}

// ════════════════════════════════════════════════════════════
// RUN ALL
// ════════════════════════════════════════════════════════════

const s1 = await buildSlide1(0);
const s2 = await buildSlide2(W + SLIDE_GAP);
const s3 = await buildSlide3((W + SLIDE_GAP) * 2);
const s4 = await buildSlide4((W + SLIDE_GAP) * 3);
const s5 = await buildSlide5((W + SLIDE_GAP) * 4);

figma.viewport.scrollAndZoomIntoView([s1, s2, s3, s4, s5]);
console.log('🎉 Semua 5 slide SatuTim berhasil dibuat!');
console.log('   Lokasi: Page 1, berjajar horizontal kiri ke kanan');
console.log('   Total lebar: ' + (W*5 + SLIDE_GAP*4) + 'px');

})();
