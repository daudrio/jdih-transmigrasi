import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, ExternalLink, Code2 } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenGitHub?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenGitHub }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 transition-colors pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          {/* Institutional Identity Column */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-stone-800 border border-stone-700 flex items-center justify-center p-1">
                <img
                  src="/src/assets/images/legal_codex_document_1792042732792.jpg"
                  alt="Garuda RI"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-stone-100">
                  JDIH KEMENTERIAN TRANSMIGRASI
                </h3>
                <p className="text-xs text-stone-400">
                  Kementerian Transmigrasi Republik Indonesia
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-md pt-2">
              Jaringan Dokumentasi dan Informasi Hukum (JDIH) Kementerian Transmigrasi menyajikan basis data produk legislasi dan informasi hukum terpadu guna mewujudkan kepastian hukum, transparansi tata kelola agraria, serta pelayanan prima bagi transmigran dan masyarakat umum.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-stone-800/80 px-2.5 py-1 rounded border border-stone-700">
                <ShieldCheck className="w-4 h-4" />
                <span>Terakreditasi Bintang 5 JDIHN Nasional</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-stone-100 uppercase tracking-wider">
              Kanal Navigasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('katalog')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Katalog Produk Hukum (UU, PP, Permen)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('silsilah')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Silsilah & Hierarki Regulasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('statistik')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Statistik & Visualisasi Data Regulasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('layanan')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Permohonan Salinan Sah & Konsultasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('layanan')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Survei Kepuasan Masyarakat (SKM)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('berita')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Warta Pembentukan Peraturan
                </button>
              </li>
              {onOpenGitHub && (
                <li>
                  <button
                    onClick={onOpenGitHub}
                    className="hover:text-emerald-400 transition-colors text-left text-emerald-400 flex items-center gap-1.5"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Repositori GitHub & CI/CD</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Contact & Secretariat Column */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="font-serif font-bold text-sm text-stone-100 uppercase tracking-wider">
              Kontak Sekretariat JDIH
            </h4>
            
            <div className="flex items-start gap-2.5 text-stone-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Biro Hukum dan Organisasi, Sekretariat Jenderal Kementerian Transmigrasi RI,
                Jl. TMP Kalibata No. 17, Jakarta Selatan 12750, DKI Jakarta.
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-stone-400">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>jdih@transmigrasi.go.id</span>
            </div>

            <div className="flex items-center gap-2.5 text-stone-400">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>(021) 799-4444 / Hotline Layanan: 1500-844</span>
            </div>

            <div className="pt-2 text-stone-500 text-[11px] leading-relaxed">
              Jam Operasional Pelayanan Informasi:
              <br />Senin – Jumat: 08.00 – 16.00 WIB (Kecuali Hari Libur Nasional)
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} JDIH Kementerian Transmigrasi Republik Indonesia. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px]">Sesuai Perpres No. 33 Tahun 2012 tentang JDIHN</span>
            <span aria-hidden="true">·</span>
            <span className="text-[11px]">Standar Satu Data Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
