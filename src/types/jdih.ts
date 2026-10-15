export type RegulationType = 
  | 'UU' 
  | 'PP' 
  | 'PERPRES' 
  | 'PERMEN' 
  | 'KEPMEN' 
  | 'SE' 
  | 'PUTUSAN' 
  | 'MONOGRAFI';

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
  relationType: 'Mencabut' | 'Dicabut Oleh' | 'Mengubah' | 'Diubah Oleh' | 'Melaksanakan' | 'Terkait';
  title: string;
  year: number;
  number: string;
  type: RegulationType;
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
  downloadCount: number;
  viewCount: number;
  fileSize: string;
  hasJudicialReview?: boolean; // Uji Materi di MK/MA
  judicialReviewNote?: string;
}

export interface StatisticsData {
  totalRegulations: number;
  activeRegulations: number;
  revokedRegulations: number;
  amendedRegulations: number;
  byType: { type: RegulationType; label: string; count: number }[];
  byYear: { year: number; count: number }[];
}

export interface LegalServiceTicket {
  id: string;
  ticketNumber: string;
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  requestType: 'Salinan Resmi Dokumen' | 'Konsultasi Peraturan' | 'Klarifikasi Status Hukum' | 'Penelitian Akademik';
  regulationTarget: string;
  notes: string;
  status: 'Diterima' | 'Dalam Proses Telaah' | 'Selesai';
  createdAt: string;
}

export interface SatisfactionSurvey {
  rating: number; // 1 to 5
  speedRating: number;
  accessibilityRating: number;
  completenessRating: number;
  feedback: string;
  category: string;
}
