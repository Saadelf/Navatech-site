import Link from "next/link";
import { translations, Language } from "@/lib/translations";

export default function PackagesPreview({ lang }: { lang: Language }) {
  const t = translations[lang].packages;
  
  const packs = [
    { name: t.pack1Name, price: t.pack1Price, desc: t.pack1Desc },
    { name: t.pack2Name, price: t.pack2Price, desc: t.pack2Desc, featured: true },
    { name: t.pack3Name, price: t.pack3Price, desc: t.pack3Desc },
  ];

  return (
    <section className="py-24 bg-navagray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-navablue mb-16 uppercase tracking-widest">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packs.map((pack, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-3xl flex flex-col h-full border ${
                pack.featured 
                  ? "bg-navablue text-white border-navablue scale-105 shadow-xl shadow-navablue/20 relative z-10" 
                  : "bg-white text-navablue border-black/5"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{pack.name}</h3>
              <p className={`text-sm mb-6 ${pack.featured ? "text-white/80" : "text-gray-500"}`}>
                {lang === "en" ? "Starting from" : "À partir de"}
              </p>
              <p className="text-2xl font-black mb-6">{pack.price}</p>
              <p className={`mb-8 flex-grow leading-relaxed ${pack.featured ? "text-white/90" : "text-gray-600"}`}>
                {pack.desc}
              </p>
              <Link 
                href={`/${lang === "en" ? "en/" : ""}tarifs`}
                className={`text-center py-4 rounded-full font-bold transition-all ${
                  pack.featured
                    ? "bg-white text-navablue hover:bg-white/90"
                    : "bg-navablue text-white hover:opacity-90 shadow-lg shadow-navablue/20"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
