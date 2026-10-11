/**
 * THE FOUNDERS
 * ------------------------------------------------------------------
 * The two people behind Forge Eleven. Their selected work is not listed
 * here: it is derived from `owner` in lib/projects, so attributing a
 * project to a founder updates the team section automatically.
 */

export type FounderId = 'ndere' | 'eric'

export interface Founder {
  id: FounderId
  name: string
  /** How the founder is credited on project cards. */
  short: string
  role: string
  bio: string
  /** What each founder tends to lead; proven by their projects. */
  strengths: string[]
  email: string
  /** The founder's own site or profile; `label` is the link text. */
  portfolio: { label: string; url: string }
}

export const founders: Founder[] = [
  {
    id: 'ndere',
    name: 'Fidelis Ndereba',
    short: 'Ndere',
    role: 'Co-founder · Design & product engineering',
    bio: 'Leads brand-led websites and multi-role products, from art direction and motion through to the database rules that keep each user’s data their own.',
    strengths: ['Interface & motion design', 'React & Next.js', 'Supabase & PostgreSQL', 'Row-level security', 'End-to-end testing'],
    email: 'ndereba2business@gmail.com',
    portfolio: { label: 'Ndere’s GitHub', url: 'https://github.com/ndereba2business-glitch' },
  },
  {
    id: 'eric',
    name: 'Eric Mwendwa',
    short: 'Eric',
    role: 'Co-founder · Systems & platform engineering',
    bio: 'Builds the systems a business runs on: storefronts with accounts and order tracking, ordering with a staff side, and map-based platforms. Brings a GIS and data background to product work.',
    strengths: ['Business systems', 'E-commerce & ordering', 'Next.js & Tailwind CSS', 'GIS & mapping', 'Accounts & access control'],
    email: 'Ericcatalyst5948@gmail.com',
    portfolio: { label: 'Eric’s portfolio', url: 'https://erictechy-web.netlify.app/' },
  },
]

export const getFounder = (id: FounderId) => founders.find((f) => f.id === id)!

/** Credit line for a project owner. */
export function creditFor(owner: FounderId | 'studio') {
  return owner === 'studio' ? 'Forge Eleven' : getFounder(owner).name
}
