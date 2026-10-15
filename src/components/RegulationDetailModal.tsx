import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Volume2, 
  VolumeX, 
  Bookmark, 
  BookmarkCheck, 
  Copy, 
  Check, 
  GitCompare, 
  FileText, 
  Layers, 
  Scale, 
  Eye, 
  ZoomIn, 
  ZoomOut, 
  Share2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Regulation } from '../types/jdih';
import { useThemeAndA11y } from '../context/ThemeAndA11yContext';

interface RegulationDetailModalProps {
  regulation: Regulation | null;
  onClose: () => void;
  onSelectRelated?: (regulationId: string) => void;
  onOpenCompare?: (regId: string) => void;
}

export const RegulationDetailModal: React.FC<RegulationDetailModalProps> = ({
  regulation,
  onClose,
  onSelectRelated,
  onOpenCompare
}) => {
  const { 
    toggleBookmark, 
    isBookmarked, 
    addToCompare, 
    speakText, 
    stopSpeaking, 
    isSpeaking,
    announce 
  } = useThemeAndA11y();

  const [activeTab, setActiveTab] = useState<'articles' | 'metadata' | 'considerations' | 'pdf' | 'relations'>('articles');
  const [copiedClause, setCopiedClause] = useState<string | null>(null);
  const [copiedCitation, setCopiedCitation] = useState<boolean>(false);
  const [pdfZoom, setPdfZoom] = useState<number>(100);
  const [articleFilterQuery, setArticleFilterQuery] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isSpeaking) stopSpeaking();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isSpeaking, stopSpeaking]);

  if (!regulation) return null;

  const isFav = isBookmarked(regulation.id);

  const handleCopyClause = (clauseText: string, clauseNumber: string) => {
    navigator.clipboard.writeText(`${regulation.shortTitle} - ${clauseNumber}:\n${clauseText}`);
    setCopiedClause(clauseNumber);
    announce(`Isi ${clauseNumber} disalin ke papan klip`);
    setTimeout(() => setCopiedClause(null), 2500);
  };

  const handleCopyCitation = () => {
    const citation = `Republik Indonesia. (${regulation.year}). ${regulation.title}. ${regulation.sourceGazette}. Jakarta: Kementerian Transmigrasi RI.`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    announce('Sitasi hukum berhasil disalin');
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    announce(`Memulai unduhan berkas ${regulation.typeName} Nomor ${regulation.number} Tahun ${regulation.year}`);
    // Simulate instantaneous official PDF download trigger
    const blob = new Blob([
      `SALINAN RESMI DOKUMEN JDIH KEMENTERIAN TRANSMIGRASI RI\n\n${regulation.title}\n\nNomor: ${regulation.number}/${regulation.year}\nDiundangkan: ${regulation.promulgatedDate}\n\n${regulation.summary}\n\n---\nDiunduh melalui Portal Resmi JDIH Kementerian Transmigrasi RI (jdih.transmigrasi.go.id)`
    ], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `JDIH-KEMTRANS-${regulation.type}-${regulation.number}-${regulation.year}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const filteredArticles = regulation.articles.filter((art) => {
    if (!articleFilterQuery.trim()) return true;
    const q = articleFilterQuery.toLowerCase();
    return (
      art.number.toLowerCase().includes(q) ||
      (art.chapter && art.chapter.toLowerCase().includes(q)) ||
      art.content.toLowerCase().includes(q) ||
      (art.points && art.points.some((p) => p.toLowerCase().includes(q)))
    );
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-regulation-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 lg:p-6"
    >
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Zero-Pill Header Metadata */}
            <div className="flex flex-wrap items-center gap-x-2 text-xs text-stone-500 dark:text-stone-400 mb-1">
              <span className="font-semibold text-emerald-800 dark:text-emerald-400 tracking-wider uppercase">
                {regulation.typeName}
              </span>
              <span aria-hidden="true">·</span>
              <span>Nomor {regulation.number} Tahun {regulation.year}</span>
              <span aria-hidden="true">·</span>
              <span className={regulation.status === 'Berlaku' ? 'text-emerald-700 dark:text-emerald-400 font-medium' : 'text-rose-600 dark:text-rose-400'}>
                Status: {regulation.status}
              </span>
            </div>

            <h2
              id="modal-regulation-title"
              className="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-stone-50 leading-snug line-clamp-2"
            >
              {regulation.title}
            </h2>
          </div>

          {/* Close & Header Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Audio Reader button */}
            <button
              onClick={() => {
                if (isSpeaking) {
                  stopSpeaking();
                } else {
                  speakText(`${regulation.title}. Ringkasan: ${regulation.summary}`);
                }
              }}
              className={`p-2 rounded transition-colors flex items-center gap-1.5 text-xs ${
                isSpeaking
                  ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-medium'
                  : 'hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300'
              }`}
              title={isSpeaking ? 'Hentikan Pembacaan Audio' : 'Dengarkan Ringkasan Dokumen'}
              aria-label="Bacakan Ringkasan Regulasi"
            >
              {isSpeaking ? <VolumeX className="w-4 h-4 text-amber-600 animate-pulse" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{isSpeaking ? 'Berhenti' : 'Dengarkan'}</span>
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => toggleBookmark(regulation.id)}
              className={`p-2 rounded transition-colors ${
                isFav
                  ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40'
                  : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
              title={isFav ? 'Hapus dari Tersimpan' : 'Simpan Regulasi'}
              aria-label="Simpan Regulasi"
            >
              {isFav ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 rounded hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
              title="Tutup Modal (Esc)"
              aria-label="Tutup jendela dokumen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Navigation Strip */}
        <div className="border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 px-6 overflow-x-auto">
          <div className="flex items-center gap-6 min-w-max text-xs sm:text-sm font-medium">
            <button
              onClick={() => setActiveTab('articles')}
              className={`py-3 border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === 'articles'
                  ? 'border-emerald-700 text-emerald-800 dark:text-emerald-400 font-semibold'
                  : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Naskah Pasal-Pasal ({regulation.articles.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('metadata')}
              className={`py-3 border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === 'metadata'
                  ? 'border-emerald-700 text-emerald-800 dark:text-emerald-400 font-semibold'
                  : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Metadata & JDIHN</span>
            </button>

            <button
              onClick={() => setActiveTab('considerations')}
              className={`py-3 border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === 'considerations'
                  ? 'border-emerald-700 text-emerald-800 dark:text-emerald-400 font-semibold'
                  : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>Konsiderans & Dasar Hukum</span>
            </button>

            <button
              onClick={() => setActiveTab('pdf')}
              className={`py-3 border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === 'pdf'
                  ? 'border-emerald-700 text-emerald-800 dark:text-emerald-400 font-semibold'
                  : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Salinan Naskah Resmi (PDF)</span>
            </button>

            {regulation.relatedRegulations.length > 0 && (
              <button
                onClick={() => setActiveTab('relations')}
                className={`py-3 border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
                  activeTab === 'relations'
                    ? 'border-emerald-700 text-emerald-800 dark:text-emerald-400 font-semibold'
                    : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                }`}
              >
                <GitCompare className="w-4 h-4" />
                <span>Silsilah Terkait ({regulation.relatedRegulations.length})</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-stone-50/50 dark:bg-stone-950/40">
          
          {/* TAB 1: ARTICLES */}
          {activeTab === 'articles' && (
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Summary Callout without thick left accent border */}
              <div className="bg-stone-100/80 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1">
                  Abstrak / Pokok Muatan Peraturan
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {regulation.summary}
                </p>
              </div>

              {/* In-Document Article Search Filter */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={articleFilterQuery}
                  onChange={(e) => setArticleFilterQuery(e.target.value)}
                  placeholder="Cari kata di dalam pasal (misal: 'Pasal 2', 'Hak Pengelolaan', 'SHM')..."
                  className="flex-1 text-xs bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded px-3 py-2 text-stone-900 dark:text-stone-100 focus:outline-hidden"
                />
                {articleFilterQuery && (
                  <button
                    onClick={() => setArticleFilterQuery('')}
                    className="text-xs text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 px-2 py-1"
                  >
                    Bersihkan
                  </button>
                )}
              </div>

              {/* Articles Stream */}
              <div className="space-y-6">
                {filteredArticles.map((art, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 shadow-xs"
                  >
                    {art.chapter && (
                      <div className="text-center font-serif font-bold text-xs sm:text-sm text-stone-800 dark:text-stone-200 uppercase tracking-wide border-b border-stone-100 dark:border-stone-800 pb-2 mb-3">
                        {art.chapter}
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif font-bold text-sm text-emerald-800 dark:text-emerald-400">
                        {art.number}
                      </span>
                      <button
                        onClick={() => handleCopyClause(art.content, art.number)}
                        className="text-xs text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 flex items-center gap-1 transition-colors"
                        title="Salin isi pasal ini"
                      >
                        {copiedClause === art.number ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600 font-medium">Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Salin Pasal</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-serif">
                      {art.content}
                    </p>

                    {art.points && art.points.length > 0 && (
                      <ul className="mt-3 space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300 pl-4 list-disc font-serif">
                        {art.points.map((pt, pIdx) => (
                          <li key={pIdx} className="leading-relaxed">
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: METADATA JDIHN */}
          {activeTab === 'metadata' && (
            <div className="max-w-3xl mx-auto bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6">
              <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-50 pb-3 border-b border-stone-200 dark:border-stone-800 mb-4">
                Informasi Katalog & Parameter JDIHN
              </h3>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-xs sm:text-sm">
                <div>
                  <dt className="text-stone-500 dark:text-stone-400">Tajuk Entri Utama (T.E.U)</dt>
                  <dd className="font-semibold text-stone-900 dark:text-stone-100 mt-0.5">{regulation.t_e_u}</dd>
                </div>

                <div>
                  <dt className="text-stone-500 dark:text-stone-400">Bentuk Produk Hukum</dt>
                  <dd className="font-semibold text-stone-900 dark:text-stone-100 mt-0.5">{regulation.typeName}</dd>
                </div>

                <div>
                  <dt className="text-stone-500 dark:text-stone-400">Nomor & Tahun Penetapan</dt>
                  <dd className="font-semibold text-stone-900 dark:text-stone-100 mt-0.5 font-mono">
                    Nomor {regulation.number} Tahun {regulation.year}
                  </dd>
                </div>

                <div>
                  <dt className="text-stone-500 dark:text-stone-400">Status Keberlakuan</dt>
                  <dd className="font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5">{regulation.status}</dd>
                </div>

                <div>
                  <dt className="text-stone-500 dark:text-stone-400">Tanggal Pengundangan</dt>
                  <dd className="font-semibold text-stone-900 dark:text-stone-100 mt-0.5">{regulation.promulgatedDate}</dd>
                </div>

                <div>
                  <dt className="text-stone-500 dark:text-stone-400">Tanggal Penetapan</dt>
                  <dd className="font-semibold text-stone-900 dark:text-stone-100 mt-0.5">{regulation.enactedDate}</dd>
                </div>

                <div>
                  <dt className="text-stone-500 dark:text-stone-400">Penandatangan</dt>
                  <dd className="font-semibold text-stone-900 dark:text-stone-100 mt-0.5">{regulation.signee}</dd>
                </div>

                <div>
                  <dt className="text-stone-500 dark:text-stone-400">Tempat Penetapan</dt>
                  <dd className="font-semibold text-stone-900 dark:text-stone-100 mt-0.5">{regulation.location}</dd>
                </div>

                <div className="sm:col-span-2">
                  <dt className="text-stone-500 dark:text-stone-400">Sumber Publikasi / Lembaran Negara</dt>
                  <dd className="font-semibold text-stone-900 dark:text-stone-100 mt-0.5 font-serif">{regulation.sourceGazette}</dd>
                </div>

                <div className="sm:col-span-2">
                  <dt className="text-stone-500 dark:text-stone-400">Bidang Hukum</dt>
                  <dd className="font-semibold text-stone-900 dark:text-stone-100 mt-0.5">{regulation.legalField}</dd>
                </div>

                <div className="sm:col-span-2">
                  <dt className="text-stone-500 dark:text-stone-400">Kata Kunci Subjek</dt>
                  <dd className="font-medium text-stone-800 dark:text-stone-200 mt-1 flex flex-wrap gap-2">
                    {regulation.subject.map((s, idx) => (
                      <span key={idx} className="bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded text-xs">
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          )}

          {/* TAB 3: CONSIDERATIONS */}
          {activeTab === 'considerations' && (
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Menimbang */}
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6">
                <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-50 mb-3 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-emerald-700" />
                  <span>Konsiderans Menimbang</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                  {regulation.menimbang.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="font-semibold shrink-0 text-stone-400">{String.fromCharCode(97 + idx)}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mengingat */}
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6">
                <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-50 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-700" />
                  <span>Dasar Hukum Mengingat</span>
                </h4>
                <ol className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                  {regulation.mengingat.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="font-semibold shrink-0 text-stone-400">{idx + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {/* TAB 4: OFFICIAL DOCUMENT SIMULATOR (PDF VIEWER) */}
          {activeTab === 'pdf' && (
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              {/* PDF Viewer Controls Toolbar */}
              <div className="w-full bg-stone-800 text-stone-200 px-4 py-2 rounded-t-md flex items-center justify-between text-xs mb-0">
                <div className="flex items-center gap-3">
                  <span className="font-mono">Salinan_Resmi_{regulation.type}_{regulation.number}_{regulation.year}.pdf</span>
                  <span className="text-stone-400">|</span>
                  <span>Hal 1 dari 8</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPdfZoom((prev) => Math.max(75, prev - 10))}
                    className="p-1 hover:bg-stone-700 rounded transition-colors"
                    title="Perkecil Tampilan"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono tabular-nums">{pdfZoom}%</span>
                  <button
                    onClick={() => setPdfZoom((prev) => Math.min(150, prev + 10))}
                    className="p-1 hover:bg-stone-700 rounded transition-colors"
                    title="Perbesar Tampilan"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-stone-400">|</span>

                  <button
                    onClick={handlePrint}
                    className="p-1 hover:bg-stone-700 rounded transition-colors flex items-center gap-1"
                    title="Cetak Dokumen"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Cetak</span>
                  </button>

                  <button
                    onClick={handleDownload}
                    className="px-2 py-1 bg-emerald-700 hover:bg-emerald-600 text-white rounded transition-colors flex items-center gap-1"
                    title="Unduh Berkas PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh</span>
                  </button>
                </div>
              </div>

              {/* Simulated Paper Sheet */}
              <div
                style={{ transform: `scale(${pdfZoom / 100})`, transformOrigin: 'top center' }}
                className="w-full max-w-2xl bg-white text-stone-900 border border-stone-300 shadow-xl p-8 sm:p-12 font-serif min-h-[700px] transition-transform duration-150"
              >
                {/* Garuda Pancasila Header Symbol */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-2 opacity-90 flex items-center justify-center">
                    <img
                      src="/src/assets/images/legal_codex_document_1792042732792.jpg"
                      alt="Lambang Negara RI"
                      className="w-14 h-14 object-cover rounded-full border border-stone-300 shadow-xs"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold tracking-widest uppercase font-serif">
                    MENTERI TRANSMIGRASI
                  </h3>
                  <h4 className="text-sm font-semibold tracking-wider uppercase font-serif">
                    REPUBLIK INDONESIA
                  </h4>
                  <div className="w-24 h-0.5 bg-stone-900 mx-auto my-3" />
                  <p className="text-xs uppercase font-bold tracking-wider">
                    {regulation.typeName.toUpperCase()}
                  </p>
                  <p className="text-xs font-semibold">
                    NOMOR {regulation.number} TAHUN {regulation.year}
                  </p>
                  <p className="text-xs font-bold mt-2 uppercase tracking-wide max-w-lg mx-auto">
                    TENTANG
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wide max-w-lg mx-auto">
                    {regulation.shortTitle.toUpperCase()}
                  </p>
                </div>

                <div className="text-xs text-center font-bold tracking-widest my-4">
                  DENGAN RAHMAT TUHAN YANG MAHA ESA
                </div>

                <div className="text-xs text-center font-bold tracking-wider mb-4">
                  MENTERI TRANSMIGRASI REPUBLIK INDONESIA,
                </div>

                {/* Simulated clauses */}
                <div className="text-xs space-y-3 leading-relaxed text-justify">
                  <div>
                    <span className="font-bold">Menimbang: </span>
                    <span>bahwa untuk menjamin kepastian hukum dan percepatan pemenuhan hak transmigran...</span>
                  </div>
                  <div>
                    <span className="font-bold">Mengingat: </span>
                    <span>Undang-Undang Nomor 29 Tahun 2009 tentang Perubahan atas Undang-Undang Nomor 15 Tahun 1997...</span>
                  </div>
                  <div className="text-center font-bold py-2">MEMUTUSKAN:</div>
                  <div>
                    <span className="font-bold">Menetapkan: </span>
                    <span>{regulation.title.toUpperCase()}</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold">Pasal 1: </span>
                    <span>{regulation.articles[0]?.content || 'Ketentuan Umum tata kelola transmigrasi.'}</span>
                  </div>
                </div>

                {/* Official Signee Block */}
                <div className="mt-12 text-right text-xs pr-4">
                  <p>Ditetapkan di {regulation.location}</p>
                  <p>pada tanggal {regulation.enactedDate}</p>
                  <p className="font-bold mt-2">{regulation.signee.toUpperCase()},</p>
                  <div className="h-12 flex items-center justify-end">
                    <span className="font-script italic text-stone-500">[Tanda Tangan & Cap Sah]</span>
                  </div>
                  <p className="font-bold underline mt-1">KEMENTERIAN TRANSMIGRASI RI</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: RELATIONS & PELAKSANAAN & PEMBENTUKAN */}
          {activeTab === 'relations' && (
            <div className="max-w-3xl mx-auto space-y-6">
              {/* 1. Hubungan Regulasi */}
              <div>
                <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-50 mb-1">
                  Hubungan Regulasi & Silsilah Perubahan / Pencabutan
                </h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 mb-3">
                  Keterkaitan status keberlakuan yuridis dengan produk hukum lainnya:
                </p>

                <div className="space-y-2.5">
                  {regulation.relatedRegulations.length > 0 ? (
                    regulation.relatedRegulations.map((rel, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-3.5 flex items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-xs font-semibold mb-1">
                            <span className={`uppercase ${
                              rel.relationType === 'Mencabut' || rel.relationType === 'Dicabut Oleh'
                                ? 'text-rose-600 dark:text-rose-400'
                                : 'text-emerald-700 dark:text-emerald-400'
                            }`}>
                              {rel.relationType}
                            </span>
                            <span className="text-stone-400" aria-hidden="true">·</span>
                            <span className="text-stone-500 font-mono">Tahun {rel.year}</span>
                          </div>
                          <h5 className="font-serif font-semibold text-xs sm:text-sm text-stone-900 dark:text-stone-100">
                            {rel.title}
                          </h5>
                        </div>

                        {onSelectRelated && (
                          <button
                            onClick={() => onSelectRelated(rel.id)}
                            className="px-3 py-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded transition-colors whitespace-nowrap flex items-center gap-1 shrink-0"
                          >
                            <span>Buka</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="p-3 bg-stone-100 dark:bg-stone-800/50 rounded text-xs text-stone-500">
                      Tidak ada catatan peraturan yang mengubah atau dicabut oleh instrumen ini.
                    </div>
                  )}
                </div>
              </div>

              {/* 2. Peraturan Pelaksanaan (Memenuhi Temuan Slide 10) */}
              <div className="border-t border-stone-200 dark:border-stone-800 pt-4">
                <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-50 mb-1 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <span>Peraturan Pelaksanaan (Implementing Regulations)</span>
                </h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 mb-3">
                  Keputusan Menteri, Surat Edaran, atau petunjuk teknis yang diterbitkan sebagai turunan pelaksanaan:
                </p>

                <div className="space-y-2.5">
                  {regulation.implementingRegulations && regulation.implementingRegulations.length > 0 ? (
                    regulation.implementingRegulations.map((imp, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-3.5 flex items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-400 mb-0.5">
                            <span className="uppercase">Peraturan Pelaksanaan</span>
                            <span className="text-stone-400" aria-hidden="true">·</span>
                            <span className="text-stone-500 font-mono">Tahun {imp.year}</span>
                          </div>
                          <h5 className="font-serif font-semibold text-xs text-stone-900 dark:text-stone-100">
                            {imp.title}
                          </h5>
                        </div>

                        {onSelectRelated && (
                          <button
                            onClick={() => onSelectRelated(imp.id)}
                            className="px-3 py-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded transition-colors whitespace-nowrap flex items-center gap-1 shrink-0"
                          >
                            <span>Buka</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="p-3 bg-stone-100 dark:bg-stone-800/50 rounded text-xs text-stone-500">
                      Telah memenuhi ketentuan mandiri atau belum memerlukan aturan pelaksana lanjutan.
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Dokumen Terkait Pembentukan PUU (Memenuhi Temuan Slide 10) */}
              <div className="border-t border-stone-200 dark:border-stone-800 pt-4">
                <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-50 mb-1 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <span>Dokumen Pendukung Pembentukan PUU</span>
                </h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 mb-3">
                  Naskah Akademik, Naskah Urgensi, Risalah Rapat Harmonisasi, dan Hasil Analisis-Evaluasi (Hasil Manjau/AE):
                </p>

                <div className="space-y-2.5">
                  {regulation.lawMakingSupportDocs && regulation.lawMakingSupportDocs.length > 0 ? (
                    regulation.lawMakingSupportDocs.map((doc, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-3.5 flex items-center justify-between gap-4"
                      >
                        <div>
                          <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wide block">
                            {doc.type} ({doc.year})
                          </span>
                          <h5 className="font-serif font-semibold text-xs text-stone-900 dark:text-stone-100 mt-0.5">
                            {doc.title}
                          </h5>
                          <span className="text-[11px] text-stone-400">{doc.fileSize}</span>
                        </div>

                        <button
                          onClick={() => {
                            announce(`Mengunduh ${doc.title}`);
                            const blob = new Blob([`${doc.type}\nJudul: ${doc.title}\nTahun: ${doc.year}`], { type: 'text/plain;charset=utf-8' });
                            const url = URL.createObjectURL(blob);
                            const link = document.createElement('a');
                            link.href = url;
                            link.download = `${doc.type}-${doc.year}.txt`;
                            link.click();
                            URL.revokeObjectURL(url);
                          }}
                          className="px-3 py-1.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-xs font-semibold rounded flex items-center gap-1 shrink-0"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Unduh</span>
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="p-3 bg-stone-100 dark:bg-stone-800/50 rounded text-xs text-stone-500">
                      Tersedia dalam arsip naskah dinas biro hukum.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-3.5 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCitation}
              className="px-3 py-1.5 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 rounded transition-colors flex items-center gap-1.5"
              title="Salin sitasi format resmi JDIH"
            >
              {copiedCitation ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-medium">Sitasi Tersalin</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Salin Sitasi Dokumen</span>
                </>
              )}
            </button>

            {onOpenCompare && (
              <button
                onClick={() => {
                  addToCompare(regulation.id);
                  onOpenCompare(regulation.id);
                }}
                className="px-3 py-1.5 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 rounded transition-colors flex items-center gap-1.5"
              >
                <GitCompare className="w-3.5 h-3.5" />
                <span>Bandingkan Naskah</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-semibold rounded transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh Salinan Resmi (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
