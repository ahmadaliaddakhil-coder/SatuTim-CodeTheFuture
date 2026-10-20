# 08 — Narasi Proposal: SatuTim (5 Slide)

> **Tujuan dokumen ini:** Menyediakan teks siap pakai per slide untuk proposal 5 slide yang dikumpulkan sebelum 20 Oktober 2026. Setiap slide dilengkapi: (1) judul, (2) pesan utama satu kalimat, (3) poin-poin konten, (4) visual yang direkomendasikan, dan (5) catatan untuk presenter.
>
> Sumber klaim: semua fakta merujuk ke dokumen plans yang sudah ada. Tag [FAKTA-BRIEF], [ASUMSI], [SUDAH-DIDUKUNG-SUMBER] dipertahankan sesuai ground rule.

---

## SLIDE 1 — Problem Identification

**Judul slide:** *"Tugas Kelompok: Semua Dapat Nilai Sama, Tapi Tidak Semua Bekerja Sama"*

**Pesan utama:** Ketimpangan kontribusi dalam tugas kelompok mahasiswa adalah masalah struktural yang nyata, berulang, dan saat ini tidak memiliki mekanisme penyelesaian yang aman secara sosial.

### Konten

**Hook (1 kalimat pembuka untuk presenter):**
> *"Kalau kamu pernah mengerjakan 80% tugas kelompok sendirian tapi semua dapat nilai yang sama — kamu tidak sendirian."*

**3 poin masalah utama:**

1. **Ketimpangan kontribusi terjadi hampir di setiap kelompok**
   - Fenomena ini didokumentasikan dalam psikologi sosial sebagai *social loafing* (Latané, Williams & Harkins, 1979) — individu mengerahkan usaha lebih sedikit dalam kelompok dibanding bekerja sendiri [SUDAH-DIDUKUNG-SUMBER]
   - Brief §D mencatat observasi langsung: *free-rider, sungkan menegur, penilaian tidak adil, ketidakcocokan tim* [FAKTA-BRIEF]

2. **Tidak ada mekanisme yang aman untuk mengatasinya**
   - Melapor ke dosen dianggap mengkhianati kelompok [ASUMSI, konsisten dengan brief §D]
   - Menegur langsung berisiko merusak hubungan sosial [ASUMSI]
   - Akibatnya: anggota aktif diam dan mengambil alih pekerjaan orang lain — yang justru *menghapus konsekuensi* bagi yang tidak berkontribusi

3. **Tool yang ada tidak menyelesaikan masalah ini**
   - Trello dan Notion menyediakan tempat menyimpan tugas, tapi tidak tahu siapa anggotamu, tidak tahu jenis tugasnya, dan tidak bisa mendeteksi ketimpangan [SUDAH-DIDUKUNG-SUMBER — analisis dari sources.md]
   - WhatsApp dipakai sebagai pengganti task manager — tapi pesan tenggelam dan tidak ada log yang bisa dipertanggungjawabkan

**Visual yang direkomendasikan:**
- Ilustrasi sederhana: satu orang menanggung tumpukan kertas, tiga orang lain melihat ke HP
- Atau: diagram lingkaran setan (kelompok terbentuk → tidak ada kesepakatan → anggota pasif → anggota aktif ambil alih → tidak ada konsekuensi → siklus ulang)

**Catatan presenter:** Mulai dengan pertanyaan retoris ke audiens — "Siapa di sini pernah mengerjakan tugas kelompok tidak merata?" Ini membangun koneksi langsung sebelum data.

---

## SLIDE 2 — Target Audience

**Judul slide:** *"Tiga Orang dalam Setiap Kelompok"*

**Pesan utama:** SatuTim dirancang untuk tiga persona nyata yang ada di hampir setiap kelompok tugas mahasiswa di Surabaya.

### Konten

**Tiga persona (ringkas):**

| | **Rahma** — Si Penggerak | **Dito** — Si Sibuk | **Sinta** — Si Bingung |
|---|---|---|---|
| **Siapa** | Koordinator de facto; selalu jadi "ibu kelompok" | Jadwal padat; niat ada tapi waktu tidak | Baru bergabung; tidak tahu apa yang diharapkan darinya |
| **Masalahnya** | Tidak ada cara menunjukkan ketimpangan tanpa konflik | Tidak tahu cara memulai; tidak berani minta klarifikasi | Takut dianggap tidak kompeten; mengerjakan hal yang salah |
| **Yang dia butuhkan** | Visibilitas kontribusi tanpa drama sosial | Reminder yang tidak mempermalukan; kejelasan tugas | Onboarding yang privat; ekspektasi yang jelas sejak awal |

**Target demografis:**
- Mahasiswa S1 aktif di Surabaya [FAKTA-BRIEF: "pengguna di Indonesia (Surabaya)"]
- Semua jurusan untuk T1 (Makalah); jurusan teknis untuk T2 (Proyek IT)
- Pengguna primer: koordinator kelompok dan anggota aktif
- Pengguna kritis: anggota pasif — tanpa mereka ikut, sistem tidak efektif [ASUMSI]

**Visual yang direkomendasikan:**
- Tiga kartu persona berjajar dengan foto ilustratif (avatar/ikon), nama, dan satu kutipan per persona
- Rahma: *"Aku capek jadi satu-satunya yang ngejar orang."*
- Dito: *"Aku mau ngerjain tapi nggak tau mulai dari mana."*
- Sinta: *"Aku nggak mau keliatan bego nanya di grup."*

**Catatan presenter:** Tekankan bahwa Dito dan Sinta bukan "pemalas" — mereka punya hambatan berbeda yang membutuhkan respons berbeda. Ini yang membedakan SatuTim dari pendekatan yang hanya menghukum.

---

## SLIDE 3 — Innovation Concept

**Judul slide:** *"SatuTim: AI yang Mengisi Gap — Bukan Sekadar Tempat Menyimpan Tugas"*

**Pesan utama:** SatuTim mengadaptasi praktik kolaborasi industri (Agile) ke konteks mahasiswa dengan satu pembeda kunci: AI yang tahu siapa anggotamu, apa jenis tugasmu, dan di mana ada ketidakseimbangan — sebelum masalah menjadi konflik.

### Konten

**Alur produk (4 fase):**

```
COCOKKAN          BAGI TUGAS        MONITOR           LOG
────────          ──────────        ───────           ───
Upload CV    →   AI split task →   Update 1 tap  →   Laporan
AI ekstrak        per role +        Board             kontribusi
profil +          DoD per           real-time         + Portofolio
gap analysis      sub-tugas                           Kolaborasi
```

**Tiga hal yang tidak bisa dilakukan Trello/Notion:**

1. **Gap Analysis berbasis profil** — setelah CV diekstrak, AI mendeteksi role mana yang tidak tersedia dan menawarkan opsi adaptasi. Contoh: tim 3 frontend → AI tampilkan "tidak ada backend, pilih: (A) salah satu belajar backend, (B) fokus frontend+mockup, (C) diskusi dengan dosen."

2. **Pembagian tugas kontekstual** — AI membaca jenis tugas (Makalah vs. Proyek IT) dan deskripsi dosen, lalu men-generate sub-tugas dengan Definition of Done yang spesifik per role. Bukan template generik — tapi rekomendasi yang sadar konteks.

3. **Akuntabilitas tanpa konfrontasi** — notifikasi privat (bukan broadcast publik) + magic link 1-tap untuk update status langsung dari WA + laporan kontribusi otomatis yang bisa dibagikan ke dosen.

**Peran IBM Bob dalam produk:**
- **Agent mode:** ekstraksi profil dari CV (PDF parsing + NLP)
- **Plan mode:** dekomposisi tugas dari deskripsi dosen → sub-tugas + DoD
- **Agent mode:** gap analysis (bandingkan role yang dibutuhkan vs. profil tim)
- **Ask mode:** panduan adaptasi ketika ada gap skill
- **Agent mode:** generate laporan kontribusi dari log aktivitas

**Kecocokan Tema 2:**
- ✓ **Collaborate** — inti produk: pembagian adil, visibilitas, akuntabilitas
- ✓ **Connect** — matching profil CV ke role yang tepat dalam tim
- ✓ **Engage with opportunities** — Portofolio Kolaborasi: hasil tugas jadi bukti pengalaman untuk lomba/UKM/magang

**Visual yang direkomendasikan:**
- Diagram alur 4 fase dengan ikon per fase
- Tabel perbandingan 3 kolom: Trello vs. Notion AI vs. SatuTim — fokus pada 3 hal yang hanya SatuTim bisa lakukan
- Screenshot mockup board (bisa wire dibuat di Figma)

**Catatan presenter:** Jangan habiskan waktu menjelaskan semua fitur — fokus pada *satu momen dramatis*: "Bayangkan setelah tugas selesai, kamu bisa lihat laporan ini. Dodi mengerjakan 5%. Selama ini tidak ada yang bisa membuktikan ini ke dosen."

---

## SLIDE 4 — IBM Bob Utilization

**Judul slide:** *"IBM Bob di Setiap Langkah: Bukan Aksesori — Tapi Tulang Punggung"*

**Pesan utama:** IBM Bob digunakan di empat titik kritis alur SatuTim dengan tiga mode berbeda, terdokumentasi dalam 13 sesi yang tercatat di LOG.md.

### Konten

**Peta penggunaan multi-mode:**

| Fase | Tugas AI | Mode Bob | Contoh Prompt |
|------|----------|----------|---------------|
| Perencanaan produk | Problem discovery, framing masalah, validasi asumsi | **Plan** | *"Identifikasi minimal 8 masalah nyata dalam kehidupan mahasiswa Indonesia yang relevan dengan Tema 2..."* |
| F1 — Ekstraksi CV | Baca PDF → ekstrak keahlian, pengalaman, organisasi | **Agent** | *"Ekstrak dari teks CV ini: (1) keahlian teknis, (2) pengalaman organisasi/kepanitiaan, (3) indikasi gaya kerja. Format JSON."* |
| F2 — Gap Analysis | Bandingkan profil tim vs. role template → generate opsi adaptasi | **Agent** | *"Tim ini memiliki: [profil anggota]. Jenis tugas: Proyek IT. Identifikasi role yang tidak terpenuhi dan berikan 3 opsi adaptasi."* |
| F3 — Dekomposisi tugas | Deskripsi dosen → sub-tugas + DoD per role | **Plan** | *"Pecah tugas berikut menjadi sub-tugas per role: [deskripsi]. Sertakan Definition of Done dan estimasi jam per sub-tugas."* |
| F4 — Verifikasi porsi | Hitung distribusi beban → flag ketimpangan | **Agent** | *"Berdasarkan estimasi jam ini [data], hitung persentase beban per anggota. Tandai jika selisih antara tertinggi dan terendah >25%."* |
| F6 — Laporan kontribusi | Agregasi log → generate teks ringkasan laporan | **Agent** | *"Dari log aktivitas ini [data], buat ringkasan kontribusi per anggota dalam 3 kalimat yang bisa dibaca oleh dosen."* |
| Panduan pengguna | Jawab pertanyaan mahasiswa tentang cara penggunaan | **Ask** | *"Bagaimana cara terbaik membagi tugas makalah 5 bab untuk tim 4 orang jika tidak ada yang ahli dalam topik tertentu?"* |

**Bukti penggunaan Bob:**
- 13 sesi terdokumentasi di `docs/bob-evidence/LOG.md`
- 2 koreksi besar dicatat di `docs/bob-evidence/corrections.md` — bukti bahwa tim tidak hanya menerima output Bob, tapi mengevaluasi dan menolak saat tidak tepat
- Sumber untuk klaim `[PERLU-SUMBER]` dicari dan didokumentasikan di `docs/bob-evidence/sources.md`

**Visual yang direkomendasikan:**
- Diagram alur dengan ikon Bob di setiap titik yang relevan
- Screenshot LOG.md (tabel sesi) — tunjukkan bahwa log terisi, bukan kosong
- Highlight 1 contoh koreksi dari corrections.md: "Bob merekomendasikan X, tim menolak karena Y, kami ubah menjadi Z" — ini menunjukkan critical thinking, bukan pasif menerima output AI

**Catatan presenter:** Juri melihat LOG.md. Jika LOG tidak terisi, skor komponen 40% ini akan sangat rendah. Pastikan LOG.md terisi lengkap sebelum submit.

---

## SLIDE 5 — Expected Impact

**Judul slide:** *"Dampak yang Bisa Diukur: Kolaborasi yang Lebih Adil, Terdokumentasi, dan Berkelanjutan"*

**Pesan utama:** SatuTim tidak sekadar membuat tugas kelompok lebih tertib — ia membangun kebiasaan kolaborasi yang akan berguna mahasiswa di dunia kerja.

### Konten

**Dampak jangka pendek (per tugas):**

| Untuk Siapa | Dampak yang Diharapkan |
|-------------|----------------------|
| **Anggota aktif (Rahma)** | Tidak perlu mengejar anggota via WA; ketimpangan terdeteksi sebelum jadi konflik; kontribusinya tercatat dan bisa ditunjukkan |
| **Anggota pasif (Dito & Sinta)** | Tugasnya jelas sejak awal; diingatkan secara privat bukan dipermalukan; bisa update status dari magic link tanpa buka app |
| **Dosen** | Opsional menerima laporan kontribusi — data pendukung untuk penilaian yang lebih adil |

**Dampak jangka panjang:**

1. **Kompetensi kolaborasi** — mahasiswa belajar praktik Agile (Working Agreement, DoD, standup async) sebelum masuk dunia kerja. Ini adalah *soft skill* yang dibutuhkan industri [SUDAH-DIDUKUNG-SUMBER: State of Agile Report, scrumguides.org]

2. **Portofolio kolaborasi** — laporan kontribusi yang sudah terstruktur bisa menjadi bukti pengalaman saat mendaftar lomba, UKM, atau magang. Menghubungkan pengalaman akademis ke peluang kampus yang lebih luas — selaras dengan Tema 2 "engage with opportunities"

3. **Ekosistem kepercayaan** — ketika kontribusi bisa diverifikasi, norma "kerja sama yang adil" menjadi lebih mudah ditegakkan tanpa konfrontasi sosial yang merusak

**Metrik keberhasilan yang diusulkan:**

| Metrik | Target (Proposal) |
|--------|------------------|
| Ketimpangan kontribusi per tim | < 15% selisih terberat vs. teringan di ≥ 60% tim |
| Onboarding selesai | ≥ 80% anggota selesai dalam 24 jam pertama |
| Board digunakan aktif | ≥ 70% sub-tugas di-update sebelum deadline |
| Room mencapai laporan akhir | ≥ 40% room menghasilkan laporan kontribusi |

> Semua angka di atas adalah **sinyal sukses yang diusulkan** — bukan standar industri. Akan divalidasi setelah pilot pertama.

**Kalimat penutup untuk presenter:**
> *"Selama ini mahasiswa yang bekerja keras tidak punya cara untuk membuktikannya. Dan mahasiswa yang kesulitan tidak punya cara untuk minta bantuan tanpa rasa malu. SatuTim hadir untuk mengisi kedua gap itu — dengan AI yang mendukung, bukan mengawasi."*

**Visual yang direkomendasikan:**
- Tiga ikon dampak dengan angka besar: misalnya "< 15% ketimpangan", "≥ 80% onboarding", "100% terdokumentasi"
- Diagram sebelum/sesudah: chat WA kacau (kiri) vs. board SatuTim terstruktur (kanan)
- Quote singkat dari salah satu persona: *"Sekarang aku bisa tunjukkan ke dosen bahwa aku yang mengerjakan ini."*

---

## Checklist Sebelum Submit Proposal

- [ ] Semua 5 slide selesai dengan visual
- [ ] LOG.md terisi — minimal 13 sesi dari percakapan ini + sesi-sesi Build Week
- [ ] Minimal 1 data primer dari poll mahasiswa atau sumber APJII/BPS dicantumkan di Slide 1
- [ ] Kutipan Latané et al. (1979) untuk *social loafing* dicantumkan atau disebutkan
- [ ] Screenshot LOG.md disiapkan untuk Slide 4
- [ ] Demo script 3 menit disiapkan berdasarkan §8.3 `plans/06-concept-prd.md`
- [ ] Nama produk "SatuTim" konsisten di semua slide
- [ ] Tidak ada klaim statistik yang dikarang — semua bertag sumber atau bertag [ASUMSI]

---

*Dokumen ini adalah narasi proposal — bukan slide final. Tim perlu mengambil konten ini dan mendesain visualnya. Wakil penanggung jawab setiap slide sebaiknya ditentukan sebelum Build Week.*
