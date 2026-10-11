import type { Project } from './types'

import llCover from '@/assets/work/lion-legacy/cover.webp'
import llGoals from '@/assets/work/lion-legacy/goals.webp'
import llProduct from '@/assets/work/lion-legacy/product.webp'
import llDelivery from '@/assets/work/lion-legacy/delivery.webp'
import llShop from '@/assets/work/lion-legacy/shop.webp'
import llMobile from '@/assets/work/lion-legacy/mobile.webp'
import llMobileProduct from '@/assets/work/lion-legacy/mobile-product.webp'

export const lionLegacy: Project = {
  slug: 'lion-legacy',
  name: 'Lion Legacy Fitness',
  kind: 'E-commerce storefront',
  year: '2026',
  owner: 'ndere',
  categories: ['E-commerce'],
  sector: 'Fitness retail',
  featured: false,
  status: {
    label: 'Concept',
    tone: 'concept',
    note: 'Self-initiated concept. Products and prices are labelled as samples on the site.',
  },
  summary: 'A storefront for supplements and gym equipment in Kenya, where the cart ends in a WhatsApp order.',
  intro:
    'Much of Kenya’s fitness retail happens in DMs, one price question at a time. Lion Legacy is a real storefront that keeps the channel customers already trust.',
  services: ['Brand-led web design', 'E-commerce UX', 'Front-end'],
  technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4'],
  capabilities: ['Storefront & cart', 'WhatsApp checkout', 'Shop by goal', 'Structured data'],
  liveUrl: 'https://lion-legacy-fitness.vercel.app',
  repoUrl: 'https://github.com/ndereba2business-glitch/lion-legacy-fitness',
  cover: { image: llCover, alt: 'Lion Legacy hero: “Build your legacy.” with an athlete and supplement tubs' },
  thumb: { image: llProduct, alt: 'Lion Legacy product page for whey protein with Add to cart and Order on WhatsApp' },
  mobile: { image: llMobile, alt: 'Lion Legacy Fitness on a phone', device: 'phone' },
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
}
