import { 
  Regulation, 
  LawMakingDocument, 
  CourtJudicialDecision, 
  MonographDocument, 
  EnglishTranslationDocument, 
  DisseminationItem, 
  ApiIntegrationLog, 
  SelfEvaluationAspect 
} from '../types/jdih';

export const INITIAL_REGULATIONS: Regulation[] = [
  {
    id: 'permen-trans-4-2026',
    type: 'PERMEN',
    typeName: 'Peraturan Menteri Transmigrasi',
    number: '4',
    year: 2026,
    title: 'Peraturan Menteri Transmigrasi Nomor 4 Tahun 2026 tentang Pakaian Dinas dan Atribut Pegawai di Lingkungan Kementerian Transmigrasi',
    shortTitle: 'Pakaian Dinas dan Atribut Pegawai Kementerian Transmigrasi',
    status: 'Berlaku',
    statusDetail: 'Regulasi Kelembagaan & Kedisiplinan 2026',
    enactedDate: '24 Maret 2026',
    promulgatedDate: '29 Maret 2026',
    signee: 'Menteri Transmigrasi Republik Indonesia',
    sourceGazette: 'Berita Negara Republik Indonesia Tahun 2026 Nomor 678',
    t_e_u: 'Indonesia. Kementerian Transmigrasi. Biro Organisasi dan Tata Laksana',
    subject: ['Pakaian Dinas', 'Atribut Pegawai', 'Disiplin Kerja', 'Aparatur Sipil Negara'],
    legalField: 'Hukum Administrasi Negara',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Peraturan Menteri ini mengatur standardisasi pakaian dinas harian (PDH), pakaian dinas upacara (PDU), dan atribut resmi bagi seluruh pegawai ASN dan PPNPN di lingkungan Kementerian Transmigrasi guna memperkuat identitas kelembagaan.',
    menimbang: [
      'bahwa untuk mewujudkan keseragaman, ketertiban, dan kedisiplinan kerja pegawai, perlu diatur pakaian dinas dan atribut pegawai di lingkungan Kementerian Transmigrasi;',
      'bahwa pembentukan Kementerian Transmigrasi mandiri menuntut penetapan identitas visual dan seragam resmi aparatur negara.'
    ],
    mengingat: [
      'Undang-Undang Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara;',
      'Peraturan Presiden Nomor 142 Tahun 2024 tentang Kementerian Transmigrasi.'
    ],
    articles: [
      {
        number: 'Pasal 1',
        chapter: 'BAB I KETENTUAN UMUM',
        content: 'Dalam Peraturan Menteri ini yang dimaksud dengan Pakaian Dinas adalah pakaian seragam yang dipakai untuk menunjukkan identitas Pegawai dalam melaksanakan tugas kedinasan.'
      },
      {
        number: 'Pasal 4',
        chapter: 'BAB II JENIS PAKAIAN DINAS',
        content: 'Pakaian Dinas terdiri atas:',
        points: [
          'a. Pakaian Dinas Harian (PDH) Putih;',
          'b. Pakaian Dinas Harian (PDH) Batik/Tenun Daerah Nusantara;',
          'c. Pakaian Dinas Lapangan (PDL) bagi Petugas Wilayah Transmigrasi;',
          'd. Pakaian Seragam KORPRI.'
        ]
      }
    ],
    relatedRegulations: [],
    implementingRegulations: [],
    lawMakingSupportDocs: [
      {
        id: 'risalah-harmonisasi-permen-4-2026',
        type: 'Risalah Harmonisasi',
        title: 'Risalah Rapat Pleno Harmonisasi RPermen Pakaian Dinas Bersama Kemenkumham',
        year: 2026,
        fileSize: '1.4 MB'
      }
    ],
    downloadCount: 1420,
    viewCount: 6810,
    fileSize: '1.6 MB',
    hasJudicialReview: false
  },
  {
    id: 'permen-trans-3-2026',
    type: 'PERMEN',
    typeName: 'Peraturan Menteri Transmigrasi',
    number: '3',
    year: 2026,
    title: 'Peraturan Menteri Transmigrasi Nomor 3 Tahun 2026 tentang Transmigrasi Patriot',
    shortTitle: 'Penyelenggaraan Program Transmigrasi Patriot',
    status: 'Berlaku',
    statusDetail: 'Program Unggulan Prioritas Kabinet',
    enactedDate: '18 Februari 2026',
    promulgatedDate: '25 Februari 2026',
    signee: 'Menteri Transmigrasi Republik Indonesia',
    sourceGazette: 'Berita Negara Republik Indonesia Tahun 2026 Nomor 412',
    t_e_u: 'Indonesia. Kementerian Transmigrasi. Ditjen Pengembangan Kawasan',
    subject: ['Transmigrasi Patriot', 'Sarjana Penggerak Pembangunan', 'Ketahanan Pangan', 'Wilayah 3T & Perbatasan'],
    legalField: 'Hukum Agraria dan Pembangunan Wilayah',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Mengatur penempatan generasi muda terdidik, lulusan perguruan tinggi (sarjana agribisnis, teknik, perikanan, dan medis) di kawasan perbatasan dan terluar dengan hak kelola lahan produktif serta insentif permodalan usaha rintisan agro.',
    menimbang: [
      'bahwa untuk mengakselerasi modernisasi pertanian dan swasembada pangan di wilayah perbatasan, diperlukan partisipasi sarjana muda patriot;',
      'bahwa penempatan generasi muda ke kawasan transmigrasi memerlukan kepastian insentif dan jaminan legalitas penguasaan tanah.'
    ],
    mengingat: [
      'Undang-Undang Nomor 29 Tahun 2009 tentang Perubahan atas UU Nomor 15 Tahun 1997 tentang Ketransmigrasian;',
      'Peraturan Presiden Nomor 142 Tahun 2024 tentang Kementerian Transmigrasi.'
    ],
    articles: [
      {
        number: 'Pasal 2',
        chapter: 'BAB II KRITERIA TRANSMIGRAN PATRIOT',
        content: 'Transmigran Patriot merupakan WNI berpendidikan minimal Diploma III/Sarjana yang lolos seleksi kompetensi kepemimpinan dan teknis agribisnis modern.'
      },
      {
        number: 'Pasal 6',
        chapter: 'BAB III FASILITASI HAK ATAS TANAH',
        content: 'Setiap kepala keluarga Transmigran Patriot berhak memperoleh Lahan Tempat Tinggal seluas 0,25 Ha dan Lahan Usaha Tani Produktif terintegrasi seluas 2,0 Ha dengan status Hak Milik setelah masa orientasi 2 tahun.'
      }
    ],
    relatedRegulations: [],
    implementingRegulations: [],
    lawMakingSupportDocs: [
      {
        id: 'naskah-urgensi-patriot-2026',
        type: 'Naskah Urgensi',
        title: 'Naskah Urgensi Kebijakan Penempatan Sarjana Penggerak Transmigrasi Patriot',
        year: 2026,
        fileSize: '3.2 MB'
      },
      {
        id: 'rancangan-permen-patriot',
        type: 'Rancangan',
        title: 'Naskah Awal RPermen Penyelenggaraan Transmigrasi Patriot',
        year: 2026,
        fileSize: '2.1 MB'
      }
    ],
    downloadCount: 3408,
    viewCount: 15420,
    fileSize: '2.8 MB',
    hasJudicialReview: false,
    englishTranslationAvailable: true,
    englishTranslationUrl: '#translation-patriot'
  },
  {
    id: 'permen-trans-2-2026',
    type: 'PERMEN',
    typeName: 'Peraturan Menteri Transmigrasi',
    number: '2',
    year: 2026,
    title: 'Peraturan Menteri Transmigrasi Nomor 2 Tahun 2026 tentang Penyelenggaraan Dekonsentrasi dan Tugas Pembantuan Bidang Transmigrasi',
    shortTitle: 'Penyelenggaraan Dekonsentrasi & Tugas Pembantuan',
    status: 'Berlaku',
    statusDetail: 'Pedoman Pelimpahan Urusan Pemerintahan Daerah',
    enactedDate: '10 Februari 2026',
    promulgatedDate: '15 Februari 2026',
    signee: 'Menteri Transmigrasi Republik Indonesia',
    sourceGazette: 'Berita Negara Republik Indonesia Tahun 2026 Nomor 308',
    t_e_u: 'Indonesia. Kementerian Transmigrasi. Biro Perencanaan & Kerjasama',
    subject: ['Dekonsentrasi', 'Tugas Pembantuan', 'Pemerintah Daerah', 'Anggaran Transfer'],
    legalField: 'Hukum Administrasi dan Keuangan Daerah',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Menetapkan pedoman pelimpahan wewenang penyelenggaraan ketransmigrasian kepada Gubernur sebagai wakil pemerintah pusat dan penugasan urusan transmigrasi kepada Bupati/Walikota melalui dana Tugas Pembantuan.',
    menimbang: [
      'bahwa untuk efektivitas pembinaan satuan pemukiman transmigrasi di daerah, diperlukan sinergi pelimpahan urusan melalui dekonsentrasi dan tugas pembantuan yang transparan.'
    ],
    mengingat: [
      'Undang-Undang Nomor 23 Tahun 2014 tentang Pemerintahan Daerah;',
      'Undang-Undang Nomor 29 Tahun 2009 tentang Ketransmigrasian.'
    ],
    articles: [
      {
        number: 'Pasal 3',
        content: 'Dana Dekonsentrasi dialokasikan untuk pemantauan, evaluasi, dan fasilitasi pendaftaran calon transmigran di tingkat provinsi.'
      }
    ],
    relatedRegulations: [],
    downloadCount: 2011,
    viewCount: 9120,
    fileSize: '2.4 MB',
    hasJudicialReview: false
  },
  {
    id: 'permen-trans-1-2026',
    type: 'PERMEN',
    typeName: 'Peraturan Menteri Transmigrasi',
    number: '1',
    year: 2026,
    title: 'Peraturan Menteri Transmigrasi Nomor 1 Tahun 2026 tentang Pengelolaan Barang Milik Negara di Lingkungan Kementerian Transmigrasi',
    shortTitle: 'Pengelolaan Barang Milik Negara (BMN) Transmigrasi',
    status: 'Berlaku',
    statusDetail: 'Regulasi Tata Kelola Aset Negara 2026',
    enactedDate: '12 Januari 2026',
    promulgatedDate: '16 Januari 2026',
    signee: 'Menteri Transmigrasi Republik Indonesia',
    sourceGazette: 'Berita Negara Republik Indonesia Tahun 2026 Nomor 102',
    t_e_u: 'Indonesia. Kementerian Transmigrasi. Biro Keuangan & BMN',
    subject: ['Barang Milik Negara (BMN)', 'Aset Transmigrasi', 'Penghapusan Aset', 'Hibah Daerah'],
    legalField: 'Hukum Keuangan Negara',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Mengatur mekanisme pengadaan, pencatatan, pemanfaatan, pengamanan, serta serah terima hibah aset infrastruktur pemukiman transmigrasi yang telah mandiri kepada Pemerintah Kabupaten/Kota.',
    menimbang: [
      'bahwa pasca pemisahan kementerian mandiri, diperlukan penataan dan tertib administrasi Barang Milik Negara di lingkungan Kementerian Transmigrasi.'
    ],
    mengingat: [
      'Peraturan Pemerintah Nomor 27 Tahun 2014 tentang Pengelolaan Barang Milik Negara/Daerah.'
    ],
    articles: [
      {
        number: 'Pasal 18',
        content: 'Sarana dan prasarana jalan, jembatan poros, dan gedung balai pertemuan di satuan pemukiman dapat dihibahkan kepada Pemerintah Kabupaten setelah 5 tahun masa pembinaan binaan.'
      }
    ],
    relatedRegulations: [],
    downloadCount: 2442,
    viewCount: 10890,
    fileSize: '3.1 MB',
    hasJudicialReview: false
  },
  {
    id: 'permen-trans-14-2025',
    type: 'PERMEN',
    typeName: 'Peraturan Menteri Transmigrasi',
    number: '14',
    year: 2025,
    title: 'Peraturan Menteri Transmigrasi Nomor 14 Tahun 2025 tentang Jaringan Dokumentasi dan Informasi Hukum Kementerian Transmigrasi',
    shortTitle: 'JDIH Kementerian Transmigrasi',
    status: 'Berlaku',
    statusDetail: 'Payung Hukum Pokok Pengelolaan JDIH',
    enactedDate: '15 Desember 2025',
    promulgatedDate: '20 Desember 2025',
    signee: 'Menteri Transmigrasi Republik Indonesia',
    sourceGazette: 'Berita Negara Republik Indonesia Tahun 2025 Nomor 1390',
    t_e_u: 'Indonesia. Kementerian Transmigrasi. Biro Hukum dan Organisasi',
    subject: ['JDIH', 'JDIHN', 'Dokumentasi Hukum', 'Standar Pengelolaan', 'Keterbukaan Informasi'],
    legalField: 'Hukum Administrasi dan Literasi Hukum',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Menjadi landasan hukum formal keanggotaan dan operasionalisasi JDIH Kementerian Transmigrasi terintegrasi JDIHN BPHN, mengatur standar teknis metadata, layanan onsite Pojok JDIH, terjemahan resmi, dan aksesibilitas ramah disabilitas.',
    menimbang: [
      'bahwa untuk melaksanakan ketentuan Perpres Nomor 33 Tahun 2012 tentang Jaringan Dokumentasi dan Informasi Hukum Nasional, perlu menetapkan Peraturan Menteri tentang JDIH Kemtrans.'
    ],
    mengingat: [
      'Peraturan Presiden Nomor 33 Tahun 2012;',
      'Peraturan Menteri Hukum dan HAM Nomor 8 Tahun 2019.'
    ],
    articles: [
      {
        number: 'Pasal 5',
        chapter: 'BAB II TUGAS DAN FUNGSI PENGELOLA',
        content: 'Pusat JDIH Kementerian Transmigrasi wajib mengintegrasikan API katalog regulasi dengan portal nasional JDIHN secara terus menerus dan berkala.'
      }
    ],
    relatedRegulations: [],
    downloadCount: 782,
    viewCount: 4210,
    fileSize: '2.0 MB',
    hasJudicialReview: false
  },
  {
    id: 'permen-trans-13-2025',
    type: 'PERMEN',
    typeName: 'Peraturan Menteri Transmigrasi',
    number: '13',
    year: 2025,
    title: 'Peraturan Menteri Transmigrasi Nomor 13 Tahun 2025 tentang Perubahan atas Peraturan Menteri Transmigrasi Nomor 8 Tahun 2025 tentang Rencana Strategis Kementerian Transmigrasi 2025–2029',
    shortTitle: 'Perubahan Renstra Kementerian Transmigrasi 2025–2029',
    status: 'Berlaku',
    statusDetail: 'Mengubah Permen Trans No. 8 Tahun 2025',
    enactedDate: '01 Desember 2025',
    promulgatedDate: '05 Desember 2025',
    signee: 'Menteri Transmigrasi Republik Indonesia',
    sourceGazette: 'Berita Negara Republik Indonesia Tahun 2025 Nomor 1245',
    t_e_u: 'Indonesia. Kementerian Transmigrasi',
    subject: ['Rencana Strategis (Renstra)', 'Target Pembangunan', 'Swasembada Pangan'],
    legalField: 'Hukum Perencanaan Pembangunan',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Penyelarasan target indikator kinerja utama kementerian terkait percepatan 120 kawasan transmigrasi sentra pangan serta integrasi koridor logistik nasional.',
    menimbang: [
      'bahwa perlu penyesuaian target penempatan transmigran dan perluasan sertifikasi lahan HPL.'
    ],
    mengingat: [
      'Peraturan Menteri Transmigrasi Nomor 8 Tahun 2025.'
    ],
    articles: [
      {
        number: 'Pasal 1',
        content: 'Target penempatan transmigran generasi kelima dinaikkan menjadi 50.000 kepala keluarga hingga 2029.'
      }
    ],
    relatedRegulations: [
      {
        id: 'permen-trans-8-2025',
        relationType: 'Mengubah',
        title: 'Peraturan Menteri Transmigrasi Nomor 8 Tahun 2025 tentang Renstra Kemtrans',
        year: 2025,
        number: '8',
        type: 'PERMEN'
      }
    ],
    downloadCount: 2486,
    viewCount: 11040,
    fileSize: '3.8 MB',
    hasJudicialReview: false
  },
  {
    id: 'permen-trans-1-2025',
    type: 'PERMEN',
    typeName: 'Peraturan Menteri Transmigrasi',
    number: '1',
    year: 2025,
    title: 'Peraturan Menteri Transmigrasi Nomor 1 Tahun 2025 tentang Tata Kelola Hak Pengelolaan Lahan (HPL) Transmigrasi dan Percepatan Sertifikasi Hak Milik Satuan Pemukiman',
    shortTitle: 'Tata Kelola HPL Transmigrasi dan Percepatan Sertifikasi Hak Milik',
    status: 'Berlaku',
    statusDetail: 'Mencabut Permendesa No. 14 Tahun 2018',
    enactedDate: '15 Januari 2025',
    promulgatedDate: '22 Januari 2025',
    signee: 'Menteri Transmigrasi Republik Indonesia',
    sourceGazette: 'Berita Negara Republik Indonesia Tahun 2025 Nomor 48',
    t_e_u: 'Indonesia. Kementerian Transmigrasi. Biro Hukum dan Organisasi',
    subject: ['Hak Pengelolaan Lahan (HPL)', 'Sertifikat Hak Milik (SHM)', 'Satuan Pemukiman', 'Lahan Usaha I & II'],
    legalField: 'Hukum Agraria dan Ketransmigrasian',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Peraturan ini mengatur ketentuan pembagian, pemanfaatan, perlindungan hukum, serta akselerasi penerbitan Sertifikat Hak Milik (SHM) bagi transmigran yang telah menempati kawasan pemukiman transmigrasi sedikitnya 3 tahun berturut-turut tanpa sengketa kepemilikan.',
    menimbang: [
      'bahwa untuk mewujudkan kepastian hukum kepemilikan tanah dan mencegah alih fungsi lahan transmigrasi yang merugikan kesejahteraan transmigran, diperlukan tata kelola Hak Pengelolaan Lahan yang akuntabel dan terintegrasi;',
      'bahwa regulasi terdahulu belum mengatur mekanisme digitalisasi pendaftaran dan penyelesaian tumpang tindih kawasan secara cepat;',
      'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Peraturan Menteri Transmigrasi tentang Tata Kelola HPL Transmigrasi dan Percepatan Sertifikasi Hak Milik.'
    ],
    mengingat: [
      'Undang-Undang Nomor 15 Tahun 1997 tentang Ketransmigrasian sebagaimana telah diubah dengan Undang-Undang Nomor 29 Tahun 2009;',
      'Undang-Undang Nomor 5 Tahun 1960 tentang Peraturan Dasar Pokok-Pokok Agraria;',
      'Peraturan Presiden Nomor 142 Tahun 2024 tentang Kementerian Transmigrasi.'
    ],
    articles: [
      {
        number: 'Pasal 1',
        chapter: 'BAB I KETENTUAN UMUM',
        content: 'Dalam Peraturan Menteri ini yang dimaksud dengan:',
        points: [
          'Hak Pengelolaan Lahan yang selanjutnya disingkat HPL adalah hak menguasai dari Negara yang kewenangan pelaksanaannya sebagian dilimpahkan kepada Kementerian Transmigrasi untuk dialokasikan bagi satuan pemukiman.',
          'Transmigran adalah Warga Negara Indonesia yang bertempat tinggal di wilayah Negara Kesatuan Republik Indonesia yang secara sukarela berpindah ke Kawasan Transmigrasi.',
          'Lahan Pekarangan adalah bidang tanah yang diperuntukkan bagi tapak rumah tempat tinggal transmigran beserta halaman pekarangan dengan luas paling sedikit 0,25 hektar.',
          'Lahan Usaha I dan Lahan Usaha II adalah bidang tanah pertanian atau perkebunan produktif yang diserahkan pemanfaatannya kepada kepala keluarga transmigran.'
        ]
      },
      {
        number: 'Pasal 2',
        chapter: 'BAB II RUANG LINGKUP HPL TRANSMIGRASI',
        content: 'Ruang lingkup pengelolaan HPL Transmigrasi meliputi:',
        points: [
          'a. Inventarisasi dan pemetaan digital batas kawasan HPL;',
          'b. Pengalokasian hak atas tanah bagi transmigran dan penduduk setempat;',
          'c. Pembinaan dan pemanfaatan tanah yang produktif dan berkelanjutan;',
          'd. Percepatan konversi HPL menjadi Sertifikat Hak Milik (SHM).'
        ]
      },
      {
        number: 'Pasal 3',
        chapter: 'BAB III TATA CARA SERTIFIKASI HAK MILIK',
        content: 'Penerbitan Sertifikat Hak Milik (SHM) kepada Transmigran dilakukan paling lambat 3 (tiga) tahun terhitung sejak tanggal penempatan definitif, dengan syarat transmigran mengusahakan lahannya secara aktif dan berkesinambungan.'
      },
      {
        number: 'Pasal 4',
        chapter: 'BAB IV LARANGAN ALIH FUNGSI',
        content: 'Transmigran dilarang mengalihkan atau memperjualbelikan tanah Lahan Pekarangan, Lahan Usaha I, dan Lahan Usaha II kepada pihak lain sebelum lewat jangka waktu 10 (sepuluh) tahun terhitung sejak sertifikat diterbitkan, kecuali diwariskan kepada ahli waris yang sah.'
      }
    ],
    relatedRegulations: [
      {
        id: 'uu-29-2009',
        relationType: 'Melaksanakan',
        title: 'Undang-Undang Nomor 29 Tahun 2009 tentang Perubahan atas UU Nomor 15 Tahun 1997 tentang Ketransmigrasian',
        year: 2009,
        number: '29',
        type: 'UU'
      },
      {
        id: 'permendesa-14-2018',
        relationType: 'Mencabut',
        title: 'Peraturan Menteri Desa, PDT dan Transmigrasi Nomor 14 Tahun 2018 tentang Pengelolaan Tanah Transmigrasi',
        year: 2018,
        number: '14',
        type: 'PERMEN'
      }
    ],
    implementingRegulations: [
      {
        id: 'kepmen-trans-42-2025',
        relationType: 'Peraturan Pelaksanaan',
        title: 'Keputusan Menteri Transmigrasi Nomor 42 Tahun 2025 tentang Penetapan Lokasi Prioritas',
        year: 2025,
        number: '42',
        type: 'KEPMEN'
      },
      {
        id: 'se-menteri-2-2025',
        relationType: 'Peraturan Pelaksanaan',
        title: 'Surat Edaran Menteri Nomor 02 Tahun 2025 tentang Petunjuk Teknis Sertifikasi Lahan Usaha II',
        year: 2025,
        number: '02',
        type: 'SE'
      }
    ],
    lawMakingSupportDocs: [
      {
        id: 'naskah-akademik-hpl',
        type: 'Naskah Urgensi',
        title: 'Naskah Akademik Penataan Batas dan Tata Kelola HPL Transmigrasi',
        year: 2025,
        fileSize: '4.5 MB'
      },
      {
        id: 'evaluasi-manjau-tanah',
        type: 'Hasil Manjau/AE',
        title: 'Laporan Analisis & Evaluasi Pelaksanaan Peraturan Tanah Transmigrasi (Hasil AE)',
        year: 2025,
        fileSize: '3.1 MB'
      }
    ],
    downloadCount: 4890,
    viewCount: 18210,
    fileSize: '2.4 MB',
    hasJudicialReview: false,
    englishTranslationAvailable: true,
    englishTranslationUrl: '#translation-hpl'
  },
  {
    id: 'perpres-142-2024',
    type: 'PERPRES',
    typeName: 'Peraturan Presiden',
    number: '142',
    year: 2024,
    title: 'Peraturan Presiden Republik Indonesia Nomor 142 Tahun 2024 tentang Kedudukan, Tugas, Fungsi, dan Tata Kerja Kementerian Transmigrasi',
    shortTitle: 'Kedudukan, Tugas, dan Fungsi Kementerian Transmigrasi',
    status: 'Berlaku',
    statusDetail: 'Dasar Pembentukan Kelembagaan Kementerian',
    enactedDate: '21 Oktober 2024',
    promulgatedDate: '21 Oktober 2024',
    signee: 'Presiden Republik Indonesia',
    sourceGazette: 'Lembaran Negara Republik Indonesia Tahun 2024 Nomor 248',
    t_e_u: 'Indonesia. Sekretariat Kabinet RI',
    subject: ['Kelembagaan', 'Organisasi Tata Kerja', 'Tugas Pokok', 'Kementerian Transmigrasi'],
    legalField: 'Hukum Administrasi Negara',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Perpres ini menetapkan pembentukan Kementerian Transmigrasi sebagai kementerian mandiri dalam Kabinet Merah Putih dengan mandat menyelenggarakan perumusan, penetapan, dan pelaksanaan kebijakan di bidang penyiapan kawasan pemukiman, penempatan transmigran, dan pengembangan kawasan perkotaan baru di perbatasan serta wilayah terluar Indonesia.',
    menimbang: [
      'bahwa pembangunan transmigrasi memiliki peran strategis dalam pemerataan sebaran penduduk, ketahanan pangan, dan kedaulatan wilayah perbatasan negara;',
      'bahwa untuk efektivitas penyelenggaraan urusan ketransmigrasian secara fokus dan terintegrasi, perlu dibentuk Kementerian Transmigrasi yang mandiri.'
    ],
    mengingat: [
      'Pasal 4 ayat (1) dan Pasal 17 Undang-Undang Dasar Negara Republik Indonesia Tahun 1945;',
      'Undang-Undang Nomor 39 Tahun 2008 tentang Kementerian Negara sebagaimana telah diubah dengan Undang-Undang Nomor 61 Tahun 2024.'
    ],
    articles: [
      {
        number: 'Pasal 1',
        chapter: 'BAB I KEDUDUKAN DAN TUGAS',
        content: 'Kementerian Transmigrasi berada di bawah dan bertanggung jawab kepada Presiden, dipimpin oleh Menteri Transmigrasi.'
      }
    ],
    relatedRegulations: [],
    implementingRegulations: [
      {
        id: 'permen-trans-1-2026',
        relationType: 'Peraturan Pelaksanaan',
        title: 'Peraturan Menteri Transmigrasi Nomor 1 Tahun 2026 tentang BMN',
        year: 2026,
        number: '1',
        type: 'PERMEN'
      }
    ],
    downloadCount: 5210,
    viewCount: 19800,
    fileSize: '3.1 MB',
    hasJudicialReview: false,
    englishTranslationAvailable: true
  },
  {
    id: 'uu-29-2009',
    type: 'UU',
    typeName: 'Undang-Undang',
    number: '29',
    year: 2009,
    title: 'Undang-Undang Republik Indonesia Nomor 29 Tahun 2009 tentang Perubahan atas Undang-Undang Nomor 15 Tahun 1997 tentang Ketransmigrasian',
    shortTitle: 'Perubahan UU tentang Ketransmigrasian',
    status: 'Berlaku',
    statusDetail: 'Mengubah UU No. 15 Tahun 1997',
    enactedDate: '14 September 2009',
    promulgatedDate: '14 September 2009',
    signee: 'Presiden Republik Indonesia',
    sourceGazette: 'Lembaran Negara Republik Indonesia Tahun 2009 Nomor 131',
    t_e_u: 'Indonesia. Dewan Perwakilan Rakyat dan Presiden RI',
    subject: ['Ketransmigrasian', 'Kawasan Transmigrasi', 'Pola Penempatan', 'Kemitraan Usaha'],
    legalField: 'Hukum Tata Usaha Negara / Agraria',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Undang-undang ini memperbaharui paradigma ketransmigrasian dari sekadar pemindahan penduduk fisik menjadi pembangunan kawasan terpadu berbasis potensi lokal, keterkaitan antara transmigran dan penduduk lokal tanpa diskriminasi, serta kepastian perlindungan hak atas tanah.',
    menimbang: [
      'bahwa penyelenggaraan transmigrasi harus diorientasikan pada pembangunan wilayah yang mandiri, berdaya saing, dan berkelanjutan.'
    ],
    mengingat: [
      'Pasal 5 ayat (1), Pasal 20, dan Pasal 33 UUD 1945.'
    ],
    articles: [
      {
        number: 'Pasal 1',
        content: 'Transmigrasi adalah perpindahan penduduk secara sukarela untuk meningkatkan kesejahteraan dan menetap di Kawasan Transmigrasi yang diselenggarakan oleh Pemerintah.'
      }
    ],
    relatedRegulations: [],
    implementingRegulations: [
      {
        id: 'pp-3-2014',
        relationType: 'Peraturan Pelaksanaan',
        title: 'Peraturan Pemerintah Nomor 3 Tahun 2014 tentang Pelaksanaan Ketransmigrasian',
        year: 2014,
        number: '3',
        type: 'PP'
      }
    ],
    downloadCount: 8940,
    viewCount: 31200,
    fileSize: '4.8 MB',
    hasJudicialReview: true,
    judicialReviewNote: 'Telah diuji di Mahkamah Konstitusi melalui Putusan No. 34/PUU-XIX/2021 dengan amar: Menolak Permohonan Pemohon untuk Seluruhnya (Dinyatakan Konstitusional Bersyarat).'
  },
  {
    id: 'pp-3-2014',
    type: 'PP',
    typeName: 'Peraturan Pemerintah',
    number: '3',
    year: 2014,
    title: 'Peraturan Pemerintah Republik Indonesia Nomor 3 Tahun 2014 tentang Pelaksanaan Undang-Undang Nomor 15 Tahun 1997 tentang Ketransmigrasian sebagaimana telah diubah dengan Undang-Undang Nomor 29 Tahun 2009',
    shortTitle: 'Pelaksanaan UU Ketransmigrasian',
    status: 'Berlaku',
    statusDetail: 'Regulasi Pelaksana Teknis Utama',
    enactedDate: '15 Januari 2014',
    promulgatedDate: '15 Januari 2014',
    signee: 'Presiden Republik Indonesia',
    sourceGazette: 'Lembaran Negara Republik Indonesia Tahun 2014 Nomor 13',
    t_e_u: 'Indonesia. Pemerintah Republik Indonesia',
    subject: ['Penyiapan Pemukiman', 'Seleksi Transmigran', 'Pemberian Lahan Usaha'],
    legalField: 'Hukum Administrasi Negara',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'PP ini mengatur operasional penetapan lokasi transmigrasi, tata cara pendaftaran calon transmigran, bantuan bekal hidup, pembagian hak atas tanah, serta penyerahan aset pemukiman kepada pemerintah daerah setelah masa pembinaan 5 tahun.',
    menimbang: [
      'bahwa untuk melaksanakan UU No. 29 Tahun 2009.'
    ],
    mengingat: [
      'UU No. 29 Tahun 2009.'
    ],
    articles: [
      {
        number: 'Pasal 10',
        content: 'Penetapan Kawasan Transmigrasi didasarkan pada Rencana Tata Ruang Wilayah Nasional dan Daerah.'
      }
    ],
    relatedRegulations: [],
    implementingRegulations: [],
    downloadCount: 4210,
    viewCount: 16750,
    fileSize: '3.6 MB',
    hasJudicialReview: false
  }
];

// ============================================================================
// DOKUMEN PEMBENTUKAN PUU (VARIABEL I & II - Rekomendasi Menu Mandiri)
// ============================================================================
export const LAW_MAKING_DOCUMENTS: LawMakingDocument[] = [
  {
    id: 'doc-progsun-2026',
    category: 'progsun',
    categoryLabel: 'Program Penyusunan (Progsun / Propem)',
    title: 'Keputusan Menteri Transmigrasi tentang Program Penyusunan Peraturan Perundang-Undangan Tahun 2026',
    year: 2026,
    documentNumber: 'Kepmen Trans No. 12/KPTS/2026',
    targetRegulationTitle: 'Daftar 18 RUU dan RPermen Prioritas Tahun 2026',
    initiatorUnit: 'Biro Hukum dan Organisasi',
    dateCreated: '05 Januari 2026',
    summary: 'Daftar rencana regulasi yang diprogramkan untuk dibentuk sepanjang tahun 2026 mencakup klaster reforma agraria transmigrasi, digitalisasi perizinan, dan standarisasi permukiman perbatasan.',
    fileSize: '2.5 MB',
    status: 'Selesai / Diundangkan'
  },
  {
    id: 'doc-naskah-urgensi-patriot',
    category: 'naskah_urgensi',
    categoryLabel: 'Naskah Urgensi / Naskah Akademik',
    title: 'Naskah Urgensi Rancangan Peraturan Menteri Transmigrasi tentang Penyelenggaraan Transmigrasi Patriot',
    year: 2026,
    documentNumber: 'NU-04/KEMTRANS/2026',
    targetRegulationTitle: 'Permen Transmigrasi No. 3 Tahun 2026 tentang Transmigrasi Patriot',
    initiatorUnit: 'Ditjen Penyiapan Kawasan & Pemukiman',
    dateCreated: '14 Januari 2026',
    summary: 'Kajian latar belakang filosofis, sosiologis, dan yuridis urgensi pelibatan sarjana muda dan purnawirawan perintis dalam membangun ketahanan wilayah pangan strategis terluar NKRI.',
    fileSize: '4.8 MB',
    status: 'Selesai / Diundangkan'
  },
  {
    id: 'doc-rancangan-permen-kpb',
    category: 'rancangan',
    categoryLabel: 'Rancangan Peraturan (RPermen)',
    title: 'Rancangan Peraturan Menteri Transmigrasi tentang Percepatan Pembangunan Kawasan Perkotaan Baru (KPB) Ramah Lingkungan',
    year: 2026,
    documentNumber: 'R-PERMEN-06/2026',
    targetRegulationTitle: 'RPermen Kawasan Perkotaan Baru (KPB)',
    initiatorUnit: 'Ditjen Pengembangan Kawasan Transmigrasi',
    dateCreated: '10 Februari 2026',
    summary: 'Draf regulasi yang mengatur kriteria transformasi pemukiman transmigrasi yang telah mandiri menjadi pusat pertumbuhan ekonomi lokal berbasis energi terbarukan.',
    fileSize: '1.9 MB',
    status: 'Konsultasi Publik Terbuka',
    publicConsultationOpen: true,
    publicConsultationDeadline: '30 April 2026',
    feedbackCount: 38
  },
  {
    id: 'doc-risalah-harmonisasi-pakaian-dinas',
    category: 'risalah',
    categoryLabel: 'Risalah Pembahasan / Notulensi Harmonisasi',
    title: 'Risalah Rapat Pleno Harmonisasi, Pembulatan, dan Pemantapan Konsepsi RPermen tentang Pakaian Dinas ASN Kemtrans',
    year: 2026,
    documentNumber: 'BA-HARM/67/KEMKUMHAM/2026',
    targetRegulationTitle: 'Permen Transmigrasi No. 4 Tahun 2026',
    initiatorUnit: 'Ditjen Peraturan Perundang-undangan (Kemenkumham) & Biro Hukum Kemtrans',
    dateCreated: '15 Maret 2026',
    summary: 'Berita acara kesepakatan penyesuaian materi muatan pasal demi pasal dan teknik penyusunan peraturan perundang-undangan dengan Ditjen PP Kemenkumham.',
    fileSize: '1.7 MB',
    status: 'Selesai / Diundangkan'
  },
  {
    id: 'doc-partisipasi-publik-hpl',
    category: 'partisipasi_publik',
    categoryLabel: 'Partisipasi Publik / Konsultasi Online',
    title: 'Kanal Uji Sahih Publik Terbuka: RPermen Tata Kelola HPL dan Sertifikasi Komunal Lahan Usaha',
    year: 2026,
    targetRegulationTitle: 'RPermen Sertifikasi Komunal',
    initiatorUnit: 'Biro Hubungan Masyarakat & Biro Hukum',
    dateCreated: '20 Februari 2026',
    summary: 'Mekanisme penjaringan aspirasi, tanggapan, dan masukan masyarakat adat, serikat petani, akademisi, dan warga transmigran secara transparan melalui portal JDIH.',
    fileSize: '890 KB',
    status: 'Konsultasi Publik Terbuka',
    publicConsultationOpen: true,
    publicConsultationDeadline: '15 Mei 2026',
    feedbackCount: 112
  },
  {
    id: 'doc-hasil-manjau-ae-2025',
    category: 'manjau_ae',
    categoryLabel: 'Hasil Pemantauan & Analisis-Evaluasi (Hasil Manjau/AE)',
    title: 'Laporan Hasil Analisis dan Evaluasi Peraturan Perundang-Undangan Terkait Hak Atas Tanah di Kawasan Transmigrasi',
    year: 2025,
    documentNumber: 'LAP-AE/02/KEMTRANS/2025',
    targetRegulationTitle: 'Evaluasi UU 29/2009 dan Permendesa 14/2018',
    initiatorUnit: 'Pusat Analisis dan Harmonisasi Kebijakan Hukum Transmigrasi',
    dateCreated: '12 November 2025',
    summary: 'Hasil kajian empiris 6 dimensi evaluasi peraturan (ketepatan jenis, kejelasan rumusan, keselarasan vertikal-horizontal, dan efektivitas implementasi lapangan) yang merekomendasikan pencabutan Permendesa 14/2018.',
    fileSize: '5.6 MB',
    status: 'Selesai / Diundangkan'
  },
  {
    id: 'doc-kajian-penelitian-hukum-2026',
    category: 'kajian',
    categoryLabel: 'Kajian / Penelitian Hukum',
    title: 'Kajian Hukum Kesiapan Regulasi Pembangunan Satuan Pemukiman Transmigrasi Terhubung IKN Nusantara',
    year: 2026,
    documentNumber: 'KJ-01/BALITBANG/2026',
    targetRegulationTitle: 'Kajian Kebijakan Strategis Kewilayahan',
    initiatorUnit: 'Badan Pengembangan Kebijakan & Litbang Kemtrans',
    dateCreated: '10 Januari 2026',
    summary: 'Telaah doktrin hukum tata ruang dan perlindungan lingkungan hidup dalam penataan kawasan penyangga logistik pangan ibu kota baru.',
    fileSize: '3.9 MB',
    status: 'Selesai / Diundangkan'
  }
];

// ============================================================================
// KHUSUS PUTUSAN PENGADILAN & QUASI PERADILAN (VARIABEL II - Metadata Khusus Putusan)
// (Menyelesaikan temuan: "Detail putusan masih menggunakan metadata peraturan")
// ============================================================================
export const JUDICIAL_DECISIONS: CourtJudicialDecision[] = [
  {
    id: 'putusan-mk-34-2021',
    courtType: 'Mahkamah Konstitusi',
    caseNumber: '34/PUU-XIX/2021',
    title: 'Putusan Pengujian Materiil Undang-Undang Nomor 29 Tahun 2009 tentang Ketransmigrasian terhadap UUD 1945',
    year: 2021,
    rulingDate: '27 Oktober 2021',
    parties: {
      applicant: 'Masyarakat Adat Muara Tae & Aliansi Petani Mandiri',
      respondent: 'Pemerintah Republik Indonesia (Kementerian Terkait) & DPR RI'
    },
    rulingStatus: 'Menolak Seluruhnya',
    verdictSummary: 'Menyatakan menolak permohonan pemohon untuk seluruhnya. Mahkamah menegaskan bahwa ketentuan mengenai hak penguasaan negara atas kawasan transmigrasi adalah konstitusional bersyarat dengan kewajiban penghormatan terhadap hak ulayat lokal.',
    benchJudges: ['Prof. Dr. Anwar Usman, S.H., M.H.', 'Prof. Dr. Saldi Isra, S.H., MPA', 'Dr. Suhartoyo, S.H., M.H.'],
    sourceGazette: 'Berita Negara Republik Indonesia Tahun 2021 Nomor 98/MK',
    testedLawReference: 'Pasal 13 ayat (2) dan Pasal 22 ayat (1) UU No. 29 Tahun 2009',
    fileSize: '4.2 MB',
    downloadCount: 3120
  },
  {
    id: 'putusan-pn-malili-5-2025',
    courtType: 'Pengadilan Negeri',
    caseNumber: '5/Pdt.G/2025/PN Mll',
    title: 'Putusan Perkara Gugatan Perdata Kepemilikan Hak Atas Tanah Satuan Pemukiman Transmigrasi Malili Luwu Timur',
    year: 2025,
    rulingDate: '22 Mei 2025',
    parties: {
      applicant: 'Koperasi Unit Tani Bina Makmur Transmigran (Penggugat)',
      respondent: 'Dinas Transmigrasi Kabupaten Luwu Timur & PT Perkebunan Sawit (Tergugat)'
    },
    rulingStatus: 'Mengabulkan Sebagian',
    verdictSummary: 'Menyatakan bahwa Lahan Usaha II seluas 180 Hektar sah merupakan hak para transmigran penempatan tahun 2012 dan mewajibkan Kantor Pertanahan menerbitkan SHM dalam tempo 60 hari kerja.',
    benchJudges: ['Ketua Pengadilan Negeri Malili'],
    sourceGazette: 'Direktori Putusan Mahkamah Agung RI',
    testedLawReference: 'Pelaksanaan Sertifikasi Hak Milik Satuan Pemukiman',
    fileSize: '2.8 MB',
    downloadCount: 1480
  },
  {
    id: 'putusan-kip-019-2025',
    courtType: 'Komisi Informasi Pusat (KIP)',
    caseNumber: '019/IV/KIP-PSI-A/2025',
    title: 'Putusan Sengketa Informasi Publik: Keterbukaan Dokumen Surat Ukur dan Peta Hak Pengelolaan (HPL) Transmigrasi',
    year: 2025,
    rulingDate: '15 April 2025',
    parties: {
      applicant: 'Yayasan Pemerhati Agraria dan Keadilan Lingkungan',
      respondent: 'Pejabat Pengelola Informasi dan Dokumentasi (PPID) Kemtrans RI'
    },
    rulingStatus: 'Mengabulkan Seluruhnya',
    verdictSummary: 'Menyatakan bahwa data peta spasial batas HPL Transmigrasi adalah informasi publik terbuka yang wajib dapat diakses publik melalui portal JDIH.',
    benchJudges: ['Majelis Komisioner Komisi Informasi Pusat RI'],
    sourceGazette: 'Warta Resmi Komisi Informasi Pusat',
    testedLawReference: 'UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik',
    fileSize: '1.9 MB',
    downloadCount: 2210
  }
];

// ============================================================================
// MONOGRAFI & ARTIKEL HUKUM (VARIABEL II - Menyelesaikan temuan belum tersedia)
// ============================================================================
export const MONOGRAPHS_AND_ARTICLES: MonographDocument[] = [
  {
    id: 'mono-trans-50',
    title: 'Monografi Hukum: Urgensi Rekonseptualisasi Transmigrasi Generasi Kelima (Transmigrasi 5.0) Menopang Ketahanan Pangan',
    type: 'Monografi Hukum',
    author: 'Tim Peneliti Pusat Studi Hukum Pembangunan Kewilayahan',
    publisher: 'Kemtrans Press & Penerbit Pustaka Hukum',
    city: 'Jakarta',
    year: 2025,
    isbn: '978-623-12-0041-2',
    subject: ['Transmigrasi 5.0', 'Ketahanan Pangan', 'Agraria Modern', 'Pemberdayaan'],
    summary: 'Buku monografi referensi hukum tata ruang agraria yang membahas transformasi paradigma transmigrasi manual menuju model agrologistik cerdas dengan jaminan kepastian alas hak sertifikat hak milik komunal.',
    pages: 218,
    fileSize: '6.4 MB',
    downloadCount: 1890
  },
  {
    id: 'art-shm-lahan2',
    title: 'Artikel Hukum: Perlindungan Hukum Kepemilikan Lahan Usaha II Transmigran terhadap Ancaman Okupasi Perusahaan Perkebunan',
    type: 'Artikel Hukum',
    author: 'Dr. Hendra Prasetyo, S.H., LL.M. (Analis Hukum Madya)',
    publisher: 'Jurnal Hukum & Pembangunan Nasional Vol. 8 No. 2',
    city: 'Jakarta',
    year: 2026,
    subject: ['Lahan Usaha II', 'Sengketa Okupasi', 'Advokasi Hukum', 'SHM'],
    summary: 'Telaah kritis mekanisme pembuktian alas hak penerima bantuan transmigrasi dan strategi advokasi non-litigasi melalui Gugus Tugas Reforma Agraria (GTRA).',
    pages: 24,
    fileSize: '1.2 MB',
    downloadCount: 2840
  },
  {
    id: 'jurnal-hukum-trans-2026',
    title: 'Jurnal Ilmiah Transmigrasi Indonesia: Analisis Putusan Mahkamah Konstitusi No. 34/PUU-XIX/2021 dan Implikasinya terhadap Hak Ulayat',
    type: 'Jurnal Ilmiah',
    author: 'Biro Hukum Kementerian Transmigrasi bekerjasama dengan Asosiasi Pengajar Hukum Tata Negara',
    publisher: 'Sekretariat Jenderal Kemtrans',
    city: 'Jakarta',
    year: 2026,
    isbn: 'ISSN 2985-7821',
    subject: ['Mahkamah Konstitusi', 'Hak Ulayat', 'Konstitusional Bersyarat'],
    summary: 'Kumpulan naskah analisis akademik telaah yurisprudensi mengenai batasan intervensi negara dalam penetapan kawasan transmigrasi pada wilayah tanah adat.',
    pages: 142,
    fileSize: '3.8 MB',
    downloadCount: 1650
  }
];

// ============================================================================
// PERATURAN TERJEMAHAN BAHASA INGGRIS (VARIABEL IV - English Official Translation)
// ============================================================================
export const ENGLISH_TRANSLATION_DOCUMENTS: EnglishTranslationDocument[] = [
  {
    id: 'trans-en-permen-1-2025',
    originalId: 'permen-trans-1-2025',
    originalTitle: 'Peraturan Menteri Transmigrasi Nomor 1 Tahun 2025 tentang Tata Kelola HPL dan Percepatan Sertifikasi Hak Milik',
    englishTitle: 'Minister of Transmigration Regulation Number 1 Year 2025 concerning Governance of Transmigration Land Management Rights (HPL) and Acceleration of Ownership Certification for Settlement Units',
    type: 'Ministerial Regulation',
    number: '1',
    year: 2025,
    translatorAuthority: 'Direktorat Jenderal Peraturan Perundang-undangan (Ditjen PP)',
    certificationNumber: 'REG-TR/KEMKUMHAM/089/2025',
    promulgatedDate: '22 January 2025 (Official English Translation Certified on 15 February 2025)',
    fileSize: '2.1 MB',
    isOfficialTranslation: true
  },
  {
    id: 'trans-en-perpres-142-2024',
    originalId: 'perpres-142-2024',
    originalTitle: 'Peraturan Presiden Nomor 142 Tahun 2024 tentang Kedudukan, Tugas, dan Fungsi Kementerian Transmigrasi',
    englishTitle: 'Presidential Regulation Number 142 Year 2024 concerning the Status, Tasks, Functions, and Organizational Structure of the Ministry of Transmigration',
    type: 'Presidential Regulation',
    number: '142',
    year: 2024,
    translatorAuthority: 'Direktorat Jenderal Peraturan Perundang-undangan (Ditjen PP)',
    certificationNumber: 'REG-TR/KEMKUMHAM/012/2024',
    promulgatedDate: '21 October 2024 (Official English Translation Certified on 05 November 2024)',
    fileSize: '2.7 MB',
    isOfficialTranslation: true
  },
  {
    id: 'trans-en-permen-3-2026',
    originalId: 'permen-trans-3-2026',
    originalTitle: 'Peraturan Menteri Transmigrasi Nomor 3 Tahun 2026 tentang Transmigrasi Patriot',
    englishTitle: 'Minister of Transmigration Regulation Number 3 Year 2026 concerning the Implementation of Patriot Transmigration Scheme',
    type: 'Ministerial Regulation',
    number: '3',
    year: 2026,
    translatorAuthority: 'Konsep Pengajuan Penerjemahan Resmi',
    certificationNumber: 'SURAT-PERMOHONAN-TRANSLATE/KEMTRANS/II/2026 (Proses Validasi Ditjen PP)',
    promulgatedDate: '25 Februari 2026 (Konsep Naskah Terjemahan Terdaftar)',
    fileSize: '1.8 MB',
    isOfficialTranslation: false
  }
];

// ============================================================================
// DISEMINASI PRODUK HUKUM (VARIABEL I - Infografis, Videografis, Podcast)
// ============================================================================
export const DISSEMINATION_ITEMS: DisseminationItem[] = [
  {
    id: 'dissem-1',
    title: 'Infografis: 4 Langkah Mudah Sertifikasi Hak Milik (SHM) Tanah Transmigran',
    type: 'Infografis',
    regulationReference: 'Permen Trans No. 1 Tahun 2025',
    date: '28 Februari 2026',
    summary: 'Infografis visual panduan syarat masa tinggal 3 tahun berturut-turut, verifikasi GTRA bersama BPN, dan larangan alih fungsi lahan sebelum 10 tahun.',
    thumbnailUrl: '/src/assets/images/legal_codex_document_1792042732792.jpg',
    mediaUrl: '#',
    socialLink: 'https://instagram.com/jdihkemtrans'
  },
  {
    id: 'dissem-2',
    title: 'Infografis: Mengenal 4 Jenis Pakaian Dinas ASN Kemtrans Sesuai Permen No. 4/2026',
    type: 'Infografis',
    regulationReference: 'Permen Trans No. 4 Tahun 2026',
    date: '30 Maret 2026',
    summary: 'Rincian pemakaian seragam PDH Putih, Batik Nusantara, PDL Lapangan, dan KORPRI beserta tanda kepangkatan resmi.',
    thumbnailUrl: '/src/assets/images/hero_transmigrasi_legal_1792042732508.jpg',
    mediaUrl: '#',
    socialLink: 'https://instagram.com/jdihkemtrans'
  },
  {
    id: 'dissem-3',
    title: 'Videografis: Peluang & Insentif Sarjana Penggerak Melalui Transmigrasi Patriot 2026',
    type: 'Videografis',
    regulationReference: 'Permen Trans No. 3 Tahun 2026',
    date: '10 Maret 2026',
    summary: 'Video animasi penjelasan hak atas 2,25 hektar lahan usaha dan modal stimulan bagi pemuda sarjana perintis kawasan perbatasan.',
    thumbnailUrl: '/src/assets/images/transmigrasi_community_1792042732733.jpg',
    mediaUrl: '#',
    socialLink: 'https://youtube.com/@jdihkemtrans'
  },
  {
    id: 'dissem-4',
    title: 'Podcast Literasi Hukum Eps. 8: Menangkal Sengketa Tanah Kawasan Transmigrasi',
    type: 'Podcast Hukum',
    regulationReference: 'Putusan MK No. 34/PUU-XIX/2021 & Permen 1/2025',
    date: '15 Maret 2026',
    summary: 'Dialog bersama Biro Hukum dan Tenaga Ahli Agraria membahas jaminan hukum bagi transmigran dan penghormatan hak masyarakat lokal.',
    thumbnailUrl: '/src/assets/images/hero_transmigrasi_legal_1792042732508.jpg',
    mediaUrl: '#',
    socialLink: 'https://spotify.com/jdihkemtrans'
  }
];

// ============================================================================
// LOG INTEGRASI API JDIHN NASIONAL (VARIABEL III)
// ============================================================================
export const API_INTEGRATION_LOGS: ApiIntegrationLog[] = [
  {
    id: 'sync-1',
    timestamp: '14 Oktober 2026, 15:59 WIB',
    syncStatus: 'Sukses Sync',
    syncedCount: 102,
    apiUrl: 'https://jdih.transmigrasi.go.id/web/Web/jdih_integration_jdihn',
    notes: 'Sinkronisasi berkala otomatis data PUU 2026 dan metadata abstrak berhasil diindeks server pusat BPHN (HTTP 200 OK).'
  },
  {
    id: 'sync-2',
    timestamp: '06 Oktober 2026, 16:08 WIB',
    syncStatus: 'Sukses Sync',
    syncedCount: 102,
    apiUrl: 'https://jdih.transmigrasi.go.id/web/Web/jdih_integration_jdihn',
    notes: 'Update naskah Permen Trans No. 4 Tahun 2026 dan metadata Peraturan Pelaksanaan terverifikasi.'
  },
  {
    id: 'sync-3',
    timestamp: '30 September 2026, 12:29 WIB',
    syncStatus: 'Sukses Sync',
    syncedCount: 87,
    apiUrl: 'https://jdih.transmigrasi.go.id/web/Web/jdih_integration_jdihn',
    notes: 'Penyelarasan payload dokumen pembentukan PUU dan risalah harmonisasi.'
  }
];

// ============================================================================
// LAPORAN EVALUASI MANDIRI 7 ASPEK JDIH (VARIABEL IV)
// ============================================================================
export const SELF_EVALUATION_ASPECTS: SelfEvaluationAspect[] = [
  {
    number: 1,
    title: 'Organisasi & Tata Kerja Pengelola JDIH',
    score: 10,
    maxScore: 10,
    achievements: [
      'Telah dibentuk Tim Pengelola JDIH mandiri berdasarkan SK Menteri Transmigrasi.',
      'SOP Pengolahan, Validasi Naskah, dan Publikasi Regulasi telah ditetapkan secara formal.'
    ],
    actionPlans: ['Penyegaran struktur satgas diseminasi hukum kewilayahan tahun 2027.']
  },
  {
    number: 2,
    title: 'Sumber Daya Manusia (SDM) Pengelola',
    score: 10,
    maxScore: 10,
    achievements: [
      'Memiliki 8 personel fungsional Pengembang Teknologi Pembelajaran dan Penyuluh Hukum.',
      '100% tim pengelola telah mengikuti Bimtek Nasional Indeks Reformasi Hukum (IRH) BPHN.'
    ],
    actionPlans: ['Sertifikasi keahlian interoperabilitas API Satu Data Indonesia.']
  },
  {
    number: 3,
    title: 'Koleksi Dokumen Hukum',
    score: 14,
    maxScore: 15,
    achievements: [
      'Seluruh PUU tahun 2025–2026 telah diunggah 100% lengkap dengan abstrak baku.',
      'Telah tersedia dokumen pendukung pembentukan PUU (Progsun, Naskah Urgensi, Risalah).'
    ],
    actionPlans: ['Melengkapi dokumen telaah yurisprudensi perdata agraria daerah secara bertahap.']
  },
  {
    number: 4,
    title: 'Teknis Pengelolaan & Metadata',
    score: 15,
    maxScore: 15,
    achievements: [
      'Pemisahan tegas metadata Putusan Pengadilan dari metadata Peraturan.',
      'Pengisian konsisten kolom status keberlakuan dan tautan peraturan pelaksanaan.'
    ],
    actionPlans: ['Peningkatan otomatisasi pendeteksi relasi pasal pencabutan antar-regulasi.']
  },
  {
    number: 5,
    title: 'Sarana dan Prasarana (Onsite & Fisik)',
    score: 14,
    maxScore: 15,
    achievements: [
      'Tersedia Ruang Layanan Pojok JDIH di lobi utama Gedung Kementerian Transmigrasi.',
      'Tersedia Kios Informasi Elektronik layar sentuh bagi pengunjung umum.'
    ],
    actionPlans: ['Penambahan unit Kios Elektronik di 5 Balai Besar Wilayah Transmigrasi.']
  },
  {
    number: 6,
    title: 'Pemanfaatan Teknologi Informasi dan Komunikasi (TIK)',
    score: 15,
    maxScore: 15,
    achievements: [
      'Integrasi API stabil dengan server JDIHN Nasional (terupdate Oktober 2026).',
      'Penerapan SSL Grade A+, Multi-Factor Authentication (MFA), dan Asesmen Keamanan ITSA BSSN.'
    ],
    actionPlans: ['Peningkatan kapasitas komputasi kecerdasan buatan Tanya JDIH Legal.']
  },
  {
    number: 7,
    title: 'Inovasi & Pengembangan Layanan JDIH',
    score: 19,
    maxScore: 20,
    achievements: [
      'Tersedia Layanan Peraturan Terjemahan Resmi Bahasa Inggris (Official Translation Ditjen PP).',
      'Inovasi Aksesibilitas Disabilitas: Text-to-Speech audio reader dan antarmuka ramah disleksia.',
      'Survei Kepuasan Masyarakat (SKM) digital terintegrasi.'
    ],
    actionPlans: ['Implementasi simulasi video Bahasa Isyarat Indonesia (BISINDO) untuk seluruh naskah Permen.']
  }
];

export const MOCK_NEWS = [
  {
    id: 'news-eval-2026',
    date: '14 Oktober 2026',
    category: 'Evaluasi JDIHN',
    title: 'Kemenko Infra dan BPHN Apresiasi Tindak Lanjut Cepat 4 Variabel Evaluasi JDIH Kementerian Transmigrasi',
    summary: 'Rapat koordinasi evaluasi pengelolaan JDIH di lingkungan Kemenko Infra mencatat pemenuhan signifikan pada penyediaan menu Pembentukan PUU mandiri, Kios Onsite, dan terjemahan resmi bahasa Inggris.',
    readTime: '3 menit baca',
    source: 'Biro Hukum & Organisasi Kemtrans'
  },
  {
    id: 'news-1',
    date: '12 Maret 2026',
    category: 'Harmonisasi Regulasi',
    title: 'Kementerian Transmigrasi Rampungkan Konsultasi Publik RPermen Transmigrasi Patriot 2026',
    summary: 'Biro Hukum Kementerian Transmigrasi menggelar uji sahih publik melibatkan perwakilan transmigran dari 14 provinsi dan akademisi hukum agraria.',
    readTime: '3 menit baca',
    source: 'Biro Hubungan Masyarakat & Kerja Sama'
  },
  {
    id: 'news-2',
    date: '28 Februari 2026',
    category: 'Integrasi Nasional',
    title: 'Integrasi JDIH Kementerian Transmigrasi ke Portal JDIHN Kemenkumham Raih Status Sinkronisasi 100%',
    summary: 'Portal dokumentasi hukum Kementerian Transmigrasi memenuhi seluruh parameter interoperabilitas standar nasional JDIHN dengan kecepatan indexing sub-detik.',
    readTime: '4 menit baca',
    source: 'Biro Hukum & Organisasi'
  }
];
