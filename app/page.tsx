import { HeroSection } from "@/components/sales/hero-section"
import { ProblemSection } from "@/components/sales/problem-section"
import { SolutionSection } from "@/components/sales/solution-section"
import { SocialProofSection } from "@/components/sales/social-proof-section"
import { PainAgitationSection } from "@/components/sales/pain-agitation-section"
import { EnemySection } from "@/components/sales/enemy-section"
import { ScienceSection } from "@/components/sales/science-section"
import { OfferSection } from "@/components/sales/offer-section"
import { PricingSection } from "@/components/sales/pricing-section"
import { SignupForm } from "@/components/sales/signup-form"
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
        <PricingSection />
        <SignupForm />
        <TargetAudienceSection />
        <FaqSection />
        <AboutSection />
        <SignupForm />

        {/* Surprise CTA */}
        <div className="flex flex-col items-center gap-3 py-20 text-center">
          <p className="text-xl font-bold text-foreground md:text-2xl">
            {"הפתעה: רוצה לראות איך תיראי בסוף התוכנית?"}
          </p>
          <a
            href="#signup"
            className="mt-4 rounded bg-foreground px-8 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {"לחצי כאן"}
          </a>
        </div>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        <p>{"כל הזכויות שמורות"}</p>
      </footer>

      <StickyCta />
      <div className="h-14" />
    </>
  )
}
