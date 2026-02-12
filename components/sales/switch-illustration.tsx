"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Check, X } from "lucide-react"

const OFF_ITEMS = [
  "אגירת שומן",
  "עייפות כרונית",
  "דחף למתוק",
  "מטבוליזם איטי",
  "שינה גרועה",
]

const ON_ITEMS = [
  "שריפת שומן",
  "אנרגיה גבוהה",
  "אפס דחף למתוק",
  "מטבוליזם מהיר",
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
  const [progress, setProgress] = useState(0) // 0 = fully OFF, 1 = fully ON

  const handleScroll = useCallback(() => {
    const el = containerRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const windowH = window.innerHeight

    // Animation starts when element top hits bottom of viewport
    // Animation ends when element bottom hits top of viewport
    // This gives a full scroll range equal to (element height + viewport height)
    const totalRange = rect.height + windowH
    const scrolled = windowH - rect.top

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

  // Derive all visual values from progress
  // Phase 1 (0 - 0.35): OFF state visible, items appear
  // Phase 2 (0.35 - 0.55): The switch flips, bg inverts
  // Phase 3 (0.55 - 1): ON state items cascade in

  const switchProgress = clamp((progress - 0.35) / 0.2, 0, 1) // 0-1 over the flip range
  const isFlipped = progress > 0.45

  // Background: light -> dark
  const bgLightness = lerp(95, 5, switchProgress)

  // Knob position (0 = right/OFF in RTL, 1 = left/ON in RTL)
  const knobOffset = switchProgress * 100 // percentage for translateX

  // Track color
  const trackLightness = lerp(75, 100, switchProgress)
  const trackBorderLightness = lerp(60, 100, switchProgress)
  const knobLightness = lerp(40, 5, switchProgress)

  // Text colors
  const labelColor = `hsl(0, 0%, 50%)`
  const stateColor = `hsl(0, 0%, ${isFlipped ? lerp(50, 100, clamp((progress - 0.45) / 0.15, 0, 1)) : lerp(50, 20, clamp(progress / 0.35, 0, 1))}%)`

  // OFF items visibility (fade in from 0.05 to 0.3)
  const offItemsVisible = progress < 0.5
  const getOffItemOpacity = (i: number) => {
    const itemStart = 0.05 + i * 0.05
    const itemEnd = itemStart + 0.08
    if (progress < itemStart) return 0
    if (progress > 0.5) return clamp(1 - (progress - 0.5) / 0.1, 0, 1)
    return clamp((progress - itemStart) / (itemEnd - itemStart), 0, 1)
  }

  // ON items visibility (fade in from 0.55 to 0.9)
  const getOnItemOpacity = (i: number) => {
    const itemStart = 0.55 + i * 0.06
    const itemEnd = itemStart + 0.1
    if (progress < itemStart) return 0
    return clamp((progress - itemStart) / (itemEnd - itemStart), 0, 1)
  }

  const getOnItemTranslate = (i: number) => {
    const itemStart = 0.55 + i * 0.06
    const itemEnd = itemStart + 0.1
    const t = clamp((progress - itemStart) / (itemEnd - itemStart), 0, 1)
    return lerp(12, 0, t)
  }

  // Bottom message
  const offMsgOpacity = clamp((progress - 0.15) / 0.15, 0, 1) * (progress < 0.4 ? 1 : clamp(1 - (progress - 0.4) / 0.1, 0, 1))
  const onMsgOpacity = clamp((progress - 0.75) / 0.15, 0, 1)

  // ON/OFF label in track
  const offLabelOpacity = 1 - switchProgress
  const onLabelOpacity = switchProgress

  return (
    <div
      ref={containerRef}
      className="relative my-8 overflow-hidden rounded-lg border border-border"
      style={{ minHeight: "520px" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `hsl(0, 0%, ${bgLightness}%)`,
          transition: "none",
        }}
      />

      <div className="relative flex flex-col items-center gap-8 px-6 py-12 md:py-16">
        {/* Title label */}
        <p
          className="text-center text-sm font-medium tracking-wider uppercase"
          style={{ color: labelColor }}
        >
          {"מתג שריפת השומן"}
        </p>

        {/* The Switch */}
        <div className="flex flex-col items-center gap-4">
          {/* Switch track */}
          <div
            className="relative flex h-20 w-40 items-center rounded-full border-2 md:h-24 md:w-48"
            style={{
              backgroundColor: `hsl(0, 0%, ${trackLightness}%)`,
              borderColor: `hsl(0, 0%, ${trackBorderLightness}%)`,
            }}
          >
            {/* Switch knob - RTL: starts on the right (OFF), moves left (ON) */}
            <div
              className="absolute h-16 w-16 rounded-full shadow-lg md:h-20 md:w-20"
              style={{
                backgroundColor: `hsl(0, 0%, ${knobLightness}%)`,
                top: "50%",
                transform: `translateY(-50%)`,
                // In RTL, right:2px is the starting OFF position
                // We transition to left:2px for ON
                right: `${lerp(2, -1, switchProgress)}px`,
                left: switchProgress > 0.5 ? `2px` : "auto",
                transition: "none",
              }}
            />

            {/* OFF label */}
            <span
              className="absolute text-sm font-bold md:text-base"
              style={{
                left: "16px",
                opacity: offLabelOpacity,
                color: "hsl(0,0%,30%)",
              }}
            >
              OFF
            </span>

            {/* ON label */}
            <span
              className="absolute text-sm font-bold md:text-base"
              style={{
                right: "16px",
                opacity: onLabelOpacity,
                color: "hsl(0,0%,5%)",
              }}
            >
              ON
            </span>
          </div>

          {/* State label */}
          <div className="h-8 flex items-center justify-center">
            <p
              className="text-xl font-bold md:text-2xl"
              style={{ color: stateColor }}
            >
              {isFlipped ? "אינסולין מאוזן" : "אינסולין לא מאוזן"}
            </p>
          </div>
        </div>

        {/* Items list */}
        <div className="flex w-full max-w-md flex-col gap-5">
          {!isFlipped
            ? OFF_ITEMS.map((item, i) => (
                <div
                  key={`off-${i}`}
                  className="flex items-center justify-center gap-3"
                  style={{
                    opacity: getOffItemOpacity(i),
                    transform: `translateY(${lerp(12, 0, getOffItemOpacity(i))}px)`,
                  }}
                >
                  <X
                    className="h-5 w-5 shrink-0"
                    style={{ color: "hsl(0, 0%, 40%)" }}
                    strokeWidth={2.5}
                  />
                  <span
                    className="text-lg font-medium md:text-xl"
                    style={{ color: "hsl(0, 0%, 30%)" }}
                  >
                    {item}
                  </span>
                </div>
              ))
            : ON_ITEMS.map((item, i) => (
                <div
                  key={`on-${i}`}
                  className="flex items-center justify-center gap-3"
                  style={{
                    opacity: getOnItemOpacity(i),
                    transform: `translateY(${getOnItemTranslate(i)}px)`,
                  }}
                >
                  <Check
                    className="h-5 w-5 shrink-0"
                    style={{ color: "hsl(0, 0%, 100%)" }}
                    strokeWidth={2.5}
                  />
                  <span
                    className="text-lg font-medium md:text-xl"
                    style={{ color: "hsl(0, 0%, 100%)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
        </div>

        {/* Bottom message */}
        <div className="mt-4 h-12 flex items-center justify-center">
          {!isFlipped ? (
            <p
              className="text-center text-lg font-bold md:text-xl"
              style={{
                color: "hsl(0, 0%, 30%)",
                opacity: offMsgOpacity,
              }}
            >
              {"הגוף אוגר שומן ומתכונן למצבי סטרס"}
            </p>
          ) : (
            <p
              className="text-center text-lg font-bold md:text-xl"
              style={{
                color: "hsl(0, 0%, 100%)",
                opacity: onMsgOpacity,
              }}
            >
              {"הגוף שורף שומן כמו מכונה"}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
