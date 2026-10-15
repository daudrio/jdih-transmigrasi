import React from 'react';
import { Calendar, Clock, ArrowRight, Newspaper } from 'lucide-react';
import { MOCK_NEWS } from '../data/regulationsData';

export const NewsSection: React.FC = () => {
  return (
    <section className="py-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-emerald-800 dark:text-emerald-400 mb-1">
              Informasi Terkini
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-50">
              Warta & Harmonisasi Hukum Transmigrasi
            </h2>
          </div>
          <p className="text-xs text-stone-500 dark:text-stone-400 max-w-md">
            Publikasi kegiatan legislasi, sosialisasi peraturan menteri, serta advokasi kepemilikan lahan transmigran di seluruh Indonesia.
          </p>
        </div>

        {/* Featured Editorial Split with Generated Community Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden shadow-xs mb-8">
          <div className="lg:col-span-5 relative min-h-[240px]">
            <img
              src="/src/assets/images/transmigrasi_community_1792042732733.jpg"
              alt="Masyarakat Kawasan Transmigrasi Berkelanjutan Menelaah Rencana Tata Ruang Pemukiman"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Zero-Pill Lead Story Metadata */}
              <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-2">
                <span className="font-semibold text-emerald-800 dark:text-emerald-400">Liputan Khusus</span>
                <span aria-hidden="true">·</span>
                <span>12 Maret 2025</span>
                <span aria-hidden="true">·</span>
                <span>4 menit baca</span>
              </div>

              <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-50 leading-snug mb-3">
                Kementerian Transmigrasi Rampungkan Konsultasi Publik RPermen Percepatan Sertifikat HPL Lahan Transmigran
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                Biro Hukum Kementerian Transmigrasi menggelar rapat koordinasi dan uji sahih publik melibatkan perwakilan transmigran dari 14 provinsi serta akademisi hukum agraria untuk memfinalisasi jaminan kepastian hukum hak milik atas lahan usaha tani.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-100 dark:border-stone-800 text-xs">
              <span className="text-stone-500 font-medium">Biro Hubungan Masyarakat & Kerja Sama</span>
              <button className="text-emerald-800 dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1">
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Secondary News Stream */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_NEWS.slice(1).map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 flex flex-col justify-between shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-2">
                  <span className="font-semibold text-stone-800 dark:text-stone-200">{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.readTime}</span>
                </div>

                <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-50 leading-snug mb-2 hover:text-emerald-700 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs pt-3 border-t border-stone-100 dark:border-stone-800 text-stone-500">
                <span>{item.source}</span>
                <button className="text-emerald-800 dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1">
                  <span>Selengkapnya</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
