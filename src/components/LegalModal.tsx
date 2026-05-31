// src/components/LegalModal.tsx
import { X, FileText, Download } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function LegalModal({ isOpen, onClose, title }: LegalModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 animate-in fade-in duration-300">
      <div className="bg-darker border border-gray-800 rounded-2xl w-full max-w-4xl max-h-[85vh] relative flex flex-col shadow-2xl animate-in slide-in-from-bottom-10 duration-300">
        
        {/* Fejléc */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-[#121212] rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
              <FileText className="text-brand" size={24} />
            </div>
            <h2 className="text-xl font-bold text-white">{title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors bg-gray-900 hover:bg-gray-800 p-2 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tartalom (Görgethető) */}
        <div className="p-8 overflow-y-auto text-gray-400 text-sm leading-relaxed space-y-6 flex-grow custom-scrollbar">
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 text-brand mb-6">
            <strong>Utolsó frissítés:</strong> 2026. május 20. | <strong>Verzió:</strong> 2.4.1
          </div>
          
          <h3 className="text-white text-lg font-bold">1. Általános Rendelkezések</h3>
          <p>
            Jelen dokumentum (a továbbiakban: "ÁSZF" vagy "Nyilatkozat") tartalmazza a Roleplay Server (a továbbiakban: "Szolgáltató") által üzemeltetett weboldal és a hozzá kapcsolódó szerverszolgáltatások használatának feltételeit. A weboldal használatával, illetve virtuális tartalom (Prémium Pont) vásárlásával a Felhasználó maradéktalanul elfogadja a jelen feltételeket.
          </p>

          <h3 className="text-white text-lg font-bold">2. Virtuális Fizetőeszköz (Prémium Pont)</h3>
          <p>
            A Prémium Pont (PP) egy virtuális fizetőeszköz, amely kizárólag a Szolgáltató játékszerverén belül használható fel digitális tartalmak (pl. járművek, VIP rang) kiváltására. A PP készpénzre nem váltható, más felhasználóra át nem ruházható. A vásárlás befejezését követően a tranzakció visszavonására (Refund) nincs lehetőség, tekintettel a digitális tartalom azonnali biztosítására.
          </p>

          <h3 className="text-white text-lg font-bold">3. Fizetés és Adattovábbítás (SimplePay)</h3>
          <p>
            Tudomásul veszem, hogy a weboldal üzemeltetője által a(z) rpserver.hu felhasználói adatbázisában tárolt alábbi személyes adataim átadásra kerülnek az OTP Mobil Kft., mint adatkezelő részére. Az átított adatok köre: felhasználónév, e-mail cím, IP cím, fizetés időpontja. Az adattovábbítás célja: a fizetési tranzakciók lebonyolítása és ügyfélszolgálati segítségnyújtás.
          </p>
          
          <h3 className="text-white text-lg font-bold">4. Fiók Biztonsága és Felelősség</h3>
          <p>
            A Felhasználó kizárólagos felelősséggel tartozik a felhasználói fiókjának és jelszavának biztonságáért. A Szolgáltató nem vállal felelősséget a fiókhoz való illetéktelen hozzáférésből eredő PP vagy digitális tartalom vesztéséért.
          </p>
          
          <div className="h-10"></div> {/* Térköz az aljához */}
        </div>

        {/* Lábléc */}
        <div className="p-4 border-t border-gray-800 bg-[#121212] rounded-b-2xl flex justify-end gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
            <Download size={16} /> PDF letöltése
          </button>
          <button 
            onClick={onClose}
            className="bg-brand text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Elfogadom és Bezár
          </button>
        </div>
      </div>
    </div>
  );
}