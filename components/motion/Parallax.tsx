'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/**
 * Drifts its child slightly against the scroll to give large images depth.
 * The child should be taller than the frame (e.g. `scale-110`) so no edge
 * shows. Desktop only; off for reduced motion.
 */
export default function Parallax({
  children,
  amount = 8,
  className = '',
}: {
  children: React.ReactNode
  amount?: number
  className?: string
}) {
  const frame = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '[data-parallax]',
          { yPercent: -amount / 2 },
          {
            yPercent: amount / 2,
            ease: 'none',
            scrollTrigger: { trigger: frame.current, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        )
      })
    },
    { scope: frame }
  )

  return (
    <div ref={frame} className={`relative overflow-clip ${className}`}>
      <div data-parallax className="relative h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  )
}
