import React, { useState } from 'react';
import { 
  Scale, 
  BookOpen, 
  Download, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Building2, 
  Users, 
  Gavel,
  ExternalLink 
} from 'lucide-react';
import { JUDICIAL_DECISIONS, MONOGRAPHS_AND_ARTICLES } from '../data/regulationsData';
import { CourtJudicialDecision, MonographDocument } from '../types/jdih';
import { useThemeAndA11y } from '../context/ThemeAndA11yContext';

export const JudicialDecisionsSection: React.FC = () => {
  const { announce } = useThemeAndA11y();
  const [activeTab, setActiveTab] = useState<'putusan' | 'monografi'>('putusan');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected for modal detail
  const [selectedDecision, setSelectedDecision] = useState<CourtJudicialDecision | null>(null);
  const [selectedMonograph, setSelectedMonograph] = useState<MonographDocument | null>(null);

  const filteredDecisions = JUDICIAL_DECISIONS.filter((d) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      d.title.toLowerCase().includes(q) ||
      d.caseNumber.toLowerCase().includes(q) ||
      d.parties.applicant.toLowerCase().includes(q) ||
      d.parties.respondent.toLowerCase().includes(q) ||
      d.courtType.toLowerCase().includes(q)
    );
  });

  const filteredMonographs = MONOGRAPHS_AND_ARTICLES.filter((m) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      m.author.toLowerCase().includes(q) ||
      m.subject.some((s) => s.toLowerCase().includes(q))
    );
  });

  const handleDownloadDecision = (dec: CourtJudicialDecision) => {
    announce(`Mengunduh Putusan ${dec.caseNumber}`);
    const blob = new Blob([
      `SALINAN PUTUSAN PERADILAN - JDIH KEMENTERIAN TRANSMIGRASI RI\n\nLembaga: ${dec.courtType}\nNomor Perkara: ${dec.caseNumber}\nJudul: ${dec.title}\nTanggal: ${dec.rulingDate}\n\nPara Pihak:\n- Pemohon/Penggugat: ${dec.parties.applicant}\n- Termohon/Tergugat: ${dec.parties.respondent}\n\nAmar Putusan:\n${dec.verdictSummary}\n\nDiunduh melalui Portal Resmi JDIH Kemtrans RI`
    ], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Putusan-${dec.caseNumber.replace(/\//g, '-')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadMonograph = (mono: MonographDocument) => {
    announce(`Mengunduh ${mono.title}`);
    const blob = new Blob([
      `MONOGRAFI / ARTIKEL HUKUM - JDIH KEMENTERIAN TRANSMIGRASI RI\n\nJudul: ${mono.title}\nPenulis: ${mono.author}\nPenerbit: ${mono.publisher} (${mono.city}, ${mono.year})\nISBN/ISSN: ${mono.isbn || '-'}\n\nAbstrak:\n${mono.summary}\n\nDiunduh melalui Portal Resmi JDIH Kemtrans RI`
    ], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Monografi-${mono.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-semibold tracking-widest uppercase text-emerald-800 dark:text-emerald-400 mb-1">
            Yurisprudensi & Dokumen Hukum Lain · Variabel II
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-50 mb-2">
            Putusan Peradilan, Monografi & Artikel Hukum
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
            Penyajian dokumen hukum non-peraturan dengan metadata terspesialisasi sesuai standar penetapan JDIHN 2026.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-b border-stone-200 dark:border-stone-800 mb-6 justify-center">
          <div className="flex gap-2 p-1 bg-stone-100 dark:bg-stone-900 rounded-lg text-xs font-medium">
            <button
              onClick={() => setActiveTab('putusan')}
              className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
                activeTab === 'putusan'
                  ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-semibold shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              <Gavel className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
              <span>Putusan Pengadilan & Lembaga Quasi Peradilan ({JUDICIAL_DECISIONS.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('monografi')}
              className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
                activeTab === 'monografi'
                  ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-semibold shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
              <span>Monografi & Artikel Hukum ({MONOGRAPHS_AND_ARTICLES.length})</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6 flex items-center gap-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-3 rounded-lg text-xs">
          <Search className="w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              activeTab === 'putusan'
                ? 'Cari nomor perkara, nama pemohon, atau pengadilan...'
                : 'Cari judul monografi, penulis, atau topik kajian...'
            }
            className="w-full bg-transparent text-stone-900 dark:text-stone-100 focus:outline-hidden"
          />
        </div>

        {/* TAB 1: PUTUSAN PERADILAN (Metadata Khusus Peradilan) */}
        {activeTab === 'putusan' && (
          <div className="space-y-4">
            {filteredDecisions.map((dec) => (
              <article
                key={dec.id}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
              >
                {/* Judicial Specific Zero-Pill Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs">
                  <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                    <span className="font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wide">
                      {dec.courtType}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono font-bold text-stone-800 dark:text-stone-200">
                      No. {dec.caseNumber}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Putusan {dec.rulingDate}</span>
                  </div>

                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    dec.rulingStatus.includes('Menolak')
                      ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300'
                      : 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300'
                  }`}>
                    Amar: {dec.rulingStatus}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-50 mb-3 leading-snug">
                  {dec.title}
                </h3>

                {/* Specific Parties Block (Bukan metadata peraturan) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700 text-xs mb-3">
                  <div>
                    <span className="text-stone-500 block text-[11px]">Pemohon / Penggugat:</span>
                    <strong className="text-stone-900 dark:text-stone-100">{dec.parties.applicant}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block text-[11px]">Termohon / Tergugat:</span>
                    <strong className="text-stone-900 dark:text-stone-100">{dec.parties.respondent}</strong>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif leading-relaxed mb-4">
                  <strong>Ringkasan Amar: </strong>{dec.verdictSummary}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100 dark:border-stone-800 text-xs">
                  <div className="text-stone-500">
                    <span>Sumber: {dec.sourceGazette}</span>
                    {dec.testedLawReference && (
                      <>
                        <span className="mx-2" aria-hidden="true">·</span>
                        <span>Uji Norma: {dec.testedLawReference}</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedDecision(dec)}
                      className="px-3 py-1.5 font-semibold text-emerald-800 dark:text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Detail Putusan Lengkap</span>
                    </button>

                    <button
                      onClick={() => handleDownloadDecision(dec)}
                      className="px-3 py-1.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded font-semibold flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Unduh Amar</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* TAB 2: MONOGRAFI & ARTIKEL HUKUM */}
        {activeTab === 'monografi' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMonographs.map((mono) => (
              <article
                key={mono.id}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 shadow-xs flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-2">
                    <span className="font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wide">
                      {mono.type}
                    </span>
                    <span>Tahun {mono.year}</span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-50 leading-snug mb-2">
                    {mono.title}
                  </h3>

                  <div className="text-xs text-stone-600 dark:text-stone-300 space-y-1 mb-3">
                    <div><strong>Penulis:</strong> {mono.author}</div>
                    <div><strong>Penerbit:</strong> {mono.publisher} ({mono.city})</div>
                    {mono.isbn && <div><strong>Nomor Standar:</strong> {mono.isbn}</div>}
                  </div>

                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3 mb-4">
                    {mono.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-stone-100 dark:border-stone-800 text-xs">
                  <span className="text-stone-500 font-mono">{mono.pages} Halaman · {mono.fileSize}</span>
                  <button
                    onClick={() => handleDownloadMonograph(mono)}
                    className="px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold rounded flex items-center gap-1 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh Naskah</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Modal Detail Putusan */}
        {selectedDecision && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="decision-modal-title"
            className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg shadow-2xl max-w-2xl w-full p-6 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between pb-3 border-b border-stone-200 dark:border-stone-800 mb-4">
                <div>
                  <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider block">
                    {selectedDecision.courtType} · Direktori Yurisprudensi JDIH
                  </span>
                  <h3 id="decision-modal-title" className="font-serif font-bold text-base text-stone-900 dark:text-stone-50">
                    Nomor Perkara: {selectedDecision.caseNumber}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedDecision(null)}
                  className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 p-1"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                  {selectedDecision.title}
                </h4>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-stone-50 dark:bg-stone-800 p-3 rounded text-xs">
                  <div>
                    <dt className="text-stone-500">Tanggal Pengucapan Putusan:</dt>
                    <dd className="font-semibold text-stone-900 dark:text-stone-100">{selectedDecision.rulingDate}</dd>
                  </div>
                  <div>
                    <dt className="text-stone-500">Status Amar:</dt>
                    <dd className="font-semibold text-emerald-700 dark:text-emerald-400">{selectedDecision.rulingStatus}</dd>
                  </div>
                  <div>
                    <dt className="text-stone-500">Pihak Pemohon / Penggugat:</dt>
                    <dd className="font-semibold text-stone-900 dark:text-stone-100">{selectedDecision.parties.applicant}</dd>
                  </div>
                  <div>
                    <dt className="text-stone-500">Pihak Termohon / Tergugat:</dt>
                    <dd className="font-semibold text-stone-900 dark:text-stone-100">{selectedDecision.parties.respondent}</dd>
                  </div>
                </dl>

                <div>
                  <h5 className="font-semibold text-stone-800 dark:text-stone-200 mb-1">Pertimbangan & Amar Resmi:</h5>
                  <p className="font-serif text-xs leading-relaxed text-stone-700 dark:text-stone-300 p-3 bg-stone-100/60 dark:bg-stone-950 rounded border border-stone-200 dark:border-stone-800">
                    {selectedDecision.verdictSummary}
                  </p>
                </div>

                {selectedDecision.benchJudges && (
                  <div className="text-xs text-stone-500">
                    <strong>Majelis Pemeriksa:</strong> {selectedDecision.benchJudges.join('; ')}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 mt-4 border-t border-stone-100 dark:border-stone-800">
                <button
                  onClick={() => setSelectedDecision(null)}
                  className="px-3 py-1.5 border border-stone-300 dark:border-stone-700 rounded text-xs"
                >
                  Tutup
                </button>
                <button
                  onClick={() => handleDownloadDecision(selectedDecision)}
                  className="px-4 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh Dokumen Putusan</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
