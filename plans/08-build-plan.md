# 08 — Build Plan: SatuTim — Build Week 3 Hari

> **Batasan dari brief §C:** Build Week 3 hari (minggu ke-2 November), demo minimal 3 menit, tim maksimal 5 orang, **500 Bob Coin per tim**.
> **Sumber kebenaran:** `plans/06-concept-prd.md` (PRD final), `plans/07-red-team.md` (risiko teknis).
> **Prinsip Build Week:** Ship working demo, bukan fitur lengkap. Setiap hari punya target yang bisa didemonstrasikan.

---

## Ringkasan Eksekutif

| | Hari 1 | Hari 2 | Hari 3 |
|---|--------|--------|--------|
| **Fokus** | Fondasi + F1 + F2 | F3 + F4 + F5 | F6 + Demo Mode + Polish |
| **Target akhir hari** | Upload CV → profil → gap analysis jalan | Board terkunci, porsi terlihat, status bisa diupdate | Laporan kontribusi + Demo Mode siap presentasi |
| **Mode Bob utama** | Agent (ekstraksi + gap) | Plan (task split) + Agent (porsi) | Agent (laporan) + Ask (debugging) |
| **Bukti log yang dikumpulkan** | Prompt CV parsing, output profil, koreksi yang dilakukan | Prompt task split, output sub-tugas + DoD, verifikasi porsi | Prompt laporan kontribusi, output akhir, catatan gap/blocker |
| **Risiko teknis utama** | CV parsing gagal untuk format non-standar | Board state tidak konsisten antar anggota | Demo Mode data seed belum realistis |

---

## Arsitektur Ringan (Web App)

> Pilihan arsitektur ini diprioritaskan berdasarkan kecepatan build dalam 3 hari, bukan skalabilitas jangka panjang.

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (SPA)                        │
│  React / Next.js (pilih salah satu yang tim tahu)        │
│  Halaman: Wizard Setup · Board · Profil · Laporan        │
└────────────────────────┬────────────────────────────────┘
                         │ REST API / fetch
┌────────────────────────▼────────────────────────────────┐
│                    BACKEND (API)                          │
│  Node.js + Express ATAU Python + FastAPI                  │
│  Endpoint utama:                                          │
│  POST /cv/parse    → kirim teks CV, terima profil JSON    │
│  POST /gap/check   → kirim profil tim + jenis tugas       │
│  POST /task/split  → kirim deskripsi + role, terima tasks │
│  GET  /room/:id    → ambil state room                     │
│  PUT  /task/:id    → update status sub-tugas              │
│  GET  /report/:id  → generate laporan kontribusi          │
└────────────────────────┬────────────────────────────────┘
                         │ IBM Bob API calls
┌────────────────────────▼────────────────────────────────┐
│              IBM BOB (AI Layer)                           │
│  Dipanggil dari backend — TIDAK langsung dari frontend    │
│  Fungsi: CV parsing · gap analysis · task split · report  │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                  DATA STORE                               │
│  SQLite (lokal, cukup untuk demo) ATAU                    │
│  JSON file per room (paling cepat untuk 3 hari)           │
│  Schema minimal: Room · User · Profile · Task · Log       │
└─────────────────────────────────────────────────────────┘
```

**Catatan arsitektur:**
- Pilih framework yang paling dikuasai tim — jangan ganti stack di tengah Build Week. [ASUMSI: tim sudah memiliki preferensi]
- SQLite atau JSON file sudah cukup untuk demo — tidak perlu database cloud.
- IBM Bob dipanggil dari backend (server-side) agar API key tidak terekspos di frontend.
- Magic link (F5) adalah URL dengan token unik per sub-tugas: `/update/:taskToken` → tidak butuh login.

---

## Model Data Minimal

```json
// Room
{
  "id": "string",
  "code": "6-char string",
  "taskType": "T1 | T2 | T6",
  "taskDescription": "string",
  "deadline": "ISO date",
  "phase": 1 | 2 | 3 | 4,
  "members": ["userId"],
  "tasks": ["taskId"],
  "createdAt": "ISO date"
}

// User / Profile
{
  "id": "string",
  "roomId": "string",
  "name": "string",
  "role": "koordinator | anggota",
  "profile": {
    "skills": ["string"],
    "experience": ["string"],
    "confidence": { "skills": "high|medium|low", "experience": "high|medium|low" }
  },
  "cvUploaded": true | false
}

// Task (sub-tugas)
{
  "id": "string",
  "roomId": "string",
  "assignedTo": "userId",
  "title": "string",
  "dod": "string",          // Definition of Done
  "estimatedHours": number, // self-declared oleh anggota
  "status": "belum-mulai | sedang | selesai",
  "magicLinkToken": "string",
  "updatedAt": "ISO date"
}

// Log entry (untuk laporan kontribusi)
{
  "id": "string",
  "roomId": "string",
  "userId": "string",
  "taskId": "string",
  "action": "status-update | profile-confirmed | task-confirmed",
  "timestamp": "ISO date"
}
```

**Playbook jenis tugas sebagai konfigurasi (bukan hardcode):**

```json
// config/task-playbooks.json
{
  "T1": {
    "name": "Makalah / Laporan Tertulis",
    "roles": ["Penulis Bab", "Pencari Referensi", "Editor/Reviewer", "Layouter"],
    "gapCritical": false,
    "promptTemplate": "Pecah tugas makalah berikut menjadi sub-tugas per peran: {description}. Tim: {roles}. Sertakan Definition of Done dan estimasi jam per sub-tugas."
  },
  "T2": {
    "name": "Proyek / Prototipe",
    "roles": ["Project Manager", "UI/UX Designer", "Frontend Developer", "Backend Developer", "Tester/QA", "Technical Writer"],
    "gapCritical": true,
    "promptTemplate": "Pecah proyek IT berikut menjadi sub-tugas per role: {description}. Role tersedia: {availableRoles}. Role yang dibutuhkan tapi tidak ada: {missingRoles}. Sesuaikan pembagian berdasarkan pilihan adaptasi: {adaptationChoice}."
  },
  "T6": {
    "name": "Kustom",
    "roles": [],
    "gapCritical": false,
    "promptTemplate": null
  }
}
```

> Menyimpan playbook sebagai JSON config (bukan hardcode di logic) memungkinkan tim menambah T3–T5 di masa depan tanpa mengubah kode inti.

---

## HARI 1 — Fondasi + F1 (CV Parsing) + F2 (Gap Analysis)

**Target akhir Hari 1:** Koordinator bisa buat room, anggota bisa join dan upload CV, profil tampil dengan confidence indicator, dan gap analysis muncul setelah jenis tugas dipilih.

### Pembagian Pekerjaan

| Siapa | Tugas | Estimasi |
|-------|-------|---------|
| **Dev 1** | Setup project (repo, framework, routing dasar, JSON store) | 1–2 jam |
| **Dev 2** | Endpoint `POST /cv/parse` — terima teks CV, panggil Bob, kembalikan profil JSON | 3–4 jam |
| **Dev 1** | UI: halaman join room + upload CV + tampilan profil dengan confidence indicator (🟢/🟡/🔴) | 3–4 jam |
| **Dev 2** | Endpoint `POST /gap/check` — bandingkan profil tim vs. role template T1/T2 | 2–3 jam |
| **Semua** | Integrasi end-to-end: upload → profil → gap → tampil | 1–2 jam |

**Total estimasi: ~10–15 jam kerja tim** [ASUMSI tentang kecepatan build]

### Mode Bob yang Digunakan Hari 1

**Agent mode — CV Parsing:**
```
Prompt template (simpan sebagai bukti log):

"Ekstrak dari teks CV berikut:
(1) keahlian teknis (contoh: Python, Figma, public speaking)
(2) pengalaman organisasi atau kepanitiaan
(3) indikasi gaya kerja (berdasarkan jabatan yang pernah diemban)

Untuk setiap field, berikan confidence level: HIGH (jelas disebutkan eksplisit),
MEDIUM (bisa diinferensikan), atau LOW (tidak ada indikasi).

Format output: JSON dengan struktur { skills, experience, workStyle, confidence }.

Teks CV:
---
{cvText}
---"
```

**Agent mode — Gap Analysis:**
```
Prompt template (simpan sebagai bukti log):

"Tim ini memiliki profil berikut:
{teamProfiles}

Jenis tugas yang dipilih: {taskType}
Role yang dibutuhkan untuk jenis tugas ini: {requiredRoles}

(1) Identifikasi role yang tidak terpenuhi oleh profil tim.
(2) Untuk setiap role yang tidak terpenuhi, berikan 3 opsi adaptasi.
(3) Format output: JSON dengan { missingRoles, adaptationOptions }."
```

### Bukti Log yang Dikumpulkan Hari 1

- [ ] Screenshot atau copy prompt CV parsing yang digunakan
- [ ] Contoh output JSON profil (1 CV nyata atau mock) + catatan: apakah confidence indicator akurat?
- [ ] Screenshot atau copy prompt gap analysis
- [ ] Contoh output gap analysis untuk kasus T2 (semua frontend) — apakah 3 opsi adaptasi masuk akal?
- [ ] Catatan koreksi jika output tidak sesuai (simpan ke `corrections.md`)

### Risiko Teknis Hari 1

| Risiko | Kemungkinan | Mitigasi |
|--------|:-----------:|---------|
| **CV format non-standar (tabel, Canva, kolom ganda)** — teks yang di-extract dari PDF berantakan sehingga Bob tidak bisa parse dengan benar | Tinggi | Gunakan library PDF-to-text yang andal (pdf.js atau PyMuPDF); jika ekstraksi gagal, fallback otomatis ke form 3 pertanyaan — jangan error kosong |
| **Bob API timeout atau rate limit** — 500 coin terbatas, panggilan berulang di dev bisa habis | Sedang | Cache hasil per CV hash; jangan panggil Bob ulang jika CV sama; gunakan mock response saat development, Bob hanya untuk demo |
| **Confidence indicator salah** — Bob memberi HIGH untuk field yang jelas kurang jelas | Sedang | Tambahkan validasi sederhana: jika profil skills < 2 item dan confidence HIGH, downgrade ke MEDIUM |

---

## HARI 2 — F3 (Task Splitter + Board) + F4 (Verifikasi Porsi) + F5 (Update Status + Magic Link)

**Target akhir Hari 2:** Koordinator bisa paste deskripsi tugas, board terkunci dengan sub-tugas per role + DoD, anggota konfirmasi estimasi jam, verifikasi porsi muncul, dan update status 1-tap berjalan — termasuk via magic link.

### Pembagian Pekerjaan

| Siapa | Tugas | Estimasi |
|-------|-------|---------|
| **Dev 2** | Endpoint `POST /task/split` — kirim deskripsi + role, panggil Bob, kembalikan sub-tugas + DoD + estimasi jam | 3–4 jam |
| **Dev 1** | UI: wizard langkah 4 (paste deskripsi → lihat sub-tugas → konfirmasi estimasi jam → board terkunci) | 3–4 jam |
| **Dev 2** | Logic verifikasi porsi (hitung distribusi, flag jika >40%) — ini **tidak butuh Bob**, hitung lokal | 1–2 jam |
| **Dev 1** | UI: board progres (kolom 3: Belum Mulai / Sedang / Selesai) + update 1-tap | 2–3 jam |
| **Dev 2** | Magic link: generate token per task, endpoint `PUT /task/:token/status`, UI landing page untuk klik | 2–3 jam |
| **Semua** | Integrasi + test alur koordinator end-to-end | 1–2 jam |

**Total estimasi: ~12–18 jam kerja tim** [ASUMSI]

### Mode Bob yang Digunakan Hari 2

**Plan mode — Task Decomposition:**
```
Prompt template (simpan sebagai bukti log):

"Pecah tugas berikut menjadi sub-tugas yang bisa dikerjakan per role:

Jenis tugas: {taskType} ({taskTypeName})
Deskripsi tugas dari dosen: {taskDescription}
Role yang tersedia di tim: {availableRoles}

Untuk setiap sub-tugas:
- Nama sub-tugas (singkat, konkret)
- Role yang mengerjakan
- Definition of Done: kriteria spesifik yang harus dipenuhi agar sub-tugas dianggap selesai
- Estimasi jam: kasar (boleh range, misal 2–4 jam)

Format output: JSON array of { title, role, dod, estimatedHoursMin, estimatedHoursMax }.
Maksimal 8 sub-tugas untuk tim 3–5 orang."
```

**Catatan: F4 (verifikasi porsi) adalah kalkulasi matematika lokal — tidak butuh Bob.**
Rumus: `porsi_anggota = sum(estimatedHours_tasks_anggota) / sum(estimatedHours_semua) * 100`
Flag jika `max_porsi - min_porsi > 40%` atau `max_porsi > 50%`.

### Unit Test Wajib Hari 2

```
Test 1 — Verifikasi Porsi (hitungan jam kosong bersama)
  Input: 4 anggota, estimasi jam: [10, 8, 3, 2]
  Expected: total = 23; porsi = [43%, 35%, 13%, 9%]; flag = true (Andi >40%, selisih 34%)
  Test pass jika: warning muncul dan redistribusi ditawarkan

Test 2 — Validasi Playbook Jenis Tugas
  Input: taskType = "T2", config/task-playbooks.json di-load
  Expected: roles = ["Project Manager", "UI/UX Designer", "Frontend Developer", ...]
  Test pass jika: roles tidak hardcode di logic, diambil dari config JSON

Test 3 — Magic Link Update
  Input: token valid dari task yang belum selesai → klik link → status diubah ke "selesai"
  Expected: status task berubah; log entry dibuat; board diperbarui
  Test pass jika: tidak butuh login, hanya token di URL
```

### Bukti Log yang Dikumpulkan Hari 2

- [ ] Screenshot prompt task split + satu contoh output sub-tugas nyata
- [ ] Catatan: apakah DoD yang di-generate AI masuk akal untuk konteks mahasiswa?
- [ ] Screenshot verifikasi porsi berjalan (dengan data test)
- [ ] Screenshot magic link berhasil update status
- [ ] Catat berapa panggilan Bob digunakan sampai Hari 2 (estimasi coin terpakai)

### Risiko Teknis Hari 2

| Risiko | Kemungkinan | Mitigasi |
|--------|:-----------:|---------|
| **Sub-tugas AI terlalu generik** — output terlalu abstrak atau tidak sesuai konteks mahasiswa | Tinggi | Tambahkan contoh di prompt (few-shot): "Contoh sub-tugas yang bagus: 'Tulis Bab 2 tentang Tinjauan Pustaka — minimal 1500 kata, sudah ada 5 referensi, selesai H-5 dari deadline'." |
| **Board state tidak sinkron antar anggota** — anggota A update tapi anggota B lihat versi lama | Sedang | Polling sederhana setiap 15 detik (bukan WebSocket — terlalu kompleks untuk 3 hari); atau tombol "Refresh Board" manual |
| **Magic link expired atau conflict** — token digunakan dua kali atau link sudah kedaluwarsa | Rendah | Satu token = satu sub-tugas; tidak ada expiry di MVP; setelah digunakan, tombol di halaman landing menunjukkan status terkini |
| **Estimasi jam Bob tidak realistis** — AI generate 1 jam untuk tugas yang butuh 10 jam | Tinggi | Tegaskan di UI bahwa estimasi AI adalah **titik awal** — anggota wajib konfirmasi atau ubah sebelum board dikunci. Ini sudah ada di PRD (F3). |

---

## HARI 3 — F6 (Laporan Kontribusi + Portofolio Kolaborasi) + Demo Mode + Polish

**Target akhir Hari 3:** Laporan kontribusi bisa di-generate dari data room, Demo Mode bisa diaktifkan dengan data pre-loaded yang dramatis, alur demo 3 menit berjalan mulus, dan LOG.md terisi penuh.

### Pembagian Pekerjaan

| Siapa | Tugas | Estimasi |
|-------|-------|---------|
| **Dev 2** | Endpoint `GET /report/:roomId` — aggregate log, hitung %, generate teks laporan via Bob | 2–3 jam |
| **Dev 1** | UI: halaman laporan (tabel kontribusi per anggota, flag ketimpangan, tombol export/share) | 2–3 jam |
| **Dev 1** | Demo Mode: seed data Tim Fiksi (Andi 42%, Budi 31%, Citra 22%, Dodi 5%), toggle aktif di navbar | 2–3 jam |
| **Dev 2** | Portofolio Kolaborasi: halaman publik dari laporan (URL tanpa login, data sudah dianonimkan opsional) | 1–2 jam |
| **Semua** | End-to-end walkthrough demo 3 menit — pastikan tidak ada crash | 1–2 jam |
| **Semua** | Isi LOG.md Hari 3 + screenshot semua sesi Bob yang digunakan | 1 jam |

**Total estimasi: ~9–13 jam kerja tim** [ASUMSI]

### Mode Bob yang Digunakan Hari 3

**Agent mode — Generate Laporan Kontribusi:**
```
Prompt template (simpan sebagai bukti log):

"Dari data log aktivitas tim berikut, buat ringkasan kontribusi per anggota:

Data log:
{logData}

Untuk setiap anggota, ringkas:
(1) Persentase beban yang ditanggung (berdasarkan estimasi jam yang dikonfirmasi)
(2) Sub-tugas yang diselesaikan
(3) Satu kalimat deskripsi kontribusi yang bisa dibaca dosen

Format output: JSON array of { name, percentage, completedTasks, summary }.
Gunakan bahasa Indonesia yang formal tapi bisa dibaca mahasiswa."
```

**Ask mode — Jika ada pertanyaan atau bug:**
```
Gunakan Ask mode untuk pertanyaan teknis cepat selama Hari 3:
- "Bagaimana cara terbaik meng-aggregate log JSON untuk menghitung persentase?"
- "Apa pola React yang paling sederhana untuk polling data setiap 15 detik?"
Catat setiap tanya-jawab sebagai sesi Bob di LOG.md.
```

### Unit Test Wajib Hari 3

```
Test 4 — Generate Laporan Kontribusi
  Input: room dengan 4 anggota, log aktivitas 2 minggu (gunakan seed data Demo Mode)
  Expected: laporan berisi 4 baris anggota + persentase + summary 1 kalimat
  Test pass jika: output Bob coherent, tidak ada anggota yang hilang dari laporan

Test 5 — Demo Mode Toggle
  Input: aktifkan Demo Mode dari navbar
  Expected: board menampilkan data Tim Fiksi (Andi/Budi/Citra/Dodi), laporan menunjukkan Dodi 5%
  Test pass jika: tidak ada data asli yang tertimpa; toggle bisa dimatikan kembali

Test 6 — Portofolio Kolaborasi (URL publik)
  Input: koordinator klik "Aktifkan Portofolio"
  Expected: URL publik yang bisa dibuka tanpa login, menampilkan role + kontribusi
  Test pass jika: halaman bisa dibuka di browser yang berbeda (tanpa sesi login)
```

### Data Seed Demo Mode (Pre-loaded)

```json
// Simpan di: src/data/demo-seed.json
{
  "room": {
    "name": "Tim Fiksi — Proyek Sistem Informasi Akademik",
    "taskType": "T2",
    "deadline": "2026-11-15",
    "phase": 4
  },
  "members": [
    { "name": "Andi", "role": "Frontend Developer", "percentage": 42,
      "tasks": ["Halaman Login ✓", "Halaman Dashboard ✓", "Komponen Tabel ✓"] },
    { "name": "Budi", "role": "Backend Developer", "percentage": 31,
      "tasks": ["API Auth ✓", "API Data Akademik ✓", "Dokumentasi API ⏳"] },
    { "name": "Citra", "role": "UI/UX Designer", "percentage": 22,
      "tasks": ["Wireframe semua halaman ✓", "Design System ✓"] },
    { "name": "Dodi", "role": "Project Manager", "percentage": 5,
      "tasks": ["Sprint plan ⏳", "Catatan keputusan ⏳"],
      "notifications": 2, "lastActivity": "9 hari yang lalu" }
  ]
}
```

### Cara Mengumpulkan Bukti Log Setiap Hari

Di akhir setiap hari Build Week, lakukan langkah berikut **sebelum selesai kerja:**

1. **Tulis baris baru di `docs/bob-evidence/LOG.md`** untuk setiap sesi Bob yang dijalankan hari itu.
   Format kolom: `ID · Tanggal · Mode · Tujuan · Berkas/Input · Keluaran · Keputusan Manusia · Tautan Koreksi`

2. **Screenshot sesi Bob** (minimal: prompt yang digunakan + output yang dihasilkan).
   Simpan di: `docs/bob-evidence/screenshots/hari-{n}-{deskripsi}.png`

3. **Catat koreksi** di `docs/bob-evidence/corrections.md` jika ada output Bob yang diubah atau ditolak.
   Format: `Sesi → Apa yang salah → Cara kami tahu → Perbaikan → Dampak ke produk`

4. **Catat estimasi coin** yang digunakan hari itu (jumlah panggilan × estimasi cost per panggilan).

> ⚠ **Risiko coin:** 500 Bob Coin untuk seluruh Build Week berarti tim harus disiplin.
> Jangan panggil Bob untuk hal yang bisa dihitung lokal (verifikasi porsi, sorting, filtering).
> Gunakan cache: hash input → simpan output → cek cache sebelum panggil Bob lagi.

---

## Estimasi Penggunaan Bob Coin

| Fungsi | Frekuensi per Demo | Estimasi Coin |
|--------|:------------------:|:-------------:|
| CV Parsing (per anggota, sekali saja) | ~5 anggota per demo | ~5 panggilan |
| Gap Analysis (sekali per room) | ~1 per demo | ~1 panggilan |
| Task Splitting (sekali per room) | ~1 per demo | ~1 panggilan |
| Laporan Kontribusi (sekali di akhir) | ~1 per demo | ~1 panggilan |
| Debug / Ask selama build | ~10–20 selama 3 hari | ~15 panggilan |
| **Total perkiraan** | | **~23 panggilan** |

> Dengan 500 coin dan ~23 panggilan yang diperkirakan, margin masih sangat longgar — **asalkan tidak ada pengulangan panggilan yang tidak perlu**. [ASUMSI tentang cost per panggilan — tim perlu verifikasi rate aktual]
>
> Jika ada kekhawatiran soal coin: gunakan **mock response** di development (JSON hardcode), panggil Bob hanya saat demo.

---

## Risiko Teknis Lintas Hari

| Risiko | Kemungkinan | Dampak | Mitigasi |
|--------|:-----------:|:------:|---------|
| **F1 gagal untuk CV real di hari demo** — PDF mahasiswa tidak bisa di-parse | Tinggi | Fatal untuk alur | Siapkan fallback form 3 pertanyaan yang sudah di-polish; jika PDF gagal, langsung tawarkan fallback tanpa error message teknis |
| **Alur terlalu lambat untuk demo 3 menit** — loading AI response membuat demo tersendat | Tinggi | Tinggi | Demo Mode wajib ada; jangan demo flow live dari awal — mulai dari state yang sudah ada, tunjukkan board dan laporan yang sudah terisi |
| **Tim kehabisan waktu sebelum F6 selesai** | Sedang | Sedang | F6 adalah prioritas Hari 3 — jika Hari 2 selesai lebih cepat, majukan F6. Portofolio Kolaborasi bisa di-skip jika tidak ada waktu — laporan kontribusi saja sudah cukup untuk demo |
| **Coin habis sebelum demo** | Rendah | Tinggi | Gunakan mock response di development; batasi panggilan Bob per hari; catat setiap panggilan di LOG |
| **Anggota tim tidak familier dengan framework pilihan** | Bergantung tim | Tinggi | Putuskan framework di hari sebelum Build Week — jangan ganti stack setelah mulai build |

---

## Checklist Sebelum Demo

**Hari 3, 1 jam sebelum presentasi:**

- [ ] Demo Mode aktif dan board menampilkan data Tim Fiksi dengan benar
- [ ] Laporan kontribusi Dodi 5% tampil dan ter-flag sebagai ketimpangan
- [ ] Alur demo 3 menit sudah dipraktikkan minimal 2 kali tanpa crash
- [ ] LOG.md terisi semua sesi Build Week (baris baru tiap hari)
- [ ] Screenshot minimal 3 sesi Bob tersimpan di `docs/bob-evidence/screenshots/`
- [ ] Tidak ada error console yang terlihat saat board ditampilkan
- [ ] Magic link bisa diakses dari HP (bukan hanya localhost — deploy atau gunakan ngrok)
- [ ] Portofolio Kolaborasi URL bisa dibuka di browser terpisah (tanpa login)

---

*Dokumen ini adalah rencana build — bukan jaminan. Sesuaikan dengan kecepatan aktual tim. Yang paling penting: Demo Mode harus selesai Hari 3. Tanpa Demo Mode, demo 3 menit tidak bisa membuktikan nilai produk secara efektif (`plans/07` §1 Kegagalan #7).*
