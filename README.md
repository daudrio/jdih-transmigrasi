# JDIH Kementerian Transmigrasi Republik Indonesia

> **Portal Resmi Jaringan Dokumentasi dan Informasi Hukum (JDIH)**  
> Kementerian Transmigrasi Republik Indonesia  
> Terintegrasi dengan Standar Nasional JDIHN (Perpres No. 33 Tahun 2012)

---

## 🌐 Pratinjau Website (Live Demo)

- **Development URL**: [https://ais-dev-nxry2kmoxo3a3ahu23ctji-710079289593.asia-northeast1.run.app](https://ais-dev-nxry2kmoxo3a3ahu23ctji-710079289593.asia-northeast1.run.app)
- **Production/Shared URL**: [https://ais-pre-nxry2kmoxo3a3ahu23ctji-710079289593.asia-northeast1.run.app](https://ais-pre-nxry2kmoxo3a3ahu23ctji-710079289593.asia-northeast1.run.app)

---

## ✨ Fitur Utama

1. **Desain Modern & Responsif**:
   - Tampilan institusional berwibawa (*dignified institutional design*) dengan tipografi hierarki tinggi (*Plus Jakarta Sans*, *Cinzel*, dan *Source Serif 4*).
   - Tata letak responsif penuh dari layar ponsel (*mobile-first*) hingga desktop 1440px.

2. **Dukungan Mode Gelap dan Terang (*Dark & Light Mode*)**:
   - Pengalihan instan (*seamless toggle*) dengan palet warna netral yang nyaman untuk pembacaan jangka panjang.

3. **Aksesibilitas Terpadu (*WCAG 2.1 AA Compliance*)**:
   - **Skala Font Dinamis**: Pilihan ukuran teks Normal (100%), Sedang (115%), dan Besar (130%).
   - **Mode Kontras Tinggi**: Peningkatan rasio kontras warna untuk pengguna dengan keterbatasan penglihatan.
   - **Pembaca Suara (Text-to-Speech)**: Membacakan intisari/ringkasan regulasi secara otomatis dalam Bahasa Indonesia.
   - **Pintasan Keyboard**: Akses cepat pencarian dengan tombol `/` dan penutup jendela dengan `Esc`.

4. **Katalog Produk Hukum & Mesin Pencari Multi-Parameter**:
   - Menyaring Undang-Undang (UU), Peraturan Pemerintah (PP), Perpres, Permen Transmigrasi, Kepmen, Surat Edaran (SE), Putusan MK, dan Monografi Hukum.
   - Filter status keberlakuan: **Berlaku**, **Dicabut**, **Mengubah**, **Diubah**.
   - Pengurutan berdasarkan tahun terbaru, terlama, dan jumlah unduhan.

5. **Penampil Naskah Regulasi Lengkap**:
   - Penguraian naskah per Bab dan Pasal dengan tombol salin teks klausul.
   - Metadata lengkap standar JDIHN (T.E.U., Lembaran Negara, Tanggal Penetapan & Pengundangan, Penandatangan).
   - Simulator salinan resmi PDF dengan kontrol zoom in/out, tombol cetak, dan unduh salinan sah.
   - Generator sitasi ilmiah resmi format APA & Tata Naskah Dinas Kementerian.

6. **Komparasi Regulasi Berdampingan (*Regulation Comparator*)**:
   - Membandingkan naskah pasal-pasal antara regulasi baru dan peraturan terdahulu (misal: Permen Trans No. 1/2025 vs Permendesa No. 14/2018).

7. **Pohon Silsilah & Hierarki Regulasi**:
   - Visualisasi hierarki perundang-undangan Indonesia (UUD 1945 ➔ UU ➔ PP ➔ Perpres ➔ Permen Trans ➔ Kepmen/SE).

8. **Layanan Terpadu & Survei Kepuasan Masyarakat (SKM)**:
   - Formulir permohonan salinan naskah fisik & konsultasi dengan nomor tiket otomatis.
   - Evaluasi Indeks Kepuasan Masyarakat (IKM) real-time dengan standar PermenPAN-RB No. 14/2017.

---

## 🚀 Panduan Menjalankan Menggunakan Git & GitHub

### 1. Klon Repositori

```bash
git clone https://github.com/USERNAME/jdih-transmigrasi.git
cd jdih-transmigrasi
```

### 2. Pasang Dependensi

```bash
npm install
```

### 3. Jalankan Server Pengembangan (Dev)

```bash
npm run dev
```

Buka peramban di `http://localhost:3000` (atau port yang tertera).

### 4. Build untuk Produksi

```bash
npm run build
```

Hasil build akan berada di direktori `dist/` siap untuk di-deploy ke GitHub Pages, Vercel, Netlify, atau Cloud Run.

---

## 📤 Cara Mengunggah Proyek Ini ke GitHub Anda Sendiri

Jika Anda ingin menyimpan kode ini di akun GitHub Anda:

1. Buat repositori baru di [GitHub](https://github.com/new) bernama `jdih-transmigrasi`.
2. Di terminal komputer Anda, jalankan perintah berikut:

```bash
# Tambahkan remote origin repositori GitHub Anda
git remote add origin https://github.com/USERNAME/jdih-transmigrasi.git

# Tambahkan semua berkas dan commit
git add .
git commit -m "feat: inisialisasi portal website JDIH Kementerian Transmigrasi RI"

# Push ke cabang utama (main)
git push -u origin main
```

---

## 🛠️ Tumpukan Teknologi (Tech Stack)

- **Framework**: React 19 + TypeScript
- **Bundler & Server**: Vite 8
- **Styling**: Tailwind CSS v4
- **Ikonografi**: Lucide React
- **Animasi**: Motion
- **Sintesis Suara**: Web Speech API (`SpeechSynthesis`)
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`)

---

## 📄 Lisensi & Hak Cipta

© Kementerian Transmigrasi Republik Indonesia. Seluruh dokumen hukum merupakan informasi publik yang terbuka dan bebas diakses sesuai dengan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.
