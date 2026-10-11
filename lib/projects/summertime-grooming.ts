import type { Project } from './types'

import cover from '@/assets/work/summertime-grooming/cover.webp'
import barber from '@/assets/work/summertime-grooming/barber.webp'
import beauty from '@/assets/work/summertime-grooming/beauty.webp'
import booking from '@/assets/work/summertime-grooming/booking.webp'
import deals from '@/assets/work/summertime-grooming/deals.webp'
import mobile from '@/assets/work/summertime-grooming/mobile.webp'
import mobileBarber from '@/assets/work/summertime-grooming/mobile-barber.webp'

export const summertimeGrooming: Project = {
  slug: 'summertime-grooming',
  name: 'SummerTime Grooming & Beauty Hub',
  kind: 'Booking website',
  year: '2026',
  owner: 'eric',
  categories: ['Hospitality & booking'],
  sector: 'Beauty & grooming',
  featured: false,
  status: {
    label: 'Live site',
    tone: 'live',
    note: 'A barber and beauty studio in Njokerio that Eric owns. The site is live and takes bookings.',
  },
  summary: 'A booking site for a barber and beauty studio near Egerton University, with clear prices and WhatsApp hand-off.',
  intro:
    'SummerTime runs two departments under one roof: a barber and a nail and beauty hub. The site gives each its own page and price list, and turns a visit into a booking in seven short steps.',
  services: ['Web design', 'Front-end development', 'Booking flow'],
  technologies: ['Next.js', 'React', 'Tailwind CSS'],
  capabilities: ['Seven-step booking', 'Price lists & deals', 'WhatsApp hand-off', 'Owner portal'],
  liveUrl: 'https://summertime-grooming-beauty-hub.vercel.app/',
  cover: { image: cover, alt: 'SummerTime Grooming & Beauty Hub home page with Book appointment and WhatsApp buttons' },
  thumb: { image: barber, alt: 'SummerTime barber services page' },
  mobile: { image: mobile, alt: 'SummerTime Grooming & Beauty Hub on a phone', device: 'phone' },
  tint: '#d4a93a',
  blocks: [
    {
      type: 'chapter',
      label: 'The brief',
      title: 'Answer “how much, and when can I come?” without a phone call.',
      body: [
        'Most of the studio’s customers are students nearby. They want the price before they walk over, and a booking that takes less time than the haircut.',
        'So every service has a visible price range, and booking is available on every page: through the site, or straight into WhatsApp with the message already written.',
      ],
    },
    {
      type: 'image',
      shot: { image: booking, alt: 'Online booking: step one of seven, choose a department' },
      caption: 'Booking in seven steps: department, service, staff, date, time, details, confirm.',
      size: 'full',
    },
    {
      type: 'features',
      label: 'What’s in it',
      title: 'Two departments, one clear site.',
      items: [
        { title: 'Department pages', body: 'The barber and the nail and beauty hub each have their own page, team and full price list.' },
        { title: 'Deals & bundles', body: 'Service bundles, filterable by barber, beauty or combined.' },
        { title: 'Gallery', body: 'Recent work, filterable by service type.' },
        { title: 'Policies', body: 'Appointment, cancellation, late-arrival, refund, hygiene and aftercare policies, written in plain language.' },
        { title: 'Feedback', body: 'Customers can leave a star rating and a comment about their visit.' },
        { title: 'Owner portal', body: 'A password-protected area for the owner behind the public site.' },
      ],
    },
    {
      type: 'phones',
      shots: [
        { image: mobile, alt: 'SummerTime home page on a phone', device: 'phone' },
        { image: mobileBarber, alt: 'Barber services page on a phone', device: 'phone' },
      ],
    },
    {
      type: 'image',
      shot: { image: beauty, alt: 'Nail and beauty hub page with service sections' },
      size: 'wide',
    },
    {
      type: 'image',
      shot: { image: deals, alt: 'Service bundles and deals page with filter tabs' },
      caption: 'Deals, grouped the way customers ask for them.',
      size: 'wide',
    },
  ],
  seo: {
    title: 'SummerTime Grooming & Beauty Hub — booking website',
    description:
      'A booking website for a barber and beauty studio, built by Forge Eleven co-founder Eric Mwendwa: seven-step booking, price lists, deals, gallery and WhatsApp hand-off.',
  },
}
