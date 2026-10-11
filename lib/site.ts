/**
 * FORGE ELEVEN — STUDIO FACTS
 * ------------------------------------------------------------------
 * Every fact about the studio that the site shows lives here (the
 * founders are in lib/team.ts, the work in lib/projects). Leave a value
 * empty and the UI hides whatever depends on it, so the site never shows
 * a placeholder or a made-up detail.
 */

export const site = {
  name: 'Forge Eleven',
  /** Canonical origin, no trailing slash. Override per deployment with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://forge-eleven.vercel.app').replace(/\/$/, ''),
  title: 'Forge Eleven — Web design & development studio in Kenya',
  description:
    'Forge Eleven is a two-founder studio in Kenya. We design and build websites, web applications, online stores and the systems businesses run on.',
  locale: 'en_KE',
  location: { country: 'Kenya', countryCode: 'KE' },
  founded: '2024',
}

/** Studio contact lines. Founders’ own details live in lib/team.ts. */
export const contact = {
  email: 'ndereba2business@gmail.com',
  /**
   * WhatsApp number in international format, digits only, e.g. '2547XXXXXXXX'.
   * Empty → the WhatsApp button is hidden.
   */
  whatsapp: '254745849789',
  whatsappMessage: 'Hi Forge Eleven, I have a project I’d like to talk about.',
  /** Second studio line, for calls. `tel` is the dialable form. */
  phone: { display: '+254 110 966 455', tel: '+254110966455' },
}

/** Options on the enquiry form; the API only accepts these values. */
export const PROJECT_TYPES = ['Website', 'Web app', 'Online store', 'Booking site', 'Business system', 'Something else'] as const

export const socials = [{ label: 'GitHub', url: 'https://github.com/ndereba2business-glitch' }] as const

export function whatsappLink(message = contact.whatsappMessage) {
  return contact.whatsapp ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}` : ''
}

export const absoluteUrl = (path = '/') => `${site.url}${path.startsWith('/') ? path : `/${path}`}`
