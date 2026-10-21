# Cara Menjalankan Figma Script — SatuTim Slide Deck

## Langkah-langkah

### 1. Buka file Figma
https://www.figma.com/design/jjqlLvNJWD9SBJnV8J6CXQ/SatuTim-CodeTheFuture

### 2. Buka Figma Console
- **Menu atas** → Plugins → Development → **Open console**
- Atau shortcut: `Ctrl + Alt + I` (Windows) / `Cmd + Option + I` (Mac)

> Console adalah panel developer di bagian bawah layar Figma, mirip browser DevTools.

### 3. Pastikan font IBM Plex Sans tersedia
- Di Figma, klik **Resources** (ikon grid kiri atas) → **Fonts**
- Cari "IBM Plex Sans" — jika belum ada, download dari:
  https://fonts.google.com/specimen/IBM+Plex+Sans
- Install font di komputer kamu, restart Figma

### 4. Jalankan script

**Opsi A — Semua 5 slide sekaligus (RECOMMENDED):**
1. Buka file: `figma-script/ALL-SLIDES-master.js`
2. Copy semua isinya (Ctrl+A → Ctrl+C)
3. Paste di Figma Console
4. Tekan **Enter**
5. Tunggu ~20–30 detik
6. Semua 5 slide akan muncul berjajar di Page 1

**Opsi B — Satu per satu (jika ada error di satu slide):**
```
slide1-problem.js    → Slide 1: Problem Identification
slide2-audience.js   → Slide 2: Target Audience
slide3-innovation.js → Slide 3: Innovation Concept
slide4-bob.js        → Slide 4: IBM Bob Utilization
slide5-impact.js     → Slide 5: Expected Impact
```

### 5. Setelah script selesai
- Semua slide muncul di **Page 1** berjajar horizontal kiri ke kanan
- Viewport otomatis zoom-to-fit semua slide
- Cek console: harus ada pesan `🎉 Semua 5 slide SatuTim berhasil dibuat!`

---

## Struktur file yang dibuat

```
Page 1
├── Slide 1 — Problem Identification  (x: 0)
├── Slide 2 — Target Audience          (x: 1980)
├── Slide 3 — Innovation Concept       (x: 3960)
├── Slide 4 — IBM Bob Utilization      (x: 5940)
└── Slide 5 — Expected Impact          (x: 7920)
```

Setiap slide: **1920×1080px**, footer "SatuTim | Code the Future · Beginner Track · Tema 2 | 01–05"

---

## Troubleshooting

**Font tidak ditemukan / teks kosong:**
- Install IBM Plex Sans di komputer → restart Figma → jalankan ulang script

**Error: "Cannot read properties of undefined":**
- Refresh halaman Figma (F5) → buka console ulang → jalankan ulang

**Script berjalan tapi slide tidak muncul:**
- Cek apakah kamu di Page yang benar (Page 1)
- Scroll canvas ke koordinat x: 0, y: 0

**Slide muncul tapi teks tidak terbaca / kecil:**
- Ini normal — zoom in ke tiap slide untuk melihat detail
- Saat export 1920×1080 semua teks terbaca dengan benar

---

## Setelah slides selesai

1. **Review** setiap slide — sesuaikan spacing atau teks jika perlu
2. **Export**:
   - Select semua 5 frame → klik kanan → **Export**
   - Format: **PNG** 2x (untuk preview) atau **PDF** (untuk submission)
3. **Screenshot LOG.md** untuk dimasukkan ke Slide 4 secara manual sebagai gambar

---

*Script ini menggunakan Figma Plugin API via Console — tidak perlu install plugin apapun.*
