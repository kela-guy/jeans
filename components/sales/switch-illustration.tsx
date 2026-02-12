"use client"

import { useEffect, useRef, useState, useCallback } from "react"

const OFF_ITEMS = ["אגירת שומן", "עייפות כרונית", "דחף למתוק"]
const ON_ITEMS = ["שריפת שומן", "אנרגיה גבוהה", "שינה איכותית"]

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v))
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function SwitchIllustration() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const el = containerRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const windowH = window.innerHeight

    // Start when element center hits 65% of viewport
    // End when element center hits 35% of viewport
    // This is a tight range so the animation plays while fully visible
    const elCenter = rect.top + rect.height / 2
    const startY = windowH * 0.65
    const endY = windowH * 0.35

    const raw = (startY - elCenter) / (startY - endY)
    setProgress(clamp(raw, 0, 1))
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [handleScroll])

  // Single phase: 0 = OFF state, 1 = ON state
  // Switch knob moves smoothly with easing
  const eased = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2

  // OFF column: fully visible at 0, fades at 1
  const offOpacity = clamp(lerp(1, 0.3, eased), 0, 1)
  const offScale = lerp(1, 0.96, eased)

  // ON column: faded at 0, fully visible at 1
  const onOpacity = clamp(lerp(0.3, 1, eased), 0, 1)
  const onScale = lerp(0.96, 1, eased)

  // Switch track
  const knobX = lerp(0, 100, eased)
  const trackHue = lerp(0, 0, eased)
  const trackLight = lerp(85, 25, eased)

  // Knob
  const knobLight = lerp(30, 96, eased)

  return (
    <div ref={containerRef} className="my-10">
      {/* Switch in center */}
      <div className="flex justify-center mb-8">
        <div
          className="relative h-10 w-20 rounded-full border border-border transition-colors"
          style={{ backgroundColor: `hsl(${trackHue},0%,${trackLight}%)` }}
        >
          <div
            className="absolute top-1 h-7 w-7 rounded-full shadow-sm"
            style={{
              backgroundColor: `hsl(0,0%,${knobLight}%)`,
              right: `${lerp(6, 58, eased)}%`,
              transition: "none",
            }}
          />
          <span
            className="absolute left-2 top-1/2 -translate-y-1/2 text-[9px] font-bold uppercase tracking-wide"
            style={{ color: `hsl(0,0%,${lerp(55, 75, eased)}%)` }}
          >
            OFF
          </span>
          <span
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] font-bold uppercase tracking-wide"
            style={{ color: `hsl(0,0%,${lerp(35, 96, eased)}%)` }}
          >
            ON
          </span>
        </div>
      </div>

      {/* Two columns side by side -- always visible, crossfade emphasis */}
      <div className="grid grid-cols-2 gap-4">
        {/* OFF column */}
        <div
          className="rounded-lg border border-border px-4 py-5 text-center"
          style={{
            opacity: offOpacity,
            transform: `scale(${offScale})`,
            backgroundColor: `hsl(0, 0%, ${lerp(95, 97, eased)}%)`,
          }}
        >
          <p className="mb-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {"כשהמתג כבוי"}
          </p>
          <p className="mb-4 text-[11px] text-muted-foreground">
            {"אינסולין לא מאוזן"}
          </p>
          <div className="flex flex-col gap-2">
            {OFF_ITEMS.map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-1.5">
                <span className="text-xs text-muted-foreground">{"✕"}</span>
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p
            className="mt-4 text-xs leading-relaxed text-muted-foreground"
            style={{ opacity: offOpacity }}
          >
            {"הגוף אוגר שומן ומתכונן למצבי סטרס"}
          </p>
        </div>

        {/* ON column */}
        <div
          className="rounded-lg border px-4 py-5 text-center"
          style={{
            opacity: onOpacity,
            transform: `scale(${onScale})`,
            backgroundColor: `hsl(0, 0%, ${lerp(97, 8, eased)}%)`,
            borderColor: `hsl(0, 0%, ${lerp(90, 20, eased)}%)`,
          }}
        >
          <p
            className="mb-1 text-xs font-semibold tracking-wide uppercase"
            style={{ color: `hsl(0, 0%, ${lerp(55, 85, eased)}%)` }}
          >
            {"כשהמתג דולק"}
          </p>
          <p
            className="mb-4 text-[11px]"
            style={{ color: `hsl(0, 0%, ${lerp(55, 70, eased)}%)` }}
          >
            {"אינסולין מאוזן"}
          </p>
          <div className="flex flex-col gap-2">
            {ON_ITEMS.map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-1.5">
                <span
                  className="text-xs"
                  style={{ color: `hsl(0, 0%, ${lerp(55, 85, eased)}%)` }}
                >
                  {"✓"}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: `hsl(0, 0%, ${lerp(55, 92, eased)}%)` }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p
            className="mt-4 text-xs leading-relaxed"
            style={{
              color: `hsl(0, 0%, ${lerp(55, 90, eased)}%)`,
              opacity: onOpacity,
            }}
          >
            {"הגוף שורף שומן כמו מכונה"}
          </p>
        </div>
      </div>
    </div>
  )
}
