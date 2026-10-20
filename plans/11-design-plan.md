# 11 — Design Plan: Visualisasi 5 Slide Proposal SatuTim

> **Tujuan:** Mengkonversi konten `docs/slides-draft.md` menjadi 5 slide presentasi bergaya consulting hybrid (grid profesional + warna brand hidup + ikon ilustratif) menggunakan Figma.
> **Style:** Consulting deck — data-driven, grid ketat, tipografi hierarkis, infografik per slide, approachable bukan korporat kaku.
> **Ukuran:** 1920×1080px (16:9).
> **Sumber konten:** `docs/slides-draft.md` (final, sudah audit-compliant).

---

## Sub-Task 1 — Design System (Fondasi)

**Intent:** Membuat semua token desain sekali di awal sehingga semua slide konsisten tanpa pekerjaan ulang.

**Expected Outcomes:**
- Satu Figma page bernama `_Design System` berisi: color styles, text styles, component library, icon set.
- Semua slide berikutnya tinggal menggunakan komponen yang sudah ada.

**Todo List:**
- [ ] **Palet warna** — tetapkan 5 warna:
  - `Primary`: #2563EB (biru modern) atau sesuaikan ke brand SatuTim
  - `Accent`: #F59E0B (amber — hangat, approachable)
  - `Dark`: #1E293B (slate-900 untuk headline)
  - `Neutral`: #64748B (slate-500 untuk body text)
  - `Surface`: #F8FAFC (slate-50 untuk background)
- [ ] **Tipografi** — gunakan Plus Jakarta Sans (Google Fonts, gratis):
  - H1: 48px Bold — headline slide
  - H2: 28px SemiBold — sub-headline / label kartu
  - Body: 18px Regular — konten butir
  - Caption: 13px Regular, warna Neutral — sitasi, referensi
- [ ] **Grid** — 12 kolom, margin 80px kiri-kanan, 60px atas-bawah, gutter 24px
- [ ] **Komponen atom** yang dibuat sebagai Figma component:
  - `Badge` — pill warna Primary dengan teks putih (untuk label Tema 2)
  - `Card` — rounded 12px, background putih, shadow ringan (untuk persona, metrik)
  - `Divider` — garis 1px warna Neutral/30
  - `Footer bar` — full-width, tinggi 64px, berisi: logo kiri, nama program tengah, nomor slide kanan
  - `Section label` — teks kecil uppercase tracking-wide warna Primary (untuk label "SLIDE 1 — PROBLEM")
- [ ] **Icon set** — download Phosphor Icons (phosphoricons.com), pilih style `Regular`, siapkan 15–20 ikon relevan: users, chart-bar, warning, check-circle, link, file-text, arrow-right, clock, shield, star, brain, briefcase, graduation-cap, rocket, trophy

**Relevant Context:** `docs/slides-draft.md` §Saran Visual per slide

**Status:** `[ ] pending`

---

## Sub-Task 2 — Slide 1: Problem Identification

**Intent:** Membuat slide pembuka yang memukul dengan data ilmiah dan diagram lingkaran setan — membangkitkan pengakuan audiens sebelum solusi disebutkan.

**Expected Outcomes:**
- Headline: angka penelitian (78 studi) terlihat besar dan percaya diri
- Diagram siklus 5 node terlihat sebagai infografik, bukan teks biasa
- 3 celah masalah (peran/visibilitas/catatan) terlihat sebagai ikon + label
- Tidak ada referensi `plans/` atau label `[ASUMSI]` terlihat

**Layout:** 60/40 — teks kiri, diagram kanan

**Konten yang TAMPIL di slide:**
```
HEADLINE (H1):
"Tugas Kelompok: Semua Dapat Nilai Sama, Tapi Tidak Semua Bekerja Sama"

SUB-HEADLINE (H2, warna Primary):
"78 studi membuktikan: ini bukan pengecualian"

3 POIN KIRI (Body + ikon):
⚠ Social loafing terdokumentasi lintas budaya & jenis tugas (Karau & Williams, 1993)
🚫 Norma penghindaran konflik → anggota aktif ambil alih, bukan menegur (Tjosvold et al., 2009)
🔧 Tool yang ada (Trello, Notion) tidak bisa deteksi ketimpangan beban kerja

DIAGRAM KANAN: Lingkaran Setan (5 node)
Kelompok terbentuk → Tidak ada kesepakatan → Anggota pasif → Aktif ambil alih → Tidak ada konsekuensi → (loop)

3 CELAH BAWAH (ikon + label, horizontal):
📋 Tidak ada pembagian peran eksplisit
👁 Tidak ada visibilitas progres bersama
📊 Tidak ada catatan kontribusi individual
```

**Konten ke Catatan Pembicara (tidak tampil):**
- Kalimat retoris pembuka
- Sitasi panjang Slavin, Gillies, Piezon & Ferree
- Referensi `plans/`

**Todo List:**
- [ ] Buat frame 1920×1080, terapkan grid
- [ ] Pasang footer component dari Sub-Task 1
- [ ] Tulis headline + sub-headline
- [ ] Buat 3 poin kiri dengan ikon dari Phosphor
- [ ] Buat diagram siklus: 5 node lingkaran berputar, panah penghubung, warna node menggunakan Primary + Accent
- [ ] Buat 3 celah bawah: ikon besar (40px) + label di bawahnya, horizontal centered
- [ ] Tambahkan sitasi kecil (Caption style) di bawah masing-masing poin yang punya referensi

**Status:** `[ ] pending`

---

## Sub-Task 3 — Slide 2: Target Audience

**Intent:** Membuat 3 persona terasa nyata dan relatable — juri harus bisa "melihat diri sendiri" di salah satu kartu.

**Expected Outcomes:**
- 3 persona card berjajar horizontal, masing-masing punya warna aksen berbeda
- Setiap kartu berisi: avatar, nama, julukan, kutipan, kebutuhan utama
- Layout full-width yang bersih tanpa teks berlebihan

**Layout:** Full-width, 3 kartu horizontal

**Konten yang TAMPIL di slide:**
```
HEADLINE (H1):
"Tiga Orang dalam Setiap Kelompok"

KARTU 1 — RAHMA (warna Primary):
  [Avatar] Rahma — Si Penggerak
  "Aku capek jadi satu-satunya yang ngejar orang."
  Butuh: Visibilitas ketimpangan tanpa konflik

KARTU 2 — DITO (warna Accent):
  [Avatar] Dito — Si Sibuk
  "Aku mau ngerjain tapi nggak tau mulai dari mana."
  Butuh: Kejelasan tugas + pengingat tanpa rasa malu

KARTU 3 — SINTA (warna hijau/teal):
  [Avatar] Sinta — Si Bingung
  "Aku nggak mau keliatan bego nanya di grup."
  Butuh: Onboarding privat + kriteria selesai yang jelas

LABEL BAWAH (kecil, centered):
Mahasiswa S1 aktif · Surabaya · Semua jurusan (T1) dan teknis (T2)
```

**Todo List:**
- [ ] Buat frame, pasang footer
- [ ] Buat headline centered
- [ ] Buat 3 persona card sebagai Figma component instance:
  - Avatar: gunakan DiceBear atau UI Avatars dengan inisial nama
  - Warna header kartu berbeda per persona
  - Font H2 untuk nama, italic untuk kutipan, Caption untuk kebutuhan
- [ ] Kartu diberi shadow dan rounded corner 16px
- [ ] Tambahkan label demografis di bawah kartu

**Status:** `[ ] pending`

---

## Sub-Task 4 — Slide 3: Innovation Concept

**Intent:** Menjelaskan SatuTim dalam satu pandangan — alur 4 fase di atas, tabel diferensiasi di bawah, 3 badge Tema 2 di pojok.

**Expected Outcomes:**
- Alur 4 fase terlihat sebagai diagram yang mengalir, bukan list
- Tabel diferensiasi 3-kolom menunjukkan dengan jelas apa yang hanya SatuTim bisa lakukan
- 3 badge Tema 2 (Connect/Collaborate/Engage) terlihat sebagai bukti relevansi, bukan dekorasi
- IBM Bob disebut eksplisit minimal 1 kali

**Layout:** Alur di atas (full-width), tabel 3-kolom di bawah, badge kanan bawah

**Konten yang TAMPIL di slide:**
```
HEADLINE (H1):
"SatuTim: IBM Bob yang Mengisi Gap — Bukan Sekadar Task Manager"

DIAGRAM ALUR (full-width, 4 node + panah):
[Upload CV] → COCOKKAN → BAGI TUGAS → MONITOR → LOG
IBM Bob ekstrak   IBM Bob split    Update 1 tap    Laporan + Portofolio
profil + gap      sub-tugas + DoD  magic link WA   Kolaborasi

LABEL UX (kecil di bawah alur):
Wizard 7 langkah · Setup ≤5 menit · Anggota pasif update tanpa buka app

TABEL DIFERENSIASI (3 kolom):
                  Trello/Notion    Notion AI    SatuTim ✓
Gap analysis CV        ✗               ✗           ✓
Peran per jenis tugas  ✗               ✗           ✓
Akuntabilitas terlihat ✗               ✗           ✓

3 BADGE TEMA 2 (kanan bawah):
🔗 Connect   🤝 Collaborate   🎯 Engage with Opportunities
```

**Konten ke Catatan Pembicara:**
- Semua label [ADAPTASI-EKSPLORATIF]
- Kalimat demo mode
- Referensi plans/

**Todo List:**
- [ ] Buat frame, pasang footer
- [ ] Buat headline + sub-label IBM Bob
- [ ] Buat diagram alur horizontal 4 fase:
  - Setiap fase = rounded box + ikon besar (40px) + label fase + deskripsi kecil
  - Panah tebal warna Primary menghubungkan fase
  - Fase 1 & 2 highlight karena IBM Bob bekerja di sini
- [ ] Buat tabel 3-kolom:
  - Header kolom: Trello/Notion (abu) | Notion AI (abu) | SatuTim (Primary bold)
  - Row: 3 diferensiasi — centang hijau vs. silang merah
- [ ] Buat 3 badge Tema 2 dengan ikon + label, gunakan warna Primary, Accent, Teal
- [ ] Tambahkan label "Didukung penelitian: Oakley et al. (2004); van Knippenberg et al. (2004)" sebagai Caption kecil

**Status:** `[ ] pending`

---

## Sub-Task 5 — Slide 4: IBM Bob Utilization

**Intent:** Memberikan bukti konkret penggunaan Bob yang bisa diverifikasi juri — bukan klaim, tapi data LOG yang terlihat.

**Expected Outcomes:**
- Screenshot LOG.md terlihat (sebagai gambar, bukan teks)
- Distribusi 3 mode (Agent/Plan/Ask) terlihat sebagai visual, bukan teks biasa
- 2 koreksi manusia terlihat sebagai before/after yang dramatis
- Angka "23 sesi" terlihat besar dan percaya diri

**Layout:** Angka besar di kiri atas, screenshot LOG di kiri, distribusi mode + koreksi di kanan

**Konten yang TAMPIL di slide:**
```
HEADLINE (H1):
"IBM Bob di Setiap Langkah: 23 Sesi, 3 Mode, 2 Koreksi Besar"

ANGKA BESAR (kiri atas):
  23      3       2
 Sesi   Mode   Koreksi
         Bob   Manusia

DISTRIBUSI MODE (bar atau donut):
  Agent ████████████████ 21 sesi
  Plan  █                1 sesi
  Ask   █                1 sesi

SCREENSHOT LOG.MD (kiri bawah):
  [Gambar tabel LOG — diperkecil, terlihat terisi]

KOREKSI MANUSIA (kanan, 2 blok):
  #1: Bob rekomendasikan → WA-based solution
      Tim tolak karena → fragmentasi bukan solusi
      Diubah menjadi → Alur 4 fase terpadu

  #2: Bob tidak tahu → jenis tugas & skill imbalance
      Tim tambahkan → kasus 15 frontend / 5 backend
      Diubah menjadi → Gap analysis T2 sebagai inti F2

CONTOH PROMPT (kecil, monospace):
  "Identifikasi ≥8 masalah mahasiswa Indonesia relevan Tema 2..."
```

**Todo List:**
- [ ] Buat frame, pasang footer
- [ ] Buat headline
- [ ] Buat 3 angka besar sebagai stat card: angka (Bold 64px) + label (Caption)
- [ ] Buat bar chart horizontal 3 mode: Agent (panjang) / Plan / Ask (pendek) dengan warna berbeda
- [ ] Screenshot LOG.md dari file ini — crop ke area tabel saja, beri border tipis
- [ ] Buat 2 blok koreksi manusia: format "Before → After" dengan panah, background abu untuk "Before", background Primary/10 untuk "After"
- [ ] Tambahkan 1 contoh prompt dalam kotak monospace kecil

**Status:** `[ ] pending`

---

## Sub-Task 6 — Slide 5: Expected Impact

**Intent:** Menutup dengan dampak yang terasa nyata dan bisa diukur — bukan hanya janji, tapi mekanisme yang didukung teori.

**Expected Outcomes:**
- 4 metrik terlihat sebagai big number card yang impactful
- Before/after split panel terlihat intuitif tanpa penjelasan panjang
- Kalimat dampak final terasa emosional dan mudah diingat

**Layout:** Big number grid (2×2) di kiri, before/after di kanan, kalimat dampak di bawah full-width

**Konten yang TAMPIL di slide:**
```
HEADLINE (H1):
"Kolaborasi yang Adil, Terdokumentasi, dan Bisa Dibuktikan"

4 METRIK CARD (grid 2×2):
  < 15%          ≥ 80%
  Ketimpangan    Onboarding
  per tim        selesai 24j

  ≥ 70%          ≥ 40%
  Sub-tugas      Room capai
  diupdate       laporan akhir

BEFORE/AFTER (split panel):
  SEBELUM SatuTim          SESUDAH SatuTim
  📱 Chat WA kacau         📊 Board terstruktur
  ❓ Siapa ngerjain apa?   ✅ Semua terlihat
  😤 Tidak bisa dibuktikan  📄 Laporan kontribusi

KALIMAT DAMPAK (centered, italic, besar):
  "Selama ini mahasiswa yang bekerja keras tidak punya cara
   membuktikannya. SatuTim mengisi gap itu —
   dengan AI yang mendukung, bukan mengawasi."

LABEL LITERATUR (Caption kecil):
  Berbasis: Johnson & Johnson (2009) · Deci & Ryan (2000) · Barrett (2007)
```

**Todo List:**
- [ ] Buat frame, pasang footer
- [ ] Buat headline
- [ ] Buat 4 metrik card: angka besar Bold 56px + label Caption + ikon kecil
- [ ] Buat before/after split panel: 2 kolom setara, divider tengah, ikon + teks singkat per baris
- [ ] Buat kalimat dampak: font italic Medium 22px, warna Dark, centered, beri latar belakang warna Surface sedikit berbeda
- [ ] Tambahkan label literatur kecil di bawah kalimat dampak

**Status:** `[ ] pending`

---

## Sub-Task 7 — Review & Export

**Intent:** Memastikan semua slide konsisten, tidak ada kebocoran teks internal, dan siap dikumpulkan.

**Expected Outcomes:**
- Semua 5 slide lolos checklist kualitas
- File di-export ke PDF (untuk submission) dan PNG per slide (untuk preview)

**Checklist Kualitas:**
- [ ] Tidak ada teks `(plans/...)` atau `[ASUMSI]` terlihat di slide manapun
- [ ] Setiap slide punya footer (logo + nama program + nomor)
- [ ] Setiap slide punya minimal 1 elemen visual dominan (diagram/chart/kartu)
- [ ] Warna konsisten — tidak ada warna yang di-paste manual di luar design system
- [ ] Sitasi ilmiah terlihat minimal di Slide 1 dan Slide 3 (ukuran Caption)
- [ ] Angka "23 sesi" di Slide 4 konsisten dengan LOG.md aktual
- [ ] Ukuran font terbesar adalah headline, tidak ada body text yang lebih besar dari H2
- [ ] Kontras warna teks/background memenuhi WCAG AA (rasio minimal 4.5:1)

**Export:**
- [ ] Export semua slide sebagai PDF (untuk submission proposal)
- [ ] Export per slide sebagai PNG 1920×1080px (untuk preview atau screenshot)

**Status:** `[ ] pending`

---

## Aset yang Harus Disiapkan Sebelum Membuka Figma

| Aset | Sumber | Wajib/Opsional |
|------|--------|:--------------:|
| Font: Plus Jakarta Sans | fonts.google.com/specimen/Plus+Jakarta+Sans | 🔴 Wajib |
| Icon set: Phosphor Icons | phosphoricons.com → download SVG pack | 🔴 Wajib |
| Avatar persona (3 buah) | ui-avatars.com atau dicebear.com/styles/thumbs | 🔴 Wajib |
| Screenshot LOG.md | Screenshot file dari VS Code / browser | 🔴 Wajib (S4) |
| Logo IBM Bob | Materi resmi program Code the Future | 🟡 Penting |
| Warna HEX final | Konfirmasi dengan tim sebelum mulai | 🔴 Wajib |

---

## Urutan Pengerjaan yang Direkomendasikan

```
1. Siapkan aset (font, ikon, avatar, screenshot LOG)
2. Sub-Task 1: Design System di Figma → selesai dulu sebelum slide manapun
3. Sub-Task 4: Slide 4 (Bob) → paling banyak aset unik, kerjakan saat energi tinggi
4. Sub-Task 2: Slide 1 (Problem) → kerjakan setelah S4 karena layout lebih standar
5. Sub-Task 3: Slide 3 (Concept) → paling kompleks secara layout
6. Sub-Task 5: Slide 2 (Audience) → paling visual, bisa cepat
7. Sub-Task 6: Slide 5 (Impact) → paling emosional, kerjakan terakhir
8. Sub-Task 7: Review + Export
```

---

*Plan ini adalah panduan desain — bukan kode. Implementasi dilakukan di Figma mengikuti urutan sub-task di atas. Setiap sub-task selesai, update status dari `[ ] pending` → `[x] done`.*
