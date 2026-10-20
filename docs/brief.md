# SatuTim: brief produk

Web app responsif (mobile-first) untuk mahasiswa yang mengerjakan tugas kelompok.
Loop produk: cocokkan -> sepakati -> jaga -> buktikan.

## Masalah

Peran kabur, usaha anggota tidak terlihat, dan budaya sungkan membuat masalah
dipendam sampai nilai akhir terasa tidak adil.

## Fitur MVP

F1 Ruang tim (buat ruang, masuk lewat kode)
F2 Fit Snapshot (jam kosong mingguan, skill, target nilai, gaya kerja)
F3 Perjanjian Tim (hitung jam kosong bersama + selisih target; AI memecah brief jadi
tugas dan usulan peran; tim menyunting lalu menekan "Setuju")
F4 Papan tugas + log kontribusi (centang selesai = tercatat otomatis)
F5 Pengingat netral + tombol "perlu bantuan / jadwal bentrok"
F6 Laporan kontribusi 1 halaman
F7 Penerjemah teguran AI (bonus)

## Prinsip desain

- Log append-only, tidak bisa diedit diam-diam
- Tidak ada peringkat atau skor antar-anggota
- AI hanya memecah tugas dan menyusun ulang teguran; AI tidak menilai orang
- Data demo fiktif 15-20 mahasiswa
- Build 3 hari, jadi pilih stack paling sederhana
