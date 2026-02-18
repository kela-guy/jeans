import { TestimonialImage } from "./testimonial-image"
import { TESTIMONIALS_BLOCK } from "@/lib/testimonials"

export function TestimonialBlock() {
  return (
    <section className="py-10">
      <div className="flex flex-col gap-6">
        {TESTIMONIALS_BLOCK.map((t, i) => (
          <TestimonialImage key={i} src={t.src} alt={t.alt} />
        ))}
      </div>
    </section>
  )
}
