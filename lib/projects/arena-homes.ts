import type { Project } from './types'

import ahCover from '@/assets/work/arena-homes/cover.webp'
import ahRooms from '@/assets/work/arena-homes/rooms.webp'
import ahLocation from '@/assets/work/arena-homes/location.webp'
import ahRoom from '@/assets/work/arena-homes/room.webp'
import ahBook from '@/assets/work/arena-homes/book.webp'
import ahMobile from '@/assets/work/arena-homes/mobile.webp'
import ahMobileRoom from '@/assets/work/arena-homes/mobile-room.webp'

export const arenaHomes: Project = {
  slug: 'arena-homes',
  name: 'Arena Homes',
  kind: 'Booking website',
  year: '2026',
  owner: 'ndere',
  categories: ['Hospitality & booking'],
  sector: 'Property',
  featured: true,
  status: {
    label: 'Concept',
    tone: 'concept',
    note: 'Self-initiated concept. Prices and reviews are labelled as samples on the site.',
  },
  summary: 'A booking-led website for furnished student rooms and apartments in Nakuru.',
  intro:
    'Arena Homes shows how a small property business can move from WhatsApp posts to a site that answers the real questions: what it costs, what’s included, how far it is from campus, and how to book.',
  services: ['UX & interface design', 'Front-end', 'Content structure', 'SEO & performance'],
  technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'React Router 7', 'sharp'],
  capabilities: ['Booking flow', 'Room explorer', 'Prerendered SEO', 'Image pipeline'],
  liveUrl: 'https://arena-homes-ten.vercel.app',
  repoUrl: 'https://github.com/ndereba2business-glitch/arena-homes',
  cover: { image: ahCover, alt: 'Arena Homes hero: “A better place to come home to.” over a warmly lit living room' },
  thumb: { image: ahRoom, alt: 'Arena Homes studio room page with gallery and monthly price' },
  mobile: { image: ahMobile, alt: 'Arena Homes on a phone', device: 'phone' },
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
}
