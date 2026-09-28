/** The Forge Eleven mark: "XI", with the one in ember. */
export default function Mark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M3.5 5.5 12 18.5M12 5.5 3.5 18.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
      <path d="M18.5 5.5v13" stroke="var(--color-ember)" strokeWidth="2.4" strokeLinecap="square" />
    </svg>
  )
}
