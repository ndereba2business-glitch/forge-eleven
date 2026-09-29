'use client'

import { useState } from 'react'
import Arrow from '@/components/ui/Arrow'
import { contact, PROJECT_TYPES } from '@/lib/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'w-full border-0 border-b border-line-strong bg-transparent py-3 text-lg text-bone placeholder:text-faint transition-colors focus:border-bone focus:outline-none'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || 'The message could not be sent.')
      setStatus('sent')
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'The message could not be sent.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="border border-line p-8 md:p-10">
        <p className="t-meta text-ember">Message sent</p>
        <p className="t-h3 mt-5">Thank you. It’s on its way.</p>
        <p className="mt-4 text-mute">You’ll get a personal reply at the email you gave. Nothing automated.</p>
        <button type="button" onClick={() => setStatus('idle')} className="link-draw mt-8 text-sm">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-9">
      <div className="grid gap-9 sm:grid-cols-2 sm:gap-6">
        <div>
          <label htmlFor="cf-name" className="t-meta text-mute">
            Your name
          </label>
          <input id="cf-name" name="name" required maxLength={120} autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className="t-meta text-mute">
            Email
          </label>
          <input id="cf-email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </div>
      </div>

      <fieldset>
        <legend className="t-meta text-mute">What are you planning?</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {PROJECT_TYPES.map((type) => (
            <label key={type} className="cursor-pointer">
              <input type="radio" name="projectType" value={type} className="peer sr-only" />
              <span className="inline-flex min-h-11 items-center border border-line-strong px-4 text-sm text-mute transition-colors peer-checked:border-bone peer-checked:bg-bone peer-checked:text-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ember hover:border-bone hover:text-bone">
                {type}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="cf-message" className="t-meta text-mute">
          Tell me about it
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={4}
          placeholder="What it is, who it’s for, and roughly when you need it."
          className={`${field} resize-y`}
        />
      </div>

      {/* Honeypot for bots; hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button type="submit" disabled={status === 'sending'} className="btn btn-primary disabled:opacity-60" data-magnetic>
          {status === 'sending' ? 'Sending…' : 'Send enquiry'} <Arrow />
        </button>
        <p role="status" aria-live="polite" className="text-sm text-mute">
          {status === 'error' && (
            <span className="text-[#ff8a65]">
              {error} You can also email{' '}
              <a href={`mailto:${contact.email}`} className="underline">
                {contact.email}
              </a>
              .
            </span>
          )}
        </p>
      </div>
    </form>
  )
}
