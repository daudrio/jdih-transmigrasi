import React from 'react';
import { X, Keyboard, Eye, Volume2, Type, ShieldCheck } from 'lucide-react';

interface A11yHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const A11yHelpModal: React.FC<A11yHelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Panduan Aksesibilitas JDIH"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg shadow-2xl max-w-lg w-full p-6 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800 mb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
            <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-50">
              Panduan Aksesibilitas & Navigasi
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
          <div className="flex items-start gap-3">
            <Type className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100">Ukuran Teks Dinamis</h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                Gunakan tombol <strong>A</strong>, <strong>A+</strong>, atau <strong>A++</strong> pada bilah atas untuk memperbesar huruf hingga 130% tanpa merusak tata letak.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Eye className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100">Mode Kontras Tinggi & Gelap</h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                Tersedia mode gelap ramah mata serta fitur <strong>Kontras Tinggi</strong> yang mempertegas rasio kontras warna teks memenuhi kriteria WCAG 2.1 Level AAA.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Volume2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100">Pembaca Audio Ringkasan</h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                Setiap dokumen dilengkapi fitur <strong>Dengarkan</strong> untuk membacakan intisari regulasi dalam Bahasa Indonesia menggunakan sintesis suara browser.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 border-t border-stone-100 dark:border-stone-800 pt-3">
            <Keyboard className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div className="w-full">
              <h4 className="font-semibold text-stone-900 dark:text-stone-100">Pintasan Papan Ketik (Keyboard Shortcuts)</h4>
              <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                <div className="bg-stone-100 dark:bg-stone-800 p-2 rounded flex items-center justify-between">
                  <span>Pencarian Cepat</span>
                  <kbd className="font-mono bg-white dark:bg-stone-700 px-1.5 py-0.5 rounded text-[11px] shadow-2xs">/</kbd>
                </div>
                <div className="bg-stone-100 dark:bg-stone-800 p-2 rounded flex items-center justify-between">
                  <span>Tutup Jendela/Modal</span>
                  <kbd className="font-mono bg-white dark:bg-stone-700 px-1.5 py-0.5 rounded text-[11px] shadow-2xs">Esc</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded"
          >
            Mengerti & Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
};
