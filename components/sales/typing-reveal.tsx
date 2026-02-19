"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { playTypingTap } from "@/lib/typing-sound"

function getDelayForChar(char: string): number {
  if (!char) return 28 + Math.random() * 20
  const pauseAfter = ".!?…"
  const shortPause = ",;:"
  const space = " \n"
  if (pauseAfter.includes(char)) return 120 + Math.random() * 80
  if (shortPause.includes(char)) return 70 + Math.random() * 40
  if (space.includes(char)) return 36 + Math.random() * 24
  return 22 + Math.random() * 28
}

/** [start, end] character indices (end exclusive). Exported for static render (e.g. scroll phase). */
export function getHighlightRanges(text: string, phrases: string[]): [number, number][] {
  const ranges: [number, number][] = []
  for (const phrase of phrases) {
    let idx = 0
    while (true) {
      const start = text.indexOf(phrase, idx)
      if (start === -1) break
      ranges.push([start, start + phrase.length])
      idx = start + 1
    }
  }
  ranges.sort((a, b) => a[0] - b[0])
  const merged: [number, number][] = []
  for (const [s, e] of ranges) {
    if (merged.length && s <= merged[merged.length - 1][1]) {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], e)
    } else {
      merged.push([s, e])
    }
  }
  return merged
}

/** Render text with .marker spans for given ranges. Exported for static render (e.g. scroll phase). */
export function renderWithHighlights(visible: string, ranges: [number, number][]): React.ReactNode {
  if (ranges.length === 0) return visible
  const len = visible.length
  const out: React.ReactNode[] = []
  let lastEnd = 0
  for (const [start, end] of ranges) {
    if (end <= 0 || start >= len) continue
    const segStart = Math.max(0, start)
    const segEnd = Math.min(len, end)
    if (segStart > lastEnd) {
      out.push(visible.slice(lastEnd, segStart))
    }
    if (segEnd > segStart) {
      out.push(<span key={`${segStart}-${segEnd}`} className="marker">{visible.slice(segStart, segEnd)}</span>)
    }
    lastEnd = segEnd
  }
  if (lastEnd < len) out.push(visible.slice(lastEnd))
  return out.length === 1 ? out[0] : <>{out}</>
}

/** Character indices at which to play typing sound (e.g. 2 per word: start + middle) */
function getSoundIndices(text: string, soundsPerWord: number): Set<number> {
  const set = new Set<number>()
  if (soundsPerWord <= 0) return set
  let wordStart = -1
  for (let i = 0; i <= text.length; i++) {
    const isWordChar = i < text.length && !/[\s\n]/.test(text[i])
    if (isWordChar) {
      if (wordStart === -1) wordStart = i
    } else {
      if (wordStart !== -1) {
        const wordLen = i - wordStart
        set.add(wordStart)
        if (soundsPerWord > 1 && wordLen > 1) set.add(wordStart + Math.ceil(wordLen / 2))
        wordStart = -1
      }
    }
  }
  if (wordStart !== -1) {
    const wordLen = text.length - wordStart
    set.add(wordStart)
    if (soundsPerWord > 1 && wordLen > 1) set.add(wordStart + Math.ceil(wordLen / 2))
  }
  return set
}

type TypingRevealProps = {
  text: string
  className?: string
  as?: "p" | "div" | "span"
  showCursor?: boolean
  startTrigger: boolean
  onComplete?: () => void
  /** Scale factor for delay (e.g. to hit a total duration across multiple blocks) */
  delayScale?: number
  /** Phrases to highlight with .marker (substrings of text) */
  highlightPhrases?: string[]
  /** If set (e.g. 2), only play this many typing sounds per word (text still reveals char-by-char) */
  soundsPerWord?: number
}

export function TypingReveal({
  text,
  className = "",
  as: Tag = "p",
  showCursor = true,
  startTrigger,
  onComplete,
  delayScale = 1,
  highlightPhrases,
  soundsPerWord,
}: TypingRevealProps) {
  const [visibleLength, setVisibleLength] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  const soundIndices = useMemo(
    () => (soundsPerWord != null && soundsPerWord > 0 ? getSoundIndices(text, soundsPerWord) : null),
    [text, soundsPerWord]
  )

  const highlightRanges = useMemo(
    () => (highlightPhrases?.length ? getHighlightRanges(text, highlightPhrases) : []),
    [text, highlightPhrases]
  )

  useEffect(() => {
    if (startTrigger && !hasStarted) setHasStarted(true)
  }, [startTrigger, hasStarted])

  useEffect(() => {
    if (!hasStarted || !text || visibleLength >= text.length) {
      if (visibleLength >= text.length && text.length > 0) {
        setHasFinished(true)
        onCompleteRef.current?.()
      }
      return
    }

    const charToReveal = text[visibleLength]
    const delay = Math.round(getDelayForChar(charToReveal) * delayScale)

    const t = setTimeout(() => {
      if (soundIndices === null || soundIndices.has(visibleLength)) {
        playTypingTap()
      }
      setVisibleLength((n) => Math.min(n + 1, text.length))
    }, delay)

    return () => clearTimeout(t)
  }, [hasStarted, visibleLength, text, delayScale, soundIndices])

  const visible = text.slice(0, visibleLength)
  const content = highlightRanges.length > 0 ? renderWithHighlights(visible, highlightRanges) : visible

  return (
    <div>
      <Tag className={className}>
        {content}
        {showCursor && hasStarted && !hasFinished && (
          <span className="animate-pulse" aria-hidden>
            |
          </span>
        )}
      </Tag>
    </div>
  )
}
