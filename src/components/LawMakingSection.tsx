import React, { useState, useEffect } from 'react';
import { 
  FileEdit, 
  Download, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  Send, 
  FileText, 
  ExternalLink, 
  ShieldCheck,
  Check,
  Building2,
  Users
} from 'lucide-react';
import { LAW_MAKING_DOCUMENTS } from '../data/regulationsData';
import { LawMakingDocument } from '../types/jdih';
import { useThemeAndA11y } from '../context/ThemeAndA11yContext';

interface LawMakingSectionProps {
  initialCategory?: string;
}

export const LawMakingSection: React.FC<LawMakingSectionProps> = ({ initialCategory = 'all' }) => {
  const { announce } = useThemeAndA11y();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Public Feedback Form State
  const [activeConsultationDoc, setActiveConsultationDoc] = useState<LawMakingDocument | null>(null);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    organization: '',
    articleTarget: '',
    opinion: ''
  });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState<boolean>(false);

  const submenus = [
    { id: 'all', label: 'Semua Dokumen Pembentukan' },
    { id: 'progsun', label: 'Progsun / Propem' },
    { id: 'naskah_urgensi', label: 'Naskah Akademik & Urgensi' },
    { id: 'rancangan', label: 'Rancangan PUU (RPermen)' },
    { id: 'risalah', label: 'Risalah Harmonisasi' },
    { id: 'partisipasi_publik', label: 'Partisipasi Publik' },
    { id: 'manjau_ae', label: 'Hasil Manjau / AE' },
    { id: 'kajian', label: 'Kajian Hukum' }
  ];

  const filteredDocs = LAW_MAKING_DOCUMENTS.filter((doc) => {
    if (selectedCategory !== 'all' && doc.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        doc.title.toLowerCase().includes(q) ||
        doc.summary.toLowerCase().includes(q) ||
        doc.initiatorUnit.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleDownloadDoc = (doc: LawMakingDocument) => {
    announce(`Mengunduh berkas ${doc.title}`);
    const blob = new Blob([
      `DOKUMEN PEMBENTUKAN PERATURAN PERUNDANG-UNDANGAN JDIH KEMENTERIAN TRANSMIGRASI RI\n\nKategori: ${doc.categoryLabel}\nJudul: ${doc.title}\nTahun: ${doc.year}\nUnit Pemrakarsa: ${doc.initiatorUnit}\n\nRingkasan:\n${doc.summary}\n\nStatus: ${doc.status}\n\nDiunduh melalui Portal JDIH Kemtrans (jdih.transmigrasi.go.id)`
    ], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${doc.category}-${doc.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackForm.name || !feedbackForm.opinion) {
      announce('Mohon isi nama dan tanggapan Anda');
      return;
    }
    setFeedbackSubmitted(true);
    announce('Aspirasi publik Anda berhasil tercatat dalam lembar konsultasi naskah.');
  };

  return (
    <section className="py-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="text-xs font-semibold tracking-widest uppercase text-emerald-800 dark:text-emerald-400 mb-1">
            Transparansi Legislasi · Variabel I & II JDIHN
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-50 mb-2">
            Dokumen Pembentukan Peraturan Perundang-Undangan
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            Akses menyeluruh seluruh tahapan siklus pembentukan regulasi: Program Penyusunan (Progsun), Naskah Urgensi & Akademik, Rancangan PUU, Risalah Harmonisasi, Hasil Pemantauan & Evaluasi (Hasil Manjau/AE), serta Uji Publik Terbuka.
          </p>
        </div>

        {/* Submenu Tabs Bar (Mandatory 6 Submenus from Slide 9 Recommendation) */}
        <div className="border-b border-stone-200 dark:border-stone-800 mb-6 overflow-x-auto pb-1">
          <div className="flex items-center gap-1.5 min-w-max">
            {submenus.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'bg-emerald-800 text-white dark:bg-emerald-700 dark:text-stone-50 font-semibold shadow-xs'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                  aria-pressed={isActive}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Counter Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-3 rounded-lg text-xs">
          <div className="w-full sm:w-auto flex items-center gap-2">
            <span className="text-stone-500">Cari dalam Pembentukan PUU:</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ketik kata kunci dokumen..."
              className="px-2.5 py-1.5 border border-stone-300 dark:border-stone-700 rounded bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 w-full sm:w-64 focus:outline-hidden"
            />
          </div>

          <div className="text-stone-500">
            Menampilkan <strong className="text-stone-800 dark:text-stone-200">{filteredDocs.length}</strong> naskah pendukung legislasi
          </div>
        </div>

        {/* Documents Stream */}
        <div className="space-y-4">
          {filteredDocs.map((doc) => (
            <article
              key={doc.id}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                {/* Zero-Pill Metadata */}
                <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                  <span className="font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wide">
                    {doc.categoryLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Tahun {doc.year}</span>
                  {doc.documentNumber && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{doc.documentNumber}</span>
                    </>
                  )}
                  <span aria-hidden="true">·</span>
                  <span>{doc.initiatorUnit}</span>
                </div>

                <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                  doc.status === 'Konsultasi Publik Terbuka'
                    ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 animate-pulse'
                    : 'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300'
                }`}>
                  {doc.status}
                </span>
              </div>

              <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-50 mb-2 leading-snug">
                {doc.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                {doc.summary}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100 dark:border-stone-800 text-xs">
                <div className="flex items-center gap-3 text-stone-500">
                  <span>Ukuran: {doc.fileSize}</span>
                  {doc.feedbackCount !== undefined && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-medium">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{doc.feedbackCount} Aspirasi Masuk</span>
                      </span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {doc.publicConsultationOpen && (
                    <button
                      onClick={() => {
                        setActiveConsultationDoc(doc);
                        setFeedbackSubmitted(false);
                      }}
                      className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded flex items-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Beri Masukan Publik</span>
                    </button>
                  )}

                  <button
                    onClick={() => handleDownloadDoc(doc)}
                    className="px-3.5 py-1.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 hover:bg-stone-800 font-semibold rounded flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh Berkas</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Public Consultation Modal */}
        {activeConsultationDoc && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-title"
            className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg shadow-2xl max-w-lg w-full p-6 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between pb-3 border-b border-stone-200 dark:border-stone-800 mb-4">
                <div>
                  <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider block">
                    Kanal Partisipasi Publik JDIH
                  </span>
                  <h3 id="consultation-title" className="font-serif font-bold text-base text-stone-900 dark:text-stone-50 leading-snug">
                    Uji Sahih: {activeConsultationDoc.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveConsultationDoc(null)}
                  className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 p-1"
                >
                  ✕
                </button>
              </div>

              {feedbackSubmitted ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-50">
                    Aspirasi Anda Berhasil Terkirim
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 max-w-sm mx-auto mt-1 mb-4">
                    Tanggapan dan masukan Anda akan dihimpun langsung oleh Tim Perancang Peraturan Perundang-Undangan Biro Hukum Kementerian Transmigrasi.
                  </p>
                  <button
                    onClick={() => setActiveConsultationDoc(null)}
                    className="px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-xs font-semibold rounded"
                  >
                    Tutup
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-stone-700 dark:text-stone-300 mb-1">
                      Nama Lengkap / Komunitas <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={feedbackForm.name}
                      onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                      placeholder="Contoh: Budi Santoso (Serikat Petani Mandiri)"
                      className="w-full p-2 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded text-stone-900 dark:text-stone-100"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 dark:text-stone-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={feedbackForm.email}
                      onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                      placeholder="budi@email.com"
                      className="w-full p-2 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded text-stone-900 dark:text-stone-100"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 dark:text-stone-300 mb-1">
                      Pasal yang Ditanggapi
                    </label>
                    <input
                      type="text"
                      value={feedbackForm.articleTarget}
                      onChange={(e) => setFeedbackForm({ ...feedbackForm, articleTarget: e.target.value })}
                      placeholder="Contoh: Pasal 4 ayat (2) mengenai luasan lahan usaha"
                      className="w-full p-2 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded text-stone-900 dark:text-stone-100"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 dark:text-stone-300 mb-1">
                      Masukan & Pendapat Hukum <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={feedbackForm.opinion}
                      onChange={(e) => setFeedbackForm({ ...feedbackForm, opinion: e.target.value })}
                      placeholder="Uraikan saran perbaikan rumusan norma atau implikasi teknis lapangan..."
                      className="w-full p-2 bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded text-stone-900 dark:text-stone-100"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveConsultationDoc(null)}
                      className="px-3 py-2 border border-stone-300 dark:border-stone-700 rounded text-stone-600 dark:text-stone-300"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold rounded flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim Masukan</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
