import type { StaticImageData } from 'next/image'
import type { FounderId } from '@/lib/team'

/** Who led the build. 'studio' is for work delivered jointly. */
export type OwnerId = FounderId | 'studio'

/** Filters on the Work page. A project can sit in more than one. */
export const CATEGORIES = ['Web applications', 'E-commerce', 'Business systems', 'Hospitality & booking'] as const
export type Category = (typeof CATEGORIES)[number]

export type StatusTone = 'live' | 'concept' | 'pitch'

export interface Shot {
  image: StaticImageData
  alt: string
  /** Mobile screenshots are shown in a phone-proportioned frame. */
  device?: 'phone'
}

/** Case-study building blocks; each project composes its own story from them. */
export type Block =
  | { type: 'chapter'; label: string; title: string; body: string[] }
  | { type: 'image'; shot: Shot; caption?: string; size?: 'full' | 'wide' }
  | { type: 'phones'; shots: Shot[]; caption?: string }
  | { type: 'features'; label: string; title: string; items: { title: string; body: string }[] }
  | { type: 'decision'; label: string; text: string }
  | { type: 'list'; label: string; title: string; items: string[] }

export interface Project {
  /** URL segment and unique id: /work/<slug>. */
  slug: string
  name: string
  /** Short type label, e.g. "E-commerce storefront". */
  kind: string
  year: string
  owner: OwnerId
  categories: Category[]
  /** Industry served; counted on the home page. */
  sector: string
  /** Featured projects lead the home page and the showreel. */
  featured: boolean
  /** Named only where the work was done for a real business. */
  client?: string
  status: { label: string; tone: StatusTone; note: string }
  /** One sentence: what it is. */
  summary: string
  /** Short paragraph under the title on the case study. */
  intro: string
  services: string[]
  technologies: string[]
  /** Short tags shown on work cards. */
  capabilities: string[]
  liveUrl: string
  repoUrl?: string
  cover: Shot
  /** A quieter secondary frame used in listings. */
  thumb: Shot
  /** First screen on a phone, for mobile showcases. */
  mobile: Shot
  /** Subtle per-project tint for small details only. */
  tint: string
  blocks: Block[]
  seo: { title: string; description: string }
}
