import Lines from '@/components/motion/Lines'
import Arrow from '@/components/ui/Arrow'
import ContactForm from '@/components/home/ContactForm'
import { contact, site, socials, whatsappLink } from '@/lib/site'

export default function Contact() {
  const wa = whatsappLink()

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y border-t border-line">
      <div className="container-x">
        <p className="t-meta text-mute" data-reveal>
          Contact
        </p>
        <h2 id="contact-title" className="t-display mt-6" data-reveal="lines">
          <Lines lines={['Have something', <>worth building<span className="text-ember">?</span></>]} />
        </h2>
      </div>

      <div className="container-x mt-[clamp(3rem,7vw,6rem)] grid gap-16 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-4">
          <p className="t-lead max-w-[30ch] text-mute" data-reveal>
            A new site, a rebuild, or a product idea that needs shaping. Tell me what you’re working on. Every message is read and
            answered personally.
          </p>

          <ul className="mt-10 border-t border-line" data-reveal>
            <li className="border-b border-line">
              <a href={`mailto:${contact.email}`} className="group flex items-center justify-between gap-4 py-5">
                <span>
                  <span className="t-meta block text-mute">Email</span>
                  <span className="mt-1 block break-all">{contact.email}</span>
                </span>
                <Arrow direction="up-right" className="text-ember transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </li>
            {wa && (
              <li className="border-b border-line">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 py-5">
                  <span>
                    <span className="t-meta block text-mute">WhatsApp</span>
                    <span className="mt-1 block">Message directly</span>
                  </span>
                  <Arrow direction="up-right" className="text-ember" />
                </a>
              </li>
            )}
            {socials.map((s) => (
              <li key={s.url} className="border-b border-line">
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 py-5">
                  <span>
                    <span className="t-meta block text-mute">{s.label}</span>
                    <span className="mt-1 block">See the source</span>
                  </span>
                  <Arrow direction="up-right" className="text-ember" />
                </a>
              </li>
            ))}
          </ul>
          <p className="t-meta mt-6 text-mute" data-reveal>
            Based in {site.location.city}, {site.location.country}
          </p>
        </div>

        <div className="relative md:col-span-7 md:col-start-6" data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
