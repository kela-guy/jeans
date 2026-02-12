"use client"

import { useEffect, useRef, useState, useCallback } from "react"

const OFF_ITEMS = [
  "אגירת שומן",
  "עייפות כרונית",
  "דחף למתוק",
]

const ON_ITEMS = [
  "שריפת שומן",
  "אנרגיה גבוהה",
  "שינה איכותית",
]

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v))
}

export function SwitchIllustration() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const el = containerRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const windowH = window.innerHeight

    const startThreshold = windowH * 0.8
    const endThreshold = windowH * 0.2

    const totalRange = startThreshold - endThreshold + rect.height
    const scrolled = startThreshold - rect.top

    const raw = scrolled / totalRange
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

  // Phase 1 (0 - 0.4): OFF state
  // Phase 2 (0.4 - 0.6): Switch flips
  // Phase 3 (0.6 - 1): ON state

  const switchT = clamp((progress - 0.4) / 0.2, 0, 1)
  const isFlipped = progress > 0.5

  // Background
  const bgLight = lerp(96, 8, switchT)

  // Knob: in RTL, OFF = right side, ON = left side
  // Use percentage-based position within the track
  const knobPosition = switchT * 100 // 0% = right (OFF), 100% = left (ON)

  // Track
  const trackBg = lerp(88, 20, switchT)
  const trackBorder = lerp(78, 30, switchT)
  const knobBg = lerp(30, 96, switchT)

  // OFF items
  const getOffOpacity = (i: number) => {
    const start = 0.08 + i * 0.08
    const end = start + 0.1
    const fadeOut = progress > 0.38 ? clamp(1 - (progress - 0.38) / 0.08, 0, 1) : 1
    return clamp((progress - start) / (end - start), 0, 1) * fadeOut
  }

  // ON items
  const getOnOpacity = (i: number) => {
    const start = 0.6 + i * 0.08
    const end = start + 0.12
    return clamp((progress - start) / (end - start), 0, 1)
  }

  const getOnY = (i: number) => {
    return lerp(8, 0, getOnOpacity(i))
  }

  // Messages
  const offMsg = clamp((progress - 0.2) / 0.12, 0, 1) * (progress < 0.38 ? 1 : clamp(1 - (progress - 0.38) / 0.08, 0, 1))
  const onMsg = clamp((progress - 0.8) / 0.12, 0, 1)

  return (
    <div
      ref={containerRef}
      className="relative my-6 overflow-hidden rounded-lg border border-border"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `hsl(210, 20%, ${bgLight}%)` }}
      />

      <div className="relative flex flex-col items-center gap-5 px-5 py-8 md:py-10">
        {/* Label */}
        <p
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: `hsl(0,0%,${isFlipped ? 60 : 50}%)` }}
        >
          {"מתג שריפת השומן"}
        </p>

        {/* Switch */}
        <div
          className="relative flex h-12 w-24 items-center rounded-full border"
          style={{
            backgroundColor: `hsl(0,0%,${trackBg}%)`,
            borderColor: `hsl(0,0%,${trackBorder}%)`,
          }}
        >
          {/* Knob */}
          <div
            className="absolute h-9 w-9 rounded-full"
            style={{
              backgroundColor: `hsl(0,0%,${knobBg}%)`,
              top: "50%",
              transform: "translateY(-50%)",
              right: `${lerp(3, 57, switchT)}%`,
            }}
          />
          {/* Labels inside track */}
          <span
            className="absolute left-2.5 text-[10px] font-bold"
            style={{ color: `hsl(0,0%,${lerp(50, 70, switchT)}%)`, opacity: 1 - switchT }}
          >
            OFF
          </span>
          <span
            className="absolute right-2.5 text-[10px] font-bold"
            style={{ color: `hsl(0,0%,${lerp(30, 96, switchT)}%)`, opacity: switchT }}
          >
            ON
          </span>
        </div>

        {/* State label */}
        <p
          className="text-base font-bold"
          style={{ color: `hsl(0,0%,${isFlipped ? 90 : 20}%)` }}
        >
          {isFlipped ? "אינסולין מאוזן" : "אינסולין לא מאוזן"}
        </p>

        {/* Items */}
        <div className="flex w-full max-w-xs flex-col gap-2.5">
          {!isFlipped
            ? OFF_ITEMS.map((item, i) => (
                <div
                  key={`off-${i}`}
                  className="flex items-center justify-center gap-2"
                  style={{ opacity: getOffOpacity(i) }}
                >
                  <span className="text-sm" style={{ color: "hsl(0,0%,45%)" }}>{"✕"}</span>
                  <span className="text-sm font-medium" style={{ color: "hsl(0,0%,35%)" }}>
                    {item}
                  </span>
                </div>
              ))
            : ON_ITEMS.map((item, i) => (
                <div
                  key={`on-${i}`}
                  className="flex items-center justify-center gap-2"
                  style={{
                    opacity: getOnOpacity(i),
                    transform: `translateY(${getOnY(i)}px)`,
                  }}
                >
                  <span className="text-sm" style={{ color: "hsl(0,0%,80%)" }}>{"✓"}</span>
                  <span className="text-sm font-medium" style={{ color: "hsl(0,0%,92%)" }}>
                    {item}
                  </span>
                </div>
              ))}
        </div>

        {/* Bottom message */}
        <div className="h-8 flex items-center justify-center">
          {!isFlipped ? (
            <p
              className="text-center text-sm font-semibold"
              style={{ color: "hsl(0,0%,35%)", opacity: offMsg }}
            >
              {"הגוף אוגר שומן ומתכונן למצבי סטרס"}
            </p>
          ) : (
            <p
              className="text-center text-sm font-semibold"
              style={{ color: "hsl(0,0%,92%)", opacity: onMsg }}
            >
              {"הגוף שורף שומן כמו מכונה"}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
