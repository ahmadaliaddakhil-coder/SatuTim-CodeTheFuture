# 09 — Audit Kepatuhan Proposal: SatuTim

> **Auditor:** IBM Bob, peran auditor kepatuhan.
> **Dokumen yang diaudit:** `docs/slides-draft.md`
> **Sumber referensi:** `docs/brief.md`, `docs/bob-evidence/LOG.md`, `docs/bob-evidence/corrections.md`, seluruh `plans/`
> **Tanggal audit:** Sesi ini (sesi 17)
> **Metode:** Pemeriksaan manual terhadap 6 dimensi: (a) 5 topik wajib, (b) sub-kriteria penilaian, (c) klaim vs. plans/, (d) konsistensi Slide 4 dengan LOG.md, (e) bahasa berlebihan, (f) hal yang kurang.

---

## Dimensi A — Kelengkapan 5 Topik Wajib

*Acuan: `docs/brief.md` §B — 5 topik proposal: Problem Identification, Target Audience, Innovation Concept, IBM Bob Utilization, Expected Impact.*

| Topik Wajib | Ada di Slide | Status |
|-------------|:----------:|--------|
| Problem Identification | Slide 1 | ✅ Ada |
| Target Audience | Slide 2 | ✅ Ada |
| Innovation Concept | Slide 3 | ✅ Ada |
| IBM Bob Utilization | Slide 4 | ✅ Ada |
| Expected Impact | Slide 5 | ✅ Ada |

**Kesimpulan Dimensi A:** Tidak ada temuan. Semua 5 topik wajib terpenuhi.

---

## Dimensi B — Cakupan Sub-Kriteria Penilaian

*Acuan: `docs/brief.md` §B — tiga komponen: (1) 30% Problem & Solutions Relevance; (2) 40% IBM Bob Utilization; (3) 30% Innovation & Creativity.*

| Sub-Kriteria | Slide yang Merespons | Ditemukan? | Catatan |
|---|---|:---:|---|
| **Problem Relevance** — masalah nyata dan relevan | Slide 1 butir 1–4 | ✅ | Masalah free-rider + akar masalah + referensi social loafing ada |
| **Solution Effectiveness** — solusi menyelesaikan masalah | Slide 3 butir 1–3, Slide 5 butir 1 | ⚠️ | Lihat Temuan B-1 |
| **User-Centricity** — berpusat pada pengguna | Slide 2 butir 1–5 | ✅ | Tiga persona + kebutuhan berbeda per persona |
| **Log Verification** — bukti penggunaan Bob | Slide 4 butir 1, 3 | ✅ | 15 sesi + daftar keputusan manusia per sesi |
| **Multi-mode Utilization** — Plan/Ask/Agent | Slide 4 butir 1 | ⚠️ | Lihat Temuan B-2 |
| **Code Generation Quality** | Tidak ada di slide mana pun | ❌ | Lihat Temuan B-3 |
| **Efektivitas Prompt** | Slide 4 butir 2 | ✅ | 3 contoh prompt aktual dengan output tercatat |
| **Concept Originality** — seberapa segar konsep | Slide 3 butir 3 | ✅ | 3 pembeda dari Trello/Notion disebutkan |
| **Functionality** — apakah fitur berfungsi saat demo | Slide 3, tidak eksplisit | ⚠️ | Lihat Temuan B-4 |
| **UX** — pengalaman pengguna bersih dan intuitif | Tidak ada di slide mana pun | ❌ | Lihat Temuan B-5 |

---

## Dimensi C — Validasi Klaim terhadap plans/

*Setiap klaim dalam slides-draft.md diperiksa: apakah ada di plans/, atau sudah diberi tag [ASUMSI]/[PERLU-SUMBER]?*

| ID Temuan | Lokasi | Klaim | Status |
|-----------|--------|-------|--------|
| C-1 | Slide 1 butir 1 | "terjadi hampir di setiap kelompok" | ⚠️ Lihat Temuan C-1 |
| C-2 | Slide 1 catatan pembicara | "80% tugas kelompok" | ❌ Lihat Temuan C-2 |
| C-3 | Slide 2 catatan pembicara | "ada di hampir setiap kelompok" | ⚠️ Lihat Temuan C-2 |
| C-4 | Slide 2 butir 4 | referensi `plans/04` §5 | ❌ Lihat Temuan C-3 |
| C-5 | Slide 3 butir 2 | "T1 paling universal" | ✅ Ada di `plans/06` §2.2, berlabel [ASUMSI] |
| C-6 | Slide 3 butir 5 | "sebelumnya tidak tersentuh" tentang Tema 2 | ✅ Ada di `plans/07` §4 |
| C-7 | Slide 5 butir 5 | referensi `plans/08-proposal-narrative.md` | ⚠️ Lihat Temuan C-4 |

---

## Dimensi D — Konsistensi Slide 4 dengan LOG.md

*Pemeriksaan baris per baris: angka sesi, mode, keputusan manusia, koreksi.*

| Klaim di Slide 4 | Nilai di LOG.md | Konsisten? | Catatan |
|---|---|:---:|---|
| "15 sesi terdokumentasi" (butir 1) | LOG memiliki 16 baris | ⚠️ | Lihat Temuan D-1 |
| "Agent (sesi 01–15, dominan)" (butir 1) | Semua sesi di LOG mode Agent | ✅ | Tidak ada mode non-Agent yang salah diklaim |
| "Plan (konseptualisasi alur)" (butir 1) | Tidak ada baris LOG dengan mode Plan tercatat eksplisit | ❌ | Lihat Temuan D-2 |
| "Ask (panduan penggunaan)" (butir 1) | Tidak ada baris LOG dengan mode Ask tercatat eksplisit | ❌ | Lihat Temuan D-2 |
| "Diterima (01,03,07,08,09,10,11,12,13,14,15)" (butir 3) | Sesuai kolom Keputusan Manusia | ✅ | |
| "Diterima dengan catatan (02, 05)" (butir 3) | Sesi 02: "Diterima dengan catatan" ✓; sesi 04: "Diterima sebagian" — tidak disebutkan | ⚠️ | Lihat Temuan D-3 |
| "Diubah (06)" (butir 3) | Sesi 06: "Diubah" ✓ | ✅ | |
| "Koreksi manusia #1 (sesi 06→07)" (butir 4) | `corrections.md` baris #1 sesuai | ✅ | |
| "Koreksi manusia #2 (sesi 08)" (butir 5) | `corrections.md` baris #2 sesuai | ✅ | |
| Saran Visual: "semua 13 baris terisi" | LOG memiliki 16 baris | ❌ | Lihat Temuan D-4 |

---

## Dimensi E — Bahasa Berlebihan tanpa Sumber

*Cari kata/frasa yang memberi kesan kepastian lebih dari yang bisa dibuktikan.*

| ID Temuan | Lokasi | Frasa Bermasalah | Keparahan |
|-----------|--------|-----------------|-----------|
| E-1 | Slide 2 catatan pembicara | *"ketiga persona ini ada di **hampir setiap** kelompok"* — tidak ada data survei | Sedang |
| E-2 | Slide 3 butir 5 | *"Ini menyentuh kata kunci… yang **sebelumnya tidak tersentuh**"* — klaim tentang desain masa lalu, bukan fakta eksternal, valid secara internal | Rendah (bisa dipertahankan dengan clarifikasi) |
| E-3 | Slide 5 butir 2 | *"Portofolio Kolaborasi menghubungkan pengalaman akademis ke peluang kampus"* — ini klaim efek, belum ada bukti koneksi | Sedang |
| E-4 | Slide 1 catatan pembicara | *"pernah mengerjakan 80% tugas kelompok"* — angka spesifik tanpa sumber | Tinggi — lihat Temuan C-2 |

---

## Dimensi F — Hal yang Kurang

| ID Temuan | Yang Kurang | Keparahan |
|-----------|-------------|-----------|
| F-1 | Tidak ada satu kalimat atau butir pun yang secara eksplisit menyebut **format prototipe** ("web app") — juri perlu tahu ini bisa didemonstrasikan | Sedang |
| F-2 | **Code generation quality** sama sekali tidak disinggung di Slide 4 — ini sub-kriteria 40% yang hilang | Tinggi |
| F-3 | Slide 3 tidak menyebut **nama IBM Bob** sebagai teknologi yang digunakan — hanya menyebut "AI". Juri bisa tidak menghubungkan ke Bob Utilization | Sedang |
| F-4 | **UX** tidak disinggung di slide mana pun — ini sub-kriteria 30% yang hilang | Tinggi |
| F-5 | Tidak ada **koneksi eksplisit ke pengguna di Surabaya** — brief §C menyebut ini, juri mungkin menilai relevansi lokal | Rendah |

---

## Tabel Temuan Lengkap

| # | Lokasi | Masalah | Saran Perbaikan | Keparahan |
|---|--------|---------|-----------------|:---------:|
| **B-1** | Slide 3 butir 1–3, Slide 5 butir 1 | **Solution Effectiveness** tidak direspons secara langsung. Tidak ada satu kalimat pun yang menjelaskan *bagaimana* SatuTim memastikan anggota pasif mau berubah perilaku — bukan hanya mendokumentasikan ketimpangan. Juri di `plans/07` §2.1 memberi skor 2/5 untuk ini. | Tambahkan di Slide 3 butir 3(c) atau Slide 5 butir 1: "magic link meminimalkan friksi bagi anggota pasif — satu klik dari WA mengubah status tanpa perlu buka app" sebagai mekanisme perubahan perilaku yang konkret. Tandai [ASUMSI — belum divalidasi]. | 🔴 Tinggi |
| **B-2** | Slide 4 butir 1 | **Multi-mode Utilization** diklaim tiga mode (Agent, Plan, Ask) tetapi LOG.md tidak memiliki satu baris pun yang secara eksplisit mencantumkan mode "Plan" atau "Ask" di kolom Mode — semua 16 baris tercatat "Agent". Klaim multi-mode di slide tidak bisa diverifikasi dari LOG. | Perbarui 1–2 baris di LOG.md untuk mencantumkan mode yang benar (Plan atau Ask) jika memang sesi tersebut menggunakan mode itu. Atau koreksi klaim di Slide 4 butir 1 menjadi "Agent (dominan, 16 sesi)" dan tambahkan catatan bahwa Plan/Ask direncanakan digunakan di Build Week. | 🔴 Tinggi |
| **B-3** | Slide 4, tidak ada | Sub-kriteria **Code Generation Quality** (bagian dari 40% IBM Bob) tidak muncul di slide mana pun. Ini wajar karena Build Week belum dimulai, tapi tidak ada kalimat pun yang mengantisipasi atau menyebutkan rencana penggunaannya. | Tambahkan satu sub-butir di Slide 4 butir 2 atau butir 3: "Build Week: Bob akan digunakan untuk generate kode endpoint CV parsing, gap analysis, dan task split — bukti code generation akan didokumentasikan di LOG." Tandai [RENCANA — belum terlaksana]. | 🟡 Sedang |
| **B-4** | Slide 3 (tidak ada) | Sub-kriteria **Functionality** tidak disebutkan — tidak ada pernyataan bahwa produk akan bisa didemonstrasikan, bahwa Demo Mode sudah disiapkan, atau bahwa alur end-to-end bisa dijalankan. | Tambahkan di Slide 3 saran visual atau catatan pembicara: "Demo Mode tersedia — board pre-loaded menunjukkan ketimpangan Dodi 5% tanpa perlu menjalankan alur live." Referensi `plans/06` §8.3 yang sudah ada. | 🟡 Sedang |
| **B-5** | Tidak ada slide | Sub-kriteria **UX** (bagian dari 30% Innovation) tidak muncul di slide mana pun. Tidak ada referensi ke wizard 7 langkah, alur ≤5 menit, atau prinsip desain yang meminimalkan friksi. | Tambahkan di Slide 3 butir 1 (alur 4 fase) atau butir baru: "Onboarding wizard 7 langkah — koordinator selesai setup dalam ≤5 menit; anggota pasif tidak perlu buka app (magic link 1-tap)." Referensi `plans/06` §6.1. | 🔴 Tinggi |
| **C-1** | Slide 1 butir 1 | "terjadi hampir di setiap kelompok" — frasa ini tidak diberi tag [ASUMSI] atau [PERLU-SUMBER]. Kalimat sebelumnya menyebut Latané et al. tapi itu untuk *social loafing* secara umum, bukan untuk konteks mahasiswa Indonesia spesifik. | Tambahkan [ASUMSI] atau [PERLU-SUMBER] setelah "hampir di setiap kelompok". | 🟡 Sedang |
| **C-2** | Slide 1 catatan pembicara | Angka "80%" dalam kalimat *"mengerjakan 80% tugas kelompok sendirian"* tidak ada di plans/ mana pun dan tidak ada tag sumber. Ini angka yang dikarang, melanggar ground rule §F butir 1. | Ganti dengan kalimat tanpa angka spesifik: *"pernah mengerjakan sebagian besar tugas kelompok sendirian"*, atau beri tag [ASUMSI] yang jelas jika dipertahankan. | 🔴 Tinggi |
| **C-3** | Slide 2 butir 5 | Referensi `plans/04` **§5** — `plans/04` tidak memiliki §5 yang bernama demikian dalam konteks "catatan desain". Berdasarkan struktur yang diketahui, kemungkinan yang dimaksud adalah bagian lain dari `plans/04`. | Verifikasi nomor §5 di `plans/04-target-audience.md`; perbaiki referensi jika salah. | 🟡 Sedang |
| **C-4** | Slide 5 butir 5 | Referensi ke `plans/08-proposal-narrative.md` §Slide 5 — file ini adalah file narasi lama yang isinya sudah digantikan oleh `docs/slides-draft.md`. Menyebut file ini sebagai sumber kalimat dampak di dokumen yang sama terasa sirkular dan tidak memperkuat klaim. | Ganti referensi ke `plans/05-ideation.md` §5.5 yang sudah menjadi sumber internal di header Slide 5, atau hilangkan referensi sirkular ini. | 🟢 Rendah |
| **D-1** | Slide 4 butir 1 | Slide menyebut "15 sesi" tetapi LOG.md pada saat audit sudah memiliki **16 baris** (sesi 01–16). Slide sudah diperbarui dua kali (ke 13, lalu ke 15) tetapi sesi 16 belum ikut diperbarui. | Perbarui Slide 4 butir 1 dan butir 3 dari "15" → "16". | 🟡 Sedang |
| **D-2** | Slide 4 butir 1 | Klaim "Plan (konseptualisasi alur)" dan "Ask (panduan penggunaan)" sebagai mode yang digunakan — tidak satu pun dari 16 baris LOG mencantumkan mode selain "Agent" di kolom Mode. Ini klaim multi-mode yang tidak terdukung data LOG. | Ini adalah temuan paling kritis untuk sub-kriteria 40%. Lihat saran di **B-2**. | 🔴 Tinggi |
| **D-3** | Slide 4 butir 3 | Sesi 04 tercatat di LOG sebagai "**Diterima sebagian**" — tetapi slide tidak menyebut kategori ini sama sekali. Juri yang membaca LOG bisa mendeteksi inkonsistensi: ada kategori keputusan manusia yang tidak disebutkan di slide. | Tambahkan "Diterima sebagian (04)" ke daftar di butir 3, atau gabungkan ke "Diterima dengan catatan". | 🟢 Rendah |
| **D-4** | Slide 4 saran visual | Saran visual menyebut *"semua 13 baris terisi"* — angka ini tidak diperbarui saat sesi diperbarui ke 15, lalu ke 16. | Perbarui saran visual dari "13" → "16". | 🟡 Sedang |
| **E-1** | Slide 2 catatan pembicara | *"ada di hampir setiap kelompok"* — tidak ada data primer untuk mendukung ini | Tambahkan "(berdasarkan observasi tim, bukan survei)" atau tag [ASUMSI]. | 🟡 Sedang |
| **E-4** | Slide 1 catatan pembicara | Angka "80%" — lihat C-2. Keparahan sama. | Lihat C-2. | 🔴 Tinggi |
| **F-1** | Tidak ada slide | Format prototipe "web app" tidak disebutkan di slide mana pun. Brief §A mencantumkan ini sebagai format yang valid. | Tambahkan di Slide 3 atau Slide 5 satu kalimat: "SatuTim dibangun sebagai web app yang bisa diakses dari browser." Referensi `plans/06` §arsitektur atau `plans/08-build-plan.md`. | 🟡 Sedang |
| **F-2** | Slide 4 | Code generation quality tidak muncul — lihat **B-3**. | Lihat B-3. | 🟡 Sedang |
| **F-3** | Slide 3 | "AI" tidak diidentifikasi sebagai IBM Bob. Juri perlu melihat nama "Bob" secara eksplisit di Slide 3 agar koneksi ke Slide 4 terbentuk. | Tambahkan "(IBM Bob)" setelah kata "AI" di Slide 3 butir 1 minimal satu kali. | 🟡 Sedang |
| **F-4** | Tidak ada slide | UX tidak disebutkan — lihat **B-5**. | Lihat B-5. | 🔴 Tinggi |
| **F-5** | Tidak ada slide | Konteks Surabaya tidak disebut di slide mana pun selain [FAKTA-BRIEF] di Slide 2 butir 4. | Pertahankan yang ada; tidak perlu perubahan tambahan. | 🟢 Rendah |

---

## Ringkasan Temuan per Keparahan

| Keparahan | Jumlah Temuan | ID |
|-----------|:-------------:|----|
| 🔴 Tinggi (wajib diperbaiki sebelum submit) | 6 | B-1, B-2, B-5, C-2, D-2, E-4 |
| 🟡 Sedang (sangat disarankan diperbaiki) | 8 | B-3, B-4, C-1, C-3, D-1, D-3 (Sedang→Rendah tapi perlu cek), D-4, E-1, F-1, F-2, F-3 |
| 🟢 Rendah (opsional, tidak menghalangi kelulusan) | 3 | C-4, D-3, F-5 |

> **Catatan:** Beberapa ID Sedang di atas tumpang tindih dengan ID Tinggi (B-3 adalah respons terhadap B-2; F-2 dan F-4 adalah alias B-3 dan B-5). Jumlah masalah unik yang perlu ditangani: **6 kritis + 6 sedang unik**.

---

## Keputusan Akhir

> ### ❌ BELUM SIAP KIRIM
>
> Tiga temuan 🔴 Tinggi yang paling mengancam skor:
>
> 1. **B-2 / D-2 — Klaim multi-mode tidak terdukung LOG.md.** Slide 4 menyebut Plan dan Ask digunakan, tapi tidak satu baris pun di LOG mencatat mode selain Agent. Sub-kriteria "multi-mode utilization" adalah bagian dari 40% IBM Bob — jika juri memverifikasi LOG dan tidak menemukan bukti Plan/Ask, skor komponen terbesar bisa turun drastis.
>
> 2. **C-2 / E-4 — Angka "80%" dikarang.** Catatan pembicara Slide 1 menyebut "mengerjakan 80% tugas kelompok sendirian" — angka ini tidak ada di plans/ mana pun dan tidak diberi tag. Ini melanggar ground rule §F butir 1 secara langsung.
>
> 3. **B-5 / F-4 — UX tidak disinggung sama sekali.** Sub-kriteria UX adalah bagian dari 30% Innovation & Creativity. Tidak ada satu kalimat pun di kelima slide yang menyentuh pengalaman pengguna, wizard 7 langkah, atau desain yang meminimalkan friksi.
>
> **Syarat untuk menjadi "Siap Kirim":** Perbaiki minimal 6 temuan 🔴 Tinggi. Perbaikan 🟡 Sedang sangat disarankan untuk mempertahankan skor di atas 75/100.

---

*Dokumen ini hanya menemukan masalah — tidak menulis ulang slide. Perbaikan dilakukan oleh penulis proposal mengacu pada kolom "Saran Perbaikan" di setiap baris temuan.*
