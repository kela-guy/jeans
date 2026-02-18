"use client"

import { useEffect, useState } from "react"

export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const threshold = scrollHeight * 0.3
      setVisible(scrollHeight > 0 && scrollTop >= threshold)
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
