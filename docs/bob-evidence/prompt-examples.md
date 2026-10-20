# Contoh Prompt IBM Bob per Use Case — SatuTim

> **Tujuan:** Mendokumentasikan prompt yang dirancang untuk setiap use case AI di dalam produk SatuTim. Digunakan sebagai bukti "efektivitas prompt" untuk sub-kriteria IBM Bob Utilization (40% dari total skor).
>
> Setiap prompt mencantumkan: mode Bob yang dipakai, tujuan, prompt lengkap, output yang diharapkan, dan catatan teknis.

---

## USE CASE 1 — Ekstraksi Profil dari CV (F1)

**Mode Bob:** Agent  
**Tujuan:** Membaca teks dari CV mahasiswa (sudah di-extract dari PDF) dan menghasilkan profil terstruktur yang siap digunakan untuk gap analysis.

### Prompt

```
Kamu adalah asisten yang membantu menganalisis CV mahasiswa untuk keperluan pembagian peran dalam tugas kelompok.

Dari teks CV berikut, ekstrak informasi ini:
1. Keahlian teknis (contoh: Python, Figma, public speaking, analisis data)
2. Pengalaman organisasi atau kepanitiaan (nama, peran, tahun jika ada)
3. Indikasi gaya kerja yang bisa diinferens dari aktivitas yang disebutkan
   (contoh: "koordinatif" jika sering jadi ketua, "teknis" jika banyak proyek coding)
4. Ketersediaan waktu (jika disebutkan, misal: "paruh waktu", "aktif di X organisasi")

Jika informasi tidak tersedia, isi dengan "tidak disebutkan" — jangan menebak.
Beri confidence level per field: YAKIN / KURANG-YAKIN / TIDAK-ADA-DATA

Format output sebagai JSON:
{
  "keahlian_teknis": [{"skill": "...", "confidence": "..."}],
  "pengalaman_organisasi": [{"nama": "...", "peran": "...", "tahun": "...", "confidence": "..."}],
  "gaya_kerja": {"inferensi": "...", "dasar": "...", "confidence": "..."},
  "ketersediaan": {"status": "...", "confidence": "..."}
}

Teks CV:
[TEKS CV MAHASISWA DISISIPKAN DI SINI]
```

**Output yang diharapkan:** JSON terstruktur dengan confidence level per field — field dengan TIDAK-ADA-DATA akan ditampilkan sebagai 🔴 di UI dan wajib diisi pengguna sebelum lanjut.

**Catatan teknis:** PDF CV perlu di-extract teksnya dulu (via pdf-parse atau pdfjs) sebelum dikirim ke Bob. CV berbasis gambar (scan) tidak bisa diproses — perlu fallback ke 3 pertanyaan manual.

---

## USE CASE 2 — Gap Analysis Skill Tim (F2)

**Mode Bob:** Agent  
**Tujuan:** Membandingkan profil skill anggota tim dengan role yang dibutuhkan untuk jenis tugas tertentu, lalu menghasilkan laporan gap dan 3 opsi adaptasi.

### Prompt

```
Kamu adalah fasilitator pembagian peran dalam tugas kelompok mahasiswa.

Diberikan:
- Jenis tugas: [T1: Makalah / T2: Proyek IT / T6: Kustom]
- Deskripsi tugas: [DESKRIPSI TUGAS DARI DOSEN]
- Profil anggota tim:
  [DAFTAR ANGGOTA DAN PROFIL MEREKA DARI EKSTRAKSI CV]

Role yang dibutuhkan untuk jenis tugas ini:
[DAFTAR ROLE DARI TEMPLATE — diisi oleh sistem]

Lakukan:
1. Periksa apakah setiap role yang dibutuhkan bisa dipenuhi oleh minimal satu anggota
2. Tandai role yang tidak terpenuhi sebagai GAP
3. Jika ada gap, berikan tepat 3 opsi adaptasi yang realistis:
   - Opsi A: redistribusi beban (anggota yang ada mengambil role tambahan)
   - Opsi B: penyesuaian scope tugas
   - Opsi C: rekomendasi untuk diskusi dengan dosen
4. Jika tidak ada gap, konfirmasi "Komposisi tim cocok untuk tugas ini"

Format output:
{
  "gap_ditemukan": true/false,
  "role_terpenuhi": [...],
  "role_tidak_terpenuhi": [...],
  "opsi_adaptasi": [
    {"opsi": "A", "label": "...", "deskripsi": "...", "konsekuensi": "..."},
    {"opsi": "B", "label": "...", "deskripsi": "...", "konsekuensi": "..."},
    {"opsi": "C", "label": "...", "deskripsi": "...", "konsekuensi": "..."}
  ]
}
```

**Output yang diharapkan:** JSON dengan gap analysis dan 3 opsi terformat — UI menampilkan opsi sebagai kartu pilihan yang bisa diklik tim.

**Catatan teknis:** Template role per jenis tugas disimpan di database sistem (bukan di-generate ulang tiap request) untuk konsistensi dan kecepatan.

---

## USE CASE 3 — Dekomposisi Tugas ke Sub-tugas (F3)

**Mode Bob:** Plan  
**Tujuan:** Mengubah deskripsi tugas dari dosen menjadi daftar sub-tugas yang konkret per role, dengan Definition of Done dan estimasi jam.

### Prompt

```
Kamu adalah project planner untuk tugas kelompok mahasiswa.

Diberikan:
- Jenis tugas: [T1: Makalah / T2: Proyek IT]
- Deskripsi tugas dari dosen: [DESKRIPSI]
- Role yang sudah dikonfirmasi tim: [DAFTAR ROLE DAN ANGGOTA YANG DITUGASKAN]
- Deadline tugas: [TANGGAL]
- Hari kerja tersisa: [ANGKA]

Buat rencana pembagian sub-tugas dengan ketentuan:
1. Setiap sub-tugas harus di-assign ke tepat satu role
2. Setiap sub-tugas harus memiliki Definition of Done yang spesifik dan bisa diverifikasi
   (contoh buruk: "selesai ditulis" — contoh baik: "draft bab 2 minimal 800 kata, sudah masuk Google Docs bersama, sudah di-review oleh editor")
3. Estimasi jam per sub-tugas harus realistis untuk mahasiswa (bukan estimasi profesional)
4. Total estimasi jam per anggota harus seimbang — selisih tidak lebih dari 30%
5. Berikan deadline internal per sub-tugas berdasarkan urutan logis pengerjaannya

Format output sebagai array JSON:
[
  {
    "id": "ST-01",
    "nama": "...",
    "role": "...",
    "anggota": "...",
    "definition_of_done": "...",
    "estimasi_jam": [angka],
    "deadline_internal": "YYYY-MM-DD",
    "bergantung_pada": ["ST-XX"] atau []
  }
]

Di akhir, sertakan ringkasan distribusi beban:
{
  "distribusi": [{"anggota": "...", "total_jam": [angka], "persentase": [angka]}],
  "peringatan": "..." atau null
}
```

**Output yang diharapkan:** Array sub-tugas terstruktur + distribusi beban. Jika distribusi tidak seimbang, sistem otomatis tampilkan peringatan F4.

**Catatan teknis:** Output ini langsung dipakai untuk populate board. ID sub-tugas (ST-01, ST-02, dll.) digunakan sebagai referensi untuk magic link dan log aktivitas.

---

## USE CASE 4 — Generate Laporan Kontribusi (F6)

**Mode Bob:** Agent  
**Tujuan:** Mengubah log aktivitas mentah menjadi laporan kontribusi yang bisa dibaca dosen dan digunakan sebagai Portofolio Kolaborasi.

### Prompt

```
Kamu adalah asisten yang membuat laporan kontribusi tim untuk tugas kelompok mahasiswa.

Diberikan log aktivitas:
[LOG AKTIVITAS: timestamp, anggota, sub-tugas, tindakan (update status / upload / komentar)]

Dan data tim:
- Nama tugas: [...]
- Jenis tugas: [...]
- Tanggal mulai: [...] | Tanggal selesai: [...]
- Anggota dan role: [...]

Buat laporan dengan bagian berikut:
1. RINGKASAN EKSEKUTIF (2-3 kalimat): gambaran umum proses kerja tim
2. KONTRIBUSI PER ANGGOTA: tabel dengan kolom (nama, role, sub-tugas yang diselesaikan, estimasi beban %)
3. DISTRIBUSI BEBAN: apakah pembagian adil? flag jika selisih > 20%
4. CATATAN PENTING: hal-hal yang perlu diketahui (misal: ada anggota yang join terlambat, ada sub-tugas yang di-reset, dll.)

Tone: profesional tapi tidak kaku — laporan ini dibaca dosen, bukan auditor.
Panjang: maksimal satu halaman A4 jika dicetak.

Sertakan juga versi ringkas untuk "Portofolio Kolaborasi" per anggota (1 paragraf):
"[Nama] berkontribusi sebagai [role] dalam tugas [jenis tugas] berjudul [nama tugas].
Kontribusi utama: [daftar sub-tugas]. Persentase beban: [X]% dari total tim."
```

**Output yang diharapkan:** Laporan terformat dalam teks/markdown + versi ringkas Portofolio per anggota. UI me-render ini sebagai PDF yang bisa di-download.

---

## USE CASE 5 — Panduan Adaptasi Gap Skill (Ask Mode)

**Mode Bob:** Ask  
**Tujuan:** Menjawab pertanyaan kontekstual dari tim ketika mereka menghadapi situasi yang tidak ditangani oleh template (misal: tugas baru yang tidak masuk T1 atau T2, atau gap skill yang tidak biasa).

### Contoh Prompt Interaktif

**Situasi:** Tim memilih T2 (Proyek IT) tapi tidak ada yang pernah membuat backend. Bob sudah menawarkan 3 opsi, tim memilih Opsi A (belajar backend). Pengguna bertanya lebih lanjut.

```
[Konteks yang sudah dikirim sistem]
Tim ini mengerjakan Proyek IT (web app).
Tidak ada anggota yang berlatar backend developer.
Tim memilih: "Salah satu anggota akan belajar backend."

[Pertanyaan pengguna]
Anggota mana yang paling cocok belajar backend? Dan task backend apa yang paling mudah dimulai untuk pemula?
```

**Output yang diharapkan:** Rekomendasi berdasarkan profil CV anggota yang sudah diekstrak, plus daftar task backend entry-level yang bisa dikerjakan dalam konteks proyek mahasiswa.

---

## USE CASE 6 — Estimasi Ulang Porsi (F4, interaktif)

**Mode Bob:** Agent  
**Tujuan:** Ketika tim ingin merevisi distribusi sub-tugas setelah melihat verifikasi porsi, Bob membantu menghitung ulang tanpa membuat seluruh board dari nol.

### Prompt

```
Distribusi beban saat ini:
[DAFTAR ANGGOTA DAN ESTIMASI JAM MEREKA]

Anggota [NAMA] menanggung [X]% beban — melebihi threshold 40%.
Bantu redistribusi dengan cara yang paling masuk akal:
1. Sub-tugas mana milik [NAMA] yang paling mudah dipindah ke anggota lain?
2. Anggota mana yang paling bisa menerima tambahan beban?
3. Tampilkan distribusi setelah redistribusi yang kamu rekomendasikan.

Pertimbangkan: skill anggota, deadline sub-tugas, dan dependensi antar sub-tugas.
```

---

## Catatan untuk Tim

1. **Semua prompt di atas perlu diuji** sebelum Build Week dimulai — buka IBM Bob dalam mode yang sesuai dan coba prompt dengan data contoh. Catat hasilnya di LOG.md.

2. **Prompt engineering adalah iterasi** — jika output pertama kurang tepat, tambahkan constraint di prompt (misal: "jangan gunakan istilah teknis", "maksimal 100 kata per opsi") dan coba lagi.

3. **Dokumentasikan setiap percobaan** di LOG.md — juri menilai *efektivitas prompt*, yang berarti mereka ingin melihat bahwa tim sudah mencoba, mengevaluasi, dan menyempurnakan promptnya.

4. **Fallback jika Bob gagal:** setiap use case harus punya fallback manual — misalnya jika ekstraksi CV gagal (CV berbasis gambar), tampilkan langsung form 3 pertanyaan. Jangan biarkan sistem crash diam-diam.
