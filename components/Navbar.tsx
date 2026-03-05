"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { translations, Language } from "@/lib/translations";

export default function Navbar() {
  const pathname = usePathname();
  const lang: Language = pathname.startsWith("/en") ? "en" : "fr";
  const t = translations[lang].nav;

  const navItems = [
    { label: t.solutions, href: `/${lang === "en" ? "en/" : ""}solutions` },
    { label: t.simulator, href: `/${lang === "en" ? "en/" : ""}simulateur` },
    { label: t.pricing, href: `/${lang === "en" ? "en/" : ""}tarifs` },
    { label: t.blog, href: `/${lang === "en" ? "en/" : ""}blog` },
    { label: t.about, href: `/${lang === "en" ? "en/" : ""}a-propos` },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navagray/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href={lang === "en" ? "/en" : "/"} className="text-2xl font-bold text-navablue">
              NAVATECH
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-navablue transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href={lang === "en" ? "/" : "/en"}
              className="text-sm font-medium text-gray-500 hover:text-navablue uppercase"
            >
              {lang === "en" ? "FR" : "EN"}
            </Link>
            <Link
              href={`/${lang === "en" ? "en/" : ""}audit`}
              className="bg-navablue text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all"
            >
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
