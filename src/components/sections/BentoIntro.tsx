import { useThemeTransition } from '../../context/ThemeContext'

export function BentoIntro() {
  const { theme } = useThemeTransition()
  if (theme !== 'neo-dark') return null

  const cardBase: React.CSSProperties = {
    borderRadius: '0.75rem',
    padding: '2rem',
    border: '1px solid var(--color-base-300)',
    background: 'color-mix(in oklab, var(--color-base-200) 60%, transparent)',
    backdropFilter: 'blur(12px)',
    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
    position: 'relative',
    overflow: 'hidden',
  }

  return (
    <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', marginBottom: '80px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px',
        }}
      >
        {/* Card A: Powered by Passion */}
        <div
          style={{
            ...cardBase,
            gridColumn: 'span 7 / span 7',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '360px',
          }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '2rem', opacity: 0.1, pointerEvents: 'none' }}>
            <span style={{ fontSize: '120px', color: 'var(--color-primary)' }}>⚡</span>
          </div>
          <h2
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: '2rem',
              fontWeight: 600,
              lineHeight: 1.3,
              color: 'var(--color-primary)',
              textShadow: '0 0 10px rgba(117,255,158,0.3)',
              margin: '0 0 1.5rem 0',
            }}
          >
            Powered by Passion<br />and Enthusiasm
          </h2>
          <p
            style={{
              margin: 0,
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: 'var(--color-base-content)',
              opacity: 0.7,
              maxWidth: '576px',
            }}
          >
            I love leaning into new tech and incorporating my learnings into my developer flow, but I also appreciate the stability and merit of long standing paradigms.
          </p>
        </div>

        {/* Card B: Bio */}
        <div
          style={{
            ...cardBase,
            gridColumn: 'span 5 / span 5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                width: '3rem',
                height: '3rem',
                background: 'color-mix(in oklab, var(--color-primary) 10%, transparent)',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: 'var(--color-primary)',
              }}
            >
              ✨
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                lineHeight: 1.5,
                color: 'var(--color-base-content)',
                opacity: 0.7,
              }}
            >
              I am currently working on a few projects that I am excited to share with you. I am always open to new opportunities and would love to hear from you.
            </p>
          </div>
          <div
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid var(--color-base-300)',
              marginTop: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                border: '2px solid color-mix(in oklab, var(--color-primary) 20%, transparent)',
                background: 'var(--color-base-200)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                color: 'var(--color-primary)',
                fontFamily: "'Geist', sans-serif",
                fontSize: '0.9rem',
              }}
            >
              VR
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 700, color: 'var(--color-base-content)', fontFamily: "'Geist', sans-serif" }}>
                Victor Reyes
              </p>
              <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--color-base-content)', opacity: 0.6, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.02em' }}>
                {'// Full Stack Engineer'}
              </p>
            </div>
          </div>
        </div>

        {/* Card C: Tech Stack */}
        <div
          style={{
            ...cardBase,
            gridColumn: 'span 12 / span 12',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
              opacity: 0.6,
              filter: 'grayscale(1)',
            }}
          >
            {[
              { icon: '🗄️', label: 'PostgreSQL' },
              { icon: '⚛️', label: 'React / Next.js' },
              { icon: '🟢', label: 'Node.js' },
              { icon: '☁️', label: 'AWS Infrastructure' },
              { icon: '🔒', label: 'OAuth 2.0' },
            ].map((tech) => (
              <div
                key={tech.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.875rem',
                  color: 'var(--color-base-content)',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{tech.icon}</span>
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BentoIntro
