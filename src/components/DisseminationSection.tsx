import React, { useState } from 'react';
import { 
  Sparkles, 
  Image as ImageIcon, 
  Video, 
  Headphones, 
  ExternalLink, 
  Download, 
  Calendar, 
  Share2 
} from 'lucide-react';
import { DISSEMINATION_ITEMS } from '../data/regulationsData';
import { DisseminationItem } from '../types/jdih';
import { useThemeAndA11y } from '../context/ThemeAndA11yContext';

export const DisseminationSection: React.FC = () => {
  const { announce } = useThemeAndA11y();
  const [activeMediaFilter, setActiveMediaFilter] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<DisseminationItem | null>(null);

  const filters = [
    { id: 'all', label: 'Semua Media Diseminasi' },
    { id: 'Infografis', label: 'Infografis Hukum' },
    { id: 'Videografis', label: 'Videografis Interaktif' },
    { id: 'Podcast Hukum', label: 'Podcast Audio' }
  ];

  const filteredItems = DISSEMINATION_ITEMS.filter((item) => {
    if (activeMediaFilter !== 'all' && item.type !== activeMediaFilter) return false;
    return true;
  });

  return (
    <section className="py-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-semibold tracking-widest uppercase text-emerald-800 dark:text-emerald-400 mb-1">
            Literasi & Penyebarluasan Hukum · Variabel I JDIHN
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-50 mb-2">
            Diseminasi Produk Hukum & Media Kreatif
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
            Penyajian substansi peraturan perundang-undangan transmigrasi dalam format infografis ringkas, video animasi, dan podcast audio yang mudah dipahami masyarakat luas.
          </p>
        </div>

        {/* Media Filter Tabs */}
        <div className="flex justify-center mb-6 overflow-x-auto">
          <div className="flex gap-2 p-1 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg text-xs font-medium">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveMediaFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-md whitespace-nowrap transition-colors ${
                  activeMediaFilter === f.id
                    ? 'bg-emerald-800 text-white dark:bg-emerald-700 font-semibold shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden shadow-xs hover:border-emerald-600 dark:hover:border-emerald-500 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-4/3 relative bg-stone-100 dark:bg-stone-800 overflow-hidden">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-stone-900/80 backdrop-blur-xs text-white px-2 py-0.5 rounded text-[10px] font-semibold flex items-center gap-1">
                    {item.type === 'Infografis' ? <ImageIcon className="w-3 h-3" /> : item.type === 'Videografis' ? <Video className="w-3 h-3" /> : <Headphones className="w-3 h-3" />}
                    <span>{item.type}</span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-[11px] text-emerald-800 dark:text-emerald-400 font-semibold mb-1">
                    {item.regulationReference}
                  </div>
                  <h3 className="font-serif font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 line-clamp-2 leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-stone-400">{item.date}</span>
                  <button
                    onClick={() => {
                      setSelectedMedia(item);
                      announce(`Membuka media ${item.title}`);
                    }}
                    className="font-semibold text-emerald-800 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>Lihat Media</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Media Preview Modal */}
        {selectedMedia && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="media-preview-title"
            className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg shadow-2xl max-w-xl w-full p-6 animate-in zoom-in-95">
              <div className="flex items-start justify-between pb-3 border-b border-stone-200 dark:border-stone-800 mb-4">
                <div>
                  <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wide block">
                    {selectedMedia.type} · JDIH Kemtrans
                  </span>
                  <h3 id="media-preview-title" className="font-serif font-bold text-base text-stone-900 dark:text-stone-50 leading-snug">
                    {selectedMedia.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 p-1"
                >
                  ✕
                </button>
              </div>

              <div className="aspect-16/10 rounded-lg overflow-hidden bg-stone-950 mb-4 flex items-center justify-center">
                <img
                  src={selectedMedia.thumbnailUrl}
                  alt={selectedMedia.title}
                  className="max-h-full object-contain"
                />
              </div>

              <div className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
                <div className="p-3 bg-stone-50 dark:bg-stone-800 rounded border border-stone-200 dark:border-stone-700">
                  <strong>Rujukan Regulasi:</strong> {selectedMedia.regulationReference}
                </div>
                <p className="leading-relaxed">
                  {selectedMedia.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-stone-100 dark:border-stone-800 text-xs">
                <span className="text-stone-400">Tersedia di Kanal Media Sosial Resmi @jdihkemtrans</span>
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded font-semibold"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
