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
      <main className="mx-auto max-w-2xl px-5 py-8 md:px-8 md:py-12">
        <HeroSection />

        <div className="border-t border-border" />
        <ProblemSection />

        <div className="border-t border-border" />
        <SolutionSection />

        <div className="border-t border-border" />
        <SocialProofSection />

        <div className="border-t border-border" />
        <PainAgitationSection />

        <div className="border-t border-border" />
        <EnemySection />

        <div className="border-t border-border" />
        <ScienceSection />

        <div className="border-t border-border" />
        <OfferSection />

        <div className="border-t border-border" />
        <PricingSection />

        <div className="border-t border-border" />
        <SignupForm />

        <div className="border-t border-border" />
        <TargetAudienceSection />

        <div className="border-t border-border" />
        <FaqSection />

        <div className="border-t border-border" />
        <AboutSection />

        <div className="border-t border-border" />
        <SignupForm />

        {/* Surprise CTA */}
        <div className="flex flex-col items-center gap-4 py-16 text-center">
          <p className="font-serif text-xl font-bold text-foreground md:text-2xl">
            {"הפתעה: רוצה לראות איך תיראי בסוף התוכנית?"}
          </p>
          <a
            href="#signup"
            className="rounded bg-foreground px-8 py-4 text-lg font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {"לחצי כאן"}
          </a>
        </div>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>{"כל הזכויות שמורות"}</p>
      </footer>

      <StickyCta />

      {/* Spacer for sticky CTA */}
      <div className="h-16" />
    </>
  )
}
