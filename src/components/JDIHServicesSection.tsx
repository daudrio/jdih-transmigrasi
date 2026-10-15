import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Star, 
  HelpCircle, 
  Clock, 
  ShieldCheck, 
  FileCheck, 
  Copy, 
  Check,
  Building2,
  Users
} from 'lucide-react';
import { useThemeAndA11y } from '../context/ThemeAndA11yContext';
import { LegalServiceTicket } from '../types/jdih';

export const JDIHServicesSection: React.FC = () => {
  const { announce } = useThemeAndA11y();

  const [activeTab, setActiveTab] = useState<'request' | 'skm'>('request');

  // Service Request Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    requestType: 'Salinan Resmi Dokumen',
    regulationTarget: '',
    notes: ''
  });
  const [submittedTicket, setSubmittedTicket] = useState<LegalServiceTicket | null>(null);
  const [isCopiedTicket, setIsCopiedTicket] = useState<boolean>(false);

  // SKM Survey Form State
  const [skmRatings, setSkmRatings] = useState({
    speed: 5,
    accuracy: 5,
    accessibility: 5,
    feedback: '',
    respondentCategory: 'Masyarakat / Transmigran'
  });
  const [skmSubmitted, setSkmSubmitted] = useState<boolean>(false);
  const [averageScore, setAverageScore] = useState<number>(4.88);
  const [totalRespondents, setTotalRespondents] = useState<number>(1420);

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.regulationTarget) {
      announce('Mohon lengkapi formulir permohonan yang bertanda bintang');
      return;
    }

    const ticketNumber = `TKT-${Math.floor(100000 + Math.random() * 900000)}`;
    const newTicket: LegalServiceTicket = {
      id: Date.now().toString(),
      ticketNumber,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone || '-',
      institution: formData.institution || 'Perorangan',
      requestType: formData.requestType as any,
      regulationTarget: formData.regulationTarget,
      notes: formData.notes || '-',
      status: 'Diterima',
      createdAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    };

    setSubmittedTicket(newTicket);
    announce(`Permohonan berhasil dikirim dengan Nomor Tiket ${ticketNumber}`);
  };

  const handleSkmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const surveyMean = (skmRatings.speed + skmRatings.accuracy + skmRatings.accessibility) / 3;
    const newAverage = Number(((averageScore * totalRespondents + surveyMean) / (totalRespondents + 1)).toFixed(2));
    setAverageScore(newAverage);
    setTotalRespondents((prev) => prev + 1);
    setSkmSubmitted(true);
    announce('Terima kasih, penilaian Survei Kepuasan Masyarakat berhasil disimpan');
  };

  const copyTicket = () => {
    if (submittedTicket) {
      navigator.clipboard.writeText(submittedTicket.ticketNumber);
      setIsCopiedTicket(true);
      setTimeout(() => setIsCopiedTicket(false), 2000);
      announce('Nomor tiket berhasil disalin');
    }
  };

  return (
    <section className="py-8 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-semibold tracking-widest uppercase text-emerald-800 dark:text-emerald-400 mb-1">
            Layanan Publik Terpadu
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-50 mb-2">
            Pelayanan Informasi Hukum & Penilaian Kualitas
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
            Fasilitasi permohonan salinan naskah asli bertanda tangan sah, konsultasi peraturan ketransmigrasian, dan survei kepuasan indeks pelayanan publik.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-stone-200 dark:border-stone-800 mb-6 justify-center">
          <div className="flex gap-2 p-1 bg-stone-100 dark:bg-stone-900 rounded-lg">
            <button
              onClick={() => setActiveTab('request')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'request'
                  ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Permohonan Dokumen & Konsultasi
            </button>
            <button
              onClick={() => setActiveTab('skm')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'skm'
                  ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Survei Kepuasan (SKM)
            </button>
          </div>
        </div>

        {/* TAB 1: SERVICE REQUEST */}
        {activeTab === 'request' && (
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6 sm:p-8 shadow-xs">
            {submittedTicket ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-50 mb-1">
                  Permohonan Layanan Hukum Diterima
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 max-w-md mx-auto mb-6">
                  Permohonan Anda telah tercatat dalam sistem administrasi Biro Hukum Kementerian Transmigrasi. Tim petugas telaah hukum akan menindaklanjuti dalam waktu maksimal 1x24 jam kerja.
                </p>

                <div className="bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg p-4 max-w-sm mx-auto mb-6">
                  <div className="text-xs text-stone-500 mb-1">Nomor Registrasi Tiket:</div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-mono text-xl font-bold text-emerald-800 dark:text-emerald-400">
                      {submittedTicket.ticketNumber}
                    </span>
                    <button
                      onClick={copyTicket}
                      className="p-1 text-stone-500 hover:text-stone-800 dark:hover:text-stone-200"
                      title="Salin Nomor Tiket"
                    >
                      {isCopiedTicket ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="text-[11px] text-stone-400 mt-2">
                    Diajukan oleh: {submittedTicket.fullName} ({submittedTicket.email})
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSubmittedTicket(null);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      institution: '',
                      requestType: 'Salinan Resmi Dokumen',
                      regulationTarget: '',
                      notes: ''
                    });
                  }}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded transition-colors"
                >
                  Ajukan Permohonan Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleServiceSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                      Nama Lengkap Pemohon <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Contoh: Dr. Hendra Prasetyo, S.H."
                      className="w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded p-2.5 text-stone-900 dark:text-stone-100 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                      Alamat Email Aktif <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="hendra@universitas.ac.id"
                      className="w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded p-2.5 text-stone-900 dark:text-stone-100 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                      Nomor Telepon / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0812-XXXX-XXXX"
                      className="w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded p-2.5 text-stone-900 dark:text-stone-100 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                      Asal Instansi / Universitas / Lembaga
                    </label>
                    <input
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="Pemerintah Daerah / Kantor Hukum / Pribadi"
                      className="w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded p-2.5 text-stone-900 dark:text-stone-100 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                      Kategori Layanan Yang Dibutuhkan
                    </label>
                    <select
                      value={formData.requestType}
                      onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                      className="w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded p-2.5 text-stone-900 dark:text-stone-100 focus:outline-hidden"
                    >
                      <option value="Salinan Resmi Dokumen">Salinan Resmi Berkas Asli (Ttd & Cap Basah)</option>
                      <option value="Konsultasi Peraturan">Konsultasi Kebijakan Regulasi Transmigrasi</option>
                      <option value="Klarifikasi Status Hukum">Klarifikasi Keberlakuan Regulasi</option>
                      <option value="Penelitian Akademik">Bantuan Data Naskah Akademik & Skripsi/Tesis</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                      Regulasi Yang Menjadi Rujukan <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.regulationTarget}
                      onChange={(e) => setFormData({ ...formData, regulationTarget: e.target.value })}
                      placeholder="Misal: Permen Trans No. 1 Tahun 2025 (HPL)"
                      className="w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded p-2.5 text-stone-900 dark:text-stone-100 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Uraian Keperluan & Keterangan Tambahan
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Sebutkan pasal yang memerlukan penjelasan khusus atau lampiran naskah yang diinginkan..."
                    className="w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded p-2.5 text-stone-900 dark:text-stone-100 focus:outline-hidden"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Layanan bebas biaya (Gratis) sesuai UU Keterbukaan Informasi Publik</span>
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white text-xs font-semibold rounded transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Permohonan</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* TAB 2: SKM (SURVEI KEPUASAN MASYARAKAT) */}
        {activeTab === 'skm' && (
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6 sm:p-8 shadow-xs">
            {/* Real-time Indicator Banner */}
            <div className="bg-stone-100/70 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 rounded-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-500 dark:text-stone-400 block">Indeks Kepuasan Masyarakat (IKM) JDIH</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-bold text-emerald-800 dark:text-emerald-400 tabular-nums">
                    {averageScore}
                  </span>
                  <span className="text-xs font-medium text-stone-600 dark:text-stone-300">
                    dari skala 5.00 (Mutu Pelayanan A / Sangat Baik)
                  </span>
                </div>
              </div>

              <div className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-700" />
                <span>Berdasarkan masukan <strong>{totalRespondents.toLocaleString()}</strong> responden</span>
              </div>
            </div>

            {skmSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-50">
                  Terima Kasih Atas Penilaian Anda!
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 max-w-sm mx-auto mt-1 mb-4">
                  Setiap masukan sangat berharga bagi peningkatan kecepatan respon dan kemudahan akses portal dokumentasi hukum Kementerian Transmigrasi.
                </p>
                <button
                  onClick={() => setSkmSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded"
                >
                  Kirim Masukan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSkmSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Kelompok Responden
                  </label>
                  <select
                    value={skmRatings.respondentCategory}
                    onChange={(e) => setSkmRatings({ ...skmRatings, respondentCategory: e.target.value })}
                    className="w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded p-2 text-stone-900 dark:text-stone-100"
                  >
                    <option value="Masyarakat / Transmigran">Masyarakat Umum / Transmigran</option>
                    <option value="Akademisi / Peneliti">Akademisi / Peneliti Hukum</option>
                    <option value="Pemerintah Daerah">Aparatur Pemerintah Daerah</option>
                    <option value="Praktisi Hukum">Praktisi Hukum / Advokat / Notaris</option>
                  </select>
                </div>

                {/* Question 1: Speed */}
                <div className="border-t border-stone-100 dark:border-stone-800 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                      1. Kemudahan Menemukan dan Kecepatan Mengunduh Dokumen
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">
                      {skmRatings.speed} / 5
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setSkmRatings({ ...skmRatings, speed: star })}
                        className={`p-1.5 rounded transition-colors ${
                          star <= skmRatings.speed ? 'text-amber-500' : 'text-stone-300 dark:text-stone-700'
                        }`}
                        aria-label={`Beri nilai ${star} dari 5`}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 2: Accuracy */}
                <div className="border-t border-stone-100 dark:border-stone-800 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                      2. Kejelasan Metadata & Keakuratan Status Keberlakuan Regulasi
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">
                      {skmRatings.accuracy} / 5
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setSkmRatings({ ...skmRatings, accuracy: star })}
                        className={`p-1.5 rounded transition-colors ${
                          star <= skmRatings.accuracy ? 'text-amber-500' : 'text-stone-300 dark:text-stone-700'
                        }`}
                        aria-label={`Beri nilai ${star} dari 5`}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 3: Accessibility */}
                <div className="border-t border-stone-100 dark:border-stone-800 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                      3. Fitur Aksesibilitas (Mode Gelap, Pembaca Teks Suara, Skala Huruf)
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400">
                      {skmRatings.accessibility} / 5
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setSkmRatings({ ...skmRatings, accessibility: star })}
                        className={`p-1.5 rounded transition-colors ${
                          star <= skmRatings.accessibility ? 'text-amber-500' : 'text-stone-300 dark:text-stone-700'
                        }`}
                        aria-label={`Beri nilai ${star} dari 5`}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Feedback note */}
                <div className="border-t border-stone-100 dark:border-stone-800 pt-4">
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Saran & Rekomendasi Peningkatan Layanan
                  </label>
                  <textarea
                    rows={2}
                    value={skmRatings.feedback}
                    onChange={(e) => setSkmRatings({ ...skmRatings, feedback: e.target.value })}
                    placeholder="Tuliskan saran penyempurnaan katalog atau fitur baru yang Anda harapkan..."
                    className="w-full text-xs bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded p-2 text-stone-900 dark:text-stone-100 focus:outline-hidden"
                  />
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded transition-colors shadow-xs"
                  >
                    Kirim Penilaian SKM
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
