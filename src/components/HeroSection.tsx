import React from 'react';
import { 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Scale, 
  FileText, 
  BookOpen, 
  FileEdit, 
  Globe2, 
  Monitor, 
  Award, 
  Sparkles,
  TrendingUp,
  Clock,
  Layers
} from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  onPerformSearch: () => void;
  onSelectQuickTag: (tag: string) => void;
  onNavigateTab?: (tab: string) => void;
  onOpenScoreboard?: () => void;
  onOpenKiosk?: () => void;
  onSelectRegulationById?: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  selectedYear,
  setSelectedYear,
  onPerformSearch,
  onSelectQuickTag,
  onNavigateTab,
  onOpenScoreboard,
  onOpenKiosk,
  onSelectRegulationById
}) => {
  const quickKeywords = [
    'Transmigrasi Patriot 2026',
    'Hak Pengelolaan Lahan (HPL)',
    'Sertifikat Hak Milik (SHM)',
    'Pakaian Dinas 2026',
    'Reforma Agraria',
    'Putusan MK No. 34'
  ];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPerformSearch();
    }
  };

  const interactiveFeatures = [
    {
      id: 'katalog',
      title: 'Katalog Regulasi 2026',
      desc: 'Permen Trans No. 1–4/2026, Perpres 142/2024, & UU',
      badge: '4 PUU Baru',
      icon: FileText,
      color: 'emerald',
      action: () => {
        if (onNavigateTab) onNavigateTab('katalog');
        const elem = document.getElementById('katalog-section');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'pembentukan',
      title: 'Pembentukan PUU',
      desc: 'Progsun 2026, Naskah Urgensi, & Risalah Harmonisasi',
      badge: '6 Submenu',
      icon: FileEdit,
      color: 'amber',
      action: () => {
        if (onNavigateTab) onNavigateTab('pembentukan');
        const elem = document.getElementById('katalog-section');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'putusan',
      title: 'Putusan & Monografi',
      desc: 'Yurisprudensi MK, amar sengketa agraria, & telaah',
      badge: 'Terverifikasi',
      icon: Scale,
      color: 'indigo',
      action: () => {
        if (onNavigateTab) onNavigateTab('putusan');
        const elem = document.getElementById('katalog-section');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'terjemahan',
      title: 'Official Translation',
      desc: 'Naskah terjemahan resmi bahasa Inggris Ditjen PP',
      badge: 'Bilingual',
      icon: Globe2,
      color: 'sky',
      action: () => {
        if (onNavigateTab) onNavigateTab('terjemahan');
        const elem = document.getElementById('katalog-section');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'kiosk',
      title: 'Kios Elektronik & Pojok JDIH',
      desc: 'Simulasi layar sentuh interaktif & layanan lobi fisik',
      badge: 'Simulasi Layar',
      icon: Monitor,
      color: 'teal',
      action: () => {
        if (onOpenKiosk) onOpenKiosk();
      }
    },
    {
      id: 'evaluasi',
      title: 'Matriks Evaluasi JDIHN',
      desc: 'Transparansi pemenuhan 4 variabel penilaian nasional',
      badge: 'Skor 100 / AA',
      icon: Award,
      color: 'emerald',
      action: () => {
        if (onOpenScoreboard) onOpenScoreboard();
      }
    }
  ];

  return (
    <section className="relative border-b border-stone-200/80 dark:border-stone-800/80 bg-radial-hero transition-colors overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/5 dark:bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12 relative z-10">
        
        {/* Spotlight Pill: Flagship 2026 Policy */}
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-950/70 border border-emerald-300/60 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200 text-xs shadow-2xs hover:bg-emerald-200/80 transition-colors">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="font-semibold">Regulasi Unggulan 2026:</span>
          <span className="text-stone-700 dark:text-stone-300">Permen Trans No. 3/2026 tentang Transmigrasi Patriot</span>
          <button
            onClick={() => {
              if (onSelectRegulationById) onSelectRegulationById('permen-trans-3-2026');
              else if (onNavigateTab) onNavigateTab('katalog');
            }}
            className="font-bold underline text-emerald-800 dark:text-emerald-300 hover:text-emerald-950 ml-1 flex items-center gap-0.5 cursor-pointer"
          >
            Lihat Naskah <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Hero Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8">
          
          {/* Left Column: Heading, Context, and Integrated Search */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-xs tracking-wider uppercase font-bold text-emerald-800 dark:text-emerald-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
              Kementerian Transmigrasi Republik Indonesia
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 dark:text-stone-50 tracking-tight leading-tight mb-4 [text-wrap:balance]">
              Pusat Dokumentasi & <br className="hidden sm:inline" />
              <span className="text-emerald-800 dark:text-emerald-400">Informasi Hukum Terpadu</span>
            </h1>

            <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              Portal resmi produk hukum, naskah akademik, risalah harmonisasi, dan telaah peradilan agraria transmigrasi nasional yang terintegrasi standar nasional JDIHN.
            </p>

            {/* High-Impact Modern Search Hub */}
            <div className="bg-white/95 dark:bg-stone-900/95 border border-stone-300/80 dark:border-stone-700/80 rounded-xl p-2.5 shadow-md transition-all focus-within:ring-2 focus-within:ring-emerald-600 focus-within:border-emerald-600 mb-4 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1 flex items-center">
                  <Search className="w-4 h-4 text-emerald-700 dark:text-emerald-400 absolute left-3" aria-hidden="true" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Cari judul, nomor, tahun, kata kunci (misal: Transmigrasi Patriot, SHM)..."
                    className="w-full pl-9 pr-3 py-2 text-sm bg-transparent text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-hidden"
                    aria-label="Pencarian Regulasi JDIH"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 mr-2 px-1 font-semibold"
                      aria-label="Hapus kata kunci pencarian"
                    >
                      Batal
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-stone-200 dark:border-stone-800 pt-2 sm:pt-0 sm:pl-2">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="text-xs bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 py-2 px-2.5 rounded-lg border-0 focus:ring-1 focus:ring-emerald-600 font-medium"
                    aria-label="Filter Bentuk Regulasi"
                  >
                    <option value="ALL">Semua Bentuk</option>
                    <option value="PERMEN">Permen Trans (4)</option>
                    <option value="PERPRES">Perpres (1)</option>
                    <option value="UU">Undang-Undang (1)</option>
                    <option value="PP">Peraturan Pemerintah (1)</option>
                    <option value="KEPMEN">Keputusan Menteri (1)</option>
                    <option value="PUTUSAN">Putusan MK (1)</option>
                    <option value="MONOGRAFI">Monografi Hukum</option>
                  </select>

                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="text-xs bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 py-2 px-2 rounded-lg border-0 focus:ring-1 focus:ring-emerald-600 font-medium"
                    aria-label="Filter Tahun Regulasi"
                  >
                    <option value="ALL">Semua Tahun</option>
                    <option value="2026">2026 (Terbaru)</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2021">2021</option>
                  </select>

                  <button
                    onClick={onPerformSearch}
                    className="bg-gradient-to-r from-emerald-800 to-teal-900 hover:from-emerald-700 hover:to-teal-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-xs hover:shadow hover:scale-102 cursor-pointer"
                  >
                    <span>Cari</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Topic Chips */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400">
              <span className="font-semibold text-stone-800 dark:text-stone-200 mr-1">Topik Populer:</span>
              {quickKeywords.map((tag) => (
                <button
                  key={tag}
                  onClick={() => onSelectQuickTag(tag)}
                  className="px-2 py-0.5 rounded-md bg-stone-100/90 dark:bg-stone-800/90 hover:bg-emerald-100 dark:hover:bg-emerald-950/70 hover:text-emerald-900 dark:hover:text-emerald-300 text-stone-700 dark:text-stone-300 transition-colors border border-stone-200/60 dark:border-stone-700/60 cursor-pointer text-[11px]"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Presentation with Layered Card */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full overflow-hidden rounded-xl border border-stone-200/90 dark:border-stone-800/90 bg-stone-100 dark:bg-stone-800 shadow-lg relative group aspect-16/10">
              <img
                src="/src/assets/images/hero_transmigrasi_legal_1792042732508.jpg"
                alt="Ruang Arsip dan Dokumentasi Hukum Resmi Kementerian Transmigrasi RI"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.img-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              
              {/* Fallback Container */}
              <div className="img-fallback hidden absolute inset-0 bg-stone-800 text-stone-200 p-6 flex flex-col justify-end">
                <BookOpen className="w-8 h-8 text-emerald-400 mb-2" />
                <h4 className="font-serif text-lg font-bold">Ruang Dokumentasi Hukum</h4>
                <p className="text-xs text-stone-400">Pusat Data Regulasi Ketransmigrasian Indonesia</p>
              </div>

              {/* Curatorial Scrim & Live Indicator */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/95 via-stone-950/60 to-transparent p-4 sm:p-5 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white">
                    Terverifikasi JDIHN
                  </span>
                  <span className="text-[11px] text-stone-300">Update Oktober 2026</span>
                </div>
                <p className="text-xs font-serif italic text-stone-100 leading-snug">
                  "Menegakkan kepastian hukum hak atas tanah pemukiman dan memajukan kemandirian transmigran berkeadilan."
                </p>
                <div className="flex items-center gap-2 text-[11px] text-stone-300 mt-2">
                  <span>Biro Hukum & Organisasi</span>
                  <span aria-hidden="true">·</span>
                  <span>Gedung Kementerian Transmigrasi RI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Card Intuitive Quick Discovery Hub (Gamechanger for intuitive exploration) */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Layanan & Fitur Unggulan JDIH
            </h2>
            <span className="text-[11px] text-stone-400 dark:text-stone-500">Pilih modul untuk akses instan</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {interactiveFeatures.map((feat) => {
              const IconComp = feat.icon;
              return (
                <button
                  key={feat.id}
                  onClick={feat.action}
                  className="flex flex-col text-left p-3.5 rounded-xl border border-stone-200/90 dark:border-stone-800/90 bg-white/80 dark:bg-stone-900/80 hover:bg-white dark:hover:bg-stone-850 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 group cursor-pointer backdrop-blur-xs"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-1.5 py-0.2 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                      {feat.badge}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-1 mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-2 leading-tight">
                    {feat.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live KPI & Trust Strip (Modern Minimalist & Vibrant) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-4 rounded-xl border border-stone-200/80 dark:border-stone-800/80 bg-white/60 dark:bg-stone-900/60 backdrop-blur-xs shadow-2xs">
          
          <div className="flex items-center gap-3 p-2 border-r border-stone-200/80 dark:border-stone-800/80 last:border-0">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 tabular-nums leading-none block">
                1,248
              </span>
              <span className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight block mt-0.5">
                Total Dokumen Regulasi
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 border-r border-stone-200/80 dark:border-stone-800/80 last:border-0">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-emerald-700 dark:text-emerald-400 tabular-nums leading-none block">
                94.2%
              </span>
              <span className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight block mt-0.5">
                Tingkat Keberlakuan Aktif
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 border-r border-stone-200/80 dark:border-stone-800/80 last:border-0">
            <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 tabular-nums leading-none block">
                0.28s
              </span>
              <span className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight block mt-0.5">
                Kecepatan Temu Kembali
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-xl sm:text-2xl font-serif font-bold text-emerald-800 dark:text-emerald-400">
                  Kategori AA
                </span>
                <span className="text-[10px] font-bold px-1 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                  100 Poin
                </span>
              </div>
              <span className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight block mt-0.5">
                Standar Penilaian JDIHN 2026
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
