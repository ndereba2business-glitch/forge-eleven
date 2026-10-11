import Lines from '@/components/motion/Lines'
import Arrow from '@/components/ui/Arrow'
import ContactForm from '@/components/home/ContactForm'
import { contact, site, whatsappLink } from '@/lib/site'

export default function Contact() {
  const wa = whatsappLink()
  const channels = [
    ...(wa ? [{ label: 'WhatsApp', value: 'Message the studio', href: wa, external: true }] : []),
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, external: false },
    { label: 'Call', value: contact.phone.display, href: `tel:${contact.phone.tel}`, external: false },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y border-t border-line">
      <div className="container-x">
        <p className="t-meta text-mute" data-reveal>
          Contact
        </p>
        <h2 id="contact-title" className="t-display mt-6" data-reveal="lines">
          <Lines lines={['Have a project', <>in mind<span className="text-ember">?</span></>]} />
        </h2>
      </div>

      <div className="container-x mt-[clamp(3rem,7vw,6rem)] grid gap-16 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-4">
          <p className="t-lead max-w-[30ch] text-mute" data-reveal>
            Tell us what you’re building. A new site, a rebuild, or a system your business needs. One of us will reply personally.
          </p>

          <ul className="mt-10 border-t border-line" data-reveal>
            {channels.map((c) => (
              <li key={c.label} className="border-b border-line">
                <a
                  href={c.href}
                  {...(c.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span>
                    <span className="t-meta block text-mute">{c.label}</span>
                    <span className="mt-1 block break-all">{c.value}</span>
                  </span>
                  <Arrow direction="up-right" className="text-ember transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
          <p className="t-meta mt-6 text-mute" data-reveal>
            Based in {site.location.country}
          </p>
        </div>

        <div className="relative md:col-span-7 md:col-start-6" data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
