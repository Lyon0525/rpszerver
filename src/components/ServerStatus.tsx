// src/components/ServerStatus.tsx
import { Users, Server, Activity, Copy } from 'lucide-react';

export default function ServerStatus() {
  // Ideiglenes mock adatok
  const serverIp = "play.rpserver.hu";
  const players = 124;
  const maxPlayers = 250;
  const isOnline = true;

  const handleCopyIp = () => {
    navigator.clipboard.writeText(serverIp);
    alert("IP cím sikeresen másolva!");
  };

  return (
    <div className="bg-darker border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Server className="text-brand" size={24} />
          Szerver Státusz
        </h3>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOnline ? 'bg-green-400' : 'bg-red-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-3 w-3 ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></span>
          </span>
          <span className="text-sm font-medium text-gray-300">
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#1a1a1a] p-4 rounded-lg flex flex-col items-center justify-center">
          <Users className="text-brand mb-2" size={28} />
          <span className="text-gray-400 text-sm">Játékosok</span>
          <span className="text-2xl font-bold text-white">{players} / {maxPlayers}</span>
        </div>
        <div className="bg-[#1a1a1a] p-4 rounded-lg flex flex-col items-center justify-center">
          <Activity className="text-brand mb-2" size={28} />
          <span className="text-gray-400 text-sm">Ping</span>
          <span className="text-2xl font-bold text-white">24 ms</span>
        </div>
      </div>

      <button 
        onClick={handleCopyIp}
        className="w-full flex items-center justify-center gap-2 bg-brand/10 hover:bg-brand/20 text-brand border border-brand/30 py-3 rounded-lg transition-all font-medium"
      >
        <Copy size={18} />
        {serverIp} (Kattints a másoláshoz)
      </button>
    </div>
  );
}