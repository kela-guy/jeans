import { getTypingSoundConfig } from "./typing-sound-config"

let ctx: AudioContext | null = null
const bufferCache = new Map<string, AudioBuffer>()
const loadPromises = new Map<string, Promise<AudioBuffer>>()

function getContext(): AudioContext {
  if (!ctx) ctx = new AudioContext()
  return ctx
}

function playBuffer(c: AudioContext, buffer: AudioBuffer, gainValue: number, playbackRate: number): void {
  const now = c.currentTime
  const source = c.createBufferSource()
  source.buffer = buffer
  source.playbackRate.value = playbackRate
  const gain = c.createGain()
  gain.gain.setValueAtTime(gainValue, now)
  gain.connect(c.destination)
  source.connect(gain)
  const duration = buffer.duration / playbackRate
  source.start(now, 0, buffer.duration)
  source.stop(now + duration)
}

async function loadSoundFile(url: string): Promise<AudioBuffer> {
  const c = getContext()
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to load ${url}`)
  const arrayBuffer = await res.arrayBuffer()
  return c.decodeAudioData(arrayBuffer)
}

function getOrLoadBuffer(url: string): Promise<AudioBuffer> {
  const cached = bufferCache.get(url)
  if (cached) return Promise.resolve(cached)
  let promise = loadPromises.get(url)
  if (!promise) {
    promise = loadSoundFile(url).then((buffer) => {
      bufferCache.set(url, buffer)
      loadPromises.delete(url)
      return buffer
    })
    loadPromises.set(url, promise)
  }
  return promise
}

/**
 * Mechanical keyboard tap. Uses custom file if config.soundUrl is set, else synthesized.
 * Resumes AudioContext if suspended (browsers require user gesture before sound).
 * Creates a new BufferSource each time so the sound can repeat for every word.
 */
export function playTypingTap(): void {
  try {
    const cfg = getTypingSoundConfig()
    const c = getContext()

    if (cfg.soundUrl && cfg.soundUrl.trim() !== "") {
      const url = cfg.soundUrl.trim()
      const rate = Math.max(0.25, Math.min(4, cfg.playbackRate))
      const cached = bufferCache.get(url)
      if (cached) {
        if (c.state === "suspended") c.resume().then(() => playBuffer(c, cached, cfg.soundGain, rate))
        else playBuffer(c, cached, cfg.soundGain, rate)
        return
      }
      getOrLoadBuffer(url).then((buffer) => {
        if (c.state === "suspended") c.resume().then(() => playBuffer(c, buffer, cfg.soundGain, rate))
        else playBuffer(c, buffer, cfg.soundGain, rate)
      }).catch(() => {})
      return
    }

    // Synthesized (scale durations by 1/playbackRate for speed)
    const rate = Math.max(0.25, Math.min(4, cfg.playbackRate))
    const clickDur = cfg.clickDuration / rate
    const thudDur = cfg.thudDuration / rate

    const now = c.currentTime
    const sampleRate = c.sampleRate
    const clickSamples = Math.floor(clickDur * sampleRate)

    const buffer = c.createBuffer(1, clickSamples, sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < clickSamples; i++) {
      const t = i / clickSamples
      data[i] = (Math.random() * 2 - 1) * Math.exp(-t * cfg.clickDecay)
    }
    const noise = c.createBufferSource()
    noise.buffer = buffer

    const clickFilter = c.createBiquadFilter()
    clickFilter.type = "bandpass"
    clickFilter.frequency.value = cfg.clickFilterFreq
    clickFilter.Q.value = cfg.clickFilterQ

    const clickGain = c.createGain()
    clickGain.gain.setValueAtTime(cfg.clickGain, now)
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + clickDur)

    noise.connect(clickFilter)
    clickFilter.connect(clickGain)
    clickGain.connect(c.destination)
    noise.start(now)
    noise.stop(now + clickDur)

    const thudGain = c.createGain()
    thudGain.gain.setValueAtTime(cfg.thudGain, now)
    thudGain.gain.exponentialRampToValueAtTime(0.001, now + thudDur)
    thudGain.connect(c.destination)

    const thud = c.createOscillator()
    thud.type = "sine"
    thud.frequency.setValueAtTime(cfg.thudFreqStart, now)
    thud.frequency.exponentialRampToValueAtTime(
      Math.max(1, cfg.thudFreqEnd),
      now + thudDur * 0.5
    )
    thud.connect(thudGain)
    thud.start(now)
    thud.stop(now + thudDur)
  } catch {
    // Ignore if AudioContext fails (e.g. autoplay policy)
  }
}
