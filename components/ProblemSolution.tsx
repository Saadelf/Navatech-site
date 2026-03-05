import { translations, Language } from "@/lib/translations";

export default function ProblemSolution({ lang }: { lang: Language }) {
  const t = translations[lang].problemSolution;
  
  return (
    <section className="py-24 bg-navagray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-red-900/80 uppercase tracking-tight">
              {t.problemTitle}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {t.problemText}
            </p>
          </div>
          <div className="space-y-6 p-8 bg-white rounded-3xl shadow-sm border border-black/5">
            <h2 className="text-3xl font-bold text-navablue uppercase tracking-tight">
              {t.solutionTitle}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {t.solutionText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
