import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { contact, PROJECT_TYPES } from '@/lib/site'

const LIMITS = { name: 120, email: 200, message: 5000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

const clean = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '')

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(body.company, 200)) return NextResponse.json({ ok: true })

  const name = clean(body.name, LIMITS.name)
  const email = clean(body.email, LIMITS.email)
  const message = clean(body.message, LIMITS.message)
  const projectType = PROJECT_TYPES.find((t) => t === body.projectType) ?? ''

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return NextResponse.json(
      { error: 'Please add your name, a valid email and a few words about the project.' },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'The form is unavailable right now. Please email instead.' }, { status: 503 })
  }

  const rows = [
    ['From', name],
    ['Email', email],
    ['Project', projectType || '—'],
  ]
    .map(
      ([label, value]) =>
        `<p style="margin:0 0 4px;color:#8a857c;font-size:11px;letter-spacing:.12em;text-transform:uppercase">${label}</p>` +
        `<p style="margin:0 0 20px;font-size:16px">${escapeHtml(value)}</p>`
    )
    .join('')

  const { error } = await new Resend(apiKey).emails.send({
    from: 'Forge Eleven <onboarding@resend.dev>',
    to: process.env.CONTACT_TO_EMAIL || contact.email,
    replyTo: email,
    subject: `New enquiry from ${name}${projectType ? ` — ${projectType}` : ''}`,
    html:
      `<div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0b0b0a;color:#ece8e0">` +
      `<h2 style="margin:0 0 28px;font-size:20px;font-weight:600">New project enquiry</h2>${rows}` +
      `<p style="margin:0 0 4px;color:#8a857c;font-size:11px;letter-spacing:.12em;text-transform:uppercase">Message</p>` +
      `<p style="margin:0;font-size:15px;line-height:1.7;white-space:pre-wrap">${escapeHtml(message)}</p></div>`,
    text: `From: ${name}\nEmail: ${email}\nProject: ${projectType || '—'}\n\n${message}`,
  })

  if (error) {
    console.error('Contact form: Resend error', error)
    return NextResponse.json({ error: 'The message could not be sent. Please try again or email instead.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
