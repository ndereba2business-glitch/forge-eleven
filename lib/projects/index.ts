/**
 * PROJECTS — THE SINGLE SOURCE OF TRUTH
 * ------------------------------------------------------------------
 * Every place a project appears (home showreel, selected work, the Work
 * index and its filters, case-study pages, founder cards, the sitemap,
 * share images and structured data) reads from this list.
 *
 * To change a project: edit its file in this folder.
 * To add one:          copy a file, fill it in, and add it to `projects`.
 * To reorder:          move it in the array below.
 */
import type { FounderId } from '@/lib/team'
import { CATEGORIES, type Category, type Project } from './types'

import { farmersConnect } from './farmers-connect'
import { cypherGreenSystems } from './cypher-green-systems'
import { arenaHomes } from './arena-homes'
import { frontpageSupermarket } from './frontpage-supermarket'
import { lionLegacy } from './lion-legacy'
import { kingangiHotel } from './kingangi-hotel'
import { blackPerch } from './black-perch'
import { summertimeGrooming } from './summertime-grooming'

export * from './types'

/** In display order. Featured projects lead the home page. */
export const projects: Project[] = [
  farmersConnect,
  cypherGreenSystems,
  arenaHomes,
  frontpageSupermarket,
  lionLegacy,
  kingangiHotel,
  blackPerch,
  summertimeGrooming,
]

export const featuredProjects = projects.filter((p) => p.featured)
export const moreProjects = projects.filter((p) => !p.featured)

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

export function nextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug)
  return projects[(i + 1) % projects.length]
}

export const projectsBy = (founder: FounderId) => projects.filter((p) => p.owner === founder)

/** Two-digit position in the full list, e.g. "03". */
export const projectNumber = (slug: string) => String(projects.findIndex((p) => p.slug === slug) + 1).padStart(2, '0')

/** Categories that at least one project uses, in their defined order. */
export const activeCategories: Category[] = CATEGORIES.filter((c) => projects.some((p) => p.categories.includes(c)))

/** Honest headline numbers, derived from the data rather than typed in. */
export const studioFacts = {
  projects: projects.length,
  live: projects.filter((p) => p.liveUrl).length,
  sectors: new Set(projects.map((p) => p.sector)).size,
}

/** Links shown on a case study, derived from the project's URLs. */
export function projectLinks(p: Project) {
  return [
    { label: 'Visit the live site', url: p.liveUrl },
    ...(p.repoUrl ? [{ label: 'Source on GitHub', url: p.repoUrl }] : []),
  ]
}
