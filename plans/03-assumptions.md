# 03 — Audit Asumsi & Rencana Validasi

> **Catatan metodologis penting:** Seksi E dari `docs/brief.md` dideskripsikan sebagai *"tabel berisi klaim, tautan sumber, dan kolom sudah dibuka dan diverifikasi tim? ya/tidak"* — namun **tabel tersebut tidak ada dalam file yang tersedia**. Isi seksi E hanya berupa deskripsi meta, bukan data aktual. Konsekuensinya: audit Seksi 2 dokumen ini tidak dapat memverifikasi klaim spesifik, hanya dapat mengaudit *kerangka* yang diklaim ada. Ini dicatat secara transparan sesuai ground rule F(6). Semua klaim tentang riset pendukung tim ditandai [TIDAK-DAPAT-DIVERIFIKASI] kecuali bisa dibaca langsung dari file.

---

## 1. Inventaris Asumsi Kritis

Empat asumsi paling berisiko ditandai dengan 🔴. Asumsi lain ditandai 🟡 (risiko sedang) atau 🟢 (risiko lebih rendah).

### 1.1 Asumsi tentang Masalah

| ID | Asumsi | Dampak Jika Salah | Status Bukti | Risiko |
|----|--------|------------------|--------------|--------|
| A-P1 | Masalah *free-rider* dan koordinasi buruk terjadi cukup sering dan cukup menyakitkan sehingga mahasiswa mau mengadopsi tool baru untuk mengatasinya. | Tidak ada permintaan nyata (*demand*) — produk tidak dipakai meski dibuat. | [PERLU-SUMBER] | 🔴 |
| A-P2 | Mahasiswa mempersepsikan ketimpangan kontribusi sebagai masalah yang layak diselesaikan secara teknologi, bukan sekadar "sudah biasa" atau "urusan personal". | Solusi dianggap berlebihan atau aneh secara sosial; adopsi nol. | [ASUMSI] | 🔴 |
| A-P3 | Masalah paling besar ada pada proses (koordinasi, visibilitas), bukan pada output (kualitas konten tugas). | Produk menyasar lapisan yang salah; pengguna tidak merasakan nilai. | [ASUMSI] — diklaim dari brief seksi D [FAKTA-BRIEF], tapi tidak bisa diuji tanpa data lapangan. | 🟡 |
| A-P4 | Tim yang dibentuk secara acak oleh dosen mengalami masalah yang lebih berat dibanding tim yang memilih sendiri. | Fitur "matching tim" menjadi tidak relevan jika pengguna target membentuk tim sendiri. | [PERLU-SUMBER] | 🟡 |

### 1.2 Asumsi tentang Penyebab

| ID | Asumsi | Dampak Jika Salah | Status Bukti | Risiko |
|----|--------|------------------|--------------|--------|
| A-C1 | Penyebab utama adalah ketiadaan *shared visibility* (tidak ada yang tahu siapa mengerjakan apa). | Jika penyebab utama adalah konflik pribadi atau kemalasan yang disengaja, visibilitas tidak menyelesaikan apa pun. | [ASUMSI] | 🟡 |
| A-C2 | Norma sosial (*sungkan*, tidak mau konfrontasi) memperparah masalah secara signifikan di kalangan mahasiswa perkotaan Surabaya. | Jika norma ini tidak terlalu kuat di segmen ini, framing produk yang "aman secara sosial" menjadi over-engineered. | [ASUMSI] — tidak ada sumber di brief untuk populasi spesifik ini. | 🟡 |
| A-C3 | Mahasiswa pernah mencoba tools seperti Trello/Notion dan berhenti karena friksi — bukan karena tidak pernah tahu. | Jika mahasiswa memang tidak tahu tool ini ada, solusinya adalah edukasi, bukan tool baru. | [PERLU-SUMBER] | 🟡 |
| A-C4 | *Diffusion of responsibility* meningkat signifikan seiring ukuran kelompok dalam konteks tugas kuliah Indonesia. | Jika efeknya kecil atau tidak berbeda antar ukuran kelompok, desain yang berfokus pada ukuran kelompok tidak relevan. | [ASUMSI] | 🟢 |

### 1.3 Asumsi tentang Adopsi

| ID | Asumsi | Dampak Jika Salah | Status Bukti | Risiko |
|----|--------|------------------|--------------|--------|
| A-A1 | Seluruh anggota kelompok akan mau menggunakan tool yang sama — termasuk anggota yang justru tidak aktif. | Jika anggota pasif menolak bergabung, tool hanya dipakai oleh yang sudah termotivasi; masalah inti tidak tersentuh. | [ASUMSI] | 🔴 |
| A-A2 | Mahasiswa mau menggunakan satu tool tambahan di atas WA, LMS kampus, dan platform yang sudah ada. | Jika mahasiswa sudah *tool-fatigue*, produk tidak akan digunakan setelah demo. | [ASUMSI] | 🔴 |
| A-A3 | Mahasiswa di Surabaya memiliki akses smartphone dan koneksi data yang cukup stabil untuk menggunakan aplikasi web/mobile secara konsisten selama pengerjaan tugas. | Hambatan teknis menjadi penghalang nyata yang tidak bisa diatasi oleh desain produk. | [PERLU-SUMBER] — diasumsikan, meski kemungkinan besar benar untuk kampus urban Surabaya. | 🟢 |
| A-A4 | Mahasiswa bersedia membuka data kontribusi pribadi mereka kepada anggota tim lain secara transparan. | Jika privasi lebih diprioritaskan, fitur transparansi justru menciptakan resistensi; model harus diubah ke pendekatan yang lebih privat. | [ASUMSI] | 🟡 |

### 1.4 Asumsi tentang Dosen dan Ekosistem

| ID | Asumsi | Dampak Jika Salah | Status Bukti | Risiko |
|----|--------|------------------|--------------|--------|
| A-E1 | Dosen tidak akan melarang atau membatasi penggunaan tool tambahan di luar LMS resmi kampus. | Jika kampus memiliki kebijakan pembatasan tool, adopsi akan terhalang secara institusional. | [PERLU-SUMBER] | 🟡 |
| A-E2 | Dosen memiliki insentif untuk mendukung akuntabilitas kontribusi individual — artinya mereka akan mendorong mahasiswa menggunakan tool ini. | Jika dosen tidak peduli dengan proses (hanya hasil), tidak ada "push factor" dari sisi institusional. | [ASUMSI] | 🟡 |
| A-E3 | Masalah ini cukup universal di berbagai jurusan sehingga produk tidak perlu dikustomisasi per program studi. | Jika masalah sangat berbeda antar jurusan (misal: teknik vs. seni vs. hukum), cakupan produk perlu disempitkan. | [ASUMSI] | 🟢 |

---

## 2. Audit Klaim Seksi E

### 2.1 Ketersediaan Data

> **Temuan langsung:** Seksi E dalam `docs/brief.md` berbunyi: *"Riset pendukung dari tim: tabel berisi klaim, tautan sumber, dan kolom 'sudah dibuka dan diverifikasi tim? ya/tidak'."*
>
> **Masalah:** Tabel itu sendiri **tidak hadir dalam file**. Yang ada hanya deskripsi meta dari isi tabel. Tidak ada satu pun klaim, tautan, atau status verifikasi yang dapat dibaca.
>
> **Konsekuensi untuk audit ini:** Tidak ada klaim konkret dari seksi E yang dapat dievaluasi satu per satu. Semua baris di bawah ini berstatus **[TIDAK-DAPAT-DIVERIFIKASI]** dengan alasan: konten tidak tersedia dalam file yang bisa dibaca.

### 2.2 Tabel Audit (berdasarkan kerangka yang diklaim ada)

| Elemen yang Diklaim Ada di Seksi E | Status Audit | Alasan |
|------------------------------------|--------------|--------|
| Klaim-klaim riset pendukung (isi spesifik) | ❌ TIDAK DAPAT DIVERIFIKASI | Tabel tidak hadir dalam file `docs/brief.md` yang tersedia. |
| Tautan sumber untuk tiap klaim | ❌ TIDAK DAPAT DIVERIFIKASI | Tautan tidak ada dalam file; bahkan jika ada, pembukaan URL eksternal di luar kemampuan saat ini. |
| Kolom "sudah dibuka dan diverifikasi tim? ya/tidak" | ❌ TIDAK DAPAT DIVERIFIKASI | Kolom tidak hadir; tidak bisa dikonfirmasi apakah tim benar-benar membuka sumber-sumber tersebut. |

### 2.3 Catatan Metodologis untuk Tim

Tiga risiko yang perlu diwaspadai tim saat mengisi tabel seksi E:

1. **Risiko sumber tunggal kecil:** Klaim tentang perilaku sosial mahasiswa (misal: "X% mahasiswa pernah mengalami *free-rider*") sering berasal dari studi lokal dengan sampel kecil (< 100 responden) di satu kampus. Generalisasi ke seluruh mahasiswa Surabaya tidak valid tanpa replikasi. **Tag yang tepat: [PERLU-SUMBER] atau catatan ukuran sampel.**

2. **Risiko klaim yang dilebih-lebihkan:** Judul artikel berita atau blog sering membesar-besarkan temuan dari paper aslinya. Tim perlu membaca abstrak atau isi paper, bukan hanya judulnya — dan mencatat apakah sumber adalah artikel peer-reviewed, laporan institusi, atau opini.

3. **Risiko tautan mati atau sumber berbayar:** Jika tautan dalam tabel mengarah ke jurnal berbayar atau halaman yang sudah tidak aktif, klaim tersebut praktis tidak terverifikasi. Tandai sebagai [TIDAK-DAPAT-DIAKSES].

---

## 3. Indikator Faktual untuk Mengonfirmasi Keparahan Masalah

> **Catatan:** Semua ambang batas di bawah ini adalah **proposal tim** berdasarkan pertimbangan pragmatis untuk konteks hackathon — bukan standar akademis atau industri yang mapan. Angka-angka ini harus dibaca sebagai "jika hasil survei melampaui ini, kami menganggap masalahnya cukup berat untuk dilanjutkan", bukan sebagai tolok ukur yang diterima secara umum.

### 3.1 Indikator Keparahan Masalah

| # | Indikator | Cara Mengukur | Ambang Batas yang Diusulkan | Rasional |
|---|-----------|--------------|----------------------------|----------|
| I-1 | Persentase mahasiswa yang pernah terlibat dalam kelompok dengan ketimpangan kontribusi signifikan | Pertanyaan survei pilihan tunggal | **≥ 60% pernah mengalami** (proposal) | Jika mayoritas pernah merasakannya, masalah cukup luas untuk diangkat. |
| I-2 | Frekuensi kejadian per semester | Pertanyaan survei skala frekuensi | **≥ 1 kali per semester di > 50% responden** (proposal) | Masalah episodik vs. sistemik — jika hanya sekali dalam kuliah, bukan masalah yang mendesak. |
| I-3 | Tingkat frustrasi yang dirasakan | Skala Likert 1–5 | **Rata-rata ≥ 3,5 dari 5** (proposal) | Di bawah angka ini, masalah belum cukup "menyakitkan" untuk mendorong perubahan perilaku. |
| I-4 | Kesediaan mencoba tool baru jika gratis dan mudah dipakai | Pertanyaan survei ya/tidak/mungkin | **≥ 50% menjawab "ya" atau "mungkin"** (proposal) | Ambang batas adopsi awal yang masuk akal untuk produk baru tanpa *network effect*. |

### 3.2 Indikator Perilaku Adopsi yang Lebih Kuat

| # | Indikator | Cara Mengukur | Ambang Batas yang Diusulkan |
|---|-----------|--------------|----------------------------|
| I-5 | Apakah responden saat ini menggunakan tool selain WA untuk koordinasi kelompok? | Pertanyaan survei pilihan ganda | Jika **< 30% menggunakan tool terstruktur** (proposal), gap tool nyata. |
| I-6 | Alasan berhenti menggunakan tool koordinasi (jika pernah mencoba) | Pertanyaan terbuka atau pilihan ganda | Jika **"terlalu rumit" atau "anggota lain tidak mau pakai"** muncul di > 40% jawaban (proposal), ini mengonfirmasi hambatan bukan kesadaran. |
| I-7 | Apakah ada yang berencana bertanya ke dosen soal kontribusi anggota? | Pertanyaan survei | Jika **< 20% pernah melaporkan ke dosen** (proposal), hambatan sosial nyata. |

---

## 4. Rencana Validasi

### 4.1 Versi Cepat: Poll 5 Pertanyaan (tanpa wawancara)

**Target:** 30–50 responden, mahasiswa S1 Surabaya, disebar via grup WA/LINE angkatan.  
**Estimasi waktu pengisian:** < 3 menit.  
**Platform yang disarankan:** Google Forms atau Typeform (gratis).

| No. | Pertanyaan | Tipe | Tujuan |
|-----|-----------|------|--------|
| P1 | "Seberapa sering kamu terlibat dalam kelompok tugas di mana ada anggota yang berkontribusi jauh lebih sedikit dari yang lain?" | Pilihan: Hampir setiap semester / Pernah 1–2 kali / Belum pernah | Mengukur prevalensi (I-1, I-2) |
| P2 | "Seberapa besar frustrasi yang kamu rasakan ketika hal itu terjadi?" | Skala 1–5 (1 = tidak frustrasi, 5 = sangat frustrasi) | Mengukur intensitas (I-3) |
| P3 | "Apa yang biasanya kamu lakukan ketika ada anggota yang tidak aktif?" | Pilihan ganda: Diam dan kerjakan sendiri / Tegur langsung / Lapor ke dosen / Lainnya | Mengukur pola respons dan hambatan sosial (A-P2, A-C2) |
| P4 | "Selain WhatsApp, apakah kelompokmu pernah mencoba tool lain untuk koordinasi tugas?" | Ya (sebutkan) / Tidak pernah / Pernah tapi berhenti | Mengukur adopsi tool saat ini (I-5, I-6) |
| P5 | "Kalau ada asisten AI gratis yang bisa bantu kelompokmu membagi tugas dan mengingatkan anggota yang belum selesai, kamu mau coba?" | Ya / Mungkin / Tidak | Mengukur minat adopsi (I-4) |

**Batasan versi cepat:** Poll ini hanya mengukur persepsi dan niat, bukan perilaku nyata. Jawaban "ya" pada P5 tidak menjamin adopsi aktual. Hasilnya cukup untuk memutuskan apakah masalah layak dilanjutkan, tapi tidak cukup untuk mendesain fitur.

---

### 4.2 Versi Lengkap: Survei + Wawancara

#### A. Survei (20–25 pertanyaan, 30–50 responden)

Mencakup semua pertanyaan di versi cepat ditambah:

| Blok | Topik | Pertanyaan Kunci |
|------|-------|-----------------|
| Blok 1 | Demografi | Semester, jurusan, apakah aktif di organisasi/kerja paruh waktu |
| Blok 2 | Profil kelompok | Rata-rata ukuran kelompok, siapa yang menentukan pembagian (dosen/sendiri), frekuensi rapat fisik vs. online |
| Blok 3 | Pengalaman masalah | Contoh konkret kejadian terparah; apakah pernah dilaporkan ke dosen; apa hasilnya |
| Blok 4 | Tools yang pernah dicoba | Daftar tools, alasan berhenti, hambatan spesifik |
| Blok 5 | Ekspektasi terhadap solusi | Fitur apa yang paling diinginkan; apa yang membuat mereka *tidak* mau pakai tool baru |

#### B. Wawancara Mendalam (5–8 responden, 20–30 menit tiap sesi)

**Kriteria pemilihan narasumber:** pilih campuran dari (a) mahasiswa yang mengidentifikasi diri sebagai "anggota aktif" yang pernah frustrasi, (b) mahasiswa yang mengaku pernah berkontribusi rendah — agar perspektif keduanya terwakili.

**Panduan pertanyaan inti:**

| # | Pertanyaan | Tujuan |
|---|-----------|--------|
| W1 | "Ceritakan satu pengalaman spesifik tugas kelompok yang paling bermasalah — apa yang terjadi step by step?" | Mendapat narasi nyata, bukan persepsi umum |
| W2 | "Pada titik mana kamu pertama kali menyadari ada ketimpangan? Apa yang kamu lakukan?" | Mengidentifikasi momen kritis dan hambatan tindakan |
| W3 | "Pernah pakai Trello, Notion, atau tool sejenis? Ceritakan pengalamannya — kenapa akhirnya berhenti atau tetap dipakai?" | Menguji asumsi A-A2 dan A-C3 |
| W4 | "Kalau ada tool yang bisa menunjukkan siapa mengerjakan apa kepada seluruh tim, apakah kamu akan nyaman memakainya? Apa yang membuatmu ragu?" | Menguji asumsi A-A4 (privasi vs. transparansi) |
| W5 | "Apa yang menurutmu akan membuat seluruh anggota kelompok — termasuk yang paling pasif — mau menggunakan tool yang sama?" | Menguji asumsi A-A1, hambatan adopsi kolektif |

**Output yang diharapkan dari wawancara:** distribusi kategori penyebab (A/B/C dari framing seksi 2.2 di dokumen 02), hambatan adopsi yang tidak tertangkap survei, dan kutipan langsung untuk mendukung *problem statement* dalam slide proposal.

#### C. Urutan Eksekusi yang Disarankan

```
Minggu 1:
  Hari 1–2 : Sebarkan poll cepat (5 pertanyaan)
  Hari 3   : Analisis hasil poll — putuskan apakah lanjut atau pivot

Jika lanjut:
  Hari 4–5 : Sebarkan survei lengkap paralel dengan rekrut narasumber wawancara
  Hari 6–7 : Lakukan wawancara (rekam dengan izin)
  Hari 8   : Sintesis temuan → perbarui framing di plans/02-problem-framing.md
```

**Batas waktu kritis:** Tenggat proposal adalah 20 Oktober 2026. Seluruh validasi harus selesai cukup jauh sebelum tanggal itu agar ada waktu merevisi framing dan menyusun slide.

---

*Dokumen ini adalah bagian dari fase validasi asumsi. Langkah berikutnya: eksekusi poll cepat, lalu tentukan apakah framing masalah perlu diperbarui sebelum masuk ke ideasi.*
