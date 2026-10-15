import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Terminal, 
  GitBranch, 
  ExternalLink, 
  Code2, 
  Layers, 
  Download,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { useThemeAndA11y } from '../context/ThemeAndA11yContext';

interface GitHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubModal: React.FC<GitHubModalProps> = ({ isOpen, onClose }) => {
  const { announce } = useThemeAndA11y();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const cloneCommand = 'git clone https://github.com/kemtrans-ri/jdih-transmigrasi.git';
  const pushCommands = `# 1. Inisialisasi dan hubungkan ke repositori GitHub Anda
git remote add origin https://github.com/USERNAME/jdih-transmigrasi.git

# 2. Simpan perubahan ke git
git add .
git commit -m "feat: inisialisasi portal website JDIH Kementerian Transmigrasi"

# 3. Unggah (push) ke GitHub
git branch -M main
git push -u origin main`;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    announce('Perintah berhasil disalin ke papan klip');
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const downloadProjectZip = () => {
    announce('Menyiapkan berkas informasi repositori');
    const infoContent = `JDIH KEMENTERIAN TRANSMIGRASI REPUBLIK INDONESIA
Portal Dokumentasi & Informasi Hukum

Repositori Git & Kode Sumber:
1. Clone: ${cloneCommand}
2. Branch: main
3. CI/CD: .github/workflows/deploy.yml
4. Panduan: Lihat file README.md untuk instalasi lengkap

Teknologi:
- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- Web Speech API (Text-to-speech)
`;
    const blob = new Blob([infoContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'jdih-transmigrasi-github-info.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="github-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 lg:p-6"
    >
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h2
                id="github-modal-title"
                className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-50"
              >
                Integrasi Kode Sumber & GitHub
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Portal JDIH dibangun sebagai website modern berbasis open repository
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 rounded hover:bg-stone-200 dark:hover:bg-stone-800"
            aria-label="Tutup jendela GitHub"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs sm:text-sm">
          
          {/* Status Badge Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
              <span className="text-[11px] text-stone-500 block">Status Git Lokal:</span>
              <div className="flex items-center gap-1.5 font-semibold text-emerald-700 dark:text-emerald-400 mt-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Git Initialized (main)</span>
              </div>
            </div>

            <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
              <span className="text-[11px] text-stone-500 block">Automasi CI/CD:</span>
              <div className="flex items-center gap-1.5 font-semibold text-stone-800 dark:text-stone-200 mt-1">
                <GitBranch className="w-4 h-4 text-emerald-600" />
                <span>GitHub Actions Ready</span>
              </div>
            </div>

            <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700">
              <span className="text-[11px] text-stone-500 block">Dukungan Deployment:</span>
              <div className="flex items-center gap-1.5 font-semibold text-stone-800 dark:text-stone-200 mt-1">
                <span>GitHub Pages / Cloud Run</span>
              </div>
            </div>
          </div>

          {/* Section 1: Clone Command */}
          <div>
            <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-700" />
              <span>1. Klon Repositori ke Komputer Lokal</span>
            </h3>
            <div className="relative bg-stone-950 text-stone-100 rounded-lg p-3 font-mono text-xs overflow-x-auto">
              <code>{cloneCommand}</code>
              <button
                onClick={() => handleCopy(cloneCommand, 1)}
                className="absolute right-2 top-2 p-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded transition-colors"
                title="Salin Perintah"
              >
                {copiedIndex === 1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Section 2: Push to Your Own GitHub */}
          <div>
            <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 mb-2 flex items-center gap-2">
              <Share2 className="w-4 h-4 text-emerald-700" />
              <span>2. Cara Mengunggah (Push) ke Akun GitHub Anda</span>
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-300 mb-2">
              Jalankan perintah ini di terminal untuk menyimpan dan mempublikasikan kode ke repositori GitHub pribadi Anda:
            </p>
            <div className="relative bg-stone-950 text-stone-100 rounded-lg p-3 font-mono text-xs overflow-x-auto">
              <pre className="whitespace-pre">{pushCommands}</pre>
              <button
                onClick={() => handleCopy(pushCommands, 2)}
                className="absolute right-2 top-2 p-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded transition-colors"
                title="Salin Semua Perintah"
              >
                {copiedIndex === 2 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Section 3: GitHub Actions Workflow */}
          <div className="bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-lg p-4">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1">
              Alur Kerja Otomatis (.github/workflows/deploy.yml)
            </h4>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-3">
              Repositori ini telah dilengkapi skrip GitHub Actions otomatis. Setiap kali Anda melakukan <code className="font-mono bg-stone-200 dark:bg-stone-700 px-1 py-0.5 rounded text-[11px]">git push origin main</code>, sistem akan menguji, membangun kode produksi (<code className="font-mono text-[11px]">npm run build</code>), dan langsung merilisnya ke <strong>GitHub Pages</strong> secara cuma-cuma.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:text-stone-900 rounded text-xs font-semibold flex items-center gap-1.5"
              >
                <span>Buka GitHub.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={downloadProjectZip}
                className="px-3 py-1.5 border border-stone-300 dark:border-stone-600 rounded text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-medium flex items-center gap-1.5"
              >
                <Download className="w-3 h-3" />
                <span>Simpan Catatan Info Git (.txt)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-center justify-between text-xs">
          <span className="text-stone-500">
            Open-source architecture · Berstandar interoperabilitas Satu Data Indonesia
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold rounded hover:bg-stone-800 transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
