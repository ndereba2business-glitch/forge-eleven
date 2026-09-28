import type { StaticImageData } from 'next/image'

import fcCover from '@/assets/work/farmers-connect/cover.webp'
import fcSupplierDashboard from '@/assets/work/farmers-connect/supplier-dashboard.webp'
import fcSupplierProducts from '@/assets/work/farmers-connect/supplier-products.webp'
import fcMyFarm from '@/assets/work/farmers-connect/my-farm.webp'
import fcMarketplaceMobile from '@/assets/work/farmers-connect/marketplace-mobile.webp'
import fcSupplierMobile from '@/assets/work/farmers-connect/supplier-mobile.webp'
import fcLandingMobile from '@/assets/work/farmers-connect/landing-mobile.webp'

import ahCover from '@/assets/work/arena-homes/cover.webp'
import ahRooms from '@/assets/work/arena-homes/rooms.webp'
import ahLocation from '@/assets/work/arena-homes/location.webp'
import ahRoom from '@/assets/work/arena-homes/room.webp'
import ahBook from '@/assets/work/arena-homes/book.webp'
import ahMobile from '@/assets/work/arena-homes/mobile.webp'
import ahMobileRoom from '@/assets/work/arena-homes/mobile-room.webp'

import llCover from '@/assets/work/lion-legacy/cover.webp'
import llGoals from '@/assets/work/lion-legacy/goals.webp'
import llProduct from '@/assets/work/lion-legacy/product.webp'
import llDelivery from '@/assets/work/lion-legacy/delivery.webp'
import llShop from '@/assets/work/lion-legacy/shop.webp'
import llMobile from '@/assets/work/lion-legacy/mobile.webp'
import llMobileProduct from '@/assets/work/lion-legacy/mobile-product.webp'

import bpCover from '@/assets/work/black-perch/cover.webp'
import bpMenu from '@/assets/work/black-perch/menu.webp'
import bpReserve from '@/assets/work/black-perch/reserve.webp'
import bpMobile from '@/assets/work/black-perch/mobile.webp'
import sndCover from '@/assets/work/black-perch/space-next-door.webp'
import sndMobile from '@/assets/work/black-perch/space-next-door-mobile.webp'

/* ==========================================================================
   TYPES
   ========================================================================== */

export type StatusTone = 'live' | 'concept' | 'pitch'

export interface Shot {
  image: StaticImageData
  alt: string
  /** Mobile screenshots are shown in a phone-proportioned frame. */
  device?: 'phone'
}

export type Block =
  | { type: 'chapter'; label: string; title: string; body: string[] }
  | { type: 'image'; shot: Shot; caption?: string; size?: 'full' | 'wide' }
  | { type: 'phones'; shots: Shot[]; caption?: string }
  | { type: 'features'; label: string; title: string; items: { title: string; body: string }[] }
  | { type: 'decision'; label: string; text: string }
  | { type: 'list'; label: string; title: string; items: string[] }

export interface Project {
  slug: string
  name: string
  kind: string
  year: string
  status: { label: string; tone: StatusTone; note: string }
  /** One sentence: what it is. */
  summary: string
  /** Short paragraph under the title on the case study. */
  intro: string
  role: string[]
  stack: string[]
  /** Short tags shown on work cards. */
  capabilities: string[]
  links: { label: string; url: string }[]
  cover: Shot
  /** A quieter secondary frame used in listings. */
  thumb: Shot
  /** Subtle per-project tint for small details only. */
  tint: string
  blocks: Block[]
  seo: { title: string; description: string }
}

const GITHUB = 'https://github.com/ndereba2business-glitch'

/* ==========================================================================
   PROJECTS — ordered as they appear on the site
   ========================================================================== */

export const projects: Project[] = [
  {
    slug: 'farmers-connect',
    name: 'Farmers Connect',
    kind: 'Digital product',
    year: '2026',
    status: {
      label: 'Live MVP',
      tone: 'live',
      note: 'Self-initiated product, live and in active development.',
    },
    summary: 'A poultry-farming platform that puts flock records, vets, suppliers and other farmers in one mobile-first app.',
    intro:
      'Farmers Connect is a working product with four kinds of users: farmers, vets, suppliers and administrators. Each gets their own experience on one shared, permissioned database.',
    role: ['Product design', 'Front-end', 'Database & security', 'Testing'],
    stack: ['React 19', 'Vite', 'React Router 7', 'Supabase', 'PostgreSQL', 'Realtime', 'Edge Functions', 'Recharts', 'Playwright', 'Vercel'],
    capabilities: ['Multi-role web app', 'Marketplace', 'Dashboards', 'Row-level security'],
    links: [
      { label: 'Visit the live app', url: 'https://farmers-connect-azure.vercel.app' },
      { label: 'Source on GitHub', url: `${GITHUB}/farmers_connect` },
    ],
    cover: { image: fcCover, alt: 'Farmers Connect home page: “Farming is better when we’re connected.”' },
    thumb: { image: fcSupplierDashboard, alt: 'Farmers Connect supplier dashboard with product and contact counts' },
    tint: '#22c55e',
    blocks: [
      {
        type: 'chapter',
        label: 'The problem',
        title: 'A flock’s whole history lives in a notebook, or in someone’s head.',
        body: [
          'Small poultry farmers in Kenya track vaccinations, losses and costs by memory. A sick flock needs a vet quickly, and feed and vaccine suppliers are found by word of mouth.',
          'The people who need this most use mid-range Android phones on unreliable mobile data. That shaped every decision that followed.',
        ],
      },
      {
        type: 'image',
        shot: { image: fcSupplierDashboard, alt: 'Supplier dashboard: product totals, availability, and farmer contacts in the last 30 days' },
        caption: 'Supplier dashboard: stock at a glance, and how many farmers got in touch about each product. Shown with sample data.',
        size: 'full',
      },
      {
        type: 'features',
        label: 'What’s in it',
        title: 'One account, connected tools.',
        items: [
          { title: 'My Farm', body: 'Batches with breed and numbers, vaccination schedules, losses, expenses and sales, plus a dashboard alert when a vaccination is overdue.' },
          { title: 'Ask a vet', body: 'Verified vets, bookings and visit reports, medical records, and realtime farmer-to-vet messaging.' },
          { title: 'Marketplace', body: 'Suppliers list stock with availability, price ranges, minimum orders and freshness. Farmers call or WhatsApp with the product details already filled in.' },
          { title: 'Community', body: 'Posts and chat between farmers, because someone nearby has usually dealt with the same problem.' },
          { title: 'Clucky', body: 'A rule-based farm assistant that reads the farmer’s own batch records, flags things like rising mortality and lays the groundwork for an AI advisor. There’s also a feed calculator.' },
          { title: 'Admin', body: 'Vet and supplier verification, so trust badges mean something.' },
        ],
      },
      {
        type: 'phones',
        shots: [
          { image: fcLandingMobile, alt: 'Farmers Connect landing page on a phone', device: 'phone' },
          { image: fcMarketplaceMobile, alt: 'Marketplace on a phone, with Call and WhatsApp buttons on each listing', device: 'phone' },
          { image: fcSupplierMobile, alt: 'Supplier dashboard on a phone', device: 'phone' },
        ],
        caption: 'Designed at 360px first. Every touch target is at least 44px.',
      },
      {
        type: 'decision',
        label: 'Product decision',
        text: 'In-app ordering is built at the database level but switched off. At launch, farmers contact suppliers by phone or WhatsApp, because that’s how the trade already works. Turning ordering on later only brings the UI back.',
      },
      {
        type: 'image',
        shot: { image: fcSupplierProducts, alt: 'Supplier product management: search, filters, stock status, edit and deactivate' },
        caption: 'Product management for suppliers: search, filter, change stock status, edit or deactivate.',
        size: 'wide',
      },
      {
        type: 'list',
        label: 'Engineering',
        title: 'Built like a product, because it is one.',
        items: [
          'Row-level security on every table, backed by a repeatable SQL suite that checks the permissions against the real database and rolls back afterwards.',
          'Product and supplier input validated in the database itself, not just in the form.',
          'Every schema change is a versioned migration.',
          'End-to-end tests drive the real app in Chromium against an in-memory backend, including layout and accessibility checks at 320, 360, 768 and 1280px.',
          'A build check that fails if a secret ever reaches the production bundle.',
          'Built for slow networks rather than no network. Offline sync was deliberately left out, in favour of small payloads, fast loads and errors you can retry.',
        ],
      },
      {
        type: 'image',
        shot: { image: fcMyFarm, alt: 'My Farm section of the landing page, explaining batch records' },
        size: 'wide',
      },
      {
        type: 'chapter',
        label: 'Where it stands',
        title: 'Live, and still growing.',
        body: [
          'Farmers Connect is live as an MVP. Recent work added supplier product management, availability and pricing, and private contact counts. There are no invented user numbers here. The product is real, and the source is public.',
        ],
      },
    ],
    seo: {
      title: 'Farmers Connect — poultry farming platform case study',
      description:
        'How Forge Eleven designed and built Farmers Connect: a multi-role poultry platform for farmers, vets and suppliers in Kenya, on React and Supabase.',
    },
  },

  {
    slug: 'arena-homes',
    name: 'Arena Homes',
    kind: 'Booking website',
    year: '2026',
    status: {
      label: 'Concept',
      tone: 'concept',
      note: 'Self-initiated concept. Prices and reviews are labelled as samples on the site.',
    },
    summary: 'A booking-led website for furnished student rooms and apartments in Nakuru.',
    intro:
      'Arena Homes shows how a small property business can move from WhatsApp posts to a site that answers the real questions: what it costs, what’s included, how far it is from campus, and how to book.',
    role: ['UX & interface design', 'Front-end', 'Content structure', 'SEO & performance'],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'React Router 7', 'sharp'],
    capabilities: ['Booking flow', 'Room explorer', 'Prerendered SEO', 'Image pipeline'],
    links: [
      { label: 'Visit the live site', url: 'https://arena-homes-ten.vercel.app' },
      { label: 'Source on GitHub', url: `${GITHUB}/arena-homes` },
    ],
    cover: { image: ahCover, alt: 'Arena Homes hero: “A better place to come home to.” over a warmly lit living room' },
    thumb: { image: ahRoom, alt: 'Arena Homes studio room page with gallery and monthly price' },
    tint: '#c8784f',
    blocks: [
      {
        type: 'chapter',
        label: 'The brief',
        title: 'Answer the five questions every student asks before they WhatsApp.',
        body: [
          'How much is it? What’s included? Is it close to campus? Is it safe? Can I see it first? Student housing in Nakuru is mostly let through social posts and phone calls, so each of those answers costs a conversation.',
          'The site answers them up front and then makes asking easy: reserve a room, or book a viewing.',
        ],
      },
      {
        type: 'image',
        shot: { image: ahRooms, alt: 'Room explorer with filters for students, apartments and short stays' },
        caption: 'Six room types, filterable by who they suit, each with its availability.',
        size: 'full',
      },
      {
        type: 'features',
        label: 'Experience',
        title: 'From browsing to booked, on a phone.',
        items: [
          { title: 'Room explorer', body: 'Compare everything from a shared room to a two-bedroom apartment. Each has a detail page with its gallery, inclusions and monthly or nightly pricing.' },
          { title: 'Booking flow', body: 'Reserve a space or book a viewing. Move-in suggestions, stay length and occupants lead to a WhatsApp message with every detail already written.' },
          { title: 'Location map', body: 'An illustrated SVG map of Nakuru with nearby places you can filter (campus, transport, shopping, health) and travel times.' },
          { title: 'Gallery', body: 'A filterable photo gallery with a lightbox that works fully from the keyboard.' },
        ],
      },
      {
        type: 'image',
        shot: { image: ahRoom, alt: 'Studio room detail page with photo gallery and price from KSh 24,000 per month' },
        size: 'wide',
      },
      {
        type: 'phones',
        shots: [
          { image: ahMobile, alt: 'Arena Homes home page on a phone', device: 'phone' },
          { image: ahMobileRoom, alt: 'Studio room page on a phone', device: 'phone' },
        ],
      },
      {
        type: 'image',
        shot: { image: ahLocation, alt: 'Location section with nearby-place filters and an illustrated map of Nakuru' },
        caption: 'Location, told as distances that matter to a student.',
        size: 'wide',
      },
      {
        type: 'list',
        label: 'Under the hood',
        title: 'Fast, findable and easy to hand over.',
        items: [
          'A prerender step writes each route’s title, description, canonical URL and social tags into static HTML, so links preview properly without JavaScript. It also generates the sitemap and robots file.',
          'Photos go through a build-time pipeline that makes WebP versions at four widths, each with a blurred placeholder.',
          'The home page ships in the main bundle, and every other route loads on demand.',
          'The booking service is one small interface. It runs in demo mode now, and connecting a real booking API later needs no UI changes.',
          'Every property fact lives in one config file, and empty values hide themselves instead of showing made-up details. Re-skinning for another property means editing that file and swapping the photos.',
        ],
      },
      {
        type: 'image',
        shot: { image: ahBook, alt: 'Booking page: reserve a space or book a viewing' },
        size: 'wide',
      },
    ],
    seo: {
      title: 'Arena Homes — student accommodation booking website',
      description:
        'A booking-led website concept for furnished student rooms in Nakuru: room explorer, WhatsApp booking flow, illustrated location map and prerendered SEO.',
    },
  },

  {
    slug: 'lion-legacy',
    name: 'Lion Legacy Fitness',
    kind: 'E-commerce storefront',
    year: '2026',
    status: {
      label: 'Concept',
      tone: 'concept',
      note: 'Self-initiated concept. Products and prices are labelled as samples on the site.',
    },
    summary: 'A storefront for supplements and gym equipment in Kenya, where the cart ends in a WhatsApp order.',
    intro:
      'Much of Kenya’s fitness retail happens in DMs, one price question at a time. Lion Legacy is a real storefront that keeps the channel customers already trust.',
    role: ['Brand-led web design', 'E-commerce UX', 'Front-end'],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4'],
    capabilities: ['Storefront & cart', 'WhatsApp checkout', 'Shop by goal', 'Structured data'],
    links: [
      { label: 'Visit the live site', url: 'https://lion-legacy-fitness.vercel.app' },
      { label: 'Source on GitHub', url: `${GITHUB}/lion-legacy-fitness` },
    ],
    cover: { image: llCover, alt: 'Lion Legacy hero: “Build your legacy.” with an athlete and supplement tubs' },
    thumb: { image: llProduct, alt: 'Lion Legacy product page for whey protein with Add to cart and Order on WhatsApp' },
    tint: '#d4a24c',
    blocks: [
      {
        type: 'chapter',
        label: 'The idea',
        title: 'Keep the WhatsApp checkout. Lose the endless price questions.',
        body: [
          'Customers already trust WhatsApp for buying, but asking for prices post by post is slow for them and for the shop. Lion Legacy puts the whole range, with prices, variants and delivery information, in one fast storefront.',
          'Checkout doesn’t fight the habit. The cart becomes an itemised WhatsApp message with totals and product links, ready to send.',
        ],
      },
      {
        type: 'image',
        shot: { image: llProduct, alt: 'Product page with image gallery, price, quantity, Add to cart, Buy now and Order on WhatsApp' },
        size: 'full',
      },
      {
        type: 'features',
        label: 'Storefront',
        title: 'Everything a shop needs, nothing it doesn’t.',
        items: [
          { title: 'Catalogue', body: '22 products across seven categories, with flavour and size variants.' },
          { title: 'Shop by goal', body: 'Four paths (build muscle, get stronger, train harder, recover better) for people who know the goal but not the product.' },
          { title: 'Cart to WhatsApp', body: 'A cart drawer that persists between visits and turns into a formatted order message: items, options, quantities, subtotal and links.' },
          { title: 'Buying on a phone', body: 'Quick view, a sticky buy bar on product pages, and search available from every page.' },
        ],
      },
      {
        type: 'phones',
        shots: [
          { image: llMobile, alt: 'Lion Legacy home page on a phone', device: 'phone' },
          { image: llMobileProduct, alt: 'Creatine product page on a phone', device: 'phone' },
        ],
        caption: 'Condensed, heavy type and black and gold: a performance brand, not a pharmacy shelf.',
      },
      {
        type: 'image',
        shot: { image: llGoals, alt: 'Shop by goal: four photographic cards for different training goals' },
        size: 'wide',
      },
      {
        type: 'image',
        shot: { image: llDelivery, alt: 'Delivery section with an illustrated map of Kenya and delivery routes from Nairobi' },
        caption: 'Delivery across Kenya, drawn rather than described.',
        size: 'wide',
      },
      {
        type: 'list',
        label: 'Under the hood',
        title: 'Static where it can be, dynamic where it helps.',
        items: [
          'Every product and category page is generated statically, with a sitemap and structured product data for search.',
          'The shop listing filters by category, goal, price and availability, with sorting.',
          'All business details live in one config file, and anything unconfirmed is hidden rather than invented.',
          'A concept mode labels sample products and asks search engines not to index the site until launch.',
        ],
      },
      {
        type: 'image',
        shot: { image: llShop, alt: 'Shop page with category tabs, goal filters and product grid' },
        size: 'wide',
      },
    ],
    seo: {
      title: 'Lion Legacy Fitness — e-commerce storefront with WhatsApp checkout',
      description:
        'A Next.js storefront concept for supplements and gym equipment in Kenya: shop by goal, persistent cart and a checkout that ends in a WhatsApp order.',
    },
  },

  {
    slug: 'black-perch',
    name: 'The Black Perch',
    kind: 'Hospitality website',
    year: '2026',
    status: {
      label: 'Concept',
      tone: 'concept',
      note: 'Self-initiated concept for a real venue. The same build was later adapted for a client pitch.',
    },
    summary: 'A cinematic single-page site for a lounge, café, spa and late-night venue in Meru.',
    intro:
      'One venue with many reasons to visit: breakfast, dinner, cocktails, the spa, late nights. The site had to feel like the place after dark and still get someone to a reservation in two taps.',
    role: ['Art direction', 'Interaction design', 'Front-end'],
    stack: ['Next.js', 'TypeScript', 'GSAP ScrollTrigger', 'Lenis', 'Framer Motion'],
    capabilities: ['Scroll storytelling', 'Menu filtering', 'Reservations', 'Reusable system'],
    links: [
      { label: 'Visit the live site', url: 'https://the-black-pearch-one.vercel.app' },
      { label: 'Source on GitHub', url: `${GITHUB}/black-pearch` },
    ],
    cover: { image: bpCover, alt: 'The Black Perch hero: woven pendant lights over a candlelit dining room' },
    thumb: { image: bpMenu, alt: 'The Black Perch featured menu with category filters' },
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
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

export function nextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug)
  return projects[(i + 1) % projects.length]
}
