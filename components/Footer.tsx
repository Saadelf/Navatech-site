"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { translations, Language } from "@/lib/translations";

export default function Footer() {
  const pathname = usePathname();
  const lang: Language = pathname.startsWith("/en") ? "en" : "fr";
  const t = translations[lang].footer;

  return (
    <footer className="bg-navagray border-t border-black/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href={lang === "en" ? "/en" : "/"} className="text-2xl font-bold text-navablue mb-4 block">
              NAVATECH
            </Link>
            <p className="text-gray-600 text-sm max-w-sm mb-6">
              {translations[lang].hero.subtitle}
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>{t.address}</p>
              <p>{t.email}</p>
              <p>WhatsApp: {t.whatsapp}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-navablue mb-4 uppercase text-xs tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href={`/${lang === "en" ? "en/" : ""}solutions`} className="hover:text-navablue transition-colors">{translations[lang].nav.solutions}</Link></li>
              <li><Link href={`/${lang === "en" ? "en/simulator" : "simulateur"}`} className="hover:text-navablue transition-colors">{translations[lang].nav.simulator}</Link></li>
              <li><Link href={`/${lang === "en" ? "en/pricing" : "tarifs"}`} className="hover:text-navablue transition-colors">{translations[lang].nav.pricing}</Link></li>
              <li><Link href={`/${lang === "en" ? "en/" : ""}blog`} className="hover:text-navablue transition-colors">{translations[lang].nav.blog}</Link></li>
              <li><Link href={`/${lang === "en" ? "en/" : ""}a-propos`} className="hover:text-navablue transition-colors">{translations[lang].nav.about}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-navablue mb-4 uppercase text-xs tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href={`/${lang === "en" ? "en/" : ""}legal/terms`} className="hover:text-navablue transition-colors">{t.legal}</Link></li>
              <li><Link href={`/${lang === "en" ? "en/" : ""}legal/privacy`} className="hover:text-navablue transition-colors">{t.privacy}</Link></li>
              <li><Link href={`/${lang === "en" ? "en/" : ""}legal/cookies`} className="hover:text-navablue transition-colors">{t.cookies}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-400 font-medium uppercase tracking-widest">
          <p>{t.rights}</p>
          <div className="flex space-x-6 uppercase">
            <Link href={lang === "en" ? "/" : "/en"} className="hover:text-navablue transition-colors">
              {lang === "en" ? "FR" : "EN"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
