import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'
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
            Selected work · 01–{String(projects.length).padStart(2, '0')}
          </p>
          <h2 id="work-title" className="t-h2 mt-6" data-reveal="lines">
            <Lines lines={['Built, shipped,', 'and online.']} />
          </h2>
        </div>
        <p className="max-w-[40ch] text-mute md:col-span-4 md:col-start-9" data-reveal>
          A product, a booking site, a storefront and a hospitality experience. Every one is live. Open it on your phone and try it.
        </p>
      </div>

      <div className="mt-[clamp(4rem,9vw,8rem)] flex flex-col gap-[clamp(5rem,11vw,10rem)]">
        {projects.map((project, i) => {
          const flip = i % 2 === 1
          return (
            <article key={project.slug} className="container-x grid gap-8 md:grid-cols-12 md:items-center md:gap-6">
              <Link
                href={`/work/${project.slug}`}
                aria-label={`${project.name} case study`}
                className={`group block md:col-span-8 ${flip ? 'md:col-start-5 md:row-start-1' : ''}`}
                tabIndex={-1}
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
                  <span className="text-ember">{String(i + 1).padStart(2, '0')}</span>
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
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5" data-reveal>
                  <StatusTag {...project.status} />
                  <Link href={`/work/${project.slug}`} className="group/cta inline-flex items-center gap-2 text-sm">
                    Read the case study <Arrow className="text-ember transition-transform group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
