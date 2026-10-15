# Rencana Tindak Lanjut Evaluasi & Indikator Penilaian Kinerja JDIHN 2026
## Portal JDIH Kementerian Transmigrasi Republik Indonesia

Rencana redesign dan pengembangan sistem ini disusun khusus untuk menindaklanjuti seluruh rekomendasi dan temuan penilaian dari Badan Pembinaan Hukum Nasional (BPHN) serta Kementerian Koordinator Bidang Infrastruktur dan Pembangunan Kewilayahan (Kemenko Infra) berdasarkan Pedoman Pelaporan dan Penilaian Kinerja Anggota JDIHN Tahun 2026 (Total 100 Poin).

---

### User Review & Critical Decisions

> [!IMPORTANT]
> Berdasarkan konfirmasi pada tahap klarifikasi:
> - **Variabel Penilaian**: Diterapkan pemenuhan terhadap seluruh 4 Variabel Penilaian JDIHN 2026 secara komprehensif (Variabel I: 58 poin, Variabel II: 27 poin, Variabel III: 5 poin, Variabel IV: 10 poin).
> - **Penempatan Menu Pembentukan PUU**: Disediakan menu mandiri pada bilah navigasi utama dengan *dropdown* submenu lengkap: Progsun/Propem, Naskah Akademik/Urgensi, Rancangan PUU, Risalah Pembahasan/Notulensi Harmonisasi, Partisipasi Publik, serta Hasil Pemantauan & Analisis-Evaluasi (Hasil Manjau/AE).
> - **Layanan Onsite**: Dilengkapi modul interaktif **Simulasi Kios Elektronik (Interactive Touch Kiosk)** dan **Pojok JDIH** terintegrasi layanan instansi.

---

## 1. Overview & Core Concept

### What It Does
Redesign menyeluruh pada arsitektur informasi, katalog data hukum, modul layanan, dan antarmuka portal JDIH Kementerian Transmigrasi guna mencapai predikat kinerja tertinggi (**Kategori AA / Nilai 86–100**) dalam penilaian tahunan JDIHN 2026.

### Target Audience & Persona
1. **Tim Penilai Kinerja JDIHN BPHN & Kemenko Infra**: Verifikasi pemenuhan bukti data dukung untuk 4 variabel dan 29 indikator pelaporan.
2. **Aparatur Sipil Negara & Pemangku Kepentingan Transmigrasi**: Akses dokumen perancangan, naskah urgensi, risalah harmonisasi, dan peraturan pelaksana.
3. **Masyarakat Umum, Transmigran, & Disabilitas**: Menemukan kepastian regulasi agraria pemukiman, diseminasi infografis, mendengarkan pembaca audio, atau menggunakan Kios Elektronik onsite.
4. **Investor & Mitra Internasional**: Mengakses naskah terjemahan resmi (*English Official Translation*) peraturan perundang-undangan transmigrasi.

---

## 2. User Experience & Visual Design

### A. Navigasi Utama (Top Bar Architecture)
Mempertahankan *Top Bar Contract* dengan penataan menu hierarkis:
1. **Brand Lockup**: `JDIH Kemtrans RI` (Kementerian Transmigrasi Republik Indonesia).
2. **Kanal Menu Navigasi**:
   - **Produk Hukum** (Peraturan Menteri, PP, Perpres, UU, Kepmen, SE).
   - **Pembentukan PUU (Menu Mandiri Baru)**:
     - *Program Penyusunan (Progsun/Propem 2026)*
     - *Naskah Akademik & Urgensi*
     - *Rancangan PUU (RPermen Transmigrasi)*
     - *Risalah Pembahasan / Notulensi Harmonisasi*
     - *Kanal Partisipasi Publik (Konsultasi Publik Online)*
     - *Hasil Pemantauan, Analisis & Evaluasi (Hasil Manjau/AE)*
     - *Kajian / Penelitian Hukum*
   - **Dokumen Hukum Lain & Putusan** (Pemisahan Metadata Putusan Pengadilan/MK/Quasi Peradilan vs Monografi/Artikel).
   - **Statistik PUU & Pengunjung** (Statistik jenis, tahun, status berlaku, dan tren klik).
   - **Pengembangan JDIH** (*Pojok JDIH & Kios Onsite*, *Peraturan Terjemahan English*, *Diseminasi Infografis*, *Evaluasi Mandiri 6 Aspek*, *Status Keamanan ITSA BSSN*).
3. **Aksi Utama**: Tombol *Pencarian Cepat* (`/`) dan Pengatur Aksesibilitas Disabilitas.

### B. Visual Identity & Atmosphere
- **Warna & Nuansa**: Dominan Kanvas Netral Alabaster/Charcoal Slate, aksen *Forest Emerald* resmi pemerintah RI, dan tanda status visual sesuai kode temuan JDIHN (Hijau: *Sesuai*, Kuning/Oranye: *Belum Lengkap/Konsisten*, Merah: *Belum Tersedia*).
- **Tipografi**: *Cinzel* & *Source Serif 4* untuk kelembagaan resmi, berpadu dengan *Plus Jakarta Sans* untuk kemudahan membaca data teknis.
- **Dukungan Aksesibilitas**: Skala teks dinamis A-/A+, Mode Kontras Tinggi WCAG AAA, Text-To-Speech berbahasa Indonesia, pembaca naskah ramah *screen-reader*.

---

## 3. Rincian Pemenuhan 4 Variabel Penilaian JDIHN 2026

### Variabel I: Pengelolaan Dokumen & Informasi Hukum Lengkap dan Akurat (Bobot: 58 Poin)
1. **PUU Tahun Pelaporan (Permen Transmigrasi 2026 & 2025)**:
   - Menampilkan naskah utuh Peraturan Menteri Transmigrasi tahun 2026 (Nomor 1 s.d. 4 Tahun 2026) dan tahun 2025 (Nomor 1 s.d. 14 Tahun 2025) sesuai data riil Kemenko Infra.
2. **Dokumen Hukum Pendukung Pembentukan PUU (Nilai: 20)**:
   - Mengunggah data Progsun/Propem, Naskah Urgensi Lahan HPL, Rancangan Permen tentang Transmigrasi Patriot, Risalah Rapat Harmonisasi bersama Kemenkumham, serta Laporan Hasil Analisis & Evaluasi (Manjau/AE).
3. **Konsistensi Metadata & Abstrak (Nilai: 15)**:
   - Memperbaiki pengisian status: *Diubah*, *Dicabut*, *Mengubah*, *Mencabut*, serta status uji materi di MK/MA.
   - Format abstrak PUU standar dengan 3 bagian pokok: Subjek, Konsiderans Pokok, dan Catatan Keberlakuan.
4. **Diseminasi Produk Hukum (Nilai: 8)**:
   - Galeri media diseminasi: Infografis hukum beresolusi tinggi, videografis interaktif, tautan media sosial resmi, dan ringkasan substansi.

### Variabel II: Aksesibilitas Dokumen & Informasi Hukum (Bobot: 27 Poin)
1. **Tampilan Detail Khusus Putusan (Non-Peraturan)**:
   - Menata ulang lembar detail putusan pengadilan/MK/Quasi Peradilan agar **tidak lagi** memakai metadata peraturan.
   - Menampilkan: *Jenis Lembaga Peradilan (MK/MA/PTUN/KIP/Ombudsman)*, *Nomor Amar*, *Para Pihak (Pemohon/Termohon)*, *Tanggal Sidang/Putusan*, dan *Status Amar Putusan*.
2. **Tampilan Detail Monografi & Artikel Hukum**:
   - Metadata terspesialisasi: Penulis/Penyusun, Penerbit, Kota Terbit, ISBN/ISSN, Subjek Kajian, dan Berkas Naskah.
3. **Detail Peraturan Terkait & Peraturan Pelaksanaan**:
   - Setiap halaman peraturan menampilkan blok eksplisit *Peraturan Pelaksanaan* dan *Dokumen Pendukung Pembentukan PUU*.
4. **Statistik Terintegrasi**:
   - Jumlah dokumen hukum (1.248), koleksi PUU, rasio keberlakuan (94,2%), breakdown jenis instrumen, dan widget counter pengunjung (Hari ini, Bulan ini, Total kunjungan).
5. **Mobile Accessibility**:
   - Responsif optimal pada seluruh perangkat seluler, menu navigasi *touch-friendly*, dan tata letak *bottom navigation bar*.

### Variabel III: Integrasi & Sinkronisasi Dokumen Hukum (Bobot: 5 Poin)
1. **Monitoring URL API Integrasi**:
   - Menampilkan status endpoint API nasional: `https://jdih.transmigrasi.go.id/web/Web/jdih_integration_jdihn`.
   - Log sinkronisasi berkala (Tanggal sinkronisasi terakhir, jumlah payload data sukses terkirim, status response 200 OK).

### Variabel IV: Pengembangan JDIH (Bobot: 10 Poin)
1. **Layanan Onsite & Kios Elektronik Interaktif**:
   - Modul virtual **Pojok JDIH Kemtrans** & simulasi interaktif layar sentuh Kios Informasi Hukum di lobi kantor.
   - Pengambilan nomor antrean konsultasi tatap muka dan peminjaman buku perpustakaan hukum.
2. **Layanan Peraturan Terjemahan (English Official Translation)**:
   - Halaman khusus dokumen terjemahan resmi bahasa Inggris peraturan perundang-undangan strategis, disertai tanda pengesahan Ditjen PP Kemenkumham atau surat permohonan penerjemahan.
3. **Pemanfaatan AI & Keamanan Informasi**:
   - Fitur **Tanya JDIH (AI Legal Assistant)** untuk pencarian cerdas berbasis konteks hukum transmigrasi.
   - Informasi implementasi keamanan: Sertifikasi SSL, Multi-Factor Authentication (MFA), dan kesiapan asesmen keamanan siber (ITSA BSSN).
4. **Layanan Inklusi Disabilitas**:
   - Peningkatan fitur text-to-speech, mode kontras tinggi, opsi font ramah disleksia, dan simulasi penerjemah video bahasa isyarat (BISINDO).
5. **Laporan Evaluasi Mandiri (Self-Assessment Report)**:
   - Modul dokumen evaluasi mandiri tahunan yang mencakup 7 aspek: Organisasi, SDM, Koleksi Dokumen, Teknis Pengelolaan, Sarana Prasarana, Pemanfaatan TIK, dan Inovasi Pengembangan.

---

## 4. Technical Architecture & System Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PORTAL JDIH KEMENTERIAN TRANSMIGRASI                  │
└─────────────────────────────────────────────────────────────────────────────┘
                                       │
     ┌─────────────────────────────────┼─────────────────────────────────┐
     ▼                                 ▼                                 ▼
┌─────────────────────────┐ ┌─────────────────────────┐ ┌─────────────────────────┐
│     TOP A11Y RIBBON     │ │   MAIN NAVIGATION BAR   │ │ EVALUATION BANNER / KPI │
│ Mode Gelap/Terang       │ │ Produk Hukum (PUU)      │ │ Status JDIHN Bintang 5  │
│ A-/A+ Text Scaling      │ │ Pembentukan PUU (Dropdown)│ 4 Variabel Kinerja 2026 │
│ Kontras Tinggi / Audio  │ │ Dokumen Lain & Putusan  │ Kategori Nilai Target AA  │
│ Kios Onsite / GitHub    │ │ Statistik & Layanan SKM │ Log API Sync Terupdate    │
└─────────────────────────┘ └─────────────────────────┘ └─────────────────────────┘
                                       │
     ┌─────────────────────────────────┼─────────────────────────────────┐
     ▼                                 ▼                                 ▼
┌─────────────────────────┐ ┌─────────────────────────┐ ┌─────────────────────────┐
│  PEMBENTUKAN PUU MODUL  │ │ DETAIL DOKUMEN KHUSUS   │ │  PENGEMBANGAN JDIH      │
│ • Progsun/Propem 2026   │ │ • Metadata Peraturan    │ │ • Pojok JDIH & Kios UI  │
│ • Naskah Urgensi & NA   │ │   (Abstrak, Pelaksana)  │ │ • English Translations  │
│ • RPermen Transmigrasi  │ │ • Metadata Putusan MK   │ │ • AI Tanya JDIH Legal   │
│ • Risalah Harmonisasi   │ │   (Amar, Pihak, Putusan)│ │ • Keamanan ITSA / MFA   │
│ • Partisipasi Publik    │ │ • Monografi & Artikel   │ │ • Laporan Evaluasi      │
│ • Hasil Manjau/AE       │ │   (Penulis, Pengkaji)   │ │   Mandiri 7 Aspek       │
└─────────────────────────┘ └─────────────────────────┘ └─────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DATA LAYER & INTEGRATION STATE                           │
│  - Dataset Regulasi Kemtrans 2025/2026  - Endpoint API JDIHN Nasional        │
│  - Storage Preferensi & Bookmarks       - Form Registrasi Tiket & SKM       │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Rencana Langkah Eksekusi (Implementation Steps)

1. **Pembaruan Data & Tipe TypeScript (`src/types/jdih.ts`, `src/data/regulationsData.ts`)**:
   - Menambahkan tipe dan data untuk Dokumen Pembentukan PUU (Progsun, Naskah Urgensi, Rancangan, Risalah, Hasil Manjau/AE).
   - Menambahkan entitas Putusan Pengadilan/MK dengan metadata khusus peradilan (bukan metadata PUU).
   - Menambahkan naskah terjemahan resmi bahasa Inggris (*English Translation*).
   - Menambahkan berkas laporan Evaluasi Mandiri 7 Aspek dan data diseminasi produk hukum.
2. **Pembaruan Navigasi & Header (`src/components/Header.tsx`, `src/components/A11yRibbon.tsx`)**:
   - Menambahkan menu mandiri **Pembentukan PUU** dengan *dropdown* 6 submenu lengkap.
   - Menambahkan tab navigasi untuk Putusan/Monografi dan Inovasi Pengembangan JDIH.
3. **Penyempurnaan Detail Dokumen (`src/components/RegulationDetailModal.tsx`)**:
   - Memisahkan tata letak tampilan untuk Peraturan vs Putusan Pengadilan vs Monografi.
   - Menambahkan tab *Peraturan Pelaksanaan* dan *Dokumen Pendukung Pembentukan PUU*.
   - Menjamin konsistensi pengisian keterangan status dan abstrak.
4. **Pembuatan Komponen Baru**:
   - `src/components/LawMakingSection.tsx`: Portal publikasi dokumen pembentukan PUU dan partisipasi publik (memberi masukan terhadap RPermen).
   - `src/components/OnsiteKioskModal.tsx`: Simulasi interaktif layar sentuh Kios Informasi Hukum di lobi instansi dan registrasi antrean Pojok JDIH.
   - `src/components/EnglishTranslationSection.tsx`: Galeri naskah terjemahan resmi bahasa Inggris berstatus *Official Translation*.
   - `src/components/SelfEvaluationModal.tsx`: Lembar pelaporan evaluasi mandiri 7 aspek pengelolaan JDIH beserta status keamanan ITSA BSSN.
5. **Verifikasi & Pengujian**:
   - Pengujian fungsi seluruh tombol, filter, audio player, dan formulir masukan publik.
   - Menjalankan `compile_applet` dan `lint_applet` hingga bebas dari galat (*zero errors*).
