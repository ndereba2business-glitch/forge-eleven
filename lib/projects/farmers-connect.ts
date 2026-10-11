import type { Project } from './types'

import fcCover from '@/assets/work/farmers-connect/cover.webp'
import fcSupplierDashboard from '@/assets/work/farmers-connect/supplier-dashboard.webp'
import fcSupplierProducts from '@/assets/work/farmers-connect/supplier-products.webp'
import fcMyFarm from '@/assets/work/farmers-connect/my-farm.webp'
import fcMarketplaceMobile from '@/assets/work/farmers-connect/marketplace-mobile.webp'
import fcSupplierMobile from '@/assets/work/farmers-connect/supplier-mobile.webp'
import fcLandingMobile from '@/assets/work/farmers-connect/landing-mobile.webp'

export const farmersConnect: Project = {
  slug: 'farmers-connect',
  name: 'Farmers Connect',
  kind: 'Digital product',
  year: '2026',
  owner: 'ndere',
  categories: ['Web applications'],
  sector: 'Agriculture',
  featured: true,
  status: {
    label: 'Live MVP',
    tone: 'live',
    note: 'Self-initiated product, live and in active development.',
  },
  summary: 'A poultry-farming platform that puts flock records, vets, suppliers and other farmers in one mobile-first app.',
  intro:
    'Farmers Connect is a working product with four kinds of users: farmers, vets, suppliers and administrators. Each gets their own experience on one shared, permissioned database.',
  services: ['Product design', 'Front-end', 'Database & security', 'Testing'],
  technologies: ['React 19', 'Vite', 'React Router 7', 'Supabase', 'PostgreSQL', 'Realtime', 'Edge Functions', 'Recharts', 'Playwright', 'Vercel'],
  capabilities: ['Multi-role web app', 'Marketplace', 'Dashboards', 'Row-level security'],
  liveUrl: 'https://farmers-connect-azure.vercel.app',
  repoUrl: 'https://github.com/ndereba2business-glitch/farmers_connect',
  cover: { image: fcCover, alt: 'Farmers Connect home page: “Farming is better when we’re connected.”' },
  thumb: { image: fcSupplierDashboard, alt: 'Farmers Connect supplier dashboard with product and contact counts' },
  mobile: { image: fcLandingMobile, alt: 'Farmers Connect on a phone', device: 'phone' },
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
}
