"use client";

import { useState } from "react";
import ProfitSimulator from "@/components/ProfitSimulator";
import AuditSection from "@/components/AuditSection";
import { translations } from "@/lib/translations";

export default function SimulatorPage() {
  const lang = "fr";
  const t = translations[lang].simulator;
  const [simResults, setSimResults] = useState("");

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-navablue uppercase tracking-tight mb-4">
          {t.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </div>
      
      <ProfitSimulator lang={lang} onResultChange={setSimResults} />
      
      <div className="mt-12">
        <AuditSection lang={lang} simulatorData={simResults} />
      </div>
    </div>
  );
}
