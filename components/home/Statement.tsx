'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const TEXT =
  'Most websites are made to be looked at. These are made to be *used*: booked, ordered from, signed into and trusted, on the phone in your customer’s hand.'

/** A statement whose words light up as it scrolls through the viewport. */
export default function Statement() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Unlit words stay above 3:1 contrast (large text), so the line is
        // readable at every scroll position, not just once it has lit up.
        gsap.fromTo(
          '[data-word]',
          { opacity: (_i: number, el: HTMLElement) => (el.dataset.accent ? 0.78 : 0.42) },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.12,
            scrollTrigger: { trigger: root.current, start: 'top 75%', end: 'bottom 55%', scrub: true },
          }
        )
      })
    },
    { scope: root }
  )

  return (
    <section ref={root} aria-label="Statement" className="container-x section-y">
      <p className="t-h2 max-w-[22ch]">
        {TEXT.split(' ').map((word, i) => {
          const accent = word.startsWith('*')
          const clean = word.replace(/\*/g, '')
          return (
            <span key={i} data-word data-accent={accent || undefined} className={accent ? 'text-ember' : undefined}>
              {clean}{' '}
            </span>
          )
        })}
      </p>
    </section>
  )
}
