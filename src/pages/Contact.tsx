// src/pages/Contact.tsx
import { useForm } from 'react-hook-form';
import { Mail, MessageSquare, Clock, Send } from 'lucide-react';

type ContactFormData = {
  name: string;
  discord: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // Ide jön majd az API hívás (pl. email küldés vagy Discord webhook)
    console.log("Form adatok elküldve:", data);
    alert("Üzenet sikeresen elküldve! Hamarosan válaszolunk.");
    reset(); // Űrlap ürítése
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-white mb-4 uppercase">
          Lépj velünk <span className="text-brand">Kapcsolatba</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Kérdésed van a PP vásárlással, hibát találtál, vagy csak segítségre van szükséged? Írj nekünk bátran!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Bal oldal: Információk */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-darker p-6 rounded-xl border border-gray-800">
            <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="text-brand" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Discord Support</h3>
            <p className="text-gray-400 text-sm mb-4">
              A leggyorsabb segítségért nyiss egy Ticketet a Discord szerverünkön!
            </p>
            <a href="#" className="text-brand font-medium hover:underline text-sm">Csatlakozás Discordra &rarr;</a>
          </div>

          <div className="bg-darker p-6 rounded-xl border border-gray-800">
            <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-brand" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">E-mail Címünk</h3>
            <p className="text-gray-400 text-sm mb-2">
              Hivatalos és üzleti megkeresésekhez:
            </p>
            <a href="mailto:support@rpserver.hu" className="text-white font-bold">support@rpserver.hu</a>
          </div>

          <div className="bg-darker p-6 rounded-xl border border-gray-800">
            <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="text-brand" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Válaszidő</h3>
            <p className="text-gray-400 text-sm">
              Igyekszünk minden megkeresésre <strong className="text-white">24-48 órán belül</strong> válaszolni. Türelmedet köszönjük!
            </p>
          </div>
        </div>

        {/* Jobb oldal: Űrlap */}
        <div className="lg:col-span-3 bg-darker p-8 rounded-xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6">Küldj Üzenetet</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Név */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">IC / OOC Neved</label>
                <input 
                  {...register("name", { required: true })}
                  className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand transition-colors"
                  placeholder="Pl. John Doe"
                />
                {errors.name && <span className="text-red-500 text-xs mt-1 block">Ez a mező kötelező!</span>}
              </div>

              {/* Discord Tag */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Discord Tag-ed</label>
                <input 
                  {...register("discord", { required: true })}
                  className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand transition-colors"
                  placeholder="Pl. user#1234 vagy username"
                />
                {errors.discord && <span className="text-red-500 text-xs mt-1 block">Ez a mező kötelező!</span>}
              </div>
            </div>

            {/* Tárgy */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">Tárgy / Kategória</label>
              <select 
                {...register("subject", { required: true })}
                className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand transition-colors appearance-none"
              >
                <option value="">Válassz egy kategóriát...</option>
                <option value="pp">Prémium Pont / Vásárlási hiba</option>
                <option value="bug">Bugjelentés</option>
                <option value="unban">Unban Kérelem</option>
                <option value="other">Egyéb kérdés</option>
              </select>
              {errors.subject && <span className="text-red-500 text-xs mt-1 block">Kérjük válassz egy tárgyat!</span>}
            </div>

            {/* Üzenet */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">Üzeneted</label>
              <textarea 
                {...register("message", { required: true, minLength: 20 })}
                rows={5}
                className="w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand transition-colors resize-none"
                placeholder="Írd le részletesen a problémád..."
              ></textarea>
              {errors.message && <span className="text-red-500 text-xs mt-1 block">Kérjük írj legalább 20 karaktert!</span>}
            </div>

            {/* Gomb */}
            <button 
              type="submit"
              className="w-full bg-brand hover:bg-yellow-500 text-black font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
            >
              Üzenet Küldése <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}