'use client'

import { useEffect, useRef } from 'react'
import Lines from '@/components/motion/Lines'

/**
 * The hero headline, with a spot of ember "heat" that sweeps across once on
 * load (pure CSS), then follows a mouse and fades as the pointer moves away.
 *
 * The heat is a circular window that slides over a second, ember copy of
 * the text, while that copy slides the opposite way so it stays registered
 * with the real headline. Only transforms and opacity change, so the whole
 * effect runs on the compositor. The real text underneath is untouched, and
 * the heat layer is hidden from assistive tech and for reduced motion.
 */
export default function HeatHeadline({ lines }: { lines: React.ReactNode[] }) {
  const heading = useRef<HTMLHeadingElement>(null)
  const windowEl = useRef<HTMLSpanElement>(null)
  const inner = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const h = heading.current
    const win = windowEl.current
    const copy = inner.current
    if (!h || !win || !copy) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return

    const target = { x: 0, y: 0, heat: 0 }
    const now = { x: 0, y: 0, heat: 0 }
    let started = false
    let frame = 0

    const tick = () => {
      now.x += (target.x - now.x) * 0.14
      now.y += (target.y - now.y) * 0.14
      now.heat += (target.heat - now.heat) * 0.1
      win.style.transform = `translate3d(${now.x.toFixed(1)}px, ${now.y.toFixed(1)}px, 0)`
      copy.style.transform = `translate3d(${(-now.x).toFixed(1)}px, ${(-now.y).toFixed(1)}px, 0)`
      win.style.opacity = now.heat.toFixed(3)
      // Rest once it has settled, rather than running a frame loop forever.
      const settled = Math.abs(target.x - now.x) < 0.2 && Math.abs(target.y - now.y) < 0.2 && Math.abs(target.heat - now.heat) < 0.005
      frame = settled ? 0 : requestAnimationFrame(tick)
    }

    const onMove = (e: PointerEvent) => {
      const b = h.getBoundingClientRect()
      target.x = e.clientX - b.left
      target.y = e.clientY - b.top
      // Full heat over the headline, cooling off within ~240px of it.
      const dx = Math.max(b.left - e.clientX, 0, e.clientX - b.right)
      const dy = Math.max(b.top - e.clientY, 0, e.clientY - b.bottom)
      target.heat = Math.max(0, 1 - Math.hypot(dx, dy) / 240)
      if (!started) {
        started = true
        win.classList.remove('heat-sweep')
        copy.classList.remove('heat-sweep-inner')
        now.x = target.x
        now.y = target.y
      }
      if (!frame) frame = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <h1 ref={heading} className="heat-host t-display relative mt-8">
      <span className="sr-only">Forge Eleven. </span>
      <Lines lines={lines} hero />
      <span aria-hidden="true" className="heat">
        <span ref={windowEl} className="heat-window heat-sweep">
          <span ref={inner} className="heat-inner heat-sweep-inner">
            <Lines lines={lines} hero />
          </span>
        </span>
      </span>
    </h1>
  )
}
