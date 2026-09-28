import Image from 'next/image'
import type { Shot } from '@/lib/projects'

/** A screenshot in a hairline frame that unveils as it scrolls into view. */
export function Figure({
  shot,
  caption,
  sizes,
  priority = false,
  className = '',
}: {
  shot: Shot
  caption?: string
  sizes: string
  priority?: boolean
  className?: string
}) {
  return (
    <figure className={className}>
      <div data-reveal="clip" className="relative overflow-clip bg-ink-2 outline outline-1 -outline-offset-1 outline-line">
        <Image
          src={shot.image}
          alt={shot.alt}
          sizes={sizes}
          placeholder="blur"
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      {caption && <figcaption className="t-meta mt-4 max-w-[60ch] normal-case tracking-normal text-mute">{caption}</figcaption>}
    </figure>
  )
}

/** A mobile screenshot at phone proportions, with a rounded device edge. */
export function Phone({ shot, sizes = '(min-width: 768px) 22vw, 70vw' }: { shot: Shot; sizes?: string }) {
  return (
    <div
      data-reveal
      className="relative aspect-[9/16] w-full overflow-clip rounded-[1.75rem] bg-ink-3 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)] outline outline-1 -outline-offset-1 outline-line-strong"
    >
      <Image src={shot.image} alt={shot.alt} sizes={sizes} placeholder="blur" fill className="object-cover object-top" />
    </div>
  )
}
