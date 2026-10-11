import Image from 'next/image'
import Link from 'next/link'
import { featuredProjects, moreProjects, projectNumber, projects } from '@/lib/projects'
import { creditFor } from '@/lib/team'
import Parallax from '@/components/motion/Parallax'
import Lines from '@/components/motion/Lines'
import StatusTag from '@/components/work/StatusTag'
import Arrow from '@/components/ui/Arrow'

export default function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="section-y">
      <div className="container-x grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="t-meta text-mute" data-reveal>
            Selected work · {featuredProjects.length} of {projects.length}
          </p>
          <h2 id="work-title" className="t-h2 mt-6" data-reveal="lines">
            <Lines lines={['Built, shipped,', 'and online.']} />
          </h2>
        </div>
        <p className="max-w-[40ch] text-mute md:col-span-4 md:col-start-9" data-reveal>
          Platforms, stores, booking sites and the systems behind them. Every project is live. Open one on your phone and try it.
        </p>
      </div>

      <div className="mt-[clamp(4rem,9vw,8rem)] flex flex-col gap-[clamp(5rem,11vw,10rem)]">
        {featuredProjects.map((project, i) => {
          const flip = i % 2 === 1
          return (
            <article key={project.slug} className="container-x grid gap-8 md:grid-cols-12 md:items-center md:gap-6">
              <Link
                href={`/work/${project.slug}`}
                aria-label={`${project.name} case study`}
                className={`group block md:col-span-8 ${flip ? 'md:col-start-5 md:row-start-1' : ''}`}
                tabIndex={-1}
                data-cursor-label="View"
              >
                <div data-reveal="clip" className="relative aspect-[16/10] overflow-clip bg-ink-2 outline outline-1 -outline-offset-1 outline-line">
                  <div className="absolute inset-0">
                    <Parallax amount={10} className="h-full">
                      <Image
                        src={project.cover.image}
                        alt={project.cover.alt}
                        fill
                        sizes="(min-width: 768px) 66vw, 100vw"
                        placeholder="blur"
                        className="scale-110 object-cover object-top transition-transform duration-[1.4s] ease-(--ease-out-expo) group-hover:scale-[1.14]"
                      />
                    </Parallax>
                  </div>
                </div>
              </Link>

              <div className={`md:col-span-4 ${flip ? 'md:col-start-1 md:row-start-1 md:pr-6' : 'md:pl-6'}`}>
                <p className="t-meta flex gap-3 text-mute" data-reveal>
                  <span className="text-ember">{projectNumber(project.slug)}</span>
                  <span>{project.kind}</span>
                </p>
                <h3 className="t-h3 mt-5" data-reveal>
                  <Link href={`/work/${project.slug}`} className="link-draw">
                    {project.name}
                  </Link>
                </h3>
                <p className="mt-5 max-w-[42ch] text-mute" data-reveal>
                  {project.summary}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2" data-reveal>
                  {project.capabilities.map((c) => (
                    <li key={c} className="t-meta text-mute">
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-line pt-5 text-sm" data-reveal>
                  <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <StatusTag {...project.status} />
                    <span className="text-mute">Led by {creditFor(project.owner)}</span>
                  </span>
                  <Link href={`/work/${project.slug}`} className="group/cta inline-flex items-center gap-2">
                    Read the case study <Arrow className="text-ember transition-transform group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {moreProjects.length > 0 && (
        <div className="container-x mt-[clamp(5rem,11vw,10rem)]">
          <div className="flex items-end justify-between gap-6 pb-6">
            <h3 className="t-meta text-mute" data-reveal>
              More work
            </h3>
            <Link href="/work" className="link-draw inline-flex items-center gap-2 text-sm" data-reveal>
              All {projects.length} projects <Arrow className="text-ember" />
            </Link>
          </div>
          <ul className="grid border-t border-line sm:grid-cols-2">
            {moreProjects.map((project, i) => (
              <li key={project.slug} data-reveal style={{ '--delay': `${(i % 2) * 90}ms` } as React.CSSProperties}>
                <Link
                  href={`/work/${project.slug}`}
                  data-cursor-label="View"
                  className={`group grid grid-cols-[5.5rem_1fr_auto] items-center gap-5 border-b border-line py-5 sm:grid-cols-[7.5rem_1fr_auto] ${
                    i % 2 === 0 ? 'sm:border-r sm:pr-6' : 'sm:pl-6'
                  }`}
                >
                  <span className="relative block aspect-[4/3] overflow-clip bg-ink-2 outline outline-1 -outline-offset-1 outline-line">
                    <Image
                      src={project.cover.image}
                      alt=""
                      fill
                      sizes="120px"
                      placeholder="blur"
                      className="object-cover object-top transition-transform duration-700 ease-(--ease-out-expo) group-hover:scale-105"
                    />
                  </span>
                  <span>
                    <span className="block text-lg font-medium tracking-[-0.015em]">{project.name}</span>
                    <span className="mt-1 block text-sm text-mute">
                      {project.kind} · {creditFor(project.owner)}
                    </span>
                  </span>
                  <Arrow className="text-mute transition-[transform,color] duration-500 group-hover:translate-x-1 group-hover:text-ember" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
