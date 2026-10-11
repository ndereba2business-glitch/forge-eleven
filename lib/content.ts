/**
 * Home page copy. Services and proof point at projects by slug, so the
 * names shown always come from lib/projects.
 */

export const services = [
  {
    title: 'Websites',
    body: 'Business and marketing sites that load fast, read well on a phone and make the next step obvious.',
    need: 'For when the first impression has to turn into a booking, a call or a WhatsApp message.',
    deliverables: ['Art direction', 'Responsive build', 'SEO & metadata', 'Content structure'],
    proof: ['black-perch', 'summertime-grooming'],
  },
  {
    title: 'Web applications',
    body: 'Multi-role products on a real database, with sign-in, permissions, dashboards and the tests to back them.',
    need: 'For when different people need different views of the same data, and it has to be right.',
    deliverables: ['Product & UX', 'Accounts & roles', 'Database & security', 'Maps & data'],
    proof: ['farmers-connect', 'cypher-green-systems'],
  },
  {
    title: 'E-commerce & ordering',
    body: 'Catalogues, carts, customer accounts and order tracking, built around how your customers actually buy.',
    need: 'For when you want to sell or take orders online without losing the WhatsApp habit your customers already have.',
    deliverables: ['Catalogue & search', 'Cart & checkout', 'Order tracking', 'WhatsApp hand-off'],
    proof: ['frontpage-supermarket', 'lion-legacy'],
  },
  {
    title: 'Business systems',
    body: 'The tools behind the counter: staff dashboards, menus and stock your team updates, order status and owner portals.',
    need: 'For when the website and the day-to-day running of the business need to stay in step.',
    deliverables: ['Staff dashboards', 'Admin portals', 'Access control', 'Operational data'],
    proof: ['kingangi-hotel', 'frontpage-supermarket'],
  },
  {
    title: 'Booking & reservations',
    body: 'Rooms, tables and appointments: clear prices, visible availability and a booking that takes seconds.',
    need: 'For when every enquiry currently costs you a conversation.',
    deliverables: ['Booking flows', 'Availability', 'Pricing pages', 'Confirmation hand-off'],
    proof: ['arena-homes', 'summertime-grooming'],
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
    body: 'If a price, a review or a number isn’t confirmed, it isn’t shown. Every concept on this site is labelled as one.',
  },
  {
    title: 'Phones first.',
    body: 'Most of your customers will meet you on a mid-range Android over mobile data, so that’s the device every screen starts on.',
  },
  {
    title: 'Security is part of the build.',
    body: 'Who can see and change what is decided in the system itself and tested, not left to a hidden button.',
  },
  {
    title: 'AI-accelerated, human-decided.',
    body: 'Modern AI tools make iteration fast. The architecture, the judgement calls and every line that ships are reviewed by a person.',
  },
]

/**
 * Proof ticker: countable facts from the real projects, each traceable to
 * the project itself (its live site, catalogue, routes or source).
 */
export const proof = [
  { figure: '4', text: 'user roles on one database', project: 'farmers-connect' },
  { figure: '8', text: 'roles, each with their own view of one map', project: 'cypher-green-systems' },
  { figure: '177', text: 'products across 12 categories', project: 'frontpage-supermarket' },
  { figure: '10', text: 'routes, each with its own title and link preview', project: 'arena-homes' },
  { figure: '16', text: 'versioned database migrations', project: 'farmers-connect' },
  { figure: '6', text: 'levels, from the whole Earth to a single site', project: 'cypher-green-systems' },
  { figure: '2', text: 'branches on one ordering system', project: 'kingangi-hotel' },
  { figure: '22', text: 'products, one tap from cart to WhatsApp', project: 'lion-legacy' },
  { figure: '7', text: 'steps from choosing a service to a booking', project: 'summertime-grooming' },
  { figure: '2', text: 'venues from one hospitality system', project: 'black-perch' },
]

/** Only tools used in the projects on this site. */
export const tools = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'PostGIS', 'GSAP', 'Playwright', 'Vercel']
