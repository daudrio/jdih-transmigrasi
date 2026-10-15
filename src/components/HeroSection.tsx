import React from 'react';
import { Search, Filter, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  onPerformSearch: () => void;
  onSelectQuickTag: (tag: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  selectedYear,
  setSelectedYear,
  onPerformSearch,
  onSelectQuickTag
}) => {
  const quickKeywords = [
    'HPL Transmigrasi',
    'Sertifikat Hak Milik (SHM)',
    'Revitalisasi Kawasan',
    'Pelayanan Minimal TSM',
    'Reforma Agraria'
  ];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPerformSearch();
    }
  };

  return (
    <section className="border-b border-stone-200 dark:border-stone-800 bg-stone-50/60 dark:bg-stone-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        {/* Two-column split: Text & Search Left, Focal Institutional Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Heading, Context, and Integrated Search */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Curatorial Kicker */}
            <div className="text-xs tracking-widest uppercase font-semibold text-emerald-800 dark:text-emerald-400 mb-2">
              Kementerian Transmigrasi Republik Indonesia
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 dark:text-stone-50 tracking-tight leading-tight mb-4 [text-wrap:balance]">
              Jaringan Dokumentasi & Informasi Hukum
            </h1>

            <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              Akses terbuka peraturan perundang-undangan, keputusan menteri, naskah akademik, dan telaah yurisprudensi pembangunan kawasan transmigrasi nasional yang terintegrasi JDIHN.
            </p>

            {/* Integrated Search Box */}
            <div className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-lg p-2 shadow-xs transition-colors mb-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1 flex items-center">
                  <Search className="w-4 h-4 text-stone-400 dark:text-stone-500 absolute left-3" aria-hidden="true" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ketik judul regulasi, nomor, tahun, atau subjek (contoh: HPL Transmigrasi)..."
                    className="w-full pl-9 pr-3 py-2 text-sm bg-transparent text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-hidden"
                    aria-label="Pencarian Regulasi JDIH"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 mr-2 px-1"
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
                    className="text-xs bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 py-2 px-2.5 rounded border-0 focus:ring-1 focus:ring-emerald-600"
                    aria-label="Filter Bentuk Regulasi"
                  >
                    <option value="ALL">Semua Bentuk</option>
                    <option value="UU">Undang-Undang (UU)</option>
                    <option value="PP">Peraturan Pemerintah (PP)</option>
                    <option value="PERPRES">Perpres</option>
                    <option value="PERMEN">Permen Transmigrasi</option>
                    <option value="KEPMEN">Keputusan Menteri</option>
                    <option value="SE">Surat Edaran</option>
                    <option value="PUTUSAN">Putusan MK</option>
                    <option value="MONOGRAFI">Monografi Hukum</option>
                  </select>

                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="text-xs bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 py-2 px-2 rounded border-0 focus:ring-1 focus:ring-emerald-600"
                    aria-label="Filter Tahun Regulasi"
                  >
                    <option value="ALL">Semua Tahun</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2021">2021</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2014">2014</option>
                    <option value="2009">2009</option>
                  </select>

                  <button
                    onClick={onPerformSearch}
                    className="bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white text-xs font-semibold px-4 py-2 rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
                  >
                    <span>Cari</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Keyword Suggestions (Clean unboxed inline links) */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 dark:text-stone-400">
              <span className="font-medium text-stone-700 dark:text-stone-300">Topik Populer:</span>
              {quickKeywords.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <button
                    onClick={() => onSelectQuickTag(tag)}
                    className="hover:text-emerald-700 dark:hover:text-emerald-400 underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                  {idx < quickKeywords.length - 1 && <span aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Presentation */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full overflow-hidden rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800 shadow-sm relative group aspect-16/10">
              <img
                src="/src/assets/images/hero_transmigrasi_legal_1792042732508.jpg"
                alt="Ruang Arsip dan Dokumentasi Hukum Resmi Kementerian Transmigrasi RI"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container if image fails
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

              {/* Curatorial Scrim & Caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-transparent p-4 text-white">
                <p className="text-xs font-serif italic text-stone-200 leading-snug">
                  "Menegakkan kepastian hukum hak atas tanah pemukiman dan memajukan kemandirian transmigran berkeadilan."
                </p>
                <div className="flex items-center gap-2 text-[11px] text-stone-300 mt-1">
                  <span>Dokumentasi Resmi JDIH</span>
                  <span aria-hidden="true">·</span>
                  <span>Biro Hukum & Organisasi Kemtrans</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-column KPI strip below the hero split (Mandatory Layout Pattern) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-stone-200 dark:border-stone-800">
          <div className="border-r border-stone-200 dark:border-stone-800 last:border-0 pr-4">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 tabular-nums">
              1,248
            </span>
            <span className="text-xs text-stone-500 dark:text-stone-400 leading-tight block mt-0.5">
              Total Dokumen Regulasi
            </span>
          </div>

          <div className="border-r border-stone-200 dark:border-stone-800 last:border-0 pr-4">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-emerald-700 dark:text-emerald-400 tabular-nums">
              94.2%
            </span>
            <span className="text-xs text-stone-500 dark:text-stone-400 leading-tight block mt-0.5">
              Tingkat Keberlakuan Aktif
            </span>
          </div>

          <div className="border-r border-stone-200 dark:border-stone-800 last:border-0 pr-4">
            <span className="block text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 tabular-nums">
              0.28s
            </span>
            <span className="text-xs text-stone-500 dark:text-stone-400 leading-tight block mt-0.5">
              Waktu Temu Pencarian Naskah
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-400 font-serif font-bold text-xl sm:text-2xl">
              <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Bintang 5</span>
            </div>
            <span className="text-xs text-stone-500 dark:text-stone-400 leading-tight block mt-0.5">
              Indeks Standar JDIHN Nasional
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
