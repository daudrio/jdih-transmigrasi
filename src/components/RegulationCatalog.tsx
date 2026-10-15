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
  FileCheck2,
  AlertCircle
} from 'lucide-react';
import { Regulation, RegulationType } from '../types/jdih';
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
  const { toggleBookmark, isBookmarked, addToCompare, comparisonList } = useThemeAndA11y();

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

  const typeTabs: { id: string; label: string }[] = [
    { id: 'ALL', label: 'Semua Produk' },
    { id: 'UU', label: 'Undang-Undang' },
    { id: 'PP', label: 'Peraturan Pemerintah' },
    { id: 'PERPRES', label: 'Perpres' },
    { id: 'PERMEN', label: 'Permen Trans' },
    { id: 'KEPMEN', label: 'Kepmen' },
    { id: 'SE', label: 'Surat Edaran' },
    { id: 'PUTUSAN', label: 'Putusan MK' },
    { id: 'MONOGRAFI', label: 'Monografi Hukum' }
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

  return (
    <div className="py-8 transition-colors">
      {/* Interactive Document Type Segmented Control (Tabs) */}
      <div className="border-b border-stone-200 dark:border-stone-800 mb-6 pb-2 overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max pb-1">
          {typeTabs.map((tab) => {
            const isActive = filterType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter and Sorting Bar */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-3 mb-6 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Left Side: Filter Selectors */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 text-stone-500 dark:text-stone-400 font-medium mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Filter:</span>
          </div>

          {/* Status filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded px-2.5 py-1.5 text-stone-700 dark:text-stone-200 focus:outline-hidden"
            aria-label="Filter Berdasarkan Status Keberlakuan"
          >
            <option value="ALL">Semua Status</option>
            <option value="Berlaku">Berlaku</option>
            <option value="Dicabut">Dicabut</option>
            <option value="Mengubah">Mengubah</option>
            <option value="Diubah">Diubah</option>
          </select>

          {/* Year filter */}
          <select
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded px-2.5 py-1.5 text-stone-700 dark:text-stone-200 focus:outline-hidden"
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
            className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded px-2.5 py-1.5 text-stone-700 dark:text-stone-200 focus:outline-hidden max-w-44 truncate"
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
              className="flex items-center gap-1 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 px-2 py-1.5 rounded hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors ml-1"
              title="Reset semua filter ke kondisi awal"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Right Side: Sorting & View Mode */}
        <div className="flex items-center gap-3 ml-auto">
          <div className="flex items-center gap-1.5">
            <span className="text-stone-500 dark:text-stone-400">Urutkan:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded px-2 py-1.5 text-stone-700 dark:text-stone-200 focus:outline-hidden"
              aria-label="Urutkan Regulasi"
            >
              <option value="newest">Tahun Terbaru</option>
              <option value="oldest">Tahun Terlama</option>
              <option value="downloads">Paling Banyak Diunduh</option>
              <option value="views">Paling Sering Dilihat</option>
            </select>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center border border-stone-200 dark:border-stone-700 rounded p-0.5 bg-stone-50 dark:bg-stone-800">
            <button
              onClick={() => setViewMode('list')}
              className={`p-1 rounded transition-colors ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
              }`}
              title="Tampilan Tabel Berurutan (List)"
              aria-label="Tampilan Tabel Berurutan"
              aria-pressed={viewMode === 'list'}
            >
              <LayoutList className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1 rounded transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
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
      <div className="flex items-center justify-between mb-4 text-xs text-stone-500 dark:text-stone-400">
        <div>
          Menampilkan <span className="font-semibold text-stone-900 dark:text-stone-100 tabular-nums">{filteredRegulations.length}</span> dari{' '}
          <span className="font-semibold tabular-nums">{regulations.length}</span> dokumen hukum
          {searchInternal && (
            <span> untuk kata kunci <strong className="text-stone-900 dark:text-stone-100 font-semibold">"{searchInternal}"</strong></span>
          )}
        </div>

        {/* Floating comparison badge if any items queued */}
        {comparisonList.length > 0 && (
          <button
            onClick={onOpenCompare}
            className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 hover:underline cursor-pointer"
          >
            <GitCompare className="w-3.5 h-3.5" />
            <span>Bandingkan ({comparisonList.length} terpilih)</span>
          </button>
        )}
      </div>

      {/* Empty State */}
      {filteredRegulations.length === 0 && (
        <div className="text-center py-16 px-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg">
          <AlertCircle className="w-8 h-8 text-stone-400 dark:text-stone-500 mx-auto mb-3" />
          <h3 className="font-serif text-lg font-bold text-stone-800 dark:text-stone-200 mb-1">
            Tidak Ada Dokumen yang Cocok
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 max-w-md mx-auto mb-4">
            Tidak ditemukan produk hukum dengan kriteria pencarian yang Anda masukkan. Silakan periksa kembali ejaan atau atur ulang filter pencarian.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 text-xs font-medium bg-emerald-800 hover:bg-emerald-900 text-white rounded transition-colors"
          >
            Bersihkan Filter
          </button>
        </div>
      )}

      {/* List View Rendering */}
      {viewMode === 'list' && filteredRegulations.length > 0 && (
        <div className="space-y-3">
          {filteredRegulations.map((reg) => {
            const isFav = isBookmarked(reg.id);
            const inCompare = comparisonList.includes(reg.id);

            return (
              <article
                key={reg.id}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4 sm:p-5 hover:border-stone-300 dark:hover:border-stone-700 transition-all shadow-xs group"
              >
                {/* Zero-Pill Metadata Line (Strict Discipline: unboxed text with typographic separators) */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 dark:text-stone-400 mb-2">
                  <span className="font-semibold text-stone-800 dark:text-stone-200 uppercase tracking-wider">
                    {reg.typeName} No. {reg.number} Th {reg.year}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Diundangkan {reg.promulgatedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span className={`font-medium ${
                    reg.status === 'Berlaku'
                      ? 'text-emerald-700 dark:text-emerald-400'
                      : reg.status === 'Dicabut'
                      ? 'text-rose-600 dark:text-rose-400'
                      : 'text-amber-700 dark:text-amber-400'
                  }`}>
                    {reg.status}
                  </span>
                  {reg.hasJudicialReview && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-stone-600 dark:text-stone-300">Ada Putusan MK</span>
                    </>
                  )}
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{reg.fileSize}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{reg.downloadCount.toLocaleString()} Unduhan</span>
                </div>

                {/* Primary Title Link */}
                <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 dark:text-stone-50 leading-snug mb-2 group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors">
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
                <div className="flex flex-wrap items-center gap-x-2 text-xs text-stone-500 dark:text-stone-400 mb-3">
                  <span className="text-stone-400 dark:text-stone-500">Subjek:</span>
                  {reg.subject.map((sub, idx) => (
                    <React.Fragment key={sub}>
                      <button
                        onClick={() => setFilterSubject(sub)}
                        className="hover:text-stone-900 dark:hover:text-stone-100 underline underline-offset-2 transition-colors"
                      >
                        {sub}
                      </button>
                      {idx < reg.subject.length - 1 && <span aria-hidden="true">/</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Card Action Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100 dark:border-stone-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectRegulation(reg)}
                      className="px-3 py-1.5 font-semibold text-emerald-800 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 rounded transition-colors flex items-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Buka Naskah Lengkap</span>
                    </button>

                    <button
                      onClick={() => onSelectRegulation(reg)}
                      className="px-3 py-1.5 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded transition-colors flex items-center gap-1.5"
                      title="Lihat Pratinjau Berkas PDF Resmi"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Unduh PDF</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Compare Button */}
                    <button
                      onClick={() => addToCompare(reg.id)}
                      className={`px-2.5 py-1.5 rounded transition-colors flex items-center gap-1 ${
                        inCompare
                          ? 'bg-stone-200 dark:bg-stone-700 text-stone-900 dark:text-stone-100 font-medium'
                          : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800'
                      }`}
                      title={inCompare ? 'Sudah dalam daftar perbandingan' : 'Bandingkan dengan regulasi lain'}
                      aria-label="Bandingkan Regulasi Ini"
                    >
                      <GitCompare className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{inCompare ? 'Terpilih' : 'Bandingkan'}</span>
                    </button>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={() => toggleBookmark(reg.id)}
                      className={`px-2.5 py-1.5 rounded transition-colors flex items-center gap-1 ${
                        isFav
                          ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50'
                          : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800'
                      }`}
                      title={isFav ? 'Hapus dari koleksi tersimpan' : 'Simpan ke koleksi regulasi'}
                      aria-label="Simpan Regulasi"
                      aria-pressed={isFav}
                    >
                      {isFav ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                      <span className="hidden sm:inline">{isFav ? 'Tersimpan' : 'Simpan'}</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Grid View Rendering */}
      {viewMode === 'grid' && filteredRegulations.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRegulations.map((reg) => {
            const isFav = isBookmarked(reg.id);
            const inCompare = comparisonList.includes(reg.id);

            return (
              <article
                key={reg.id}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 flex flex-col justify-between hover:border-stone-300 dark:hover:border-stone-700 transition-all shadow-xs group"
              >
                <div>
                  {/* Zero-Pill Header Metadata */}
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-2">
                    <span className="font-semibold text-stone-800 dark:text-stone-200 uppercase tracking-wider">
                      {reg.type} No. {reg.number}/{reg.year}
                    </span>
                    <span className={`font-medium ${
                      reg.status === 'Berlaku'
                        ? 'text-emerald-700 dark:text-emerald-400'
                        : 'text-rose-600 dark:text-rose-400'
                    }`}>
                      {reg.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-serif font-bold text-stone-900 dark:text-stone-50 leading-snug mb-2 group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors">
                    <button
                      onClick={() => onSelectRegulation(reg)}
                      className="text-left line-clamp-3 hover:underline underline-offset-2"
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
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 border-t border-stone-100 dark:border-stone-800 pt-2 mb-3">
                    <span>{reg.promulgatedDate}</span>
                    <span className="mx-1" aria-hidden="true">·</span>
                    <span>{reg.fileSize}</span>
                    <span className="mx-1" aria-hidden="true">·</span>
                    <span>{reg.downloadCount} unduhan</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-1 border-t border-stone-100 dark:border-stone-800">
                    <button
                      onClick={() => onSelectRegulation(reg)}
                      className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 hover:underline flex items-center gap-1"
                    >
                      <span>Detail Dokumen</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => addToCompare(reg.id)}
                        className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 rounded hover:bg-stone-100 dark:hover:bg-stone-800"
                        title="Bandingkan Regulasi"
                      >
                        <GitCompare className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => toggleBookmark(reg.id)}
                        className={`p-1.5 rounded ${
                          isFav
                            ? 'text-amber-600 dark:text-amber-400'
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
