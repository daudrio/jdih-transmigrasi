import React from 'react';
import { Search, Bookmark } from 'lucide-react';
import { useThemeAndA11y } from '../context/ThemeAndA11yContext';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenBookmarks
}) => {
  const { bookmarks } = useThemeAndA11y();

  const navLinks = [
    { id: 'katalog', label: 'Produk Hukum' },
    { id: 'silsilah', label: 'Silsilah Regulasi' },
    { id: 'statistik', label: 'Statistik JDIH' },
    { id: 'layanan', label: 'Layanan & SKM' },
    { id: 'berita', label: 'Warta Hukum' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Single text element wordmark in display face */}
        <button
          onClick={() => setActiveTab('katalog')}
          className="text-left group whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-sm"
        >
          <span className="text-base sm:text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 font-serif group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
            JDIH Kemtrans RI
          </span>
          <span className="sr-only">Jaringan Dokumentasi dan Informasi Hukum Kementerian Transmigrasi Republik Indonesia</span>
        </button>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav
          aria-label="Navigasi Utama Portal JDIH"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-stone-600 dark:text-stone-300"
        >
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  isActive
                    ? 'text-emerald-700 dark:text-emerald-400 font-semibold border-b-2 border-emerald-600 dark:border-emerald-400'
                    : 'hover:text-stone-900 dark:hover:text-stone-50'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </button>
            );
          })}

          {/* Bookmarks link */}
          <button
            onClick={onOpenBookmarks}
            className="flex items-center gap-1.5 whitespace-nowrap shrink-0 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-50 transition-colors py-1"
            title="Lihat Regulasi Tersimpan"
          >
            <Bookmark className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Tersimpan</span>
            {bookmarks.length > 0 && (
              <span className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                ({bookmarks.length})
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-white bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 dark:hover:bg-emerald-600 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-xs"
            aria-label="Cari Dokumen Hukum"
          >
            <Search className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Cari Regulasi</span>
            <kbd className="hidden lg:inline-block px-1 py-0.2 bg-emerald-900/50 text-emerald-200 rounded text-[10px] font-mono">
              /
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
};
