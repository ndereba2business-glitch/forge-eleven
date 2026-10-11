import type { Metadata } from 'next'
import Link from 'next/link'
import { activeCategories, projectNumber, projects, studioFacts } from '@/lib/projects'
import { creditFor } from '@/lib/team'
import WorkIndex from '@/components/work/WorkIndex'
import Lines from '@/components/motion/Lines'
import Arrow from '@/components/ui/Arrow'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Projects by Forge Eleven: web applications, online stores, business systems and booking sites built by our two founders, each with its real status and a live link.',
  alternates: { canonical: '/work' },
  openGraph: { url: '/work' },
}

export default function WorkPage() {
  const items = projects.map((p) => ({
    slug: p.slug,
    number: projectNumber(p.slug),
    name: p.name,
    kind: p.kind,
    credit: creditFor(p.owner),
    categories: p.categories,
    status: { label: p.status.label, tone: p.status.tone },
    image: p.cover.image,
  }))

  return (
    <>
      <header className="container-x pt-[calc(var(--header-h)+clamp(3rem,8vw,7rem))] pb-[clamp(3rem,7vw,6rem)]">
        <p className="hero-fade t-meta text-mute" style={{ '--delay': '0ms' } as React.CSSProperties}>
          Work · {studioFacts.projects} projects · {studioFacts.sectors} industries
        </p>
        <h1 className="t-display mt-6">
          <Lines lines={['Our work']} hero />
        </h1>
        <p className="hero-fade t-lead mt-10 max-w-[46ch] text-mute" style={{ '--delay': '450ms' } as React.CSSProperties}>
          Everything here was designed and built by Forge Eleven, and every project is live. The status is stated plainly: what’s
          running for a business, what’s our own product, and what’s a concept.
        </p>
      </header>

      <section aria-label="Projects" className="container-x">
        <WorkIndex items={items} categories={activeCategories} />
      </section>

      <section className="container-x section-y grid gap-8 md:grid-cols-12">
        <p className="t-h3 max-w-[22ch] md:col-span-7" data-reveal>
          Your project could be the next case study here.
        </p>
        <div className="md:col-span-4 md:col-start-9 md:self-end" data-reveal>
          <Link href="/#contact" className="btn btn-primary" data-magnetic>
            Start a project <Arrow />
          </Link>
        </div>
      </section>
    </>
  )
}
