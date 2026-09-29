import { proof } from '@/lib/content'
import Mark from '@/components/ui/Mark'

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {proof.map((p) => (
        <li key={p.text} className="flex shrink-0 items-center">
          <span className="flex items-baseline gap-3 px-8 whitespace-nowrap md:px-12">
            <span className="text-[clamp(1.75rem,1.2rem+2vw,3rem)] font-medium tracking-[-0.04em] text-ember">{p.figure}</span>
            <span className="text-[clamp(1.05rem,0.9rem+0.6vw,1.5rem)] tracking-[-0.02em] text-bone">{p.text}</span>
            <span className="t-meta text-mute">{p.project}</span>
          </span>
          <Mark className="h-3.5 w-3.5 shrink-0 text-faint" />
        </li>
      ))}
    </ul>
  )
}

/**
 * A moving band of countable facts from the real projects. Pauses on
 * hover; with reduced motion it becomes a normal scrollable row.
 */
export default function ProofTicker() {
  return (
    <section aria-label="Proof from the work" className="group relative overflow-clip border-y border-line py-7 md:py-9">
      <div className="ticker flex w-max group-hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent md:w-32" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent md:w-32" />
    </section>
  )
}
