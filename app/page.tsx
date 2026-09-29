import Hero from '@/components/home/Hero'
import ProofTicker from '@/components/home/ProofTicker'
import Reel from '@/components/home/Reel'
import SelectedWork from '@/components/home/SelectedWork'
import Statement from '@/components/home/Statement'
import Services from '@/components/home/Services'
import Process from '@/components/home/Process'
import Studio from '@/components/home/Studio'
import Contact from '@/components/home/Contact'
import { projects } from '@/lib/projects'
import { absoluteUrl, contact, site, socials, studio } from '@/lib/site'

export default function Home() {
  const reel = projects.map((p) => ({
    slug: p.slug,
    name: p.name,
    kind: p.kind,
    cover: p.cover.image,
    coverAlt: p.cover.alt,
    mobile: p.mobile.image,
    mobileAlt: p.mobile.alt,
  }))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${site.url}/#studio`,
    name: site.name,
    url: site.url,
    description: site.description,
    email: contact.email,
    image: absoluteUrl('/opengraph-image'),
    foundingDate: site.founded,
    address: { '@type': 'PostalAddress', addressLocality: site.location.city, addressCountry: site.location.countryCode },
    areaServed: { '@type': 'Country', name: site.location.country },
    knowsAbout: ['Web design', 'Web development', 'Web applications', 'E-commerce', 'Booking websites', 'UI/UX design'],
    sameAs: socials.map((s) => s.url),
    ...(studio.founder && { founder: { '@type': 'Person', name: studio.founder } }),
    subjectOf: projects.map((p) => ({ '@type': 'CreativeWork', name: p.name, url: absoluteUrl(`/work/${p.slug}`) })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <ProofTicker />
      <Reel items={reel} />
      <SelectedWork />
      <Statement />
      <Services />
      <Process />
      <Studio />
      <Contact />
    </>
  )
}
