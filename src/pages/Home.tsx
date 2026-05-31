// src/pages/Home.tsx
import ServerStatus from '../components/ServerStatus';
import { Play, ArrowRight, ShieldCheck, Map, Users, Megaphone, Calendar, ImageIcon, Video, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const news = [
    {
      id: 1, title: "V3.0 Hatalmas Frissítés Élőben!", date: "2026. Május 28.", category: "Frissítés", color: "bg-brand/20 text-brand",
      excerpt: "Bekerült az új inventory rendszer, 15 új egyedi jármű és megújult a rendőrség épülete. Gyere és próbáld ki!"
    },
    {
      id: 2, title: "Dupla PP Hétvége", date: "2026. Május 25.", category: "Event", color: "bg-green-500/20 text-green-400",
      excerpt: "Ezen a hétvégén minden Prémium Pont feltöltés után dupla annyi pontot írunk jóvá. Ne maradj le!"
    },
    {
      id: 3, title: "Tagfelvétel: Adminsegéd", date: "2026. Május 20.", category: "Felhívás", color: "bg-blue-500/20 text-blue-400",
      excerpt: "Bővül a csapatunk! Ha érzed magadban a kellő tapasztalatot és elhivatottságot, várjuk a jelentkezésed Discordon."
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585399000684-d2f72660f092?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
  ];

  // Random avatar generátor a Discord mockup-hoz
  const discordAvatars = Array.from({length: 12}, (_, i) => `https://i.pravatar.cc/150?img=${i+10}`);

  return (
    <div className="w-full">
      {/* HERO SZEKCIÓ */}
      <section className="relative h-[650px] flex items-center border-b border-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-darker to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-brand/20 text-brand text-sm font-bold tracking-wider mb-4 border border-brand/30">
              <span className="w-2 h-2 rounded-full bg-brand animate-ping"></span>
              V3.0 FRISSÍTÉS ÉLESÍTVE
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-tight">
              A város <span className="text-brand">téged</span> vár!
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Csatlakozz Magyarország legdinamikusabban fejlődő Roleplay szerveréhez! Építs karriert, alapíts családot, vagy urald az alvilágot. A történeted csak rajtad áll.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-brand hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold transition-colors text-lg">
                <Play size={20} fill="currentColor" />
                Csatlakozás
              </button>
              <Link to="/rules" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg">
                <ShieldCheck size={20} />
                Szabályzat
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <ServerStatus />
          </div>
        </div>
      </section>

      {/* ÚJ: MÉDIA SZEKCIÓ (Videó, Discord, TikTok) */}
      <section className="py-20 bg-darker border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Középső nagy panel: Bemutató Videó */}
            <div className="xl:col-span-2 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Video className="text-brand" size={28} />
                <h2 className="text-2xl font-bold text-white">Szerver Trailer (V3.0)</h2>
              </div>
              {/* Videó Wrapper */}
              <div className="flex-grow bg-black rounded-2xl border border-gray-800 overflow-hidden relative shadow-2xl group cursor-pointer aspect-video flex items-center justify-center">
                 {/* Helykitöltő kép videó helyett (statikus demo) */}
                 <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="Trailer Thumbnail" />
                 <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(250,204,21,0.5)] pl-2">
                    <Play size={40} className="text-black" fill="currentColor" />
                 </div>
                 <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="text-white font-bold text-sm">YouTube HD</span>
                 </div>
              </div>
            </div>

            {/* Jobb oldali oszlop: Discord & Social Widgetek */}
            <div className="flex flex-col gap-6">
              
              {/* Discord Mockup Widget */}
              <div className="bg-[#1e1f22] border border-[#313338] rounded-2xl p-6 flex-1 flex flex-col shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="text-[#5865F2]" size={24} />
                    <h3 className="text-white font-bold text-lg">Hivatalos Discord</h3>
                  </div>
                  <div className="bg-[#2b2d31] px-2 py-1 rounded text-xs font-bold text-gray-300 flex items-center gap-1.5">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     842 Online
                  </div>
                </div>
                <div className="flex-grow">
                   <p className="text-[#949ba4] text-sm mb-4">Csatlakozz a közösségünkhöz! Itt zajlanak a frakció felvételek, itt kérhetsz segítséget és itt találod a szabályzatot.</p>
                   {/* Online tagok kis avatárjai (Dinamikus hatás) */}
                   <div className="flex flex-wrap gap-2 mb-6">
                      {discordAvatars.map((avatar, idx) => (
                        <div key={idx} className="relative">
                          <img src={avatar} className="w-8 h-8 rounded-full border-2 border-[#1e1f22]" alt="user" />
                          <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#1e1f22] ${idx % 3 === 0 ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full bg-[#2b2d31] flex items-center justify-center text-xs text-white font-bold">+830</div>
                   </div>
                </div>
                <a href="#" className="w-full bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold py-3 rounded-lg text-center transition-colors">
                  Csatlakozás a szerverhez
                </a>
              </div>

              {/* TikTok / Instagram Promo kártya */}
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-1 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop')] bg-cover opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
                <div className="bg-darker/90 backdrop-blur-sm p-5 rounded-xl h-full flex flex-col justify-center items-center text-center relative z-10 border border-white/10">
                   <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3">
                     <span className="text-black font-black text-2xl tracking-tighter">TikTok</span>
                   </div>
                   <h3 className="text-white font-bold text-lg mb-2">Nézd meg a videóinkat!</h3>
                   <p className="text-gray-300 text-sm mb-4">Vicces és epikus RP szituációk egyenesen a szerverről.</p>
                   <button className="bg-white text-black text-sm font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                     @roleplayserver_hu
                   </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* GYORSTALPALÓ */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Hogyan tudsz <span className="text-brand">játszani?</span></h2>
            <p className="text-gray-400">Gyorstalpaló újoncoknak 3 egyszerű lépésben.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-darker p-8 rounded-xl border border-gray-800 hover:border-brand/50 transition-colors">
              <div className="w-14 h-14 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-brand" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Csatlakozz Discordra</h3>
              <p className="text-gray-400 mb-4">Közösségünk központja a Discord. Itt találod a szabályzatot, híreket és itt tudsz whitelistet írni.</p>
              <a href="#" className="text-brand flex items-center gap-1 hover:gap-2 transition-all text-sm font-medium">
                Discord megnyitása <ArrowRight size={16} />
              </a>
            </div>
            <div className="bg-darker p-8 rounded-xl border border-gray-800 hover:border-brand/50 transition-colors">
              <div className="w-14 h-14 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="text-brand" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Olvasd el a Szabályzatot</h3>
              <p className="text-gray-400 mb-4">A magas szintű Roleplay érdekében fontos, hogy tisztában légy a szerver szabályzatával.</p>
              <Link to="/rules" className="text-brand flex items-center gap-1 hover:gap-2 transition-all text-sm font-medium">
                Irány a Szabályzat <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-darker p-8 rounded-xl border border-gray-800 hover:border-brand/50 transition-colors">
              <div className="w-14 h-14 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                <Map className="text-brand" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. Lépj a Városba</h3>
              <p className="text-gray-400 mb-4">Ha sikeresen átmentél a teszteken, nincs más hátra, mint indítani a FiveM-et és játszani!</p>
              <button className="text-brand flex items-center gap-1 hover:gap-2 transition-all text-sm font-medium">
                IP cím másolása <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          <div className="mt-12 lg:hidden">
             <ServerStatus />
          </div>
        </div>
      </section>

      {/* HÍREK ÉS FELHÍVÁSOK */}
      <section className="py-20 bg-darker border-t border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Megaphone className="text-brand" size={28} />
                <h2 className="text-3xl font-bold text-white">Legfrissebb <span className="text-brand">Hírek</span></h2>
              </div>
              <p className="text-gray-400">Maradj naprakész a szerver életével kapcsolatban.</p>
            </div>
            <button className="bg-[#1a1a1a] hover:bg-gray-800 text-white px-6 py-3 rounded-lg border border-gray-700 transition-colors font-medium text-sm">
              Összes hír megtekintése
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
              <div key={item.id} className="bg-dark p-6 rounded-xl border border-gray-800 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${item.color}`}>
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <Calendar size={14} /> {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{item.excerpt}</p>
                <a href="#" className="text-brand text-sm font-medium hover:underline flex items-center gap-1">
                  Tovább olvasom <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉLMÉNYKÉPEK (GALÉRIA) */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <ImageIcon className="text-brand" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Közösségi <span className="text-brand">Élményképek</span></h2>
            <p className="text-gray-400">Pillanatképek a játékosok mindennapjaiból. Csatlakozz és szerepelj te is a galériában!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((imgUrl, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer">
                {/* Sötétítő overlay ami hover-re eltűnik */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={imgUrl} 
                  alt={`Élménykép ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}