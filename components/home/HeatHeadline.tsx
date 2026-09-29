'use client'

import { useEffect, useRef } from 'react'
import Lines from '@/components/motion/Lines'

/**
 * The hero headline, with a layer of ember "heat" on top. It sweeps across
 * once on load (pure CSS), then follows a mouse; the glow fades as the
 * pointer moves away. The real text underneath is untouched, and the heat
 * layer is hidden from assistive tech and for reduced motion.
 */
export default function HeatHeadline({ lines }: { lines: React.ReactNode[] }) {
  const heading = useRef<HTMLHeadingElement>(null)
  const heat = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const h = heading.current
    const layer = heat.current
    if (!h || !layer) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return

    const target = { x: 0, y: 0, r: 0 }
    const now = { x: 0, y: 0, r: 0 }
    let active = false
    let frame = 0

    const onMove = (e: PointerEvent) => {
      const b = h.getBoundingClientRect()
      target.x = e.clientX - b.left
      target.y = e.clientY - b.top
      // Full heat over the headline, cooling off within ~240px of it.
      const dx = Math.max(b.left - e.clientX, 0, e.clientX - b.right)
      const dy = Math.max(b.top - e.clientY, 0, e.clientY - b.bottom)
      const reach = Math.max(0, 1 - Math.hypot(dx, dy) / 240)
      target.r = reach * Math.min(300, Math.max(170, b.width * 0.2))
      if (!active) {
        active = true
        layer.classList.remove('heat-sweep')
        now.x = target.x
        now.y = target.y
        frame = requestAnimationFrame(tick)
      }
    }

    const tick = () => {
      now.x += (target.x - now.x) * 0.14
      now.y += (target.y - now.y) * 0.14
      now.r += (target.r - now.r) * 0.1
      layer.style.setProperty('--hx', `${now.x.toFixed(1)}px`)
      layer.style.setProperty('--hy', `${now.y.toFixed(1)}px`)
      layer.style.setProperty('--hr', `${now.r.toFixed(1)}px`)
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <h1 ref={heading} className="t-display relative mt-8 max-w-[12ch] sm:max-w-none">
      <span className="sr-only">Forge Eleven. </span>
      <Lines lines={lines} hero />
      <span ref={heat} aria-hidden="true" className="heat heat-sweep">
        <Lines lines={lines} hero />
      </span>
    </h1>
  )
}
