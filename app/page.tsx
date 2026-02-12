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
import { CountdownTimer } from "@/components/sales/countdown-timer"
import { InlineCta } from "@/components/sales/inline-cta"
import { WhatsAppTestimonials } from "@/components/sales/whatsapp-testimonials"
import { SocialProofStats } from "@/components/sales/social-proof-stats"

export default function Page() {
  return (
    <>
      <main className="mx-auto max-w-xl px-6 py-10 md:px-8 md:py-14">
        {/* Urgency timer at top */}
        <CountdownTimer />

        <HeroSection />

        {/* Big numbers right after hero */}
        <SocialProofStats />

        <InlineCta />

        <ProblemSection />

        <InlineCta text="אני רוצה לפתור את זה עכשיו" />

        <SolutionSection />

        <SocialProofSection />

        {/* WhatsApp proof right after social proof text */}
        <WhatsAppTestimonials />

        <InlineCta />

        <PainAgitationSection />

        <InlineCta text="מספיק! אני מוכנה לשינוי" />

        <EnemySection />

        <ScienceSection />

        <InlineCta />

        <OfferSection />

        {/* Second round of stats before target audience */}
        <SocialProofStats />

        <InlineCta text="אני רוצה להתחיל את התוכנית" />

        <TargetAudienceSection />

        <FaqSection />

        <AboutSection />

        <InlineCta />
      </main>

      <StickyCta />
      <div className="h-14" />
    </>
  )
}
