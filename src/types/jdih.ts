export type RegulationType = 
  | 'UU' 
  | 'PP' 
  | 'PERPRES' 
  | 'PERMEN' 
  | 'KEPMEN' 
  | 'SE' 
  | 'PUTUSAN' 
  | 'MONOGRAFI'
  | 'RANCANGAN';

export type RegulationStatus = 
  | 'Berlaku' 
  | 'Dicabut' 
  | 'Mengubah' 
  | 'Diubah' 
  | 'Tidak Berlaku';

export interface ClauseArticle {
  number: string; // e.g. "Pasal 1"
  chapter?: string; // e.g. "BAB I KETENTUAN UMUM"
  content: string;
  points?: string[];
}

export interface RelatedRegulation {
  id: string;
  relationType: 'Mencabut' | 'Dicabut Oleh' | 'Mengubah' | 'Diubah Oleh' | 'Melaksanakan' | 'Terkait' | 'Peraturan Pelaksanaan';
  title: string;
  year: number;
  number: string;
  type: RegulationType;
}

export interface LawMakingDocReference {
  id: string;
  type: 'Progsun' | 'Naskah Urgensi' | 'Rancangan' | 'Risalah Harmonisasi' | 'Hasil Manjau/AE';
  title: string;
  year: number;
  downloadUrl?: string;
  fileSize: string;
}

export interface Regulation {
  id: string;
  type: RegulationType;
  typeName: string;
  number: string;
  year: number;
  title: string;
  shortTitle: string;
  status: RegulationStatus;
  statusDetail?: string;
  enactedDate: string; // Tanggal Penetapan
  promulgatedDate: string; // Tanggal Pengundangan
  signee: string; // Penandatangan (e.g. Presiden RI, Menteri Transmigrasi)
  sourceGazette: string; // Lembaran Negara / Berita Negara RI
  t_e_u: string; // Tajuk Entri Utama (Pengarang / Badan)
  subject: string[]; // Subjek hukum (e.g. "HPL Transmigrasi", "Pemukiman Baru")
  legalField: string; // Bidang Hukum (e.g. Hukum Agraria & Transmigrasi)
  language: string;
  location: string;
  summary: string; // Ringkasan / Abstrak
  menimbang: string[]; // Konsiderans Menimbang
  mengingat: string[]; // Konsiderans Mengingat
  articles: ClauseArticle[];
  relatedRegulations: RelatedRegulation[];
  implementingRegulations?: RelatedRegulation[]; // Peraturan Pelaksanaan
  lawMakingSupportDocs?: LawMakingDocReference[]; // Dokumen terkait pembentukan PUU
  downloadCount: number;
  viewCount: number;
  fileSize: string;
  hasJudicialReview?: boolean; // Uji Materi di MK/MA
  judicialReviewNote?: string;
  englishTranslationAvailable?: boolean;
  englishTranslationUrl?: string;
}

// Variabel 1 & 2: Dokumen Pembentukan PUU
export interface LawMakingDocument {
  id: string;
  category: 'progsun' | 'naskah_urgensi' | 'rancangan' | 'risalah' | 'partisipasi_publik' | 'manjau_ae' | 'kajian';
  categoryLabel: string;
  title: string;
  year: number;
  documentNumber?: string;
  targetRegulationTitle?: string;
  initiatorUnit: string; // Unit pemrakarsa
  dateCreated: string;
  summary: string;
  fileSize: string;
  status: 'Dalam Penyusunan' | 'Tahap Harmonisasi' | 'Selesai / Diundangkan' | 'Konsultasi Publik Terbuka';
  publicConsultationOpen?: boolean;
  publicConsultationDeadline?: string;
  feedbackCount?: number;
}

// Variabel 2: Khusus Metadata Putusan Pengadilan & Lembaga Quasi Peradilan
export interface CourtJudicialDecision {
  id: string;
  courtType: 'Mahkamah Konstitusi' | 'Mahkamah Agung' | 'Pengadilan Tata Usaha Negara' | 'Pengadilan Negeri' | 'Komisi Informasi Pusat (KIP)' | 'Ombudsman RI';
  caseNumber: string; // Nomor Perkara / Putusan
  title: string;
  year: number;
  rulingDate: string; // Tanggal Putusan
  parties: {
    applicant: string; // Pemohon / Penggugat
    respondent: string; // Termohon / Tergugat
  };
  rulingStatus: 'Menolak Seluruhnya' | 'Mengabulkan Sebagian' | 'Mengabulkan Seluruhnya' | 'Tidak Dapat Diterima (NO)';
  verdictSummary: string; // Ringkasan Amar Putusan
  benchJudges?: string[]; // Majelis Hakim / Komisioner
  sourceGazette: string;
  testedLawReference?: string; // PUU yang diuji
  fileSize: string;
  downloadCount: number;
}

// Variabel 2: Monografi & Artikel Hukum
export interface MonographDocument {
  id: string;
  title: string;
  type: 'Monografi Hukum' | 'Artikel Hukum' | 'Jurnal Ilmiah';
  author: string;
  publisher: string;
  city: string;
  year: number;
  isbn?: string;
  subject: string[];
  summary: string;
  pages: number;
  fileSize: string;
  downloadCount: number;
}

// Variabel 4: Layanan Peraturan Terjemahan (English Official Translation)
export interface EnglishTranslationDocument {
  id: string;
  originalId: string;
  originalTitle: string;
  englishTitle: string;
  type: string;
  number: string;
  year: number;
  translatorAuthority: 'Direktorat Jenderal Peraturan Perundang-undangan (Ditjen PP)' | 'Konsep Pengajuan Penerjemahan Resmi';
  certificationNumber: string;
  promulgatedDate: string;
  fileSize: string;
  isOfficialTranslation: boolean;
}

// Variabel 1: Diseminasi Produk Hukum
export interface DisseminationItem {
  id: string;
  title: string;
  type: 'Infografis' | 'Videografis' | 'Podcast Hukum' | 'Media Sosial (Instagram)';
  regulationReference: string;
  date: string;
  summary: string;
  thumbnailUrl: string;
  mediaUrl: string;
  socialLink?: string;
}

// Variabel 3: Log Integrasi API JDIHN
export interface ApiIntegrationLog {
  id: string;
  timestamp: string;
  syncStatus: 'Sukses Sync' | 'Sinkronisasi Pending';
  syncedCount: number;
  apiUrl: string;
  notes: string;
}

// Variabel 4: Layanan Onsite & Kios Elektronik
export interface KioskQueueTicket {
  ticketNumber: string;
  visitorName: string;
  serviceRequested: 'Pojok JDIH Konsultasi' | 'Cetak Salinan Sah' | 'Peminjaman Buku Hukum' | 'Akses Kios Digital';
  timestamp: string;
  boothNumber: string;
}

// Variabel 4: Laporan Evaluasi Mandiri 7 Aspek
export interface SelfEvaluationAspect {
  number: number;
  title: string;
  score: number;
  maxScore: number;
  achievements: string[];
  actionPlans: string[];
}

export interface LegalServiceTicket {
  id: string;
  ticketNumber: string;
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  requestType: 'Salinan Resmi Dokumen' | 'Konsultasi Peraturan' | 'Klarifikasi Status Hukum' | 'Permintaan Naskah Akademik';
  regulationTarget: string;
  notes: string;
  status: 'Diterima' | 'Diproses' | 'Selesai';
  createdAt: string;
}

