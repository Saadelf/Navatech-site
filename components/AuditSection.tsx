"use client";

import { useState } from "react";
import { translations, Language } from "@/lib/translations";

interface AuditSectionProps {
  lang: Language;
  simulatorData?: string;
}

export default function AuditSection({ lang, simulatorData }: AuditSectionProps) {
  const t = translations[lang].audit;
  const whatsappNumber = "+212659595059";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    establishment: "",
    city: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const baseMessage = lang === "fr" 
      ? `Bonjour Navatech, je souhaite demander l'audit digital offert.`
      : `Hello Navatech, I would like to request my free digital audit.`;

    const details = `
- ${t.formName}: ${formData.name}
- ${t.formEstablishment}: ${formData.establishment}
- ${t.formCity}: ${formData.city}
- ${t.formEmail}: ${formData.email}
- ${t.formWhatsapp}: ${formData.whatsapp}`;

    const simResults = simulatorData ? `\n\n📊 ${lang === "fr" ? "Résultats du simulateur" : "Simulator Results"}:\n${simulatorData}` : "";

    const fullMessage = `${baseMessage}\n${details}${simResults}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(fullMessage)}`;
    
    window.open(whatsappUrl, "_blank");
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">
                    {t.formName}
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-navagray rounded-xl px-4 py-3 border-none focus:ring-2 focus:ring-navablue transition-all text-navablue text-sm"
                    placeholder="..."
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">
                    {t.formEstablishment}
                  </label>
                  <input 
                    type="text" 
                    name="establishment"
                    required 
                    value={formData.establishment}
                    onChange={handleChange}
                    className="w-full bg-navagray rounded-xl px-4 py-3 border-none focus:ring-2 focus:ring-navablue transition-all text-navablue text-sm"
                    placeholder="..."
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">
                    {t.formCity}
                  </label>
                  <input 
                    type="text" 
                    name="city"
                    required 
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-navagray rounded-xl px-4 py-3 border-none focus:ring-2 focus:ring-navablue transition-all text-navablue text-sm"
                    placeholder="..."
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">
                    {t.formWhatsapp}
                  </label>
                  <input 
                    type="tel" 
                    name="whatsapp"
                    required 
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full bg-navagray rounded-xl px-4 py-3 border-none focus:ring-2 focus:ring-navablue transition-all text-navablue text-sm"
                    placeholder="+212 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">
                  {t.formEmail}
                </label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-navagray rounded-xl px-4 py-3 border-none focus:ring-2 focus:ring-navablue transition-all text-navablue text-sm"
                  placeholder="..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-navablue text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-navablue/20 mt-4"
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
