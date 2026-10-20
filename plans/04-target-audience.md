# 04 — Target Audience: Segmentasi & Persona

> **Basis dokumen ini:**
> - `[FAKTA-BRIEF]` = dinyatakan secara eksplisit dalam `docs/brief.md`.
> - `[ASUMSI]` = kesimpulan yang masuk akal dari konteks, belum dikonfirmasi data lapangan.
> - `[PERLU-SUMBER]` = klaim yang membutuhkan bukti primer sebelum dijadikan dasar desain.
>
> Setiap bagian persona yang merupakan rekaan untuk keperluan ilustrasi **ditandai secara eksplisit**.

---

## 1. Segmen Primer dan Sekunder

### 1.1 Segmen Primer

| Segmen | Deskripsi Singkat | Alasan Primer |
|--------|------------------|---------------|
| **S1 — Anggota tim aktif yang frustrasi** | Mahasiswa S1 yang secara konsisten berkontribusi dalam tugas kelompok tetapi menanggung beban yang tidak proporsional akibat ketimpangan kontribusi. | Mereka merasakan "nyeri" paling langsung dan paling termotivasi untuk mencari solusi. Tanpa mereka sebagai *early adopter*, produk tidak akan digunakan. [ASUMSI] |
| **S2 — Koordinator/ketua kelompok** | Mahasiswa yang ditunjuk atau secara sukarela mengelola tim; menanggung beban koordinasi dan sering mengambil alih tugas orang lain. | Mereka adalah pengguna paling intensif: mengirim reminder, membagi tugas, memantau progres. Mereka paling banyak mendapat manfaat dari otomasi koordinasi. [ASUMSI] |

### 1.2 Segmen Sekunder

| Segmen | Deskripsi Singkat | Alasan Sekunder |
|--------|------------------|-----------------|
| **S3 — Anggota dengan kontribusi rendah** | Mahasiswa yang berkontribusi di bawah kesepakatan, dengan berbagai alasan (lihat Kategori A/B/C di `plans/02-problem-framing.md`). | Mereka adalah objek dari masalah, bukan pemakai awal yang aktif. Namun tanpa partisipasi mereka, tool tidak efektif — ini hambatan adopsi kritis (A-A1 di `plans/03-assumptions.md`). [ASUMSI] |
| **S4 — Dosen pengampu** | Dosen yang memberikan tugas kelompok dan menerima hasil akhir; tidak melihat distribusi kerja. | Bukan pengguna aktif tool, tapi bisa menjadi *enabler* institusional yang mendorong atau menghambat adopsi. Lihat Seksi 4 dokumen ini untuk kebutuhan mereka. [ASUMSI] |

> **Catatan penting:** Segmen S3 adalah target yang paling sulit dijangkau dan paling menentukan keberhasilan produk. Jika produk hanya dipakai S1 dan S2, masalah inti (ketimpangan kontribusi) tetap tidak berubah — hanya terdokumentasi. [ASUMSI]

---

## 2. Tiga Persona

### Persona 1 — "Rahma, Si Penggerak Kelompok"
*Mewakili segmen S1 (anggota aktif) dan S2 (koordinator)*

| Atribut | Detail | Tag |
|---------|--------|-----|
| **Nama & usia** | Rahma, 20 tahun | Rekaan ilustrasi |
| **Konteks** | Mahasiswa semester 4, jurusan Manajemen, universitas swasta di Surabaya. Aktif di BEM, sering dijadikan ketua kelompok karena dianggap "bisa diandalkan". | Semester 3–7 disebut dalam `plans/01-problem-discovery.md` [ASUMSI untuk detailnya] |
| **Tujuan** | Mendapat nilai A; memastikan anggota kelompok berkontribusi; tidak ingin reputasinya rusak karena hasil kerja orang lain. | [ASUMSI] |
| **Perilaku saat ini** | Membuat grup WA untuk setiap tugas kelompok; membagi tugas lewat pesan panjang; mengirim reminder manual setiap malam sebelum deadline; sering mengerjakan ulang bagian orang lain yang dianggap tidak memadai. | [ASUMSI] |
| **Frustrasi** | Tidak ada cara elegan untuk "menunjukkan" bahwa satu orang tidak berkontribusi tanpa terkesan menyerang; capek menjadi "ibu kelompok" setiap semester; kontribusinya tidak pernah diakui secara formal dalam penilaian. | Konsisten dengan `plans/02-problem-framing.md` §2.1 dan §2.3 [ASUMSI untuk intensitasnya] |
| **Workaround saat ini** | Google Docs untuk dokumen bersama; screenshot tugas sebagai "bukti" jika ada keluhan; kadang mengundang dosen ke grup WA agar anggota "takut" dan mau bergerak. | [ASUMSI] |
| **Kondisi penggunaan** | Smartphone Android mid-range; dominan menggunakan aplikasi saat malam hari (22.00–00.00) setelah aktivitas kampus; koneksi data lancar di kampus, terkadang bergantung WiFi di kos. | [ASUMSI] — infrastruktur urban Surabaya diasumsikan memadai [PERLU-SUMBER] |
| **Saluran yang biasa dipakai** | WhatsApp (utama), Instagram DM (informal), Google Drive, sesekali email ke dosen. | [ASUMSI] |

---

### Persona 2 — "Dito, Si Terlambat Tanpa Alasan Jelas"
*Mewakili segmen S3 Kategori A/B — anggota dengan kontribusi rendah*

| Atribut | Detail | Tag |
|---------|--------|-----|
| **Nama & usia** | Dito, 21 tahun | Rekaan ilustrasi |
| **Konteks** | Mahasiswa semester 5, jurusan Teknik Informatika, universitas negeri di Surabaya. Aktif di komunitas *game development* kampus, mengambil 22 SKS semester ini, kerja paruh waktu sebagai *freelance* desainer 2–3 hari per minggu. | Karakteristik Kategori C (terhalang jadwal) dari `plans/02-problem-framing.md` §2.2 [ASUMSI untuk detailnya] |
| **Tujuan** | Lulus semester ini tanpa IP anjlok; menyelesaikan tugas "cukup" tanpa mengorbankan proyek freelance-nya; tidak ingin dikucilkan dari teman. | [ASUMSI] |
| **Perilaku saat ini** | Membaca pesan grup WA tetapi sering tidak membalas; mengerjakan bagian tugas di menit-menit terakhir; kadang mengirim hasil yang "seadanya" tanpa memeriksa relevansinya dengan bagian anggota lain. | Konsisten dengan Kategori B dan C di `plans/02-problem-framing.md` [ASUMSI] |
| **Frustrasi** | Merasa dibanjiri tugas dari banyak mata kuliah sekaligus; tidak selalu paham apa yang diharapkan dari bagiannya; enggan bertanya karena takut dianggap tidak kompeten atau tidak menyimak saat briefing awal. | [ASUMSI] |
| **Workaround saat ini** | Mengirim pesan "oke siap" di grup tanpa benar-benar memeriksa; menonton progres anggota lain sebelum mulai mengerjakan; mengandalkan ketua kelompok untuk "membenahi" hasil kerjanya. | [ASUMSI] |
| **Kondisi penggunaan** | Smartphone, sering multitasking; paling produktif saat larut malam; jarang membuka laptop untuk keperluan non-teknis; koneksi data kadang bermasalah di kos pinggiran kota. | [ASUMSI] |
| **Saluran yang biasa dipakai** | WhatsApp (membaca lebih banyak daripada membalas), Discord (untuk komunitas gaming), Google Drive (upload terakhir sebelum deadline). | [ASUMSI] |

> **Peringatan desain:** Persona ini adalah pengguna yang paling sulit diakuisisi sekaligus paling menentukan apakah produk benar-benar mengubah perilaku. Sebuah tool yang hanya nyaman bagi Rahma (Persona 1) tetapi tidak menjangkau Dito tidak menyelesaikan masalah intinya. [ASUMSI]

---

### Persona 3 — "Sinta, Si Bingung yang Diam"
*Mewakili segmen S3 Kategori B — anggota yang tidak berkontribusi karena kebingungan*

| Atribut | Detail | Tag |
|---------|--------|-----|
| **Nama & usia** | Sinta, 19 tahun | Rekaan ilustrasi |
| **Konteks** | Mahasiswi semester 2, jurusan Psikologi, universitas negeri di Surabaya. Baru pertama kali menghadapi tugas kelompok besar (laporan 30 halaman). Introvert, tidak banyak bicara di kelompok yang didominasi teman-teman yang sudah saling kenal. | Mahasiswa baru yang rentan terhadap kebingungan tugas; konsisten dengan `plans/01-problem-discovery.md` baris #3 dan #8 [ASUMSI untuk detailnya] |
| **Tujuan** | Tidak mengecewakan kelompok; memahami apa yang harus dikerjakan; tidak terlihat bodoh atau tidak berguna. | [ASUMSI] |
| **Perilaku saat ini** | Menunggu anggota lain memulai sebelum bergerak; mengerjakan sesuatu yang menurutnya benar tapi tidak dikomunikasikan dulu ke tim; mengirim pekerjaan yang tidak relevan atau tumpang tindih dengan bagian orang lain. | Konsisten dengan Kategori B di `plans/02-problem-framing.md` §2.2 [ASUMSI] |
| **Frustrasi** | Merasa tidak diajak bicara saat pembagian tugas terjadi secara cepat di antara teman-teman yang sudah akrab; tidak tahu ke mana harus bertanya selain ke WA grup yang intimidatif; khawatir mempermalukan diri. | [ASUMSI] |
| **Workaround saat ini** | Minta penjelasan ke teman terdekat secara privat; mengerjakan bagian yang paling mudah meski bukan yang ditugaskan; diam dan berharap tidak dipermasalahkan. | [ASUMSI] |
| **Kondisi penggunaan** | Smartphone, sering menggunakan aplikasi kampus (SIAKAD, e-learning) di siang hari antara kelas; WiFi kampus; jarang menggunakan laptop di luar jam kelas. | [ASUMSI] |
| **Saluran yang biasa dipakai** | WhatsApp (membaca tanpa banyak membalas di grup, lebih aktif di chat privat), e-learning kampus, Instagram. | [ASUMSI] |

> **Peringatan desain:** Sinta bukan *free-rider* — ia ingin berkontribusi tetapi tidak tahu caranya. Desain yang menampilkan kontribusinya secara publik kepada seluruh tim dapat memperburuk rasa malunya. Pendekatan privat atau bertahap mungkin lebih efektif untuk segmen ini. [ASUMSI]

---

## 3. *Jobs-to-be-Done* per Segmen

### Cara membaca tabel ini
Setiap *job* ditulis dalam format: *"Ketika [situasi], saya ingin [motivasi], sehingga [hasil yang diharapkan]."*

### 3.1 Segmen S1 — Anggota Aktif

| # | *Job-to-be-Done* | Sumber Klaim |
|---|-----------------|--------------|
| J1 | Ketika saya melihat anggota tidak mengerjakan bagiannya, saya ingin punya cara untuk menunjukkan ketimpangan itu kepada seluruh tim tanpa terkesan menyerang secara personal, sehingga masalah bisa diselesaikan tanpa konflik. | Konsisten dengan §2.1 `plans/02-problem-framing.md` [ASUMSI] |
| J2 | Ketika tugas kelompok baru dimulai, saya ingin pembagian peran dan deadline internal disepakati dengan cepat dan jelas, sehingga saya tidak harus "mengejar" orang di tengah pengerjaan. | [ASUMSI] |
| J3 | Ketika saya sudah menyelesaikan bagian saya, saya ingin tahu apakah bagian anggota lain sudah selesai juga, sehingga saya bisa membantu atau eskalasi tepat waktu. | [ASUMSI] |

### 3.2 Segmen S2 — Koordinator Kelompok

| # | *Job-to-be-Done* | Sumber Klaim |
|---|-----------------|--------------|
| J4 | Ketika saya menjadi ketua kelompok, saya ingin bisa mendelegasikan tugas dan memantau progres tanpa harus mengirim pesan manual berulang kali, sehingga waktu saya bisa dipakai untuk mengerjakan substansi tugas. | Konsisten dengan §2.3 `plans/02-problem-framing.md` [ASUMSI] |
| J5 | Ketika anggota tidak merespons reminder, saya ingin ada mekanisme eskalasi yang terasa netral (bukan dari saya secara personal), sehingga tidak ada gesekan sosial yang merusak hubungan di luar konteks tugas. | [ASUMSI] |
| J6 | Ketika tugas selesai, saya ingin ada catatan atau log kontribusi yang bisa dijadikan referensi jika ada keluhan soal penilaian, sehingga saya punya "bukti" tanpa perlu membuat tangkapan layar manual. | [ASUMSI] |

### 3.3 Segmen S3 — Anggota dengan Kontribusi Rendah

| # | *Job-to-be-Done* | Sumber Klaim |
|---|-----------------|--------------|
| J7 | Ketika saya tidak paham apa yang harus dikerjakan, saya ingin bisa mendapatkan klarifikasi secara privat tanpa harus bertanya di depan seluruh kelompok, sehingga saya tidak merasa malu atau dianggap tidak serius. | Konsisten dengan Kategori B §2.2 `plans/02-problem-framing.md` [ASUMSI] |
| J8 | Ketika saya terlambat memulai bagian saya, saya ingin diingatkan dengan cara yang tidak mempermalukan saya di depan anggota lain, sehingga saya masih punya peluang untuk berkontribusi sebelum terlambat. | Konsisten dengan Kategori C §2.2 `plans/02-problem-framing.md` [ASUMSI] |
| J9 | Ketika saya baru bergabung dalam kelompok yang sudah saling kenal, saya ingin tahu dengan jelas apa kontribusi yang diharapkan dari saya sejak awal, sehingga saya tidak perlu menebak dan membuat kesalahan yang memalukan. | Konsisten dengan Persona Sinta [ASUMSI] |

---

## 4. Kebutuhan Dosen sebagai Pengguna Sekunder

Dosen tidak akan menjadi pengguna aktif tool ini — mereka tidak akan membuka dashboard setiap hari. Namun mereka dapat menjadi *enabler* yang menentukan apakah mahasiswa mau menggunakan tool ini atau tidak. [ASUMSI]

| Kebutuhan | Detail | Tag |
|-----------|--------|-----|
| **Visibilitas proses, bukan hanya hasil** | Dosen ingin memahami distribusi kerja nyata di balik produk akhir yang diserahkan, terutama saat ada keluhan dari anggota. | Konsisten dengan §2.4 `plans/02-problem-framing.md` [ASUMSI] |
| **Bukti yang bisa dikutip** | Jika ada permasalahan nilai, dosen membutuhkan data kontribusi yang dapat diaudit — bukan hanya kesaksian lisan dari satu pihak. | [ASUMSI] |
| **Tidak menambah beban administrasi** | Dosen sudah kelebihan beban [PERLU-SUMBER]; mereka tidak akan aktif menggunakan tool yang membutuhkan login, konfigurasi kelas, atau pemantauan rutin. | [ASUMSI] |
| **Kompatibel dengan cara kerja yang sudah ada** | Dosen tidak akan mengganti LMS kampus. Tool mahasiswa harus berjalan secara paralel dan independen, bukan membutuhkan integrasi dengan sistem akademik. | [ASUMSI] |
| **Laporan ringkas jika diminta** | Dosen mungkin tertarik menerima ringkasan kontribusi di akhir proyek jika itu memudahkan mereka memberikan nilai per individu — tapi ini fitur opsional, bukan inti. | [ASUMSI] |

> **Tantangan terhadap asumsi tim:** Brief seksi D menyebut "penilaian tidak adil" sebagai salah satu observasi masalah [FAKTA-BRIEF]. Namun asumsi bahwa dosen akan aktif mendorong atau menggunakan tool ini **belum divalidasi** (A-E2 di `plans/03-assumptions.md`). Jika dosen bersikap netral atau tidak peduli dengan proses, produk harus bisa berdiri sendiri berdasarkan nilai bagi mahasiswa saja — tanpa sandaran institusional.

---

## 5. Prioritas Segmen untuk MVP dan Alasannya

### 5.1 Urutan Prioritas

| Prioritas | Segmen | Alasan |
|-----------|--------|--------|
| **🥇 Pertama** | S2 — Koordinator Kelompok | Pengguna paling aktif dan paling termotivasi; sudah merasakan "nyeri" koordinasi secara intensif; paling mungkin menjadi *early adopter* dan mendorong anggota lain untuk bergabung. [ASUMSI] |
| **🥈 Kedua** | S1 — Anggota Tim Aktif | Volume pengguna terbesar; jika produk berhasil meringankan frustrasi mereka, *word-of-mouth* akan terjadi secara organik di angkatan. [ASUMSI] |
| **🥉 Ketiga (kritis)** | S3 — Anggota Kontribusi Rendah | Bukan prioritas akuisisi awal, tapi **keberhasilan jangka panjang bergantung pada keterlibatan mereka**. MVP harus dirancang sedemikian rupa agar tidak mengalienasi segmen ini sejak awal. [ASUMSI] |
| **Pendukung** | S4 — Dosen | Bukan target MVP; namun desain harus memungkinkan dosen melihat ringkasan kontribusi jika mereka memintanya — sebagai fitur pasif, bukan aktif. [ASUMSI] |

### 5.2 Risiko Prioritisasi Ini

| Risiko | Penjelasan |
|--------|-----------|
| **MVP terlalu berorientasi pada "pengawas"** | Jika fitur utama adalah visibilitas dan tracking, produk akan terasa seperti alat pengawasan bagi segmen S3. Ini berpotensi menciptakan resistensi kolektif dan menurunkan adopsi. Desain harus menyeimbangkan transparansi dengan dukungan (*support*), bukan hanya pemantauan (*surveillance*). [ASUMSI] |
| **S2 adalah pengguna minoritas** | Tidak semua kelompok memiliki "koordinator" formal. Jika mayoritas kelompok berjalan tanpa struktur hierarki, fitur yang diasumsikan ada "ketua" mungkin tidak relevan. [PERLU-SUMBER] |
| **Adopsi S3 bergantung pada tekanan sosial, bukan nilai instrinsik** | S3 mungkin hanya bergabung jika "dipaksa" oleh koordinator (S2). Ini menciptakan adopsi yang rapuh — mereka akan berhenti menggunakan tool begitu tekanan sosial menghilang. [ASUMSI] |

---

## 6. Ringkasan Status Bukti per Bagian Persona

| Bagian Persona | Status Bukti | Catatan |
|----------------|-------------|---------|
| Konteks masalah tugas kelompok (free-rider, penilaian tidak adil, tim diacak dosen) | [FAKTA-BRIEF] | Disebutkan di seksi D `docs/brief.md` |
| Segmentasi mahasiswa S1 Surabaya sebagai pengguna | [FAKTA-BRIEF] | Seksi C menyebut "pengguna di Indonesia (Surabaya)" |
| Semester 3–7 sebagai rentang paling terdampak | [ASUMSI] | Tidak ada data yang menyebut rentang semester spesifik di brief |
| Nama, usia, jurusan, dan latar belakang pribadi ketiga persona | Rekaan ilustrasi | Dibuat untuk keperluan empati desain — bukan data nyata |
| Frustrasi dan workaround yang digambarkan | [ASUMSI] | Konsisten dengan framing masalah di `plans/02-problem-framing.md`, belum dikonfirmasi wawancara |
| Kondisi penggunaan (perangkat, waktu, koneksi) | [ASUMSI] | Tidak ada data spesifik di brief; diasumsikan dari konteks urban Surabaya |
| Kebutuhan dosen | [ASUMSI] | Konsisten dengan §2.4 `plans/02-problem-framing.md`, belum divalidasi dengan dosen nyata |
| Jobs-to-be-done | [ASUMSI] | Diturunkan secara logis dari pain points; perlu dikonfirmasi lewat wawancara |

---

*Dokumen ini adalah bagian dari fase riset pengguna. Persona di sini adalah hipotesis kerja, bukan profil yang sudah divalidasi. Langkah berikutnya: gunakan pertanyaan wawancara di `plans/03-assumptions.md` §4.2 untuk mengonfirmasi atau merevisi persona ini.*
