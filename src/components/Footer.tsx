// src/components/Footer.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
// Eltávolítottuk az Instagram és Facebook importokat innen:
import { MessageSquare, Video, Shield, Mail } from 'lucide-react';
import LegalModal from './LegalModal';

export default function Footer() {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title: string) => {
    setModalTitle(title);
    setIsLegalModalOpen(true);
  };

  return (
    <>
      <footer className="bg-darker border-t border-gray-800 pt-16 pb-8 mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* 1. Oszlop: Rólunk / Logó */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center shadow-[0_0_10px_rgba(250,204,21,0.3)]">
                  <span className="text-brand-red font-black text-sm italic tracking-tighter">RP</span>
                </div>
                <span className="text-xl font-bold text-white tracking-wider">
                  ROLE<span className="text-brand">PLAY</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Magyarország egyik legdinamikusabban fejlődő Roleplay szervere. Célunk a minőségi szórakoztatás és egy összetartó közösség építése.
              </p>
              
              {/* Social Ikonok JAVÍTVA */}
              <div className="flex gap-4 items-center">
                <a href="#" className="text-gray-400 hover:text-[#5865F2] transition-colors" title="Discord">
                  <MessageSquare size={20} />
                </a>
                
                {/* Natív Instagram SVG */}
                <a href="#" className="text-gray-400 hover:text-[#E1306C] transition-colors" title="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                
                {/* Natív Facebook SVG */}
                <a href="#" className="text-gray-400 hover:text-[#1877F2] transition-colors" title="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                
                <a href="#" className="text-gray-400 hover:text-white transition-colors" title="TikTok">
                  <Video size={20} />
                </a>
              </div>

            </div>

            {/* 2. Oszlop: Gyorslinkek */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">Navigáció</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-brand transition-colors text-sm">Kezdőlap</Link></li>
                <li><Link to="/shop" className="text-gray-400 hover:text-brand transition-colors text-sm">Prémium Webshop</Link></li>
                <li><Link to="/rules" className="text-gray-400 hover:text-brand transition-colors text-sm">Szerverszabályzat</Link></li>
                <li><Link to="/staff" className="text-gray-400 hover:text-brand transition-colors text-sm">Csapatunk</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-brand transition-colors text-sm">CFX Szerver Oldal</a></li>
              </ul>
            </div>

            {/* 3. Oszlop: Jogi információk (MODAL GOMBOK) */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2"><Shield size={18} className="text-brand" /> Jogi Infók</h3>
              <ul className="space-y-3">
                <li><button onClick={() => openModal("Általános Szerződési Feltételek")} className="text-gray-400 hover:text-white transition-colors text-sm text-left">Általános Szerződési Feltételek</button></li>
                <li><button onClick={() => openModal("Adatkezelési Tájékoztató")} className="text-gray-400 hover:text-white transition-colors text-sm text-left">Adatkezelési Tájékoztató</button></li>
                <li><button onClick={() => openModal("Adattovábbítási Nyilatkozat")} className="text-gray-400 hover:text-white transition-colors text-sm text-left">Adattovábbítási Nyilatkozat</button></li>
                <li><button onClick={() => openModal("SimplePay Tájékoztató")} className="text-gray-400 hover:text-white transition-colors text-sm text-left">SimplePay Tájékoztató</button></li>
              </ul>
            </div>

            {/* 4. Oszlop: Kapcsolat */}
            <div>
               <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2"><Mail size={18} className="text-brand" /> Kapcsolat</h3>
               <p className="text-gray-400 text-sm mb-4">
                 Kérdésed van a támogatással vagy a szerverrel kapcsolatban?
               </p>
               <Link to="/contact" className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors mb-4 border border-gray-700">
                  Kapcsolatfelvétel
               </Link>
               <div className="mt-4 pt-4 border-t border-gray-800">
                 <div className="text-2xl font-black text-gray-500 italic tracking-tighter opacity-50">
                    Simple<span className="text-white">Pay</span>
                 </div>
               </div>
            </div>

          </div>

          <div className="text-center pt-8 border-t border-gray-800 text-gray-500 text-xs">
            <p>&copy; {new Date().getFullYear()} RP Server. Minden jog fenntartva.</p>
            <p className="mt-1">Ezt a weboldalt nem a Rockstar Games vagy a Take-Two Interactive üzemelteti.</p>
          </div>
        </div>
      </footer>

      {/* A Modális Ablak beágyazása */}
      <LegalModal 
        isOpen={isLegalModalOpen} 
        onClose={() => setIsLegalModalOpen(false)} 
        title={modalTitle}
      />
    </>
  );
}