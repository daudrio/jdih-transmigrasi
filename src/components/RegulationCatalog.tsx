import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Download, 
  Bookmark, 
  BookmarkCheck, 
  ExternalLink, 
  GitCompare, 
  SlidersHorizontal, 
  RotateCcw,
  LayoutList,
  LayoutGrid,
  Volume2,
  CheckCircle2,
  AlertCircle,
  FileCheck2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Regulation } from '../types/jdih';
import { useThemeAndA11y } from '../context/ThemeAndA11yContext';

interface RegulationCatalogProps {
  regulations: Regulation[];
  onSelectRegulation: (regulation: Regulation) => void;
  onOpenCompare: () => void;
  externalSearchQuery?: string;
  externalSelectedType?: string;
  externalSelectedYear?: string;
}

export const RegulationCatalog: React.FC<RegulationCatalogProps> = ({
  regulations,
  onSelectRegulation,
  onOpenCompare,
  externalSearchQuery = '',
  externalSelectedType = 'ALL',
  externalSelectedYear = 'ALL'
}) => {
  const { toggleBookmark, isBookmarked, addToCompare, comparisonList, speakText, announce } = useThemeAndA11y();

  // Internal Filter States
  const [filterType, setFilterType] = useState<string>(externalSelectedType);
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [filterYear, setFilterYear] = useState<string>(externalSelectedYear);
  const [filterSubject, setFilterSubject] = useState<string>('ALL');
  const [searchInternal, setSearchInternal] = useState<string>(externalSearchQuery);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'downloads' | 'views'>('newest');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  // Sync when props change from Hero search
  React.useEffect(() => {
    if (externalSearchQuery !== undefined) setSearchInternal(externalSearchQuery);
    if (externalSelectedType !== undefined) setFilterType(externalSelectedType);
    if (externalSelectedYear !== undefined) setFilterYear(externalSelectedYear);
  }, [externalSearchQuery, externalSelectedType, externalSelectedYear]);

  // Tab definitions with count calculation
  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: regulations.length };
    regulations.forEach((r) => {
      counts[r.type] = (counts[r.type] || 0) + 1;
    });
    return counts;
  }, [regulations]);

  const typeTabs: { id: string; label: string; count: number }[] = [
    { id: 'ALL', label: 'Semua Produk', count: typeCounts['ALL'] || 0 },
    { id: 'PERMEN', label: 'Permen Trans', count: typeCounts['PERMEN'] || 0 },
    { id: 'PERPRES', label: 'Perpres', count: typeCounts['PERPRES'] || 0 },
    { id: 'UU', label: 'Undang-Undang', count: typeCounts['UU'] || 0 },
    { id: 'PP', label: 'Peraturan Pemerintah', count: typeCounts['PP'] || 0 },
    { id: 'KEPMEN', label: 'Kepmen', count: typeCounts['KEPMEN'] || 0 },
    { id: 'PUTUSAN', label: 'Putusan MK', count: typeCounts['PUTUSAN'] || 0 },
    { id: 'MONOGRAFI', label: 'Monografi', count: typeCounts['MONOGRAFI'] || 0 }
  ];

  // Unique years & subjects for dropdown filters
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(regulations.map((r) => r.year))).sort((a, b) => b - a);
    return years;
  }, [regulations]);

  const availableSubjects = useMemo(() => {
    const subs = new Set<string>();
    regulations.forEach((r) => r.subject.forEach((s) => subs.add(s)));
    return Array.from(subs);
  }, [regulations]);

  // Filtering Logic
  const filteredRegulations = useMemo(() => {
    return regulations.filter((item) => {
      // Type filter
      if (filterType !== 'ALL' && item.type !== filterType) return false;

      // Status filter
      if (filterStatus !== 'ALL' && item.status !== filterStatus) return false;

      // Year filter
      if (filterYear !== 'ALL' && item.year.toString() !== filterYear) return false;

      // Subject filter
      if (filterSubject !== 'ALL' && !item.subject.includes(filterSubject)) return false;

      // Text query
      if (searchInternal.trim() !== '') {
        const q = searchInternal.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(q);
        const inNumber = item.number.toLowerCase().includes(q);
        const inYear = item.year.toString().includes(q);
        const inSummary = item.summary.toLowerCase().includes(q);
        const inSubjects = item.subject.some((s) => s.toLowerCase().includes(q));
        if (!inTitle && !inNumber && !inYear && !inSummary && !inSubjects) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'newest') return b.year - a.year || b.number.localeCompare(a.number);
      if (sortBy === 'oldest') return a.year - b.year;
      if (sortBy === 'downloads') return b.downloadCount - a.downloadCount;
      if (sortBy === 'views') return b.viewCount - a.viewCount;
      return 0;
    });
  }, [regulations, filterType, filterStatus, filterYear, filterSubject, searchInternal, sortBy]);

  const resetFilters = () => {
    setFilterType('ALL');
    setFilterStatus('ALL');
    setFilterYear('ALL');
    setFilterSubject('ALL');
    setSearchInternal('');
    setSortBy('newest');
  };

  const hasActiveFilters =
    filterType !== 'ALL' ||
    filterStatus !== 'ALL' ||
    filterYear !== 'ALL' ||
    filterSubject !== 'ALL' ||
    searchInternal.trim() !== '';

  const handleListenSummary = (e: React.MouseEvent, reg: Regulation) => {
    e.stopPropagation();
    announce(`Membacakan intisari ${reg.shortTitle || reg.title}`);
    speakText(`${reg.typeName} Nomor ${reg.number} Tahun ${reg.year}. Intisari: ${reg.summary}`);
  };

  // Type styling helpers
  const getTypeBadgeStyle = (type: string) => {
    switch (type) {
      case 'PERMEN':
        return 'text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 border-emerald-300/60 dark:border-emerald-800/60';
      case 'PERPRES':
        return 'text-indigo-800 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 border-indigo-300/60 dark:border-indigo-800/60';
      case 'UU':
      case 'PP':
        return 'text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/80 border-amber-300/60 dark:border-amber-800/60';
      case 'PUTUSAN':
        return 'text-purple-800 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/80 border-purple-300/60 dark:border-purple-800/60';
      default:
        return 'text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 border-stone-200 dark:border-stone-700';
    }
  };

  const getCardAccentBorder = (type: string) => {
    switch (type) {
      case 'PERMEN':
        return 'border-l-4 border-l-emerald-600 dark:border-l-emerald-500';
      case 'PERPRES':
        return 'border-l-4 border-l-indigo-600 dark:border-l-indigo-500';
      case 'UU':
      case 'PP':
        return 'border-l-4 border-l-amber-600 dark:border-l-amber-500';
      case 'PUTUSAN':
        return 'border-l-4 border-l-purple-600 dark:border-l-purple-500';
      default:
        return 'border-l-4 border-l-stone-400 dark:border-l-stone-600';
    }
  };

  return (
    <div className="py-6 transition-colors">
      
      {/* Interactive Document Type Segmented Control (Tabs with live counts) */}
      <div className="border-b border-stone-200/90 dark:border-stone-800/90 mb-6 pb-2 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max pb-1">
          {typeTabs.map((tab) => {
            const isActive = filterType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-800 to-teal-900 text-white shadow-sm scale-102'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800/80'
                }`}
                aria-pressed={isActive}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-stone-200/80 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modern Filter and Sorting Hub */}
      <div className="bg-white/95 dark:bg-stone-900/95 border border-stone-200/90 dark:border-stone-800/90 rounded-xl p-3.5 mb-6 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs backdrop-blur-xs">
        
        {/* Left Side: Filter Selectors */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-stone-700 dark:text-stone-300 font-bold mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
            <span>Saring:</span>
          </div>

          {/* Status filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg px-2.5 py-1.5 text-stone-800 dark:text-stone-200 focus:outline-hidden font-medium"
            aria-label="Filter Berdasarkan Status Keberlakuan"
          >
            <option value="ALL">Semua Status</option>
            <option value="Berlaku">🟢 Berlaku</option>
            <option value="Dicabut">🔴 Dicabut</option>
            <option value="Mengubah">🟡 Mengubah</option>
            <option value="Diubah">🟠 Diubah</option>
          </select>

          {/* Year filter */}
          <select
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg px-2.5 py-1.5 text-stone-800 dark:text-stone-200 focus:outline-hidden font-medium"
            aria-label="Filter Berdasarkan Tahun"
          >
            <option value="ALL">Semua Tahun</option>
            {availableYears.map((y) => (
              <option key={y} value={y.toString()}>
                Tahun {y}
              </option>
            ))}
          </select>

          {/* Subject filter */}
          <select
            value={filterSubject}
            onChange={(e) => setFilterSubject(e.target.value)}
            className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg px-2.5 py-1.5 text-stone-800 dark:text-stone-200 focus:outline-hidden max-w-48 truncate font-medium"
            aria-label="Filter Berdasarkan Subjek"
          >
            <option value="ALL">Semua Topik Subjek</option>
            {availableSubjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          {/* Reset button if filtered */}
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-emerald-800 dark:text-emerald-300 hover:text-emerald-950 px-2.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 font-semibold transition-colors cursor-pointer"
              title="Reset semua filter ke kondisi awal"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Bersihkan Filter</span>
            </button>
          )}
        </div>

        {/* Right Side: Sorting & View Mode */}
        <div className="flex items-center gap-3 ml-auto">
          <div className="flex items-center gap-1.5">
            <span className="text-stone-500 dark:text-stone-400 font-medium">Urutkan:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg px-2.5 py-1.5 text-stone-800 dark:text-stone-200 focus:outline-hidden font-medium"
              aria-label="Urutkan Regulasi"
            >
              <option value="newest">Tahun Terbaru</option>
              <option value="oldest">Tahun Terlama</option>
              <option value="downloads">Paling Banyak Diunduh</option>
              <option value="views">Paling Sering Dilihat</option>
            </select>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center border border-stone-200 dark:border-stone-700 rounded-lg p-0.5 bg-stone-50 dark:bg-stone-800">
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-stone-700 text-emerald-700 dark:text-emerald-300 shadow-xs'
                  : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
              }`}
              title="Tampilan Daftar (List)"
              aria-label="Tampilan Daftar Berurutan"
              aria-pressed={viewMode === 'list'}
            >
              <LayoutList className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-stone-700 text-emerald-700 dark:text-emerald-300 shadow-xs'
                  : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
              }`}
              title="Tampilan Kartu (Grid)"
              aria-label="Tampilan Kartu"
              aria-pressed={viewMode === 'grid'}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Catalog Results Header */}
      <div className="flex items-center justify-between mb-4 text-xs text-stone-600 dark:text-stone-400">
        <div className="flex items-center gap-1.5">
          <span>Menampilkan</span>
          <strong className="font-bold text-stone-900 dark:text-stone-100 tabular-nums px-1.5 py-0.2 rounded bg-stone-100 dark:bg-stone-800">
            {filteredRegulations.length}
          </strong>
          <span>dari {regulations.length} produk hukum</span>
          {searchInternal && (
            <span> untuk kata kunci <strong className="text-emerald-700 dark:text-emerald-400 font-bold">"{searchInternal}"</strong></span>
          )}
        </div>

        {/* Floating comparison badge if any items queued */}
        {comparisonList.length > 0 && (
          <button
            onClick={onOpenCompare}
            className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300 hover:underline cursor-pointer bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-300/40"
          >
            <GitCompare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Bandingkan ({comparisonList.length} dipilih)</span>
          </button>
        )}
      </div>

      {/* Empty State */}
      {filteredRegulations.length === 0 && (
        <div className="text-center py-16 px-4 bg-white/80 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 rounded-xl shadow-xs">
          <AlertCircle className="w-10 h-10 text-stone-400 dark:text-stone-500 mx-auto mb-3" />
          <h3 className="font-serif text-lg font-bold text-stone-800 dark:text-stone-200 mb-1">
            Tidak Ada Dokumen yang Cocok
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 max-w-md mx-auto mb-4">
            Tidak ditemukan produk hukum dengan kriteria pencarian yang Anda masukkan. Silakan periksa kembali kata kunci atau bersihkan filter.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 text-xs font-semibold bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg transition-colors cursor-pointer"
          >
            Bersihkan Filter
          </button>
        </div>
      )}

      {/* List View Rendering (Modern Minimalist, Clean & Alive) */}
      {viewMode === 'list' && filteredRegulations.length > 0 && (
        <div className="space-y-3.5">
          {filteredRegulations.map((reg) => {
            const isFav = isBookmarked(reg.id);
            const inCompare = comparisonList.includes(reg.id);

            return (
              <article
                key={reg.id}
                className={`bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800/90 rounded-xl p-4 sm:p-5 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 group ${getCardAccentBorder(reg.type)}`}
              >
                {/* Header Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-y-1 gap-x-2 text-xs text-stone-500 dark:text-stone-400 mb-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider border ${getTypeBadgeStyle(reg.type)}`}>
                      {reg.typeName} No. {reg.number}/{reg.year}
                    </span>

                    <span className="flex items-center gap-1 font-semibold text-stone-700 dark:text-stone-300">
                      {reg.status === 'Berlaku' && (
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                      )}
                      <span className={reg.status === 'Berlaku' ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-600'}>
                        {reg.status}
                      </span>
                    </span>

                    <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                    <span>Diundangkan: {reg.promulgatedDate}</span>

                    {reg.hasJudicialReview && (
                      <>
                        <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
                        <span className="text-purple-700 dark:text-purple-400 font-semibold">Ada Putusan MK</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[11px] text-stone-500 dark:text-stone-400">
                    <span>{reg.fileSize}</span>
                    <span aria-hidden="true">·</span>
                    <span>{reg.downloadCount.toLocaleString()} Unduhan</span>
                  </div>
                </div>

                {/* Primary Title Link */}
                <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 dark:text-stone-50 leading-snug mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  <button
                    onClick={() => onSelectRegulation(reg)}
                    className="text-left cursor-pointer hover:underline underline-offset-3"
                  >
                    {reg.title}
                  </button>
                </h3>

                {/* Summary Snippet */}
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-2 mb-3">
                  {reg.summary}
                </p>

                {/* Subject Tags as clean typographic text */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 mb-3">
                  <span className="text-stone-400 dark:text-stone-500 font-medium">Subjek:</span>
                  {reg.subject.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setFilterSubject(sub)}
                      className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors text-[11px] cursor-pointer"
                    >
                      {sub}
                    </button>
                  ))}
                </div>

                {/* Interactive Card Action Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100 dark:border-stone-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectRegulation(reg)}
                      className="px-3.5 py-1.5 font-bold text-white bg-gradient-to-r from-emerald-800 to-teal-900 hover:from-emerald-700 hover:to-teal-800 rounded-lg transition-all flex items-center gap-1.5 shadow-2xs hover:scale-102 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Buka Naskah & Pasal</span>
                    </button>

                    <button
                      onClick={(e) => handleListenSummary(e, reg)}
                      className="px-2.5 py-1.5 text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 hover:bg-emerald-50 hover:text-emerald-800 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 rounded-lg transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
                      title="Dengarkan pembacaan intisari regulasi suara Bahasa Indonesia"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="hidden sm:inline">Dengarkan Intisari</span>
                    </button>

                    <button
                      onClick={() => onSelectRegulation(reg)}
                      className="px-2.5 py-1.5 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                      title="Lihat Pratinjau Salinan Resmi PDF"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Compare Button */}
                    <button
                      onClick={() => addToCompare(reg.id)}
                      className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                        inCompare
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 font-bold border border-emerald-300/60'
                          : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800'
                      }`}
                      title={inCompare ? 'Sudah dalam antrian perbandingan' : 'Bandingkan pasal dengan regulasi lain'}
                      aria-label="Bandingkan Regulasi Ini"
                    >
                      <GitCompare className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{inCompare ? 'Terpilih' : 'Bandingkan'}</span>
                    </button>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={() => toggleBookmark(reg.id)}
                      className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                        isFav
                          ? 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 font-bold border border-amber-300/60'
                          : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800'
                      }`}
                      title={isFav ? 'Hapus dari koleksi tersimpan' : 'Simpan ke koleksi regulasi'}
                      aria-label="Simpan Regulasi"
                      aria-pressed={isFav}
                    >
                      {isFav ? <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" /> : <Bookmark className="w-3.5 h-3.5" />}
                      <span className="hidden sm:inline">{isFav ? 'Tersimpan' : 'Simpan'}</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Grid View Rendering (Modern Minimalist Cards) */}
      {viewMode === 'grid' && filteredRegulations.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRegulations.map((reg) => {
            const isFav = isBookmarked(reg.id);
            const inCompare = comparisonList.includes(reg.id);

            return (
              <article
                key={reg.id}
                className={`bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800/90 rounded-xl p-5 flex flex-col justify-between hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 group ${getCardAccentBorder(reg.type)}`}
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${getTypeBadgeStyle(reg.type)}`}>
                      {reg.type} No. {reg.number}/{reg.year}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-xs">
                      {reg.status === 'Berlaku' && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>}
                      <span className={reg.status === 'Berlaku' ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-600'}>
                        {reg.status}
                      </span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-serif font-bold text-stone-900 dark:text-stone-50 leading-snug mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    <button
                      onClick={() => onSelectRegulation(reg)}
                      className="text-left line-clamp-3 hover:underline underline-offset-2 cursor-pointer"
                    >
                      {reg.title}
                    </button>
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3 mb-4">
                    {reg.summary}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 border-t border-stone-100 dark:border-stone-800 pt-2 mb-3 flex items-center justify-between">
                    <span>{reg.promulgatedDate}</span>
                    <span className="font-mono">{reg.fileSize}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-stone-100 dark:border-stone-800">
                    <button
                      onClick={() => onSelectRegulation(reg)}
                      className="text-xs font-bold text-emerald-800 dark:text-emerald-300 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Detail & Pasal</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => handleListenSummary(e, reg)}
                        className="p-1.5 text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer"
                        title="Dengarkan Intisari Suara"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => addToCompare(reg.id)}
                        className={`p-1.5 rounded-lg cursor-pointer ${
                          inCompare
                            ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50'
                            : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800'
                        }`}
                        title="Bandingkan Regulasi"
                      >
                        <GitCompare className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => toggleBookmark(reg.id)}
                        className={`p-1.5 rounded-lg cursor-pointer ${
                          isFav
                            ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50'
                            : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800'
                        }`}
                        title="Simpan Regulasi"
                      >
                        {isFav ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};
