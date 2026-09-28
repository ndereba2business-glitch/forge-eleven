'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import type { StatusTone } from '@/lib/projects'
import type { StaticImageData } from 'next/image'
import StatusTag from '@/components/work/StatusTag'
import Arrow from '@/components/ui/Arrow'

gsap.registerPlugin(useGSAP)

export interface IndexItem {
  slug: string
  name: string
  kind: string
  year: string
  summary: string
  status: { label: string; tone: StatusTone }
  image: StaticImageData
  alt: string
}

/**
 * Project list. With a mouse, a preview of the hovered project follows the
 * cursor; on touch screens each row shows its own thumbnail instead.
 */
export default function WorkIndex({ items }: { items: IndexItem[] }) {
  const root = useRef<HTMLDivElement>(null)
  const preview = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)

  useGSAP(
    () => {
      const el = preview.current
      if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const x = gsap.quickTo(el, 'x', { duration: reduce ? 0 : 0.6, ease: 'power3' })
      const y = gsap.quickTo(el, 'y', { duration: reduce ? 0 : 0.6, ease: 'power3' })
      const move = (e: PointerEvent) => {
        x(e.clientX)
        y(e.clientY)
      }
      window.addEventListener('pointermove', move)
      return () => window.removeEventListener('pointermove', move)
    },
    { scope: root }
  )

  return (
    <div ref={root} className="relative" onPointerLeave={() => setActive(null)}>
      <ol className="border-b border-line">
        {items.map((item, i) => (
          <li key={item.slug} data-reveal style={{ '--delay': `${i * 70}ms` } as React.CSSProperties}>
            <Link
              href={`/work/${item.slug}`}
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(null)}
              className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-3 gap-y-4 border-t border-line py-8 transition-colors duration-500 md:grid-cols-12 md:gap-x-6 md:py-10"
            >
              <span className="t-meta text-faint md:col-span-1">{String(i + 1).padStart(2, '0')}</span>

              <div className="relative col-span-3 col-start-1 row-start-2 aspect-[16/9] overflow-clip bg-ink-2 outline outline-1 -outline-offset-1 outline-line [@media(hover:hover)_and_(pointer:fine)]:hidden">
                <Image src={item.image} alt="" fill sizes="100vw" placeholder="blur" className="object-cover object-top" />
              </div>

              <span className="t-h3 transition-[color,transform] duration-700 ease-(--ease-out-expo) group-hover:translate-x-2 group-hover:text-bone md:col-span-5">
                {item.name}
              </span>
              <span className="hidden text-sm text-mute md:col-span-2 md:block">{item.kind}</span>
              <span className="hidden md:col-span-2 md:block">
                <StatusTag {...item.status} className="normal-case tracking-normal" />
              </span>
              <span className="flex items-center justify-end gap-4 text-sm text-mute md:col-span-2">
                <span className="hidden md:inline">{item.year}</span>
                <Arrow className="text-bone transition-transform duration-500 group-hover:translate-x-1 group-hover:text-ember" />
              </span>
              <span className="col-span-3 col-start-1 row-start-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-mute md:hidden">
                <span>{item.kind}</span>
                <StatusTag {...item.status} className="normal-case tracking-normal" />
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <div
        ref={preview}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-30 hidden [@media(hover:hover)_and_(pointer:fine)]:block"
      >
        <div
          className={`relative -translate-x-1/2 -translate-y-1/2 transition-[opacity,scale] duration-500 ease-(--ease-out-expo) ${
            active === null ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          <div className="relative aspect-[16/10] w-[min(34vw,30rem)] overflow-clip bg-ink-2 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.9)] outline outline-1 -outline-offset-1 outline-line-strong">
            {items.map((item, i) => (
              <Image
                key={item.slug}
                src={item.image}
                alt=""
                fill
                sizes="30rem"
                className={`object-cover object-top transition-opacity duration-500 ${active === i ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
