"use client"

import { useEffect, useState } from "react"

export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm px-4 py-2.5">
      <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
        <div className="hidden flex-col md:flex">
          <p className="text-sm font-bold text-foreground">
            {"הורידי 2 מידות תוך 21 יום"}
          </p>
          <p className="text-xs text-muted-foreground">
            {"*מקומות מוגבלים"}
          </p>
        </div>
        <a
          href="#pricing"
          className="block w-full rounded bg-foreground px-8 py-3 text-center text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 md:w-auto"
        >
          {"!אני רוצה להתחיל"}
        </a>
      </div>
    </div>
  )
}
