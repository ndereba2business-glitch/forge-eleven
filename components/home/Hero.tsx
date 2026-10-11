import Link from 'next/link'
import HeatHeadline from '@/components/home/HeatHeadline'
import Arrow from '@/components/ui/Arrow'
import { projects, studioFacts } from '@/lib/projects'
import { founders } from '@/lib/team'

export default function Hero() {
  const live = projects.find((p) => p.status.tone === 'live')
  const facts = [
    { figure: studioFacts.live, label: 'Live projects' },
    { figure: studioFacts.sectors, label: 'Industries' },
    { figure: founders.length, label: 'Founders' },
  ]

  return (
    <section className="container-x relative flex min-h-[100svh] flex-col justify-end pt-[calc(var(--header-h)+2rem)] pb-[clamp(2rem,4vw,3rem)]">
      <div className="hero-fade flex flex-wrap items-center gap-x-6 gap-y-2 t-meta text-mute" style={{ '--delay': '0ms' } as React.CSSProperties}>
        <span>Design &amp; engineering studio</span>
        <span aria-hidden="true" className="hidden h-px w-10 bg-line-strong sm:block" />
        <span>Kenya</span>
      </div>

      <HeatHeadline lines={['Websites and web', 'products, built to', <>move businesses <span className="text-ember">forward.</span></>]} />

      <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-12 md:items-end md:gap-6">
        <div className="hero-rise md:col-span-6">
          <p className="t-lead max-w-[42ch] text-mute">
            Forge Eleven is a two-founder studio. We design and build websites, web applications and the systems businesses run
            on, and we ship them.
          </p>
          {live && (
            <Link
              href={`/work/${live.slug}`}
              className="group mt-6 inline-flex items-center gap-3 text-sm text-mute transition-colors hover:text-bone"
            >
              <span className="dot text-[#4ade80] shadow-[0_0_0_3px_rgb(74_222_128/0.18)]" aria-hidden="true" />
              <span>
                Now shipping: <span className="text-bone">{live.name}</span> · {live.status.label}
              </span>
              <Arrow className="transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="hero-fade flex flex-col gap-8 md:col-span-6 md:items-end" style={{ '--delay': '700ms' } as React.CSSProperties}>
          <dl className="order-2 flex gap-8 border-t border-line pt-6 sm:gap-12 md:order-1 md:border-0 md:pt-0">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col-reverse gap-1 md:items-end">
                <dt className="t-meta text-mute">{f.label}</dt>
                <dd className="text-3xl font-medium tracking-[-0.04em]">{f.figure}</dd>
              </div>
            ))}
          </dl>
          <div className="order-1 flex flex-wrap gap-3 md:order-2">
            <Link href="#contact" className="btn btn-primary" data-magnetic>
              Start a project <Arrow />
            </Link>
            <Link href="#work" className="btn btn-ghost" data-magnetic>
              View our work <Arrow direction="down" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
