import Image from 'next/image'
import Link from 'next/link'
import Lines from '@/components/motion/Lines'
import Arrow from '@/components/ui/Arrow'
import { principles, tools } from '@/lib/content'
import { projectsBy } from '@/lib/projects'
import { founders } from '@/lib/team'

/**
 * The studio and the two people who run it. Each founder's selected work
 * is read from the project list by owner, so it stays in step with it.
 */
export default function Team() {
  return (
    <section id="studio" aria-labelledby="studio-title" className="section-y">
      <div className="container-x grid gap-8 md:grid-cols-12">
        <p className="t-meta text-mute md:col-span-3" data-reveal>
          Studio
        </p>
        <div className="md:col-span-9">
          <h2 id="studio-title" className="t-h2" data-reveal="lines">
            <Lines lines={['Two minds.', <span key="s" className="text-mute">One studio.</span>]} />
          </h2>
          <div className="t-lead mt-10 max-w-[48ch] space-y-6">
            <p data-reveal>
              Forge Eleven is run by its two founders. Either of us can take a project from the first call to launch, and every
              project has a second person who knows it.
            </p>
            <p className="text-mute" data-reveal>
              That means a second opinion on the hard decisions, a second review before anything ships, and work that keeps moving
              when one calendar fills up.
            </p>
          </div>
        </div>
      </div>

      <div className="container-x mt-[clamp(4rem,9vw,8rem)] grid border-t border-line lg:grid-cols-2">
        {founders.map((founder, i) => {
          const work = projectsBy(founder.id)
          return (
            <article
              key={founder.id}
              className={`flex flex-col border-b border-line py-10 lg:py-14 ${i === 0 ? 'lg:border-r lg:pr-12' : 'lg:pl-12'}`}
            >
              <p className="t-meta flex gap-3 text-mute" data-reveal>
                <span className="text-ember">{String(i + 1).padStart(2, '0')}</span>
                <span>{founder.role}</span>
              </p>
              <h3 className="t-h2 mt-6" data-reveal>
                {founder.name}
              </h3>
              <p className="mt-6 max-w-[46ch] text-mute" data-reveal>
                {founder.bio}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2" data-reveal>
                {founder.strengths.map((s) => (
                  <li key={s} className="border border-line px-2.5 py-1 text-xs text-mute">
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-10" data-reveal>
                <p className="t-meta text-mute">Selected work</p>
                <ul className="mt-4 border-t border-line">
                  {work.map((project) => (
                    <li key={project.slug}>
                      <Link
                        href={`/work/${project.slug}`}
                        data-cursor-label="View"
                        className="group grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 border-b border-line py-3.5"
                      >
                        <span className="relative block aspect-[4/3] overflow-clip bg-ink-2 outline outline-1 -outline-offset-1 outline-line">
                          <Image src={project.cover.image} alt="" fill sizes="72px" placeholder="blur" className="object-cover object-top" />
                        </span>
                        <span>
                          <span className="block font-medium tracking-[-0.01em]">{project.name}</span>
                          <span className="block text-sm text-mute">{project.kind}</span>
                        </span>
                        <Arrow className="text-mute transition-[transform,color] duration-500 group-hover:translate-x-1 group-hover:text-ember" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm lg:mt-auto lg:pt-10" data-reveal>
                <a
                  href={founder.portfolio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw inline-flex items-center gap-1.5 py-1"
                >
                  {founder.portfolio.label}
                  <Arrow direction="up-right" className="h-3 w-3 text-ember" />
                </a>
                <a href={`mailto:${founder.email}`} className="link-draw py-1 text-mute hover:text-bone">
                  Email {founder.short}
                </a>
              </div>
            </article>
          )
        })}
      </div>

      <div className="container-x mt-[clamp(4rem,9vw,8rem)]">
        <h3 className="t-meta text-mute" data-reveal>
          How we work
        </h3>
        <div className="mt-6 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <div key={p.title} data-reveal style={{ '--delay': `${i * 90}ms` } as React.CSSProperties} className="border-t border-line py-8 pr-4">
              <p className="t-meta text-ember">{String(i + 1).padStart(2, '0')}</p>
              <h4 className="mt-5 text-xl font-medium tracking-[-0.02em]">{p.title}</h4>
              <p className="mt-3 text-mute">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container-x mt-12 flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-baseline md:gap-12" data-reveal>
        <p className="t-meta shrink-0 text-mute">We work with</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-bone">
          {tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
