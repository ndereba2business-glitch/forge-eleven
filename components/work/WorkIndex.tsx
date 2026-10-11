'use client'

import { useRef, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import type { Category, StatusTone } from '@/lib/projects'
import StatusTag from '@/components/work/StatusTag'
import Arrow from '@/components/ui/Arrow'

gsap.registerPlugin(useGSAP)

export interface IndexItem {
  slug: string
  /** Position in the full list, e.g. "03"; stays the same when filtered. */
  number: string
  name: string
  kind: string
  credit: string
  categories: Category[]
  status: { label: string; tone: StatusTone }
  image: StaticImageData
}

/**
 * The project list with category filters. With a mouse, a preview of the
 * hovered project follows the cursor; on touch screens each row shows its
 * own thumbnail instead.
 */
export default function WorkIndex({ items, categories }: { items: IndexItem[]; categories: Category[] }) {
  const root = useRef<HTMLDivElement>(null)
  const preview = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = useState<Category | 'All'>('All')
  const [active, setActive] = useState<string | null>(null)

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

  const shown = filter === 'All' ? items : items.filter((i) => i.categories.includes(filter))
  const count = (c: Category) => items.filter((i) => i.categories.includes(c)).length

  return (
    <div ref={root} className="relative">
      <div role="group" aria-label="Filter projects by type" className="flex flex-wrap gap-2 pb-8">
        {(['All', ...categories] as const).map((c) => {
          const selected = filter === c
          return (
            <button
              key={c}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setFilter(c)
                setActive(null)
              }}
              className={`inline-flex min-h-11 items-center gap-2 border px-4 text-sm transition-colors duration-300 ${
                selected ? 'border-bone bg-bone text-ink' : 'border-line-strong text-mute hover:border-bone hover:text-bone'
              }`}
            >
              {c}
              <span className={`t-meta ${selected ? 'text-ink/70' : 'text-faint'}`}>{c === 'All' ? items.length : count(c)}</span>
            </button>
          )
        })}
      </div>

      <p className="sr-only" role="status">
        Showing {shown.length} of {items.length} projects
      </p>

      <ol className="border-b border-line" onPointerLeave={() => setActive(null)}>
        {shown.map((item, i) => (
          <li key={item.slug} className="hero-fade" style={{ '--delay': `${i * 60}ms` } as React.CSSProperties}>
            <Link
              href={`/work/${item.slug}`}
              data-cursor-label="Open"
              onPointerEnter={() => setActive(item.slug)}
              onFocus={() => setActive(null)}
              className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-3 gap-y-4 border-t border-line py-8 md:grid-cols-12 md:gap-x-6 md:py-10"
            >
              <span className="t-meta text-faint md:col-span-1">{item.number}</span>

              <div className="relative col-span-3 col-start-1 row-start-2 aspect-[16/9] overflow-clip bg-ink-2 outline outline-1 -outline-offset-1 outline-line [@media(hover:hover)_and_(pointer:fine)]:hidden">
                <Image src={item.image} alt="" fill sizes="100vw" placeholder="blur" className="object-cover object-top" />
              </div>

              <span className="t-h3 transition-transform duration-700 ease-(--ease-out-expo) group-hover:translate-x-2 md:col-span-5">
                {item.name}
              </span>
              <span className="hidden text-sm text-mute md:col-span-2 md:block">{item.kind}</span>
              <span className="hidden md:col-span-2 md:block">
                <StatusTag {...item.status} />
              </span>
              <span className="flex items-center justify-end gap-4 text-sm text-mute md:col-span-2">
                <span className="hidden md:inline">{item.credit}</span>
                <Arrow className="text-bone transition-transform duration-500 group-hover:translate-x-1 group-hover:text-ember" />
              </span>
              <span className="col-span-3 col-start-1 row-start-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-mute md:hidden">
                <span>{item.kind}</span>
                <StatusTag {...item.status} />
                <span>{item.credit}</span>
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
            {items.map((item) => (
              <Image
                key={item.slug}
                src={item.image}
                alt=""
                fill
                sizes="30rem"
                className={`object-cover object-top transition-opacity duration-500 ${active === item.slug ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
