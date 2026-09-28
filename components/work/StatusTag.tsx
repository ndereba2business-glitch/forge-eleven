import type { StatusTone } from '@/lib/projects'

const TONE: Record<StatusTone, string> = {
  live: 'text-[#4ade80] shadow-[0_0_0_3px_rgb(74_222_128/0.18)]',
  concept: 'text-mute',
  pitch: 'text-ember',
}

export default function StatusTag({ label, tone, className = '' }: { label: string; tone: StatusTone; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-sm text-bone ${className}`}>
      <span className={`dot ${TONE[tone]}`} aria-hidden="true" />
      {label}
    </span>
  )
}
