import Link from 'next/link'
import Lines from '@/components/motion/Lines'
import { services } from '@/lib/content'

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-y border-t border-line">
      <div className="container-x grid gap-8 md:grid-cols-12">
        <p className="t-meta text-mute md:col-span-3" data-reveal>
          Services
        </p>
        <h2 id="services-title" className="t-h2 md:col-span-9" data-reveal="lines">
          <Lines lines={['What you can', 'hire Forge Eleven for.']} />
        </h2>
      </div>

      <ol className="container-x mt-[clamp(3rem,7vw,6rem)]">
        {services.map((s, i) => (
          <li
            key={s.title}
            data-reveal
            className="grid gap-5 border-t border-line py-10 last:border-b md:grid-cols-12 md:gap-6 md:py-12"
          >
            <span className="t-meta text-ember md:col-span-1 md:pt-3">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="t-h3 md:col-span-4">{s.title}</h3>
            <div className="md:col-span-4">
              <p className="max-w-[46ch] text-mute">{s.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="border border-line px-2.5 py-1 text-xs text-mute">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3 md:text-right">
              <p className="t-meta text-mute">See it in</p>
              <ul className="mt-3 space-y-1.5">
                {s.proof.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="link-draw text-bone">
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
