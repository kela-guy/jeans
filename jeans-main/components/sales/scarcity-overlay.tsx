"use client"

import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SCROLL_THRESHOLD = 0.9
const HEADLINE_ONLY_MS = 2000
const CONTENT_FADE_DELAY_MS = 400

export function ScarcityOverlay({
  onReturn,
  returned,
}: {
  onReturn: () => void
  returned: boolean
}) {
  const [showOverlay, setShowOverlay] = useState(false)
  const [maskVisible, setMaskVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [restVisible, setRestVisible] = useState(false)

  const triggerShow = useCallback(() => {
    setShowOverlay(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMaskVisible(true))
    })
    setTimeout(() => setContentVisible(true), CONTENT_FADE_DELAY_MS)
    setTimeout(() => setRestVisible(true), CONTENT_FADE_DELAY_MS + HEADLINE_ONLY_MS)
  }, [])

  const checkScroll = useCallback(() => {
    if (typeof window === "undefined" || returned) return

    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? scrollTop / docHeight : 0

    if (progress >= SCROLL_THRESHOLD) {
      triggerShow()
    }
  }, [returned, triggerShow])

  useEffect(() => {
    checkScroll()
    window.addEventListener("scroll", checkScroll, { passive: true })
    return () => window.removeEventListener("scroll", checkScroll)
  }, [checkScroll])

  const handleReturn = () => {
    setContentVisible(false)
    setMaskVisible(false)
    setRestVisible(false)
    setTimeout(() => {
      setShowOverlay(false)
      onReturn()
      window.dispatchEvent(new Event("scarcity-returned"))
    }, 350)
  }

  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = ""
      }
    }
  }, [showOverlay])

  if (!showOverlay) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-black transition-[clip-path] duration-500 ease-out",
        maskVisible ? "[clip-path:circle(150vmax_at_50%_50%)]" : "[clip-path:circle(0%_at_50%_50%)]"
      )}
      aria-modal="true"
      role="dialog"
      aria-label="מבצע מיוחד בשבילך"
    >
      <div
        className={cn(
          "flex max-w-md flex-col items-center gap-6 px-8 py-10 text-center transition-opacity duration-300",
          contentVisible ? "opacity-100" : "opacity-0"
        )}
      >
        {/* ראשית: רק "עצרי!" במשך 2 שניות */}
        <p
          className={cn(
            "text-7xl font-black tracking-tight text-white md:text-8xl lg:text-9xl xl:text-[10rem] transition-opacity duration-300",
            restVisible ? "opacity-0 absolute pointer-events-none" : "opacity-100"
          )}
        >
          עצרי!
        </p>

        {/* אחרי 2 שניות: שאר התוכן */}
        <div
          className={cn(
            "flex flex-col items-center gap-5 px-2 transition-opacity duration-300 max-w-md",
            restVisible ? "opacity-100" : "opacity-0 absolute pointer-events-none"
          )}
        >
          <p className="text-base leading-relaxed text-white/90">
            את מספיק זמן בעמוד כדי שאני אבין
            <br />
            <span className="font-semibold text-white">שהבריאות שלך חשובה לך!</span>
          </p>

          <p className="text-xl font-semibold text-white">
            הבריאות שלך חשובה גם לי ❤️
          </p>

          <p className="text-lg font-bold leading-snug text-white">
            עכשיו זה הזמן לקבל החלטה
            <br />
            שתקדם את הבריאות והנראות שלך!
          </p>

          <p className="text-sm text-white/80">
            כדי לעודד אותך לקבל החלטה
          </p>

          <p className="text-base font-medium text-white">
            קחי מייד קוד קופון של 10 אחוז הנחה
          </p>

          <div className="rounded-lg border border-white/20 bg-white/5 px-6 py-4">
            <p
              className="font-mono text-2xl font-bold tracking-widest text-white"
              dir="ltr"
            >
              CARE10
            </p>
          </div>

          <p className="text-sm text-white/80 leading-relaxed">
            תעתיקי את הקופון בלחיצה עליו,
            <br />
            או שתזכרי אותו בעל פה.
          </p>

          <p className="text-lg font-semibold text-white pt-1">
            את מוכנה?
          </p>

          <Button
            size="lg"
            onClick={handleReturn}
            className="flex flex-col h-auto rounded-full bg-blue-600 text-white hover:bg-blue-700 px-[10px] py-[7.5px] text-xl font-semibold"
          >
            <span>ברגע שתלחצי כאן</span>
            <span>יש לך 5 דקות בדיוק לממש את ההטבה</span>
          </Button>

          <p className="text-xs text-white/60 leading-relaxed">
            *שימי לב
            <br />
            הקופון פעיל ל5 דקות בדיוק מהרגע שלחצת על הכפתור למעלה.
          </p>
        </div>
      </div>
    </div>
  )
}
