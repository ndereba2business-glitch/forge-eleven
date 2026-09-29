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
        gsap.fromTo(
          '[data-word]',
          { opacity: 0.14 },
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
            <span key={i} data-word className={accent ? 'text-ember' : undefined}>
              {clean}{' '}
            </span>
          )
        })}
      </p>
    </section>
  )
}
