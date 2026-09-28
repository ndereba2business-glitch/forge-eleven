'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Mark from '@/components/ui/Mark'
import { contact, whatsappLink } from '@/lib/site'
import { lockScroll } from '@/lib/scroll'
import { NAV } from '@/lib/nav'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Solid background once the page moves; tuck away while reading down.
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      setHidden(y > 240 && y > last + 2 ? true : y < last - 2 ? false : (h) => h)
      last = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    lockScroll(open)
    if (!open) return
    const menu = menuRef.current
    menu?.querySelector<HTMLElement>('a')?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
      // Keep keyboard focus inside the menu and its toggle.
      if (e.key === 'Tab' && menu) {
        const items = [buttonRef.current, ...menu.querySelectorAll<HTMLElement>('a')].filter(Boolean) as HTMLElement[]
        const i = items.indexOf(document.activeElement as HTMLElement)
        const next = e.shiftKey ? (i <= 0 ? items.length - 1 : i - 1) : i === items.length - 1 ? 0 : i + 1
        e.preventDefault()
        items[next].focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      lockScroll(false)
    }
  }, [open])

  const wa = whatsappLink()
  const isCurrent = (href: string) => (href === '/work' ? pathname.startsWith('/work') : false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-(--ease-out-expo) ${
          hidden && !open ? '-translate-y-full' : 'translate-y-0'
        } ${scrolled && !open ? 'border-b border-line bg-ink/85 backdrop-blur-md' : 'border-b border-transparent'}`}
      >
        <div className="container-x flex h-(--header-h) items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-2.5" aria-label="Forge Eleven — home">
            <Mark className="h-5 w-5 text-bone transition-transform duration-700 ease-(--ease-out-expo) group-hover:rotate-90" />
            <span className="text-[0.95rem] font-medium tracking-[-0.02em]">Forge Eleven</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
                className="link-draw py-1 text-sm text-mute transition-colors duration-300 hover:text-bone aria-[current=page]:text-bone"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/#contact" className="btn btn-ghost hidden min-h-10! px-4! text-sm! md:inline-flex">
              Start a project
            </Link>
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="-mr-2 flex h-11 items-center gap-3 px-2 text-sm md:hidden"
            >
              <span>{open ? 'Close' : 'Menu'}</span>
              <span aria-hidden="true" className="relative block h-3 w-5">
                <span className={`absolute left-0 h-px w-full bg-bone transition-transform duration-500 ${open ? 'top-1.5 rotate-45' : 'top-0.5'}`} />
                <span className={`absolute left-0 h-px w-full bg-bone transition-transform duration-500 ${open ? 'top-1.5 -rotate-45' : 'top-2.5'}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col bg-ink pt-(--header-h) md:hidden"
      >
        <nav aria-label="Mobile" className="container-x flex flex-1 flex-col justify-center gap-1">
          {[{ label: 'Home', href: '/' }, ...NAV].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="hero-line t-h2 flex items-baseline gap-4 overflow-clip py-1"
              style={{ '--i': i } as React.CSSProperties}
            >
              <span className="flex items-baseline gap-4">
                <span className="t-meta text-faint">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="container-x flex flex-col gap-2 border-t border-line py-6 text-sm text-mute">
          <a href={`mailto:${contact.email}`} className="py-1 text-bone">
            {contact.email}
          </a>
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="py-1">
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </>
  )
}
