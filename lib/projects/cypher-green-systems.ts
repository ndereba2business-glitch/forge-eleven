import type { Project } from './types'

import cover from '@/assets/work/cypher-green-systems/cover.webp'
import howItWorks from '@/assets/work/cypher-green-systems/how-it-works.webp'
import features from '@/assets/work/cypher-green-systems/features.webp'
import marketplace from '@/assets/work/cypher-green-systems/marketplace.webp'
import mobile from '@/assets/work/cypher-green-systems/mobile.webp'
import mobileHow from '@/assets/work/cypher-green-systems/mobile-how.webp'

export const cypherGreenSystems: Project = {
  slug: 'cypher-green-systems',
  name: 'Cypher Green Systems',
  kind: 'Environmental data platform',
  year: '2026',
  owner: 'eric',
  categories: ['Web applications'],
  sector: 'Environment',
  featured: true,
  status: {
    label: 'Live platform',
    tone: 'live',
    note: 'Eric’s own product, live and in active development. Only features the platform marks as available are described here.',
  },
  summary: 'A map-first platform for managing environmental and carbon projects, from the whole Earth down to a single monitoring site.',
  intro:
    'Cypher Green Systems gives landowners, project managers, field teams and investors one access-controlled record of an environmental project, anchored to its place on the map.',
  services: ['Product design', 'Full-stack development', 'GIS & mapping', 'Access control'],
  technologies: ['Next.js', 'React', 'Tailwind CSS', 'PostGIS', '3D globe & 2D GIS maps'],
  capabilities: ['Interactive 3D Earth', 'GIS boundaries', 'Eight user roles', 'Field monitoring'],
  liveUrl: 'https://cypher-green-systems.vercel.app/',
  cover: { image: cover, alt: 'Cypher Green Systems home page with an interactive globe centred on Africa' },
  thumb: { image: howItWorks, alt: 'A project’s journey through Cypher Green Systems, in numbered steps' },
  mobile: { image: mobile, alt: 'Cypher Green Systems on a phone', device: 'phone' },
  tint: '#f2743b',
  blocks: [
    {
      type: 'chapter',
      label: 'The problem',
      title: 'An environmental project has many parties and no shared record.',
      body: [
        'Landowners, community groups, project managers, field teams and, later, developers and investors all need the same facts: where a project is, what is happening there, and what evidence supports it.',
        'Cypher Green Systems anchors all of it to the project’s place on the Earth. Each user sees only their own records and the projects they take part in.',
      ],
    },
    {
      type: 'image',
      shot: { image: howItWorks, alt: 'How it works: register, place the project on the Earth, review, map and organise, monitor, report' },
      caption: 'A project’s journey from registration to the public map, with an audit trail of who did what.',
      size: 'full',
    },
    {
      type: 'features',
      label: 'The platform',
      title: 'One map, from the planet to a planting block.',
      items: [
        { title: 'Earth & GIS', body: 'An interactive 3D Earth that drills down through six levels (Earth, Africa, Kenya, county, project, site), plus a 2D GIS map with satellite, light and street basemaps.' },
        { title: 'Boundaries', body: 'Project boundaries stored in PostGIS with calculated area. Draw them on the map or import GeoJSON, KML or a zipped shapefile.' },
        { title: 'Project operations', body: 'Registration and approval, organisations, teams, tasks, milestones, private documents and an audit log.' },
        { title: 'Field monitoring', body: 'Field reports with GPS, measurements and photographs, including offline capture that synchronises later.' },
        { title: 'MRV records', body: 'Carbon estimates recorded with their method and assumptions. Summaries export as PDF or CSV from recorded data.' },
        { title: 'Project marketplace', body: 'Approved projects are listed for registered investors, who can save listings and send an expression of interest through a tracked workflow.' },
      ],
    },
    {
      type: 'phones',
      shots: [
        { image: mobile, alt: 'Cypher Green Systems home page on a phone', device: 'phone' },
        { image: mobileHow, alt: 'How it works page on a phone', device: 'phone' },
      ],
    },
    {
      type: 'decision',
      label: 'Product decision',
      text: 'An estimate is never shown as a verified credit. Every figure is labelled user-submitted, derived, estimated or verified, and where there is no data the platform says so instead of showing sample numbers.',
    },
    {
      type: 'image',
      shot: { image: features, alt: 'Features page listing each capability as available or planned' },
      caption: 'The features page separates what works today from what is still planned.',
      size: 'wide',
    },
    {
      type: 'list',
      label: 'Built for trust',
      title: 'Careful about who sees what, and what gets claimed.',
      items: [
        'Eight roles, from landowners and community groups to GIS analysts, field officers, MRV specialists and investors, each with their own view of the same map.',
        'Sign-in with e-mail or Google. Accounts are activated after review.',
        'Publishing a project to the public map is a deliberate step, taken only after an administrator has approved it.',
        'The marketplace is for discovering projects, not trading credits. It does not price or issue credits, hold funds or process payments.',
      ],
    },
    {
      type: 'image',
      shot: { image: marketplace, alt: 'Carbon project marketplace page explaining what it does and does not do' },
      size: 'wide',
    },
  ],
  seo: {
    title: 'Cypher Green Systems — environmental project and GIS platform',
    description:
      'How Forge Eleven co-founder Eric Mwendwa built Cypher Green Systems: a map-first platform for environmental project management, field monitoring and carbon project discovery.',
  },
}
