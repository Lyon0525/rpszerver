// src/pages/Rules.tsx
import { useState } from 'react';
import { ChevronDown, Book, Shield, AlertTriangle, Users } from 'lucide-react';

// Segédkomponens a lenyíló listához
const AccordionItem = ({ title, icon, children, isOpen, onClick }: any) => {
  return (
    <div className="mb-4 border border-gray-800 rounded-xl overflow-hidden bg-darker">
      <button
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-[#1a1a1a] transition-colors"
        onClick={onClick}
      >
        <div className="flex items-center gap-3">
          <div className="text-brand">{icon}</div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <ChevronDown 
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-5 pt-0 text-gray-400 border-t border-gray-800/50 mt-2 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Rules() {
  const [openSection, setOpenSection] = useState<number | null>(0); // Az első alapból nyitva van

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const rulesData = [
    {
      title: "1. Alapfogalmak (RP, MG, PG, DM)",
      icon: <Book size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Roleplay (RP):</strong> Szerepjáték. Egy kitalált karakter életét kell eljátszanod a játékon belül, mintha a valóságban történne.</li>
          <li><strong className="text-white">Metagaming (MG):</strong> OOC (Karakteren kívüli) információ felhasználása IC (Karakteren belül). Tilos! Például: Látod a neve felett a nevét, és ezen a néven szólítod meg anélkül, hogy bemutatkozott volna.</li>
          <li><strong className="text-white">Powergaming (PG):</strong> Irreális cselekedet, amit a valóságban nem tudnál megtenni, vagy a másik játékosra kényszeríted az akaratod.</li>
          <li><strong className="text-white">Deathmatch (DM):</strong> Játékosok ok nélküli megölése. Szigorúan tilos és azonnali kitiltással jár!</li>
        </ul>
      )
    },
    {
      title: "2. Általános Viselkedési Szabályok",
      icon: <Shield size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>A szerveren kötelező a kulturált viselkedés mind OOC chaten, mind Discordon.</li>
          <li>A szerver szidása, minősítése, vagy az adminisztrátorok munkájának akadályozása tilos.</li>
          <li>Tilos a bugkihasználás. Ha hibát találsz, azonnal jelezd egy adminnak vagy fejlesztőnek!</li>
          <li>A mikrofon használata kötelező, és törekedni kell a megfelelő hangminőségre (ne legyen túlzott háttérzaj).</li>
        </ul>
      )
    },
    {
      title: "3. Frakciókra vonatkozó szabályok",
      icon: <Users size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Rendvédelmi frakció (PD) tagját ok nélkül hergelni, direkt üldöztetni magad (Copbait) tilos.</li>
          <li>Mentősöket (EMS) szolgálatban rabolni, túszul ejteni tilos, kivéve ha az RP szituáció megkívánja és előre egyeztetve lett adminnal.</li>
          <li>Illegális frakcióknak tartaniuk kell magukat a reális létszámhoz akciók során (max 10-15 fő rablásoknál, szerverszabályzat szerint).</li>
        </ul>
      )
    },
    {
      title: "4. Rablás és Illegál RP",
      icon: <AlertTriangle size={24} />,
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Játékost rabolni csak megfelelő indokkal (IC motivációval) és minimális illegál frakció taglétszámmal lehet.</li>
          <li>Tilos banknál, kórháznál, rendőrségnél, vagy "SafeZone" (biztonsági zóna) területén rabolni.</li>
          <li>Rablás során a túsz megölése tilos, ha a követelések teljesültek és a rendőrség együttműködött.</li>
        </ul>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-white mb-4 uppercase">
          Szerver <span className="text-brand">Szabályzat</span>
        </h1>
        <p className="text-gray-400">
          A szabályzat nem ismerete nem mentesít a büntetés alól. Kérjük, figyelmesen olvasd el az alábbi pontokat!
        </p>
      </div>

      <div className="mb-8">
        {rulesData.map((section, index) => (
          <AccordionItem
            key={index}
            title={section.title}
            icon={section.icon}
            isOpen={openSection === index}
            onClick={() => toggleSection(index)}
          >
            {section.content}
          </AccordionItem>
        ))}
      </div>
      
      <div className="bg-brand/10 border-l-4 border-brand p-4 rounded-r-lg">
        <p className="text-gray-300 text-sm">
          <strong className="text-brand">Megjegyzés:</strong> A vezetőség fenntartja a jogot a szabályzat előzetes bejelentés nélküli módosítására. Az aktuális verzió mindig itt, a weboldalon érhető el.
        </p>
      </div>
    </div>
  );
}