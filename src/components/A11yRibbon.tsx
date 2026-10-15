import React from 'react';
import { Sun, Moon, Eye, Volume2, VolumeX, ShieldCheck, HelpCircle, Code2 } from 'lucide-react';
import { useThemeAndA11y, TextScale } from '../context/ThemeAndA11yContext';

interface A11yRibbonProps {
  onOpenHelpModal?: () => void;
  onOpenGitHubModal?: () => void;
  onOpenScoreboard?: () => void;
  onOpenSelfEval?: () => void;
}

export const A11yRibbon: React.FC<A11yRibbonProps> = ({ 
  onOpenHelpModal, 
  onOpenGitHubModal,
  onOpenScoreboard,
  onOpenSelfEval
}) => {
  const {
    isDark,
    toggleTheme,
    textScale,
    setTextScale,
    highContrast,
    toggleHighContrast,
    isSpeaking,
    stopSpeaking
  } = useThemeAndA11y();

  const scales: { key: TextScale; label: string; title: string }[] = [
    { key: 'normal', label: 'A', title: 'Ukuran Teks Normal (100%)' },
    { key: 'large', label: 'A+', title: 'Ukuran Teks Sedang (115%)' },
    { key: 'extra', label: 'A++', title: 'Ukuran Teks Besar (130%)' }
  ];

  return (
    <aside
      aria-label="Bilah Aksesibilitas dan Preferensi Tampilan"
      className="bg-stone-100 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 py-1.5 px-4 text-xs transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        {/* Left: Official Trust Indicator & Standards */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenScoreboard}
            className="flex items-center gap-1.5 font-medium text-emerald-800 dark:text-emerald-400 hover:underline cursor-pointer"
            title="Buka Matriks Tindak Lanjut Penilaian JDIHN 2026"
          >
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="tracking-tight font-semibold">Tindak Lanjut Evaluasi JDIHN 2026 (Kategori AA)</span>
          </button>
          <span className="text-stone-400 dark:text-stone-600 hidden sm:inline" aria-hidden="true">·</span>
          {onOpenSelfEval && (
            <button
              onClick={onOpenSelfEval}
              className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 hidden sm:inline underline"
            >
              Evaluasi Mandiri 7 Aspek
            </button>
          )}
        </div>

        {/* Right: Quick Accessibility & Theme Controls */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Audio Stopper if speaking */}
          {isSpeaking && (
            <button
              onClick={stopSpeaking}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 hover:bg-amber-200 transition-colors animate-pulse"
              title="Hentikan Pembacaan Teks"
              aria-label="Hentikan Pembacaan Teks Suara"
            >
              <VolumeX className="w-3.5 h-3.5" />
              <span>Hentikan Suara</span>
            </button>
          )}

          {/* Text Resizer */}
          <div className="flex items-center gap-1" role="group" aria-label="Pengatur Ukuran Teks">
            <span className="text-stone-500 dark:text-stone-400 mr-1 hidden md:inline">Teks:</span>
            {scales.map((s) => (
              <button
                key={s.key}
                onClick={() => setTextScale(s.key)}
                className={`px-1.5 py-0.5 rounded font-medium transition-colors ${
                  textScale === s.key
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                    : 'hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400'
                }`}
                title={s.title}
                aria-label={s.title}
                aria-pressed={textScale === s.key}
              >
                {s.label}
              </button>
            ))}
          </div>

          <span className="text-stone-300 dark:text-stone-700" aria-hidden="true">|</span>

          {/* High Contrast Toggle */}
          <button
            onClick={toggleHighContrast}
            className={`flex items-center gap-1 px-2 py-0.5 rounded transition-colors ${
              highContrast
                ? 'bg-emerald-700 text-white dark:bg-emerald-500 dark:text-stone-950 font-semibold'
                : 'hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
            title="Beralih Mode Kontras Tinggi"
            aria-label="Beralih Mode Kontras Tinggi"
            aria-pressed={highContrast}
          >
            <Eye className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Kontras</span>
          </button>

          <span className="text-stone-300 dark:text-stone-700" aria-hidden="true">|</span>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-2 py-0.5 rounded hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-200 font-medium transition-colors"
            title={`Beralih ke Mode ${isDark ? 'Terang' : 'Gelap'}`}
            aria-label={`Beralih ke Mode ${isDark ? 'Terang' : 'Gelap'}`}
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                <span className="hidden sm:inline">Mode Terang</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-stone-600" aria-hidden="true" />
                <span className="hidden sm:inline">Mode Gelap</span>
              </>
            )}
          </button>

          {onOpenGitHubModal && (
            <>
              <span className="text-stone-300 dark:text-stone-700" aria-hidden="true">|</span>
              <button
                onClick={onOpenGitHubModal}
                className="text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-50 font-medium flex items-center gap-1 transition-colors"
                title="Kode Sumber & Repositori GitHub"
                aria-label="Buka Informasi Repositori GitHub"
              >
                <Code2 className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                <span>GitHub</span>
              </button>
            </>
          )}

          {onOpenHelpModal && (
            <>
              <span className="text-stone-300 dark:text-stone-700" aria-hidden="true">|</span>
              <button
                onClick={onOpenHelpModal}
                className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 flex items-center gap-1"
                title="Panduan Aksesibilitas & Navigasi"
                aria-label="Bantuan Panduan Aksesibilitas"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Bantuan</span>
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};
