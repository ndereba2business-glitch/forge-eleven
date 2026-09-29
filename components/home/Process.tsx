import Lines from '@/components/motion/Lines'
import { process } from '@/lib/content'

export default function Process() {
  return (
    <section aria-labelledby="process-title" className="section-y bg-ink-2">
      <div className="container-x grid gap-8 md:grid-cols-12">
        <p className="t-meta text-mute md:col-span-3" data-reveal>
          Process
        </p>
        <div className="md:col-span-9">
          <h2 id="process-title" className="t-h2" data-reveal="lines">
            <Lines lines={['How a project runs.']} />
          </h2>
          <p className="mt-6 max-w-[48ch] text-mute" data-reveal>
            Five steps with something concrete at the end of each, so you always know where the project stands and what comes next.
          </p>
        </div>
      </div>

      <div className="container-x mt-[clamp(3rem,7vw,6rem)]">
        <div aria-hidden="true" className="draw-on-scroll hidden h-px bg-ember md:block" />
        <ol className="grid md:grid-cols-5 md:gap-6">
          {process.map((step, i) => (
            <li
              key={step.name}
              data-reveal
              style={{ '--delay': `${i * 90}ms` } as React.CSSProperties}
              className="grid grid-cols-[3rem_1fr] gap-y-3 border-t border-line py-8 md:block md:border-t-0 md:pt-8"
            >
              <span className="t-meta pt-1.5 text-ember">{String(i + 1).padStart(2, '0')}</span>
              <div className="md:mt-6">
                <h3 className="text-2xl font-medium tracking-[-0.025em]">{step.name}</h3>
                <p className="mt-3 text-mute">{step.body}</p>
                <p className="t-meta mt-5 text-bone">→ {step.output}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
