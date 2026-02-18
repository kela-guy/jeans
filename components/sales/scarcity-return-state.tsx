"use client"

import { useEffect, useState } from "react"
import type { ScarcityGradientConfig } from "./scarcity-gradient-config"
import {
  DEFAULT_GRADIENT_CONFIG,
  getGradientRgb,
} from "./scarcity-gradient-config"

function ScarcityCountdown() {
  const [time, setTime] = useState({ minutes: 5, seconds: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          return { minutes: 0, seconds: 0 }
        }
        return { minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <div
      className="flex flex-col items-center gap-1 rounded-xl border border-red-500/30 bg-black/80 px-4 py-3 shadow-lg shadow-red-950/20 backdrop-blur-sm"
      dir="ltr"
    >
      <span className="text-[10px] font-medium uppercase tracking-wider text-red-400/90 text-center">
        הקופון:
      </span>
      <span className="font-mono text-xl font-bold tracking-widest text-white">
        CARE10
      </span>
      <span className="text-[10px] text-white/80 text-center">
        בתוקף עד
      </span>
      <span className="font-mono text-lg font-bold tabular-nums text-red-100">
        {pad(time.minutes)}:{pad(time.seconds)}
      </span>
    </div>
  )
}

/**
 * Inner-shadow vignette: one full-screen overlay with inset box-shadow
 * so the edges darken inward. Optional subtle blink via opacity animation.
 */
function innerShadowOverlayStyle(config: ScarcityGradientConfig): React.CSSProperties {
  const { r, g, b } = getGradientRgb(config.colorPreset)
  const color = `rgba(${r}, ${g}, ${b}, ${config.opacity})`
  const w = config.width
  const blur = Math.max(60, w * 2)
  const spread = Math.max(20, w * 0.8)

  return {
    position: "absolute",
    inset: 0,
    background: "transparent",
    boxShadow: `inset 0 0 ${blur}px ${spread}px ${color}`,
    ...(config.backdropBlurPx > 0 && {
      backdropFilter: `blur(${config.backdropBlurPx}px)`,
      WebkitBackdropFilter: `blur(${config.backdropBlurPx}px)`,
    }),
    ...(config.blinkEnabled && {
      animation: `vignette-blink ${config.blinkDurationMs}ms ease-in-out infinite`,
    }),
  }
}

export function ScarcityReturnState({
  active,
  gradientConfig = DEFAULT_GRADIENT_CONFIG,
}: {
  active: boolean
  gradientConfig?: ScarcityGradientConfig
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !active) return null

  const config = { ...DEFAULT_GRADIENT_CONFIG, ...gradientConfig }

  return (
    <>
      <style>{`
        @keyframes vignette-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
      <div
        className="fixed inset-0 z-40 pointer-events-none"
        aria-hidden
      >
        <div style={innerShadowOverlayStyle(config)} />
      </div>

      <div className="fixed top-20 left-1/2 z-50 -translate-x-1/2">
        <ScarcityCountdown />
      </div>
    </>
  )
}

export function useScarcityReturned() {
  const [returned, setReturned] = useState(false)

  useEffect(() => {
    const handle = () => setReturned(true)
    window.addEventListener("scarcity-returned", handle)
    return () => window.removeEventListener("scarcity-returned", handle)
  }, [])

  return { returned, setReturned }
}
