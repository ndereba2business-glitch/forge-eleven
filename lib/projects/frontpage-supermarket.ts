import type { Project } from './types'

import cover from '@/assets/work/frontpage-supermarket/cover.webp'
import products from '@/assets/work/frontpage-supermarket/products.webp'
import category from '@/assets/work/frontpage-supermarket/category.webp'
import location from '@/assets/work/frontpage-supermarket/location.webp'
import mobile from '@/assets/work/frontpage-supermarket/mobile.webp'
import mobileProducts from '@/assets/work/frontpage-supermarket/mobile-products.webp'

export const frontpageSupermarket: Project = {
  slug: 'frontpage-supermarket',
  name: 'Frontpage Supermarket',
  kind: 'Online supermarket',
  year: '2026',
  owner: 'eric',
  categories: ['E-commerce', 'Business systems'],
  sector: 'Grocery retail',
  featured: true,
  status: {
    label: 'Live store',
    tone: 'live',
    note: 'An online store for Frontpage Supermarket in Njoro, Kenya. Live, with a working catalogue, cart and customer accounts.',
  },
  summary: 'An online supermarket for a store in Njoro: browse 177 products, fill a cart, and collect in store.',
  intro:
    'Frontpage puts a whole supermarket online: twelve aisles of products with search and filters, a cart, customer accounts with order tracking, and promotions that end on their own.',
  services: ['E-commerce UX', 'Full-stack development', 'Catalogue & search'],
  technologies: ['Next.js', 'React', 'Tailwind CSS'],
  capabilities: ['177-product catalogue', 'Search & filters', 'Accounts & order tracking', 'Timed promotions'],
  liveUrl: 'https://frontpage-supermarket-cyphertic.vercel.app/',
  cover: { image: cover, alt: 'Frontpage Supermarket home page: “Everyday Shopping, Well Stocked.” above an illustrated shopping basket' },
  thumb: { image: products, alt: 'Frontpage Supermarket product listing with filters' },
  mobile: { image: mobile, alt: 'Frontpage Supermarket on a phone', device: 'phone' },
  tint: '#f2743b',
  blocks: [
    {
      type: 'chapter',
      label: 'The idea',
      title: 'Let people shop the shelves before they reach the store.',
      body: [
        'Frontpage sells groceries, household goods and imported products under one roof. The site lets a customer browse everything online, build a basket and collect it in store.',
        'The home page follows how people actually shop. You start in the aisle you came for, and every category is one tap away.',
      ],
    },
    {
      type: 'image',
      shot: { image: products, alt: 'All products page: 177 products with search, category, price, stock and offer filters' },
      caption: 'All 177 products, with filters for category, price, stock and offers, and five ways to sort.',
      size: 'full',
    },
    {
      type: 'features',
      label: 'Storefront',
      title: 'A full shop, not a brochure.',
      items: [
        { title: 'Catalogue', body: '177 products across twelve categories, each with sub-categories, prices in Kenyan shillings and stock status.' },
        { title: 'Search & filters', body: 'Search from any page. Filter by category, price range, stock and offers, and sort by featured, newest, price or name.' },
        { title: 'Cart & checkout', body: 'Add to cart from any listing, then sign in to check out.' },
        { title: 'Customer accounts', body: 'Registration and sign-in, with order tracking and a list of favourites.' },
        { title: 'Timed promotions', body: 'Each offer carries an end date and stops automatically when it passes.' },
        { title: 'Store information', body: 'Address, directions, phone and opening hours, with today’s hours highlighted.' },
      ],
    },
    {
      type: 'phones',
      shots: [
        { image: mobile, alt: 'Frontpage Supermarket home page on a phone', device: 'phone' },
        { image: mobileProducts, alt: 'Product listing on a phone', device: 'phone' },
      ],
    },
    {
      type: 'image',
      shot: { image: category, alt: 'Fresh Food category page with sub-category filter' },
      caption: 'Each aisle has its own page and sub-categories.',
      size: 'wide',
    },
    {
      type: 'list',
      label: 'Details',
      title: 'The parts that make a shop feel finished.',
      items: [
        'A four-step guide on the home page explains the journey: browse, add to cart, check out, then track and receive.',
        'Pickup and delivery, refund, terms and privacy pages are part of the build, not an afterthought.',
        'A skip-to-content link and labelled controls for keyboard and screen-reader users.',
        'A contact page with the store’s details beside a message form.',
      ],
    },
    {
      type: 'image',
      shot: { image: location, alt: 'Store location page with address, phone and opening hours' },
      size: 'wide',
    },
  ],
  seo: {
    title: 'Frontpage Supermarket — online grocery store',
    description:
      'An online supermarket built by Forge Eleven co-founder Eric Mwendwa: a 177-product catalogue with search and filters, cart, customer accounts, order tracking and timed promotions.',
  },
}
