import { ImageResponse } from 'next/og'

export const alt = 'Forge Eleven — websites and web products, built to move businesses forward.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#0b0b0a',
          color: '#ece8e0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <path d="M3.5 5.5 12 18.5M12 5.5 3.5 18.5" stroke="#ece8e0" strokeWidth="2.4" />
            <path d="M18.5 5.5v13" stroke="#ff5b24" strokeWidth="2.4" />
          </svg>
          <div style={{ fontSize: 34, letterSpacing: '-0.02em' }}>Forge Eleven</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 76, lineHeight: 1.02, letterSpacing: '-0.03em' }}>
          <div>Websites and web products,</div>
          <div>built to move businesses</div>
          <div style={{ color: '#ff5b24' }}>forward.</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#a39e94' }}>
          <div>Design &amp; engineering studio</div>
          <div>Based in Kenya</div>
        </div>
      </div>
    ),
    size
  )
}
