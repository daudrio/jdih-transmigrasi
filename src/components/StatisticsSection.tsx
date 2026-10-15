import React from 'react';
import { BarChart3, TrendingUp, CheckCircle, FileSpreadsheet, Download } from 'lucide-react';
import { Regulation } from '../types/jdih';

interface StatisticsSectionProps {
  regulations: Regulation[];
  onSelectRegulation: (regulation: Regulation) => void;
}

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  regulations,
  onSelectRegulation
}) => {
  const typeCounts = [
    { label: 'Peraturan Menteri (Permen)', count: 48, percentage: 42, color: 'bg-emerald-700' },
    { label: 'Keputusan Menteri (Kepmen)', count: 32, percentage: 28, color: 'bg-emerald-600' },
    { label: 'Surat Edaran (SE)', count: 14, percentage: 12, color: 'bg-emerald-500' },
    { label: 'Peraturan Pemerintah (PP)', count: 8, percentage: 7, color: 'bg-amber-600' },
    { label: 'Peraturan Presiden (Perpres)', count: 6, percentage: 5, color: 'bg-amber-500' },
    { label: 'Undang-Undang (UU)', count: 3, percentage: 3, color: 'bg-stone-700' },
    { label: 'Putusan Pengadilan & Monografi', count: 4, percentage: 3, color: 'bg-stone-500' }
  ];

  const yearlyTrends = [
    { year: 2020, total: 12, height: 40 },
    { year: 2021, total: 15, height: 50 },
    { year: 2022, total: 18, height: 60 },
    { year: 2023, total: 22, height: 75 },
    { year: 2024, total: 26, height: 88 },
    { year: 2025, total: 31, height: 100 }
  ];

  const topDownloaded = [...regulations].sort((a, b) => b.downloadCount - a.downloadCount).slice(0, 5);

  return (
    <section className="py-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-semibold tracking-widest uppercase text-emerald-800 dark:text-emerald-400 mb-1">
            Data & Analitik Terbuka
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-50 mb-2">
            Statistik Dokumentasi Hukum Transmigrasi
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
            Transparansi data inventarisasi produk hukum, tren penerbitan legislasi tahunan, serta tingkat keterpakaian dokumen oleh pemangku kepentingan.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5">
            <span className="text-xs text-stone-500 dark:text-stone-400 block mb-1">Total Koleksi Naskah Terindeks</span>
            <div className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-50 tabular-nums">
              1,248
            </div>
            <div className="text-xs text-emerald-700 dark:text-emerald-400 font-medium mt-2 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+18 regulasi baru disahkan tahun 2025</span>
            </div>
          </div>

          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5">
            <span className="text-xs text-stone-500 dark:text-stone-400 block mb-1">Total Unduhan Salinan Sah</span>
            <div className="text-3xl font-serif font-bold text-emerald-800 dark:text-emerald-400 tabular-nums">
              64,820
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400 mt-2">
              Diakses masyarakat, akademisi & Pemda
            </div>
          </div>

          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5">
            <span className="text-xs text-stone-500 dark:text-stone-400 block mb-1">Indeks Kesiapan Interoperabilitas</span>
            <div className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-50 tabular-nums">
              100%
            </div>
            <div className="text-xs text-emerald-700 dark:text-emerald-400 font-medium mt-2 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Sinkron penuh API Nasional JDIHN</span>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Chart: Distribution by Type */}
          <div className="lg:col-span-7 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6">
            <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-50 mb-1 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-emerald-700" />
              <span>Distribusi Produk Hukum Menurut Bentuk</span>
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 mb-6">
              Proporsi jenis instrumen hukum yang diterbitkan dalam lingkup kewenangan Kementerian Transmigrasi
            </p>

            <div className="space-y-4">
              {typeCounts.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-700 dark:text-stone-300 font-medium">{item.label}</span>
                    <span className="font-mono text-stone-500 tabular-nums">{item.count} naskah ({item.percentage}%)</span>
                  </div>
                  <div className="w-full h-2.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Chart: Yearly Production Trend */}
          <div className="lg:col-span-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-50 mb-1">
                Tren Produksi Regulasi (2020–2025)
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-6">
                Eskalasi pembentukan regulasi sejalan dengan mandat percepatan kawasan transmigrasi
              </p>

              {/* Bar Visualizer */}
              <div className="h-44 flex items-end justify-between gap-3 pt-6 pb-2 border-b border-stone-200 dark:border-stone-800">
                {yearlyTrends.map((yt) => (
                  <div key={yt.year} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <span className="text-[10px] font-mono text-stone-400 group-hover:text-emerald-600 transition-colors tabular-nums">
                      {yt.total}
                    </span>
                    <div
                      style={{ height: `${yt.height}%` }}
                      className="w-full max-w-[28px] bg-stone-300 dark:bg-stone-700 group-hover:bg-emerald-700 dark:group-hover:bg-emerald-500 rounded-t transition-all"
                    />
                    <span className="text-xs font-mono text-stone-600 dark:text-stone-400 font-medium">
                      '{yt.year.toString().slice(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 text-xs text-stone-500 dark:text-stone-400">
              *Tahun 2025 mencatat intensitas deregulasi dan percepatan sertifikasi HPL tertinggi dalam 1 dekade terakhir.
            </div>
          </div>
        </div>

        {/* Top 5 Most Accessed Regulations */}
        <div className="mt-8 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-50">
              5 Regulasi Paling Sering Diunduh Publik
            </h3>
            <span className="text-xs text-stone-500">Pembaruan Waktu Nyata</span>
          </div>

          <div className="divide-y divide-stone-100 dark:divide-stone-800">
            {topDownloaded.map((reg, idx) => (
              <div
                key={reg.id}
                onClick={() => onSelectRegulation(reg)}
                className="py-3 flex items-center justify-between gap-4 hover:bg-stone-50 dark:hover:bg-stone-800/50 px-2 rounded cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-serif font-bold text-stone-400 font-mono w-5">
                    0{idx + 1}.
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-serif font-semibold text-stone-900 dark:text-stone-100 hover:text-emerald-700 transition-colors">
                      {reg.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                      <span>{reg.typeName}</span>
                      <span aria-hidden="true">·</span>
                      <span>Diundangkan {reg.promulgatedDate}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-medium">{reg.status}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono font-medium text-stone-600 dark:text-stone-300 shrink-0">
                  <Download className="w-3.5 h-3.5 text-stone-400" />
                  <span className="tabular-nums">{reg.downloadCount.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
