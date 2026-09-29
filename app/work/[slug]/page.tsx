import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProject, nextProject, projects } from '@/lib/projects'
import { absoluteUrl, site } from '@/lib/site'
import CaseStudyBlocks from '@/components/work/CaseStudyBlocks'
import StatusTag from '@/components/work/StatusTag'
import Parallax from '@/components/motion/Parallax'
import Lines from '@/components/motion/Lines'
import Arrow from '@/components/ui/Arrow'

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<'/work/[slug]'>): Promise<Metadata> {
  const project = getProject((await params).slug)
  if (!project) return {}
  const url = `/work/${project.slug}`
  return {
    title: project.seo.title,
    description: project.seo.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: `${project.seo.title} — Forge Eleven`,
      description: project.seo.description,
      // JPEG, not the WebP cover: WhatsApp and other link previewers handle it reliably.
      images: [{ url: `/og/${project.slug}.jpg`, width: 1200, height: 630, alt: project.cover.alt }],
    },
    twitter: { card: 'summary_large_image', images: [`/og/${project.slug}.jpg`] },
  }
}

export default async function CaseStudyPage({ params }: PageProps<'/work/[slug]'>) {
  const project = getProject((await params).slug)
  if (!project) notFound()
  const next = nextProject(project.slug)
  const number = String(projects.indexOf(project) + 1).padStart(2, '0')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    headline: project.summary,
    description: project.seo.description,
    url: absoluteUrl(`/work/${project.slug}`),
    image: absoluteUrl(project.cover.image.src),
    dateCreated: project.year,
    genre: project.kind,
    keywords: project.stack.join(', '),
    creator: { '@type': 'Organization', name: site.name, url: site.url },
    sameAs: project.links.map((l) => l.url),
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="container-x pt-[calc(var(--header-h)+clamp(3rem,8vw,7rem))]">
        <nav aria-label="Breadcrumb" className="hero-fade t-meta flex items-center gap-3 text-mute" style={{ '--delay': '0ms' } as React.CSSProperties}>
          <Link href="/work" className="link-draw hover:text-bone">
            Work
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-bone">{number}</span>
        </nav>

        <h1 className="t-h1 mt-8 max-w-[14ch]">
          <Lines lines={[project.name]} hero />
        </h1>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
          <p className="hero-fade t-lead max-w-[38ch] text-bone md:col-span-6" style={{ '--delay': '350ms' } as React.CSSProperties}>
            {project.intro}
          </p>

          <dl
            className="hero-fade grid grid-cols-2 gap-x-6 gap-y-7 text-sm md:col-span-5 md:col-start-8"
            style={{ '--delay': '500ms' } as React.CSSProperties}
          >
            <div>
              <dt className="t-meta text-mute">Type</dt>
              <dd className="mt-2">{project.kind}</dd>
            </div>
            <div>
              <dt className="t-meta text-mute">Status</dt>
              <dd className="mt-2">
                <StatusTag {...project.status} className="normal-case tracking-normal" />
              </dd>
            </div>
            <div>
              <dt className="t-meta text-mute">Role</dt>
              <dd className="mt-2 text-mute">
                {project.role.map((r) => (
                  <span key={r} className="block text-bone">
                    {r}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="t-meta text-mute">Year</dt>
              <dd className="mt-2">{project.year}</dd>
            </div>
            <p className="col-span-2 border-t border-line pt-5 text-mute">{project.status.note}</p>
          </dl>
        </div>

        <div className="hero-fade mt-10 flex flex-wrap gap-3" style={{ '--delay': '650ms' } as React.CSSProperties}>
          {project.links.map((link, i) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${i === 0 ? 'btn-primary' : 'btn-ghost'}`}
            >
              {link.label} <Arrow direction="up-right" />
            </a>
          ))}
        </div>
      </header>

      <div className="container-x mt-[clamp(4rem,8vw,7rem)]">
        <div
          className="hero-clip relative aspect-[16/9] overflow-clip bg-ink-2 outline outline-1 -outline-offset-1 outline-line"
          style={{ '--delay': '700ms' } as React.CSSProperties}
        >
          <Parallax amount={10} className="absolute inset-0">
            <Image
              src={project.cover.image}
              alt={project.cover.alt}
              priority
              placeholder="blur"
              sizes="(min-width: 1600px) 1600px, 100vw"
              className="h-full w-full scale-110 object-cover object-top"
            />
          </Parallax>
        </div>
      </div>

      <div className="mt-[clamp(5rem,10vw,9rem)]">
        <CaseStudyBlocks blocks={project.blocks} />
      </div>

      <section className="container-x mt-[clamp(5rem,10vw,9rem)] grid gap-6 border-t border-line pt-10 md:grid-cols-12">
        <h2 className="t-meta text-mute md:col-span-3">Built with</h2>
        <ul className="flex flex-wrap gap-2 md:col-span-8 md:col-start-5">
          {project.stack.map((tech) => (
            <li key={tech} className="border border-line px-3 py-1.5 text-sm text-mute">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <Link
        href={`/work/${next.slug}`}
        className="group relative mt-[clamp(5rem,10vw,9rem)] block overflow-clip border-t border-line"
      >
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-35 group-focus-visible:opacity-35" aria-hidden="true">
          <Image src={next.cover.image} alt="" fill sizes="100vw" className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        </div>
        <div className="container-x relative py-[clamp(4rem,10vw,9rem)]">
          <p className="t-meta text-mute">Next project</p>
          <p className="t-h1 mt-6 flex flex-wrap items-center gap-x-6">
            {next.name}
            <Arrow className="h-[0.5em]! w-[0.5em]! text-ember" />
          </p>
          <p className="mt-6 max-w-[48ch] text-mute">{next.summary}</p>
        </div>
      </Link>
    </article>
  )
}
