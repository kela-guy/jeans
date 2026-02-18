/**
 * Ordered list of testimonial image paths and alt text.
 * Copy your testimonial images into public/testimonials/ with these filenames.
 * First 6 are used in the block under HowItWorksSection; the rest are spread across other sections.
 */
export const TESTIMONIALS = [
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/Meytal-Barniv.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/Vered-Aviv.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/אנה.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/דגנית-לאופר-2.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/lost-10kg.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/Maya-Keinan.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/Osnat-keren.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/אושרת-בוזגלו-1.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/אירה.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/גלה-1.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/דגנית-לאופר-1.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/יפעת.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/מיטל-לסרי.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/מירב-אהרונוב-1.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/מרים-גולדשטיין.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/ניצן-ישי.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/רחלי-חכמון.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/רישא-נפתלי.jpg", alt: "ביקורת לקוחה" },
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/עמוס-דמרי.jpg", alt: "ביקורת לקוחה" },
  // Only 19 URLs were provided; reuse the last one for slot 20 to keep layout/index mapping intact.
  { src: "https://www.stayyoung.live/wp-content/uploads/2026/02/עמוס-דמרי.jpg", alt: "ביקורת לקוחה" },
] as const

/** First 6 testimonials for the block under HowItWorksSection */
export const TESTIMONIALS_BLOCK = TESTIMONIALS.slice(0, 6)

/** Index allocation for spread: Hero(2), Problem(1), Solution(2), PainAgitation(1), Enemy(1), Science(1), Offer(2), Closing21Days(1), Pricing(1), Objection(1), About(1) */
export const TESTIMONIAL_INDEX = {
  hero: [6, 7],
  problem: 8,
  solution: [9, 10],
  painAgitation: 11,
  enemy: 12,
  science: 13,
  offer: [14, 15],
  closing21Days: 16,
  pricing: 17,
  objection: 18,
  about: 19,
} as const
