// src/pages/Webshop.tsx
import { useState } from 'react';
import { 
  ShoppingCart, Car, Info, CreditCard, CheckCircle, ShieldAlert, 
  Gem, Crown, DollarSign, Home, Briefcase, Users, Navigation, Wand2 
} from 'lucide-react';
import LegalModal from '../components/LegalModal'; // <-- Modális ablak importálása

export default function Webshop() {
  const [activeTab, setActiveTab] = useState<'packages' | 'vehicles' | 'extras' | 'info'>('packages');
  
  // Állapotok a modális ablakhoz
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title: string) => {
    setModalTitle(title);
    setIsLegalModalOpen(true);
  };

  // --- Mock Adatok ---
  const ppPackages = [
    { id: 1, name: "Bronz Csomag", price: "10.000 Ft", pp: "10.000", bonus: null, popular: false },
    { id: 2, name: "Ezüst Csomag", price: "20.000 Ft", pp: "21.000", bonus: "+1.000 PP Bónusz", popular: true },
    { id: 3, name: "Arany Csomag", price: "30.000 Ft", pp: "33.000", bonus: "+3.000 PP Bónusz", popular: false },
    { id: 4, name: "Gyémánt Csomag", price: "50.000 Ft", pp: "58.000", bonus: "+8.000 PP Bónusz", popular: false },
  ];

  const vehicles = [
    { id: 1, name: "Mercedes-Benz G63 AMG", price: "5.500 PP", img: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=600&auto=format&fit=crop" },
    { id: 2, name: "BMW M5 CS", price: "4.800 PP", img: "https://images.unsplash.com/photo-1555353540-64fd1b622828?q=80&w=600&auto=format&fit=crop" },
    { id: 3, name: "Porsche 911 GT3 RS", price: "6.200 PP", img: "https://images.unsplash.com/photo-1503376710356-70e6981186f9?q=80&w=600&auto=format&fit=crop" },
    { id: 4, name: "Audi RS6 Avant", price: "4.200 PP", img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=600&auto=format&fit=crop" },
  ];

  const extras = [
    { id: 1, name: "VIP Tagság (30 nap)", price: "2.500 PP", icon: <Crown size={32} />, desc: "Egyedi chates prefix, dupla fizetés az alapmunkákból és kiemelt Discord rang." },
    { id: 2, name: "IC Pénz Csomag", price: "1.000 PP", icon: <DollarSign size={32} />, desc: "Azonnali 10.000.000$ jóváírás a karaktereden, hogy beindítsd az RP-t." },
    { id: 3, name: "Saját Ház Igénylés", price: "5.000 PP", icon: <Home size={32} />, desc: "Egyedi interioros ház a térkép bármely pontján (adminisztrátori jóváhagyással)." },
    { id: 4, name: "Saját Cég Alapítás", price: "8.000 PP", icon: <Briefcase size={32} />, desc: "Nyiss saját boltot, szerelőtelepet vagy klubot egyedi scriptekkel!" },
    { id: 5, name: "Helikopter Engedély", price: "15.000 PP", icon: <Navigation size={32} />, desc: "Saját prémium helikopter és a hozzá tartozó folyamatos repülési engedély." },
    { id: 6, name: "Frakció Alapítás", price: "20.000 PP", icon: <Users size={32} />, desc: "Hozd létre saját illegál/legál frakciódat egyedi frakcióházzal és járművekkel." },
    { id: 7, name: "Aranyseprű", price: "1.500 PP", icon: <Wand2 size={32} />, desc: "Limitált kozmetikai kiegészítő, amivel garantáltan kitűnsz a tömegből a szerveren." },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        {/* FEJLÉC */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase">
            Prémium <span className="text-brand">Webshop</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Támogasd a szervert és váltsd be a Prémium Pontokat (PP) exkluzív járművekre, egyedi frakciókra vagy egyéb extrákra. A támogatásod segít a szerver fenntartásában!
          </p>
        </div>

        {/* TAB NAVIGÁCIÓ */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('packages')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'packages' ? 'bg-brand text-black shadow-[0_0_15px_rgba(250,204,21,0.3)]' : 'bg-darker text-gray-400 hover:text-white border border-gray-800'}`}
          >
            <ShoppingCart size={20} /> PP Csomagok
          </button>
          <button 
            onClick={() => setActiveTab('vehicles')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'vehicles' ? 'bg-brand text-black shadow-[0_0_15px_rgba(250,204,21,0.3)]' : 'bg-darker text-gray-400 hover:text-white border border-gray-800'}`}
          >
            <Car size={20} /> Prémium Járművek
          </button>
          <button 
            onClick={() => setActiveTab('extras')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'extras' ? 'bg-brand text-black shadow-[0_0_15px_rgba(250,204,21,0.3)]' : 'bg-darker text-gray-400 hover:text-white border border-gray-800'}`}
          >
            <Gem size={20} /> Extrák & Szolgáltatások
          </button>
          <button 
            onClick={() => setActiveTab('info')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'info' ? 'bg-brand text-black shadow-[0_0_15px_rgba(250,204,21,0.3)]' : 'bg-darker text-gray-400 hover:text-white border border-gray-800'}`}
          >
            <Info size={20} /> Beváltás & Infó
          </button>
        </div>

        {/* TARTALOM: PP CSOMAGOK */}
        {activeTab === 'packages' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ppPackages.map((pkg) => (
                <div key={pkg.id} className={`relative bg-darker p-8 rounded-2xl border ${pkg.popular ? 'border-brand shadow-[0_0_20px_rgba(250,204,21,0.15)]' : 'border-gray-800'} flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 bg-brand text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                      Legnépszerűbb
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-brand font-black text-4xl mb-4">{pkg.pp} <span className="text-lg text-gray-400 font-medium">PP</span></div>
                  {pkg.bonus ? (
                    <span className="text-green-400 text-sm font-bold mb-6 bg-green-400/10 px-3 py-1 rounded-md">{pkg.bonus}</span>
                  ) : (
                    <span className="text-gray-500 text-sm mb-6 px-3 py-1">Nincs bónusz</span>
                  )}
                  <div className="mt-auto w-full">
                    <div className="text-gray-300 mb-4">Ár: <span className="font-bold text-white text-xl">{pkg.price}</span></div>
                    <button className={`w-full py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 ${pkg.popular ? 'bg-brand hover:bg-yellow-500 text-black' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}>
                      <CreditCard size={18} /> Vásárlás
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <ShieldAlert className="text-brand" size={32} />
                <div>
                  <h4 className="text-white font-bold mb-1">Biztonságos Fizetés</h4>
                  <p className="text-gray-400 text-sm">A tranzakciókat a SimplePay biztonságos rendszere kezeli.</p>
                </div>
              </div>
              <div className="text-2xl font-black text-gray-500 italic tracking-tighter">
                Simple<span className="text-white">Pay</span>
              </div>
            </div>
          </div>
        )}

        {/* TARTALOM: PRÉMIUM JÁRMŰVEK */}
        {activeTab === 'vehicles' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 flex justify-between items-end">
              <h2 className="text-2xl font-bold text-white">Elérhető Járművek</h2>
              <div className="text-gray-400 text-sm">Összesen: {vehicles.length} db</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vehicles.map((car) => (
                <div key={car.id} className="bg-darker rounded-xl overflow-hidden border border-gray-800 group hover:border-brand/50 transition-colors">
                  <div className="h-48 overflow-hidden">
                    <img src={car.img} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2">{car.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-brand font-black text-xl">{car.price}</span>
                      <button className="text-sm bg-gray-800 hover:bg-brand hover:text-black text-white px-3 py-1.5 rounded transition-colors font-medium">
                        Részletek
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ÚJ TARTALOM: EXTRÁK ÉS SZOLGÁLTATÁSOK */}
        {activeTab === 'extras' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 flex justify-between items-end">
              <h2 className="text-2xl font-bold text-white">Egyéb Prémium Szolgáltatások</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extras.map((extra) => (
                <div key={extra.id} className="bg-darker p-6 rounded-xl border border-gray-800 hover:border-brand/50 transition-colors flex flex-col h-full group">
                  <div className="w-14 h-14 bg-[#1a1a1a] border border-gray-700 rounded-xl flex items-center justify-center text-brand mb-4 group-hover:scale-110 transition-transform">
                    {extra.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{extra.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">{extra.desc}</p>
                  <div className="flex items-center justify-between mt-auto border-t border-gray-800 pt-4">
                    <span className="text-brand font-black text-xl">{extra.price}</span>
                    <button className="text-sm bg-brand/10 text-brand hover:bg-brand hover:text-black px-4 py-2 rounded-lg font-bold transition-colors">
                      Érdekel
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-brand/10 border border-brand/30 rounded-lg p-4 text-center">
              <p className="text-brand text-sm font-medium">
                Egyedi frakciók, házak és cégek igénylése esetén vásárlás előtt mindenképp nyiss egy Ticketet Discordon egyeztetés céljából!
              </p>
            </div>
          </div>
        )}

        {/* TARTALOM: BEVÁLTÁS ÉS INFÓ */}
        {activeTab === 'info' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
            <div className="bg-darker border border-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">A Beváltás Folyamata</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle className="text-brand" size={24} /></div>
                  <div>
                    <h3 className="text-lg font-bold text-white">1. Csomag kiválasztása és fizetés</h3>
                    <p className="text-gray-400">Válaszd ki a számodra megfelelő PP csomagot a weboldalon, majd a SimplePay felületén végezd el a biztonságos kártyás fizetést.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle className="text-brand" size={24} /></div>
                  <div>
                    <h3 className="text-lg font-bold text-white">2. Kód lekérése e-mailben</h3>
                    <p className="text-gray-400">A sikeres tranzakció után a megadott e-mail címedre küldünk egy egyedi aktiváló kódot.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle className="text-brand" size={24} /></div>
                  <div>
                    <h3 className="text-lg font-bold text-white">3. Aktiválás a játékon belül</h3>
                    <p className="text-gray-400">Lépj fel a szerverre, nyisd meg a chatet, és írd be a <code className="bg-gray-800 text-brand px-2 py-1 rounded mx-1">/pp</code> parancsot. A felugró ablakban add meg a kódodat!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ITT TÖRTÉNT A MÓDOSÍTÁS: <button>-ra cserélve */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <button onClick={() => openModal("Általános Szerződési Feltételek")} className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-brand transition-colors group text-left w-full h-full">
                 <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand transition-colors">Általános Szerződési Feltételek</h3>
                 <p className="text-gray-400 text-sm">Olvasd el a vásárlásra vonatkozó jogi feltételeket (ÁSZF).</p>
               </button>
               <button onClick={() => openModal("Adattovábbítási Nyilatkozat")} className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-brand transition-colors group text-left w-full h-full">
                 <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand transition-colors">Adattovábbítási Nyilatkozat</h3>
                 <p className="text-gray-400 text-sm">Tájékoztató a SimplePay felé történő adattovábbításról (PDF).</p>
               </button>
            </div>
          </div>
        )}
      </div>

      {/* A Modális Ablak beágyazása a Webshop oldalra is */}
      <LegalModal 
        isOpen={isLegalModalOpen} 
        onClose={() => setIsLegalModalOpen(false)} 
        title={modalTitle}
      />
    </>
  );
}