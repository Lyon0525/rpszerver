// src/components/Navbar.tsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingCart, BookOpen, Users, LogIn, Trophy, Mail, Menu, X } from 'lucide-react';
import DiscordLoginModal from './DiscordLoginModal';

export default function Navbar() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Extra: Mobilos menü állapota

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Kezdőlap', path: '/', icon: <Home size={18} /> },
    { name: 'Webshop', path: '/shop', icon: <ShoppingCart size={18} /> },
    { name: 'Közösség', path: '/community', icon: <Trophy size={18} /> },
    { name: 'Szabályzat', path: '/rules', icon: <BookOpen size={18} /> },
    { name: 'Csapat', path: '/staff', icon: <Users size={18} /> },
    { name: 'Kapcsolat', path: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <>
      <nav className="bg-darker border-b border-gray-800 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* Bal oldal: Logó */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.4)] group-hover:scale-110 transition-transform">
              <span className="text-brand-red font-black text-2xl italic tracking-tighter">RP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-widest leading-none">
                ROLE<span className="text-brand">PLAY</span>
              </span>
              <span className="text-xs text-gray-400 font-bold tracking-[0.2em]">HUNGARY</span>
            </div>
          </Link>

          {/* Középső rész: Menüpontok (Desktop) */}
          <div className="hidden lg:flex gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                  isActive(link.path) ? 'text-brand' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className={`${isActive(link.path) ? 'text-brand' : 'text-gray-500'}`}>
                  {link.icon}
                </span>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Jobb oldal: Discord Login Gomb (Desktop) */}
          <div className="hidden lg:block">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-5 py-2.5 rounded-lg font-bold transition-all hover:shadow-[0_0_15px_rgba(88,101,242,0.4)] hover:-translate-y-0.5"
            >
              <LogIn size={18} />
              Bejelentkezés
            </button>
          </div>

          {/* Hamburger Gomb (Mobil) */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobilos menü lenyíló része */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-darker border-b border-gray-800 animate-in slide-in-from-top-2">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-lg ${isActive(link.path) ? 'bg-brand/10 text-brand' : 'text-gray-400'}`}
                >
                  {link.icon} <span className="font-bold">{link.name}</span>
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="flex items-center justify-center gap-2 bg-[#5865F2] text-white p-3 rounded-lg font-bold w-full mt-4"
              >
                <LogIn size={18} /> Discord Bejelentkezés
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Itt hívjuk be magát a felugró ablakot (Modal) */}
      <DiscordLoginModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}