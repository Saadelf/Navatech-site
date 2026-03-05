import { translations, Language } from "@/lib/translations";

export default function SocialProof({ lang }: { lang: Language }) {
  const t = translations[lang].socialProof;
  
  return (
    <section className="py-12 border-y border-black/5 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
          {t.title}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
          {/* Placeholders for partner logos */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-8 w-24 bg-gray-300 rounded-md animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}
