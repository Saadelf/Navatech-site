import { translations, Language } from "@/lib/translations";

export default function HowItWorks({ lang }: { lang: Language }) {
  const t = translations[lang].howItWorks;
  
  const steps = [
    { title: t.step1Title, desc: t.step1Desc },
    { title: t.step2Title, desc: t.step2Desc },
    { title: t.step3Title, desc: t.step3Desc },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-navablue mb-16 uppercase tracking-widest">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group text-center space-y-6">
              <div className="text-6xl font-black text-navablue/10 absolute -top-8 left-1/2 -translate-x-1/2 -z-0">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-navablue relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-600 relative z-10 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
