'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Arrow from '@/components/ui/Arrow'

/** The footer's call to action; the home page already ends on the contact form. */
export default function FooterCta() {
  const pathname = usePathname()
  if (pathname === '/')
    return <p className="t-h3 max-w-[18ch] text-mute">Websites and web products, designed and built in Kenya.</p>
  return (
    <>
      <p className="t-h3 max-w-[16ch]">Have something worth building?</p>
      <Link href="/#contact" className="btn btn-primary mt-8">
        Start a project <Arrow />
      </Link>
    </>
  )
}
