import Link from "next/link";
import { translations, Language } from "@/lib/translations";

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-gradient-to-b from-navagray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Subtle badge like in some UIcore themes */}
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-navablue/5 border border-navablue/10 text-xs font-black uppercase tracking-[0.2em] text-navablue/60">
            {lang === "en" ? "Hospitality Growth Partner" : "Partenaire Croissance Hôtelière"}
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-navablue tracking-tight mb-8 leading-[1.05]">
            {t.title}
          </h1>
          <p className="text-lg sm:text-2xl text-gray-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="#audit"
              className="bg-navablue text-white px-10 py-5 rounded-full text-lg font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-2xl shadow-navablue/20"
            >
              {t.cta}
            </Link>
            <Link
              href={`/${lang === "en" ? "en/pricing" : "tarifs"}`}
              className="bg-white text-navablue border border-black/5 px-10 py-5 rounded-full text-lg font-black uppercase tracking-widest hover:bg-navagray transition-all shadow-sm"
            >
              {lang === "en" ? "Our Packages" : "Nos Forfaits"}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background decoration - very subtle grid or lines can be added here if needed to match some UIcore styles */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] -z-0">
        <div className="absolute h-px w-full bg-navablue top-1/4"></div>
        <div className="absolute h-px w-full bg-navablue top-2/4"></div>
        <div className="absolute h-px w-full bg-navablue top-3/4"></div>
        <div className="absolute w-px h-full bg-navablue left-1/4"></div>
        <div className="absolute w-px h-full bg-navablue left-2/4"></div>
        <div className="absolute w-px h-full bg-navablue left-3/4"></div>
      </div>
    </section>
  );
}
