import Lines from '@/components/motion/Lines'
import { principles, tools } from '@/lib/content'
import { studio } from '@/lib/site'

export default function Studio() {
  return (
    <section id="studio" aria-labelledby="studio-title" className="section-y">
      <div className="container-x grid gap-8 md:grid-cols-12">
        <p className="t-meta text-mute md:col-span-3" data-reveal>
          Studio
        </p>
        <div className="md:col-span-9">
          <h2 id="studio-title" className="t-h2" data-reveal="lines">
            <Lines lines={['A small studio,', <span key="p" className="text-mute">on purpose.</span>]} />
          </h2>
          <div className="t-lead mt-10 max-w-[46ch] space-y-6">
            <p data-reveal>
              {studio.founder ? `Forge Eleven is ${studio.founder}’s independent studio. ` : 'Forge Eleven is an independent studio. '}
              The person who designs your site is the person who builds it, so nothing gets lost between the mockup and the code.
            </p>
            <p className="text-mute" data-reveal>
              I care about the parts clients never see: how a page performs on a cheap phone, who can read which rows in the database,
              and what happens when the network drops mid-form. That’s usually where a site wins or loses trust.
            </p>
          </div>
          {studio.founder && (
            <p className="mt-10 text-sm text-mute" data-reveal>
              <span className="text-bone">{studio.founder}</span>, {studio.founderRole}
            </p>
          )}
        </div>
      </div>

      <div className="container-x mt-[clamp(4rem,9vw,8rem)] grid gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => (
          <div
            key={p.title}
            data-reveal
            style={{ '--delay': `${i * 90}ms` } as React.CSSProperties}
            className="border-t border-line py-8 pr-4"
          >
            <p className="t-meta text-ember">{String(i + 1).padStart(2, '0')}</p>
            <h3 className="mt-5 text-xl font-medium tracking-[-0.02em]">{p.title}</h3>
            <p className="mt-3 text-mute">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="container-x mt-12 flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-baseline md:gap-12" data-reveal>
        <p className="t-meta shrink-0 text-mute">Works with</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-bone">
          {tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
