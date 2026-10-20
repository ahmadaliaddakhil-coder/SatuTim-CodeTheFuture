# 07 — Red Team: Kritik, Simulasi Juri, dan Perubahan Prioritas

> **Peran dokumen ini:** Juri yang skeptis dan calon pengguna yang enggan. Tidak ada pelunakan kritik. Tidak ada kompetitor yang dikarang — produk yang disebutkan adalah nama yang sudah umum dikenal; yang belum bisa diverifikasi ada diberi [PERLU-SUMBER].

---

## 1. Sepuluh Alasan Konsep Ini Bisa Gagal

Diurutkan berdasarkan **kemungkinan × dampak** (tertinggi di atas).

---

### Kegagalan #1 — Anggota pasif tidak akan pernah membuka app ini
**Kemungkinan: Sangat Tinggi | Dampak: Fatal**

Seluruh konsep bergantung pada asumsi bahwa *semua* anggota tim akan menggunakan SatuTim. Tapi anggota dengan kontribusi rendah — justru target utama yang ingin diubah perilakunya — adalah kelompok yang paling kecil kemungkinannya untuk bergabung, mengisi profil, dan memperbarui status secara rutin. Mereka tidak mengerjakan tugas di WA; mereka juga tidak akan mengerjakan di SatuTim.

Produk ini mungkin hanya akan dipakai oleh anggota aktif yang sudah termotivasi — yang artinya ia hanya mendokumentasikan ketimpangan yang ada, bukan mengubahnya. Koordinator akan punya laporan bagus tentang betapa tidak adilnya distribusi, tapi tidak ada mekanisme yang memaksa perubahan.

**Referensi:** Asumsi A-A1 di `plans/03-assumptions.md` — sudah diidentifikasi sebagai risiko tertinggi sejak awal, tapi tidak ada respons desain yang konkret untuk mengatasinya di `plans/06`.

---

### Kegagalan #2 — Ekstraksi CV tidak akurat untuk mahasiswa Indonesia
**Kemungkinan: Tinggi | Dampak: Sangat Tinggi**

Fitur F1 (`plans/06` §5.1) adalah fondasi seluruh alur — gap analysis, rekomendasi role, dan verifikasi porsi semuanya bergantung pada kualitas profil yang diekstrak. Tapi CV mahasiswa Indonesia sangat beragam formatnya: ada yang menggunakan template Canva visual-heavy, ada yang berbahasa Indonesia dengan istilah yang tidak standar, ada yang formatnya tabel, ada yang hanya satu halaman dengan 3 baris teks.

LLM yang mengekstrak CV dirancang untuk teks terstruktur; CV mahasiswa semester 2 dengan pengalaman "pernah ikut OSIS SMA" dan "aktif di UKM basket" tidak akan memberikan sinyal keahlian yang berguna untuk gap analysis proyek IT. Hasilnya: profil yang diekstrak salah → gap analysis salah → rekomendasi role salah → seluruh alur dibangun di atas fondasi yang goyah.

**Catatan:** `plans/06` §5.1 mengakui adanya fallback 3 pertanyaan, tapi tidak membahas apa yang terjadi ketika ekstraksi CV menghasilkan profil yang tidak akurat dan pengguna tidak menyadarinya.

---

### Kegagalan #3 — Estimasi jam AI tidak bisa diandalkan untuk tugas akademik
**Kemungkinan: Tinggi | Dampak: Tinggi**

Fitur F4 (verifikasi porsi, `plans/06` §5.1) menghitung kesetaraan beban berdasarkan "estimasi jam" per sub-tugas yang di-generate AI. Tapi AI tidak tahu: kemampuan menulis masing-masing anggota, seberapa sulit topik bab tertentu bagi orang tersebut, standar kualitas yang diharapkan dosen, atau beban tugas lain yang sedang ditanggung anggota di luar kelompok ini.

Hasil estimasi yang tidak akurat akan menciptakan kesetaraan beban yang semu: semua terlihat "adil" di angka, tapi satu orang mengerjakan bab yang jauh lebih mudah dalam waktu yang sama. Pengguna yang menyadari ini akan kehilangan kepercayaan pada sistem. Pengguna yang tidak menyadarinya akan menerima distribusi yang sebenarnya tidak adil.

---

### Kegagalan #4 — Tool fatigue: satu platform lagi yang ditinggalkan setelah satu minggu
**Kemungkinan: Tinggi | Dampak: Tinggi**

SatuTim adalah platform kesekian yang meminta mahasiswa mengubah cara kerjanya. Dalam konteks hackathon, produk akan dipakai karena diminta untuk demo. Dalam konteks nyata, tidak ada insentif struktural untuk terus menggunakannya: tidak ada sanksi jika tidak update status, tidak ada penghargaan jika konsisten, tidak ada integrasi dengan sistem yang sudah ada (nilai, LMS, WA).

Adopsi awal bisa terjadi karena rasa ingin tahu. Tapi setelah novelty habis — kemungkinan besar setelah satu tugas pertama — sebagian besar pengguna akan kembali ke WA. Ini asumsi A-A2 di `plans/03-assumptions.md` yang sudah diidentifikasi tapi tidak ada respons desain untuk mengatasinya.

---

### Kegagalan #5 — Laporan kontribusi digunakan sebagai alat konflik, bukan refleksi
**Kemungkinan: Sedang–Tinggi | Dampak: Tinggi**

Fitur F6 (`plans/06` §5.1) menghasilkan laporan yang menunjukkan persentase beban per anggota. Dalam dinamika kelompok mahasiswa, laporan ini bisa menjadi senjata: "Nih buktinya kamu cuma ngerjain 7%, aku 43%." Ini bukan refleksi produktif — ini konfrontasi bersenjata data.

`plans/06` §8.2 melarang AI untuk memvonis siapa "malas", tapi tidak ada yang mencegah pengguna menggunakan laporan yang sama untuk tujuan itu. Produk ini bisa memperburuk konflik sosial yang sudah ada, bukan meredam.

---

### Kegagalan #6 — Koordinator overload di Fase 1 dan 2 — semua bergantung pada satu orang
**Kemungkinan: Sedang–Tinggi | Dampak: Tinggi**

Alur utama di `plans/06` §6.1 menempatkan koordinator sebagai satu-satunya aktor di langkah 1–11 (dari 17 langkah). Koordinator harus: buat room, bagikan kode, tunggu semua join, pilih jenis tugas, lihat gap analysis, pilih opsi adaptasi, atur role assignment, paste deskripsi tugas, review sub-tugas, cek verifikasi porsi, lalu konfirmasi. Ini bukan "onboarding ringan" — ini pekerjaan 20–30 menit yang sepenuhnya jatuh ke satu orang.

Jika koordinator frustrasi atau tidak paham cara menggunakannya, seluruh tim terhenti. Ironisnya, produk yang dirancang untuk mengurangi beban koordinator justru menambah beban besar di awal.

---

### Kegagalan #7 — Demo 3 menit tidak bisa membuktikan nilai produk
**Kemungkinan: Sedang | Dampak: Tinggi**

Nilai nyata SatuTim baru terlihat setelah tugas selesai — ketika laporan kontribusi muncul dan tim bisa melihat distribusi kerja sebenarnya. Dalam demo 3 menit, yang bisa ditunjukkan hanya Fase 1 dan 2 secara live, plus Fase 3 dan 4 sebagai mockup statis.

Juri yang skeptis akan bertanya: "Bagaimana kamu membuktikan ini benar-benar mengubah perilaku anggota yang pasif?" dan tidak ada jawaban empiris yang bisa diberikan dari demo singkat. `plans/06` §5.6 sendiri mengakui Fase 3 dan 4 hanya "bisa mockup".

---

### Kegagalan #8 — Gap analysis untuk T1 (Makalah) hampir tidak berguna
**Kemungkinan: Sedang | Dampak: Sedang**

`plans/06` §3.1 mengakui bahwa untuk Makalah, gap analysis "biasanya hijau" karena semua orang bisa menulis. Ini artinya fitur gap analysis — yang merupakan *selling point* diferensiasi terkuat — hanya relevan untuk T2 (Proyek IT). Tapi T2 hanya relevan untuk jurusan teknis.

Untuk mahasiswa jurusan non-teknis (yang mengerjakan Makalah), SatuTim pada dasarnya adalah task manager biasa dengan onboarding via CV. Diferensiasi dari Trello menjadi jauh lebih lemah untuk mayoritas pengguna.

---

### Kegagalan #9 — Privasi CV adalah hambatan yang diremehkan
**Kemungkinan: Sedang | Dampak: Sedang**

`plans/06` §8.2 menyatakan "data CV hanya dipakai untuk ekstraksi profil dalam konteks room yang bersangkutan" — tapi ini hanya klaim desain, bukan jaminan teknis yang bisa diverifikasi oleh pengguna. Mahasiswa yang sadar privasi (atau yang melihat CV mereka berisi data personal seperti NIK, alamat, nomor telepon) mungkin menolak upload.

Hambatan ini lebih besar untuk mahasiswa yang CV-nya berisi data sensitif, atau yang belum pernah meng-upload dokumen ke platform pihak ketiga yang tidak jelas reputasinya. Dalam konteks startup baru yang belum dikenal, kepercayaan ini tidak otomatis ada.

---

### Kegagalan #10 — Kualitas dekomposisi tugas AI sangat bergantung pada deskripsi dosen
**Kemungkinan: Sedang | Dampak: Sedang**

Fitur F3 (`plans/06` §5.1) meminta koordinator untuk "paste deskripsi tugas dari dosen." Tapi instruksi dosen sering ambigu, singkat, atau diberikan secara verbal — bukan teks yang bisa di-copy. AI yang menerima input "Buat analisis tentang pemasaran digital" tidak punya cukup informasi untuk generate sub-tugas yang bermakna.

Output yang buruk dari Fase 2 akan membuat seluruh board tidak berguna, dan tim akan kembali ke "kita bagi sendiri aja" — yang artinya mereka tidak perlu SatuTim.

---

## 2. Simulasi Penilaian Juri

**Rubrik dari `docs/brief.md` §B:**
- 30% Problem & Solutions Relevance (problem relevance, solution effectiveness, user-centricity)
- 40% IBM Bob Utilization (log verification, multi-mode utilization, code generation quality, efektivitas prompt)
- 30% Innovation & Creativity (concept originality, functionality dan UX)

Skala 1–5 per sub-kriteria.

---

### 2.1 Problem & Solutions Relevance (30%)

| Sub-kriteria | Skor | Alasan | Celah |
|---|:---:|---|---|
| **Problem Relevance** — apakah masalah yang dipilih nyata dan relevan bagi mahasiswa? | 5 | Masalah free-rider dan koordinasi buruk adalah keluhan yang hampir universal di kampus; framing di plans/02 kuat dan terdokumentasi dengan baik. | Tidak ada data primer yang diverifikasi — seluruh framing masalah masih berstatus [ASUMSI] atau [PERLU-SUMBER]. Juri yang ketat bisa mempermasalahkan ini. |
| **Solution Effectiveness** — apakah solusi benar-benar menyelesaikan masalah yang diidentifikasi? | 2 | Produk menyediakan struktur dan visibilitas, tapi tidak ada mekanisme yang menjamin anggota pasif akan berubah perilaku. Masalah inti (ketimpangan kontribusi) bisa tetap terjadi — hanya terdokumentasi lebih baik. | Gap terbesar: tidak ada jawaban untuk "bagaimana sistem memastikan anggota yang tidak aktif mau ikut?" |
| **User-Centricity** — apakah desain berpusat pada kebutuhan pengguna? | 3 | Tiga persona di plans/04 cukup konkret. Tapi desain terlalu berorientasi pada koordinator (S2) dan mengabaikan UX untuk anggota pasif (S3) — yang ironisnya adalah pengguna paling kritis. | Alur di plans/06 §6.1 langkah 1–11 semua jatuh ke koordinator. Tidak ada yang membuat pengalaman S3 lebih mudah. |
| **Total Problem & Solutions** | **10/15** | | |

---

### 2.2 IBM Bob Utilization (40%)

| Sub-kriteria | Skor | Alasan | Celah |
|---|:---:|---|---|
| **Log Verification** — apakah ada bukti penggunaan Bob yang bisa diverifikasi? | ? | Tidak bisa dinilai dari plans/06 saja — ini bergantung pada isi `docs/bob-evidence/LOG.md`. Berdasarkan file yang ada, LOG.md masih kosong (template saja). | Jika LOG.md tidak terisi saat proposal dikumpulkan, skor ini 1/5 secara default — ini risiko fatal mengingat bobotnya 40%. |
| **Multi-mode Utilization** — apakah Plan/Ask/Agent semua digunakan? | 3 | Konsep di plans/06 §8.1 memberikan banyak peluang penggunaan multi-mode (Plan untuk dekomposisi tugas, Agent untuk ekstraksi CV, Ask untuk panduan gap analysis). Tapi "peluang" belum berarti "sudah dilakukan". | Nilai ini baru bisa dikonfirmasi setelah Build Week. Dalam proposal, tim hanya bisa menunjukkan *rencana* penggunaan multi-mode. |
| **Code Generation Quality** — apakah kode yang dihasilkan berkualitas dan fungsional? | ? | Tidak bisa dinilai sebelum Build Week. | Risiko: jika tim tidak punya fondasi teknis yang kuat, kode yang di-generate Bob mungkin tidak berfungsi untuk demo. |
| **Efektivitas Prompt** — apakah prompt dirancang dengan cermat? | 3 | Dokumen plans menunjukkan tim sudah berpikir sistematis tentang apa yang diminta AI (ekstraksi CV, gap analysis, dekomposisi tugas). Ini sinyal positif untuk kualitas prompt. | Belum ada contoh prompt aktual yang didokumentasikan. |
| **Total IBM Bob (estimasi skenario terbaik)** | **~22/30** | | |

---

### 2.3 Innovation & Creativity (30%)

| Sub-kriteria | Skor | Alasan | Celah |
|---|:---:|---|---|
| **Concept Originality** — seberapa segar konsepnya dibanding yang sudah ada? | 3 | Kombinasi CV-upload + gap analysis untuk pembagian role adalah diferensiasi yang nyata — belum ada tool mahasiswa yang melakukan ini secara eksplisit. Tapi konsep "task manager dengan AI" sudah sangat ramai. | Juri perlu diyakinkan bahwa gap analysis berbasis CV benar-benar baru, bukan sekadar Notion AI yang dikostumisasi. |
| **Functionality** — apakah fiturnya benar-benar berfungsi saat demo? | ? | Bergantung sepenuhnya pada hasil Build Week. F1 (ekstraksi CV) adalah fitur paling riskan secara teknis — jika gagal, seluruh alur runtuh. | Demo bergantung pada F1 berjalan mulus. Jika gagal di depan juri, kesan keseluruhan produk rusak. |
| **UX** — apakah pengalaman penggunanya bersih dan intuitif? | 2 | Alur pengguna di plans/06 §6.1 memiliki 17 langkah — ini bukan UX yang bersih. Koordinator menanggung beban interaksi yang sangat besar di Fase 1 dan 2. | Tidak ada wireframe atau prototype yang bisa dinilai dari dokumen plans saja. UX yang baik di atas kertas sering runtuh saat diimplementasikan dalam 3 hari. |
| **Total Innovation & Creativity (estimasi)** | **~12/20** | | |

---

### Estimasi Skor Total

| Komponen | Bobot | Estimasi Skor | Kontribusi |
|----------|:-----:|:-------------:|:----------:|
| Problem & Solutions Relevance | 30% | 10/15 → 67% | 20/30 |
| IBM Bob Utilization | 40% | 22/30 → 73% | 29/40 |
| Innovation & Creativity | 30% | 12/20 → 60% | 18/30 |
| **Total Estimasi** | | | **~67/100** |

> **Interpretasi:** Skor 67/100 adalah angka yang cukup untuk lolos seleksi awal tapi tidak cukup untuk menang. Kelemahan terbesar ada di solution effectiveness (2/5) dan UX (2/5) — dua hal yang paling terlihat saat demo. IBM Bob Utilization yang bobotnya 40% masih bergantung pada apakah LOG.md diisi dengan baik.

---

## 3. Pemeriksaan Orisinalitas

### 3.1 Alternatif yang Mungkin Sudah Ada

| Aspek Konsep SatuTim | Produk/Praktik yang Mungkin Serupa | Status Verifikasi |
|---|---|---|
| Task management dengan board kanban | Trello, Notion, Asana, ClickUp, Linear | Diketahui umum — tidak perlu sumber |
| AI yang memecah tugas dari deskripsi teks | Fitur-fitur di Notion AI, Microsoft Copilot, ChatGPT dengan prompt yang tepat | Diketahui umum — tidak perlu sumber |
| Onboarding via upload dokumen untuk ekstraksi profil | LinkedIn (ekstraksi profil dari CV saat daftar), platform rekrutmen seperti Jobstreet | Diketahui umum [PERLU-SUMBER untuk verifikasi fitur spesifik ekstraksinya] |
| Laporan distribusi kontribusi tim | GitHub Contributions Graph (untuk tim developer), beberapa LMS dengan fitur analytics | [PERLU-SUMBER — belum bisa diverifikasi apakah ada tool khusus untuk mahasiswa non-teknis] |
| Gap analysis skill untuk pembentukan tim | Platform rekrutmen berbasis skill matching (LinkedIn, Hired) | [PERLU-SUMBER — belum bisa diverifikasi untuk konteks tim akademik] |
| Task tracker khusus mahasiswa Indonesia | [PERLU-SUMBER — tidak bisa diverifikasi tanpa pencarian aktif] | Tidak bisa diverifikasi |

### 3.2 Diferensiasi yang Bertahan Setelah Pemeriksaan

Satu diferensiasi yang paling tahan dari pemeriksaan di atas adalah **kombinasi** dari: (a) onboarding CV → ekstraksi profil → (b) gap analysis berbasis jenis tugas → (c) pembagian sub-tugas yang aware terhadap role → (d) log kontribusi per anggota — dalam satu alur untuk kelompok tugas akademik mahasiswa. Secara individual, masing-masing sudah ada di tempat lain. Tapi kombinasi ini untuk konteks spesifik tugas kelompok kampus Indonesia belum bisa dikonfirmasi ada [PERLU-SUMBER].

---

## 4. Kecocokan dengan Kalimat Tema 2

**Tema 2:** *"How might we use AI to help students **connect**, **collaborate**, and **engage** with campus communities and opportunities?"*

| Kata Kunci | Apakah SatuTim Menyentuhnya? | Penilaian |
|---|---|---|
| **Connect** (menghubungkan mahasiswa) | Lemah. SatuTim bekerja di dalam tim yang sudah ada — tidak ada fitur untuk menemukan anggota baru, terhubung lintas kelas, atau bergabung ke komunitas. | ⚠ Lemah |
| **Collaborate** (berkolaborasi) | Kuat. Seluruh produk berputar di sekitar kolaborasi yang lebih terstruktur: pembagian peran, visibilitas bersama, akuntabilitas kontribusi. | ✓ Kuat |
| **Engage** (terlibat dengan komunitas dan peluang) | Tidak ada. Tidak ada fitur yang menghubungkan mahasiswa ke komunitas kampus lebih luas, kegiatan, UKM, atau peluang di luar kelompok tugasnya. | ✗ Absen |
| **Campus communities** | Tidak ada. Produk bersifat privat (per room) — tidak ada layer komunitas. | ✗ Absen |
| **Opportunities** | Tidak ada. Tidak ada fitur yang mengekspos peluang (lomba, beasiswa, magang) kepada pengguna. | ✗ Absen |

**Kesimpulan kecocokan tema:**

SatuTim hanya menyentuh **1 dari 3 kata kunci** (collaborate) dengan kuat. "Connect" hanya tersentuh secara lemah. "Engage with campus communities and opportunities" sama sekali tidak ada.

**Ini adalah kelemahan struktural yang serius untuk penilaian juri** — terutama karena kriteria "Problem Relevance" dalam rubrik Brief §B secara implisit menilai seberapa tepat masalah yang dipilih cocok dengan tema. Juri yang membaca kalimat tema dan melihat produk yang hanya berfokus pada dinamika internal kelompok bisa memberikan nilai rendah untuk relevansi tema.

**Opsi untuk memperkuat kecocokan tema tanpa mengubah core product:**
Tambahkan satu touchpoint yang menghubungkan ke komunitas kampus — misalnya: setelah tugas selesai, laporan kontribusi bisa dijadikan "portofolio kolaborasi" yang bisa dibagikan ke platform kampus atau dipakai saat mendaftar ke UKM/lomba. Ini menyentuh "engage with opportunities" tanpa mengubah alur inti.

---

## 5. Lima Perubahan dengan Dampak Terbesar

Setiap perubahan merujuk ke bagian spesifik di `plans/06-concept-prd.md`.

---

### Perubahan #1 — Tambahkan mekanisme pull untuk anggota pasif (S3)
**Referensi:** `plans/06` §1 (value proposition), §5.1 F5, §6.1 langkah 12–14

**Masalah yang diselesaikan:** Kegagalan #1 — seluruh sistem tidak bekerja jika anggota pasif tidak membuka app.

**Perubahan konkret:** Saat ini, anggota pasif hanya menerima notifikasi privat in-app (F5) — yang tidak akan mereka lihat jika tidak membuka app. Tambahkan satu mekanisme *pull* yang tidak membutuhkan pengguna untuk membuka app: misalnya link unik per sub-tugas yang bisa dikirim koordinator via WA ("Klik ini untuk update status tugasmu — 1 tap, selesai"). Ini mempertahankan prinsip "tidak perlu WA untuk koordinasi" tapi mengakui realita bahwa WA adalah pintu masuk yang tidak bisa dihindari.

**Trade-off:** Ini adalah kompromi dari prinsip "semua di dalam app" — tapi tanpa ini, Kegagalan #1 tidak bisa diatasi.

---

### Perubahan #2 — Pangkas alur koordinator dari 17 langkah menjadi maksimal 7
**Referensi:** `plans/06` §6.1 (alur utama, langkah 1–11 jatuh ke koordinator)

**Masalah yang diselesaikan:** Kegagalan #6 — koordinator overload di Fase 1 dan 2.

**Perubahan konkret:** Gabungkan Fase 1 dan 2 menjadi satu wizard dengan progress bar. Langkah 6 (pilih jenis tugas), 7 (gap analysis + opsi adaptasi), 8 (role assignment), 9 (paste deskripsi tugas), 10 (review sub-tugas), dan 11 (verifikasi porsi + konfirmasi) harus bisa diselesaikan dalam satu sesi tanpa keluar dan masuk menu. Target: koordinator selesai setup dalam 5 menit, bukan 30.

**Trade-off:** Wizard yang terlalu linear mengurangi fleksibilitas untuk kasus kompleks (misal: koordinator ingin kembali ke langkah sebelumnya). Perlu tombol "Kembali" yang jelas di setiap langkah wizard.

---

### Perubahan #3 — Tambahkan satu touchpoint "Engage" untuk memenuhi Tema 2
**Referensi:** `plans/06` §1 (value proposition) — perlu diperluas; §7 (metrik) — perlu ditambah metrik komunitas

**Masalah yang diselesaikan:** Kegagalan #7 (partial) + Kelemahan Tema 2 §4 dokumen ini.

**Perubahan konkret:** Setelah Fase 4 (laporan kontribusi dibuat), tambahkan fitur "Bagikan Portofolio Kolaborasi" — laporan yang sudah dianonimkan bisa dijadikan bukti pengalaman kerja tim yang bisa dibawa ke pendaftaran UKM, lomba, atau magang. Ini menghubungkan output privat SatuTim ke ekosistem kampus yang lebih luas dan menyentuh kata kunci "engage with campus communities and opportunities" secara langsung.

**Trade-off:** Ini menambah satu fitur di luar 6 fitur wajib MVP. Harus diputuskan: apakah ini fitur ke-7 yang masuk Build Week, atau dijanjikan sebagai roadmap pasca-MVP.

---

### Perubahan #4 — Beri validasi manual untuk profil hasil ekstraksi CV sebelum digunakan
**Referensi:** `plans/06` §5.1 F1, §6.1 langkah 4–5

**Masalah yang diselesaikan:** Kegagalan #2 — ekstraksi CV tidak akurat.

**Perubahan konkret:** Saat ini F1 menampilkan profil hasil ekstraksi dan pengguna "bisa koreksi dengan satu klik." Tapi "satu klik" tidak cukup — koreksi harus mudah dan jelas apa yang perlu dikoreksi. Tambahkan: (a) confidence indicator per field ("AI cukup yakin tentang ini / AI tidak yakin tentang ini — tolong koreksi"); (b) field yang tidak yakin disorot dan meminta konfirmasi eksplisit sebelum lanjut; (c) peringatan jika profil terlalu kosong ("Profil kamu terlalu sedikit informasinya — gap analysis mungkin tidak akurat"). Ini tidak mencegah ekstraksi yang buruk, tapi memberi sinyal jujur kepada pengguna.

**Trade-off:** Menambah langkah dalam onboarding. Tapi lebih baik pengguna tahu lebih awal bahwa data mereka tidak lengkap daripada menerima rekomendasi role yang salah tanpa peringatan.

---

### Perubahan #5 — Pisahkan demonstrasi nilai F6 agar bisa ditunjukkan dalam demo 3 menit
**Referensi:** `plans/06` §5.6 (scope MVP, Fase 4 "bisa mockup"), §6.1 langkah 16–17

**Masalah yang diselesaikan:** Kegagalan #7 — demo 3 menit tidak bisa membuktikan nilai produk.

**Perubahan konkret:** Buat satu "demo mode" — room pre-loaded dengan data simulasi dari tim fiktif yang sudah mengerjakan tugas selama 2 minggu, termasuk anggota yang tidak aktif. Demo bisa melompat langsung ke Fase 4 dan menunjukkan laporan kontribusi yang nyata (bukan mockup statis) dengan data yang dramatik (satu anggota 5%, satu anggota 55%). Ini membuktikan nilai akhir produk tanpa harus menunggu tugas selesai secara organik.

Langkah implementasi: buat seed data yang realistis dan fitur toggle "Demo Mode" yang bisa diaktifkan saat presentasi. Ini adalah perubahan implementasi, bukan desain.

**Trade-off:** Perlu waktu untuk membuat data seed yang cukup realistis. Tapi investasi ini langsung meningkatkan kualitas demo dan skor "Functionality" di rubrik juri.

---

*Dokumen ini adalah red team — tidak berisi saran implementasi yang harus diikuti sepenuhnya. Setiap perubahan harus dipertimbangkan terhadap scope Build Week 3 hari. Langkah berikutnya: tim memutuskan perubahan mana yang masuk ke revisi plans/06 sebelum Build Week dimulai.*
