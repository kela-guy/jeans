"use client"

import { useEffect, useState, useRef } from "react"

const SCROLL_SHOW_THRESHOLD = 0.3

export function StickyCta() {
  const [visible, setVisible] = useState(false)
  const hasShownRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (hasShownRef.current) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      if (progress >= SCROLL_SHOW_THRESHOLD) {
        hasShownRef.current = true
        setVisible(true)
      }
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm px-4 py-2.5">
      <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
        <a
          href="#pricing"
          className="block w-full rounded-lg bg-blue-600 px-8 py-3 text-center text-base font-bold text-white transition-opacity hover:bg-blue-700 hover:opacity-90"
        >
          יאללה אביב - תוריד אותי ב2 מידות בג׳ינס!
        </a>
      </div>
    </div>
  )
}
