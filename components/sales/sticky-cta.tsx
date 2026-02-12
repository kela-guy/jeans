"use client"

import { useEffect, useState } from "react"

export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm px-4 py-3 md:py-4">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4">
        <p className="hidden text-sm font-medium text-foreground md:block">
          {"הורידי 2 מידות בג׳ינס תוך 21 יום"}
        </p>
        <a
          href="#pricing"
          className="block w-full rounded bg-foreground px-8 py-3 text-center font-bold text-primary-foreground transition-opacity hover:opacity-90 md:w-auto"
        >
          {"!אני רוצה להתחיל"}
        </a>
      </div>
    </div>
  )
}
