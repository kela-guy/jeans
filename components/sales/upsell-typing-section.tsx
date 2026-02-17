"use client"

import { useEffect, useState } from "react"
import { getTypingDurationSec } from "@/lib/typing-duration-config"
import { TypingReveal } from "./typing-reveal"

const INITIAL_DELAY_MS = 5000
const AVG_MS_PER_CHAR = 50 // rough average from getDelayForChar (letters, spaces, punctuation)

const BLOCKS: { text: string; className: string; highlightPhrases?: string[] }[] = [
  {
    text: "חכי….",
    className: "text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl",
  },
  {
    text: " נפתחה בפנייך ברגע זה הזדמנות לקבל הדרכה חד פעמית",
    className: "text-lg leading-relaxed text-foreground md:text-xl",
    highlightPhrases: ["הדרכה חד פעמית"],
  },
  {
    text: "אבל היאֿ לא לכל אחת, לכן זו הפעם היחידה שתראי את הדף הזה. זה דף חד פעמי.",
    className: "text-base leading-relaxed text-foreground",
    highlightPhrases: ["זו הפעם היחידה", "דף חד פעמי"],
  },
  {
    text: "אז הנה מה שאני מחכה לספר לך צילמתי בשקט הדרכה אגרסיבית במיוחד קראתי לה: איך להיראות צעירה יותר ב10 שנים.",
    className: "text-lg leading-relaxed text-foreground md:text-xl",
    highlightPhrases: ["איך להיראות צעירה יותר ב10 שנים"],
  },
  {
    text: "הדרכה סופר עוצמתית מדויקת! ששמה דגש על 2 כלים סופר אגרסיביים שמפעילים מניפולציות כבדות על הגוף שיכריחו אותו להכנס חזק יותר לאיזון הורמונלי והתוצאות יגיע ולפעמים ברמה של ימים או אפילו 24 שעות. אלו לא כלים רגילים, ויפתיע אותך איך השינוי שלהם כל כך משמעותי.",
    className: "text-base leading-relaxed text-foreground",
    highlightPhrases: ["התוצאות יגיע ולפעמים ברמה של ימים או אפילו 24 שעות", "השינוי שלהם כל כך משמעותי"],
  },
  {
    text: "אני לא רוצה לפרט עוד על הכלים וזה המקסימום שאני יכול לספר על ההדרכה הזאת כרגע. אני אגיד שוב - היא לא מתאימה לכל אחת. ומי שתבחר ליישם את הכלים שם תופתע מהמהירות שבה התוצאות מגיעות. זה המקסימום שאני יכול לפרט על ההדרכה כרגע.",
    className: "text-base leading-relaxed text-foreground",
    highlightPhrases: ["לא מתאימה לכל אחת", "תופתע מהמהירות שבה התוצאות מגיעות"],
  },
  {
    text: "עכשיו במחיר סופר נגיש! 87 ש״ח בלבד. במחיר של לאסוף מהקופה.",
    className: "text-xl font-bold leading-snug text-foreground md:text-2xl",
    highlightPhrases: ["87 ש״ח בלבד", "מחיר סופר נגיש"],
  },
  {
    text: "הכי ישיר ובכנות מלאה! זה חד פעמי ואת יכולה לבדוק אותי על זה בשום מקום אחר אי אפשר לקבל את ההדרכה הזאת, בשום מקום אחר אי אפשר לרכוש אותה, וגם אם תעתיקי עכשיו את הקישור ותדביקי במקום אחר, לא תוכלי לקנות. זו לא הדרכה שמתאימה לכל אחת ולכן זה רק במעמד הזה.",
    className: "text-base leading-relaxed text-foreground",
    highlightPhrases: ["זה חד פעמי", "רק במעמד הזה"],
  },
  {
    text: "יש לך אפשרות לשים עליה יד עכשיו ולקבל את ההדרכה באימייל תוך 3 דקות.",
    className: "text-lg font-semibold leading-relaxed text-foreground",
    highlightPhrases: ["תוך 3 דקות"],
  },
]

const totalChars = BLOCKS.reduce((sum, b) => sum + b.text.length, 0)
const naturalDurationMs = totalChars * AVG_MS_PER_CHAR

export function UpsellTypingSection() {
  const [typingStarted, setTypingStarted] = useState(false)
  const [currentBlock, setCurrentBlock] = useState(0)
  const [durationSec, setDurationSec] = useState(90)

  useEffect(() => {
    setDurationSec(getTypingDurationSec())
  }, [])

  const targetMs = durationSec * 1000
  const delayScale = targetMs / naturalDurationMs

  useEffect(() => {
    const t = setTimeout(() => setTypingStarted(true), INITIAL_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="flex flex-col gap-10 py-6">
      <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
        {"ההצעה"}
      </p>
      {BLOCKS.map((block, index) => (
        <TypingReveal
          key={index}
          text={block.text}
          className={block.className}
          startTrigger={typingStarted && currentBlock === index}
          onComplete={() => setCurrentBlock((i) => i + 1)}
          delayScale={delayScale}
          highlightPhrases={block.highlightPhrases}
        />
      ))}
    </section>
  )
}
