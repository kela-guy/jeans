"use client"

import { useState } from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  getTypingSoundConfig,
  setTypingSoundConfig,
  resetTypingSoundConfig,
  type TypingSoundConfig,
} from "@/lib/typing-sound-config"
import { playTypingTap } from "@/lib/typing-sound"
import { ChevronDown, ChevronUp, RotateCcw, Volume2, Copy } from "lucide-react"

/** Softer, MacBook-style defaults (subtle tick, minimal thud) */
const macbookLikeDefaults: Partial<TypingSoundConfig> = {
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

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format = (v) => String(v),
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  format?: (v: number) => string
}) {
  return (
    <div className="grid grid-cols-[1fr,120px] gap-2 items-center">
      <div className="space-y-1">
        <Label className="text-xs">{label}</Label>
        <Slider
          value={[value]}
          min={min}
          max={max}
          step={step}
          onValueChange={([v]) => onChange(v)}
          className="w-full"
        />
      </div>
      <span className="text-xs text-muted-foreground tabular-nums">{format(value)}</span>
    </div>
  )
}

export function TypingSoundConfigPanel() {
  const [config, setConfig] = useState<TypingSoundConfig>(() => getTypingSoundConfig())
  const [open, setOpen] = useState(false)

  const update = (updates: Partial<TypingSoundConfig>) => {
    setTypingSoundConfig(updates)
    setConfig(getTypingSoundConfig())
  }

  const resetToMacBook = () => {
    Object.entries(macbookLikeDefaults).forEach(([k, v]) => {
      setTypingSoundConfig({ [k]: v } as Partial<TypingSoundConfig>)
    })
    setConfig(getTypingSoundConfig())
  }

  const resetToMechanical = () => {
    resetTypingSoundConfig()
    setConfig(getTypingSoundConfig())
  }

  const copyForWordPress = () => {
    const c = getTypingSoundConfig()
    const block = [
      "  var TAP_CLICK_DURATION = " + c.clickDuration + ";",
      "  var TAP_CLICK_DECAY = " + c.clickDecay + ";",
      "  var TAP_CLICK_FILTER_FREQ = " + c.clickFilterFreq + ";",
      "  var TAP_CLICK_FILTER_Q = " + c.clickFilterQ + ";",
      "  var TAP_CLICK_GAIN = " + c.clickGain + ";",
      "  var TAP_THUD_FREQ_START = " + c.thudFreqStart + ";",
      "  var TAP_THUD_FREQ_END = " + c.thudFreqEnd + ";",
      "  var TAP_THUD_DURATION = " + c.thudDuration + ";",
      "  var TAP_THUD_GAIN = " + c.thudGain + ";",
      "  var TAP_PLAYBACK_RATE = " + c.playbackRate + ";",
    ].join("\n")
    void navigator.clipboard.writeText(block)
  }

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <Card className="border-dashed">
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 rounded-lg transition-colors"
          >
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Volume2 className="h-4 w-4" />
              Typing sound
            </CardTitle>
            {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0 pb-4 space-y-4">
            <p className="text-xs text-muted-foreground">
              Adjust the synthesized key tap. Softer values feel more like a MacBook keyboard.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <SliderRow
                label="Playback speed"
                value={config.playbackRate}
                min={0.5}
                max={2}
                step={0.05}
                onChange={(v) => update({ playbackRate: v })}
              />
              <SliderRow
                label="Click duration (s)"
                value={config.clickDuration}
                min={0.004}
                max={0.03}
                step={0.001}
                onChange={(v) => update({ clickDuration: v })}
                format={(v) => v.toFixed(3)}
              />
              <SliderRow
                label="Click decay"
                value={config.clickDecay}
                min={0.5}
                max={5}
                step={0.1}
                onChange={(v) => update({ clickDecay: v })}
              />
              <SliderRow
                label="Click filter freq (Hz)"
                value={config.clickFilterFreq}
                min={800}
                max={5000}
                step={50}
                onChange={(v) => update({ clickFilterFreq: v })}
              />
              <SliderRow
                label="Click filter Q"
                value={config.clickFilterQ}
                min={0.1}
                max={2}
                step={0.05}
                onChange={(v) => update({ clickFilterQ: v })}
              />
              <SliderRow
                label="Click gain"
                value={config.clickGain}
                min={0}
                max={1}
                step={0.05}
                onChange={(v) => update({ clickGain: v })}
              />
              <SliderRow
                label="Thud freq start (Hz)"
                value={config.thudFreqStart}
                min={20}
                max={150}
                step={5}
                onChange={(v) => update({ thudFreqStart: v })}
              />
              <SliderRow
                label="Thud freq end (Hz)"
                value={config.thudFreqEnd}
                min={50}
                max={250}
                step={5}
                onChange={(v) => update({ thudFreqEnd: v })}
              />
              <SliderRow
                label="Thud duration (s)"
                value={config.thudDuration}
                min={0.01}
                max={0.08}
                step={0.005}
                onChange={(v) => update({ thudDuration: v })}
                format={(v) => v.toFixed(3)}
              />
              <SliderRow
                label="Thud gain"
                value={config.thudGain}
                min={0}
                max={0.5}
                step={0.02}
                onChange={(v) => update({ thudGain: v })}
              />
            </div>

            <p className="text-xs text-muted-foreground">
              Your settings are saved in this browser. To use them in WordPress, click Copy for
              WordPress and replace the TAP_* block in wordpress-export/upsell-page-global.html.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button type="button" size="sm" variant="secondary" onClick={() => playTypingTap()}>
                <Volume2 className="h-3.5 w-3.5 mr-1.5" />
                Play test
              </Button>
              <Button type="button" size="sm" variant="outline" onClick={copyForWordPress}>
                <Copy className="h-3.5 w-3.5 mr-1.5" />
                Copy for WordPress
              </Button>
              <Button type="button" size="sm" variant="outline" onClick={resetToMacBook}>
                <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
                MacBook-like
              </Button>
              <Button type="button" size="sm" variant="ghost" onClick={resetToMechanical}>
                Mechanical (original)
              </Button>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
}
