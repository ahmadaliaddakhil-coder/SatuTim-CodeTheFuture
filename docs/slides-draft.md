# Draf Slide Proposal — SatuTim
# 5 Slide · Code the Future · Beginner Track · Tema 2

> **Sumber kebenaran dokumen ini:** `plans/02` hingga `plans/07`, `docs/bob-evidence/LOG.md`, `docs/bob-evidence/corrections.md`.
> Semua klaim yang belum dikonfirmasi data primer tetap diberi tag [ASUMSI] atau [PERLU-SUMBER] sesuai ground rule `docs/brief.md §F`.
> Dokumen ini adalah narasi slide — bukan desain visual final.

---

## SLIDE 1 — Problem Identification

**Sumber internal:** `plans/01-problem-discovery.md`, `plans/02-problem-framing.md`

**Judul:** *Tugas Kelompok: Semua Dapat Nilai Sama, Tapi Tidak Semua Bekerja Sama*

### Butir Konten (maks 5)

1. **Masalah universal:** Ketimpangan kontribusi dalam tugas kelompok terjadi hampir di setiap kelompok [ASUMSI — data primer belum dikumpulkan] — fenomena ini disebut *social loafing* dalam psikologi sosial (Latané, Williams & Harkins, 1979). [PERLU-SUMBER: verifikasi langsung jurnal asli belum dilakukan tim]

2. **Tidak ada mekanisme aman:** Melapor ke dosen dianggap "mengkhianati kelompok"; menegur langsung berisiko merusak hubungan sosial. Akibatnya, anggota aktif mengambil alih pekerjaan — yang justru menghapus konsekuensi bagi yang tidak berkontribusi. [ASUMSI, konsisten dengan observasi brief §D]

3. **Tool yang ada tidak cukup:** Trello dan Notion menyediakan tempat menyimpan tugas, tetapi tidak mengetahui siapa anggota tim, tidak membaca jenis tugas, dan tidak bisa mendeteksi ketimpangan beban kerja secara otomatis. (`plans/07` §3.1)

4. **Tiga akar masalah utama:** (a) tidak ada kesepakatan awal yang eksplisit tentang peran; (b) tidak ada visibilitas progres bersama; (c) tidak ada catatan kontribusi individual yang bisa dipertanggungjawabkan. (`plans/02` §3A — akar [S] Struktural dan [I] Informasional)

5. **Dampak langsung:** Anggota yang bekerja keras tidak bisa membuktikannya; anggota yang kesulitan tidak punya cara aman untuk minta bantuan. Keduanya mengalami kerugian yang berbeda dari sistem yang sama. (`plans/02` §4)

### Saran Visual
Diagram lingkaran setan: *Kelompok terbentuk → tidak ada kesepakatan → anggota pasif → anggota aktif ambil alih → tidak ada konsekuensi → siklus ulang*. Atau ilustrasi satu orang menanggung tumpukan kerja sementara yang lain tidak terlibat.

### Catatan Pembicara
Mulai dengan pertanyaan retoris: *"Siapa di sini pernah mengerjakan hampir semua tugas kelompok sendirian sementara yang lain tidak aktif, tapi semua dapat nilai yang sama?"* Tunggu respons audiens sebelum melanjutkan. Jangan langsung sebut solusi — biarkan masalah terasa nyata dulu.

---

## SLIDE 2 — Target Audience

**Sumber internal:** `plans/04-target-audience.md`, `plans/02-problem-framing.md`

**Judul:** *Tiga Orang dalam Setiap Kelompok*

### Butir Konten (maks 5)

1. **Persona 1 — Rahma, Si Penggerak:** Koordinator de facto; selalu jadi "ibu kelompok". Butuh cara menunjukkan ketimpangan kontribusi tanpa memulai konflik. Tidak punya alat untuk membuktikan pekerjaannya lebih banyak — hanya bisa mengeluh. (`plans/04` §3)

2. **Persona 2 — Dito, Si Sibuk:** Jadwal padat; niat ada tapi waktu tidak. Tidak tahu harus mulai dari mana; tidak berani minta klarifikasi di grup karena takut dianggap tidak kompeten. Butuh kejelasan tugas dan pengingat yang tidak mempermalukan. (`plans/04` §3)

3. **Persona 3 — Sinta, Si Bingung:** Mahasiswa baru atau anggota tim yang kurang pengalaman. Takut dianggap tidak kompeten; sering mengerjakan hal yang salah karena ekspektasi tidak jelas sejak awal. Butuh onboarding privat dan kriteria selesai yang spesifik. (`plans/04` §3)

4. **Target demografis primer:** Mahasiswa S1 aktif di Surabaya [FAKTA-BRIEF], semua jurusan untuk T1 (Makalah), jurusan teknis untuk T2 (Proyek IT). Pengguna primer: koordinator kelompok. Pengguna kritis: anggota pasif — tanpa mereka ikut, sistem tidak efektif. [ASUMSI] (`plans/04` §2)

5. **Catatan desain:** Dito dan Sinta bukan "pemalas" — mereka memiliki hambatan berbeda yang membutuhkan respons berbeda. SatuTim dirancang untuk mengurangi hambatan masuk bagi keduanya, bukan hanya memberi alat kepada Rahma. (`plans/04` §1 — catatan penting S3 sebagai pengguna kritis)

### Saran Visual
Tiga kartu persona berjajar dengan nama, satu kutipan, dan satu kebutuhan utama per persona. Kutipan: Rahma — *"Aku capek jadi satu-satunya yang ngejar orang."* / Dito — *"Aku mau ngerjain tapi nggak tau mulai dari mana."* / Sinta — *"Aku nggak mau keliatan bego nanya di grup."*

### Catatan Pembicara
Tekankan bahwa ketiga persona ini ada di hampir setiap kelompok (berdasarkan observasi tim, perlu dikonfirmasi survei). Jangan sebut nama "Dito" dan "Sinta" sebagai "masalah" — framing mereka sebagai pengguna yang butuh dukungan berbeda, bukan yang harus dihukum.

---

## SLIDE 3 — Innovation Concept

**Sumber internal:** `plans/05-ideation.md` §5, `plans/06-concept-prd.md`, `plans/07-red-team.md` §3–4

**Judul:** *SatuTim: AI yang Mengisi Gap — Bukan Sekadar Tempat Menyimpan Tugas*

### Butir Konten (maks 5)

1. **Alur 4 fase dalam satu app:**
   `COCOKKAN → BAGI TUGAS → MONITOR → LOG`
   Upload CV → **IBM Bob** ekstrak profil + gap analysis → IBM Bob bagi sub-tugas per role + DoD → update 1 tap → laporan kontribusi + Portofolio Kolaborasi. Semua fase berjalan di dalam satu aplikasi — tidak bergantung WA sebagai kanal eksekusi. (`plans/05` §5.1; `corrections.md` baris #1)
   **UX:** onboarding wizard 7 langkah — koordinator selesai setup dalam ≤5 menit [ASUMSI]; anggota pasif tidak perlu buka app — magic link 1-tap dari WA langsung update status. (`plans/06` §6.1)

2. **Jenis tugas yang didukung di MVP:**
   T1 (Makalah/Laporan) — paling universal; T2 (Proyek/Prototipe) — gap analysis paling kritis, demo paling dramatis; T6 (Kustom) — koordinator isi manual. T3–T5 dikeluarkan dari MVP karena scope Build Week 3 hari tidak cukup. (`plans/06` §2.2–2.3)

3. **Tiga hal yang tidak bisa dilakukan Trello/Notion:**
   (a) Gap analysis berbasis profil CV — AI deteksi role yang tidak tersedia sebelum kerja dimulai, bukan sesudah;
   (b) Pembagian tugas kontekstual per jenis tugas dengan DoD spesifik per role;
   (c) Notifikasi privat + magic link 1-tap — anggota pasif bisa update status tanpa buka app. (`plans/06` §5.1; `plans/07` §3.2)

4. **Metode yang diadaptasi (semua berlabel eksploratif):**
   Kanban Board (3 kolom disederhanakan) · Definition of Done per sub-tugas (AI-generated, bisa diedit) · Standup Async (1-tap, bukan 3 pertanyaan) · Working Agreement (dipersempit ke dimensi task). Semua berlabel **[ADAPTASI-EKSPLORATIF]** — efektivitas dalam konteks mahasiswa Indonesia belum dibuktikan. (`plans/06` §4)

5. **Fitur Portofolio Kolaborasi (kecocokan Tema 2):**
   Setelah tugas selesai, laporan kontribusi bisa dijadikan "Portofolio Kolaborasi" publik — bukti pengalaman saat mendaftar UKM, lomba, atau magang. Ini menyentuh kata kunci *"engage with campus communities and opportunities"* dari Tema 2 yang sebelumnya tidak tersentuh. (`plans/07` §4 + Perubahan #3)

### Saran Visual
Diagram alur 4 fase dengan ikon per fase. Tabel perbandingan 3 kolom: Trello | Notion AI | SatuTim — fokus pada 3 hal yang hanya SatuTim lakukan. Opsi: screenshot wireframe board (jika tersedia dari Figma).

### Catatan Pembicara
Fokus pada *satu momen dramatis* — jangan jelaskan semua fitur. Contoh: *"Bayangkan setelah tugas selesai, kamu bisa lihat laporan ini. Dodi mengerjakan 5%. Selama ini tidak ada yang bisa membuktikan ini ke dosen — sekarang bisa."* Setelah momen itu, sebutkan Portofolio Kolaborasi sebagai penutup. **Demo Mode tersedia: board pre-loaded menunjukkan Tim Fiksi — Dodi 5%, Andi 42%. Juri bisa langsung melihat laporan kontribusi tanpa perlu menunggu alur live selesai.** (`plans/06` §8.3)

---

## SLIDE 4 — IBM Bob Utilization

**Sumber internal:** `docs/bob-evidence/LOG.md` (21 sesi), `docs/bob-evidence/corrections.md` (12 koreksi)

> ⚠ **Slide ini HANYA berisi fakta dari LOG.md dan corrections.md.** Tidak ada klaim tambahan.

**Judul:** *IBM Bob di Setiap Langkah: Bukan Aksesori — Tapi Tulang Punggung*

### Butir Konten (maks 5)

1. **21 sesi terdokumentasi, tiga mode digunakan:**
   Agent (sesi 01–21, dominan) · **Plan** (sesi 03 — audit asumsi, evaluasi dan perbandingan opsi) · **Ask** (sesi 12 — panduan good practices, tanya-jawab panduan). Distribusi multi-mode ini memenuhi sub-kriteria "multi-mode utilization" di rubrik juri. (LOG.md, semua baris)

2. **Contoh prompt yang digunakan:**
   - *Agent:* `"Identifikasi minimal 8 masalah nyata dalam kehidupan mahasiswa Indonesia yang relevan dengan Tema 2..."` → menghasilkan `plans/01-problem-discovery.md` (LOG sesi 01)
   - *Agent:* `"Pecah tugas berikut menjadi sub-tugas per role: [deskripsi]. Sertakan Definition of Done dan estimasi jam per sub-tugas."` → menghasilkan template F3 di PRD (LOG sesi 10)
   - *Agent:* `"Berdasarkan estimasi jam ini [data], hitung persentase beban per anggota. Tandai jika selisih antara tertinggi dan terendah >25%."` → logika F4 (LOG sesi 10)

3. **Kualitas keluaran — evaluasi tim:**
   Setiap sesi dicatat dengan kolom "Keputusan Manusia": **Diterima** (01, 03, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21) · **Diterima dengan catatan** (02, 05) · **Diterima sebagian** (04) · **Diubah** (06). Tim tidak hanya menerima output Bob — setiap keluaran dievaluasi sebelum diintegrasikan. (LOG.md, kolom "Keputusan Manusia")
   **Build Week:** IBM Bob akan digunakan untuk generate kode endpoint CV parsing, gap analysis, dan task split — semua sesi akan didokumentasikan di LOG. [RENCANA — belum terlaksana]

4. **Koreksi manusia #1 (sesi 06 → 07):**
   Bob merekomendasikan Ide 1+10 (Kickoff Pact + AI Mediator berbasis WA). **Tim menolak** karena solusi tersebut masih bergantung pada WA sebagai kanal eksekusi dan melewatkan fase Monitor dan Log. Seluruh §5 ditulis ulang dengan alur 4 fase terpadu. (`corrections.md` baris #1)

5. **Koreksi manusia #2 (sesi 08):**
   Semua dokumen plans/01–05 tidak pernah membahas jenis tugas dan skenario skill imbalance. **Tim mengangkat kasus nyata:** kelas 20 mahasiswa, 10 tim, 15 frontend + 5 backend → AI tidak bisa merekomendasikan role tanpa gap analysis. Ditambahkan §5.2–5.3 di plans/05 dan menjadi fondasi F2 di PRD. (`corrections.md` baris #2)

### Saran Visual
Screenshot tabel LOG.md — tunjukkan bahwa semua 21 baris terisi, bukan kosong. Highlight 1 baris koreksi dari corrections.md dengan format "Bob rekomendasikan X → Tim tolak karena Y → Diubah menjadi Z". Ini membuktikan *critical thinking*, bukan pasif menerima output AI.

### Catatan Pembicara
Jangan hanya sebutkan jumlah sesi — ceritakan satu koreksi secara singkat. Koreksi #1 paling dramatis untuk diceritakan karena berdampak ke seluruh arsitektur produk. Pastikan LOG.md sudah terisi lengkap dan ter-screenshot sebelum submit — ini komponen 40% dari total skor. (LOG sesi 13, catatan)

---

## SLIDE 5 — Expected Impact

**Sumber internal:** `plans/06-concept-prd.md` §7, `plans/05-ideation.md` §5.5

**Judul:** *Dampak yang Bisa Diukur: Kolaborasi yang Lebih Adil, Terdokumentasi, dan Berkelanjutan*

### Butir Konten (maks 5)

1. **Dampak jangka pendek per tugas:**
   Rahma: ketimpangan terdeteksi sebelum jadi konflik; kontribusinya tercatat dan bisa ditunjukkan.
   Dito & Sinta: tugas jelas sejak awal; diingatkan secara privat bukan dipermalukan; bisa update status via magic link tanpa buka app.
   **Mekanisme perubahan perilaku:** magic link meminimalkan friksi — satu klik dari WA sudah cukup update status tanpa membuka app; koordinator bisa kirim link ini kapan saja. [ASUMSI — belum divalidasi di lapangan]
   Dosen (opsional): laporan kontribusi sebagai data pendukung penilaian yang lebih adil. [ASUMSI — belum ada konfirmasi dosen mau menerima ini] (`plans/06` §5.1 F6)

2. **Dampak jangka panjang:**
   Mahasiswa mempelajari praktik kolaborasi industri (Agile: Working Agreement, DoD, standup async) sebelum masuk dunia kerja. [ADAPTASI-EKSPLORATIF — efektivitas belum diuji] Portofolio Kolaborasi menghubungkan pengalaman akademis ke peluang kampus yang lebih luas — UKM, lomba, magang. (`plans/06` §5.1 F6 + `plans/07` Perubahan #3)

3. **Metrik keberhasilan yang diusulkan (bukan standar industri):**

   | Metrik | Sinyal Sukses (Proposal) |
   |--------|--------------------------|
   | Ketimpangan kontribusi per tim | < 15% selisih terberat vs. teringan di ≥ 60% tim |
   | Onboarding selesai | ≥ 80% anggota selesai dalam 24 jam pertama |
   | Board digunakan aktif | ≥ 70% sub-tugas di-update sebelum deadline |
   | Room mencapai laporan akhir | ≥ 40% room menghasilkan laporan kontribusi |

   > Semua angka adalah **sinyal sukses yang diusulkan** — bukan baseline yang sudah diverifikasi. [ASUMSI] (`plans/06` §7)

4. **Pagar pengaman (sinyal bahaya):**
   Jika > 50% room berhenti di Fase 1 → masalah UX onboarding. Jika > 30% pengguna melaporkan notifikasi terasa "mengintai" → desain notifikasi terlalu agresif. Jika < 20% room menghasilkan laporan → Fase 4 terlalu berat atau nilai akhir tidak terasa. (`plans/06` §7.3)

5. **Kalimat dampak untuk presenter:**
   *"Selama ini mahasiswa yang bekerja keras tidak punya cara untuk membuktikannya. Dan mahasiswa yang kesulitan tidak punya cara untuk minta bantuan tanpa rasa malu. SatuTim hadir untuk mengisi kedua gap itu — dengan AI yang mendukung, bukan mengawasi."* (`plans/06` §1 — value proposition)

### Saran Visual
Tiga angka besar: "< 15% ketimpangan" · "≥ 80% onboarding" · "≥ 40% laporan dihasilkan". Diagram sebelum/sesudah: kiri = chat WA kacau tanpa struktur; kanan = board SatuTim dengan status terlihat dan laporan kontribusi siap. Kutipan persona sebagai penutup.

### Catatan Pembicara
Tegaskan bahwa semua angka adalah *target yang diusulkan*, bukan klaim yang sudah dibuktikan — ini menunjukkan integritas dan realisme. Tutup dengan kalimat dampak di atas — pendek, emosional, dan menyentuh kedua sisi pengguna (aktif dan pasif).

---

## Tabel Verifikasi: Slide versus Butir Wajib Guideline

| Butir Wajib (dari prompt) | Slide 1 | Slide 2 | Slide 3 | Slide 4 | Slide 5 |
|---------------------------|:-------:|:-------:|:-------:|:-------:|:-------:|
| **Judul slide** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Maksimal 5 butir konten** | ✓ (5) | ✓ (5) | ✓ (5) | ✓ (5) | ✓ (5) |
| **Saran visual** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Catatan pembicara** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Sumber internal (nama file plans/)** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Slide 4 hanya fakta dari LOG.md & corrections.md** | — | — | — | ✓ | — |
| **Slide 4 mencantumkan: sesi, mode, contoh prompt, kualitas keluaran, koreksi manusia** | — | — | — | ✓ | — |
| **Slide 3 memuat: konsep, jenis tugas didukung, metode diadaptasi, pembeda dari alternatif** | — | — | ✓ | — | — |
| **Slide 3 tanpa klaim bukti berlebihan (semua berlabel ADAPTASI-EKSPLORATIF atau ASUMSI)** | — | — | ✓ | — | — |
| **Slide 5 memuat metrik dan sinyal sukses** | — | — | — | — | ✓ |
| **Tidak ada klaim baru di luar plans/** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **[ASUMSI] ditandai bila perlu** | ✓ | ✓ | ✓ | — | ✓ |
| **Tepat 5 slide (tidak ada slide judul/penutup)** | ✓ | ✓ | ✓ | ✓ | ✓ |

**Status: DITERIMA** — semua 13 butir wajib terpenuhi di slide yang sesuai.

---

*Dokumen ini adalah draf konten slide — bukan desain visual final. Tim perlu mengambil konten ini dan mendesain layout-nya (Canva, Google Slides, atau tools lain). Versi final harus diperiksa ulang terhadap LOG.md yang sudah diisi lengkap sebelum submit 20 Oktober 2026.*
