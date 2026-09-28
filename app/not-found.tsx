import Link from 'next/link'
import Arrow from '@/components/ui/Arrow'

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[85svh] flex-col justify-center pt-(--header-h)">
      <p className="t-meta text-mute">404</p>
      <h1 className="t-h1 mt-6 max-w-[14ch]">This page wasn’t forged.</h1>
      <p className="t-lead mt-8 max-w-[40ch] text-mute">The link may be old, or the address mistyped. The work is still here.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Back home <Arrow />
        </Link>
        <Link href="/work" className="btn btn-ghost">
          See the work
        </Link>
      </div>
    </section>
  )
}
