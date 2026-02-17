const STORAGE_KEY = "typing-duration-sec"
const DEFAULT_DURATION_SEC = 90
const MIN = 30
const MAX = 180

function fromStorage(): number {
  if (typeof window === "undefined") return DEFAULT_DURATION_SEC
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v == null) return DEFAULT_DURATION_SEC
    const n = Number(v)
    return Number.isFinite(n) && n >= MIN && n <= MAX ? n : DEFAULT_DURATION_SEC
  } catch {
    return DEFAULT_DURATION_SEC
  }
}

let current = typeof window !== "undefined" ? fromStorage() : DEFAULT_DURATION_SEC

export function getTypingDurationSec(): number {
  if (typeof window !== "undefined") current = fromStorage()
  return current
}

export function setTypingDurationSec(sec: number): void {
  const clamped = Math.max(MIN, Math.min(MAX, Math.round(sec)))
  current = clamped
  try {
    localStorage.setItem(STORAGE_KEY, String(clamped))
  } catch {
    // ignore
  }
}

export const typingDurationMin = MIN
export const typingDurationMax = MAX
export const typingDurationDefault = DEFAULT_DURATION_SEC
