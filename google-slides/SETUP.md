# Setup Google Slides API — SatuTim Proposal Builder

## Langkah 1 — Buat Google Cloud Project

1. Buka https://console.cloud.google.com
2. Klik dropdown project di atas → **New Project**
3. Nama: `satutim-slides` → **Create**

## Langkah 2 — Enable API

1. Di sidebar: **APIs & Services → Library**
2. Cari **"Google Slides API"** → **Enable**
3. Cari **"Google Drive API"** → **Enable**

## Langkah 3 — Buat OAuth Credentials

1. **APIs & Services → Credentials → + Create Credentials → OAuth client ID**
2. Jika diminta configure consent screen:
   - User Type: **External** → Create
   - App name: `SatuTim Slides Builder`
   - User support email: email kamu
   - Developer contact: email kamu
   - **Save and Continue** (skip scopes, skip test users) → **Back to Dashboard**
3. Kembali ke **Create Credentials → OAuth client ID**
   - Application type: **Desktop app**
   - Name: `satutim-builder`
   - **Create**
4. Klik **Download JSON** → simpan file sebagai:
   ```
   google-slides/credentials.json
   ```
   (di dalam folder workspace ini)

## Langkah 4 — Jalankan Script

```bash
cd /home/areal/Lomba/SatuTim-CodeTheFuture
python3 google-slides/build-slides.py
```

- Browser akan terbuka → login Google → klik **Allow**
- Token disimpan otomatis di `google-slides/token.json` (tidak perlu login lagi)
- Script selesai dalam ~30 detik
- Link presentasi akan ditampilkan di terminal dan disimpan di `google-slides/presentation-url.txt`

## Catatan

- `credentials.json` dan `token.json` sudah di-.gitignore (jangan di-commit)
- Jika ingin rebuild ulang, hapus `token.json` dan jalankan lagi
- Presentasi dibuat di akun Google yang kamu login saat OAuth
