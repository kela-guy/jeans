import { HeroSection } from "@/components/sales/hero-section"
import { ProblemSection } from "@/components/sales/problem-section"
import { SolutionSection } from "@/components/sales/solution-section"
import { PainAgitationSection } from "@/components/sales/pain-agitation-section"
import { EnemySection } from "@/components/sales/enemy-section"
import { ScienceSection } from "@/components/sales/science-section"
import { OfferSection } from "@/components/sales/offer-section"
import { Closing21DaysSection } from "@/components/sales/closing-21-days-section"
import { PricingSection } from "@/components/sales/pricing-section"
import { HowItWorksSection } from "@/components/sales/how-it-works-section"
import { ObjectionSection } from "@/components/sales/objection-section"
import { AboutSection } from "@/components/sales/about-section"
import { StickyCta } from "@/components/sales/sticky-cta"
import { ScarcityExperience } from "@/components/sales/scarcity-experience"

export default function Page() {
  return (
    <>
      <ScarcityExperience />
      <main className="mx-auto max-w-xl px-6 py-10 md:px-8 md:py-14">
        <HeroSection />

        <ProblemSection />

        <SolutionSection />

        <PainAgitationSection />

        <EnemySection />

        <ScienceSection />

        <OfferSection />

        <Closing21DaysSection />

        <PricingSection />

        <HowItWorksSection />

        <ObjectionSection />

        <AboutSection />
      </main>

      <StickyCta />
      <div className="h-14" />
    </>
  )
}
