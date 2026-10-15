import React from 'react';
import { 
  X, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  FileCheck2, 
  Scale, 
  Server, 
  Sparkles,
  ShieldCheck 
} from 'lucide-react';

interface EvaluationScoreboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const EvaluationScoreboardModal: React.FC<EvaluationScoreboardModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection
}) => {
  if (!isOpen) return null;

  const comparisonTable = [
    {
      variable: 'Variabel 1',
      indicator: 'Dokumen Hukum Lain & PUU 2026',
      before: 'Dokumen hukum lain belum lengkap; PUU 2026 perlu diselaraskan Progsun.',
      after: 'Disediakan naskah Permen 1-4/2026, Progsun 2026, Naskah Urgensi, Risalah Harmonisasi, dan Hasil Manjau/AE lengkap.',
      status: 'Tuntas (100%)'
    },
    {
      variable: 'Variabel 1',
      indicator: 'Metadata & Abstrak PUU',
      before: 'Metadata & abstrak belum konsisten, terutama pada status pencabutan/perubahan.',
      after: 'Pengisian status konsisten (Mengubah, Dicabut, Peraturan Pelaksanaan) + format abstrak 3 bagian pokok.',
      status: 'Tuntas (100%)'
    },
    {
      variable: 'Variabel 2',
      indicator: 'Menu Pembentukan PUU',
      before: 'Hanya menu umum biasa, belum memiliki submenu terpisah yang lengkap.',
      after: 'Menu mandiri Pembentukan PUU dengan 6 submenu lengkap + kanal Partisipasi Publik uji sahih online.',
      status: 'Tuntas (100%)'
    },
    {
      variable: 'Variabel 2',
      indicator: 'Detail Putusan & Monografi',
      before: 'Detail putusan masih memakai metadata peraturan; monografi belum tersedia.',
      after: 'Pemisahan metadata khusus peradilan (Lembaga, Amar, Pihak, Putusan) + katalog monografi/artikel.',
      status: 'Tuntas (100%)'
    },
    {
      variable: 'Variabel 3',
      indicator: 'Integrasi API JDIHN',
      before: 'Perlu memastikan URL API selalu aktif dan sinkronisasi tercatat berkala.',
      after: 'Endpoint API terintegrasi aktif dengan log sinkronisasi terupdate dan tombol sinkronisasi berkala.',
      status: 'Tuntas (100%)'
    },
    {
      variable: 'Variabel 4',
      indicator: 'Layanan Onsite & Terjemahan',
      before: 'Layanan onsite & terjemahan bahasa Inggris untuk PUU baru belum tersedia.',
      after: 'Simulasi interaktif Kios Elektronik sentuh + Pojok JDIH fisik + naskah terjemahan resmi Official Translation.',
      status: 'Tuntas (100%)'
    }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="eval-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 lg:p-6"
    >
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Award className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
            <div>
              <h2 id="eval-modal-title" className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-50">
                Matriks Tindak Lanjut Evaluasi & Indikator JDIHN 2026
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Penyelarasan 4 Variabel Penilaian Kinerja Anggota JDIHN Kemenko Infra & BPHN Kemenkumham
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded"
            aria-label="Tutup Matriks Penilaian"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs sm:text-sm">
          
          {/* Score Target Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
              <span className="text-[11px] text-stone-500 block">Variabel I: Dokumen & Info</span>
              <div className="text-2xl font-serif font-bold text-emerald-800 dark:text-emerald-400 mt-0.5">
                58 <span className="text-xs text-stone-500">/ 58 Poin</span>
              </div>
              <span className="text-[10px] text-emerald-600 font-semibold">100% Terpenuhi</span>
            </div>

            <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
              <span className="text-[11px] text-stone-500 block">Variabel II: Aksesibilitas</span>
              <div className="text-2xl font-serif font-bold text-emerald-800 dark:text-emerald-400 mt-0.5">
                27 <span className="text-xs text-stone-500">/ 27 Poin</span>
              </div>
              <span className="text-[10px] text-emerald-600 font-semibold">100% Terpenuhi</span>
            </div>

            <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
              <span className="text-[11px] text-stone-500 block">Variabel III: Integrasi API</span>
              <div className="text-2xl font-serif font-bold text-emerald-800 dark:text-emerald-400 mt-0.5">
                5 <span className="text-xs text-stone-500">/ 5 Poin</span>
              </div>
              <span className="text-[10px] text-emerald-600 font-semibold">100% Terpenuhi</span>
            </div>

            <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
              <span className="text-[11px] text-stone-500 block">Variabel IV: Pengembangan</span>
              <div className="text-2xl font-serif font-bold text-emerald-800 dark:text-emerald-400 mt-0.5">
                10 <span className="text-xs text-stone-500">/ 10 Poin</span>
              </div>
              <span className="text-[10px] text-emerald-600 font-semibold">100% Terpenuhi</span>
            </div>
          </div>

          {/* Target Grade Badge */}
          <div className="bg-emerald-800 text-white p-4 rounded-lg flex items-center justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-emerald-200 font-mono">Proyeksi Kinerja JDIHN 2026</span>
              <div className="text-xl sm:text-2xl font-serif font-bold">
                Kategori AA (Nilai 100 / 100)
              </div>
              <p className="text-xs text-emerald-100 mt-0.5">
                Predikat Anggota JDIHN Terbaik Nasional Kategori Kementerian Negara
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white text-emerald-900 font-bold font-serif text-xl flex items-center justify-center shadow-md">
              AA
            </div>
          </div>

          {/* Before & After Action Table */}
          <div>
            <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 mb-3">
              Tabel Matriks Tindak Lanjut Temuan Evaluasi (Slide 19 Prioritas Tindak Lanjut)
            </h3>

            <div className="border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-b border-stone-200 dark:border-stone-700">
                  <tr>
                    <th className="p-3 font-semibold w-24">Variabel</th>
                    <th className="p-3 font-semibold">Temuan Awal (BPHN)</th>
                    <th className="p-3 font-semibold">Tindak Lanjut Pada Website Hasil Redesign</th>
                    <th className="p-3 font-semibold w-28 text-center">Hasil</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-stone-800 bg-white dark:bg-stone-900">
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-stone-800/40">
                      <td className="p-3 font-semibold text-emerald-800 dark:text-emerald-400">{row.variable}</td>
                      <td className="p-3 text-stone-600 dark:text-stone-300">
                        <div className="font-medium text-stone-800 dark:text-stone-200">{row.indicator}</div>
                        <div className="text-[11px] text-rose-600 dark:text-rose-400 mt-0.5">{row.before}</div>
                      </td>
                      <td className="p-3 text-stone-700 dark:text-stone-200 leading-relaxed">
                        <div className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{row.after}</span>
                        </div>
                      </td>
                      <td className="p-3 text-center">
                        <span className="inline-block bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-[10px] px-2 py-0.5 rounded">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-center justify-between text-xs">
          <span className="text-stone-500">
            Dipersiapkan untuk Pelaporan Tahunan JDIHN Desember 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold rounded"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
