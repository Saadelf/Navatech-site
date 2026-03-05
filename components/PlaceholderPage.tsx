import { translations, Language } from "@/lib/translations";

interface PlaceholderPageProps {
  lang: Language;
  pageKey: keyof typeof translations.fr.placeholders;
  slug?: string;
}

export default function PlaceholderPage({ lang, pageKey, slug }: PlaceholderPageProps) {
  const t = translations[lang].placeholders[pageKey];

  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-24 bg-navagray">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-navablue uppercase tracking-tight mb-6">
          {t.title} {slug && <span className="opacity-50 break-all">"{slug}"</span>}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          {t.desc}
        </p>
        <div className="h-1 w-24 bg-navablue mx-auto rounded-full opacity-20"></div>
      </div>
    </div>
  );
}
