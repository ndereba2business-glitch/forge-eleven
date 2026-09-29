'use client'

import { useRef, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Arrow from '@/components/ui/Arrow'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export interface ReelItem {
  slug: string
  name: string
  kind: string
  cover: StaticImageData
  coverAlt: string
  mobile: StaticImageData
  mobileAlt: string
}

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * The work, as a showreel. On larger screens with motion allowed, a framed
 * reel grows to fill the screen as you scroll, then wipes through each
 * project. Everywhere else it is a native, swipeable strip.
 */
export default function Reel({ items }: { items: ReelItem[] }) {
  const section = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        const slides = gsap.utils.toArray<HTMLElement>('[data-slide]')
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: { trigger: section.current, start: 'top top', end: 'bottom bottom', scrub: 0.6 },
        })

        tl.fromTo('[data-frame]', { scale: 0.58, borderRadius: 6 }, { scale: 1, borderRadius: 0, duration: 3, ease: 'power2.inOut' })
          .fromTo('[data-caption]', { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 1 }, 2)

        // The caption switches when a wipe is halfway across the screen.
        const switchAt: number[] = []
        slides.slice(1).forEach((slide) => {
          const img = slide.querySelector('[data-slide-img]')
          tl.fromTo(slide, { yPercent: 100 }, { yPercent: 0, duration: 2, ease: 'power2.inOut' }, '+=0.8')
          tl.fromTo(img, { yPercent: -100, scale: 1.15 }, { yPercent: 0, scale: 1, duration: 2, ease: 'power2.inOut' }, '<')
          switchAt.push(tl.duration() - 1)
        })
        tl.to({}, { duration: 1 })

        tl.eventCallback('onUpdate', () => {
          const t = tl.time()
          setActive(switchAt.filter((s) => t >= s).length)
        })
      })
    },
    { scope: section }
  )

  const current = items[active]

  return (
    <>
      {/* Scroll-driven reel: md+ with motion allowed */}
      <section
        ref={section}
        aria-label="Showreel"
        className="relative hidden md:motion-safe:block"
        style={{ height: `${120 + items.length * 70}vh` }}
      >
        <div className="sticky top-0 h-[100svh] overflow-clip">
          <div data-frame className="absolute inset-0 origin-center overflow-clip bg-ink-2 will-change-transform">
            {items.map((item, i) => (
              <div key={item.slug} data-slide className="absolute inset-0 overflow-clip" style={{ zIndex: i }}>
                <div data-slide-img className="absolute inset-0">
                  <Image
                    src={item.cover}
                    alt={item.coverAlt}
                    fill
                    sizes="100vw"
                    placeholder="blur"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ))}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-3/5 bg-gradient-to-t from-ink via-ink/75 to-transparent" />
          </div>

          <div data-caption className="container-x absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-8 pb-10">
            <div>
              <p className="t-meta text-mute">
                <span className="text-bone">{pad(active + 1)}</span> / {pad(items.length)} · {current.kind}
              </p>
              <p className="t-h2 mt-3">{current.name}</p>
            </div>
            <Link href={`/work/${current.slug}`} className="btn btn-primary shrink-0" data-magnetic>
              View case study <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Swipeable strip: phones, and anyone who prefers reduced motion */}
      <section aria-label="Showreel" className="md:motion-safe:hidden">
        <ul
          className="flex snap-x snap-mandatory scroll-px-(--gutter) gap-4 overflow-x-auto overscroll-x-contain px-(--gutter) pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          data-lenis-prevent-horizontal
        >
          {items.map((item, i) => (
            <li key={item.slug} className="w-[72vw] shrink-0 snap-start md:w-[46vw]">
              <Link href={`/work/${item.slug}`} className="group block">
                <div className="relative aspect-[9/16] overflow-clip rounded-2xl bg-ink-2 outline outline-1 -outline-offset-1 outline-line md:aspect-[16/9] md:rounded-none">
                  <Image src={item.mobile} alt={item.mobileAlt} fill sizes="72vw" placeholder="blur" className="object-cover object-top md:hidden" />
                  <Image src={item.cover} alt={item.coverAlt} fill sizes="46vw" placeholder="blur" className="hidden object-cover object-top md:block" />
                </div>
                <p className="t-meta mt-4 text-mute">
                  {pad(i + 1)} · {item.kind}
                </p>
                <p className="mt-1 text-lg font-medium tracking-[-0.015em]">{item.name}</p>
              </Link>
            </li>
          ))}
          <li className="w-px shrink-0" aria-hidden="true" />
        </ul>
      </section>
    </>
  )
}
