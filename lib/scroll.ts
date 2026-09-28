import type Lenis from 'lenis'

// The active Lenis instance, when smooth scrolling is on.
let instance: Lenis | null = null

export const setLenis = (lenis: Lenis | null) => {
  instance = lenis
}

/** Pause or resume page scrolling (e.g. while the menu is open). */
export function lockScroll(locked: boolean) {
  if (instance) {
    if (locked) instance.stop()
    else instance.start()
  }
  document.documentElement.style.overflow = locked ? 'hidden' : ''
}
