/**
 * Mechanical keyboard typing sound config.
 * Set soundUrl to use your own key-tap file (e.g. /sounds/key-tap.wav).
 */
export interface TypingSoundConfig {
  /** If set, play this audio file instead of synthesized sound. e.g. "/sounds/key-tap.wav" */
  soundUrl: string | null
  /** Volume for file playback 0–1 (ignored when using synthesized) */
  soundGain: number
  /** Playback speed for typing tap (0.5 = half speed, 2 = double speed). Affects file and synthesized. */
  playbackRate: number
  /** Click noise duration in seconds (synthesized only) */
  clickDuration: number
  /** How fast the click noise decays (higher = sharper) (synthesized only) */
  clickDecay: number
  /** Bandpass center frequency for the click (Hz) (synthesized only) */
  clickFilterFreq: number
  /** Bandpass Q (synthesized only) */
  clickFilterQ: number
  /** Click volume 0–1 (synthesized only) */
  clickGain: number
  /** Thud start frequency (Hz) (synthesized only) */
  thudFreqStart: number
  /** Thud end frequency (Hz) (synthesized only) */
  thudFreqEnd: number
  /** Thud duration in seconds (synthesized only) */
  thudDuration: number
  /** Thud volume 0–1 (synthesized only) */
  thudGain: number
}

/** Original mechanical-style defaults (for "Reset to mechanical" in panel) */
export const mechanicalTypingSoundConfig: TypingSoundConfig = {
  soundUrl: null,
  soundGain: 0.3,
  playbackRate: 1,
  clickDuration: 0.012,
  clickDecay: 1,
  clickFilterFreq: 2050,
  clickFilterQ: 0.3,
  clickGain: 0.6,
  thudFreqStart: 40,
  thudFreqEnd: 120,
  thudDuration: 0.04,
  thudGain: 0.25,
}

/** Softer, MacBook-keyboard–like defaults (subtle tick, minimal thud) */
export const defaultTypingSoundConfig: TypingSoundConfig = {
  ...mechanicalTypingSoundConfig,
  soundUrl: null,
  playbackRate: 1,
  clickDuration: 0.008,
  clickDecay: 2.5,
  clickFilterFreq: 3200,
  clickFilterQ: 0.5,
  clickGain: 0.38,
  thudFreqStart: 60,
  thudFreqEnd: 180,
  thudDuration: 0.022,
  thudGain: 0.1,
}

const STORAGE_KEY = "typing-sound-config"

function loadFromStorage(): TypingSoundConfig | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<TypingSoundConfig>
    return { ...defaultTypingSoundConfig, ...parsed }
  } catch {
    return null
  }
}

function saveToStorage(cfg: TypingSoundConfig): void {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg))
  } catch {}
}

const current: TypingSoundConfig = { ...defaultTypingSoundConfig }
let storageLoaded = false

function maybeLoadFromStorage(): void {
  if (typeof window === "undefined" || storageLoaded) return
  storageLoaded = true
  const stored = loadFromStorage()
  if (stored) Object.assign(current, stored)
}

export function getTypingSoundConfig(): TypingSoundConfig {
  maybeLoadFromStorage()
  return current
}

export function setTypingSoundConfig(updates: Partial<TypingSoundConfig>): void {
  Object.assign(current, updates)
  saveToStorage(current)
}

export function resetTypingSoundConfig(): void {
  Object.assign(current, mechanicalTypingSoundConfig)
}
