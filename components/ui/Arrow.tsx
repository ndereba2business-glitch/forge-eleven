type Direction = 'right' | 'up-right' | 'down'

const PATHS: Record<Direction, string> = {
  right: 'M3 8h10m-4-4 4 4-4 4',
  'up-right': 'M4.5 11.5 11.5 4.5M5.5 4.5h6v6',
  down: 'M8 3v10m-4-4 4 4 4-4',
}

export default function Arrow({ direction = 'right', className = '' }: { direction?: Direction; className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`arrow h-4 w-4 shrink-0 ${className}`}>
      <path d={PATHS[direction]} stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
