import { translations, Language } from "@/lib/translations";

export default function CaseStudies({ lang }: { lang: Language }) {
  const t = translations[lang].cases;
  
  const cases = [
    { name: t.case1Name, result: t.case1Result },
    { name: t.case2Name, result: t.case2Result },
    { name: t.case3Name, result: t.case3Result },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-navablue mb-4 uppercase tracking-widest">
          {t.title}
        </h2>
        <p className="text-center text-gray-400 text-sm mb-16 uppercase tracking-wider italic">
          {t.anonymized}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-black/5 hover:border-navablue/20 transition-all bg-navagray/30">
              <h3 className="text-xl font-bold text-navablue mb-4">{item.name}</h3>
              <div className="h-40 bg-gray-200 rounded-xl mb-6 animate-pulse" /> {/* Placeholder for case study image */}
              <p className="text-2xl font-bold text-navablue leading-tight">
                {item.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
