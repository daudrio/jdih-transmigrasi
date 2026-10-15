import { Regulation } from '../types/jdih';

export const INITIAL_REGULATIONS: Regulation[] = [
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
    downloadCount: 3840,
    viewCount: 14210,
    fileSize: '2.4 MB',
    hasJudicialReview: false
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
      },
      {
        number: 'Pasal 2',
        content: 'Kementerian Transmigrasi mempunyai tugas menyelenggarakan urusan pemerintahan di bidang ketransmigrasian untuk membantu Presiden dalam menyelenggarakan pemerintahan negara.'
      },
      {
        number: 'Pasal 4',
        chapter: 'BAB II SUSUNAN ORGANISASI',
        content: 'Kementerian Transmigrasi terdiri atas:',
        points: [
          'a. Sekretariat Jenderal;',
          'b. Direktorat Jenderal Penyiapan Kawasan dan Penataan Pemukiman Transmigrasi;',
          'c. Direktorat Jenderal Penempatan dan Fasilitasi Transmigrasi;',
          'd. Direktorat Jenderal Pengembangan Kawasan Transmigrasi;',
          'e. Inspektorat Jenderal;',
          'f. Staf Ahli Bidang Hukum dan Kebijakan Publik.'
        ]
      }
    ],
    relatedRegulations: [],
    downloadCount: 5210,
    viewCount: 19800,
    fileSize: '3.1 MB',
    hasJudicialReview: false
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
      'bahwa penyelenggaraan transmigrasi harus diorientasikan pada pembangunan wilayah yang mandiri, berdaya saing, dan berkelanjutan;',
      'bahwa ketentuan dalam UU No. 15 Tahun 1997 belum memadai dalam mengantisipasi otonomi daerah dan penataan ruang nasional.'
    ],
    mengingat: [
      'Pasal 5 ayat (1), Pasal 20, dan Pasal 33 Undang-Undang Dasar Negara Republik Indonesia Tahun 1945.'
    ],
    articles: [
      {
        number: 'Pasal 1',
        chapter: 'PASAL I BEBERAPA KETENTUAN DIUBAH',
        content: 'Ketentuan Pasal 1 diubah sehingga berbunyi sebagai berikut:',
        points: [
          'Transmigrasi adalah perpindahan penduduk secara sukarela untuk meningkatkan kesejahteraan dan menetap di Kawasan Transmigrasi yang diselenggarakan oleh Pemerintah.',
          'Kawasan Transmigrasi adalah kawasan budi daya yang memiliki fungsi sebagai permukiman dan tempat usaha transmigrasi dalam satu kesatuan sistem pengembangan wilayah.'
        ]
      },
      {
        number: 'Pasal 8',
        content: 'Penyelenggaraan transmigrasi dilaksanakan melalui koordinasi lintas sektor antara Pemerintah Pusat, Pemerintah Daerah Provinsi, dan Pemerintah Daerah Kabupaten/Kota.'
      }
    ],
    relatedRegulations: [
      {
        id: 'uu-15-1997',
        relationType: 'Mengubah',
        title: 'Undang-Undang Nomor 15 Tahun 1997 tentang Ketransmigrasian',
        year: 1997,
        number: '15',
        type: 'UU'
      }
    ],
    downloadCount: 8940,
    viewCount: 31200,
    fileSize: '4.8 MB',
    hasJudicialReview: true,
    judicialReviewNote: 'Pernah diuji di MK melalui Putusan Nomor 34/PUU-XIX/2021 dengan amar: Menolak permohonan pemohon untuk seluruhnya.'
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
    subject: ['Penyiapan Pemukiman', 'Seleksi Transmigran', 'Pemberian Lahan Usaha', 'Bantuan Sosial Awal'],
    legalField: 'Hukum Administrasi Negara',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'PP ini mengatur operasional penetapan lokasi transmigrasi, tata cara pendaftaran calon transmigran, bantuan bekal hidup, pembagian hak atas tanah, serta penyerahan aset pemukiman kepada pemerintah daerah setelah masa pembinaan 5 tahun.',
    menimbang: [
      'bahwa untuk melaksanakan ketentuan dalam UU Nomor 29 Tahun 2009, perlu diatur ketentuan teknis mengenai perencanaan, pelaksanaan, dan pembinaan kawasan transmigrasi.'
    ],
    mengingat: [
      'Pasal 5 ayat (2) UUD 1945;',
      'Undang-Undang Nomor 29 Tahun 2009 tentang Ketransmigrasian.'
    ],
    articles: [
      {
        number: 'Pasal 24',
        chapter: 'BAB IV BANTUAN BEKAL HIDUP',
        content: 'Pemerintah wajib menyediakan catu pangan bekal hidup paling sedikit untuk masa 12 (dua belas) bulan bagi transmigran pada pemukiman lahan basah dan 18 (delapan belas) bulan pada lahan kering.'
      }
    ],
    relatedRegulations: [
      {
        id: 'uu-29-2009',
        relationType: 'Melaksanakan',
        title: 'Undang-Undang Nomor 29 Tahun 2009 tentang Ketransmigrasian',
        year: 2009,
        number: '29',
        type: 'UU'
      }
    ],
    downloadCount: 4210,
    viewCount: 16750,
    fileSize: '3.6 MB',
    hasJudicialReview: false
  },
  {
    id: 'permen-trans-3-2025',
    type: 'PERMEN',
    typeName: 'Peraturan Menteri Transmigrasi',
    number: '3',
    year: 2025,
    title: 'Peraturan Menteri Transmigrasi Nomor 3 Tahun 2025 tentang Standar Pelayanan Minimal Penempatan dan Pemukiman Transmigrasi Swakarsa Mandiri',
    shortTitle: 'Standar Pelayanan Minimal Transmigrasi Swakarsa Mandiri',
    status: 'Berlaku',
    statusDetail: 'Regulasi Baru 2025',
    enactedDate: '12 Februari 2025',
    promulgatedDate: '18 Februari 2025',
    signee: 'Menteri Transmigrasi Republik Indonesia',
    sourceGazette: 'Berita Negara Republik Indonesia Tahun 2025 Nomor 112',
    t_e_u: 'Indonesia. Kementerian Transmigrasi. Ditjen Penempatan',
    subject: ['Transmigrasi Swakarsa Mandiri (TSM)', 'Standar Pelayanan Minimal (SPM)', 'Fasilitasi Transportasi', 'Sarana Air Bersih'],
    legalField: 'Hukum Pelayanan Publik',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Menetapkan tolak ukur jaminan kualitas fasilitas dasar yang wajib tersedia sebelum transmigran tiba di lokasi pemukiman, mencakup akses air bersih siap konsumsi, kelistrikan ramah lingkungan, puskesmas pembantu, dan akses jalan poros.',
    menimbang: [
      'bahwa keberhasilan pemukiman baru bergantung pada kesiapan infrastruktur dasar yang layak huni dan menjamin martabat kemanusiaan transmigran.'
    ],
    mengingat: [
      'Undang-Undang Nomor 29 Tahun 2009 tentang Ketransmigrasian;',
      'Peraturan Pemerintah Nomor 3 Tahun 2014.'
    ],
    articles: [
      {
        number: 'Pasal 5',
        chapter: 'BAB II STANDAR KELAYAKAN',
        content: 'Setiap unit satuan pemukiman transmigrasi harus memenuhi kriteria jarak maksimum 200 meter dari sumber air bersih layak konsumsi.'
      }
    ],
    relatedRegulations: [],
    downloadCount: 2190,
    viewCount: 8430,
    fileSize: '1.9 MB',
    hasJudicialReview: false
  },
  {
    id: 'permen-trans-5-2024',
    type: 'PERMEN',
    typeName: 'Peraturan Menteri Transmigrasi',
    number: '5',
    year: 2024,
    title: 'Peraturan Menteri Transmigrasi Nomor 5 Tahun 2024 tentang Revitalisasi Kawasan Transmigrasi Menjadi Sentra Agribisnis Berkelanjutan',
    shortTitle: 'Revitalisasi Kawasan Transmigrasi Jadi Sentra Agribisnis',
    status: 'Berlaku',
    statusDetail: 'Regulasi Program Prioritas Nasional',
    enactedDate: '08 Desember 2024',
    promulgatedDate: '14 Desember 2024',
    signee: 'Menteri Transmigrasi Republik Indonesia',
    sourceGazette: 'Berita Negara Republik Indonesia Tahun 2024 Nomor 891',
    t_e_u: 'Indonesia. Kementerian Transmigrasi',
    subject: ['Revitalisasi Pemukiman', 'Sentra Pangan', 'Hilirisasi Agribisnis', 'Smart Farming'],
    legalField: 'Hukum Ekonomi dan Sumber Daya Alam',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Mendorong modernisasi kawasan transmigrasi eksisting melalui penyediaan mekanisasi alat mesin pertanian modern, benih bersertifikat, dan integrasi rantai pasok ketahanan pangan nasional.',
    menimbang: [
      'bahwa kawasan transmigrasi memiliki potensi luasan lahan lebih dari 3 juta hektar yang strategis untuk mendukung swasembada pangan nasional.'
    ],
    mengingat: [
      'Undang-Undang Nomor 29 Tahun 2009 tentang Ketransmigrasian.'
    ],
    articles: [
      {
        number: 'Pasal 3',
        chapter: 'BAB I SASARAN REVITALISASI',
        content: 'Revitalisasi difokuskan pada 52 kawasan transmigrasi prioritas di pulau Sumatra, Kalimantan, Sulawesi, Maluku, dan Papua.'
      }
    ],
    relatedRegulations: [],
    downloadCount: 3120,
    viewCount: 11400,
    fileSize: '2.8 MB',
    hasJudicialReview: false
  },
  {
    id: 'perpres-50-2018',
    type: 'PERPRES',
    typeName: 'Peraturan Presiden',
    number: '50',
    year: 2018,
    title: 'Peraturan Presiden Republik Indonesia Nomor 50 Tahun 2018 tentang Koordinasi Integrasi Penyelenggaraan Transmigrasi',
    shortTitle: 'Koordinasi Integrasi Penyelenggaraan Transmigrasi',
    status: 'Berlaku',
    statusDetail: 'Payung Regulasi Lintas Kementerian/Lembaga',
    enactedDate: '10 Juli 2018',
    promulgatedDate: '12 Juli 2018',
    signee: 'Presiden Republik Indonesia',
    sourceGazette: 'Lembaran Negara Republik Indonesia Tahun 2018 Nomor 98',
    t_e_u: 'Indonesia. Kementerian Sekretariat Negara',
    subject: ['Koordinasi Sektoral', 'Penyediaan Anggaran Terpadu', 'Integrasi Kawasan'],
    legalField: 'Hukum Tata Usaha Negara',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Mewajibkan kementerian teknis (PUPR, Pertanian, Kesehatan, Pendidikan) mengalokasikan program kerja terpadu ke kawasan transmigrasi yang telah ditetapkan secara nasional.',
    menimbang: [
      'bahwa transmigrasi bukan semata tanggung jawab satu instansi, melainkan kerja bersama lintas kementerian dan pemerintah daerah.'
    ],
    mengingat: [
      'Undang-Undang Nomor 29 Tahun 2009 tentang Ketransmigrasian.'
    ],
    articles: [
      {
        number: 'Pasal 4',
        content: 'Dibentuk Tim Koordinasi Terpadu Penyelenggaraan Transmigrasi yang dipimpin oleh Menteri Koordinator terkait.'
      }
    ],
    relatedRegulations: [],
    downloadCount: 4550,
    viewCount: 15320,
    fileSize: '2.1 MB',
    hasJudicialReview: false
  },
  {
    id: 'kepmen-trans-42-2025',
    type: 'KEPMEN',
    typeName: 'Keputusan Menteri Transmigrasi',
    number: '42',
    year: 2025,
    title: 'Keputusan Menteri Transmigrasi Nomor 42 Tahun 2025 tentang Penetapan Lokasi Prioritas Revitalisasi Kawasan Transmigrasi Nasional Tahun 2025–2029',
    shortTitle: 'Penetapan Lokasi Prioritas Revitalisasi Transmigrasi 2025–2029',
    status: 'Berlaku',
    statusDetail: 'Keputusan Pelaksana Penetapan Lokasi',
    enactedDate: '02 Februari 2025',
    promulgatedDate: '02 Februari 2025',
    signee: 'Menteri Transmigrasi Republik Indonesia',
    sourceGazette: 'Warta Resmi Kementerian Transmigrasi Tahun 2025',
    t_e_u: 'Indonesia. Kementerian Transmigrasi',
    subject: ['Lokasi Prioritas', 'Revitalisasi', 'Kabupaten/Kota Terpilih'],
    legalField: 'Hukum Penetapan Administratif',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Memuat lampiran daftar 120 satuan pemukiman di 28 provinsi yang mendapatkan alokasi dana stimulan peremajaan infrastruktur, bantuan alsintan, dan percepatan sertifikasi tanah.',
    menimbang: [
      'bahwa untuk efektivitas alokasi anggaran pembangunan kawasan transmigrasi diperlukan penentuan lokus prioritas berbasis data geospasial.'
    ],
    mengingat: [
      'Peraturan Menteri Transmigrasi Nomor 5 Tahun 2024.'
    ],
    articles: [
      {
        number: 'Diktum KESATU',
        content: 'Menetapkan Lokasi Prioritas Revitalisasi Kawasan Transmigrasi Nasional Tahun Anggaran 2025 sampai dengan 2029 sebagaimana tercantum dalam Lampiran yang merupakan bagian tidak terpisahkan dari Keputusan ini.'
      }
    ],
    relatedRegulations: [],
    downloadCount: 1820,
    viewCount: 7190,
    fileSize: '5.2 MB',
    hasJudicialReview: false
  },
  {
    id: 'se-menteri-2-2025',
    type: 'SE',
    typeName: 'Surat Edaran Menteri',
    number: '02',
    year: 2025,
    title: 'Surat Edaran Menteri Transmigrasi Nomor 02 Tahun 2025 tentang Percepatan Penyelesaian Sengketa Batas Hak Pengelolaan dan Penerbitan SHM Lahan Usaha II',
    shortTitle: 'SE Percepatan SHM Lahan Usaha II Transmigran',
    status: 'Berlaku',
    statusDetail: 'Petunjuk Operasional Kantor Wilayah & Dinas Daerah',
    enactedDate: '10 Februari 2025',
    promulgatedDate: '10 Februari 2025',
    signee: 'Menteri Transmigrasi Republik Indonesia',
    sourceGazette: 'Edaran Resmi Kementerian Transmigrasi RI',
    t_e_u: 'Indonesia. Kementerian Transmigrasi',
    subject: ['Penyelesaian Sengketa Batas', 'Gugus Tugas Reforma Agraria', 'Kemitraan BPN/ATR'],
    legalField: 'Hukum Agraria',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Instruksi kepada seluruh Kepala Dinas Tenaga Kerja dan Transmigrasi Provinsi/Kabupaten untuk membentuk Tim Bersama Kantor Pertanahan setempat guna menuntaskan tunggakan sertifikat lahan usaha II yang tertunda lebih dari 5 tahun.',
    menimbang: [
      'bahwa masih terdapat keluhan masyarakat transmigran terkait keterlambatan penyerahan sertifikat tanah Lahan Usaha II.'
    ],
    mengingat: [
      'Peraturan Menteri Transmigrasi Nomor 1 Tahun 2025.'
    ],
    articles: [
      {
        number: 'Butir 1',
        content: 'Dinas yang membidangi ketransmigrasian berkoordinasi langsung dengan Kantor Pertanahan Kabupaten/Kota dalam Gugus Tugas Reforma Agraria (GTRA) untuk verifikasi yuridis dan fisik bidang tanah transmigran.'
      }
    ],
    relatedRegulations: [],
    downloadCount: 1640,
    viewCount: 6890,
    fileSize: '1.2 MB',
    hasJudicialReview: false
  },
  {
    id: 'putusan-mk-34-2021',
    type: 'PUTUSAN',
    typeName: 'Putusan Pengadilan / MK',
    number: '34/PUU-XIX/2021',
    year: 2021,
    title: 'Putusan Mahkamah Konstitusi Republik Indonesia Nomor 34/PUU-XIX/2021 perihal Pengujian Materiil Undang-Undang Nomor 29 Tahun 2009 tentang Ketransmigrasian terhadap UUD 1945',
    shortTitle: 'Putusan MK No. 34/PUU-XIX/2021 Uji UU Ketransmigrasian',
    status: 'Berlaku',
    statusDetail: 'Kekuatan Hukum Tetap (Inkracht)',
    enactedDate: '27 Oktober 2021',
    promulgatedDate: '27 Oktober 2021',
    signee: 'Ketua Mahkamah Konstitusi RI',
    sourceGazette: 'Berita Negara RI Tahun 2021',
    t_e_u: 'Indonesia. Mahkamah Konstitusi Republik Indonesia',
    subject: ['Uji Materiil', 'UUD 1945', 'Hak Menguasai Negara', 'Hak Ulayat'],
    legalField: 'Hukum Acara Mahkamah Konstitusi',
    language: 'Indonesia',
    location: 'Jakarta Pusat',
    summary: 'Mahkamah Konstitusi menegaskan bahwa hak pengelolaan tanah dalam kawasan transmigrasi tidak bertentangan dengan UUD 1945 sepanjang tetap menghormati dan memberikan kompensasi adil terhadap hak ulayat masyarakat hukum adat setempat.',
    menimbang: [
      'bahwa permohonan pemohon tidak beralasan menurut hukum untuk sebagian atau seluruhnya.'
    ],
    mengingat: [
      'Pasal 24C ayat (1) UUD 1945;',
      'Undang-Undang Nomor 24 Tahun 2003 tentang Mahkamah Konstitusi.'
    ],
    articles: [
      {
        number: 'Amar Putusan',
        content: 'Mengadili: Menolak permohonan Pemohon untuk seluruhnya. Menyatakan norma Pasal 13 ayat (2) dan Pasal 22 ayat (1) UU No. 29 Tahun 2009 adalah konstitusional bersyarat.'
      }
    ],
    relatedRegulations: [
      {
        id: 'uu-29-2009',
        relationType: 'Terkait',
        title: 'Undang-Undang Nomor 29 Tahun 2009 tentang Ketransmigrasian',
        year: 2009,
        number: '29',
        type: 'UU'
      }
    ],
    downloadCount: 2950,
    viewCount: 10420,
    fileSize: '4.2 MB',
    hasJudicialReview: false
  },
  {
    id: 'monografi-transmigrasi-2025',
    type: 'MONOGRAFI',
    typeName: 'Naskah Akademik & Monografi Hukum',
    number: '01/MONO/TRANS',
    year: 2025,
    title: 'Monografi Hukum: Urgensi Rekonseptualisasi Transmigrasi Generasi Kelima (Transmigrasi 5.0) dalam Menopang Ketahanan Pangan Nasional dan Hilirisasi SDA',
    shortTitle: 'Monografi Hukum Transmigrasi Generasi Kelima (Transmigrasi 5.0)',
    status: 'Berlaku',
    statusDetail: 'Dokumentasi Kajian Ilmiah Kebijakan Hukum',
    enactedDate: '10 Januari 2025',
    promulgatedDate: '10 Januari 2025',
    signee: 'Pusat Analisis dan Harmonisasi Kebijakan Hukum Transmigrasi',
    sourceGazette: 'Publikasi Resmi Pusat Studi Hukum JDIH Kemtrans',
    t_e_u: 'Indonesia. Kementerian Transmigrasi. Badan Penelitian dan Pengembangan Kebijakan',
    subject: ['Transmigrasi 5.0', 'Kajian Hukum', 'Ketahanan Pangan', 'Hilirisasi Industri Pedesaan'],
    legalField: 'Kajian Akademik Hukum Pembangunan',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Kajian mendalam yang mengulas transisi model ketransmigrasian dari sekadar persebaran demografi manual menuju penciptaan sentra agrologistik cerdas terhubung IKN dan koridor maritim nasional.',
    menimbang: [
      'bahwa perumusan legislasi masa depan harus didasarkan pada riset empiris dan kepastian doktrin hukum tata ruang.'
    ],
    mengingat: [
      'Undang-Undang Nomor 12 Tahun 2011 tentang Pembentukan Peraturan Perundang-undangan.'
    ],
    articles: [
      {
        number: 'Bab Ringkasan Eksekutif',
        content: 'Transmigrasi modern abad ke-21 tidak lagi berciri padat karya tradisional, melainkan menempatkan petani muda terdidik (agropreneur) dengan dukungan sertifikasi HPL komunal dan kemitraan offtaker terjamin.'
      }
    ],
    relatedRegulations: [],
    downloadCount: 1890,
    viewCount: 7800,
    fileSize: '6.4 MB',
    hasJudicialReview: false
  },
  {
    id: 'pp-19-2021',
    type: 'PP',
    typeName: 'Peraturan Pemerintah',
    number: '19',
    year: 2021,
    title: 'Peraturan Pemerintah Nomor 19 Tahun 2021 tentang Penyelenggaraan Pengadaan Tanah bagi Pembangunan untuk Kepentingan Umum di Kawasan Transmigrasi',
    shortTitle: 'Pengadaan Tanah di Kawasan Transmigrasi',
    status: 'Berlaku',
    statusDetail: 'Harmonisasi UU Cipta Kerja',
    enactedDate: '02 Februari 2021',
    promulgatedDate: '02 Februari 2021',
    signee: 'Presiden Republik Indonesia',
    sourceGazette: 'Lembaran Negara Republik Indonesia Tahun 2021 Nomor 29',
    t_e_u: 'Indonesia. Sekretariat Negara RI',
    subject: ['Pengadaan Tanah', 'Ganti Kerugian Transmigran', 'Proyek Strategis Nasional'],
    legalField: 'Hukum Agraria & Kepentingan Umum',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Mengatur mekanisme perlindungan hak ganti rugi layak bagi transmigran pemegang SHM atau surat pencadangan tanah apabila lahannya terlewati jalur infrastruktur Proyek Strategis Nasional (PSN).',
    menimbang: [
      'bahwa pembangunan sarana prasarana konektivitas tidak boleh mengikis hak ekonomi para transmigran perintis.'
    ],
    mengingat: [
      'Undang-Undang Nomor 2 Tahun 2012;',
      'Undang-Undang Nomor 11 Tahun 2020 tentang Cipta Kerja.'
    ],
    articles: [
      {
        number: 'Pasal 18',
        content: 'Apabila lahan transmigrasi terdampak pengadaan tanah untuk jalan tol atau bendungan, instansi yang memerlukan tanah wajib menyediakan tanah pengganti setara ditambah uang santunan relokasi.'
      }
    ],
    relatedRegulations: [],
    downloadCount: 3410,
    viewCount: 13900,
    fileSize: '3.4 MB',
    hasJudicialReview: false
  },
  {
    id: 'permendesa-14-2018',
    type: 'PERMEN',
    typeName: 'Peraturan Menteri',
    number: '14',
    year: 2018,
    title: 'Peraturan Menteri Desa, PDT dan Transmigrasi Nomor 14 Tahun 2018 tentang Pengelolaan Tanah Transmigrasi',
    shortTitle: 'Pengelolaan Tanah Transmigrasi 2018',
    status: 'Dicabut',
    statusDetail: 'Dicabut oleh Permen Trans No. 1 Tahun 2025',
    enactedDate: '24 Oktober 2018',
    promulgatedDate: '30 Oktober 2018',
    signee: 'Menteri Desa, PDT dan Transmigrasi RI',
    sourceGazette: 'Berita Negara Republik Indonesia Tahun 2018 Nomor 1450',
    t_e_u: 'Indonesia. Kemendesa PDTT',
    subject: ['Pengelolaan Tanah', 'Lahan Usaha', 'Pemberian Izin'],
    legalField: 'Hukum Agraria',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Aturan tata cara pengelolaan tanah kawasan transmigrasi pada rezim kementerian gabungan sebelumnya. Kini telah resmi dicabut dan digantikan dengan Permen Trans No. 1 Tahun 2025 yang lebih komprehensif.',
    menimbang: [
      'bahwa diperlukan pedoman tata kelola tanah kawasan transmigrasi.'
    ],
    mengingat: [
      'UU No. 15 Tahun 1997 jo. UU No. 29 Tahun 2009.'
    ],
    articles: [
      {
        number: 'Pasal 1',
        content: 'Ketentuan lama tata laksana sertifikasi tanah transmigrasi (telah digantikan oleh regulasi baru 2025).'
      }
    ],
    relatedRegulations: [
      {
        id: 'permen-trans-1-2025',
        relationType: 'Dicabut Oleh',
        title: 'Peraturan Menteri Transmigrasi Nomor 1 Tahun 2025',
        year: 2025,
        number: '1',
        type: 'PERMEN'
      }
    ],
    downloadCount: 1210,
    viewCount: 6540,
    fileSize: '1.8 MB',
    hasJudicialReview: false
  },
  {
    id: 'uu-15-1997',
    type: 'UU',
    typeName: 'Undang-Undang',
    number: '15',
    year: 1997,
    title: 'Undang-Undang Republik Indonesia Nomor 15 Tahun 1997 tentang Ketransmigrasian',
    shortTitle: 'Undang-Undang Ketransmigrasian (Induk)',
    status: 'Diubah',
    statusDetail: 'Telah diubah oleh UU No. 29 Tahun 2009',
    enactedDate: '07 Mei 1997',
    promulgatedDate: '07 Mei 1997',
    signee: 'Presiden Republik Indonesia',
    sourceGazette: 'Lembaran Negara Republik Indonesia Tahun 1997 Nomor 37',
    t_e_u: 'Indonesia. Pemerintah Republik Indonesia',
    subject: ['Ketransmigrasian Induk', 'Pemberdayaan Wilayah', 'Hak dan Kewajiban Transmigran'],
    legalField: 'Hukum Tata Usaha Negara',
    language: 'Indonesia',
    location: 'Jakarta',
    summary: 'Undang-Undang pokok fondasi hukum ketransmigrasian nasional Republik Indonesia yang mengatur hak, kewajiban, tata cara penyiapan, serta pemukiman kembali warga negara di kawasan transmigrasi.',
    menimbang: [
      'bahwa pembangunan transmigrasi merupakan bagian integral dari pembangunan nasional untuk mempercepat persebaran kesejahteraan.'
    ],
    mengingat: [
      'Pasal 5 ayat (1), Pasal 20 ayat (1), Pasal 27 ayat (2), dan Pasal 33 UUD 1945.'
    ],
    articles: [
      {
        number: 'Pasal 1',
        chapter: 'KETENTUAN POKOK',
        content: 'Transmigrasi adalah perpindahan penduduk secara sukarela untuk meningkatkan kesejahteraan dan menetap di Wilayah Pengembangan Transmigrasi atau Lokasi Permukiman Transmigrasi.'
      }
    ],
    relatedRegulations: [
      {
        id: 'uu-29-2009',
        relationType: 'Diubah Oleh',
        title: 'Undang-Undang Nomor 29 Tahun 2009 tentang Perubahan atas UU No. 15 Tahun 1997',
        year: 2009,
        number: '29',
        type: 'UU'
      }
    ],
    downloadCount: 6720,
    viewCount: 24300,
    fileSize: '3.9 MB',
    hasJudicialReview: false
  }
];

export const MOCK_NEWS = [
  {
    id: 'news-1',
    date: '12 Maret 2025',
    category: 'Harmonisasi Regulasi',
    title: 'Kementerian Transmigrasi Rampungkan Konsultasi Publik RPermen Percepatan Sertifikat HPL Lahan Transmigran',
    summary: 'Biro Hukum Kementerian Transmigrasi menggelar uji sahih publik melibatkan perwakilan transmigran dari 14 provinsi dan akademisi hukum agraria.',
    readTime: '3 menit baca',
    source: 'Biro Hubungan Masyarakat & Kerja Sama'
  },
  {
    id: 'news-2',
    date: '28 Februari 2025',
    category: 'Integrasi Nasional',
    title: 'Integrasi JDIH Kementerian Transmigrasi ke Portal JDIHN Kemenkumham Resmi Meraih Predikat Bintang Lima',
    summary: 'Portal dokumentasi hukum Kementerian Transmigrasi memenuhi seluruh parameter interoperabilitas standar nasional JDIHN dengan kecepatan indexing sub-detik.',
    readTime: '4 menit baca',
    source: 'Biro Hukum & Organisasi'
  },
  {
    id: 'news-3',
    date: '15 Februari 2025',
    category: 'Klinik Hukum',
    title: 'Peluncuran Pos Bantuan Hukum (Posbakum) Terpadu di 50 Kawasan Transmigrasi Prioritas',
    summary: 'Memberikan kepastian advokasi dan konsultasi hukum gratis bagi warga transmigran terkait legalitas alas hak tanah usaha tani dan kemitraan badan usaha.',
    readTime: '2 menit baca',
    source: 'Ditjen Fasilitasi Transmigrasi'
  }
];
