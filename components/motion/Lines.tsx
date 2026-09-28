/**
 * Renders text as masked lines that rise into place.
 * Use with a parent carrying data-reveal="lines" (scroll) or pass `hero`
 * for the CSS entrance animation that plays on load.
 */
export default function Lines({ lines, hero = false, start = 0 }: { lines: React.ReactNode[]; hero?: boolean; start?: number }) {
  return (
    <>
      {lines.map((line, i) => (
        <span
          key={i}
          className={hero ? 'hero-line block overflow-clip pb-[0.08em] -mb-[0.08em]' : 'line'}
          style={{ '--i': i + start } as React.CSSProperties}
        >
          <span>{line}</span>
        </span>
      ))}
    </>
  )
}
