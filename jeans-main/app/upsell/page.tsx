"use client"

import { UpsellTypingSection } from "@/components/sales/upsell-typing-section"
import { TypingSoundConfigPanel } from "@/components/sales/typing-sound-config-panel"

export default function UpsellPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-10 md:px-8 md:py-14">
      <section className="py-8 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
          {"תודה שהצטרפת"}
        </p>
        <h1 className="mt-2 text-2xl font-black text-foreground md:text-3xl">
          {"הצטרפת לקורס "}
          <span className="marker">{"בהצלחה"}</span>
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {"בדקות הקרובות יישלח אלייך אימייל עם "}
          <span className="marker text-foreground">{"כל הפרטים"}</span>
        </p>
      </section>

      <UpsellTypingSection />

      <section className="mt-12">
        <TypingSoundConfigPanel />
      </section>
    </main>
  )
}
