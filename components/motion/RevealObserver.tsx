'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * One IntersectionObserver for every [data-reveal] element on the page.
 * Elements already on screen are marked visible before the page is flagged
 * `reveal-ready`, so nothing above the fold flashes out and back in, and
 * without JavaScript nothing is ever hidden.
 */
export default function RevealObserver() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    const root = document.documentElement
    const elements = [...document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)')]

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-in'))
      return
    }

    const vh = window.innerHeight
    for (const el of elements) {
      const r = el.getBoundingClientRect()
      if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add('is-in')
    }
    root.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
    )
    elements.filter((el) => !el.classList.contains('is-in')).forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])

  return null
}
