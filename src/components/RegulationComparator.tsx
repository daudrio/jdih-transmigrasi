import React, { useState } from 'react';
import { X, GitCompare, ArrowLeftRight, Check, AlertCircle } from 'lucide-react';
import { Regulation } from '../types/jdih';
import { useThemeAndA11y } from '../context/ThemeAndA11yContext';

interface RegulationComparatorProps {
  regulations: Regulation[];
  onClose: () => void;
  onSelectRegulation: (regulation: Regulation) => void;
}

export const RegulationComparator: React.FC<RegulationComparatorProps> = ({
  regulations,
  onClose,
  onSelectRegulation
}) => {
  const { comparisonList, removeFromCompare, clearCompare } = useThemeAndA11y();

  const [leftId, setLeftId] = useState<string>(
    comparisonList[0] || (regulations[0] ? regulations[0].id : '')
  );
  const [rightId, setRightId] = useState<string>(
    comparisonList[1] || (regulations[1] ? regulations[1].id : '')
  );

  const leftReg = regulations.find((r) => r.id === leftId) || regulations[0];
  const rightReg = regulations.find((r) => r.id === rightId) || regulations[1];

  const handleSwap = () => {
    const temp = leftId;
    setLeftId(rightId);
    setRightId(temp);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Komparasi Regulasi Berdampingan"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 lg:p-6"
    >
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg shadow-2xl max-w-6xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <GitCompare className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-stone-900 dark:text-stone-50">
                Komparasi Regulasi Transmigrasi Berdampingan
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Analisis perbandingan komparatif naskah hukum, hierarki, dan perubahan substansi pasal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSwap}
              className="px-2.5 py-1.5 text-xs font-medium border border-stone-300 dark:border-stone-700 rounded hover:bg-stone-100 dark:hover:bg-stone-800 flex items-center gap-1.5 transition-colors"
              title="Tukar Posisi Kiri dan Kanan"
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tukar Posisi</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 rounded hover:bg-stone-200 dark:hover:bg-stone-800"
              aria-label="Tutup komparasi"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Selection Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200 dark:divide-stone-800 bg-stone-100/60 dark:bg-stone-900/60 p-4 gap-4">
          {/* Left Selector */}
          <div>
            <label className="block text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1">
              Dokumen A (Kiri):
            </label>
            <select
              value={leftId}
              onChange={(e) => setLeftId(e.target.value)}
              className="w-full text-xs bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded p-2 text-stone-900 dark:text-stone-100 focus:outline-hidden"
            >
              {regulations.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.typeName} No. {r.number}/{r.year} - {r.shortTitle}
                </option>
              ))}
            </select>
          </div>

          {/* Right Selector */}
          <div>
            <label className="block text-xs font-semibold text-stone-600 dark:text-stone-300 mb-1">
              Dokumen B (Kanan):
            </label>
            <select
              value={rightId}
              onChange={(e) => setRightId(e.target.value)}
              className="w-full text-xs bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded p-2 text-stone-900 dark:text-stone-100 focus:outline-hidden"
            >
              {regulations.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.typeName} No. {r.number}/{r.year} - {r.shortTitle}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Side-by-Side Comparison Body */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-200 dark:divide-stone-800">
          
          {/* Left Document Column */}
          {leftReg && (
            <div className="space-y-4">
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="font-semibold text-emerald-800 dark:text-emerald-400">
                    {leftReg.typeName}
                  </span>
                  <span className={leftReg.status === 'Berlaku' ? 'text-emerald-700 font-semibold' : 'text-rose-600 font-semibold'}>
                    {leftReg.status}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-stone-50 mb-2">
                  {leftReg.title}
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-3">
                  {leftReg.summary}
                </p>
                <div className="text-[11px] text-stone-500 space-y-1 border-t border-stone-100 dark:border-stone-800 pt-2">
                  <div><strong>Pengundangan:</strong> {leftReg.promulgatedDate}</div>
                  <div><strong>Sumber:</strong> {leftReg.sourceGazette}</div>
                  <div><strong>Penandatangan:</strong> {leftReg.signee}</div>
                </div>
              </div>

              {/* Left Articles */}
              <div className="space-y-3">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-stone-500">
                  Substansi Pasal-Pasal Utama
                </h4>
                {leftReg.articles.map((art, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded p-3 text-xs"
                  >
                    <div className="font-bold text-emerald-800 dark:text-emerald-400 mb-1">
                      {art.number} {art.chapter && `(${art.chapter})`}
                    </div>
                    <p className="text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                      {art.content}
                    </p>
                    {art.points && (
                      <ul className="mt-2 space-y-1 pl-4 list-disc text-stone-600 dark:text-stone-400 font-serif">
                        {art.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right Document Column */}
          {rightReg && (
            <div className="space-y-4 md:pl-6 pt-6 md:pt-0">
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="font-semibold text-emerald-800 dark:text-emerald-400">
                    {rightReg.typeName}
                  </span>
                  <span className={rightReg.status === 'Berlaku' ? 'text-emerald-700 font-semibold' : 'text-rose-600 font-semibold'}>
                    {rightReg.status}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-stone-50 mb-2">
                  {rightReg.title}
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-3">
                  {rightReg.summary}
                </p>
                <div className="text-[11px] text-stone-500 space-y-1 border-t border-stone-100 dark:border-stone-800 pt-2">
                  <div><strong>Pengundangan:</strong> {rightReg.promulgatedDate}</div>
                  <div><strong>Sumber:</strong> {rightReg.sourceGazette}</div>
                  <div><strong>Penandatangan:</strong> {rightReg.signee}</div>
                </div>
              </div>

              {/* Right Articles */}
              <div className="space-y-3">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-stone-500">
                  Substansi Pasal-Pasal Utama
                </h4>
                {rightReg.articles.map((art, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded p-3 text-xs"
                  >
                    <div className="font-bold text-emerald-800 dark:text-emerald-400 mb-1">
                      {art.number} {art.chapter && `(${art.chapter})`}
                    </div>
                    <p className="text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                      {art.content}
                    </p>
                    {art.points && (
                      <ul className="mt-2 space-y-1 pl-4 list-disc text-stone-600 dark:text-stone-400 font-serif">
                        {art.points.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-center justify-between text-xs">
          <div className="text-stone-500">
            Dianjurkan untuk membandingkan peraturan perubahan atau peraturan pencabut dengan peraturan terdahulu.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium rounded hover:bg-stone-800 transition-colors"
          >
            Selesai Menelaah
          </button>
        </div>

      </div>
    </div>
  );
};
