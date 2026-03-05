import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import PackagesPreview from "@/components/PackagesPreview";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import AuditSection from "@/components/AuditSection";

export default function Home() {
  const lang = "fr";
  return (
    <>
      <Hero lang={lang} />
      <SocialProof lang={lang} />
      <ProblemSolution lang={lang} />
      <HowItWorks lang={lang} />
      <PackagesPreview lang={lang} />
      <CaseStudies lang={lang} />
      <FAQ lang={lang} />
      <AuditSection lang={lang} />
    </>
  );
}
