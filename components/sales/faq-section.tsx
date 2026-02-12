"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "כמה זמן לוקח לראות תוצאות?",
    a: "רוב המשתתפות מדווחות על שינויים כבר בשבוע הראשון. תוך 21 יום תראי ירידה משמעותית.",
  },
  {
    q: "האם אני צריכה לעשות ספורט?",
    a: "לא. התוכנית לא דורשת חדר כושר או אימונים. הכל מבוסס על הפעלת מתג שריפת השומן.",
  },
  {
    q: "האם יש תפריטים מחייבים?",
    a: "לא. אין תפריטים נוקשים. התוכנית מלמדת אותך עקרונות שתוכלי ליישם בכל ארוחה.",
  },
  {
    q: "האם זה מתאים לכל גיל?",
    a: "כן. השיטה מבוססת על מנגנון ביולוגי שקיים אצל כולנו, בכל גיל.",
  },
  {
    q: "מה אם זה לא עובד עבורי?",
    a: "יש אחריות מלאה. אם לא תראי תוצאות, תקבלי החזר מלא.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20">
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">
        {"שאלות ותשובות"}
      </h2>

      <div className="mt-8 flex flex-col divide-y divide-border">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-4 text-right"
              aria-expanded={openIndex === i}
            >
              <span className="text-base font-medium text-foreground">{faq.q}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <p className="pb-4 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
