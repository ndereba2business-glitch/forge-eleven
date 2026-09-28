'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setLenis } from '@/lib/scroll'

gsap.registerPlugin(ScrollTrigger)

/**
 * Inertial wheel scrolling, driven by GSAP's ticker so ScrollTrigger and
 * Lenis read the same frame. Touch keeps native scrolling, and visitors who
 * ask for reduced motion get the browser's own scroll.
 */
export default function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -72 }, autoRaf: false })
    const tick = (time: number) => lenis.raf(time * 1000)

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    setLenis(lenis)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  // After a client-side navigation, start at the top and let triggers
  // measure the new layout. (Skipped on first load to keep scroll restoration.)
  const first = useRef(true)
  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    if (!window.location.hash) window.scrollTo(0, 0)
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return null
}
