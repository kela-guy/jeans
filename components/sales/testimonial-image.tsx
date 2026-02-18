import Image from "next/image"

type TestimonialImageProps = {
  src: string
  alt: string
  className?: string
}

export function TestimonialImage({ src, alt, className = "" }: TestimonialImageProps) {
  return (
    <div className={`w-full overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={512}
        height={368}
        className="w-full h-auto object-cover"
      />
    </div>
  )
}
