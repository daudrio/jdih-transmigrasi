import React from 'react';
import { Network, ChevronRight, ExternalLink, ShieldCheck, ArrowDown } from 'lucide-react';
import { Regulation } from '../types/jdih';

interface RegulatoryHierarchyViewProps {
  regulations: Regulation[];
  onSelectRegulation: (regulation: Regulation) => void;
}

export const RegulatoryHierarchyView: React.FC<RegulatoryHierarchyViewProps> = ({
  regulations,
  onSelectRegulation
}) => {
  const getReg = (id: string) => regulations.find((r) => r.id === id);

  const hierarchyTiers = [
    {
      level: 'Tingkat I: Undang-Undang Dasar',
      tierName: 'UUD NRI Tahun 1945',
      note: 'Landasan Konstitusional Kesejahteraan Rakyat, Hak Atas Pekerjaan, dan Penguasaan Bumi & Air oleh Negara (Pasal 27 ayat 2 & Pasal 33)',
      regIds: []
    },
    {
      level: 'Tingkat II: Undang-Undang Pokok (Statute)',
      tierName: 'Undang-Undang Ketransmigrasian',
      note: 'Regulasi dasar yang menetapkan hak, kewajiban, tata cara penyiapan wilayah budidaya transmigrasi, dan perlindungan agraria.',
      regIds: ['uu-29-2009', 'uu-15-1997']
    },
    {
      level: 'Tingkat III: Peraturan Pemerintah (PP)',
      tierName: 'Regulasi Pelaksana Teknis & Pengadaan Lahan',
      note: 'Mengatur bantuan bekal hidup, seleksi calon transmigran, dan perlindungan pengadaan tanah proyek strategis.',
      regIds: ['pp-3-2014', 'pp-19-2021']
    },
    {
      level: 'Tingkat IV: Peraturan Presiden (Perpres)',
      tierName: 'Kelembagaan & Koordinasi Terpadu Lintas Sektor',
      note: 'Kedudukan mandat kementerian mandiri Kabinet Merah Putih dan koordinasi lintas kementerian.',
      regIds: ['perpres-142-2024', 'perpres-50-2018']
    },
    {
      level: 'Tingkat V: Peraturan Menteri Transmigrasi (Permen)',
      tierName: 'Tata Kelola Operasional & Standar Pelayanan Minimal',
      note: 'Tata Kelola HPL, percepatan sertifikasi SHM dalam 3 tahun, SPM air bersih, dan agribisnis berkelanjutan.',
      regIds: ['permen-trans-1-2025', 'permen-trans-3-2025', 'permen-trans-5-2024', 'permendesa-14-2018']
    },
    {
      level: 'Tingkat VI: Keputusan & Surat Edaran Menteri',
      tierName: 'Instrumen Penetapan Lokasi & Gugus Tugas Lapangan',
      note: 'Penetapan 120 satuan pemukiman prioritas nasional dan percepatan sertifikat lahan usaha II bersama BPN.',
      regIds: ['kepmen-trans-42-2025', 'se-menteri-2-2025']
    }
  ];

  return (
    <section className="py-8 transition-colors">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold tracking-widest uppercase text-emerald-800 dark:text-emerald-400 mb-1">
            Hierarki Perundang-Undangan
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-50 mb-2">
            Pohon Regulasi & Silsilah Hukum Ketransmigrasian
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
            Pemetaan vertikal hierarki kekuatan hukum berdasarkan UU No. 12 Tahun 2011, serta keterhubungan harmonisasi regulasi di lingkungan Kementerian Transmigrasi.
          </p>
        </div>

        {/* Hierarchy Chain */}
        <div className="space-y-6 relative before:absolute before:left-4 sm:before:left-1/2 before:top-4 before:bottom-4 before:w-0.5 before:bg-stone-200 dark:before:bg-stone-800">
          {hierarchyTiers.map((tier, idx) => (
            <div key={idx} className="relative">
              {/* Central Badge */}
              <div className="flex items-center justify-center mb-3">
                <span className="relative z-10 bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold px-3 py-1 rounded-full shadow-2xs">
                  {tier.level}
                </span>
              </div>

              {/* Tier Content Card */}
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 shadow-xs transition-colors">
                <div className="mb-3">
                  <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-50">
                    {tier.tierName}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-1">
                    {tier.note}
                  </p>
                </div>

                {/* Regulation Items inside this tier */}
                {tier.regIds.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-3 border-t border-stone-100 dark:border-stone-800">
                    {tier.regIds.map((id) => {
                      const reg = getReg(id);
                      if (!reg) return null;

                      return (
                        <div
                          key={reg.id}
                          onClick={() => onSelectRegulation(reg)}
                          className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded border border-stone-200 dark:border-stone-700/80 hover:border-emerald-600 dark:hover:border-emerald-500 cursor-pointer transition-all flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-center justify-between text-[11px] mb-1">
                              <span className="font-mono font-semibold text-stone-700 dark:text-stone-300">
                                {reg.type} No. {reg.number}/{reg.year}
                              </span>
                              <span className={reg.status === 'Berlaku' ? 'text-emerald-700 font-medium' : reg.status === 'Dicabut' ? 'text-rose-600' : 'text-amber-700'}>
                                {reg.status}
                              </span>
                            </div>
                            <h4 className="font-serif font-semibold text-xs text-stone-900 dark:text-stone-100 line-clamp-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                              {reg.shortTitle}
                            </h4>
                          </div>

                          <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-stone-200/50 dark:border-stone-700/50 text-[11px] text-stone-500">
                            <span>{reg.promulgatedDate}</span>
                            <span className="flex items-center gap-0.5 font-medium text-emerald-800 dark:text-emerald-400 group-hover:underline">
                              Buka <ExternalLink className="w-2.5 h-2.5" />
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Connecting arrow if not last */}
              {idx < hierarchyTiers.length - 1 && (
                <div className="flex justify-center my-2 text-stone-400 dark:text-stone-600">
                  <ArrowDown className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
