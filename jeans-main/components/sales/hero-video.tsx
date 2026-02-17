"use client"

import { Play } from "lucide-react"

type HeroVideoProps = {
  src?: string
  poster?: string
  title?: string
}

export function HeroVideo({ src, poster, title = "הסוד של 21 הימים" }: HeroVideoProps) {
  if (src) {
    return (
      <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-md border border-border bg-muted">
        <video
          className="aspect-video w-full object-cover"
          src={src}
          poster={poster}
          controls
          preload="metadata"
          title={title}
        />
      </div>
    )
  }

  return (
    <div
      className="relative mx-auto flex aspect-video w-full max-w-xl items-center justify-center overflow-hidden rounded-md border border-border bg-muted"
      aria-label={title}
    >
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-current">
          <Play className="h-6 w-6 fill-current" />
        </div>
        <span className="text-sm font-medium">{title}</span>
        <span className="text-xs">{"[וידאו – יוטען בקרוב]"}</span>
      </div>
    </div>
  )
}
