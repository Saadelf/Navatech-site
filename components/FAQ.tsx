"use client";

import { useState } from "react";
import { translations, Language } from "@/lib/translations";

export default function FAQ({ lang }: { lang: Language }) {
  const t = translations[lang].faq;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: t.q1, a: t.a1 },
    { q: t.q2, a: t.a2 },
    { q: t.q3, a: t.a3 },
    { q: t.q4, a: t.a4 },
    { q: t.q5, a: t.a5 },
  ];

  return (
    <section className="py-24 bg-navagray">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-navablue mb-16 uppercase tracking-widest">
          {t.title}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-black/5 overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 flex justify-between items-center group"
              >
                <span className="font-bold text-navablue group-hover:text-navablue/70 transition-colors">
                  {faq.q}
                </span>
                <span className={`text-2xl transition-transform ${openIdx === idx ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openIdx === idx && (
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-black/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
