/** RGB values – bright red default, others as accent options */
export const GRADIENT_COLOR_PRESETS = {
  red: { r: 220, g: 38, b: 38 },       // bright red (Tailwind red-600)
  rose: { r: 244, g: 63, b: 94 },      // bright rose (rose-500)
  amber: { r: 245, g: 158, b: 11 },   // bright amber (amber-500)
  orange: { r: 249, g: 115, b: 22 },  // bright orange (orange-500)
  violet: { r: 139, g: 92, b: 246 },  // bright violet (violet-500)
} as const

export type GradientColorPreset = keyof typeof GRADIENT_COLOR_PRESETS

export interface ScarcityGradientConfig {
  /** Width/height of all edge bands (px) – same for horizontal and vertical */
  width: number
  /** Opacity for all edges (0–1) */
  opacity: number
  /** Color preset key */
  colorPreset: GradientColorPreset
  /** Blur applied to the gradient layer (px), softens edges */
  blurPx: number
  /** Blur the content behind the edges – backdrop-filter (px) */
  backdropBlurPx: number
  /** % of band that is solid color before fading (0 = smooth gradient, 100 = sharp edge) */
  gradientEase: number
  /** Enable subtle blink/pulse animation on the vignette */
  blinkEnabled: boolean
  /** Blink cycle duration in milliseconds (one dim → bright → dim) */
  blinkDurationMs: number
}

export const DEFAULT_GRADIENT_CONFIG: ScarcityGradientConfig = {
  width: 0,
  opacity: 0.25,
  colorPreset: "red",
  blurPx: 0,
  backdropBlurPx: 0,
  gradientEase: 0,
  blinkEnabled: true,
  blinkDurationMs: 4000,
}

export function getGradientRgb(
  preset: GradientColorPreset
): { r: number; g: number; b: number } {
  return GRADIENT_COLOR_PRESETS[preset]
}
