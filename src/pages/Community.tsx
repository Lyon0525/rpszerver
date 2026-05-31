// src/pages/Community.tsx
import { Trophy, Star, Video, Heart, Swords, Medal } from 'lucide-react';

export default function Community() {
  // Mock Adatok az FFA Toplistához
  const ffaToplist = [
    { rank: 1, name: "Killer_Gabi", score: 1452, kda: "3.2", color: "text-yellow-400", bg: "bg-yellow-400/10 border-yellow-400/50" },
    { rank: 2, name: "SniperBoi99", score: 1205, kda: "2.8", color: "text-gray-300", bg: "bg-gray-300/10 border-gray-300/50" },
    { rank: 3, name: "RP_King", score: 980, kda: "2.1", color: "text-amber-700", bg: "bg-amber-700/10 border-amber-700/50" },
    { rank: 4, name: "Tox1c_Player", score: 850, kda: "1.9", color: "text-white", bg: "bg-[#1a1a1a] border-gray-800" },
    { rank: 5, name: "NoobMaster", score: 720, kda: "1.5", color: "text-white", bg: "bg-[#1a1a1a] border-gray-800" },
  ];

  // Mock Adatok az Értékelésekhez
  const reviews = [
    { id: 1, author: "KisPista", text: "A legjobb magyar RP szerver. Végre nincsenek trollok és az adminok is normálisak!", rating: 5 },
    { id: 2, author: "Drifter_Dani", text: "Nagyon jó a járművek handlingje, a gazdaság is reális. Csak ajánlani tudom.", rating: 5 },
    { id: 3, author: "Rendor_Bela", text: "A PD frakció nagyon profi, az illegál is adja. Néha van kis lagg, de tűrhető.", rating: 4 },
  ];

  // Mock Streamek
  const streams = [
    { id: 1, streamer: "RPOfficialTV", viewers: 145, title: "Rendőrségi RP | Esti járőr", platform: "Twitch", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop" },
    { id: 2, streamer: "GamerGirl_RP", viewers: 89, title: "Új autó vásárlás & Illegál", platform: "YouTube", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      
      {/* FEJLÉC */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase">
          A Szerver <span className="text-brand">Közössége</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Nézd meg a havi ranglistákat, kövesd kedvenc streamereidet, és olvasd el, mit gondolnak rólunk a játékosok!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
        {/* BAL OSZLOP: FFA TOP 5 */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Swords className="text-brand" size={28} />
            <h2 className="text-2xl font-bold text-white">Havi FFA Top 5</h2>
          </div>
          <div className="space-y-3">
            {ffaToplist.map((player) => (
              <div key={player.rank} className={`flex items-center justify-between p-4 rounded-xl border ${player.bg} transition-transform hover:scale-[1.02] cursor-default`}>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg ${player.rank <= 3 ? player.color + ' bg-black/20' : 'bg-gray-800 text-gray-400'}`}>
                    {player.rank <= 3 ? <Trophy size={20} /> : player.rank}
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${player.color}`}>{player.name}</h3>
                    <p className="text-xs text-gray-400">KDA: {player.kda}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-brand font-black text-xl">{player.score}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Pont</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JOBB OSZLOP: TOP TÁMOGATÓK */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Heart className="text-red-500" size={28} />
            <h2 className="text-2xl font-bold text-white">Hónap Támogatói</h2>
          </div>
          <div className="bg-darker border border-gray-800 rounded-xl p-6">
            <p className="text-sm text-gray-400 mb-6 pb-4 border-b border-gray-800">
              Hálásan köszönjük azoknak, akik PP vásárlással hozzájárulnak a szerver fejlesztéséhez!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Medal className="text-yellow-400" size={20} /> <span className="font-bold text-white">MrMoney</span>
              </li>
              <li className="flex items-center gap-3">
                <Medal className="text-gray-300" size={20} /> <span className="font-bold text-white">Donator_King</span>
              </li>
              <li className="flex items-center gap-3">
                <Medal className="text-amber-700" size={20} /> <span className="font-bold text-white">Alex_Wolf</span>
              </li>
            </ul>
            <div className="mt-8 text-center">
              <button className="text-brand text-sm font-medium hover:underline">Irány a Webshop &rarr;</button>
            </div>
          </div>
        </div>
      </div>

      {/* STREAMEK */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <Video className="text-brand" size={28} />
          <h2 className="text-2xl font-bold text-white">Élő Streamek</h2>
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded animate-pulse ml-2">ÉLŐ</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {streams.map((stream) => (
            <div key={stream.id} className="relative group rounded-xl overflow-hidden border border-gray-800 cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10"></div>
              <img src={stream.img} alt="stream" className="w-full h-64 object-cover" />
              <div className="absolute top-4 left-4 z-20 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                {stream.viewers} Néző
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent z-20">
                <h3 className="font-bold text-white text-lg">{stream.title}</h3>
                <p className="text-gray-300 text-sm">{stream.streamer} • {stream.platform}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ÉRTÉKELÉSEK */}
      <div>
        <div className="flex items-center justify-center gap-3 mb-10 text-center">
          <Star className="text-brand" size={28} fill="currentColor" />
          <h2 className="text-3xl font-bold text-white">Játékosaink Mondták</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-darker p-6 rounded-xl border border-gray-800 relative">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < review.rating ? "text-brand" : "text-gray-600"} fill={i < review.rating ? "currentColor" : "none"} />
                ))}
              </div>
              <p className="text-gray-300 text-sm italic mb-4">"{review.text}"</p>
              <div className="font-bold text-white border-t border-gray-800 pt-4">- {review.author}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}