# 06 — Concept PRD: SatuTim

> **Landasan dokumen ini:**
> - `[FAKTA-BRIEF]` = dinyatakan eksplisit di `docs/brief.md`
> - `[ASUMSI]` = belum dikonfirmasi data lapangan
> - `[PERLU-SUMBER]` = butuh bukti primer
> - `[ADAPTASI-EKSPLORATIF]` = diadaptasi dari praktik yang ada, tapi efektivitas dalam konteks mahasiswa Indonesia belum dibuktikan
>
> Referensi akar masalah menggunakan kode dari `plans/02-problem-framing.md` §3A: [P] = Psikologis, [S] = Struktural, [K] = Kultural, [I] = Informasional.

---

## 1. Value Proposition

> **SatuTim membantu kelompok mahasiswa membagi tugas secara adil berdasarkan profil nyata tiap anggota, memantau progres bersama tanpa harus terus-menerus mengirim pesan, dan menghasilkan catatan kontribusi yang bisa dipertanggungjawabkan — semua dalam satu tempat.**

**Catatan framing:** Kalimat ini sengaja tidak menyebut "AI" di depan karena yang dirasakan pengguna adalah hasilnya (pembagian adil, visibilitas, catatan), bukan teknologinya. Peran AI ada di balik layar. [ASUMSI tentang preferensi framing pengguna mahasiswa]

---

## 2. Taksonomi Jenis Tugas & Pilihan MVP

### 2.1 Taksonomi Berdasarkan Luaran

Dasar klasifikasi: **apa yang diserahkan ke dosen sebagai hasil akhir**. Luaran menentukan jenis peran, cara memecah sub-tugas, dan indikator selesai yang bisa dibuat spesifik.

| Kode | Nama | Luaran Utama | Ciri Khas Peran | Frekuensi* | Gap Analysis Kritis? |
|------|------|-------------|----------------|:----------:|:-------------------:|
| T1 | **Makalah / Laporan Tertulis** | Dokumen teks (makalah, laporan, paper) | Relatif homogen — semua bisa menulis, gap di kapasitas bukan skill teknis | ★★★★★ | Jarang |
| T2 | **Proyek / Prototipe** | Artefak fungsional (aplikasi, sistem, desain produk) | Heterogen — frontend ≠ backend ≠ desainer ≠ tester | ★★★ | **Sangat sering** |
| T3 | **Presentasi / Seminar** | Slide + performa verbal | Campuran — riset konten + desain visual + pembawaan | ★★★★ | Jarang–Sedang |
| T4 | **Studi Kasus / Analisis** | Laporan analitis dengan data primer/sekunder | Linear per tahap — pengumpulan → analisis → interpretasi | ★★★★ | Sedang |
| T5 | **Proyek Lapangan / Observasi** | Data lapangan + laporan | Bergantung lokasi dan metode — sangat variabel | ★★ | Sedang |
| T6 | **Kustom** | Ditentukan pengguna | Semua field diisi manual oleh koordinator | — | Bergantung isian |

*Frekuensi = estimasi lintas jurusan di kampus Surabaya [PERLU-SUMBER — tidak ada data aktual yang diverifikasi]

### 2.2 Pilihan untuk MVP: T1 + T2 + T6

**T1 — Makalah/Laporan** ✓ dipilih karena:
- Paling universal: hampir semua jurusan, semua semester memberikan jenis tugas ini [ASUMSI]
- Template role predictable dan stabil → bisa diimplementasikan solid dalam 1 hari build
- Memvalidasi sistem di audiens terluas dan memberi fondasi logika inti

**T2 — Proyek/Prototipe** ✓ dipilih karena:
- Gap analysis paling kritis dan paling dramatis untuk demo (kasus imbalance frontend/backend)
- Role paling heterogen → menunjukkan nilai diferensiasi sistem secara paling kuat
- Relevan langsung untuk pengguna di kelas teknis/informatika

**T6 — Kustom** ✓ dipilih karena:
- Mencegah sistem terasa "tidak berguna" bagi tugas yang tidak masuk T1 atau T2
- Memberi koordinator kendali penuh tanpa membongkar logika sistem
- Implementasinya ringan: form terbuka, AI tidak generate template otomatis

### 2.3 Jenis yang Dikeluarkan dari MVP — Alasan

| Kode | Alasan Dikeluarkan |
|------|--------------------|
| T3 — Presentasi | Role-nya tumpang tindih besar dengan T1 (riset + konten). Bisa ditangani T6 jika dibutuhkan. Menambah T3 di Build Week hanya menduplikasi logika T1 dengan variasi kecil. |
| T4 — Studi Kasus | Pola role mirip T1 tapi dengan lapisan analisis bertahap. Layak sebagai T1-plus post-MVP; belum cukup beda untuk membenarkan template terpisah dalam 3 hari. |
| T5 — Proyek Lapangan | Terlalu variabel: pola sub-tugas sangat bergantung pada lokasi, jumlah titik observasi, dan metode — AI tidak bisa generate template yang berguna tanpa informasi konteks yang sangat spesifik. |

---

## 3. Detail per Jenis Tugas: Fase, Peran, Ritme, Kriteria Selesai

### 3.1 T1 — Makalah / Laporan Tertulis

#### Fase

| Fase | Nama | Yang Terjadi |
|------|------|-------------|
| 1 | Cocokkan | CV diekstrak → profil diverifikasi → pilih T1 → gap check (biasanya hijau) → role di-assign |
| 2 | Bagi Tugas | Koordinator paste outline/deskripsi dosen → AI bagi per bab/bagian → estimasi jam → verifikasi porsi → konfirmasi |
| 3 | Monitor | Update status per sub-tugas → board terlihat semua → notifikasi privat jika ada yang tertinggal |
| 4 | Log | Laporan kontribusi otomatis → opsional share ke dosen |

#### Peran (setiap peran **menghasilkan sesuatu** yang konkret)

| Peran | Luaran yang Dihasilkan | Cara Penugasan |
|-------|----------------------|----------------|
| **Penulis Bab [n]** | Draft bab lengkap yang masuk dokumen bersama | AI assign per bab, distribusi merata berdasarkan estimasi panjang bab |
| **Pencari Referensi** | Daftar sumber terformat sesuai gaya sitasi yang disepakati | AI assign ke anggota dengan beban penulisan paling ringan |
| **Editor / Reviewer** | Dokumen dengan komentar substantif + catatan revisi | AI assign ke anggota yang bukan penulis bab yang sama; rotasi jika memungkinkan |
| **Layouter / Formatter** | File final yang siap dikumpulkan (format, daftar isi, halaman) | AI assign ke anggota terakhir yang menyelesaikan tugasnya |

> **Catatan:** Untuk tim kecil (2–3 orang), satu anggota bisa memegang lebih dari satu peran. AI menggabungkan peran dan menyesuaikan estimasi waktu secara otomatis.

#### Ritme Check-in

| Waktu | Tindakan |
|-------|---------|
| Hari pertama setelah setup | Semua anggota konfirmasi sudah melihat board dan memahami tugasnya |
| H-[n/2] dari deadline | AI kirim pengingat privat: "Apakah kamu sudah mulai mengerjakan bagianmu?" |
| H-2 dari deadline | AI kirim notifikasi privat ke koordinator jika ada sub-tugas belum "Selesai" |
| Setelah submit | Koordinator tandai tugas selesai → sistem generate laporan kontribusi |

#### Kriteria Selesai per Sub-tugas

| Sub-tugas | Kriteria Selesai |
|-----------|-----------------|
| Draft bab | Teks lengkap sudah masuk dokumen bersama + anggota tandai "Selesai" di app |
| Daftar referensi | Minimal jumlah referensi yang disepakati + format sitasi konsisten |
| Review/edit | Semua bab sudah dikomentari + komentar utama sudah direspons penulis |
| Layout final | File final sesuai ketentuan dosen + semua anggota sudah lihat versi akhir |

---

### 3.2 T2 — Proyek / Prototipe

#### Fase

| Fase | Nama | Yang Terjadi |
|------|------|-------------|
| 1 | Cocokkan | CV diekstrak → pilih T2 → **gap analysis kritis** → opsi adaptasi jika ada gap → role di-assign atau scope di-adjust |
| 2 | Bagi Tugas | Koordinator paste deskripsi proyek → AI bagi per komponen fungsional → estimasi jam per role → verifikasi porsi → konfirmasi |
| 3 | Monitor | Update status per komponen → board terlihat semua → alert jika komponen kritis (blocking komponen lain) tertinggal |
| 4 | Log | Laporan kontribusi per role → persentase komponen yang diselesaikan per anggota → opsional share ke dosen |

#### Peran

| Peran | Luaran yang Dihasilkan | Cara Penugasan |
|-------|----------------------|----------------|
| **Project Manager** | Jadwal sprint internal + catatan keputusan | AI assign ke anggota paling generalis (inferensi dari CV) |
| **UI/UX Designer** | Wireframe/mockup semua halaman yang sudah di-review developer | AI assign ke anggota dengan pengalaman desain/visual (inferensi dari CV) |
| **Frontend Developer** | Semua halaman/komponen tampilan yang berfungsi sesuai mockup | AI assign ke anggota berlatar frontend |
| **Backend Developer** | API endpoint berjalan + terdokumentasi + ditest | AI assign ke anggota berlatar backend; jika tidak ada → gap alert |
| **Tester / QA** | Test case terdokumentasi + semua bug kritis dilaporkan | Bisa digabung ke Frontend atau Backend jika tim kecil |
| **Technical Writer** | Dokumentasi teknis + laporan akhir lengkap | AI assign ke anggota dengan beban coding paling ringan |

#### Gap Analysis T2 — Tiga Skenario

**Skenario Normal (komposisi sesuai kebutuhan):**
Semua role tersedia → AI konfirmasi "Komposisi tim cocok ✓" → lanjut ke Fase 2.

**Skenario Imbalance — role kritis tidak tersedia (contoh: tidak ada backend):**
```
AI: "Role yang dibutuhkan untuk Proyek IT:
  Frontend ✓  |  Backend ✗  |  UI/UX ✓  |  Tester ✓

  Pilih cara tim kalian menangani gap ini:
  [A] Salah satu anggota belajar backend — AI bantu urai tasknya
  [B] Fokus ke frontend + mockup — tanpa backend nyata
  [C] Diskusikan dengan dosen untuk penyesuaian scope"
```
Tim memilih → AI regenerate template role sesuai pilihan → lanjut ke Fase 2.

**Skenario Overload — satu role terlalu banyak pekerjaannya:**
AI verifikasi porsi di Fase 2 → jika satu anggota menanggung >40% estimasi total → AI sarankan redistribusi sebelum konfirmasi.

#### Ritme Check-in

| Waktu | Tindakan |
|-------|---------|
| Setelah Fase 2 terkunci | Setiap anggota konfirmasi memahami komponen yang ditanggung |
| Setiap 2 hari (atau per milestone) | Setiap anggota update status komponen di app |
| Jika komponen A belum selesai dan komponen B bergantung padanya | AI notifikasi privat ke koordinator: "Ada blocking dependency" |
| H-3 dari deadline | AI kirim pengingat privat ke semua yang belum tandai "Selesai" |
| Setelah submit | Generate laporan kontribusi |

#### Kriteria Selesai per Komponen

| Komponen | Kriteria Selesai |
|----------|-----------------|
| Desain UI/UX | Semua halaman ada mockup + sudah direview minimal 1 developer |
| Komponen frontend | Berfungsi di browser + sesuai mockup + tidak ada error console |
| API/backend | Endpoint berjalan + respons terdokumentasi + sudah ditest dengan dummy call |
| Testing | Test case terdokumentasi + hasil test tercatat + bug kritis dilaporkan ke developer |
| Dokumentasi | Semua komponen terdokumentasi + laporan sesuai format dosen |

---

### 3.3 T6 — Kustom

Koordinator mengisi semua field secara manual:
- Nama peran (bebas)
- Deskripsi tanggung jawab per peran
- Kriteria selesai per sub-tugas
- Estimasi waktu manual

AI **tidak** generate template untuk T6 — hanya menyediakan form terstruktur dan membantu verifikasi porsi setelah data diisi. Ritme check-in dan notifikasi tetap berjalan seperti T1 dan T2.

---

## 4. Metode yang Diadaptasi

> Setiap metode dinilai dengan dua hal: (a) **asal metode** dan (b) **status bukti adaptasinya** ke konteks mahasiswa Indonesia. Metode tidak disebut "terbukti efektif" kecuali ada bukti spesifik untuk konteks ini.

### 4.1 Kanban Board (Visualisasi Progres)

**Asal:** Sistem manajemen produksi Toyota (Kanban), dipopulerkan dalam software development melalui Agile. Efektivitas untuk tim software didukung literatur [PERLU-SUMBER untuk sitasi spesifik].

**Adaptasi untuk SatuTim:**
- Kolom disederhanakan menjadi 3: **Belum Mulai / Sedang Dikerjakan / Selesai** (bukan To Do / In Progress / Done / Blocked — terlalu banyak status untuk mahasiswa)
- Tidak ada *WIP limit* (batasan jumlah kartu di kolom "Sedang") — terlalu kompleks untuk MVP
- Update status dilakukan manual oleh pemilik sub-tugas, bukan otomatis dari commit Git
- Board bisa dilihat semua anggota tanpa login berbeda

**Yang diubah:** Istilah, jumlah kolom, cara update, dan tidak ada integrasi tool eksternal.

**Status bukti adaptasi:** [ADAPTASI-EKSPLORATIF] — Kanban untuk tim kecil mahasiswa belum ada studi yang diverifikasi dalam konteks Indonesia. Efektivitasnya dalam konteks industri tidak otomatis berlaku untuk kelompok 2–5 orang yang bekerja sekali-sekali.

---

### 4.2 Definition of Done per Sub-tugas

**Asal:** Scrum/Agile — "Definition of Done" (DoD) adalah kriteria eksplisit yang disepakati tim tentang apa artinya suatu pekerjaan "selesai", untuk mencegah ambiguitas. Ada literatur yang mendukung efektivitas DoD dalam mengurangi rework [PERLU-SUMBER untuk sitasi spesifik].

**Adaptasi untuk SatuTim:**
- DoD di-generate AI berdasarkan jenis tugas dan deskripsi dosen — bukan dibuat tim dari nol
- DoD ditampilkan per sub-tugas di board, bukan sebagai dokumen global tim
- Tim bisa edit DoD sebelum mengonfirmasi, tapi ada nilai default dari AI

**Yang diubah:** DoD tidak lagi kolaboratif sepenuhnya — AI memberi draft, tim merevisi. Ini mengurangi cognitive load tapi juga mengurangi rasa kepemilikan (*ownership*) atas kriteria tersebut. [ASUMSI tentang tradeoff ini]

**Status bukti adaptasi:** [ADAPTASI-EKSPLORATIF] — Tidak ada studi yang menguji efektivitas AI-generated DoD untuk kelompok mahasiswa. Manfaat konsep DoD secara umum didukung dalam konteks Agile, tapi transfer ke konteks akademis belum terbukti.

---

### 4.3 Standup Async (Check-in Berkala Tanpa Rapat)

**Asal:** Daily Standup dalam Scrum — pertemuan harian 15 menit di mana setiap anggota menjawab: apa yang dikerjakan, apa yang akan dikerjakan, apa yang menghambat. Versi async (tanpa rapat sinkron) dipopulerkan oleh tim remote. Ada literatur tentang efektivitas standup dalam mendeteksi hambatan lebih awal [PERLU-SUMBER].

**Adaptasi untuk SatuTim:**
- Format: update status 1 tap (bukan 3 pertanyaan teks — terlalu banyak friksi untuk mahasiswa) [ASUMSI tentang friksi]
- Frekuensi: disesuaikan dengan durasi tugas (bukan "daily" secara literal — untuk tugas 1 minggu, cukup setiap 2 hari)
- Tidak ada rapat virtual atau video call — murni update status di app
- Tidak ada pertanyaan "apa yang menghambat" secara eksplisit — hambatan terdeteksi dari pola status (tidak ada update = kemungkinan hambatan)

**Yang diubah:** Format drastis disederhanakan. Pertanyaan reflektif dihilangkan. Deteksi hambatan menjadi inferensi dari perilaku, bukan laporan eksplisit.

**Status bukti adaptasi:** [ADAPTASI-EKSPLORATIF] — Standup async untuk tim mahasiswa belum ada studi yang diverifikasi. Perubahan format dari teks ke status tap belum tentu mempertahankan manfaat aslinya (awareness bersama + deteksi hambatan dini).

---

### 4.4 Working Agreement (Kesepakatan Tim di Awal)

**Asal:** Praktik Agile Coaching dan Team Facilitation — tim menyepakati cara kerja bersama di awal proyek secara eksplisit (bukan aturan yang dipaksakan). Digunakan luas dalam transformasi Agile perusahaan [PERLU-SUMBER untuk efektivitas di konteks tim kecil].

**Adaptasi untuk SatuTim:**
- Disederhanakan menjadi 1 langkah dalam setup: koordinator pilih jenis tugas, konfirmasi deadline, dan assignment role — inilah "kesepakatan"
- Tidak ada negosiasi norma sosial (jam responsif, cara menegur) di MVP — terlalu kompleks untuk onboarding yang harus selesai dalam < 5 menit
- Kesepakatan tersirat dari konfirmasi assignment: "dengan menekan Konfirmasi, kamu menyetujui tanggung jawab sub-tugas ini"

**Yang diubah:** Working agreement dipersempit hanya ke dimensi task (siapa mengerjakan apa) dan dihilangkan dimensi sosial (bagaimana cara bekerja bersama). Ini kelemahan desain yang disadari. [ASUMSI bahwa dimensi sosial bisa ditambahkan post-MVP]

**Status bukti adaptasi:** [ADAPTASI-EKSPLORATIF] — Working agreement tanpa dimensi norma sosial kehilangan salah satu manfaat utamanya (mengurangi konflik interpersonal). Efektivitas versi yang dipersempit ini belum diuji.

---

## 5. Fitur MVP & Kriteria Selesai

> **Revisi dari red team (`plans/07`):** Lima perubahan prioritas dari §5 red team sudah diterapkan ke fitur dan alur di bawah ini. Perubahan utama: (1) F1 ditambahkan confidence indicator; (2) F5 ditambahkan magic link untuk anggota pasif; (3) F6 ditambahkan fitur Portofolio Kolaborasi untuk menyentuh tema "engage"; (4) alur koordinator dipangkas via wizard; (5) demo mode ditambahkan.

### 5.1 Enam Fitur Wajib MVP

| # | Nama Fitur | Akar Masalah yang Diserang | Kriteria Selesai (Acceptance Criteria) | Perubahan dari Red Team |
|---|-----------|---------------------------|----------------------------------------|------------------------|
| F1 | **Onboarding CV + Ekstraksi Profil** | [S] Tidak ada standar profil anggota; pembentukan tim berbasis kedekatan sosial | Pengguna upload PDF → AI ekstrak profil dalam < 30 detik → **setiap field tampilkan confidence indicator** (🟢/🟡/🔴) → field 🔴 wajib diisi manual sebelum lanjut → profil tersimpan dan terlihat anggota lain; fallback: 3 pertanyaan singkat jika tidak punya CV | Tambah confidence indicator; field tidak yakin jangan dikosongkan diam-diam |
| F2 | **Pemilihan Jenis Tugas + Gap Analysis** | [S] Tidak ada kesepakatan awal; [I] ekspektasi tidak dikomunikasikan eksplisit | Koordinator pilih jenis tugas → sistem tampilkan role template → AI jalankan gap check → jika ada gap, tampilkan 3 opsi adaptasi → tim pilih opsi → lanjut ke Fase 2 | Tidak berubah |
| F3 | **AI Task Splitter + Board Pembagian** | [I] Tidak ada *shared visibility*; [S] tidak ada standar pembagian tugas | Koordinator paste deskripsi tugas → AI generate sub-tugas per role dengan DoD → **anggota konfirmasi atau ubah estimasi jam sendiri** sebelum board dikunci → board terkunci dan terlihat semua | Estimasi jam: self-declare oleh anggota, bukan hanya AI |
| F4 | **Verifikasi Porsi (Kesetaraan Beban)** | [S] Sistem penilaian kolektif tidak membedakan kontribusi; [P] *diffusion of responsibility* | Setelah assignment dikonfirmasi, sistem hitung distribusi beban berdasarkan estimasi yang sudah dikonfirmasi anggota → jika satu anggota >40% estimasi total, tampilkan peringatan kuning → tim bisa redistribusi sebelum final | Porsi dihitung dari estimasi yang dikonfirmasi pengguna, bukan hanya AI |
| F5 | **Board Progres + Notifikasi Privat + Magic Link** | [I] Tidak ada *shared visibility*; [P] anggota menghindari konfrontasi langsung | Update status 1 tap → board real-time terlihat semua → notifikasi in-app privat H-2 deadline → **koordinator bisa kirim magic link per sub-tugas via WA**: klik link = langsung update status tanpa harus buka app | Tambah magic link agar anggota pasif bisa update tanpa membuka app |
| F6 | **Laporan Kontribusi + Portofolio Kolaborasi** | [S] Tidak ada saluran aman melaporkan ketimpangan; [I] tidak ada bukti kontribusi individual; **[tema] engage with opportunities** | Setelah tugas selesai → generate laporan kontribusi per anggota → **opsional: buat "Portofolio Kolaborasi" publik yang bisa dibagikan ke platform kampus/lomba** — menampilkan: role yang diemban, kontribusi yang tercatat, jenis tugas yang dikerjakan | Tambah Portofolio Kolaborasi untuk menyentuh kata kunci "engage with opportunities" di Tema 2 |

### 5.2 Fitur yang Sengaja Dikeluarkan dari MVP

| Fitur | Alasan Dikeluarkan |
|-------|-------------------|
| **Integrasi Google Docs/Drive** | Membutuhkan OAuth dan API yang tidak trivial dalam 3 hari; nilai tambahnya tidak sepadan dengan kompleksitas implementasi |
| **Chat / Komentar real-time antar anggota** | Mereproduksi WA — justru menambah fragmentasi. Komunikasi tetap di WA; SatuTim fokus pada struktur, bukan pesan |
| **Notifikasi push (mobile)** | Membutuhkan setup FCM/APNs yang di luar scope Build Week; digantikan notifikasi in-app yang terlihat saat pengguna membuka app |
| **Peer review / rating anggota** | Risiko etis (bullying, bias); dikeluarkan dari MVP sampai ada desain keamanan yang matang |
| **Template tugas yang bisa disimpan dosen** | Fitur untuk dosen — di luar scope MVP yang berfokus pada mahasiswa |
| **Retrospektif / refleksi pasca-tugas** | Bernilai tapi tidak kritis untuk MVP; bisa ditambah di Fase 4 post-Build-Week |
| **Matching tim lintas kelas** | Bergantung pada dosen sebagai gatekeeper — hambatan institusional yang tidak bisa dikontrol produk |

---

## 6. Alur Pengguna Utama & Kasus Tepi

### 6.1 Alur Utama — Dipangkas menjadi Wizard 7 Langkah untuk Koordinator

> **Perubahan dari red team:** Alur koordinator sebelumnya 11 langkah berurutan yang berat. Sekarang digabung menjadi wizard 4 langkah (dengan progress bar) + 3 langkah operasional — total 7 langkah koordinator, bukan 17.

```
[KOORDINATOR — Setup Wizard (4 langkah, ~5 menit)]
  Langkah 1 ▸ Buat room → dapat kode → bagikan ke anggota
  Langkah 2 ▸ Tunggu semua anggota join & profil CV terkonfirmasi
              (koordinator lihat status tiap anggota: ✓ atau ⏳)
  Langkah 3 ▸ Pilih jenis tugas → lihat gap analysis → pilih opsi
              adaptasi jika ada gap → konfirmasi role assignment
  Langkah 4 ▸ Paste deskripsi tugas → review AI task split + DoD
              → anggota konfirmasi estimasi jam masing-masing
              → lihat verifikasi porsi → Konfirmasi Final

[SEMUA ANGGOTA — Onboarding (2 langkah, ~2 menit)]
  Langkah A ▸ Buka link room → upload CV atau isi 3 pertanyaan
  Langkah B ▸ Cek profil hasil AI → koreksi field 🔴 → konfirmasi
              → konfirmasi estimasi jam sub-tugas yang di-assign

[FASE KERJA — Semua anggota]
  Langkah 5 ▸ Update status sub-tugas (1 tap) kapan saja
              ATAU klik magic link dari WA → update langsung

[SISTEM — Otomatis]
  Langkah 6 ▸ Notifikasi privat in-app jika sub-tugas tertinggal
              Magic link tersedia untuk koordinator kirim via WA

[KOORDINATOR — Penutup]
  Langkah 7 ▸ Tandai selesai → download laporan kontribusi
              → opsional: aktifkan Portofolio Kolaborasi
```

### 6.2 Lima Kasus Tepi (*Edge Cases*)

**Kasus Tepi 1 — Anggota tidak punya CV**

*Situasi:* Mahasiswa semester 1 belum pernah membuat CV.
*Respons sistem:* Tampilkan fallback "Isi profil singkat" — 3 pertanyaan: (a) keahlian utamamu apa? (b) pernah ikut organisasi/kepanitiaan apa? (c) berapa jam per minggu kamu bisa dedikasikan untuk tugas ini? Jawaban ini menjadi basis profil pengganti CV.
*Risiko:* Kualitas ekstraksi lebih rendah; gap analysis menjadi kurang akurat. [ASUMSI]

---

**Kasus Tepi 2 — Anggota bergabung terlambat (setelah Fase 2 terkunci)**

*Situasi:* Satu anggota baru bisa join sehari setelah board dikunci karena tidak baca WA.
*Respons sistem:* Anggota tetap bisa upload CV dan melihat seluruh board. Koordinator mendapat notifikasi bahwa ada anggota baru yang belum di-assign sub-tugas. Koordinator bisa buka kembali board untuk redistribusi manual.
*Batasan MVP:* Redistribusi setelah lock membutuhkan unlock manual oleh koordinator — AI tidak re-generate otomatis untuk menghindari perubahan yang tidak disepakati. [ASUMSI tentang keperluan ini]

---

**Kasus Tepi 3 — Semua anggota memiliki skill yang sama (semua frontend, kasus T2)**

*Situasi:* Tim 3 orang proyek IT, semua berlatar frontend berdasarkan CV.
*Respons sistem:* Gap alert muncul untuk role backend dan tester. Sistem tampilkan 3 opsi adaptasi (lihat §3.2). Tim memilih opsi → AI regenerate template role sesuai pilihan.
*Batasan:* Kualitas rekomendasi sangat bergantung pada pilihan tim — sistem hanya menyediakan opsi, bukan memutuskan. [ASUMSI]

---

**Kasus Tepi 4 — Koordinator meninggalkan room (tidak aktif / keluar tim)**

*Situasi:* Koordinator awal tidak aktif setelah setup atau keluar dari kelompok.
*Respons sistem:* Anggota lain bisa "klaim" peran koordinator dengan persetujuan mayoritas anggota aktif (minimal 50%+1). Log perpindahan koordinator tercatat.
*Batasan MVP:* Mekanisme pemungutan suara anggota tidak ada di MVP — di MVP, koordinator baru bisa ditunjuk manual (semua anggota setuju) dan dipindahkan oleh koordinator lama jika masih bisa diakses. Jika koordinator tidak bisa diakses, ini jadi dead-end di MVP — perlu eskalasi manual. [ASUMSI tentang frekuensi kasus ini: langka]

---

**Kasus Tepi 5 — Tugas berubah di tengah jalan (dosen merevisi scope)**

*Situasi:* Dosen mengubah ketentuan tugas setelah board sudah dikunci.
*Respons sistem:* Koordinator bisa "reset Fase 2" — board dibuka kembali, sub-tugas bisa diedit, dan AI bisa diminta re-generate berdasarkan deskripsi tugas yang baru. Log mencatat bahwa ada perubahan dan kapan terjadi.
*Risiko:* Progress yang sudah dikerjakan berdasarkan tugas lama tidak otomatis dihapus — anggota harus mereview apakah sub-tugas lama masih relevan. [ASUMSI]

---

## 7. Metrik Keberhasilan

> Semua ambang batas di bawah ini adalah **sinyal sukses yang diusulkan** — bukan standar industri atau akademis. Dilabel eksplisit sebagai proposal.

### 7.1 Metrik Hasil (*Outcome*)

| Metrik | Cara Ukur | Sinyal Sukses (Proposal) | Catatan |
|--------|-----------|--------------------------|---------|
| **Ketimpangan kontribusi** | Selisih persentase beban antar anggota di laporan kontribusi | < 15% selisih antara anggota beban terberat dan teringan di ≥ 60% tim | [PERLU-SUMBER untuk baseline ketimpangan tanpa sistem] |
| **Kepuasan proses** | Survei pasca-tugas: "Seberapa adil proses pembagian tugas di kelompok ini?" (Likert 1–5) | Rata-rata ≥ 3,8/5 di antara pengguna | [ASUMSI bahwa angka ini bermakna secara praktis] |
| **Deteksi dini** | Berapa hari sebelum deadline notifikasi privat dikirim ke anggota yang tertinggal | Rata-rata ≥ 3 hari sebelum deadline internal | Proxy untuk "masalah terdeteksi sebelum kritis" |

### 7.2 Metrik Adopsi

| Metrik | Cara Ukur | Sinyal Sukses (Proposal) |
|--------|-----------|--------------------------|
| **Onboarding selesai** | % pengguna yang upload CV atau isi profil fallback dan konfirmasi profil | ≥ 80% anggota per room menyelesaikan onboarding dalam 24 jam pertama |
| **Board digunakan aktif** | % sub-tugas yang diupdate statusnya minimal 1 kali oleh pemiliknya | ≥ 70% sub-tugas di-update sebelum deadline |
| **Retensi room** | % room yang mencapai Fase 4 (laporan dibuat) dari semua room yang dibuat | ≥ 40% room mencapai Fase 4 |

### 7.3 Pagar Pengaman (*Guardrails*)

Sinyal yang mengindikasikan ada sesuatu yang salah dengan produk atau pendekatannya:

| Sinyal Bahaya | Interpretasi | Tindakan |
|---------------|-------------|----------|
| > 50% room berhenti di Fase 1 (onboarding) | Hambatan CV upload atau profil ekstraksi terlalu tinggi | Audit UX onboarding; pertimbangkan mempermudah fallback |
| > 30% anggota melaporkan notifikasi terasa "mengganggu" atau "mengintai" | Desain notifikasi terlalu agresif atau terasa seperti surveillance | Kurangi frekuensi; tambahkan kontrol user untuk mematikan notifikasi |
| < 20% room menghasilkan laporan kontribusi | Pengguna tidak sampai ke nilai akhir sistem | Audit alur Fase 3 → 4; periksa apakah Fase 4 terlalu berat |

---

## 8. Peran AI di Dalam Produk

### 8.1 Apa yang AI Lakukan

| Tugas AI | Di Mana dalam Alur | Catatan Implementasi |
|----------|-------------------|---------------------|
| **Ekstraksi profil dari CV** | Fase 1 | Membaca teks PDF → identifikasi keahlian, pengalaman, organisasi → format ke profil ringkas. Output di-review dan bisa dikoreksi pengguna. |
| **Gap Analysis** | Fase 1 (setelah pilih jenis tugas) | Bandingkan role template jenis tugas vs. keahlian yang tersedia → flagging role yang tidak terpenuhi → generate teks opsi adaptasi |
| **Dekomposisi tugas** | Fase 2 | Membaca deskripsi tugas dari dosen + jenis tugas → generate sub-tugas dengan DoD per role → estimasi jam kasar. Output bisa diedit pengguna. |
| **Verifikasi porsi** | Fase 2 | Hitung distribusi estimasi jam per anggota → flag jika selisih > threshold → generate saran redistribusi |
| **Deteksi sub-tugas tertinggal** | Fase 3 | Monitor status + timestamp terakhir per sub-tugas → bandingkan dengan deadline internal → trigger notifikasi privat |
| **Generate laporan kontribusi** | Fase 4 | Agregasi semua log aktivitas → hitung persentase beban per anggota → format ke laporan yang bisa di-export |

### 8.2 Apa yang AI **Tidak Boleh** Lakukan

> Ini bukan daftar teknis — ini adalah batas desain yang sengaja ditetapkan untuk menjaga kepercayaan pengguna dan menghindari konsekuensi yang tidak diinginkan.

| Larangan | Alasan |
|----------|--------|
| **AI tidak memutuskan siapa "salah" atau "malas"** | Sistem hanya mencatat aktivitas — interpretasi dan penilaian karakter adalah urusan manusia. Menuduh anggota berdasarkan data aktivitas saja adalah oversimplifikasi yang berbahaya (lihat Kategori B dan C di `plans/02-problem-framing.md` §2.2). |
| **AI tidak mengirim pesan yang terlihat seperti datang dari anggota lain** | Menyamarkan notifikasi AI sebagai pesan dari teman adalah bentuk manipulasi sosial yang merusak kepercayaan. Semua komunikasi AI harus jelas berlabel sebagai notifikasi sistem. |
| **AI tidak broadcast keterlambatan anggota ke seluruh tim** | Semua notifikasi tentang keterlambatan individual dikirim secara privat. Transparansi tentang progres tim (board) berbeda dari "mengumukan" bahwa seseorang belum mengerjakan — yang terakhir bisa mempermalukan. |
| **AI tidak mengubah board atau assignment tanpa konfirmasi manusia** | Semua rekomendasi AI bersifat draft yang menunggu persetujuan. Tidak ada perubahan yang terjadi secara otomatis tanpa aksi eksplisit dari koordinator atau anggota. |
| **AI tidak menilai kualitas pekerjaan** | Sistem hanya mencatat apakah sub-tugas ditandai selesai atau tidak — bukan apakah kontennya bagus. Penilaian kualitas adalah ranah dosen dan anggota tim. |
| **AI tidak menyimpan isi CV untuk tujuan lain** | Data CV hanya dipakai untuk ekstraksi profil dalam konteks room yang bersangkutan. Tidak ada profil permanen lintas room tanpa persetujuan eksplisit pengguna. |

---

### 8.3 Demo Mode (Tambahan dari Red Team)

Untuk demo 3 menit di hadapan juri, tambahkan toggle "Demo Mode" yang memuat data pre-loaded dari tim fiktif yang sudah mengerjakan tugas selama 2 minggu:

| Data Demo | Nilai |
|-----------|-------|
| Nama tim | Tim Fiksi — Proyek Sistem Informasi Akademik |
| Anggota | Andi (Frontend, 42%), Budi (Backend, 31%), Citra (UI/UX, 22%), Dodi (PM, 5%) |
| Status board | Andi ✓ semua, Budi ✓ 2/3, Citra ✓ semua, Dodi ⏳ 0/2 |
| Notifikasi | Dodi mendapat 2 notifikasi privat yang belum direspons |
| Laporan | Dodi 5% — otomatis flagged sebagai ketimpangan signifikan |

**Alur demo 3 menit yang direkomendasikan:**
1. **(30 detik)** Mulai dari pain point: "Bayangkan kamu koordinator. 3 hari lagi deadline, kamu tidak tahu siapa sudah mengerjakan apa."
2. **(60 detik)** Tunjukkan Demo Mode — board dengan status real anggota, ketimpangan Dodi yang terlihat
3. **(45 detik)** Tunjukkan laporan kontribusi — "Inilah yang selama ini tidak bisa dibuktikan mahasiswa ke dosennya"
4. **(30 detik)** Tunjukkan Portofolio Kolaborasi — "Dan kontribusimu sekarang bisa jadi portofolio untuk daftar lomba atau organisasi"
5. **(15 detik)** Tutup dengan value proposition: "SatuTim — kolaborasi yang adil, terdokumentasi, dan bisa dipertanggungjawabkan"

---

*Dokumen ini adalah PRD konsep yang sudah direvisi berdasarkan red team (`plans/07`). Revisi mencakup: confidence indicator F1, magic link F5, Portofolio Kolaborasi F6, wizard alur koordinator, dan demo mode. Langkah berikutnya: wireframe dan breakdown teknis untuk Build Week.*
