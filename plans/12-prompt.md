# 12 — Master Prompt: Figma Slide Deck SatuTim

> **Tujuan dokumen ini:** Satu file berisi semua prompt siap copy-paste untuk membuat 5 slide proposal SatuTim di Figma. Jalankan secara berurutan: Prompt 0 (Design System) → Prompt 1–5 (Slide 1–5).
>
> **Style utama:** IBM Carbon Design System — flat square, IBM Plex Sans, IBM Blue `#0F62FE` sebagai satu-satunya aksen warna, tanpa shadow, tanpa rounded corner, kedalaman via 1px hairline dan surface change.
>
> **Pendekatan:** Consulting deck — setiap slide punya satu pesan dominan, data kuantitatif di depan, visual yang menggantikan teks (diagram/chart/tabel), dan zero fluff. Minimal 1 data/angka kuat per slide.
>
> **Ukuran frame:** 1920×1080px (16:9) untuk semua slide.
>
> **Plugin yang disarankan:** Figma AI (`/` di canvas → "Generate"), Magician, atau Builder.io.
>
> **Sumber konten:** `docs/slides-draft.md`, `plans/10-literature.md`, `plans/06-concept-prd.md`, `DESIGN (1).md`.

---

## URUTAN PENGERJAAN

```
0 → Design System (wajib selesai sebelum slide manapun)
1 → Slide 1: Problem Identification
2 → Slide 2: Target Audience
3 → Slide 3: Innovation Concept
4 → Slide 4: IBM Bob Utilization
5 → Slide 5: Expected Impact
```

---

## PROMPT 0 — Design System Foundation

> Jalankan prompt ini pertama. Buat satu halaman Figma bernama `_Design System`. Semua komponen dan style di sini akan dipakai ulang di seluruh slide.

```
Create a Figma page named "_Design System" for the SatuTim proposal deck.

═══════════════════════════════════════
DESIGN LANGUAGE: IBM Carbon Design System
═══════════════════════════════════════

Core aesthetic:
- Flat square geometry: border-radius = 0px on ALL elements (buttons, cards, inputs, badges)
- No drop shadows anywhere. No gradients. No atmospheric effects.
- Depth via: 1px hairline borders + surface color change only
- Typography: IBM Plex Sans (Google Fonts, SIL OFL license, free)
- One chromatic accent: IBM Blue #0F62FE — all other surfaces are white, light gray, or dark charcoal

═══════════════════════════════════════
COLOR STYLES
═══════════════════════════════════════

Create these as Figma color styles:

Brand:
  - primary:         #0F62FE  (IBM Blue — primary CTAs, links, key data, diagrams)
  - blue-hover:      #0050E6
  - blue-60:         #0043CE
  - blue-80:         #002D9C

Ink (text):
  - ink:             #161616  (headlines, body, all default text)
  - ink-muted:       #525252  (secondary labels, sub-headlines)
  - ink-subtle:      #8C8C8C  (captions, citations, meta)
  - inverse-ink:     #FFFFFF  (text on dark surfaces)

Surface:
  - canvas:          #FFFFFF  (default page/slide background)
  - surface-1:       #F4F4F4  (card backgrounds, alternate rows, section bands)
  - surface-2:       #E0E0E0  (disabled, hairlines as fill)
  - hairline:        #E0E0E0  (1px borders on cards and dividers)
  - inverse-canvas:  #161616  (dark panel surfaces)

Semantic:
  - success:         #24A148  (checkmarks, positive states)
  - warning:         #F1C21B  (caution indicators)
  - error:           #DA1E28  (X marks, negative states)

═══════════════════════════════════════
TEXT STYLES  (all IBM Plex Sans)
═══════════════════════════════════════

Display — use weight 300 (IBM's signature light display treatment):
  - display-xl:   76px / w300 / lh 1.17 / ls -0.5px
  - display-lg:   60px / w300 / lh 1.17 / ls -0.4px
  - display-md:   42px / w300 / lh 1.20 / ls 0

Body — use weight 400 with Carbon's precise letter-spacing:
  - headline:     32px / w400 / lh 1.25
  - card-title:   24px / w400 / lh 1.33
  - subhead:      20px / w400 / lh 1.40
  - body-lg:      18px / w400 / lh 1.50
  - body:         16px / w400 / lh 1.50 / ls 0.16px
  - body-sm:      14px / w400 / lh 1.29 / ls 0.16px
  - body-emph:    14px / w600 / lh 1.29 / ls 0.16px
  - caption:      12px / w400 / lh 1.33 / ls 0.32px
  - eyebrow:      11px / w600 / lh 1.20 / ls 1.5px  (uppercase labels)

═══════════════════════════════════════
GRID
═══════════════════════════════════════

12-column grid | margin: 80px L/R, 60px T/B | gutter: 24px

═══════════════════════════════════════
COMPONENTS
═══════════════════════════════════════

Build each as a Figma component:

1. FOOTER-BAR
   - Full width, height 64px
   - Background: surface-1 (#F4F4F4)
   - Border: 1px top, color hairline (#E0E0E0)
   - Left zone: "SatuTim" in IBM Blue, body-sm
   - Center zone: "Code the Future · Beginner Track · Tema 2" in ink-subtle, caption
   - Right zone: slide number "01" in ink, body-emph
   - Create variant with property "slideNumber" (01–05)

2. EYEBROW-LABEL
   - Text style: eyebrow (11px w600 uppercase ls 1.5px)
   - Color: IBM Blue (#0F62FE)
   - Use as section identifier above each slide headline

3. STAT-CARD
   - Width: flexible | Min height: 120px | Padding: 24px
   - Background: canvas | Border: 1px hairline | Radius: 0px | No shadow
   - Slot 1: large number — display-md (42px) weight 300, IBM Blue
   - Slot 2: label — body-sm w600, ink
   - Slot 3: sub-label — caption, ink-subtle
   - Create variant with "dark" background: inverse-canvas, text inverse-ink

4. FEATURE-CARD
   - Padding: 24px | Background: canvas | Border: 1px hairline | Radius: 0px
   - Has: icon slot (24×24), title (card-title), body (body-sm), optional citation (caption italic)
   - Variant "elevated": background surface-1

5. PERSONA-CARD
   - Width: ~540px | Padding: 24px | Radius: 0px | Border: 1px hairline | No shadow
   - Top accent bar: 4px height, full width (color variants: blue/amber/teal)
   - Avatar circle: 56×56px, background matches accent color, initials in inverse-ink body-emph
   - Name: card-title (24px)
   - Tag: eyebrow, same color as accent
   - Quote: body-sm italic, ink-muted
   - Divider: 1px hairline
   - "Yang Dibutuhkan:" label: caption w600 ink
   - Need text: body-sm, ink-muted

6. FLOW-NODE
   - Padding: 12px 20px | Radius: 0px | Border: 1px hairline
   - Variant "active": background IBM Blue, text inverse-ink, no border
   - Variant "default": background surface-1, text ink
   - Icon slot: 20×20px
   - Label: body-sm w600
   - Sub-label: caption

7. COMPARISON-TABLE
   - Full-width table | Radius: 0px | Border: 1px hairline on outer + all cells
   - Header row: background surface-1, body-emph
   - Header for "SatuTim" column: background IBM Blue, text inverse-ink, body-emph
   - Data rows: alternating canvas/surface-1
   - ✓ in success green (#24A148), ✗ in error red (#DA1E28) — both body-emph, centered in cell

8. BEFORE-AFTER-PANEL
   - 2-column split, equal width | Outer border: 1px hairline | Radius: 0px
   - Header row: background surface-1, 1px bottom hairline
     - Left header: "SEBELUM SatuTim" in error (#DA1E28), eyebrow style
     - Right header: "SESUDAH SatuTim" in success (#24A148), eyebrow style
   - Vertical 1px hairline divider between columns
   - Each row: caption text, 8px 16px padding, alternating canvas/surface-1

9. QUOTE-BOX
   - Full-width available | Padding: 24px 32px
   - Background: surface-1 | Border: 1px hairline | Radius: 0px
   - Left accent: 4px wide full-height IBM Blue strip (inside left edge)
   - Quote: body-lg (18px) w300 italic, ink, centered
   - Citation: caption, ink-subtle, centered below

10. CORRECTION-BLOCK
    - Padding: 16px | Background: surface-1 | Border: 1px hairline | Radius: 0px
    - Tag row: eyebrow, IBM Blue
    - "Before" row: → icon gray + caption, ink-subtle
    - "Rejected" row: ✗ icon error-red + caption, error (#DA1E28)
    - "After" row: ✓ icon success-green + caption w600, success (#24A148)
```

---

## PROMPT 1 — Slide 1: Problem Identification

> **Pesan dominan:** Ketimpangan kontribusi bukan opini — 78 studi membuktikannya. Tiga celah konkret belum ada yang mengisi.
> **Visual utama:** Lingkaran setan 5-node (diagram) + 3 gap box bawah.
> **Data kunci:** "78 studi" — Karau & Williams (1993); meta-analisis terbesar di bidang ini.

```
Create a 1920×1080px slide frame named "Slide 1 — Problem Identification".
Style: IBM Carbon Design System. IBM Plex Sans. 0px border-radius everywhere.
IBM Blue #0F62FE as sole chromatic accent. No shadows. 1px hairline borders for depth.

═══════════════════════════════════════
BACKGROUND & GRID
═══════════════════════════════════════

Background: #FFFFFF full canvas.
Apply 12-column grid, 80px side margins, 60px top/bottom, 24px gutters.

═══════════════════════════════════════
FOOTER
═══════════════════════════════════════

Use Footer-Bar component at bottom, height 64px, background #F4F4F4.
1px top border #E0E0E0.
Left: "SatuTim" IBM Blue body-sm.
Center: "Code the Future · Beginner Track · Tema 2" caption #8C8C8C.
Right: "01" body-emph #161616.

═══════════════════════════════════════
LAYOUT: 58/42 split (left text | right diagram)
═══════════════════════════════════════

LEFT COLUMN  (x 80px → ~1110px, y 60px → 1016px):

  [EYEBROW]
  "PROBLEM IDENTIFICATION"
  Style: eyebrow (11px w600 uppercase ls 1.5px), IBM Blue.
  Margin-top from top: 60px.

  [HEADLINE]
  "Tugas Kelompok: Semua Dapat Nilai Sama,
  Tapi Tidak Semua Bekerja Sama"
  Style: display-md (42px w300 lh 1.20), ink (#161616).
  Max-width: 820px. Margin-top: 16px.

  [SUB-HEADLINE]
  "Meta-analisis 78 studi membuktikan: ini bukan pengecualian"
  Style: subhead (20px w400), IBM Blue.
  Margin-top: 12px.

  [DATA SOURCE BADGE]
  Small pill beside sub-headline: "Karau & Williams, 1993"
  Style: caption, background surface-1, 1px hairline border, padding 4px 10px, radius 0px.

  [THREE PROBLEM POINTS] — stacked vertically, gap 20px, margin-top 32px:

  Point 1 — Social loafing:
  · Left border accent: 3px wide IBM Blue strip
  · Title (body-sm w600 ink): "Social loafing terdokumentasi lintas budaya & jenis tugas"
  · Body (body-sm ink-muted): "78 studi meta-analitik, efek konsisten di berbagai budaya"
  · Citation (caption italic ink-subtle): "Karau & Williams, 1993 · Latané et al., 1979"
  · Padding: 12px left 16px

  Point 2 — Norma sosial:
  · Left border accent: 3px IBM Blue
  · Title: "Norma penghindaran konflik → anggota aktif ambil alih"
  · Body: "Anggota aktif pilih mengambil alih — menghapus konsekuensi bagi pasif"
  · Citation: "Tjosvold et al., 2009 · Jehn & Mannix, 2001"

  Point 3 — Tool gap:
  · Left border accent: 3px surface-2 (#E0E0E0) — visually softer, different status
  · Title: "Trello & Notion tidak bisa deteksi ketimpangan beban kerja"
  · Body: "Tool yang ada tidak tahu siapa anggotamu, apa jenis tugasmu"
  · Citation: "Red team analysis — plans/07 §3.1"

  [THREE GAP BOXES] — horizontal row, equal width, at bottom of left column:
  Each box: background surface-1, 1px hairline border, padding 16px 20px, radius 0px.
  Gap between boxes: 16px.

  Gap Box 1:
  · Large icon placeholder: 28×28px, IBM Blue
  · Label (body-sm w600 ink): "Tidak Ada Pembagian"
  · Sub (caption ink-subtle): "Peran yang eksplisit"

  Gap Box 2:
  · Large icon placeholder: 28×28px, IBM Blue
  · Label: "Tidak Ada Visibilitas"
  · Sub: "Progres bersama real-time"

  Gap Box 3:
  · Large icon placeholder: 28×28px, IBM Blue
  · Label: "Tidak Ada Catatan"
  · Sub: "Kontribusi individual"

RIGHT COLUMN  (x ~1140px → 1840px, centered vertically):

  [DIAGRAM LABEL]
  "SIKLUS KETIMPANGAN" — eyebrow style, IBM Blue, centered above diagram.

  [CYCLE DIAGRAM] — 5-node circular/pentagon arrangement:

  Layout: nodes arranged clockwise in a pentagon. Arrows between consecutive nodes,
  thick 2px IBM Blue stroke, arrowhead at end.

  Node 1 (TOP, IBM Blue fill, white text):
  · Background #0F62FE | Text inverse-ink | body-sm w600
  · Text: "Kelompok Terbentuk"

  Node 2 (top-right, surface-1 fill):
  · Background surface-1 | 1px hairline | body-sm ink
  · Text: "Tidak Ada Kesepakatan"

  Node 3 (bottom-right):
  · Same as Node 2
  · Text: "Anggota Pasif"

  Node 4 (bottom-left):
  · Same style — slightly different shade: background #E8E8E8
  · Text: "Aktif Ambil Alih"

  Node 5 (top-left):
  · Background surface-1 | body-sm ink-muted
  · Text: "Tidak Ada Konsekuensi"

  Node style: padding 10px 16px | radius: 0px | min-width: 160px.
  Arrow from Node 5 back to Node 1 completes the loop.

  Center of circle:
  · Small text: "terus berulang ↻"
  · Style: caption italic, ink-subtle

  [BELOW DIAGRAM]
  Small data footnote, caption, ink-subtle:
  "Piezon & Ferree (2008) — free-riding dipicu ketidakjelasan peran & lemahnya akuntabilitas individual"
```

---

## PROMPT 2 — Slide 2: Target Audience

> **Pesan dominan:** Tiga pola berbeda — satu masalah yang sama. Ini bukan soal malas atau rajin.
> **Visual utama:** 3 persona card horizontal, tiap kartu punya warna aksen berbeda dan kutipan langsung.
> **Data kunci:** Persona berbasis `plans/04`, framing hambatan dari Piezon & Ferree (2008).

```
Create a 1920×1080px slide frame named "Slide 2 — Target Audience".
IBM Carbon Design System. IBM Plex Sans. 0px radius. IBM Blue only accent. No shadow. 1px hairlines.

═══════════════════════════════════════
BACKGROUND & FOOTER
═══════════════════════════════════════

Background: #FFFFFF.
Footer-Bar component: height 64px, bg #F4F4F4, 1px top hairline.
Left: "SatuTim" IBM Blue. Center: "Code the Future · Beginner Track · Tema 2" caption #8C8C8C. Right: "02" body-emph.

═══════════════════════════════════════
LAYOUT: centered, top headline + 3 cards + bottom note
═══════════════════════════════════════

TOP HEADER (centered, y: 60px):

  [EYEBROW]  "TARGET AUDIENCE" — eyebrow style, IBM Blue, centered.

  [HEADLINE]  "Tiga Orang dalam Setiap Kelompok"
  Style: display-md (42px w300), ink, centered.
  Margin-top: 12px.

  [SUPPORTING TEXT]
  "Bukan soal karakter — tiga hambatan berbeda yang butuh respons berbeda"
  Style: body-lg (18px w400), ink-muted, centered. Max-width: 800px. Margin-top: 8px.
  Citation inline: "(Piezon & Ferree, 2008)" — caption italic ink-subtle.

THREE PERSONA CARDS (horizontal row, y: ~240px, gap: 28px, margin: 80px sides):

Each card: width ~550px | min-height: 400px | radius: 0px | 1px hairline border | no shadow | padding: 0 (top bar) + 24px internal.

─────────────────────────────
CARD 1 — RAHMA:
─────────────────────────────
  Top accent bar: 6px height, full width, color IBM Blue #0F62FE.

  Avatar circle: 60×60px, background #0F62FE.
  Initials "RA" in inverse-ink, body-emph. Margin-top: 20px. Margin-left: 24px.

  [Name row] (margin-top: 12px, padding: 0 24px):
  · Name: "Rahma" — card-title (24px w400), ink.
  · Tag beside name: "SI PENGGERAK" — eyebrow style, IBM Blue.

  [Quote] (margin-top: 12px, padding: 0 24px):
  · Text: "\"Aku capek jadi satu-satunya yang ngejar orang.\""
  · Style: body-sm italic, ink-muted.
  · Left quote mark large: 32px, IBM Blue, decorative.

  [Divider]: 1px hairline, margin: 16px 24px.

  [Need section] (padding: 0 24px):
  · Label: "Yang Dibutuhkan" — caption w600 uppercase ink.
  · Need: "Visibilitas ketimpangan tanpa konflik" — body-sm, ink.

  [Bottom tag row] (padding: 12px 24px, background: surface-1, margin-top: auto):
  · Tag: "Pengguna Primer" — caption, IBM Blue, 1px hairline border, padding 3px 8px, radius 0px.

─────────────────────────────
CARD 2 — DITO:
─────────────────────────────
  Top accent bar: 6px, color Amber #F59E0B.

  Avatar: 60×60px background #F59E0B, initials "DT".

  Name: "Dito" — card-title ink.
  Tag: "SI SIBUK" — eyebrow, color #D97706 (amber-dark).

  Quote: "\"Aku mau ngerjain tapi nggak tau mulai dari mana.\""
  Style: body-sm italic, ink-muted.

  Divider: 1px hairline.

  Need: "Kejelasan tugas + pengingat tanpa rasa malu" — body-sm ink.

  Bottom tag: "Pengguna Kritis" — caption, amber border, padding 3px 8px.

─────────────────────────────
CARD 3 — SINTA:
─────────────────────────────
  Top accent bar: 6px, color Teal #0D9488.

  Avatar: 60×60px background #0D9488, initials "SI".

  Name: "Sinta" — card-title ink.
  Tag: "SI BINGUNG" — eyebrow, color #0D9488.

  Quote: "\"Aku nggak mau keliatan bego nanya di grup.\""
  Style: body-sm italic, ink-muted.

  Divider: 1px hairline.

  Need: "Onboarding privat + kriteria selesai yang jelas" — body-sm ink.

  Bottom tag: "Pengguna Kritis" — caption, teal border.

─────────────────────────────
BOTTOM DEMOGRAPHIC BAR (below cards, centered):
─────────────────────────────
  Container: background surface-1, 1px hairline border, padding 10px 24px, radius 0px.
  Text: "Mahasiswa S1 aktif · Surabaya · Semua jurusan (T1) dan teknis (T2)"
  Style: body-sm, ink-muted, centered.
  · Bold "Surabaya" in ink.
  · "T1" and "T2" in IBM Blue w600.
```

---

## PROMPT 3 — Slide 3: Innovation Concept

> **Pesan dominan:** SatuTim bukan task manager — IBM Bob mengisi gap yang tidak bisa diisi Trello/Notion. Satu alur terpadu, bukan fragmentasi.
> **Visual utama:** Flow diagram 4 fase (IBM Bob highlighted) + tabel diferensiasi 3-kolom + 3 badge Tema 2.
> **Data kunci:** Tabel perbandingan ✗/✓; tiga penelitian (Oakley 2004, van Knippenberg 2004, Barrett 2007).

```
Create a 1920×1080px slide frame named "Slide 3 — Innovation Concept".
IBM Carbon Design System. 0px radius. IBM Blue accent only. No shadow. 1px hairlines.

═══════════════════════════════════════
BACKGROUND & FOOTER
═══════════════════════════════════════

Background: #FFFFFF.
Footer-Bar: bg #F4F4F4, 1px top hairline.
Left: "SatuTim" IBM Blue. Center: "Code the Future · Beginner Track · Tema 2" caption. Right: "03".

═══════════════════════════════════════
LAYOUT: stacked — header / flow diagram / table + badges
═══════════════════════════════════════

TOP HEADER (y: 60px, left-aligned, margin 80px):

  [EYEBROW]  "INNOVATION CONCEPT" — eyebrow style, IBM Blue.

  [HEADLINE]
  "SatuTim: IBM Bob yang Mengisi Gap — Bukan Sekadar Task Manager"
  Style: display-md (42px w300), ink. Max-width: 1100px. Margin-top: 12px.

FLOW DIAGRAM  (below headline, full-width minus 80px sides, margin-top: 28px):

  Four node boxes connected by thick arrows (→).
  Each box: width ~390px | height: ~130px | padding: 20px | radius: 0px.
  Arrows: thick 3px IBM Blue, arrowhead filled, connecting right edge → left edge of next.

  ┌─────────────────────────────────────────────────────────────────┐
  │  NODE STYLES:                                                    │
  │  Phases 1 & 2 (IBM Bob active) = IBM Blue bg + white text       │
  │  Phases 3 & 4 (user-driven)   = surface-1 bg + ink text        │
  └─────────────────────────────────────────────────────────────────┘

  Phase 1 — COCOKKAN (IBM Blue bg):
  · Icon placeholder: 28×28px, white, top-left of box.
  · Phase label: "COCOKKAN" — eyebrow white.
  · Line 1 (body-sm w600 white): "Upload CV"
  · Line 2 (caption white opacity-80): "IBM Bob ekstrak profil + gap analysis"
  · IBM Bob badge below box: "IBM BOB" — background #0043CE (blue-60), white caption w600,
    padding 3px 10px, radius 0px. Centered below box.

  Phase 2 — BAGI TUGAS (IBM Blue bg):
  · Icon: 28×28px white.
  · Label: "BAGI TUGAS"
  · Line 1: "IBM Bob split sub-tugas per role"
  · Line 2: "Definition of Done per anggota"
  · IBM Bob badge: same as above.

  Phase 3 — MONITOR (surface-1 bg):
  · Icon: 28×28px IBM Blue.
  · Label: "MONITOR" — eyebrow ink.
  · Line 1 (body-sm w600 ink): "Update 1-tap"
  · Line 2 (caption ink-muted): "Magic link WA → update tanpa buka app"

  Phase 4 — LOG (surface-1 bg):
  · Icon: 28×28px IBM Blue.
  · Label: "LOG"
  · Line 1: "Laporan kontribusi otomatis"
  · Line 2: "Portofolio Kolaborasi"

  Below diagram, centered italic caption ink-subtle:
  "Wizard 7 langkah · Setup ≤5 menit · Koordinator selesai onboarding sebelum anggota join"

BOTTOM ROW — two-column layout (left: table ~65%, right: badges ~35%):

  LEFT — COMPARISON TABLE (1px hairline outer + all cells, radius 0px):

  Table title above: "Apa yang hanya SatuTim bisa lakukan" — body-sm w600 ink. Margin-bottom: 8px.

  Header row (height 40px, background surface-1):
  · Col 1 (~45% width): "" (empty, row label column) — body-emph ink
  · Col 2 (~18%): "Trello / Notion" — body-sm ink-muted, centered
  · Col 3 (~18%): "Notion AI" — body-sm ink-muted, centered
  · Col 4 (~19%): background IBM Blue, "SatuTim ✓" — body-emph white, centered

  Row 1 (background canvas):
  · Col 1 (body-sm ink): "Gap analysis berbasis CV profil"
  · Col 2: "✗" — body-emph #DA1E28, centered
  · Col 3: "✗" — body-emph #DA1E28, centered
  · Col 4: "✓" — body-emph #24A148, centered

  Row 2 (background surface-1):
  · Col 1: "Pembagian peran per jenis tugas"
  · Col 2: "✗" | Col 3: "✗" | Col 4: "✓"

  Row 3 (background canvas):
  · Col 1: "Akuntabilitas + log kontribusi otomatis"
  · Col 2: "✗" | Col 3: "✗" | Col 4: "✓"

  Citation below table (caption italic ink-subtle):
  "Oakley et al. (2004) · van Knippenberg et al. (2004) · Barrett (2007)"

  RIGHT — THEME 2 BADGES + PORTFOLIO CALLOUT:

  Section label: "KECOCOKAN TEMA 2" — eyebrow IBM Blue.

  Three badge boxes stacked vertically (each: 1px IBM Blue border, padding 10px 16px, radius 0px, background canvas):

  Badge 1:
  · Icon: link/connect shape (20×20, IBM Blue)
  · Tag: "CONNECT" — caption w600 IBM Blue
  · Text (body-sm ink-muted): "Gap analysis → peran sesuai keahlian nyata"

  Badge 2:
  · Icon: collaboration shape
  · Tag: "COLLABORATE"
  · Text: "Pembagian adil, visibilitas, akuntabilitas bersama"

  Badge 3:
  · Icon: star/opportunity shape
  · Tag: "ENGAGE WITH OPPORTUNITIES"
  · Text: "Portofolio Kolaborasi → bukti untuk lomba & magang"
  · Sub (caption IBM Blue): "Barrett, 2007"
```

---

## PROMPT 4 — Slide 4: IBM Bob Utilization

> **Pesan dominan:** 23 sesi terdokumentasi, 3 mode digunakan, 2 koreksi besar — tim tidak pasif menerima output AI.
> **Visual utama:** 3 stat cards besar + bar chart mode + 2 correction blocks.
> **Data kunci:** LOG.md aktual — semua angka harus konsisten dengan `docs/bob-evidence/LOG.md`.

```
Create a 1920×1080px slide frame named "Slide 4 — IBM Bob Utilization".
IBM Carbon Design System. 0px radius. IBM Blue accent only. No shadow. 1px hairlines.

═══════════════════════════════════════
BACKGROUND & FOOTER
═══════════════════════════════════════

Background: #FFFFFF.
Footer-Bar: bg #F4F4F4, 1px top hairline.
Left: "SatuTim" IBM Blue. Center: "Code the Future · Beginner Track · Tema 2" caption. Right: "04".

═══════════════════════════════════════
LAYOUT: header / stat row / 2-column detail
═══════════════════════════════════════

TOP HEADER (y: 60px, margin 80px):

  [EYEBROW]  "IBM BOB UTILIZATION" — eyebrow IBM Blue.

  [HEADLINE]
  "IBM Bob di Setiap Langkah: 23 Sesi, 3 Mode, 2 Koreksi Besar"
  Style: display-md (42px w300), ink. Margin-top: 12px.

  [CONTEXT NOTE — small, inline after headline]
  "Komponen 40% dari total skor rubrik juri" — caption IBM Blue, 1px IBM Blue border, padding 3px 8px, radius 0px.

STAT ROW (below headline, horizontal, 3 equal stat cards, margin-top: 24px, margin sides: 80px, gap: 24px):

Each stat card: background canvas | 1px hairline border | padding: 24px | radius: 0px | no shadow.
Left edge: 4px IBM Blue vertical accent strip.

  Stat 1:
  · Number: "23" — display-lg (60px w300), IBM Blue.
  · Label: "Sesi Terdokumentasi" — body-sm w600, ink.
  · Sub: "LOG.md — semua baris terisi" — caption, ink-subtle.

  Stat 2:
  · Number: "3" — display-lg IBM Blue.
  · Label: "Mode IBM Bob" — body-sm w600 ink.
  · Sub: "Agent · Plan · Ask" — caption ink-subtle.
  · Three small mode badges inline: "Agent" (IBM Blue bg, white caption), "Plan" (#525252 bg, white caption), "Ask" (#525252 bg, white caption). Padding 2px 6px, radius 0px.

  Stat 3:
  · Number: "2" — display-lg IBM Blue.
  · Label: "Koreksi Besar Manusia" — body-sm w600 ink.
  · Sub: "Tim menolak rekomendasi Bob — bukti critical thinking" — caption ink-subtle.

TWO-COLUMN DETAIL  (below stat row, margin-top: 28px, margin sides: 80px, gap: 32px):

─────────────────────────────
LEFT COLUMN (~48% width):
─────────────────────────────

  [BAR CHART SECTION]
  Label above: "Distribusi Penggunaan Mode" — body-sm w600 ink.

  Horizontal bar chart — 3 bars (stacked vertically, gap: 12px):

  Bar 1 — Agent:
  · Row: label "Agent" (body-sm ink, 70px wide) + bar + count
  · Bar: background IBM Blue | height: 28px | width: ~88% of chart area | radius: 0px
  · Count: "21 sesi" — body-sm w600 IBM Blue, right of bar.

  Bar 2 — Plan:
  · Label: "Plan" (body-sm ink-muted) + bar (background #8C8C8C, width ~5%) + count "1 sesi" caption ink-subtle.

  Bar 3 — Ask:
  · Label: "Ask" + bar (background #8C8C8C, width ~5%) + count "1 sesi".

  Note below bars (caption italic ink-subtle):
  "Sesi 03 = Plan (evaluasi & perbandingan opsi) · Sesi 12 = Ask (panduan good practices)"

  [PROMPT EXAMPLE BOX] (margin-top: 20px):
  Container: background surface-1, 1px hairline border, padding: 16px, radius: 0px.
  · Label: "CONTOH PROMPT AKTUAL" — eyebrow IBM Blue, margin-bottom: 8px.
  · Prompt 1 (caption font-family IBM Plex Mono if available, else monospace, ink):
    "\"Identifikasi ≥8 masalah nyata mahasiswa Indonesia relevan Tema 2..."
  · Source (caption italic ink-subtle): "→ Menghasilkan plans/01-problem-discovery.md (Sesi 01)"
  · Divider: 1px hairline.
  · Prompt 2 (same style):
    "\"Pecah tugas berikut menjadi sub-tugas per role: [desc]. Sertakan DoD..."
  · Source: "→ Template F3 di PRD (Sesi 10)"

─────────────────────────────
RIGHT COLUMN (~48% width):
─────────────────────────────

  [CORRECTIONS HEADER]
  Label: "Koreksi Manusia — Bukti Critical Thinking" — body-sm w600 ink. Margin-bottom: 12px.

  CORRECTION BLOCK 1 (background surface-1, 1px hairline border, padding: 16px, radius: 0px, margin-bottom: 16px):

  · Tag: "KOREKSI #1 — SESI 06→07" — eyebrow IBM Blue.
  · Divider 1px hairline.
  · Row 1: "→" gray + caption ink-muted: "Bob rekomendasikan: Kickoff Pact + AI Mediator berbasis WA"
  · Row 2: "✗" error + caption #DA1E28 w600: "Tim tolak: fragmentasi WA adalah masalah, bukan solusi"
  · Row 3: "✓" success + caption #24A148 w600: "Diubah: Alur 4 fase terpadu dalam satu app"
  · Impact tag (caption, 1px IBM Blue border, padding 3px 8px): "Dampak: perubahan arsitektur produk"

  CORRECTION BLOCK 2 (same style):

  · Tag: "KOREKSI #2 — SESI 08"
  · Row 1: "→" + caption: "Bob tidak bahas: jenis tugas & skill imbalance dalam tim"
  · Row 2: "✗" + caption #DA1E28: "Tim tambah: kasus nyata 15 frontend / 5 backend"
  · Row 3: "✓" + caption #24A148 w600: "Diubah: Gap analysis menjadi inti Fase 1 (Cocokkan)"
  · Impact tag: "Dampak: logika inti sistem berubah"

  [QUALITY SUMMARY ROW] (below correction blocks, horizontal 3 mini-tags):
  Label: "Keputusan per sesi:" — caption ink-muted.
  Three tags inline (padding 3px 10px, radius 0px, caption w600):
  · "Diterima: 19 sesi" — background success #24A148, white text
  · "Diterima dengan catatan: 3 sesi" — background #F59E0B, white text
  · "Diubah: 1 sesi" — background IBM Blue, white text
```

---

## PROMPT 5 — Slide 5: Expected Impact

> **Pesan dominan:** Dampak yang bisa diukur dan mekanisme yang terbukti — bukan sekadar janji.
> **Visual utama:** 4 metric cards (2×2 grid) + before/after panel + quote box penutup emosional.
> **Data kunci:** 4 metrik dari `plans/06` §7; literatur: Johnson & Johnson (2009), Deci & Ryan (2000), Barrett (2007).

```
Create a 1920×1080px slide frame named "Slide 5 — Expected Impact".
IBM Carbon Design System. 0px radius. IBM Blue accent only. No shadow. 1px hairlines.

═══════════════════════════════════════
BACKGROUND & FOOTER
═══════════════════════════════════════

Background: #FFFFFF.
Footer-Bar: bg #F4F4F4, 1px top hairline.
Left: "SatuTim" IBM Blue. Center: "Code the Future · Beginner Track · Tema 2" caption. Right: "05".

═══════════════════════════════════════
LAYOUT: header / 2-column middle (metrics left, before-after right) / quote bar full-width
═══════════════════════════════════════

TOP HEADER (y: 60px, margin: 80px):

  [EYEBROW]  "EXPECTED IMPACT" — eyebrow IBM Blue.

  [HEADLINE]
  "Kolaborasi yang Adil, Terdokumentasi, dan Bisa Dibuktikan"
  Style: display-md (42px w300), ink. Margin-top: 12px.

  [MECHANISM NOTE — sub-headline]
  "Berbasis mekanisme yang terbukti — bukan klaim tanpa bukti"
  Style: body-lg (18px w400), ink-muted. Margin-top: 8px.

MIDDLE SECTION  (margin: 80px sides, margin-top: 24px, gap: 32px):

─────────────────────────────
LEFT COLUMN (~50%): METRIC GRID 2×2
─────────────────────────────

  Section label: "Sinyal Sukses yang Diusulkan" — body-sm w600 ink. Margin-bottom: 12px.

  2×2 grid of Stat-Cards, gap: 16px:

  Card 1 (top-left):
  · Left accent: 4px IBM Blue strip
  · Number: "< 15%" — display-md (42px w300), IBM Blue
  · Label: "Ketimpangan per Tim" — body-sm w600 ink
  · Sub: "Selisih terberat vs. teringan di ≥60% tim" — caption ink-subtle
  · Mechanism (caption IBM Blue): "↳ Akuntabilitas visible (Kerr & Bruun, 1983)"

  Card 2 (top-right):
  · Number: "≥ 80%"
  · Label: "Onboarding Selesai"
  · Sub: "Dalam 24 jam pertama"
  · Mechanism: "↳ Wizard 7 langkah ≤5 menit"

  Card 3 (bottom-left):
  · Number: "≥ 70%"
  · Label: "Sub-tugas Diupdate"
  · Sub: "Sebelum deadline internal"
  · Mechanism: "↳ Magic link 1-tap dari WA"

  Card 4 (bottom-right):
  · Number: "≥ 40%"
  · Label: "Room Capai Laporan"
  · Sub: "Laporan kontribusi final"
  · Mechanism: "↳ Portofolio Kolaborasi (Barrett, 2007)"

  Note below grid (caption italic ink-subtle, centered):
  "Sinyal sukses yang diusulkan — akan divalidasi setelah pilot pertama"

─────────────────────────────
RIGHT COLUMN (~46%): BEFORE/AFTER PANEL
─────────────────────────────

  Use Before-After-Panel component:
  Container: 1px hairline outer border, radius 0px.

  Header row (background surface-1, height 44px, 1px bottom hairline):
  · Left cell: "SEBELUM SatuTim" — eyebrow, color error (#DA1E28)
  · Vertical divider: 1px hairline
  · Right cell: "SESUDAH SatuTim" — eyebrow, color success (#24A148)

  Three comparison rows (alternating canvas/surface-1, each row: 44px min-height, padding 8px 16px):

  Row 1:
  · Left (caption ink-muted): "📱 Chat WA — koordinasi kacau"
  · Right (caption ink w600): "📊 Board terstruktur, semua terlihat"

  Row 2:
  · Left: "❓ Siapa ngerjain apa? Tidak jelas"
  · Right: "✅ Role eksplisit + DoD per anggota"

  Row 3:
  · Left: "😤 Anggota keras kerja, tidak bisa buktikan"
  · Right: "📄 Laporan kontribusi otomatis, bisa share"

  Below panel (caption italic ink-subtle, centered, margin-top: 8px):
  "Mekanisme: Johnson & Johnson (2009) · Deci & Ryan (2000 — SDT)"

QUOTE BAR (full-width, below middle section, margin: 0 80px, margin-top: 20px):

  Use Quote-Box component:
  Background: surface-1 | 1px hairline border | padding: 24px 36px | radius: 0px.
  Left accent: 4px full-height IBM Blue strip.

  Quote text (body-lg 18px w300 italic, ink):
  "\"Selama ini mahasiswa yang bekerja keras tidak punya cara membuktikannya.
   SatuTim mengisi gap itu — dengan AI yang mendukung, bukan mengawasi.\""

  Citation below (caption, ink-subtle, margin-top: 8px):
  "Johnson & Johnson (2009) · Deci & Ryan (2000) · Barrett (2007)"

  Small badge right-aligned (caption IBM Blue, 1px IBM Blue border, padding 3px 8px, radius 0px):
  "Tema 2: Connect · Collaborate · Engage ✓"
```

---

## CHECKLIST SEBELUM EXPORT

Jalankan checklist ini setelah semua 5 slide selesai:

```
KONSISTENSI VISUAL:
[ ] Semua border-radius = 0px — tidak ada rounded corner di manapun
[ ] Satu-satunya warna kromatik adalah IBM Blue #0F62FE (plus semantic success/error/warning)
[ ] Tidak ada drop shadow di komponen manapun
[ ] IBM Plex Sans digunakan di semua teks — tidak ada font lain
[ ] Footer konsisten di semua slide (01–05)
[ ] Display type (42px+) semua weight 300 — bukan bold

KONSISTENSI DATA:
[ ] Angka "23 sesi" di Slide 4 sesuai jumlah baris aktual LOG.md
[ ] Nama produk "SatuTim" konsisten di semua slide (bukan "Satu Tim" atau "satutim")
[ ] "IBM Bob" disebut minimal 1x di Slide 3 dan eksplisit di Slide 4
[ ] Semua sitasi ilmiah ada nama penulis + tahun (bukan URL)

KONTEN:
[ ] Tidak ada teks [ASUMSI] atau [PERLU-SUMBER] yang terlihat di slide
[ ] Tidak ada referensi plans/ yang terlihat di slide (hanya di catatan pembicara)
[ ] 3 kata kunci Tema 2 (Connect / Collaborate / Engage) muncul minimal di Slide 3

EXPORT:
[ ] Export semua slide sebagai PNG 1920×1080px (untuk preview)
[ ] Export semua slide sebagai PDF (untuk submission proposal)
[ ] Pastikan semua font ter-embed saat export PDF
```

---

## REFERENSI CEPAT — Data & Sitasi

| Angka/Klaim | Sumber | Digunakan di |
|-------------|--------|-------------|
| 78 studi meta-analisis | Karau & Williams, 1993 | Slide 1 |
| Norma penghindaran konflik | Tjosvold et al., 2009 | Slide 1 |
| Ketidakjelasan peran = loafing | Piezon & Ferree, 2008 | Slide 1 |
| Kejelasan peran → kurangi konflik | Oakley et al., 2004 | Slide 3 |
| Komplementaritas keahlian | van Knippenberg et al., 2004 | Slide 3 |
| Akuntabilitas visible → kurangi free-riding | Kerr & Bruun, 1983 | Slide 3, 5 |
| 5 elemen cooperative learning | Johnson & Johnson, 2009 | Slide 3, 5 |
| Portofolio digital → peluang kerja | Barrett, 2007 | Slide 3, 5 |
| SDT — monitoring vs. surveillance | Deci & Ryan, 2000 | Slide 5 |
| 23 sesi / 3 mode / 2 koreksi | LOG.md + corrections.md aktual | Slide 4 |
| Metrik < 15%, ≥ 80%, ≥ 70%, ≥ 40% | plans/06 §7 (sinyal sukses yang diusulkan) | Slide 5 |

---

*Dokumen ini adalah panduan prompt — bukan desain final. Setiap prompt dijalankan satu per satu di Figma AI atau plugin sejenis. Hasil perlu direview dan disesuaikan secara manual terutama untuk ukuran, jarak, dan proporsi antar elemen.*
