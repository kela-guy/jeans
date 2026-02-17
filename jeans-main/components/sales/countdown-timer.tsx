"use client"

import { useEffect, useState } from "react"

export function CountdownTimer() {
  const [time, setTime] = useState({ hours: 2, minutes: 47, seconds: 33 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          return { hours: 0, minutes: 0, seconds: 0 }
        }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <div className="rounded bg-foreground px-4 py-3 text-center">
      <p className="text-xs font-medium text-primary-foreground/70">
        {"המבצע נגמר בעוד"}
      </p>
      <div className="mt-1 flex items-center justify-center gap-1 font-mono text-2xl font-black tracking-wider text-primary-foreground md:text-3xl" dir="ltr">
        <span>{pad(time.hours)}</span>
        <span className="animate-pulse">:</span>
        <span>{pad(time.minutes)}</span>
        <span className="animate-pulse">:</span>
        <span>{pad(time.seconds)}</span>
      </div>
    </div>
  )
}
