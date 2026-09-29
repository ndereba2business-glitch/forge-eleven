import Link from 'next/link'
import Arrow from '@/components/ui/Arrow'
import { contact, site, socials, whatsappLink } from '@/lib/site'
import { NAV } from '@/lib/nav'
import FooterCta from '@/components/layout/FooterCta'

export default function Footer() {
  const wa = whatsappLink()
  return (
    <footer className="relative overflow-clip border-t border-line">
      <div className="container-x grid gap-12 pt-16 pb-10 md:grid-cols-12 md:pt-24">
        <div className="md:col-span-5">
          <FooterCta />
        </div>

        <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
          <p className="t-meta text-mute">Index</p>
          <ul className="mt-5 space-y-2">
            {[{ label: 'Home', href: '/' }, ...NAV].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-draw py-1 text-bone">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="t-meta text-mute">Contact</p>
          <ul className="mt-5 space-y-2">
            <li>
              <a href={`mailto:${contact.email}`} className="link-draw break-all py-1 text-bone">
                {contact.email}
              </a>
            </li>
            {wa && (
              <li>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="link-draw py-1 text-bone">
                  WhatsApp
                </a>
              </li>
            )}
            {socials.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="link-draw inline-flex items-center gap-1.5 py-1 text-bone">
                  {s.label} <Arrow direction="up-right" className="h-3 w-3" />
                </a>
              </li>
            ))}
            <li className="pt-2 text-mute">
              {site.location.city}, {site.location.country}
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x overflow-clip" aria-hidden="true">
        <p className="-mb-[0.2em] text-[clamp(3.5rem,17.2vw,21rem)] leading-none font-medium tracking-[-0.065em] whitespace-nowrap text-ink-3 select-none">
          Forge Eleven<span className="text-ember">.</span>
        </p>
      </div>

      <div className="container-x flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 t-meta text-mute">
        <span>© {new Date().getFullYear()} Forge Eleven</span>
        <span>Designed &amp; built in-house</span>
      </div>
    </footer>
  )
}
