"use client";

import { translations, Language } from "@/lib/translations";

export default function AuditSection({ lang }: { lang: Language }) {
  const t = translations[lang].audit;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend yet
    alert("Merci ! Nous reviendrons vers vous pour votre audit offert.");
  };

  return (
    <section id="audit" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navablue rounded-[3rem] p-8 md:p-16 text-white grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase tracking-tight leading-tight">
              {t.title}
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 text-navablue shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">
                  {t.formName}
                </label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-navagray rounded-xl px-4 py-4 border-none focus:ring-2 focus:ring-navablue transition-all text-navablue"
                  placeholder="..."
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">
                  {t.formEmail}
                </label>
                <input 
                  type="email" 
                  required 
                  className="w-full bg-navagray rounded-xl px-4 py-4 border-none focus:ring-2 focus:ring-navablue transition-all text-navablue"
                  placeholder="..."
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2 opacity-60">
                  {t.formWhatsapp}
                </label>
                <input 
                  type="tel" 
                  required 
                  className="w-full bg-navagray rounded-xl px-4 py-4 border-none focus:ring-2 focus:ring-navablue transition-all text-navablue"
                  placeholder="+212 ..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-navablue text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-navablue/20"
              >
                {t.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
