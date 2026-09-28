import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import WorkIndex from '@/components/work/WorkIndex'
import Lines from '@/components/motion/Lines'
import Arrow from '@/components/ui/Arrow'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected projects by Forge Eleven: a multi-role farming platform, a booking site, an e-commerce storefront and a hospitality experience, each with its real status.',
  alternates: { canonical: '/work' },
  openGraph: { url: '/work' },
}

export default function WorkPage() {
  const items = projects.map((p) => ({
    slug: p.slug,
    name: p.name,
    kind: p.kind,
    year: p.year,
    summary: p.summary,
    status: { label: p.status.label, tone: p.status.tone },
    image: p.cover.image,
    alt: p.cover.alt,
  }))

  return (
    <>
      <header className="container-x pt-[calc(var(--header-h)+clamp(3rem,8vw,7rem))] pb-[clamp(3rem,7vw,6rem)]">
        <p className="hero-fade t-meta text-mute" style={{ '--delay': '0ms' } as React.CSSProperties}>
          Work · {projects.length} projects
        </p>
        <h1 className="t-display mt-6">
          <Lines lines={['Selected', 'work']} hero />
        </h1>
        <p className="hero-fade t-lead mt-10 max-w-[44ch] text-mute" style={{ '--delay': '450ms' } as React.CSSProperties}>
          Each project was designed and built end to end. The status is stated plainly: what’s live, what’s a concept, and what
          started as a pitch.
        </p>
      </header>

      <section aria-label="Projects" className="container-x">
        <WorkIndex items={items} />
      </section>

      <section className="container-x section-y grid gap-8 md:grid-cols-12">
        <p className="t-h3 max-w-[22ch] md:col-span-7" data-reveal>
          Your project could be the next case study here.
        </p>
        <div className="md:col-span-4 md:col-start-9 md:self-end" data-reveal>
          <Link href="/#contact" className="btn btn-primary">
            Start a project <Arrow />
          </Link>
        </div>
      </section>
    </>
  )
}
