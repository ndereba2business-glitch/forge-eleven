import Link from 'next/link'
import HeatHeadline from '@/components/home/HeatHeadline'
import Arrow from '@/components/ui/Arrow'
import { projects } from '@/lib/projects'

export default function Hero() {
  const live = projects.find((p) => p.status.tone === 'live')

  return (
    <section className="container-x relative flex min-h-[100svh] flex-col justify-end pt-[calc(var(--header-h)+3rem)] pb-[clamp(2.5rem,6vw,5rem)]">
      <div className="hero-fade flex flex-wrap items-center gap-x-6 gap-y-2 t-meta text-mute" style={{ '--delay': '0ms' } as React.CSSProperties}>
        <span>Design &amp; engineering studio</span>
        <span aria-hidden="true" className="hidden h-px w-10 bg-line-strong sm:block" />
        <span>Based in Kenya</span>
      </div>

      <HeatHeadline lines={['Websites and web', 'products, built to', <>move businesses <span className="text-ember">forward.</span></>]} />

      <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end">
        <p className="hero-fade t-lead max-w-[42ch] text-mute md:col-span-6" style={{ '--delay': '550ms' } as React.CSSProperties}>
          Forge Eleven designs and builds everything from a restaurant’s first impression to a marketplace with four kinds of users.
          The same hands do the design and the code, and ship it.
        </p>

        <div className="hero-fade flex flex-wrap gap-3 md:col-span-6 md:justify-end" style={{ '--delay': '700ms' } as React.CSSProperties}>
          <Link href="#work" className="btn btn-primary" data-magnetic>
            See the work <Arrow direction="down" />
          </Link>
          <Link href="#contact" className="btn btn-ghost" data-magnetic>
            Start a project
          </Link>
        </div>
      </div>

      {live && (
        <Link
          href={`/work/${live.slug}`}
          className="hero-fade group mt-14 flex items-center gap-3 self-start border-t border-line pt-5 text-sm text-mute transition-colors hover:text-bone md:mt-20"
          style={{ '--delay': '850ms' } as React.CSSProperties}
        >
          <span className="dot text-[#4ade80] shadow-[0_0_0_3px_rgb(74_222_128/0.18)]" aria-hidden="true" />
          <span>
            Now shipping: <span className="text-bone">{live.name}</span> · {live.status.label}
          </span>
          <Arrow className="transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </section>
  )
}
