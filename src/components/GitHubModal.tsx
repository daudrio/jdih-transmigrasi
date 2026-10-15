import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Terminal, 
  GitBranch, 
  ExternalLink, 
  Code2, 
  Download,
  CheckCircle2,
  Share2,
  FolderArchive,
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { useThemeAndA11y } from '../context/ThemeAndA11yContext';

interface GitHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubModal: React.FC<GitHubModalProps> = ({ isOpen, onClose }) => {
  const { announce } = useThemeAndA11y();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [githubUsername, setGithubUsername] = useState<string>('daudrio');
  const [repoName, setRepoName] = useState<string>('jdih-transmigrasi');

  if (!isOpen) return null;

  const targetRepoUrl = `https://github.com/${githubUsername || 'USERNAME'}/${repoName || 'jdih-transmigrasi'}.git`;

  const pushCommands = `# 1. Buka folder proyek di komputer Anda (atau hasil ekstrak ZIP)
cd ${repoName || 'jdih-transmigrasi'}

# 2. Hubungkan ke repositori GitHub Anda
git remote add origin ${targetRepoUrl}

# 3. Pastikan branch utama bernama main
git branch -M main

# 4. Unggah (push) seluruh kode ke GitHub
git push -u origin main`;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    announce('Perintah berhasil disalin ke papan klip');
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="github-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 lg:p-6"
    >
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 flex items-center justify-center shadow-xs">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h2
                id="github-modal-title"
                className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-50"
              >
                Publikasikan ke Repositori GitHub Anda
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Langkah mudah memindahkan dan mengunggah kode sumber portal JDIH ke akun GitHub pribadi/instansi
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 rounded hover:bg-stone-200 dark:hover:bg-stone-800 cursor-pointer"
            aria-label="Tutup jendela GitHub"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs sm:text-sm">
          
          {/* Important Information Box */}
          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm">
                Mengapa Repositori Belum Muncul Otomatis di Akun GitHub Anda?
              </h4>
              <p className="text-emerald-800/90 dark:text-emerald-300/90 text-xs leading-relaxed">
                Di lingkungan cloud sandbox Google AI Studio, sistem <strong>tidak memiliki izin akses (kredensial login / token)</strong> ke akun GitHub pribadi Anda demi keamanan. 
                Seluruh kode sumber sudah lengkap, terkompilasi, dan siap diunggah ke repositori akun GitHub Anda dengan salah satu cara di bawah ini:
              </p>
            </div>
          </div>

          {/* OPSI 1: UNDUH ZIP LANGSUNG (Paling Cepat) */}
          <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-5 bg-stone-50 dark:bg-stone-800/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                  Opsi 1 · Paling Cepat & Mudah (Tanpa Terminal)
                </span>
                <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <FolderArchive className="w-4 h-4 text-emerald-600" />
                  <span>Unduh Seluruh Kode Sumber Proyek (.ZIP)</span>
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 max-w-lg">
                  Berisi seluruh berkas TypeScript, komponen React, Tailwind CSS v4, konfigurasi Vite, dataset regulasi, dan skrip GitHub Actions CI/CD (ukuran ~2.9 MB).
                </p>
              </div>

              <a
                href="/jdih-transmigrasi-source.zip"
                download="jdih-kemen-transmigrasi-source.zip"
                className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-semibold rounded-lg flex items-center gap-2 shadow-sm whitespace-nowrap shrink-0 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Unduh ZIP (2.9 MB)</span>
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-700 text-xs text-stone-600 dark:text-stone-300">
              <span className="font-semibold text-stone-800 dark:text-stone-200">Cara mengunggah ke GitHub setelah mengunduh:</span>
              <ol className="list-decimal list-inside space-y-1 mt-1 text-[11px] sm:text-xs">
                <li>Buka <a href="https://github.com/new" target="_blank" rel="noreferrer" className="text-emerald-700 dark:text-emerald-400 underline font-semibold">github.com/new</a> lalu buat repositori baru (misal: <code className="bg-stone-200 dark:bg-stone-700 px-1 rounded">jdih-transmigrasi</code>).</li>
                <li>Pada halaman repositori baru yang masih kosong, klik tautan <strong>"uploading an existing file"</strong>.</li>
                <li>Ekstrak berkas ZIP yang telah diunduh, seret (drag and drop) seluruh foldernya ke GitHub, lalu klik <strong>Commit changes</strong>. Selesai!</li>
              </ol>
            </div>
          </div>

          {/* OPSI 2: PUSH MENGGUNAKAN GIT COMMAND LINE */}
          <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
              Opsi 2 · Menggunakan Git CLI di Komputer Anda
            </span>
            <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-700" />
              <span>Personalisasi Perintah Git Push</span>
            </h3>

            {/* Input Form for GitHub username & repo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 p-3 bg-stone-100 dark:bg-stone-800/80 rounded-md">
              <div>
                <label className="text-[11px] font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Username GitHub Anda:
                </label>
                <input
                  type="text"
                  value={githubUsername}
                  onChange={(e) => setGithubUsername(e.target.value)}
                  placeholder="Contoh: increed9a"
                  className="w-full px-2.5 py-1.5 text-xs bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded font-mono focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                  Nama Repositori Baru di GitHub:
                </label>
                <input
                  type="text"
                  value={repoName}
                  onChange={(e) => setRepoName(e.target.value)}
                  placeholder="Contoh: jdih-transmigrasi"
                  className="w-full px-2.5 py-1.5 text-xs bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded font-mono focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
              </div>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-300 mb-2">
              Salin perintah berikut dan jalankan di terminal folder proyek Anda:
            </p>

            <div className="relative bg-stone-950 text-stone-100 rounded-lg p-3 font-mono text-xs overflow-x-auto">
              <pre className="whitespace-pre">{pushCommands}</pre>
              <button
                onClick={() => handleCopy(pushCommands, 2)}
                className="absolute right-2 top-2 p-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded transition-colors cursor-pointer"
                title="Salin Semua Perintah"
              >
                {copiedIndex === 2 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* OPSI 3: BANTUAN PUSH LANGSUNG DARI SINI */}
          <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-lg text-xs space-y-2">
            <h4 className="font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Opsi 3 · Mau AI yang Push Langsung dari Terminal Ini?</span>
            </h4>
            <p className="text-amber-800 dark:text-amber-300/90 leading-relaxed">
              Jika Anda ingin saya mengeksekusi perintah <code className="bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded font-mono">git push</code> langsung dari sesi obrolan ini, silakan buat repository kosong di akun GitHub Anda, lalu tuliskan di chat:
            </p>
            <div className="p-2.5 bg-white dark:bg-stone-900 border border-amber-300 dark:border-amber-700 rounded font-mono text-[11px] text-stone-800 dark:text-stone-200">
              URL Repository: https://github.com/{githubUsername || 'username'}/{repoName || 'jdih-transmigrasi'}.git<br />
              GitHub Personal Access Token (PAT): ghp_xxxxxxxxxxxxxxxxxxxx
            </div>
            <p className="text-[11px] text-amber-700 dark:text-amber-400">
              *(Saya akan langsung menambahkan remote dan melakukan push ke branch main repositori Anda).*
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-center justify-between text-xs">
          <a
            href="https://github.com/new"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-700 dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1"
          >
            <span>Buka Buat Repo Baru di GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold rounded hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};

