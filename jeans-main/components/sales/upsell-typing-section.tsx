"use client"

import { useEffect, useState } from "react"
import { getTypingDurationSec } from "@/lib/typing-duration-config"
import { TypingReveal } from "./typing-reveal"

const INITIAL_DELAY_MS = 5000
const AVG_MS_PER_CHAR = 50 // rough average from getDelayForChar (letters, spaces, punctuation)

const HEADLINE = "text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl"
const SUBHEAD = "text-xl font-bold leading-snug text-foreground md:text-2xl"
const PUNCH = "text-2xl font-black leading-snug text-foreground md:text-3xl"
const BODY = "text-base leading-relaxed text-foreground"
const EMPHASIS = "text-lg font-semibold leading-relaxed text-foreground md:text-xl"
const CAPTION = "text-sm text-muted-foreground leading-relaxed"

type TypingBlock = { text: string; className: string; highlightPhrases?: string[] }
type SpacerBlock = { spacer: true; className?: string }
type BlockItem = TypingBlock | SpacerBlock

const BLOCKS: BlockItem[] = [
  { text: "חכי….", className: HEADLINE },
  { text: "נפתחה בפנייך ברגע זה הזדמנות", className: SUBHEAD },
  { text: "לקבל הדרכה חד פעמית", className: PUNCH, highlightPhrases: ["הדרכה חד פעמית"] },
  { text: "אבל היא לא לכל אחת", className: EMPHASIS, highlightPhrases: ["לא לכל אחת"] },
  { text: "לכן זו הפעם היחידה שתראי את הדף הזה.", className: BODY },
  { text: "זה דף חד פעמי.", className: BODY + " font-bold", highlightPhrases: ["דף חד פעמי"] },
  { spacer: true, className: "h-10" },
  { text: "אז הנה מה שאני מחכה לספר לך", className: EMPHASIS },
  { text: "צילמתי בשקט הדרכה סודית", className: BODY },
  { text: "קראתי לה:\nאפקט הוואו: איך להאיץ את חילוף החומרים של הגוף ברגע אחד!", className: PUNCH + " whitespace-pre-line", highlightPhrases: ["אפקט הוואו: איך להאיץ את חילוף החומרים של הגוף ברגע אחד"] },
  { spacer: true, className: "h-10" },
  { text: "הדרכה סופר עוצמתית ומדויקת!", className: SUBHEAD },
  { text: "ששמה דגש על 2 כלים ספציפיים", className: BODY },
  { text: "שמפעילים מניפולציות כבדות על הגוף", className: BODY },
  { text: "שיכריחו אותו להכנס חזק יותר לאיזון הורמונלי", className: BODY },
  { text: "והתוצאות יגיע ולפעמים ברמה של ימים או אפילו 24 שעות.", className: EMPHASIS, highlightPhrases: ["והתוצאות יגיע ולפעמים ברמה של ימים או אפילו 24 שעות"] },
  { text: "התחושה שמשתתפים מתארים: ״למחרת הרגשתי רזה יותר״", className: EMPHASIS, highlightPhrases: ["למחרת הרגשתי רזה יותר"] },
  { text: "אלו לא כלים רגילים, ויפתיע אותך איך השינוי שלהם כל כך משמעותי.", className: EMPHASIS, highlightPhrases: ["השינוי שלהם כל כך משמעותי"] },
  { text: "אלו לא כלים שאפשר להשתמש בהם ביום יום.", className: BODY },
  { text: "אני לא רוצה לפרט עוד על הכלים וזה המקסימום שאני יכול לספר על ההדרכה הזאת כרגע.", className: BODY },
  { text: "היא לא מתאימה לכל אחת.", className: EMPHASIS, highlightPhrases: ["לא מתאימה לכל אחת"] },
  { text: "ומי שתבחר ליישם את הכלים שם תופתע מהמהירות שבה התוצאות מגיעות.", className: EMPHASIS, highlightPhrases: ["תופתע מהמהירות שבה התוצאות מגיעות"] },
  { text: "זה המקסימום שאני יכול לפרט על ההדרכה כרגע.", className: BODY },
  { text: "עכשיו במחיר סופר נגיש!", className: SUBHEAD },
  { text: "87 ש״ח בלבד.", className: PUNCH, highlightPhrases: ["87 ש״ח בלבד"] },
  { text: "במחיר של לאסוף מהקופה.", className: CAPTION },
  { spacer: true, className: "h-10" },
  { text: "הכי ישיר ובכנות מלאה!", className: SUBHEAD },
  { text: "זה חד פעמי ואת יכולה לבדוק אותי על זה.", className: EMPHASIS, highlightPhrases: ["זה חד פעמי"] },
  { text: "בשום מקום אחר אי אפשר לקבל את ההדרכה הזאת, בשום מקום אחר אי אפשר לרכוש אותה, וגם אם תעתיקי עכשיו את הקישור ותדביקי במקום אחר, לא תוכלי לקנות.", className: BODY },
  { text: "זו לא הדרכה שמתאימה לכל אחת ולכן זה רק במעמד הזה.", className: EMPHASIS, highlightPhrases: ["רק במעמד הזה"] },
  { spacer: true, className: "h-10" },
  { text: "יש לך אפשרות לשים עליה יד עכשיו\nולקבל את ההדרכה באימייל תוך 3 דקות.", className: PUNCH + " whitespace-pre-line", highlightPhrases: ["תוך 3 דקות"] },
]

const totalChars = BLOCKS.reduce(
  (sum, b) => sum + ("spacer" in b ? 0 : b.text.length),
  0
)
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

  let typingBlockIndex = 0
  return (
    <section className="flex flex-col gap-6 py-6">
      <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
        {"ההצעה"}
      </p>
      {BLOCKS.map((block, index) => {
        if ("spacer" in block && block.spacer) {
          return <div key={index} className={block.className ?? "h-10"} aria-hidden />
        }
        const typingBlock = block as TypingBlock
        const typingIndex = typingBlockIndex++
        return (
          <TypingReveal
            key={index}
            text={typingBlock.text}
            className={typingBlock.className}
            startTrigger={typingStarted && currentBlock === typingIndex}
            onComplete={() => setCurrentBlock((i) => i + 1)}
            delayScale={delayScale}
            highlightPhrases={typingBlock.highlightPhrases}
            soundsPerWord={2}
          />
        )
      })}
    </section>
  )
}
