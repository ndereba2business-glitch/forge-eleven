/**
 * Home page copy. Each service points at the work that proves it.
 */

export const services = [
  {
    title: 'Websites',
    body: 'Business and marketing sites that load fast, read well on a phone and make the next step obvious: a booking, a call, a WhatsApp message.',
    deliverables: ['Art direction', 'Responsive build', 'SEO & metadata', 'Content structure'],
    proof: [
      { label: 'The Black Perch', href: '/work/black-perch' },
      { label: 'Arena Homes', href: '/work/arena-homes' },
    ],
  },
  {
    title: 'Web applications',
    body: 'Dashboards, marketplaces and multi-role products on a real database, with sign-in, permissions and the tests to back them.',
    deliverables: ['Product & UX', 'Auth & roles', 'Database & security', 'Automated tests'],
    proof: [{ label: 'Farmers Connect', href: '/work/farmers-connect' }],
  },
  {
    title: 'Commerce & booking',
    body: 'Catalogues, carts, reservations and viewing requests, designed around how your customers actually buy, WhatsApp included.',
    deliverables: ['Catalogue & cart', 'Booking flows', 'WhatsApp hand-off', 'Structured data'],
    proof: [
      { label: 'Lion Legacy', href: '/work/lion-legacy' },
      { label: 'Arena Homes', href: '/work/arena-homes' },
    ],
  },
  {
    title: 'Interface & motion',
    body: 'Interface design, small design systems and motion that explains rather than decorates, with smooth scrolling that still respects reduced motion.',
    deliverables: ['UI design', 'Design systems', 'Interaction & motion', 'Accessibility'],
    proof: [{ label: 'The Black Perch', href: '/work/black-perch' }],
  },
]

export const process = [
  {
    name: 'Listen',
    body: 'Start with the business: who your customers are, how they decide, and what the site has to change.',
    output: 'A one-page brief',
  },
  {
    name: 'Shape',
    body: 'Structure, content and scope agreed in writing before anything is designed. No surprises later.',
    output: 'Sitemap & scope',
  },
  {
    name: 'Design',
    body: 'The look, the key screens and the flows, designed on real content and reviewed on your own phone.',
    output: 'Clickable designs',
  },
  {
    name: 'Build',
    body: 'Production code on a live preview link you can open at any point, so you watch it come together.',
    output: 'A working site',
  },
  {
    name: 'Launch',
    body: 'Domain, SEO basics, performance and accessibility checks, then a handover you can actually use.',
    output: 'Live, and yours',
  },
]

export const principles = [
  {
    title: 'Real content, never filler.',
    body: 'If a price, a review or a number isn’t confirmed, it isn’t shown. Every concept here is labelled as one.',
  },
  {
    title: 'Phones first.',
    body: 'Most of your customers will meet you on a mid-range Android over mobile data, so that’s the device every screen starts on.',
  },
  {
    title: 'Security is part of the build.',
    body: 'Permissions live in the database and they’re tested, not left to hope and a hidden button.',
  },
  {
    title: 'AI-accelerated, human-decided.',
    body: 'Modern AI tools make iteration fast. The architecture, the judgement calls and every line that ships are reviewed by a person.',
  },
]

/** Only tools used in the projects on this site. */
export const tools = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Supabase',
  'PostgreSQL',
  'GSAP',
  'Vite',
  'Playwright',
  'Vercel',
]
