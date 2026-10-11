import type { Project } from './types'

import bpCover from '@/assets/work/black-perch/cover.webp'
import bpMenu from '@/assets/work/black-perch/menu.webp'
import bpReserve from '@/assets/work/black-perch/reserve.webp'
import bpMobile from '@/assets/work/black-perch/mobile.webp'
import sndCover from '@/assets/work/black-perch/space-next-door.webp'
import sndMobile from '@/assets/work/black-perch/space-next-door-mobile.webp'

export const blackPerch: Project = {
  slug: 'black-perch',
  name: 'The Black Perch',
  kind: 'Hospitality website',
  year: '2026',
  owner: 'ndere',
  categories: ['Hospitality & booking'],
  sector: 'Hospitality',
  featured: false,
  status: {
    label: 'Concept',
    tone: 'concept',
    note: 'Self-initiated concept for a real venue. The same build was later adapted for a client pitch.',
  },
  summary: 'A cinematic single-page site for a lounge, café, spa and late-night venue in Meru.',
  intro:
    'One venue with many reasons to visit: breakfast, dinner, cocktails, the spa, late nights. The site had to feel like the place after dark and still get someone to a reservation in two taps.',
  services: ['Art direction', 'Interaction design', 'Front-end'],
  technologies: ['Next.js', 'TypeScript', 'GSAP ScrollTrigger', 'Lenis', 'Framer Motion'],
  capabilities: ['Scroll storytelling', 'Menu filtering', 'Reservations', 'Reusable system'],
  liveUrl: 'https://the-black-pearch-one.vercel.app',
  repoUrl: 'https://github.com/ndereba2business-glitch/black-pearch',
  cover: { image: bpCover, alt: 'The Black Perch hero: woven pendant lights over a candlelit dining room' },
  thumb: { image: bpMenu, alt: 'The Black Perch featured menu with category filters' },
  mobile: { image: bpMobile, alt: 'The Black Perch on a phone', device: 'phone' },
  tint: '#c9a96e',
  blocks: [
    {
      type: 'chapter',
      label: 'Direction',
      title: 'Sell the evening, then make booking effortless.',
      body: [
        'Hospitality sites are bought on feeling. The Black Perch leads with atmosphere (low light, serif type, slow and deliberate scroll) and keeps the practical things always within reach: hours, location and a reservation button.',
      ],
    },
    {
      type: 'image',
      shot: { image: bpMenu, alt: 'Featured menu with filters for breakfast, mains, pizzas and cocktails' },
      caption: 'A filterable menu across breakfast & café, signature mains, pizzas & burgers and cocktails.',
      size: 'full',
    },
    {
      type: 'features',
      label: 'Experience',
      title: 'Atmosphere with a purpose.',
      items: [
        { title: 'Scroll storytelling', body: 'GSAP ScrollTrigger reveals each section as the visitor arrives: menu, story, experience, reservation.' },
        { title: 'Menu', body: 'Category filters with smooth transitions and photography for each dish.' },
        { title: 'Reservations', body: '“Reserve a table” opens WhatsApp with the booking message already written, and “Call us” dials the venue. Both are one tap on a phone.' },
        { title: 'Restraint', body: 'Grain, fog and particles stay in the background, behind the content and never over it.' },
      ],
    },
    {
      type: 'phones',
      shots: [
        { image: bpMobile, alt: 'The Black Perch hero on a phone', device: 'phone' },
        { image: sndMobile, alt: 'Space Next Door hero on a phone', device: 'phone' },
      ],
    },
    {
      type: 'chapter',
      label: 'The same system, re-skinned',
      title: 'Space Next Door: a pitch built in days, not weeks.',
      body: [
        'Because the Black Perch build separates content from structure, it was adapted for a sports bar, grill and nightclub in Nakuru as a client pitch, with new copy, photography and a new identity.',
        'The pitch demo is live. Its menu and hours are waiting on the venue.',
      ],
    },
    {
      type: 'image',
      shot: { image: sndCover, alt: 'Space Next Door hero: “Good food, great games and Nakuru’s best nights”' },
      caption: 'Space Next Door, the pitch demo built from the Black Perch system.',
      size: 'wide',
    },
    {
      type: 'image',
      shot: { image: bpReserve, alt: 'Reservation section with Reserve a table and Call us buttons beside The Black Perch crest' },
      size: 'wide',
    },
  ],
  seo: {
    title: 'The Black Perch — cinematic hospitality website',
    description:
      'A scroll-driven website concept for a lounge, café and spa in Meru, Kenya, and how the same system became a client pitch for Space Next Door.',
  },
}
