"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { translations, Language } from "@/lib/translations";

interface ProfitSimulatorProps {
  lang: Language;
  onResultChange?: (summary: string) => void;
}

export default function ProfitSimulator({ lang, onResultChange }: ProfitSimulatorProps) {
  const t = translations[lang].simulator;

  // State for inputs
  const [currency, setCurrency] = useState<"MAD" | "EUR">("MAD");
  const [adr, setAdr] = useState<number>(1200);
  const [rooms, setRooms] = useState<number>(10);
  const [occupancy, setOccupancy] = useState<number>(65);
  const [otaShare, setOtaShare] = useState<number>(85);
  const [otaComm, setOtaComm] = useState<number>(18);
  const [targetOtaShare, setTargetOtaShare] = useState<number>(30);

  const exchangeRate = 10.5;

  // Calculations
  const results = useMemo(() => {
    const annualRevenue = adr * rooms * 365 * (occupancy / 100);
    const otaCommissions = annualRevenue * (otaShare / 100) * (otaComm / 100);
    const savings = annualRevenue * ((otaShare - targetOtaShare) / 100) * (otaComm / 100);
    const monthlyGain = savings / 12;

    const format = (val: number) => {
      const value = currency === "EUR" ? val / exchangeRate : val;
      return new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-US", {
        style: "currency",
        currency: currency,
        maximumFractionDigits: 0,
      }).format(value);
    };

    return {
      annualRevenue: format(annualRevenue),
      otaCommissions: format(otaCommissions),
      potentialSavings: format(savings),
      monthlyGain: format(monthlyGain),
      rawSavings: savings,
    };
  }, [adr, rooms, occupancy, otaShare, otaComm, targetOtaShare, currency, lang]);

  // Notify parent of results
  useEffect(() => {
    if (onResultChange) {
      const summary = lang === "fr" 
        ? `Perte OTA: ${results.otaCommissions}, Gain potentiel: ${results.potentialSavings}`
        : `OTA Loss: ${results.otaCommissions}, Potential Gain: ${results.potentialSavings}`;
      onResultChange(summary);
    }
  }, [results, onResultChange, lang]);

  const InputField = ({ label, value, onChange, min = 0, max }: any) => (
    <div className="space-y-2">
      <label className="block text-xs font-bold uppercase tracking-widest text-navablue opacity-60">
        {label}
      </label>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full bg-white rounded-xl px-4 py-3 border border-black/5 focus:ring-2 focus:ring-navablue transition-all text-navablue font-bold"
      />
    </div>
  );

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-xl shadow-navablue/5 border border-black/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Inputs Panel */}
            <div className="lg:col-span-2 p-8 md:p-12 bg-navagray/50 border-r border-black/5">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-navablue uppercase tracking-tight">Configuration</h3>
                <div className="flex bg-white rounded-full p-1 border border-black/5">
                  {(["MAD", "EUR"] as const).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${
                        currency === curr ? "bg-navablue text-white" : "text-navablue/40 hover:text-navablue"
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <InputField label={t.labelAdr} value={adr} onChange={setAdr} />
                <InputField label={t.labelRooms} value={rooms} onChange={setRooms} />
                <InputField label={t.labelOccupancy} value={occupancy} onChange={setOccupancy} max={100} />
                <InputField label={t.labelOtaShare} value={otaShare} onChange={setOtaShare} max={100} />
                <InputField label={t.labelOtaComm} value={otaComm} onChange={setOtaComm} max={100} />
                <InputField label={t.labelTarget} value={targetOtaShare} onChange={setTargetOtaShare} max={100} />
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-navablue/40 mb-12">
                {t.resultsTitle}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{t.annualRevenue}</p>
                  <p className="text-2xl font-bold text-navablue">{results.annualRevenue}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{t.otaCommissions}</p>
                  <p className="text-2xl font-bold text-red-900/60">{results.otaCommissions}</p>
                </div>
                <div className="md:col-span-2 p-8 bg-navablue rounded-3xl text-white shadow-lg shadow-navablue/20">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">{t.potentialSavings}</p>
                      <p className="text-4xl font-black">{results.potentialSavings}</p>
                    </div>
                    <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-8">
                      <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">{t.monthlyGain}</p>
                      <p className="text-2xl font-bold">{results.monthlyGain}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="#audit"
                  className="inline-block bg-navablue text-white px-10 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-navablue/20"
                >
                  {t.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
