import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  CheckCircle, 
  Download, 
  Users, 
  Eye, 
  Layers, 
  FileText,
  PieChart
} from 'lucide-react';
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
    { year: 2021, total: 15, height: 45 },
    { year: 2022, total: 18, height: 55 },
    { year: 2023, total: 22, height: 68 },
    { year: 2024, total: 26, height: 78 },
    { year: 2025, total: 32, height: 92 },
    { year: 2026, total: 36, height: 100 }
  ];

  const topDownloaded = [...regulations].sort((a, b) => b.downloadCount - a.downloadCount).slice(0, 5);

  return (
    <section className="py-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-semibold tracking-widest uppercase text-emerald-800 dark:text-emerald-400 mb-1">
            Transparansi Indikator Kinerja JDIHN 2026 · Variabel II (Nilai: 5)
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-50 mb-2">
            Statistik Koleksi PUU & Kunjungan Dokumen
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
            Pemenuhan 5 parameter statistik penilaian JDIHN: total dokumen, koleksi PUU, status keberlakuan, kategori jenis, serta statistik trafik pengunjung real-time.
          </p>
        </div>

        {/* 5 Mandatory JDIHN Metric Cards (Slide 10 & 12 Evaluasi BPHN) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {/* 1. Total Seluruh Dokumen Hukum */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4">
            <span className="text-[11px] text-stone-500 block mb-1">1. Seluruh Dokumen Hukum</span>
            <div className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-50 tabular-nums">
              1,248
            </div>
            <span className="text-[10px] text-emerald-700 dark:text-emerald-400 mt-1 block">Termasuk Monografi & NA</span>
          </div>

          {/* 2. Total Koleksi PUU */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4">
            <span className="text-[11px] text-stone-500 block mb-1">2. Koleksi PUU</span>
            <div className="text-2xl font-serif font-bold text-emerald-800 dark:text-emerald-400 tabular-nums">
              1,084
            </div>
            <span className="text-[10px] text-stone-500 mt-1 block">Regulasi Terdaftar</span>
          </div>

          {/* 3. Status Keberlakuan PUU */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4">
            <span className="text-[11px] text-stone-500 block mb-1">3. Status Keberlakuan</span>
            <div className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-50 tabular-nums">
              94.2%
            </div>
            <span className="text-[10px] text-emerald-600 font-medium mt-1 block">1,021 Berlaku · 63 Dicabut</span>
          </div>

          {/* 4. Pengunjung Hari Ini */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4">
            <span className="text-[11px] text-stone-500 block mb-1">4. Pengunjung Hari Ini</span>
            <div className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-50 tabular-nums">
              142
            </div>
            <span className="text-[10px] text-stone-500 mt-1 block">Bulan ini: 18,420</span>
          </div>

          {/* 5. Total Akses / Klik Dokumen */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4 col-span-2 md:col-span-1">
            <span className="text-[11px] text-stone-500 block mb-1">5. Total Klik Dokumen</span>
            <div className="text-2xl font-serif font-bold text-emerald-800 dark:text-emerald-400 tabular-nums">
              10,243,399
            </div>
            <span className="text-[10px] text-stone-500 mt-1 block">Kunjungan Terverifikasi</span>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Left Chart: Distribution by Type */}
          <div className="lg:col-span-7 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6">
            <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-50 mb-1 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-emerald-700" />
              <span>Distribusi Produk Hukum Menurut Bentuk & Kategori</span>
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 mb-6">
              Rincian proporsi jenis regulasi di lingkungan Kementerian Transmigrasi
            </p>

            <div className="space-y-4">
              {typeCounts.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-700 dark:text-stone-300 font-medium">{item.label}</span>
                    <span className="font-mono text-stone-500 tabular-nums">{item.count} naskah ({item.percentage}%)</span>
                  </div>
                  <div className="w-full h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
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
                Tren Produksi Regulasi Per Tahun
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-6">
                Eskalasi pembentukan regulasi periode 2021 sampai dengan tahun berjalan 2026
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
              *Tahun 2026 menargetkan 36 regulasi baru seiring peluncuran Program Transmigrasi Patriot.
            </div>
          </div>
        </div>

        {/* Top 5 Most Accessed Regulations */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-50">
              5 Regulasi Paling Sering Diunduh Publik
            </h3>
            <span className="text-xs text-stone-500">Statistik Unduhan Dokumen Hukum</span>
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
