"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

const OFF_SYMPTOMS = [
  "אגירת שומן",
  "עייפות כרונית",
  "דחף למתוק",
  "מטבוליזם איטי",
  "שינה גרועה",
]

const ON_BENEFITS = [
  "שריפת שומן",
  "אנרגיה גבוהה",
  "אפס דחף למתוק",
  "מטבוליזם מהיר",
  "שינה איכותית",
]

export function SwitchIllustration() {
  const [isOn, setIsOn] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true)
          // Small delay so user sees the OFF state first
          setTimeout(() => setIsOn(true), 800)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasTriggered])

  return (
    <div
      ref={containerRef}
      className="relative my-8 overflow-hidden rounded-lg border border-border"
    >
      {/* Background transition */}
      <div
        className="absolute inset-0 transition-colors duration-1000 ease-in-out"
        style={{
          backgroundColor: isOn
            ? "hsl(0, 0%, 5%)"
            : "hsl(0, 0%, 95%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-8 px-6 py-12 md:py-16">
        {/* Title label */}
        <p
          className="text-center text-sm font-medium tracking-wider uppercase transition-colors duration-700"
          style={{ color: isOn ? "hsl(0,0%,50%)" : "hsl(0,0%,50%)" }}
        >
          {"מתג שריפת השומן"}
        </p>

        {/* The Switch */}
        <div className="flex flex-col items-center gap-4">
          {/* Switch track */}
          <div
            className="relative flex h-20 w-40 cursor-default items-center rounded-full border-2 transition-all duration-700 ease-in-out md:h-24 md:w-48"
            style={{
              backgroundColor: isOn
                ? "hsl(0, 0%, 100%)"
                : "hsl(0, 0%, 75%)",
              borderColor: isOn
                ? "hsl(0, 0%, 100%)"
                : "hsl(0, 0%, 60%)",
            }}
          >
            {/* Switch knob */}
            <div
              className="absolute h-16 w-16 rounded-full shadow-lg transition-all duration-700 ease-in-out md:h-20 md:w-20"
              style={{
                backgroundColor: isOn
                  ? "hsl(0, 0%, 5%)"
                  : "hsl(0, 0%, 40%)",
                // RTL: OFF = right side, ON = left side
                right: isOn ? "auto" : "2px",
                left: isOn ? "2px" : "auto",
              }}
            />
            {/* ON / OFF labels inside track */}
            <span
              className="absolute text-sm font-bold transition-opacity duration-500 md:text-base"
              style={{
                left: "16px",
                opacity: isOn ? 0 : 1,
                color: "hsl(0,0%,30%)",
              }}
            >
              OFF
            </span>
            <span
              className="absolute text-sm font-bold transition-opacity duration-500 md:text-base"
              style={{
                right: "16px",
                opacity: isOn ? 1 : 0,
                color: "hsl(0,0%,5%)",
              }}
            >
              ON
            </span>
          </div>

          {/* State label */}
          <div className="h-8">
            <p
              className="text-xl font-bold transition-all duration-700 md:text-2xl"
              style={{
                color: isOn
                  ? "hsl(0, 0%, 100%)"
                  : "hsl(0, 0%, 20%)",
              }}
            >
              {isOn ? "אינסולין מאוזן" : "אינסולין לא מאוזן"}
            </p>
          </div>
        </div>

        {/* Comparison columns */}
        <div className="flex w-full max-w-md flex-col gap-6">
          {/* Items */}
          {(isOn ? ON_BENEFITS : OFF_SYMPTOMS).map((item, i) => (
            <div
              key={`${isOn}-${i}`}
              className="flex items-center justify-center gap-3"
              style={{
                animation: `fadeSlideIn 0.5s ease-out ${i * 0.12}s both`,
              }}
            >
              {isOn ? (
                <Check
                  className="h-5 w-5 shrink-0"
                  style={{ color: "hsl(0, 0%, 100%)" }}
                />
              ) : (
                <span
                  className="text-lg shrink-0"
                  style={{ color: "hsl(0, 0%, 40%)" }}
                  aria-hidden="true"
                >
                  {"x"}
                </span>
              )}
              <span
                className="text-lg font-medium transition-colors duration-700 md:text-xl"
                style={{
                  color: isOn
                    ? "hsl(0, 0%, 100%)"
                    : "hsl(0, 0%, 30%)",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-4 h-12">
          <p
            className="text-center text-lg font-bold transition-all duration-700 md:text-xl"
            style={{
              color: isOn
                ? "hsl(0, 0%, 100%)"
                : "hsl(0, 0%, 30%)",
              opacity: hasTriggered ? 1 : 0,
            }}
          >
            {isOn
              ? "הגוף שורף שומן כמו מכונה"
              : "הגוף אוגר שומן ומתכונן למצבי סטרס"}
          </p>
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
