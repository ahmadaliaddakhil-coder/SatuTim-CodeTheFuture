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

**Akar masalah yang dialami (→ `plans/02-problem-framing.md` §3A):**
- [Struktural] Tidak ada standar kesepakatan awal (*team charter*) yang diwajibkan dosen.
- [Struktural] Tidak ada saluran resmi yang aman untuk melaporkan ketimpangan kepada dosen.
- [Informasional] Komunikasi koordinasi terfragmentasi di beberapa platform sehingga pesan penting hilang.
- [Psikologis] Anggota tim menghindari konfrontasi langsung karena khawatir merusak hubungan pertemanan.

| Atribut | Detail | Tag |
|---------|--------|-----|
| **Nama** | Rahma | Rekaan ilustrasi — nama tidak berbasis data |
| **Konteks** | Mahasiswi S1 di Surabaya; aktif berorganisasi; sering dijadikan ketua kelompok. | "Pengguna di Indonesia (Surabaya)" [FAKTA-BRIEF]; aktif berorganisasi [ASUMSI] |
| **Tujuan** | Memastikan hasil kelompok bagus; tidak ingin nilai kelompok ditentukan oleh kontribusi orang lain yang tidak bisa ia kendalikan. | [ASUMSI] |
| **Perilaku saat ini** | Membuat grup WA per tugas; membagi tugas lewat pesan panjang; mengirim reminder manual berulang kali; mengerjakan ulang bagian anggota yang dianggap tidak memadai. | [ASUMSI] |
| **Frustrasi** | Tidak ada cara untuk menunjukkan ketimpangan tanpa terkesan menyerang; peran koordinatornya tidak pernah diakui dalam penilaian kolektif. | Konsisten dengan §2.1 dan §2.3 `plans/02-problem-framing.md` [ASUMSI untuk intensitasnya] |
| **Workaround saat ini** | Google Docs untuk dokumen bersama; screenshot sebagai "bukti" jika ada keluhan; sesekali mengundang dosen ke grup WA agar anggota lebih serius. | [ASUMSI] |
| **Kondisi penggunaan — perangkat** | Smartphone (dominan); laptop untuk pengerjaan dokumen. | [ASUMSI] — tidak ada data perangkat spesifik di brief [PERLU-SUMBER] |
| **Kondisi penggunaan — waktu** | Malam hari setelah aktivitas kampus dan organisasi. | [ASUMSI] |
| **Kondisi penggunaan — kanal** | WhatsApp (utama), Google Drive, sesekali email ke dosen. | [ASUMSI] |

---

### Persona 2 — "Dito, Si Terlambat Tanpa Alasan Jelas"
*Mewakili segmen S3 Kategori C — anggota terhalang jadwal/keadaan*

**Akar masalah yang dialami (→ `plans/02-problem-framing.md` §3A):**
- [Informasional] Ekspektasi dosen tentang proses kerja kelompok jarang dikomunikasikan secara eksplisit di awal tugas.
- [Informasional] Tidak ada *shared visibility* — anggota lain tidak tahu kapan Dito kewalahan sampai sudah terlambat.
- [Struktural] Tidak ada standar kesepakatan awal yang menyertakan cadangan jadwal antar anggota.
- [Psikologis] Hambatan psikologis untuk memulai ("tidak tahu mulai dari mana") berujung pada penundaan berlarut.

| Atribut | Detail | Tag |
|---------|--------|-----|
| **Nama** | Dito | Rekaan ilustrasi — nama tidak berbasis data |
| **Konteks** | Mahasiswa S1 di Surabaya; jadwal padat karena aktif di beberapa kegiatan; mengerjakan tugas sambil menyeimbangkan komitmen lain. | "Pengguna di Indonesia (Surabaya)" [FAKTA-BRIEF]; jadwal padat [ASUMSI] — jurusan dan detail SKS tidak dicantumkan karena tidak ada dasar di brief |
| **Tujuan** | Menyelesaikan kewajiban akademis tanpa mengorbankan prioritas lain yang sama pentingnya baginya. | [ASUMSI] |
| **Perilaku saat ini** | Membaca pesan grup WA tetapi sering tidak membalas; mengerjakan bagian tugas di menit-menit terakhir; mengirim hasil tanpa memastikan relevansinya dengan bagian anggota lain. | Konsisten dengan Kategori B dan C §2.2 `plans/02-problem-framing.md` [ASUMSI] |
| **Frustrasi** | Merasa dibanjiri tugas dari banyak sisi; tidak selalu paham apa yang diharapkan dari bagiannya; enggan bertanya karena takut dianggap tidak serius. | [ASUMSI] |
| **Workaround saat ini** | Mengirim pesan "oke siap" di grup; menunggu anggota lain bergerak dulu sebelum mulai; mengandalkan ketua untuk membenahi hasil kerjanya. | [ASUMSI] |
| **Kondisi penggunaan — perangkat** | Smartphone (dominan). | [ASUMSI] |
| **Kondisi penggunaan — waktu** | Tidak menentu; sering larut malam karena siang hari dipenuhi aktivitas lain. | [ASUMSI] |
| **Kondisi penggunaan — kanal** | WhatsApp (membaca lebih banyak dari membalas), Google Drive (upload mendekati deadline). | [ASUMSI] |

> **Peringatan desain:** Persona ini adalah pengguna yang paling sulit diakuisisi sekaligus paling menentukan apakah produk benar-benar mengubah perilaku. Sebuah tool yang hanya nyaman bagi Rahma (Persona 1) tetapi tidak menjangkau Dito tidak menyelesaikan masalah intinya. [ASUMSI]

---

### Persona 3 — "Sinta, Si Bingung yang Diam"
*Mewakili segmen S3 Kategori B — anggota yang tidak berkontribusi karena kebingungan*

**Akar masalah yang dialami (→ `plans/02-problem-framing.md` §3A):**
- [Informasional] Ekspektasi dosen tentang proses kerja kelompok jarang dikomunikasikan secara eksplisit di awal tugas.
- [Struktural] Pembentukan kelompok sering ditentukan oleh kedekatan sosial — Sinta masuk kelompok tanpa modal relasi yang setara.
- [Psikologis] Anggota menghindari konfrontasi dan bertanya karena khawatir merusak citra diri di depan orang yang belum dikenal.
- [Kultural] Norma untuk tidak menegur atau bertanya secara terbuka dianggap berlaku — tapi ini tetap [ASUMSI] yang belum dibuktikan untuk kelompok mahasiswa perkotaan Surabaya.

| Atribut | Detail | Tag |
|---------|--------|-----|
| **Nama** | Sinta | Rekaan ilustrasi — nama tidak berbasis data |
| **Konteks** | Mahasiswi S1 di Surabaya; relatif baru di kampus atau baru kenal anggota kelompoknya; cenderung tidak banyak bicara di kelompok yang didominasi teman-teman yang sudah saling akrab. | "Pengguna di Indonesia (Surabaya)" [FAKTA-BRIEF]; karakter introvert/baru kenal [ASUMSI] — semester dan jurusan tidak dicantumkan karena tidak ada dasar di brief |
| **Tujuan** | Tidak mengecewakan kelompok; memahami apa yang harus dikerjakan; tidak terlihat tidak berguna. | [ASUMSI] |
| **Perilaku saat ini** | Menunggu anggota lain mulai bergerak; mengerjakan sesuatu yang menurutnya benar tapi tidak dikonfirmasi ke tim dulu; mengirim hasil yang tumpang tindih atau tidak relevan. | Konsisten dengan Kategori B §2.2 `plans/02-problem-framing.md` [ASUMSI] |
| **Frustrasi** | Tidak diajak bicara saat pembagian tugas berlangsung cepat di antara teman-teman yang sudah akrab; tidak tahu ke mana bertanya selain ke WA grup yang terasa intimidatif. | [ASUMSI] |
| **Workaround saat ini** | Minta penjelasan ke satu teman secara privat; mengerjakan bagian yang paling mudah meski bukan bagiannya; diam dan berharap tidak dipermasalahkan. | [ASUMSI] |
| **Kondisi penggunaan — perangkat** | Smartphone (dominan). | [ASUMSI] |
| **Kondisi penggunaan — waktu** | Siang hari di sela-sela kelas, menggunakan WiFi kampus. | [ASUMSI] |
| **Kondisi penggunaan — kanal** | WhatsApp (membaca, lebih aktif di chat privat daripada grup), e-learning kampus. | [ASUMSI] |

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

## 7. Lima Hal yang Belum Kami Ketahui

Ini bukan daftar lengkap — ini adalah celah pengetahuan yang paling langsung memengaruhi keputusan desain MVP.

| # | Yang Belum Diketahui | Mengapa Penting untuk Desain | Cara Mengetahuinya |
|---|---------------------|-----------------------------|--------------------|
| **?1** | **Berapa proporsi S3 yang merupakan Kategori A (sengaja *free-riding*) vs. B (kebingungan) vs. C (terhalang jadwal)?** Saat ini ketiga kategori diperlakukan sebagai kemungkinan yang setara. | Jika mayoritas adalah Kategori A, desain harus menangani *incentive structure*; jika Kategori B dominan, desain harus menangani kejelasan tugas; jika Kategori C dominan, desain harus menangani *load balancing*. Ketiganya membutuhkan respons desain yang sangat berbeda. | Wawancara mendalam dengan 5–8 mahasiswa yang pernah berkontribusi rendah (pertanyaan W1–W2 di `plans/03-assumptions.md` §4.2). |
| **?2** | **Apakah mahasiswa bersedia menggunakan tool yang membuat kontribusi individual terlihat oleh seluruh anggota tim?** Asumsi A-A4 di `plans/03-assumptions.md` mengidentifikasi ini sebagai risiko, tapi belum ada data. | Ini menentukan apakah desain bisa menggunakan model transparansi penuh, transparansi bertahap, atau privasi individual sepenuhnya. Memilih model yang salah akan menciptakan resistensi dari S3 sejak hari pertama. | Pertanyaan langsung di wawancara (W4 di `plans/03-assumptions.md`) atau eksperimen prototipe cepat dengan 3–5 mahasiswa. |
| **?3** | **Seberapa besar peran dosen dalam mendorong atau menghambat adopsi tool tambahan?** Saat ini dosen diasumsikan bersikap netral hingga mendukung (A-E1, A-E2). | Jika dosen secara aktif melarang tool non-LMS, model distribusi produk harus sepenuhnya bergantung pada jaringan mahasiswa — tanpa dukungan institusional. Ini mengubah strategi akuisisi pengguna secara fundamental. | Wawancara singkat dengan 2–3 dosen yang rutin memberikan tugas kelompok. |
| **?4** | **Apakah setiap kelompok selalu memiliki satu orang yang berfungsi sebagai "koordinator"?** Seluruh alur di Persona 1 (Rahma) mengasumsikan ada peran ini. | Jika banyak kelompok berjalan secara datar tanpa hierarki formal, fitur yang dirancang untuk "ketua" menjadi tidak relevan dan produk harus dirancang ulang untuk model koordinasi terdistribusi. | Satu pertanyaan survei: "Dalam kelompokmu, biasanya ada satu orang yang mengatur koordinasi, atau semua anggota setara?" |
| **?5** | **Platform atau kanal mana yang sudah dipakai mahasiswa di luar WhatsApp untuk keperluan akademis?** Saat ini diasumsikan hampir tidak ada (gap tool nyata), tapi ini belum diverifikasi. | Jika ternyata sebagian mahasiswa sudah memakai Notion, Discord server, atau Google Workspace secara terstruktur, produk harus bisa *terintegrasi* dengan ekosistem yang ada — bukan menambah satu platform baru yang bersaing. | Pertanyaan P4 di poll cepat `plans/03-assumptions.md` §4.1, atau pertanyaan blok 4 di survei lengkap. |

---

*Dokumen ini adalah bagian dari fase riset pengguna. Persona di sini adalah hipotesis kerja, bukan profil yang sudah divalidasi. Langkah berikutnya: gunakan pertanyaan wawancara di `plans/03-assumptions.md` §4.2 untuk mengonfirmasi atau merevisi persona ini sebelum masuk ke ideasi.*
