import React, { useState, useEffect, useRef } from 'react';
import { Search, X, FileText, ArrowRight, CornerDownLeft } from 'lucide-react';
import { Regulation } from '../types/jdih';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  regulations: Regulation[];
  onSelectRegulation: (reg: Regulation) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  regulations,
  onSelectRegulation
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const results = regulations.filter((r) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      r.title.toLowerCase().includes(q) ||
      r.number.toLowerCase().includes(q) ||
      r.year.toString().includes(q) ||
      r.summary.toLowerCase().includes(q) ||
      r.subject.some((s) => s.toLowerCase().includes(q))
    );
  }).slice(0, 7);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      onSelectRegulation(results[selectedIndex]);
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Pencarian Cepat Regulasi"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4"
    >
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Box */}
        <div className="p-4 border-b border-stone-200 dark:border-stone-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Cari undang-undang, permen trans, topik HPL, atau nomor peraturan..."
            className="w-full text-sm bg-transparent text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-hidden"
          />
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="py-8 text-center text-xs text-stone-500">
              Tidak ditemukan regulasi yang cocok dengan "{query}".
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((reg, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={reg.id}
                    onClick={() => {
                      onSelectRegulation(reg);
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`p-3 rounded-md cursor-pointer transition-colors flex items-start justify-between gap-3 text-xs ${
                      isSelected
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 text-stone-900 dark:text-stone-50'
                        : 'hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <FileText className={`w-4 h-4 mt-0.5 shrink-0 ${isSelected ? 'text-emerald-700 dark:text-emerald-400' : 'text-stone-400'}`} />
                      <div>
                        <div className="flex items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400 mb-0.5">
                          <span className="font-semibold uppercase tracking-wider">{reg.type} No. {reg.number}/{reg.year}</span>
                          <span aria-hidden="true">·</span>
                          <span className={reg.status === 'Berlaku' ? 'text-emerald-700 font-medium' : 'text-rose-600'}>{reg.status}</span>
                        </div>
                        <h4 className="font-serif font-semibold text-xs sm:text-sm line-clamp-1">
                          {reg.title}
                        </h4>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1 text-[11px] text-stone-400 pt-1">
                      {isSelected && (
                        <div className="flex items-center gap-1 font-mono text-emerald-800 dark:text-emerald-400 font-medium">
                          <span>Buka</span>
                          <CornerDownLeft className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer Hotkeys */}
        <div className="px-4 py-2.5 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-center justify-between text-[11px] text-stone-500">
          <div className="flex items-center gap-3">
            <span>Gunakan <kbd className="font-mono bg-stone-200 dark:bg-stone-800 px-1 rounded">↑</kbd> <kbd className="font-mono bg-stone-200 dark:bg-stone-800 px-1 rounded">↓</kbd> untuk navigasi</span>
            <span><kbd className="font-mono bg-stone-200 dark:bg-stone-800 px-1 rounded">Enter</kbd> untuk memilih</span>
          </div>
          <span><kbd className="font-mono bg-stone-200 dark:bg-stone-800 px-1 rounded">Esc</kbd> untuk menutup</span>
        </div>

      </div>
    </div>
  );
};
