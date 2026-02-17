"use client"

import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SCROLL_THRESHOLD = 0.9

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

  const triggerShow = useCallback(() => {
    setShowOverlay(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMaskVisible(true))
    })
    setTimeout(() => setContentVisible(true), 400)
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
        <p className="text-lg leading-relaxed text-white/90">
          שמנו לב שאכפת לך ממנה — ואכפת גם לנו.
          <br />
          <span className="mt-2 block font-semibold text-white">
            הנה קוד קופון בשבילה:
          </span>
        </p>
        <div className="rounded-lg border border-white/20 bg-white/5 px-6 py-4">
          <p className="text-xs uppercase tracking-wider text-white/60">
            קוד קופון
          </p>
          <p
            className="mt-1 font-mono text-2xl font-bold tracking-widest text-white"
            dir="ltr"
          >
            CARE21
          </p>
        </div>
        <p className="text-sm text-white/70">
          המבצע מוגבל בזמן — חזרי לעמוד והטיימר יופיע.
        </p>
        <Button
          size="lg"
          onClick={handleReturn}
          className="bg-white text-black hover:bg-white/90"
        >
          חזרה להצעה
        </Button>
      </div>
    </div>
  )
}
