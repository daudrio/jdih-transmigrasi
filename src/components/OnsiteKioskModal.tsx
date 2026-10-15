import React, { useState } from 'react';
import { 
  X, 
  Monitor, 
  MapPin, 
  Clock, 
  Printer, 
  Search, 
  FileText, 
  CheckCircle2, 
  Ticket, 
  Users, 
  BookOpen, 
  HelpCircle,
  Volume2
} from 'lucide-react';
import { useThemeAndA11y } from '../context/ThemeAndA11yContext';
import { INITIAL_REGULATIONS } from '../data/regulationsData';
import { KioskQueueTicket } from '../types/jdih';

interface OnsiteKioskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnsiteKioskModal: React.FC<OnsiteKioskModalProps> = ({ isOpen, onClose }) => {
  const { announce, speakText } = useThemeAndA11y();
  const [kioskView, setKioskView] = useState<'home' | 'search' | 'ticket' | 'info'>('home');
  const [visitorName, setVisitorName] = useState<string>('');
  const [serviceChoice, setServiceChoice] = useState<KioskQueueTicket['serviceRequested']>('Pojok JDIH Konsultasi');
  const [generatedTicket, setGeneratedTicket] = useState<KioskQueueTicket | null>(null);
  const [kioskSearchQuery, setKioskSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const handleTakeTicket = (e: React.FormEvent) => {
    e.preventDefault();
    const num = Math.floor(10 + Math.random() * 90);
    const code = serviceChoice === 'Pojok JDIH Konsultasi' ? `A-${num}` : serviceChoice === 'Cetak Salinan Sah' ? `B-${num}` : `C-${num}`;
    const newTicket: KioskQueueTicket = {
      ticketNumber: code,
      visitorName: visitorName || 'Pengunjung Onsite',
      serviceRequested: serviceChoice,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB',
      boothNumber: serviceChoice === 'Pojok JDIH Konsultasi' ? 'Loket 1 (Konsultasi Regulasi)' : 'Loket 2 (Layanan Salinan)'
    };

    setGeneratedTicket(newTicket);
    setKioskView('ticket');
    announce(`Nomor antrean ${code} berhasil dicetak.`);
    speakText(`Nomor antrean Anda ${code}. Silakan menuju ${newTicket.boothNumber}`);
  };

  const filteredKioskRegulations = INITIAL_REGULATIONS.filter((r) =>
    r.title.toLowerCase().includes(kioskSearchQuery.toLowerCase()) ||
    r.number.includes(kioskSearchQuery)
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="kiosk-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 lg:p-6"
    >
      <div className="bg-stone-900 border-4 border-stone-700 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden text-stone-100">
        
        {/* Kiosk Bezel Header */}
        <div className="px-6 py-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-700 text-white rounded-lg">
              <Monitor className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                Simulasi Kios Elektronik & Ruang Layanan Onsite · Variabel IV
              </span>
              <h2 id="kiosk-modal-title" className="font-serif font-bold text-base sm:text-lg text-white">
                Kios Informasi Hukum Mandiri (E-Kiosk JDIH Kemtrans)
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded hover:bg-stone-800"
            aria-label="Tutup Kios"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Touchscreen Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-stone-900">
          
          {/* Top Kios Mode Tabs */}
          <div className="flex justify-center mb-6">
            <div className="p-1 bg-stone-950 border border-stone-800 rounded-xl flex gap-1 text-xs">
              <button
                onClick={() => setKioskView('home')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  kioskView === 'home' ? 'bg-emerald-700 text-white shadow-xs' : 'text-stone-400 hover:text-white'
                }`}
              >
                Layar Utama Kios
              </button>
              <button
                onClick={() => setKioskView('search')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  kioskView === 'search' ? 'bg-emerald-700 text-white shadow-xs' : 'text-stone-400 hover:text-white'
                }`}
              >
                Pencarian Cepat Dokumen
              </button>
              <button
                onClick={() => setKioskView('info')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  kioskView === 'info' ? 'bg-emerald-700 text-white shadow-xs' : 'text-stone-400 hover:text-white'
                }`}
              >
                Info Pojok JDIH Fisik
              </button>
            </div>
          </div>

          {/* VIEW 1: HOME (Big Touch Buttons) */}
          {kioskView === 'home' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center">
                <h3 className="font-serif font-bold text-xl text-white mb-1">
                  Selamat Datang di Ruang Layanan JDIH Onsite
                </h3>
                <p className="text-xs text-stone-400">
                  Kementerian Transmigrasi RI · Silakan sentuh salah satu layanan yang Anda perlukan:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setServiceChoice('Pojok JDIH Konsultasi');
                    setKioskView('ticket');
                  }}
                  className="p-5 bg-stone-800/80 hover:bg-emerald-900/60 border border-stone-700 hover:border-emerald-500 rounded-xl text-left transition-all group flex flex-col justify-between min-h-[140px]"
                >
                  <Users className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-white">Konsultasi Meja Hukum Tatap Muka</h4>
                    <p className="text-xs text-stone-400 mt-1">Konsultasi dengan analis hukum mengenai HPL & hak tanah transmigrasi.</p>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setServiceChoice('Cetak Salinan Sah');
                    setKioskView('ticket');
                  }}
                  className="p-5 bg-stone-800/80 hover:bg-emerald-900/60 border border-stone-700 hover:border-emerald-500 rounded-xl text-left transition-all group flex flex-col justify-between min-h-[140px]"
                >
                  <Printer className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-white">Cetak Salinan Sah di Tempat</h4>
                    <p className="text-xs text-stone-400 mt-1">Cetak naskah Peraturan Menteri bertanda tangan sah dengan cap dinas.</p>
                  </div>
                </button>

                <button
                  onClick={() => setKioskView('search')}
                  className="p-5 bg-stone-800/80 hover:bg-emerald-900/60 border border-stone-700 hover:border-emerald-500 rounded-xl text-left transition-all group flex flex-col justify-between min-h-[140px]"
                >
                  <Search className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-white">Jelajah Katalog Digital</h4>
                    <p className="text-xs text-stone-400 mt-1">Cari peraturan secara mandiri melalui layar sentuh kios.</p>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setServiceChoice('Peminjaman Buku Hukum');
                    setKioskView('ticket');
                  }}
                  className="p-5 bg-stone-800/80 hover:bg-emerald-900/60 border border-stone-700 hover:border-emerald-500 rounded-xl text-left transition-all group flex flex-col justify-between min-h-[140px]"
                >
                  <BookOpen className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-white">Perpustakaan & Monografi Fisik</h4>
                    <p className="text-xs text-stone-400 mt-1">Akses buku monografi hukum cetak dan lembaran negara kuno.</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* VIEW 2: SEARCH ON KIOSK */}
          {kioskView === 'search' && (
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex items-center gap-2 bg-stone-950 border border-stone-700 rounded-lg p-3">
                <Search className="w-5 h-5 text-stone-400" />
                <input
                  type="text"
                  value={kioskSearchQuery}
                  onChange={(e) => setKioskSearchQuery(e.target.value)}
                  placeholder="Sentuh untuk mencari judul atau nomor peraturan..."
                  className="w-full bg-transparent text-sm text-white focus:outline-hidden"
                />
              </div>

              <div className="space-y-2 max-h-80 overflow-y-auto">
                {filteredKioskRegulations.map((reg) => (
                  <div
                    key={reg.id}
                    className="p-3 bg-stone-800 rounded-lg border border-stone-700 flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <span className="font-mono text-emerald-400 font-semibold">{reg.type} No. {reg.number}/{reg.year}</span>
                      <h4 className="font-serif font-semibold text-white mt-0.5">{reg.title}</h4>
                    </div>
                    <button
                      onClick={() => {
                        announce(`Dokumen ${reg.shortTitle} dipilih untuk dicetak di Kios.`);
                        speakText(`Dokumen ${reg.shortTitle} siap dicetak di printer kios.`);
                      }}
                      className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded font-medium flex items-center gap-1 shrink-0"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Cetak Kios</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 3: TICKET DISPENSER */}
          {kioskView === 'ticket' && (
            <div className="max-w-md mx-auto">
              {generatedTicket ? (
                <div className="bg-white text-stone-900 rounded-2xl p-6 shadow-2xl text-center space-y-4 font-mono border-4 border-dashed border-stone-400 animate-in zoom-in-95">
                  <div className="border-b-2 border-stone-300 pb-3">
                    <h4 className="font-serif font-bold text-sm uppercase">KEMENTERIAN TRANSMIGRASI RI</h4>
                    <p className="text-[11px] text-stone-600">POJOK JDIH & KLINIK HUKUM KAWASAN</p>
                    <p className="text-[10px] text-stone-500">Jl. TMP Kalibata No. 17, Jakarta Selatan</p>
                  </div>

                  <div>
                    <span className="text-xs text-stone-500 uppercase">NOMOR ANTREAN ANDA</span>
                    <div className="text-5xl font-bold text-emerald-800 my-1 tracking-wider">
                      {generatedTicket.ticketNumber}
                    </div>
                    <span className="text-xs font-semibold text-stone-700 block">{generatedTicket.boothNumber}</span>
                  </div>

                  <div className="text-xs text-left bg-stone-100 p-3 rounded space-y-1">
                    <div><strong>Layanan:</strong> {generatedTicket.serviceRequested}</div>
                    <div><strong>Nama:</strong> {generatedTicket.visitorName}</div>
                    <div><strong>Waktu Ambil:</strong> {generatedTicket.timestamp}</div>
                  </div>

                  <p className="text-[10px] text-stone-500">
                    Silakan duduk di ruang tunggu Pojok JDIH. Petugas kami akan memanggil nomor Anda.
                  </p>

                  <div className="flex items-center justify-center gap-2 pt-2">
                    <button
                      onClick={() => {
                        window.print();
                      }}
                      className="px-4 py-2 bg-stone-900 text-white text-xs font-semibold rounded flex items-center gap-1"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Cetak Tiket Fisik</span>
                    </button>
                    <button
                      onClick={() => {
                        setGeneratedTicket(null);
                        setKioskView('home');
                      }}
                      className="px-4 py-2 border border-stone-300 text-xs font-semibold rounded text-stone-700"
                    >
                      Selesai
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleTakeTicket} className="bg-stone-800 p-6 rounded-xl border border-stone-700 space-y-4">
                  <h3 className="font-serif font-bold text-base text-white text-center">
                    Ambil Nomor Antrean Layanan Onsite
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Pilihan Layanan
                    </label>
                    <select
                      value={serviceChoice}
                      onChange={(e) => setServiceChoice(e.target.value as any)}
                      className="w-full text-xs p-2.5 bg-stone-900 border border-stone-700 rounded text-white"
                    >
                      <option value="Pojok JDIH Konsultasi">Konsultasi Meja Bantuan Hukum (Loket 1)</option>
                      <option value="Cetak Salinan Sah">Cetak Salinan Sah Dokumen (Loket 2)</option>
                      <option value="Peminjaman Buku Hukum">Perpustakaan & Referensi Fisik</option>
                      <option value="Akses Kios Digital">Bantuan Pengoperasian Kios</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Nama Pengunjung (Opsional)
                    </label>
                    <input
                      type="text"
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      placeholder="Masukkan nama Anda..."
                      className="w-full text-xs p-2.5 bg-stone-900 border border-stone-700 rounded text-white placeholder-stone-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>Cetak Tiket Antrean Sekarang</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* VIEW 4: PHYSICAL POJOK JDIH INFO */}
          {kioskView === 'info' && (
            <div className="max-w-2xl mx-auto bg-stone-800 p-6 rounded-xl border border-stone-700 space-y-4 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <MapPin className="w-4 h-4" />
                <span>Lokasi Fisik Ruang Layanan Pojok JDIH</span>
              </div>
              <p className="text-stone-300 leading-relaxed">
                Ruang Layanan Informasi Hukum Onsite (Pojok JDIH) berlokasi di <strong>Lobi Utama Gedung Kementerian Transmigrasi Republik Indonesia</strong>, Jl. Taman Makam Pahlawan Kalibata No. 17, Jakarta Selatan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-stone-900 rounded border border-stone-700">
                  <Clock className="w-4 h-4 text-emerald-400 mb-1" />
                  <strong className="block text-white">Jam Operasional:</strong>
                  <span className="text-stone-400">Senin - Jumat: 08.30 - 15.30 WIB</span>
                </div>
                <div className="p-3 bg-stone-900 rounded border border-stone-700">
                  <Monitor className="w-4 h-4 text-emerald-400 mb-1" />
                  <strong className="block text-white">Fasilitas Tersedia:</strong>
                  <span className="text-stone-400">2 Unit Kios Sentuh, WiFi Cepat, Meja Konsultasi Privat, Printer Laser</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Kiosk Bezel Footer */}
        <div className="px-6 py-3 bg-stone-950 border-t border-stone-800 flex items-center justify-between text-xs text-stone-500">
          <span>Kios Elektronik JDIHN · Terhubung Langsung Jaringan Dokumentasi Nasional</span>
          <button
            onClick={() => setKioskView('home')}
            className="hover:text-stone-300 underline"
          >
            Kembali ke Beranda Kios
          </button>
        </div>

      </div>
    </div>
  );
};
