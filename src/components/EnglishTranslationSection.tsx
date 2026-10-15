import React from 'react';
import { Globe, Download, CheckCircle2, Clock, ShieldCheck, FileText, ArrowRight } from 'lucide-react';
import { ENGLISH_TRANSLATION_DOCUMENTS } from '../data/regulationsData';
import { EnglishTranslationDocument } from '../types/jdih';
import { useThemeAndA11y } from '../context/ThemeAndA11yContext';

export const EnglishTranslationSection: React.FC = () => {
  const { announce } = useThemeAndA11y();

  const handleDownload = (doc: EnglishTranslationDocument) => {
    announce(`Downloading English translation for ${doc.englishTitle}`);
    const blob = new Blob([
      `OFFICIAL ENGLISH TRANSLATION OF INDONESIAN LEGISLATION\n\nMINISTRY OF TRANSMIGRATION OF THE REPUBLIC OF INDONESIA\n\nTitle: ${doc.englishTitle}\nOriginal Title: ${doc.originalTitle}\nNumber / Year: No. ${doc.number} Year ${doc.year}\n\nTranslation Status: ${doc.isOfficialTranslation ? 'Certified as an Official Translation' : 'Official Translation Concept Submitted'}\nCertification / Reference: ${doc.certificationNumber}\nCertifying Authority: ${doc.translatorAuthority}\n\nDownloaded via JDIH Ministry of Transmigration RI (jdih.transmigrasi.go.id)`
    ], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `English-Translation-${doc.type}-${doc.number}-${doc.year}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-semibold tracking-widest uppercase text-emerald-800 dark:text-emerald-400 mb-1">
            Layanan Internasional · Variabel IV JDIHN
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-50 mb-2">
            Peraturan Terjemahan Resmi (English Translation)
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
            Penyediaan naskah terjemahan resmi peraturan perundang-undangan Republik Indonesia bidang ketransmigrasian yang telah disahkan (*Certified Official Translation*) oleh Ditjen Peraturan Perundang-undangan.
          </p>
        </div>

        {/* Verification Status Banner */}
        <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-emerald-900 dark:text-emerald-300">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>
              Seluruh naskah terjemahan diterbitkan dengan standar terminologi hukum resmi Ditjen PP Kemenkumham RI untuk mendukung kepastian investasi dan kemitraan internasional.
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="font-mono font-semibold text-emerald-800 dark:text-emerald-400">
              {ENGLISH_TRANSLATION_DOCUMENTS.length} Naskah Terdaftar
            </span>
          </div>
        </div>

        {/* Translation Cards */}
        <div className="space-y-4">
          {ENGLISH_TRANSLATION_DOCUMENTS.map((doc) => (
            <article
              key={doc.id}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs">
                <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                  <span className="font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wide">
                    {doc.type}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">No. {doc.number}/{doc.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{doc.promulgatedDate}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {doc.isOfficialTranslation ? (
                    <span className="flex items-center gap-1 text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded text-[11px] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Official Translation Certified</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-amber-800 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/80 px-2 py-0.5 rounded text-[11px] font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Konsep Terjemahan Diajukan</span>
                    </span>
                  )}
                </div>
              </div>

              {/* English Title Dominant */}
              <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-50 mb-1 leading-snug">
                {doc.englishTitle}
              </h3>

              {/* Original Indonesian Title */}
              <p className="text-xs text-stone-500 dark:text-stone-400 italic mb-3">
                Judul Asli (Bahasa Indonesia): {doc.originalTitle}
              </p>

              {/* Certification metadata */}
              <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700 text-xs text-stone-600 dark:text-stone-300 space-y-1 mb-4">
                <div><strong>Otoritas Pengesahan:</strong> {doc.translatorAuthority}</div>
                <div><strong>Nomor Sertifikasi / Surat Permohonan:</strong> <span className="font-mono">{doc.certificationNumber}</span></div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-stone-100 dark:border-stone-800 text-xs">
                <span className="text-stone-500 font-mono">Format: PDF Resmi ({doc.fileSize})</span>
                <button
                  onClick={() => handleDownload(doc)}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold rounded flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download English Version</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
