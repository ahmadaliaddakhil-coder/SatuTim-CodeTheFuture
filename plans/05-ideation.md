# 05 — Ideasi: Solusi untuk Masalah Kolaborasi Tugas Kelompok

> **Catatan metodologis:** Seksi D `docs/brief.md` menyebut *"observasi masalah kerja kelompok (free-rider, sungkan menegur, penilaian tidak adil, ketidakcocokan tim, tim diacak dosen) dan ide awal tim"* — namun **isi ide awal tidak ditulis secara eksplisit** dalam file. Berdasarkan observasi tersebut, ide awal tim diasumsikan berbentuk **platform pelacak kontribusi dan koordinasi tugas kelompok berbasis AI** (task tracker + visibilitas kontribusi + reminder otomatis). Kritik terhadap asumsi ini ada di Seksi 4. Jika tim memiliki ide yang berbeda dari asumsi ini, seksi 4 perlu direvisi.
>
> Semua klaim relevansi dan kelayakan adalah penilaian subjektif berdasarkan konteks yang tersedia. Tag bukti sesuai ground rule brief seksi F.

---

## 1. Daftar Ide Solusi

Ide dihasilkan dengan empat teknik: **HMW** (dari `plans/02-problem-framing.md` §5.2), **SCAMPER** (Substitute / Combine / Adapt / Modify / Put to other use / Eliminate / Reverse), **Analogi lintas bidang**, dan **Pengguna ekstrem** (merancang untuk pengguna paling sulit: anggota pasif dan koordinator yang kelelahan).

---

### IDE 1 — *Kickoff Pact*: Kontrak Tim Awal Berbantuan AI
**Teknik:** HMW-1 (Collaborate)

**Akar masalah yang diserang:**
- [Struktural] Tidak ada standar kesepakatan awal (*team charter*) yang diwajibkan dosen.
- [Informasional] Ekspektasi dosen jarang dikomunikasikan secara eksplisit di awal tugas.

**Cara kerja (2 kalimat):** Saat kelompok terbentuk, AI memandu sesi singkat (5–10 menit) di mana setiap anggota menyepakati peran, deadline internal, dan aturan responsivitas — hasilnya disimpan sebagai dokumen yang bisa dirujuk kapan saja. Jika ada anggota yang tidak menyelesaikan bagiannya sesuai kesepakatan, sistem mengirim pengingat yang merujuk ke kontrak awal — bukan dari koordinator secara personal.

**Risiko:** Jika anggota mengisi kontrak asal-asalan hanya agar prosesnya selesai, dokumen tidak memiliki nilai nyata. Juga, "kontrak moral" tanpa sanksi nyata mungkin tidak mengubah perilaku Kategori A (*rational free-rider*). [ASUMSI]

---

### IDE 2 — *Contribution Mirror*: Cermin Kontribusi Berbasis Aktivitas Nyata
**Teknik:** HMW-1 (Collaborate) + SCAMPER: Substitute (menggantikan laporan manual dengan deteksi otomatis)

**Akar masalah yang diserang:**
- [Informasional] Tidak ada *shared visibility* terhadap siapa mengerjakan apa.
- [Struktural] Sistem penilaian kolektif tidak membedakan kontribusi individual.

**Cara kerja (2 kalimat):** AI melacak aktivitas nyata (kapan anggota mengedit Google Docs bersama, kapan mengirim pesan substantif di kanal tugas, kapan mengunggah file) dan mengubahnya menjadi ringkasan visual kontribusi yang terlihat oleh seluruh tim. Data ini tidak digunakan untuk menghukum — melainkan sebagai "cermin" yang memberi setiap anggota gambaran jelas tentang keseimbangan tim secara real-time.

**Risiko:** Membutuhkan integrasi dengan Google Docs/Drive yang secara teknis tidak trivial dalam 3 hari. Juga, anggota bisa "gaming" sistem dengan membuka dokumen tanpa benar-benar mengerjakan apa pun. [ASUMSI]

---

### IDE 3 — Bot WA *Team Pulse*: Asisten Kelompok di WhatsApp
**Teknik:** HMW-3 (Engage) + SCAMPER: Adapt (adapsi format bot ke platform yang sudah dipakai)

**Akar masalah yang diserang:**
- [Informasional] Komunikasi koordinasi terfragmentasi di beberapa platform.
- [Psikologis] Hambatan psikologis untuk memulai berujung pada penundaan.

**Cara kerja (2 kalimat):** Bot WhatsApp yang diundang ke grup tugas mengirimkan check-in harian singkat ("Hari ini siapa yang sudah mengerjakan apa? Balas dengan 1 kalimat"), merangkum jawaban, dan memberi tahu seluruh tim jika ada anggota yang tidak merespons selama X waktu. AI menganalisis pola respons untuk mendeteksi siapa yang mungkin "hilang" dan memicu pertanyaan pribadi (bukan teguran publik).

**Risiko:** WhatsApp Business API memiliki batasan dan biaya; dalam konteks hackathon mungkin digantikan dengan bot berbasis webhook yang lebih terbatas. Juga, "spam bot" berisiko diabaikan atau dinonaktifkan anggota. [ASUMSI]

---

### IDE 4 — *Task Decomposer*: AI Pembagi Tugas Otomatis
**Teknik:** SCAMPER: Substitute (menggantikan pembagian tugas manual oleh koordinator)

**Akar masalah yang diserang:**
- [Struktural] Tidak ada standar kesepakatan awal; pembagian tugas sering tidak jelas.
- [Informasional] Ekspektasi dosen jarang dikomunikasikan secara eksplisit.

**Cara kerja (2 kalimat):** Koordinator memasukkan deskripsi tugas dari dosen ke antarmuka AI; AI memecah tugas menjadi sub-tugas yang bisa langsung didistribusikan ke anggota berdasarkan keahlian atau beban kerja yang diinput. Setiap sub-tugas memiliki kriteria "selesai" yang jelas sehingga anggota tahu persis apa yang diharapkan dari mereka.

**Risiko:** Kualitas dekomposisi sangat bergantung pada kualitas prompt dan deskripsi tugas yang dimasukkan — jika deskripsi dosen ambigu, output AI juga ambigu. Tidak menyentuh masalah motivasi sama sekali. [ASUMSI]

---

### IDE 5 — *Peer Nudge*: Sistem Dorongan Antar-Anggota Anonim
**Teknik:** HMW-3 (Engage) + Analogi dari bidang lain: sistem *upvote/downvote* anonim di komunitas online

**Akar masalah yang diserang:**
- [Psikologis] Anggota menghindari konfrontasi langsung karena khawatir merusak hubungan.
- [Kultural] Norma *sungkan* menyulitkan teguran langsung [ASUMSI].

**Cara kerja (2 kalimat):** Setiap anggota bisa mengirim "dorongan" anonim ke rekan yang belum berkontribusi — dorongan ini muncul sebagai notifikasi netral ("Kelompokmu menunggu kontribusimu untuk bagian X") tanpa identitas pengirim. AI memutuskan kapan mengirim dorongan berdasarkan pola aktivitas, sehingga tidak ada satu orang pun yang terasa sebagai "tukang ngadu".

**Risiko:** Anonimitas bisa disalahgunakan untuk bullying digital. Jika anggota mengetahui mekanisme anonimitasnya, kepercayaan pada sistem bisa runtuh. Perlu desain etis yang sangat cermat. [ASUMSI]

---

### IDE 6 — *Role Roulette*: Rotasi Peran Berbasis Kekuatan
**Teknik:** HMW-2 (Connect) + SCAMPER: Reverse (membalik asumsi bahwa koordinator selalu sama)

**Akar masalah yang diserang:**
- [Struktural] Pembentukan kelompok ditentukan kedekatan sosial, bukan kecocokan keahlian.
- [Psikologis] *Diffusion of responsibility* karena peran tidak jelas.

**Cara kerja (2 kalimat):** Sebelum tugas dimulai, AI meminta setiap anggota mengisi profil singkat (kekuatan, kelemahan, ketersediaan waktu) dan merekomendasikan distribusi peran yang menyeimbangkan beban dan keahlian — termasuk saran siapa yang paling cocok menjadi koordinator tugas ini. Peran dirotasi antar tugas sehingga tidak ada satu orang yang selalu menjadi "ibu kelompok".

**Risiko:** Bergantung pada kejujuran anggota saat mengisi profil; jika diisi asal-asalan, rekomendasi AI tidak relevan. Juga, dosen yang menentukan komposisi tim [FAKTA-BRIEF] membuat fitur "matching" ini hanya relevan jika tim dibentuk sendiri. [ASUMSI]

---

### IDE 7 — *Progress Board* Non-Digital: Papan Fisik Kelompok
**Teknik:** Ide non-digital #1 + Analogi dari *Kanban board* manufaktur

**Akar masalah yang diserang:**
- [Informasional] Tidak ada *shared visibility*.
- [Struktural] Tidak ada standar kesepakatan awal.

**Cara kerja (2 kalimat):** Template papan fisik (bisa dicetak di kertas A3) dengan kolom "Dikerjakan / Sedang Dikerjakan / Selesai" dan nama anggota; kelompok mengisi bersama saat rapat awal dan memperbarui secara fisik saat bertemu. Tidak memerlukan teknologi apa pun — hanya kertas, spidol, dan komitmen untuk menatap papan bersama di awal setiap sesi.

**Risiko:** Hanya efektif untuk kelompok yang bertemu tatap muka secara teratur; tidak berfungsi untuk kelompok yang seluruhnya berkoordinasi secara daring. Tidak bisa diintegrasikan ke dalam prototipe digital untuk demo 3 menit. [ASUMSI]

---

### IDE 8 — *Weekly Retrospective* Terpandu: Refleksi Mingguan Berbantuan AI
**Teknik:** Ide non-digital #2 + Analogi dari Agile *sprint retrospective* di industri teknologi

**Akar masalah yang diserang:**
- [Psikologis] *Diffusion of responsibility*; tidak ada konsekuensi yang terasa.
- [Psikologis] Anggota aktif kehilangan harapan terhadap perubahan karena siklus tidak pernah putus (lihat `plans/02-problem-framing.md` §4).

**Cara kerja (2 kalimat):** Setiap minggu, AI mengirimkan 3 pertanyaan refleksi ke seluruh anggota secara privat ("Apa yang kamu kerjakan? Apa yang menghambatmu? Apa yang bisa tim lakukan lebih baik?") — jawabannya dirangkum menjadi ringkasan tim yang dibagikan tanpa atribusi individual. Proses ini membangun norma refleksi kolektif tanpa konfrontasi langsung, sekaligus memberi koordinator data untuk mendeteksi hambatan sebelum menjadi krisis.

**Risiko:** Jika anggota tidak menjawab pertanyaan refleksi, data menjadi tidak berguna. Disiplin mengisi refleksi mingguan membutuhkan *habit formation* yang tidak terjadi dalam satu sesi. [ASUMSI]

---

### IDE 9 🌶️ (LIAR) — *Contribution Auction*: Lelang Tugas Gamifikasi
**Teknik:** Pengguna ekstrem (merancang untuk anggota Kategori A: *rational free-rider*) + Analogi dari mekanik *auction* dalam permainan board

**Akar masalah yang diserang:**
- [Psikologis] *Rational free-riding*: kalkulasi biaya-manfaat menguntungkan tidak berkontribusi karena tidak ada konsekuensi.
- [Struktural] Sistem penilaian kolektif tidak membedakan kontribusi individual.

**Cara kerja (2 kalimat):** Setiap sub-tugas memiliki nilai poin; anggota "menawar" sub-tugas yang ingin mereka kerjakan (siapa yang mengklaim, dia yang mengerjakan dan mendapat poin). Poin diakumulasi dan bisa dilihat oleh seluruh tim — tidak ada mekanisme hukuman, tapi distribusi poin menjadi sinyal yang jelas tentang siapa berkontribusi berapa, dan bisa disertakan dalam laporan opsional ke dosen.

**Risiko:** Ide ini mengubah kolaborasi menjadi kompetisi internal — berisiko merusak kohesi tim jika anggota mulai "menimbun" tugas yang mudah. Cocok untuk tim berorientasi kompetisi; mungkin kontraproduktif untuk tim yang mengedepankan kebersamaan. Ini adalah ide liar yang butuh pengujian perilaku sebelum diimplementasikan. [ASUMSI]

---

### IDE 10 🌶️ (LIAR) — *AI Mediator*: Asisten AI yang Berbicara atas Nama Kelompok
**Teknik:** Pengguna ekstrem (merancang untuk anggota yang paling tidak mau konfrontasi) + Analogi dari mediator dalam konteks hukum/HR

**Akar masalah yang diserang:**
- [Psikologis] Anggota menghindari konfrontasi karena takut merusak hubungan sosial.
- [Kultural] Tidak ada saluran aman untuk mengangkat masalah [ASUMSI].

**Cara kerja (2 kalimat):** Saat anggota aktif merasa ada ketimpangan, mereka memberitahu AI secara privat — AI kemudian "berbicara" kepada seluruh kelompok menggunakan bahasa netral yang tidak menyudutkan siapa pun ("Tampaknya bagian X belum ada yang mengambil — apakah ada yang bisa membantu?"). AI bertindak sebagai mediator yang tidak memiliki ego atau kepentingan pribadi, sehingga pesan terasa objektif, bukan serangan personal.

**Risiko:** Anggota yang cerdas akan segera menebak bahwa "pesan AI" sebenarnya dipicu oleh seseorang — ilusi netralitas bisa runtuh. Juga, AI yang terlalu banyak "berbicara" di grup bisa menjadi gangguan. [ASUMSI]

---

### IDE 11 — *Skill-Match Buddy*: Pembentukan Tim Berbasis Keahlian Sebelum Diacak Dosen
**Teknik:** HMW-2 (Connect) + Analogi dari sistem *matching* roommate di asrama universitas luar negeri

**Akar masalah yang diserang:**
- [Struktural] Pembentukan kelompok ditentukan kedekatan sosial atau diacak dosen [FAKTA-BRIEF].
- [Struktural] Tidak ada proses seleksi berdasarkan kompatibilitas jadwal atau keahlian.

**Cara kerja (2 kalimat):** Sebelum dosen mengacak kelompok, mahasiswa mengisi profil singkat (keahlian, jadwal kosong, preferensi gaya kerja) — AI mengelompokkan mahasiswa ke dalam tim yang memiliki keahlian komplementer dan jadwal yang tumpang tindih. Hasil rekomendasinya diserahkan ke dosen sebagai opsi, bukan keputusan final.

**Risiko:** Bergantung pada dosen yang mau mengubah cara mereka membentuk kelompok — ini hambatan institusional yang signifikan (A-E1, A-E2 di `plans/03-assumptions.md`). Juga, keluar dari scope produk untuk mahasiswa dan masuk ke scope produk untuk dosen. [ASUMSI]

---

## 2. Tabel Skor per Kriteria

**Panduan skor:**
- **Relevansi Brief B** (1–5): seberapa baik ide menyerang masalah yang relevan + seberapa *user-centric* + seberapa efektif sebagai solusi (kriteria 30% Problem & Solutions Relevance di brief §B).
- **Potensi IBM Bob** (1–5): seberapa banyak mode Bob (Plan/Ask/Agent) bisa digunakan saat membangunnya; seberapa natural prompt engineering-nya untuk demo (kriteria 40% IBM Bob Utilization).
- **Orisinalitas** (1–5): seberapa segar konsepnya dibanding tools yang sudah ada (kriteria 30% Innovation & Creativity).
- **Layak 3 Hari** (1–5): seberapa realistis dibangun prototipe demo-able dalam Build Week 3 hari oleh tim 5 orang pemula.

| # | Ide | Relevansi Brief B | Potensi IBM Bob | Orisinalitas | Layak 3 Hari | **Total /20** |
|---|-----|:-----------------:|:---------------:|:------------:|:------------:|:-------------:|
| 1 | *Kickoff Pact* — Kontrak Tim AI | 4 | 5 | 3 | 5 | **17** |
| 2 | *Contribution Mirror* — Cermin Kontribusi | 5 | 4 | 4 | 2 | **15** |
| 3 | Bot WA *Team Pulse* | 4 | 4 | 3 | 3 | **14** |
| 4 | *Task Decomposer* — Pembagi Tugas AI | 3 | 5 | 2 | 5 | **15** |
| 5 | *Peer Nudge* — Dorongan Anonim | 3 | 3 | 4 | 3 | **13** |
| 6 | *Role Roulette* — Rotasi Peran | 3 | 4 | 4 | 4 | **15** |
| 7 | Papan Fisik *Kanban* | 2 | 1 | 1 | 5 | **9** |
| 8 | *Weekly Retrospective* Terpandu | 4 | 4 | 3 | 4 | **15** |
| 9 🌶️ | *Contribution Auction* — Lelang Gamifikasi | 3 | 3 | 5 | 3 | **14** |
| 10 🌶️ | *AI Mediator* — Mediator AI | 4 | 5 | 5 | 4 | **18** |
| 11 | *Skill-Match Buddy* — Matching Pra-Pengacakan | 3 | 4 | 4 | 2 | **13** |

> **Catatan skor:** Semua angka ini adalah penilaian kualitatif subjektif berdasarkan konteks brief dan pengalaman desain produk — bukan hasil pengujian pengguna. [ASUMSI]

---

## 3. Matriks Dampak vs. Usaha (Teks)

```
DAMPAK TINGGI
│
│   [2] Contribution Mirror ──────────────── [1] Kickoff Pact
│         (integrasi berat)                    (teks + AI, ringan)
│
│   [10] AI Mediator ─────────────────────── [8] Weekly Retrospective
│          (orisinal, etis kompleks)             (interaksi rutin, natural)
│
├───────────────────────────────────────────────────────────────────
│                                    USAHA RENDAH ◄──────► USAHA TINGGI
│
│   [5] Peer Nudge ───────── [9] Contribution Auction ── [11] Skill-Match
│      (etis kompleks)            (menarik, berisiko)       (scope dosen)
│
│   [3] Bot WA ─────────────── [6] Role Roulette
│      (familiar, terbatas)       (logis, kurang wow)
│
│   [7] Papan Fisik ─────── [4] Task Decomposer
│      (tidak digital)          (berguna tapi tidak baru)
│
DAMPAK RENDAH
```

**Interpretasi:**
- **Kuadran Kanan Atas (Dampak Tinggi, Usaha Tinggi):** Ide 2 (*Contribution Mirror*) dan Ide 11 (*Skill-Match*) — potensial besar tapi berisiko tidak selesai dalam 3 hari.
- **Kuadran Kiri Atas (Dampak Tinggi, Usaha Rendah) → PRIORITAS:** Ide 1 (*Kickoff Pact*), Ide 8 (*Weekly Retrospective*), dan Ide 10 (*AI Mediator*) — nilai tinggi dengan kompleksitas teknis yang bisa dikontrol dalam 3 hari.
- **Kuadran Kanan Bawah (Dampak Rendah, Usaha Tinggi):** Ide 11 jika dosen tidak kooperatif — hindari.
- **Kuadran Kiri Bawah (Dampak Rendah, Usaha Rendah):** Ide 7 (papan fisik) dan Ide 4 (*Task Decomposer*) — mudah dibuat tapi tidak cukup diferensiasi untuk menang di kompetisi.

---

## 4. Kritik Tajam terhadap Ide Awal Tim

Berdasarkan seksi D `docs/brief.md`, ide awal tim diasumsikan sebagai **"platform pelacak kontribusi + koordinasi tugas kelompok berbasis AI"** — versi digital dari task manager yang menampilkan siapa mengerjakan apa, dilengkapi reminder otomatis. [ASUMSI tentang isi ide awal — lihat catatan metodologis di atas]

### 4.1 Kondisi di Mana Ide Ini Gagal

| Kondisi Kegagalan | Penjelasan | Probabilitas |
|---|---|---|
| **Anggota pasif tidak mau bergabung** | Jika tool membutuhkan semua anggota untuk login dan mengisi data, tapi anggota dengan kontribusi rendah menolak atau lupa mendaftar, tool hanya dipakai oleh yang sudah termotivasi — masalah inti tidak berubah (asumsi A-A1 di `plans/03-assumptions.md`). | Tinggi [ASUMSI] |
| **Transparansi menciptakan konflik, bukan dialog** | Menampilkan kontribusi individual secara publik kepada seluruh tim bisa mempermalukan anggota Kategori B dan C (*Sinta* dan *Dito* di `plans/04-target-audience.md`) dan mendorong mereka keluar dari tool alih-alih berubah perilaku. | Sedang-Tinggi [ASUMSI] |
| **Tool fatigue mengalahkan niat baik** | Jika produk adalah aplikasi terpisah di luar WA dan Google Docs yang sudah dipakai, adopsi akan jatuh setelah novelty-nya habis — terutama jika tidak ada sanksi atau insentif nyata untuk terus menggunakannya (A-A2). | Tinggi [ASUMSI] |
| **Masalah utama bukan tracking tapi norma sosial** | Jika akar masalah terdalam adalah budaya tidak mau konfrontasi (bukan ketiadaan visibilitas), maka menampilkan data kontribusi tidak akan mengubah apa pun — orang tahu ada masalah, tapi tetap tidak ada yang berani mengangkatnya. | Sedang [ASUMSI] |
| **Fitur terlalu mirip Trello/Notion yang sudah ada** | Jika differensiasi utama hanya "lebih sederhana" atau "punya AI-nya", pengguna bisa bertanya: "kenapa tidak pakai Trello saja?" — orisinalitas rendah berarti skor inovasi lemah di penilaian juri (brief §B: 30% Innovation & Creativity). | Sedang [ASUMSI] |
| **Demo 3 menit tidak cukup untuk menunjukkan nilai** | Nilai dari task tracker baru terasa setelah dipakai beberapa hari. Demo 3 menit hanya bisa menunjukkan *UI* — bukan perubahan perilaku nyata. Juri mungkin tidak terkesan. | Sedang [ASUMSI] |

### 4.2 Kesimpulan Kritik

Ide awal tim menyerang masalah yang nyata dan memiliki irisan jelas dengan Tema 2. Namun dalam bentuknya yang paling "obvious" (task tracker + visibilitas kontribusi), ia menghadapi dua masalah fundamental: (a) **hambatan adopsi yang berat** dari segmen yang paling penting (S3), dan (b) **diferensiasi yang lemah** dari produk yang sudah ada. Ide ini bisa berhasil, tapi hanya jika ada *twist* yang membuatnya secara fundamental berbeda dari Trello — misalnya dengan memfokuskan diri pada **momen kritis tertentu** (kickoff atau mediasi konflik), bukan menjadi task manager lengkap.

---

## 5. Rekomendasi Fokus — Konsep Produk SatuTim

> **Catatan revisi (dari diskusi tim):** Rekomendasi lama (Ide 1 + 10) ditolak karena: (1) masih bergantung pada WA sebagai kanal eksekusi — mereproduksi fragmentasi yang ingin diserang; (2) hanya menyentuh dua titik, melewatkan fase monitor dan log yang merupakan inti nilai produk. Konsep baru ini menggantikannya sepenuhnya, dengan tambahan mekanisme *skill gap analysis* untuk menangani ketidakseimbangan komposisi tim.

---

### 5.1 Alur Produk: Cocokkan → Bagi Tugas → Monitor → Log

Semua fase terjadi di dalam satu aplikasi. Tidak ada ketergantungan pada WA atau platform eksternal untuk alur inti. [ASUMSI: MVP-nya layak dibangun dalam 3 hari jika scope per fase dijaga ketat]

```
┌──────────────────────────────────────────────────────────────┐
│                         SATUTIM                              │
│                                                              │
│  [1. COCOKKAN]  [2. BAGI TUGAS]  [3. MONITOR]  [4. LOG]     │
│                                                              │
│  Upload CV  →  AI gap-check  →  Update status  →  Laporan   │
│  AI ekstrak    + bagi tugas      di dalam app     kontribusi │
│  profil        sesuai role &     board real-time  per orang  │
│                jenis tugas                                   │
└──────────────────────────────────────────────────────────────┘
```

---

### 5.2 Masalah Desain Terbuka #1 — Jenis Tugas Harus Spesifik

> **Celah ini belum pernah dibahas di dokumen plans sebelumnya.** Tanpa mengetahui jenis tugas, AI tidak bisa menentukan role yang relevan, sub-tugas yang masuk akal, atau porsi yang adil. Sistem yang terlalu generik tidak lebih baik dari Trello. [ASUMSI]

| Jenis Tugas | Role Tipikal | Pola Pembagian Sub-tugas | Indikator "Selesai" per Sub-tugas |
|-------------|-------------|--------------------------|-----------------------------------|
| **Makalah / Laporan** | Penulis per bab, editor, pencari referensi, layouter | Per bab atau bagian dokumen | Bab selesai ditulis + direview satu anggota lain + masuk dokumen bersama |
| **Presentasi** | Riset konten per topik, desainer slide, pembawa materi, moderator | Per segmen konten + per peran tampil | Slide segmen selesai + latihan presentasi ≥ 1 kali |
| **Proyek / Prototipe** (IT, Teknik, Desain) | Project manager, frontend, backend, UI/UX, tester, dokumentasi | Per komponen fungsional | Komponen berfungsi + sudah ditest + terdokumentasi |
| **Studi Kasus / Analisis** | Pengumpul data, analis, penulis temuan, reviewer, penyaji | Per tahap analisis | Data terkumpul + analisis selesai + sudah dikros-cek |
| **Proyek Lapangan / Observasi** | Koordinator lapangan, pengumpul data, analis, penulis laporan | Per lokasi atau metode pengumpulan | Data dari semua titik + divalidasi + masuk laporan |

**Konsekuensi desain:** Langkah pertama setelah onboarding CV adalah **koordinator memilih jenis tugas**. AI menyesuaikan template role, cara memecah sub-tugas, dan kriteria selesai berdasarkan pilihan ini.

---

### 5.3 Masalah Desain Terbuka #2 — Skill Imbalance dalam Tim (*Gap Analysis*)

> **Ini skenario nyata yang belum pernah dibahas di mana pun.** Contoh kasus: kelas 20 mahasiswa, 10 tim masing-masing 2 orang, jenis tugas = Proyek IT. Komposisi skill: 15 frontend developer, 5 backend developer. Kebutuhan ideal per tim: 1 frontend + 1 backend. Tapi stok tidak cukup — hanya 5 backend untuk 10 tim. Tanpa mekanisme untuk ini, sistem akan merekomendasikan role yang tidak bisa dijalankan oleh tim tertentu, dan pembagian tugas menjadi tidak adil. [ASUMSI bahwa ini terjadi secara nyata di kelas]

#### Tiga Skenario yang Harus Ditangani Sistem

**Skenario A — Tim sudah dibentuk dosen, komposisi skill homogen (misal: 2 frontend, 0 backend)**

Sistem tidak bisa mengubah komposisi. Yang harus dilakukan:

> AI menjalankan **Gap Analysis** setelah CV diekstrak: "Untuk proyek ini, role yang dibutuhkan adalah: Frontend (ada ✓), Backend (tidak ada ✗), Tester (tidak ada ✗)."
>
> AI menawarkan **3 opsi adaptasi** kepada tim:
> 1. **Redistribusi cakupan**: "Karena tidak ada backend, salah satu dari kalian perlu handle bagian API/server. AI akan memecah task backend menjadi unit-unit kecil yang bisa dikerjakan bertahap oleh yang belum berpengalaman."
> 2. **Penyesuaian scope proyek**: "Fokuskan proyek ke bagian yang bisa dikerjakan tim ini — frontend + mockup/prototype tanpa backend nyata."
> 3. **Peringatan ke koordinator**: "Tim ini memiliki gap skill. Pertimbangkan diskusi dengan dosen untuk penyesuaian scope tugas."

**Skenario B — Tim belum dibentuk, sistem bisa bantu rekomendasi matching**

> AI merekomendasikan komposisi tim yang mendistribusikan *scarce skill* (backend) se-merata mungkin ke seluruh tim sebelum dosen mengacak. Dari 10 tim: 5 tim mendapat komposisi ideal (1 frontend + 1 backend), 5 tim sisanya mendapat 2 frontend dengan scope yang sudah diadaptasi. Rekomendasi ini diserahkan sebagai usulan ke koordinator/dosen — bukan keputusan final sistem.

**Skenario C — Tim 2 frontend, tapi salah satu bisa belajar backend untuk proyek ini**

> AI mendeteksi gap dan menawarkan jalur belajar: "Tim kamu tidak punya backend developer. Ini artinya satu dari kalian perlu menangani bagian ini. AI bisa membantu urai task backend menjadi langkah kecil yang lebih mudah dipelajari sambil dikerjakan."

#### Prinsip yang Mengatur Ketiga Skenario

| Prinsip | Penjelasan |
|---------|-----------|
| **Sistem tidak boleh berasumsi bahwa setiap tim punya semua role yang dibutuhkan** | Setelah CV diekstrak, AI selalu menjalankan gap check sebelum merekomendasikan pembagian tugas. [ASUMSI] |
| **Gap bukan kegagalan — gap adalah informasi** | Sistem tidak menolak tim yang skill-nya imbalanced; ia mengadaptasi pembagian tugas agar tetap adil dalam konteks komposisi yang ada. [ASUMSI] |
| **Porsi adil ≠ role sama** | Dua orang dengan skill berbeda bisa memiliki porsi kerja yang setara meski role-nya berbeda — sistem menilai kesetaraan dari estimasi waktu dan kompleksitas sub-tugas, bukan dari jumlah role yang sama. [ASUMSI] |
| **Transparansi gap ke seluruh tim** | Semua anggota melihat gap analysis yang sama — tidak ada yang tersembunyi — sehingga keputusan adaptasi adalah keputusan bersama, bukan keputusan koordinator sendiri. [ASUMSI] |

---

### 5.4 Detail Tiap Fase

#### FASE 1 — Cocokkan

**Masalah yang diserang:** Komposisi tim tidak diketahui secara eksplisit; tidak ada basis data untuk pembagian role yang cerdas.

**Mekanisme:**
1. Koordinator buat room → bagikan kode ke anggota.
2. Setiap anggota **upload CV** (PDF). AI mengekstrak: keahlian teknis, pengalaman organisasi, gaya kerja yang bisa diinferens.
3. Profil hasil ekstraksi ditampilkan ringkas — anggota koreksi dengan satu klik, bukan isi dari nol.
4. Koordinator pilih **jenis tugas** (Makalah / Presentasi / Proyek IT / Studi Kasus / dll.).
5. AI jalankan **Gap Analysis**: role apa yang dibutuhkan vs. yang tersedia → tampilkan ke seluruh tim.
6. AI tawarkan opsi adaptasi jika ada gap (lihat §5.3 di atas).

**Fallback untuk mahasiswa tanpa CV:** Opsi "isi 3 pertanyaan singkat" — keahlian utama, pengalaman relevan, ketersediaan waktu. [ASUMSI: ini mengurangi hambatan onboarding]

---

#### FASE 2 — Bagi Tugas

**Masalah yang diserang:** Pembagian tugas tidak jelas, tidak ada *Definition of Done*, porsi tidak setara, tidak ada deadline internal.

**Mekanisme:**
1. Koordinator paste deskripsi tugas dari dosen.
2. AI membaca jenis tugas + gap analysis → memecah menjadi sub-tugas spesifik dengan kriteria selesai yang jelas.
3. Sub-tugas di-assign ke anggota berdasarkan role yang sudah disepakati di Fase 1.
4. AI menyarankan estimasi waktu dan deadline internal per sub-tugas berdasarkan deadline final.
5. **Porsi diverifikasi AI:** sistem menghitung apakah estimasi beban tiap anggota setara. Jika tidak — AI memberi peringatan dan menyarankan redistribusi sebelum tim mengonfirmasi.
6. Tim konfirmasi atau geser assignment → **board pembagian tugas** terkunci dan terlihat semua anggota.

---

#### FASE 3 — Monitor

**Masalah yang diserang:** Tidak ada *shared visibility*; koordinator mengejar anggota satu per satu via WA; tidak ada deteksi dini ketimpangan.

**Mekanisme (semua di dalam app):**
- Setiap anggota update status sub-tugasnya dengan satu tap: **Belum Mulai / Sedang Dikerjakan / Selesai**.
- **Board progres tim** terlihat oleh semua anggota secara real-time — tidak perlu WA.
- AI mendeteksi sub-tugas mendekati deadline tapi belum mulai → kirim notifikasi **privat** ke anggota yang bertanggung jawab (bukan broadcast publik).
- Jika tidak ada update dalam X hari → AI notifikasi privat ke koordinator: "Sub-tugas [X] belum ada update sejak [tanggal]."
- Koordinator memutuskan langkah selanjutnya — sistem tidak mengambil tindakan otomatis yang bisa mempermalukan anggota.

---

#### FASE 4 — Log & Output

**Masalah yang diserang:** Tidak ada bukti kontribusi individual; penilaian kolektif tidak mencerminkan kerja nyata.

**Mekanisme:**
- Semua update status, komentar, dan upload file tercatat otomatis dengan timestamp.
- Setelah tugas dikumpulkan, app menghasilkan **Laporan Kontribusi** per anggota: sub-tugas apa, selesai kapan, berapa persen dari total beban tim.
- AI menghitung dan menampilkan indikator kesetaraan beban — dengan peringatan visual jika ada ketimpangan signifikan.
- Laporan bisa di-export (PDF/link) dan opsional dibagikan ke dosen.

---

### 5.5 Perbandingan Akhir

| Dimensi | Trello / Notion | Rekomendasi Lama (Ide 1+10) | **SatuTim (Konsep Baru)** |
|---------|----------------|----------------------------|---------------------------|
| Onboarding | Isi manual | Bot kickoff | Upload CV → AI ekstrak |
| Konteks jenis tugas | Tidak ada | Tidak ada | Pilih jenis tugas → AI sesuaikan role & sub-tugas |
| Skill gap analysis | Tidak ada | Tidak ada | **Ada — deteksi gap + 3 opsi adaptasi** |
| Pembagian tugas | Manual | Saran AI generik | AI berbasis profil CV + jenis tugas + gap analysis |
| Monitor | Manual (pindah kartu) | Di luar app (WA) | Di dalam app — satu tap, board real-time |
| Notifikasi | Manual / tidak ada | Mediator AI via WA | Privat in-app, tidak mempermalukan publik |
| Log kontribusi | Tidak ada | Tidak ada | Otomatis — laporan porsi per anggota + export |
| Fragmentasi | Tinggi | Tinggi (masih pakai WA) | **Rendah — semua di satu app** |
| Diferensiasi | — | Sedang | **Kuat** — gap analysis + role-aware task splitting belum ada di tool mahasiswa |

---

### 5.6 Scope MVP Minimum untuk Build Week 3 Hari

| Prioritas | Fase | Status Target |
|-----------|------|--------------|
| **Harus selesai dan berjalan** | Fase 1: CV upload + ekstraksi profil + pilih jenis tugas + gap analysis | Live di demo |
| **Harus selesai dan berjalan** | Fase 2: AI bagi sub-tugas + board pembagian + verifikasi porsi | Live di demo |
| **Bisa mockup/statis** | Fase 3: Board progres + notifikasi privat | UI mockup di demo |
| **Bisa mockup/statis** | Fase 4: Log kontribusi + laporan | Preview statis di demo |

> **Demo 3 menit yang ideal:** Tunjukkan Fase 1 dan 2 secara live (upload CV → AI ekstrak → gap analysis muncul → pilih jenis tugas → AI bagi sub-tugas → board muncul dengan porsi yang terverifikasi). Kemudian tunjukkan mockup Fase 3 dan 4 sebagai "begini tampilannya setelah tim bekerja beberapa hari."

---

### 5.7 Pemilihan Fokus MVP: 2 Jenis Tugas untuk Build Week

#### Alasan Tidak Mengambil Semua 5 Jenis Tugas

Setiap jenis tugas membutuhkan **template role yang berbeda, pola sub-tugas yang berbeda, dan indikator selesai yang berbeda**. Mengimplementasikan kelimanya dalam 3 hari berarti 5 set logika AI yang setengah matang — tidak ada yang bekerja dengan baik. Lebih baik 2 jenis tugas yang dalam daripada 5 yang dangkal. [ASUMSI]

#### Kriteria Seleksi

| Kriteria | Bobot Pertimbangan |
|----------|-------------------|
| **Frekuensi** — seberapa sering jenis ini diberikan, lintas jurusan | Tinggi |
| **Manfaat dari sistem** — seberapa besar role-nya berbeda antar anggota (makin berbeda = makin butuh gap analysis + matching) | Tinggi |
| **Kompleksitas template** — seberapa predictable pola role dan sub-tugasnya untuk diimplementasikan dalam 3 hari | Sedang |

#### Evaluasi 5 Jenis Tugas

| Jenis Tugas | Frekuensi Lintas Jurusan | Manfaat dari Sistem | Kompleksitas Template | **Skor** |
|-------------|:------------------------:|:-------------------:|:---------------------:|:--------:|
| Makalah / Laporan | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Rendah ✓ | **Tinggi** |
| Presentasi | ⭐⭐⭐⭐ | ⭐⭐ | Rendah ✓ | Sedang |
| Proyek IT / Teknik | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Sedang–Tinggi | **Tinggi** |
| Studi Kasus / Analisis | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Sedang | Sedang–Tinggi |
| Proyek Lapangan | ⭐⭐ | ⭐⭐⭐ | Tinggi ✗ | Rendah |

**Pilihan MVP: Makalah/Laporan + Proyek IT/Teknik**

- **Makalah/Laporan** → *beachhead* universal: hampir semua mahasiswa semua jurusan semua semester pernah mengerjakan ini. Template role predictable, mudah diimplementasikan, dan memvalidasi sistem di audiens terluas.
- **Proyek IT/Teknik** → *showcase* gap analysis: role paling berbeda (frontend ≠ backend ≠ tester), skenario imbalance paling dramatis dan paling bisa didemo secara langsung (persis kasus 15 frontend + 5 backend). Ini membuktikan nilai diferensiasi sistem yang paling kuat.

Keduanya saling melengkapi: Makalah untuk universalitas, Proyek IT untuk kecanggihan.

---

### 5.8 Alur Lengkap per Jenis Tugas yang Dipilih

---

#### TIPE A — Makalah / Laporan Tertulis

**Konteks umum:** Tugas kelompok berbentuk dokumen tertulis (makalah, laporan observasi, laporan praktikum, paper). Diberikan di hampir semua jurusan. Deadline biasanya 1–3 minggu.

**Role template yang di-generate AI:**

| Role | Tanggung Jawab | Indikator Selesai |
|------|---------------|-------------------|
| **Penulis Bab [n]** | Menulis konten bab yang ditugaskan sesuai outline | Draft bab lengkap + masuk dokumen bersama + ditandai "siap review" |
| **Pencari Referensi** | Mengumpulkan dan memformat sumber yang relevan | Minimal [n] sumber dikumpulkan + diformat sesuai gaya sitasi yang disepakati |
| **Editor / Reviewer** | Membaca seluruh draft, memberi komentar, memastikan konsistensi bahasa dan alur | Semua bab sudah dikomentari + komentar utama sudah dibalas penulis |
| **Layouter / Formatter** | Mengatur format dokumen akhir (margin, heading, daftar isi, halaman) | Dokumen final sesuai ketentuan dosen + siap upload |

**Gap analysis untuk Makalah:**

Makalah lebih homogen dari Proyek IT — hampir semua mahasiswa bisa menulis. Gap yang muncul biasanya bukan skill teknis tapi **kapasitas dan kualitas**:

> *Jika semua anggota profil CV-nya generalis (tidak ada yang menonjol sebagai editor atau researcher)*, AI tidak melakukan gap alert — melainkan membagi bab secara merata berdasarkan estimasi waktu, lalu menugaskan role editor ke anggota yang beban penulisannya paling ringan.

> *Jika jumlah anggota tidak habis dibagi jumlah bab*, AI menggabungkan role: "Anggota ini menulis Bab 2 sekaligus menjadi editor Bab 1."

**Alur konkret di SatuTim — Makalah 4 orang, 4 bab, deadline 2 minggu:**

```
[Fase 1 — Cocokkan]
  4 anggota upload CV
  AI ekstrak: tidak ada skill teknis khusus yang menonjol
  Koordinator pilih jenis tugas: "Makalah / Laporan"
  AI tampilkan template role: Penulis Bab 1, Penulis Bab 2,
    Penulis Bab 3+Editor, Pencari Referensi+Layouter
  Gap check: tidak ada gap kritis (semua bisa menulis)
  Tim konfirmasi assignment

[Fase 2 — Bagi Tugas]
  Koordinator paste outline + deskripsi tugas dosen
  AI pecah: Bab 1 (Pendahuluan) → 3 sub-tugas:
    1.1 Latar belakang (est. 3 jam) → Anggota A
    1.2 Rumusan masalah & tujuan (est. 1 jam) → Anggota A
    1.3 Review sumber minimal 5 referensi (est. 2 jam) → Anggota D
  [sama untuk Bab 2, 3, 4]
  AI verifikasi porsi: Anggota A (6 jam), B (5 jam),
    C (7 jam), D (6 jam) → "Beban A dan C sedikit berbeda,
    apakah ingin digeser?"
  Tim konfirmasi → board terkunci

[Fase 3 — Monitor]
  Setiap anggota update: Belum Mulai → Dikerjakan → Selesai
  H-3 deadline: Bab 3 belum ada update → notifikasi privat ke C
  Board terlihat semua: A ✓ B ✓ C ⏳ D ✓

[Fase 4 — Log]
  Laporan: A (32% beban), B (28%), C (27%), D (13%)
  ⚠ AI flag: porsi D lebih rendah dari estimasi awal
  Tim dan dosen bisa lihat log ini
```

---

#### TIPE B — Proyek IT / Teknik / Prototipe

**Konteks umum:** Tugas kelompok berbentuk aplikasi, sistem, atau prototipe fungsional. Umumnya di jurusan Informatika, Sistem Informasi, Teknik Elektro, Desain Produk. Deadline biasanya 2–6 minggu. **Ini adalah jenis tugas di mana gap analysis paling kritis dan paling memberi nilai.**

**Role template yang di-generate AI:**

| Role | Tanggung Jawab | Indikator Selesai |
|------|---------------|-------------------|
| **Project Manager** | Koordinasi jadwal, komunikasi antar role, pastikan semua sub-tugas on track | Semua milestone terpenuhi + dokumentasi rapat singkat tersimpan |
| **UI/UX Designer** | Desain tampilan dan alur penggunaan | Wireframe/mockup lengkap semua halaman + sudah di-review developer |
| **Frontend Developer** | Implementasi tampilan | Semua halaman berfungsi sesuai mockup + responsif |
| **Backend Developer** | Implementasi logika server, API, database | API endpoint berjalan + terdokumentasi + sudah ditest frontend |
| **Tester / QA** | Uji fungsionalitas end-to-end | Test case terdokumentasi + semua bug kritis sudah dilaporkan |
| **Technical Writer** | Menulis dokumentasi teknis dan laporan | Dokumentasi lengkap + sesuai format yang diminta dosen |

**Gap analysis untuk Proyek IT — kasus imbalance:**

```
Contoh: Tim 3 orang, semua frontend developer (dari CV)
Jenis tugas dipilih: Proyek IT

AI Gap Analysis:
  Role yang dibutuhkan:  Frontend ✓ | Backend ✗ | UI/UX ✗ | Tester ✗
  
  AI menawarkan 3 opsi:

  [Opsi 1 — Redistribusi cakupan]
  "Tidak ada backend developer di tim ini. Salah satu dari
  kalian perlu menangani backend. AI akan memecah task
  backend menjadi langkah kecil:
    - Setup database sederhana (tutorial tersedia)
    - Buat 2 API endpoint dasar
    - Koneksikan ke frontend
  Estimasi: bisa dipelajari sambil dikerjakan dalam 3-4 hari."
  
  [Opsi 2 — Penyesuaian scope]
  "Fokuskan proyek ke frontend + mockup. Gunakan data statis
  atau JSON lokal sebagai pengganti backend nyata. Scope ini
  realistis untuk tim full-frontend."
  
  [Opsi 3 — Peringatan ke koordinator]
  "Tim ini memiliki gap skill signifikan. Disarankan diskusi
  dengan dosen tentang penyesuaian scope atau komposisi tim."

Tim pilih Opsi 2 → AI regenerate template role:
  Anggota A: Frontend + integrasi data statis
  Anggota B: UI/UX + desain semua halaman
  Anggota C: Technical Writer + Tester
  Porsi: A (40%), B (35%), C (25%) → AI flag: C lebih ringan,
    tawarkan tambahan sub-tugas ke C
```

**Alur konkret di SatuTim — Proyek IT 4 orang, 1 frontend + 1 backend + 1 UI/UX + 1 PM:**

```
[Fase 1 — Cocokkan]
  4 anggota upload CV
  AI ekstrak: A=frontend, B=backend, C=UI/UX, D=generalis
  Koordinator pilih jenis tugas: "Proyek IT / Prototipe"
  AI tampilkan gap check: Frontend ✓ Backend ✓ UI/UX ✓
    PM → AI assign ke D (profil paling generalis)
    Tester → dibagi antara A dan B (cross-test)
  "Komposisi tim ini ideal untuk proyek IT ✓"
  Tim konfirmasi assignment

[Fase 2 — Bagi Tugas]
  Koordinator paste deskripsi proyek dosen
  AI pecah berdasarkan komponen:
    Frontend (A): Landing page, Form input, Dashboard tampilan
    Backend (B): API auth, API data, Koneksi database
    UI/UX (C): Wireframe semua halaman, Design system, Review UI
    PM (D): Jadwal sprint, Dokumentasi, Laporan akhir
  AI verifikasi porsi berdasarkan estimasi jam:
    A (12 jam), B (14 jam), C (8 jam), D (6 jam)
    ⚠ "B dan C beban berbeda cukup signifikan.
    Pertimbangkan memindahkan 1 sub-tugas dari B ke C."
  Tim sesuaikan → konfirmasi

[Fase 3 — Monitor]
  Setiap anggota update per sub-tugas
  API auth (B) belum ada update H-5 → notifikasi privat ke B
  Board: A 2/3 ✓ | B 0/3 ⏳ | C 3/3 ✓ | D 1/2 ✓
  Koordinator lihat alert: backend tertinggal
  Koordinator hubungi B (keputusan manusia, bukan sistem)

[Fase 4 — Log]
  Laporan akhir: A (38%), B (31%), C (24%), D (7%)
  ⚠ D porsi jauh di bawah estimasi → terdokumentasi
  Export PDF untuk dosen
```

---

#### Perbandingan Cepat Dua Tipe

| Aspek | Makalah / Laporan | Proyek IT / Teknik |
|-------|------------------|-------------------|
| Target jurusan | Semua jurusan | Teknis (Informatika, SI, Teknik) |
| Role-nya homogen? | Relatif ya (semua bisa nulis) | Tidak — skill sangat berbeda |
| Gap analysis kritis? | Jarang | Sangat sering |
| Kompleksitas template | Rendah → mudah dibuat | Sedang → butuh lebih banyak variasi |
| Demo value | Universal, relatable | Dramatic, showcases AI capability |
| Prioritas implementasi Build Week | **Hari 1–2** | **Hari 2–3** |

> **Strategi implementasi 3 hari:** Selesaikan Makalah sepenuhnya di hari pertama sebagai fondasi (logika ekstraksi CV, gap check, board). Hari kedua tambahkan template Proyek IT dengan gap analysis yang lebih kaya. Hari ketiga polish UI, Fase 3 mockup, dan siapkan demo script.

---

### Ide yang Tidak Dipilih — Alasan Penolakan

| Ide | Alasan Tidak Dipilih |
|-----|---------------------|
| **Ide 1 — Kickoff Pact** | Elemen kontrak tim diserap ke dalam Fase 1 (working agreement jadi bagian setup room); tidak cukup kuat sebagai produk mandiri. |
| **Ide 2 — Contribution Mirror** | Integrasi Google Docs API terlalu berat untuk 3 hari; fungsinya sudah tercakup di Fase 4 (log kontribusi internal). |
| **Ide 3 — Bot WA Team Pulse** | Bergantung pada WA — mereproduksi fragmentasi yang ingin diselesaikan; digantikan Fase 3 in-app. |
| **Ide 4 — Task Decomposer** | Terlalu mirip ChatGPT biasa jika berdiri sendiri; fungsionalitasnya ada di Fase 2. |
| **Ide 5 — Peer Nudge Anonim** | Risiko etis; digantikan notifikasi privat-suportif di Fase 3. |
| **Ide 6 — Role Roulette** | Bergantung pada pengisian profil manual; digantikan ekstraksi CV di Fase 1. |
| **Ide 7 — Papan Fisik** | Tidak digital; tidak relevan untuk kompetisi IBM Bob. |
| **Ide 8 — Weekly Retrospective** | Bisa jadi fitur tambahan post-MVP; bukan inti untuk 3 hari. |
| **Ide 9 — Contribution Auction** | Terlalu spekulatif; berisiko merusak kohesi tim. |
| **Ide 10 — AI Mediator** | Diserap ke dalam mekanisme notifikasi privat Fase 3; tidak perlu berdiri sendiri. |
| **Ide 11 — Skill-Match Buddy** | Bergantung pada dosen; fungsionalitasnya sudah ada di Fase 1 (matching berbasis CV dalam kelompok yang sudah terbentuk). |

---

*Dokumen ini adalah bagian dari fase ideasi. Langkah berikutnya: pilih fokus, lalu susun konsep produk di plans/06.*
