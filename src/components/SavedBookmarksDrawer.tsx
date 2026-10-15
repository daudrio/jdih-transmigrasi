import React from 'react';
import { X, Bookmark, Trash2, ExternalLink, FileText, Download } from 'lucide-react';
import { Regulation } from '../types/jdih';
import { useThemeAndA11y } from '../context/ThemeAndA11yContext';

interface SavedBookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  regulations: Regulation[];
  onSelectRegulation: (reg: Regulation) => void;
}

export const SavedBookmarksDrawer: React.FC<SavedBookmarksDrawerProps> = ({
  isOpen,
  onClose,
  regulations,
  onSelectRegulation
}) => {
  const { bookmarks, toggleBookmark, announce } = useThemeAndA11y();

  if (!isOpen) return null;

  const bookmarkedRegulations = regulations.filter((r) => bookmarks.includes(r.id));

  const handleExportList = () => {
    if (bookmarkedRegulations.length === 0) return;
    const text = bookmarkedRegulations
      .map(
        (r, i) =>
          `${i + 1}. ${r.typeName} Nomor ${r.number} Tahun ${r.year} tentang ${r.shortTitle} (${r.status}) - ${r.sourceGazette}`
      )
      .join('\n\n');
    const blob = new Blob([`DAFTAR KOLEKSI REGULASI TERSIMPAN - JDIH KEMENTERIAN TRANSMIGRASI RI\n\n${text}`], {
      type: 'text/plain;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `koleksi-jdih-transmigrasi-${new Date().toISOString().slice(0, 10)}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    announce('Daftar koleksi berhasil diekspor');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Koleksi Regulasi Tersimpan"
      className="fixed inset-0 z-50 overflow-hidden bg-stone-950/70 backdrop-blur-xs flex justify-end"
    >
      <div className="bg-white dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-50">
                Regulasi Tersimpan
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                {bookmarkedRegulations.length} dokumen dalam daftar bacaan
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 rounded hover:bg-stone-100 dark:hover:bg-stone-800"
            aria-label="Tutup daftar tersimpan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {bookmarkedRegulations.length === 0 ? (
            <div className="text-center py-16 text-stone-500 dark:text-stone-400">
              <Bookmark className="w-8 h-8 text-stone-300 dark:text-stone-700 mx-auto mb-2" />
              <p className="text-xs">Belum ada regulasi yang disimpan.</p>
              <p className="text-[11px] text-stone-400 mt-1">
                Klik ikon "Simpan" pada kartu atau detail dokumen untuk menambahkan ke daftar ini.
              </p>
            </div>
          ) : (
            bookmarkedRegulations.map((reg) => (
              <div
                key={reg.id}
                className="bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 rounded-lg p-3.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 mb-1">
                    <span className="font-semibold text-emerald-800 dark:text-emerald-400">
                      {reg.type} No. {reg.number}/{reg.year}
                    </span>
                    <span className={reg.status === 'Berlaku' ? 'text-emerald-700 font-medium' : 'text-rose-600 font-medium'}>
                      {reg.status}
                    </span>
                  </div>

                  <h4 className="font-serif font-semibold text-xs text-stone-900 dark:text-stone-100 leading-snug line-clamp-2 mb-2">
                    {reg.title}
                  </h4>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-stone-200/60 dark:border-stone-700/60 text-xs">
                  <button
                    onClick={() => {
                      onSelectRegulation(reg);
                      onClose();
                    }}
                    className="font-semibold text-emerald-800 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <FileText className="w-3 h-3" />
                    <span>Buka Naskah</span>
                  </button>

                  <button
                    onClick={() => toggleBookmark(reg.id)}
                    className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                    title="Hapus dari daftar simpan"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {bookmarkedRegulations.length > 0 && (
          <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-center justify-between text-xs">
            <button
              onClick={handleExportList}
              className="px-3 py-1.5 border border-stone-300 dark:border-stone-700 rounded text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Ekspor Daftar (.txt)</span>
            </button>

            <button
              onClick={onClose}
              className="px-3.5 py-1.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium rounded hover:bg-stone-800 transition-colors"
            >
              Tutup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
