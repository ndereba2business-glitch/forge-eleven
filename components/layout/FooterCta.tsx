'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Arrow from '@/components/ui/Arrow'

/** The footer's call to action; the home page already ends on the contact form. */
export default function FooterCta() {
  const pathname = usePathname()
  if (pathname === '/')
    return <p className="t-h3 max-w-[20ch] text-mute">Websites, web apps and business systems, designed and built in Kenya.</p>
  return (
    <>
      <p className="t-h3 max-w-[16ch]">Have a project in mind? Let’s build it.</p>
      <Link href="/#contact" className="btn btn-primary mt-8" data-magnetic>
        Start a project <Arrow />
      </Link>
    </>
  )
}
