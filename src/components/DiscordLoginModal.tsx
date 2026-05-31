// src/components/DiscordLoginModal.tsx
import { X, Lock, UserCircle, ShieldCheck } from 'lucide-react';

interface DiscordLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiscordLoginModal({ isOpen, onClose }: DiscordLoginModalProps) {
  if (!isOpen) return null;

  return (
    // Háttér elsötétítése és homályosítása
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 animate-in fade-in duration-300">
      
      {/* Maga a felugró ablak */}
      <div className="bg-darker border border-gray-800 rounded-2xl w-full max-w-md relative overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        
        {/* Bezárás gomb (X) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors bg-gray-900 hover:bg-gray-800 p-2 rounded-full"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#5865F2]/10 rounded-2xl flex items-center justify-center border border-[#5865F2]/30">
              <Lock className="text-[#5865F2]" size={32} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white text-center mb-2">Bejelentkezés</h2>
          <p className="text-gray-400 text-center text-sm mb-8">
            Lépj be a Discord fiókoddal, hogy kezeld a Prémium Pontjaidat, megtekintsd az IC karaktereid statisztikáit és igényeld a bónuszaidat.
          </p>

          <div className="bg-[#1a1a1a] rounded-xl p-4 mb-8 border border-gray-800">
            <h3 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
              <ShieldCheck className="text-brand" size={16} /> Engedélyezett adatok:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <UserCircle size={18} className="text-gray-500" /> Profilkép és Felhasználónév
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Lock size={18} className="text-gray-500" /> Szerver tagság ellenőrzése (Whitelist)
              </li>
            </ul>
          </div>

          {/* Discord Auth Gomb */}
          <button 
            onClick={() => {
              // Ide jön majd az igazi OAUTH2 link
              alert("Itt átirányítanánk a Discord OAuth2 oldalára!");
              onClose();
            }}
            className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg hover:shadow-[0_0_20px_rgba(88,101,242,0.4)] hover:-translate-y-1"
          >
            {/* Egyszerű Discord logó SVG */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 127.14 96.36">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.1,46,96,53,91.08,65.69,84.69,65.69Z"/>
            </svg>
            Belépés Discorddal
          </button>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              A bejelentkezéssel elfogadod az <a href="#" className="text-brand hover:underline">ÁSZF</a>-et és az <a href="#" className="text-brand hover:underline">Adatvédelmi nyilatkozatot</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}