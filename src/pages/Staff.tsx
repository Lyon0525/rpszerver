// src/pages/Staff.tsx
import { Crown, ShieldAlert, Code, CheckCircle } from 'lucide-react';

export default function Staff() {
  const staffMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Tulajdonos",
      description: "A szerver alapítója és vezetője. Felelős a közösségért és a projekt irányításáért.",
      icon: <Crown size={24} className="text-brand" />,
      color: "border-brand shadow-[0_0_30px_rgba(250,204,21,0.15)]",
      badgeBg: "bg-brand/20 text-brand",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Admin Controller",
      description: "A staff csapat vezetője. Hozzá tartoznak a panaszkönyvek és a frakciók irányítása.",
      icon: <ShieldAlert size={24} className="text-red-500" />,
      color: "border-red-500/50 hover:border-red-500",
      badgeBg: "bg-red-500/20 text-red-500",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Alex Dev",
      role: "Vezető Fejlesztő",
      description: "Az egyedi scriptjeink megalkotója és a szerver optimalizációjáért felelős szakember.",
      icon: <Code size={24} className="text-blue-500" />,
      color: "border-blue-500/50 hover:border-blue-500",
      badgeBg: "bg-blue-500/20 text-blue-500",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase">
          A <span className="text-brand">Vezetőség</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Ismerd meg azokat az embereket, akik nap mint nap azért dolgoznak, hogy a legjobb Roleplay élményt nyújtsák számodra.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {staffMembers.map((member) => (
          <div key={member.id} className={`bg-darker rounded-2xl p-6 border ${member.color} transition-all duration-300 flex flex-col items-center text-center group`}>
            
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#1a1a1a] group-hover:scale-105 transition-transform duration-300">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className={`absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-darker flex items-center justify-center border-2 border-[#1a1a1a]`}>
                {member.icon}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block ${member.badgeBg}`}>
              {member.role}
            </span>
            
            <p className="text-gray-400 text-sm">
              {member.description}
            </p>

          </div>
        ))}
      </div>

      {/* Tájékoztató blokk */}
      <div className="mt-20 bg-brand/10 border border-brand/30 rounded-xl p-8 max-w-3xl mx-auto text-center">
        <h3 className="text-brand font-bold text-xl mb-2">Szeretnél a csapat tagja lenni?</h3>
        <p className="text-gray-300 mb-6">
          Jelenleg Adminsegéd és Teszter pozíciókra keresünk embereket. Csatlakozz Discordunkra a felvételi infókért!
        </p>
        <button className="bg-brand text-black hover:bg-yellow-500 font-bold py-2 px-6 rounded-lg transition-colors inline-flex items-center gap-2">
          Discord <CheckCircle size={18} />
        </button>
      </div>
    </div>
  );
}