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

## 5. Rekomendasi Fokus

### Rekomendasi Utama: **IDE 1 + IDE 10 digabung** → *"SatuTim: AI Fasilitator Kesepakatan & Mediasi Kelompok"*

**Konsep gabungan:** Sebuah web app / interactive bot yang memandu dua momen kritis dalam siklus tugas kelompok:
1. **Awal:** AI memandu sesi kickoff 5 menit untuk menyepakati peran, deadline internal, dan aturan komunikasi — menghasilkan "Pact" yang tersimpan dan bisa dirujuk kapan saja.
2. **Tengah jalan:** Jika ada anggota yang tidak aktif, AI bertindak sebagai mediator netral — berbicara atas nama kelompok tanpa mengungkap siapa yang "mengadu", menggunakan bahasa suportif bukan menghukum.

**Mengapa ini lebih baik dari ide awal tim:**

| Dimensi | Ide Awal (Task Tracker) | Rekomendasi (Fasilitator Momen Kritis) |
|---------|------------------------|---------------------------------------|
| Hambatan adopsi S3 | Tinggi — harus login, isi data, rutin buka app | Lebih rendah — cukup merespons 1 pesan AI saat kickoff |
| Diferensiasi dari Trello/Notion | Lemah | Kuat — tidak ada tool yang memfokuskan diri pada *momen kickoff + mediasi* |
| Demo 3 menit | Sulit menunjukkan nilai nyata | Bisa di-demo sebagai percakapan AI yang hidup |
| IBM Bob Utilization | Sedang (generasi form + reminder) | Tinggi (multi-mode: Plan mode untuk kickoff, Agent mode untuk mediasi, Ask mode untuk panduan tim) |
| Kelayakan 3 hari | Bisa, tapi fitur bisa membengkak | Terfokus — 2 alur utama yang bisa dibangun dan ditest dalam 3 hari |

**Apa yang dikorbankan:**
- Tidak ada *full task tracking* — progres tugas tidak dilacak secara granular.
- Tidak ada visibilitas kontribusi real-time — tidak ada "leaderboard" atau dashboard siapa mengerjakan berapa.
- Tidak menyentuh masalah pembentukan tim (*matching*) — tim diarahkan untuk menerima komposisi yang ada dan memaksimalkan dinamika internal.

> **Alasan pengorbanan ini diterima:** Melacak kontribusi real-time (Ide 2) terlalu berat secara teknis untuk 3 hari. Matching pre-kelompok (Ide 11) bergantung pada dosen. Fokus pada dua momen kritis memungkinkan produk yang *selesai dan demo-able* lebih kuat daripada produk yang *hampir selesai tapi ambisius*.

### Alternatif jika Rekomendasi Utama Terlalu Kompleks: **IDE 8 murni** → *Weekly Retrospective Bot*

Lebih sederhana secara teknis: hanya chatbot yang mengirimkan 3 pertanyaan refleksi per minggu dan merangkum jawabannya. Skor IBM Bob tetap tinggi (generasi pertanyaan adaptif, ringkasan AI). Lebih mudah dibangun dalam 3 hari dengan risiko lebih rendah. Kelemahannya: orisinalitas lebih rendah dan dampak pada S3 lebih tidak langsung.

---

### Ide yang Tidak Dipilih — Alasan Penolakan

| Ide | Alasan Tidak Dipilih |
|-----|---------------------|
| **Ide 2 — Contribution Mirror** | Integrasi Google Docs API tidak trivial dalam 3 hari; risiko "gaming" sistem tinggi; bisa menimbulkan rasa malu pada S3 alih-alih mendorong keterlibatan. |
| **Ide 3 — Bot WA Team Pulse** | WhatsApp API memiliki batasan teknis signifikan; format bot di WA sudah familiar tapi tidak cukup diferensiasi untuk memenangkan kompetisi inovasi. |
| **Ide 4 — Task Decomposer** | Berguna tapi terlalu mirip fitur-fitur yang sudah ada di ChatGPT atau Notion AI; orisinalitas rendah; tidak menyentuh hambatan sosial sama sekali. |
| **Ide 5 — Peer Nudge Anonim** | Risiko etis terlalu tinggi — anonimitas bisa disalahgunakan; perlu desain keamanan yang melampaui scope 3 hari. |
| **Ide 6 — Role Roulette** | Bergantung pada kejujuran pengisian profil; nilai diferensiasi sedang; tidak menyelesaikan masalah anggota yang sudah ada di dalam kelompok yang jelek. |
| **Ide 7 — Papan Fisik** | Tidak bisa di-demo secara digital; tidak relevan untuk kompetisi yang menilai IBM Bob Utilization. |
| **Ide 9 — Contribution Auction** | Terlalu spekulatif secara perilaku; bisa merusak kohesi tim; butuh pengujian A/B yang tidak mungkin dilakukan dalam 3 hari. |
| **Ide 11 — Skill-Match Buddy** | Bergantung pada dosen sebagai gatekeeper — hambatan institusional yang tidak bisa dikendalikan oleh produk mahasiswa. |

---

*Dokumen ini adalah bagian dari fase ideasi. Langkah berikutnya: pilih fokus, lalu susun konsep produk di plans/06.*
