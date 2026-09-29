'use client'

import { useEffect, useRef, useSyncExternalStore } from 'react'

type Variant = 'default' | 'link' | 'view' | 'text'

const QUERY = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const sizeFor = (v: Variant) => (v === 'view' ? 2.9 : v === 'link' ? 1.6 : 1)

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

/**
 * The Forge Eleven cursor: an ember core with a trailing ring.
 *
 * - Grows over links and buttons, and becomes a labelled ember disc over
 *   work (`data-cursor-label="View"`).
 * - Turns into a caret over text fields and squeezes while the page scrolls.
 * - Elements marked `data-magnetic` lean toward the pointer.
 *
 * Mouse and trackpad only, and never with reduced motion. The native
 * pointer is hidden only once this is running (`html.has-cursor`), so a
 * script failure can never leave the visitor without a pointer.
 */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null)
  const core = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLSpanElement>(null)
  const enabled = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  )

  useEffect(() => {
    if (!enabled) return
    const root = document.documentElement
    root.classList.add('has-cursor')

    const pos = { x: -200, y: -200, rx: -200, ry: -200 }
    const s = { scale: 1, target: 1, squeeze: 1, squeezeTarget: 1, opacity: 0, opacityTarget: 0 }
    let variant: Variant = 'default'
    let magnet: HTMLElement | null = null
    let scrollTimer: ReturnType<typeof setTimeout> | undefined
    let idleTimer: ReturnType<typeof setTimeout> | undefined
    let frame = 0

    const setVariant = (next: Variant, text = '') => {
      if (next === variant && label.current?.textContent === text) return
      variant = next
      ring.current?.setAttribute('data-variant', next)
      if (label.current) label.current.textContent = text
      s.target = sizeFor(next)
    }

    const releaseMagnet = () => {
      if (!magnet) return
      magnet.style.transform = ''
      magnet = null
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      pos.x = e.clientX
      pos.y = e.clientY
      s.opacityTarget = 1
      ring.current?.classList.remove('is-idle')
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => ring.current?.classList.add('is-idle'), 2400)

      const target = e.target as HTMLElement | null
      const labelled = target?.closest<HTMLElement>('[data-cursor-label]')
      const field = target?.closest('input:not([type=radio]):not([type=checkbox]), textarea')
      const interactive = target?.closest('a, button, label, summary, [role=button]')

      if (labelled) setVariant('view', labelled.dataset.cursorLabel)
      else if (field) setVariant('text')
      else if (interactive) setVariant('link')
      else setVariant('default')

      // Magnetic pull, strongest at the element's centre.
      const m = target?.closest<HTMLElement>('[data-magnetic]') ?? null
      if (m !== magnet) releaseMagnet()
      if (m) {
        magnet = m
        const r = m.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        m.style.transform = `translate3d(${dx * 0.22}px, ${dy * 0.32}px, 0)`
      }
    }

    const onLeave = () => {
      s.opacityTarget = 0
      releaseMagnet()
    }
    const onDown = () => (s.target = sizeFor(variant) * 0.82)
    const onUp = () => (s.target = sizeFor(variant))
    const onScroll = () => {
      s.squeezeTarget = 0.8
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => (s.squeezeTarget = 1), 140)
    }

    const render = () => {
      pos.rx = lerp(pos.rx, pos.x, 0.16)
      pos.ry = lerp(pos.ry, pos.y, 0.16)
      s.scale = lerp(s.scale, s.target, 0.16)
      s.squeeze = lerp(s.squeeze, s.squeezeTarget, 0.2)
      s.opacity = lerp(s.opacity, s.opacityTarget, 0.12)
      if (ring.current) {
        ring.current.style.transform = `translate3d(${pos.rx}px, ${pos.ry}px, 0) translate(-50%, -50%) scale(${s.scale}, ${s.scale * s.squeeze})`
        ring.current.style.opacity = s.opacity.toFixed(3)
      }
      if (core.current) {
        core.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`
        core.current.style.opacity = (variant === 'default' || variant === 'link' ? s.opacity : 0).toFixed(3)
      }
      frame = requestAnimationFrame(render)
    }
    frame = requestAnimationFrame(render)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('scroll', onScroll, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(scrollTimer)
      clearTimeout(idleTimer)
      releaseMagnet()
      root.classList.remove('has-cursor')
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('scroll', onScroll)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={ring} className="cursor-ring" data-variant="default" aria-hidden="true">
        <span ref={label} className="cursor-label" />
      </div>
      <div ref={core} className="cursor-core" aria-hidden="true" />
    </>
  )
}
