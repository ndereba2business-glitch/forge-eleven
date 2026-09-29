/**
 * FORGE ELEVEN — STUDIO FACTS
 * ------------------------------------------------------------------
 * Every fact about the studio that the site shows lives here. Leave a
 * value empty and the UI hides whatever depends on it, so the site never
 * shows a placeholder or a made-up detail.
 */

export const site = {
  name: 'Forge Eleven',
  /** Canonical origin, no trailing slash. Override per deployment with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://forge-eleven.vercel.app').replace(/\/$/, ''),
  title: 'Forge Eleven — Web design & development studio in Kenya',
  description:
    'Forge Eleven designs and builds websites, online stores, booking sites and web applications — from the first sketch to a fast, secure launch.',
  locale: 'en_KE',
  location: { city: 'Meru', country: 'Kenya', countryCode: 'KE' },
  founded: '2024',
}

export const studio = {
  /**
   * The founder's name, shown in the Studio section and structured data.
   * Empty → the section speaks in the studio's voice instead.
   */
  founder: 'Fidelis Ndereba',
  founderRole: 'Founder, designer & developer',
}

export const contact = {
  email: 'ndereba2business@gmail.com',
  /**
   * WhatsApp number in international format, digits only, e.g. '2547XXXXXXXX'.
   * Empty → the WhatsApp button is hidden (a wa.me link with no number
   * can't reach the studio).
   */
  whatsapp: '254745849789',
  whatsappMessage: 'Hi Forge Eleven, I have a project I’d like to talk about.',
}

/** Options on the enquiry form; the API only accepts these values. */
export const PROJECT_TYPES = ['Website', 'Web app', 'Online store', 'Booking site', 'Something else'] as const

export const socials = [
  { label: 'GitHub', url: 'https://github.com/ndereba2business-glitch' },
] as const

export function whatsappLink(message = contact.whatsappMessage) {
  return contact.whatsapp ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}` : ''
}

export const absoluteUrl = (path = '/') => `${site.url}${path.startsWith('/') ? path : `/${path}`}`
