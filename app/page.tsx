import Hero from '@/components/home/Hero'
import Reel from '@/components/home/Reel'
import SelectedWork from '@/components/home/SelectedWork'
import Services from '@/components/home/Services'
import Process from '@/components/home/Process'
import Studio from '@/components/home/Studio'
import Contact from '@/components/home/Contact'
import { projects } from '@/lib/projects'

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

  return (
    <>
      <Hero />
      <Reel items={reel} />
      <SelectedWork />
      <Services />
      <Process />
      <Studio />
      <Contact />
    </>
  )
}
