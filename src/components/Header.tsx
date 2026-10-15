import React, { useState } from 'react';
import { 
  Search, 
  Bookmark, 
  Award, 
  Monitor, 
  ChevronDown, 
  FileEdit, 
  Scale, 
  Globe, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { useThemeAndA11y } from '../context/ThemeAndA11yContext';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  onOpenScoreboard?: () => void;
  onOpenKiosk?: () => void;
  onOpenSelfEval?: () => void;
  onSelectPembentukanSubmenu?: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenBookmarks,
  onOpenScoreboard,
  onOpenKiosk,
  onOpenSelfEval,
  onSelectPembentukanSubmenu
}) => {
  const { bookmarks } = useThemeAndA11y();
  const [isPembentukanDropdownOpen, setIsPembentukanDropdownOpen] = useState(false);

  const pembentukanSubmenus = [
    { id: 'all', label: 'Semua Dokumen Pembentukan', desc: 'Daftar terpadu tahapan perancangan' },
    { id: 'progsun', label: 'Program Penyusunan (Progsun/Propem 2026)', desc: 'Rencana legislasi prioritas tahun 2026' },
    { id: 'naskah_urgensi', label: 'Naskah Akademik & Urgensi', desc: 'Landasan filosofis, sosiologis & yuridis' },
    { id: 'rancangan', label: 'Rancangan PUU (RPermen Transmigrasi)', desc: 'Draft regulasi dalam tahap perancangan' },
    { id: 'risalah', label: 'Risalah Notulensi Harmonisasi', desc: 'Berita acara harmonisasi bersama Kemenkumham' },
    { id: 'partisipasi_publik', label: 'Kanal Partisipasi Publik Online', desc: 'Uji publik dan masukan masyarakat terbuka' },
    { id: 'manjau_ae', label: 'Hasil Pemantauan & Analisis-Evaluasi (AE)', desc: 'Rekomendasi Manjau & evaluasi efektivitas hukum' },
    { id: 'kajian', label: 'Kajian & Penelitian Hukum', desc: 'Hasil riset hukum ketransmigrasian nasional' },
  ];

  const handleSubmenuClick = (subId: string) => {
    setIsPembentukanDropdownOpen(false);
    setActiveTab('pembentukan');
    if (onSelectPembentukanSubmenu) {
      onSelectPembentukanSubmenu(subId);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 xl:gap-6 px-4 sm:px-6 py-2.5">
        
        {/* Zone 1: Brand Wordmark with Modern Emblem */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('katalog')}
            className="flex items-center gap-2.5 text-left group whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-800 to-teal-950 flex items-center justify-center text-white shadow-sm ring-1 ring-emerald-600/30 group-hover:scale-105 transition-transform">
              <Scale className="w-4 h-4 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 font-serif group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  JDIH Kemtrans RI
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40 dark:border-emerald-700/40">
                  RESMI
                </span>
              </div>
              <span className="text-[10px] text-stone-500 dark:text-stone-400 block -mt-0.5 leading-tight font-sans">
                Kementerian Transmigrasi RI
              </span>
            </div>
          </button>

          {/* Quick Indicator Badge to Open Evaluation Scoreboard with Pulse */}
          {onOpenScoreboard && (
            <button
              onClick={onOpenScoreboard}
              className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-all cursor-pointer shadow-2xs hover:scale-102"
              title="Lihat Evaluasi & Indikator Penilaian JDIHN 2026"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Award className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
              <span>JDIHN 2026: Kategori AA (100)</span>
            </button>
          )}
        </div>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Navigasi Utama Portal JDIH"
          className="hidden lg:flex items-center gap-4 xl:gap-5 text-xs xl:text-sm font-medium text-stone-600 dark:text-stone-300"
        >
          {/* Produk Hukum Link */}
          <button
            onClick={() => setActiveTab('katalog')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'katalog'
                ? 'text-emerald-700 dark:text-emerald-400 font-bold border-b-2 border-emerald-600 dark:border-emerald-400'
                : 'hover:text-stone-900 dark:hover:text-stone-50'
            }`}
            aria-current={activeTab === 'katalog' ? 'page' : undefined}
          >
            Produk Hukum
          </button>

          {/* Pembentukan PUU (Menu Mandiri dengan Dropdown Submenu) */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPembentukanDropdownOpen(true)}
            onMouseLeave={() => setIsPembentukanDropdownOpen(false)}
          >
            <button
              onClick={() => {
                setActiveTab('pembentukan');
                setIsPembentukanDropdownOpen(!isPembentukanDropdownOpen);
              }}
              className={`flex items-center gap-1 whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
                activeTab === 'pembentukan'
                  ? 'text-emerald-700 dark:text-emerald-400 font-bold border-b-2 border-emerald-600 dark:border-emerald-400'
                  : 'hover:text-stone-900 dark:hover:text-stone-50'
              }`}
              aria-haspopup="true"
              aria-expanded={isPembentukanDropdownOpen}
            >
              <span>Pembentukan PUU</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isPembentukanDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isPembentukanDropdownOpen && (
              <div 
                className="absolute left-0 top-full mt-1 w-84 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                role="menu"
                aria-label="Submenu Pembentukan Peraturan Perundang-undangan"
              >
                <div className="px-3 py-1.5 mb-1 border-b border-stone-100 dark:border-stone-800 text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                  Tahapan & Dokumen Pembentukan PUU
                </div>
                {pembentukanSubmenus.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSubmenuClick(item.id)}
                    className="w-full text-left px-3 py-2 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors flex flex-col group cursor-pointer"
                    role="menuitem"
                  >
                    <span className="text-xs font-semibold text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                      {item.label}
                    </span>
                    <span className="text-[10px] text-stone-500 dark:text-stone-400 line-clamp-1">
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Putusan & Yurisprudensi */}
          <button
            onClick={() => setActiveTab('putusan')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'putusan'
                ? 'text-emerald-700 dark:text-emerald-400 font-bold border-b-2 border-emerald-600 dark:border-emerald-400'
                : 'hover:text-stone-900 dark:hover:text-stone-50'
            }`}
            aria-current={activeTab === 'putusan' ? 'page' : undefined}
          >
            Putusan & Yurisprudensi
          </button>

          {/* Terjemahan English */}
          <button
            onClick={() => setActiveTab('terjemahan')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'terjemahan'
                ? 'text-emerald-700 dark:text-emerald-400 font-bold border-b-2 border-emerald-600 dark:border-emerald-400'
                : 'hover:text-stone-900 dark:hover:text-stone-50'
            }`}
            aria-current={activeTab === 'terjemahan' ? 'page' : undefined}
          >
            Terjemahan English
          </button>

          {/* Diseminasi Media */}
          <button
            onClick={() => setActiveTab('diseminasi')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'diseminasi'
                ? 'text-emerald-700 dark:text-emerald-400 font-bold border-b-2 border-emerald-600 dark:border-emerald-400'
                : 'hover:text-stone-900 dark:hover:text-stone-50'
            }`}
            aria-current={activeTab === 'diseminasi' ? 'page' : undefined}
          >
            Diseminasi Media
          </button>

          {/* Statistik & API */}
          <button
            onClick={() => setActiveTab('statistik')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'statistik'
                ? 'text-emerald-700 dark:text-emerald-400 font-bold border-b-2 border-emerald-600 dark:border-emerald-400'
                : 'hover:text-stone-900 dark:hover:text-stone-50'
            }`}
            aria-current={activeTab === 'statistik' ? 'page' : undefined}
          >
            Statistik & API
          </button>

          {/* Layanan & SKM */}
          <button
            onClick={() => setActiveTab('layanan')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'layanan'
                ? 'text-emerald-700 dark:text-emerald-400 font-bold border-b-2 border-emerald-600 dark:border-emerald-400'
                : 'hover:text-stone-900 dark:hover:text-stone-50'
            }`}
            aria-current={activeTab === 'layanan' ? 'page' : undefined}
          >
            Layanan & SKM
          </button>

          {/* Bookmarks */}
          <button
            onClick={onOpenBookmarks}
            className="flex items-center gap-1 whitespace-nowrap shrink-0 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-50 transition-colors py-1"
            title="Lihat Regulasi Tersimpan"
          >
            <Bookmark className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Tersimpan</span>
            {bookmarks.length > 0 && (
              <span className="text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                ({bookmarks.length})
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: Actions (Kios Onsite, Evaluasi Mandiri & Search) */}
        <div className="flex items-center gap-2 shrink-0">
          {onOpenKiosk && (
            <button
              onClick={onOpenKiosk}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-emerald-600/30 dark:border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/40 rounded-lg text-emerald-900 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-xs font-semibold transition-all hover:scale-102 cursor-pointer shadow-2xs"
              title="Buka Simulasi Kios Elektronik & Pojok JDIH"
            >
              <Monitor className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Kios Onsite</span>
            </button>
          )}

          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-emerald-800 to-teal-900 hover:from-emerald-700 hover:to-teal-800 rounded-lg transition-all whitespace-nowrap shrink-0 shadow-sm hover:shadow hover:scale-102 cursor-pointer"
            aria-label="Cari Dokumen Hukum"
          >
            <Search className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Cari</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.2 bg-white/20 text-white rounded text-[10px] font-mono font-normal">
              /
            </kbd>
          </button>
        </div>

      </div>
    </header>
  );
};
