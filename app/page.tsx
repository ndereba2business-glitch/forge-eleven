import Hero from '@/components/home/Hero'
import ProofTicker from '@/components/home/ProofTicker'
import Reel from '@/components/home/Reel'
import SelectedWork from '@/components/home/SelectedWork'
import Statement from '@/components/home/Statement'
import Services from '@/components/home/Services'
import Process from '@/components/home/Process'
import Team from '@/components/home/Team'
import Contact from '@/components/home/Contact'
import { featuredProjects, projects } from '@/lib/projects'
import { absoluteUrl, contact, site, socials } from '@/lib/site'
import { founders } from '@/lib/team'

export default function Home() {
  const reel = featuredProjects.map((p) => ({
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
    telephone: contact.phone.tel,
    image: absoluteUrl('/opengraph-image'),
    foundingDate: site.founded,
    address: { '@type': 'PostalAddress', addressCountry: site.location.countryCode },
    areaServed: { '@type': 'Country', name: site.location.country },
    knowsAbout: ['Web design', 'Web development', 'Web applications', 'E-commerce', 'Business systems', 'Booking websites'],
    sameAs: socials.map((s) => s.url),
    founder: founders.map((f) => ({ '@type': 'Person', name: f.name, jobTitle: f.role, url: f.portfolio.url })),
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
      <Team />
      <Contact />
    </>
  )
}
