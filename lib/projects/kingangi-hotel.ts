import type { Project } from './types'

import cover from '@/assets/work/kingangi-hotel/cover.webp'
import menu from '@/assets/work/kingangi-hotel/menu.webp'
import staff from '@/assets/work/kingangi-hotel/staff.webp'
import mobile from '@/assets/work/kingangi-hotel/mobile.webp'
import mobileStaff from '@/assets/work/kingangi-hotel/mobile-staff.webp'

export const kingangiHotel: Project = {
  slug: 'kingangi-hotel',
  name: 'King’ang’i Hotel',
  kind: 'Restaurant ordering system',
  year: '2026',
  owner: 'eric',
  categories: ['Hospitality & booking', 'Business systems'],
  sector: 'Hospitality',
  featured: false,
  status: {
    label: 'Live system',
    tone: 'live',
    note: 'A two-branch restaurant in Njoro, Kenya. Live; the hotel’s own story section is still being finalised with its team.',
  },
  summary: 'A public ordering site and a protected staff side for a two-branch Kenyan restaurant.',
  intro:
    'King’ang’i Hotel serves Kenyan meals from two branches. The system gives customers a digital menu and order-for-collection, and gives staff one secure place to run the day.',
  services: ['Web design', 'Full-stack development', 'Ordering flow'],
  technologies: ['Next.js', 'React', 'Tailwind CSS'],
  capabilities: ['Digital menu per branch', 'Order for collection', 'Order status lookup', 'Staff dashboard'],
  liveUrl: 'https://kingangi-hotel-system-hotel-system-cypher-techy.vercel.app/',
  cover: { image: cover, alt: 'King’ang’i Hotel home page: “Welcome to King’ang’i Hotel.” over plates of food' },
  thumb: { image: menu, alt: 'King’ang’i Hotel digital menu with category filters' },
  mobile: { image: mobile, alt: 'King’ang’i Hotel on a phone', device: 'phone' },
  tint: '#c5e04a',
  blocks: [
    {
      type: 'chapter',
      label: 'The brief',
      title: 'One system for the customer at the counter and the team behind it.',
      body: [
        'A busy local restaurant needs two things from its website: customers should see today’s menu and prices and order ahead, and staff should be able to keep that menu honest.',
        'King’ang’i has two branches, so the menu, prices and availability are shown per branch.',
      ],
    },
    {
      type: 'image',
      shot: { image: menu, alt: 'Digital menu for the Egerton Main Gate branch with search and category chips' },
      caption: 'The digital menu: choose a branch, search, filter by category and add meals to an order.',
      size: 'full',
    },
    {
      type: 'features',
      label: 'What’s in it',
      title: 'From the first look at the menu to collecting the order.',
      items: [
        { title: 'Menu per branch', body: 'Each branch shows its own current menu and prices in Kenyan shillings, with availability updated by the team.' },
        { title: 'Search & categories', body: 'Search meals, sides and drinks, or jump to a category such as Rice & Pilau, Ugali Dishes or Snacks.' },
        { title: 'Order for collection', body: 'Customers build an order online and collect it at the branch.' },
        { title: 'Order status', body: 'A status check on the home page takes an order reference and phone number.' },
        { title: 'Contact by branch', body: 'A message form where the customer picks which branch they are writing to.' },
        { title: 'Staff side', body: 'A protected sign-in leads to the dashboard where the team manages the day.' },
      ],
    },
    {
      type: 'phones',
      shots: [
        { image: mobile, alt: 'King’ang’i Hotel home page on a phone', device: 'phone' },
        { image: mobileStaff, alt: 'Staff sign-in on a phone', device: 'phone' },
      ],
    },
    {
      type: 'image',
      shot: { image: staff, alt: 'Staff sign-in page: “Good operations make warm hospitality possible.”' },
      caption: 'The staff entrance, kept separate from the public site.',
      size: 'wide',
    },
    {
      type: 'decision',
      label: 'Content decision',
      text: 'Where the hotel’s history and mission are not yet confirmed, the site says so plainly instead of filling the space with invented copy.',
    },
  ],
  seo: {
    title: 'King’ang’i Hotel — restaurant ordering system',
    description:
      'A restaurant website and ordering system built by Forge Eleven co-founder Eric Mwendwa: per-branch digital menu, order for collection, order status lookup and a protected staff dashboard.',
  },
}
