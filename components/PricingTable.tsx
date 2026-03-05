"use client";

import { translations, Language } from "@/lib/translations";

export default function PricingTable({ lang }: { lang: Language }) {
  const t = translations[lang].packages;
  const p = translations[lang].pricing;
  const whatsappNumber = "212659595059";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(p.whatsappMessage)}`;

  const packs = [
    {
      name: t.pack1Name,
      price: t.pack1Price,
      desc: t.pack1Desc,
      features: [t.features.site, t.features.google, t.features.whatsapp, t.features.ga4],
      notIncluded: [t.features.ai, t.features.concierge, t.features.reviews],
    },
    {
      name: t.pack2Name,
      price: t.pack2Price,
      desc: t.pack2Desc,
      featured: true,
      features: [t.features.site, t.features.google, t.features.whatsapp, t.features.ga4, t.features.ai],
      notIncluded: [t.features.concierge, t.features.reviews],
    },
    {
      name: t.pack3Name,
      price: t.pack3Price,
      desc: t.pack3Desc,
      features: [
        t.features.site,
        t.features.google,
        t.features.whatsapp,
        t.features.ga4,
        t.features.ai,
        t.features.concierge,
        t.features.reviews,
      ],
      notIncluded: [],
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packs.map((pack, idx) => (
            <div
              key={idx}
              className={`p-10 rounded-[3rem] border flex flex-col h-full transition-all duration-300 ${
                pack.featured
                  ? "bg-navablue text-white border-navablue shadow-2xl shadow-navablue/20 scale-105 z-10"
                  : "bg-white text-navablue border-black/5 hover:border-navablue/20"
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{pack.name}</h3>
                <p className={`text-sm ${pack.featured ? "text-white/60" : "text-gray-400"}`}>
                  {lang === "en" ? "Starting from" : "À partir de"}
                </p>
                <p className="text-3xl font-black mt-1">{pack.price}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {pack.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <span className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${pack.featured ? 'bg-white text-navablue' : 'bg-navablue text-white'}`}>✓</span>
                    <span className="text-sm font-medium leading-tight">{feat}</span>
                  </div>
                ))}
                {pack.notIncluded.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 opacity-30 grayscale">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px]">✕</span>
                    <span className="text-sm font-medium leading-tight line-through">{feat}</span>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${
                  pack.featured
                    ? "bg-white text-navablue hover:bg-gray-100"
                    : "bg-navablue text-white hover:opacity-90 shadow-lg shadow-navablue/20"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-black/5 text-center max-w-4xl mx-auto">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-navablue/40 mb-8">
            {t.addons.title}
          </h4>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="flex items-center justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-navablue"></span>
              <span className="text-navablue font-bold">{t.addons.photo}</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-navablue"></span>
              <span className="text-navablue font-bold">{t.addons.content}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
