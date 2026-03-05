import Link from "next/link";
import { translations, Language } from "@/lib/translations";

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-navablue/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-navablue/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navablue tracking-tight mb-8 leading-[1.1]">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`/${lang === "en" ? "en/" : ""}audit`}
              className="bg-navablue text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-lg shadow-navablue/20"
            >
              {t.cta}
            </Link>
            <Link
              href={`/${lang === "en" ? "en/" : ""}solutions`}
              className="bg-transparent text-navablue border border-navablue/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-navablue/5 transition-all"
            >
              {lang === "en" ? "Our Solutions" : "Nos Solutions"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
