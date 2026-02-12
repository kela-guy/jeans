import { HeroSection } from "@/components/sales/hero-section"
import { ProblemSection } from "@/components/sales/problem-section"
import { SolutionSection } from "@/components/sales/solution-section"
import { SocialProofSection } from "@/components/sales/social-proof-section"
import { PainAgitationSection } from "@/components/sales/pain-agitation-section"
import { EnemySection } from "@/components/sales/enemy-section"
import { ScienceSection } from "@/components/sales/science-section"
import { OfferSection } from "@/components/sales/offer-section"
import { TargetAudienceSection } from "@/components/sales/target-audience-section"
import { FaqSection } from "@/components/sales/faq-section"
import { AboutSection } from "@/components/sales/about-section"
import { StickyCta } from "@/components/sales/sticky-cta"

export default function Page() {
  return (
    <>
      <main className="mx-auto max-w-xl px-6 py-10 md:px-8 md:py-14">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <SocialProofSection />
        <PainAgitationSection />
        <EnemySection />
        <ScienceSection />
        <OfferSection />
        <TargetAudienceSection />
        <FaqSection />
        <AboutSection />
      </main>

      <StickyCta />
      <div className="h-14" />
    </>
  )
}
