import { useThemeTransition } from '../../context/ThemeContext'

export function Hero() {
  const { theme } = useThemeTransition()
  if (theme !== 'neo-dark') return null

  return (
    <section
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        paddingTop: '40px',
        paddingBottom: '80px',
        position: 'relative',
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: 'absolute', top: '-80px', left: '-80px',
          width: '260px', height: '260px', background: 'var(--color-primary)',
          opacity: 0.05, borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none',
        }}
      />

      <div style={{ textAlign: 'center' as const, maxWidth: '896px', margin: '0 auto' }}>
        {/* Status pill */}
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.35rem 0.85rem', borderRadius: '9999px',
            border: '1px solid var(--color-base-300)',
            background: 'var(--color-base-200)', marginBottom: '1.5rem',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem',
            color: 'var(--color-base-content)', opacity: 0.85,
          }}
        >
          <span style={{ position: 'relative', display: 'flex', width: '0.5rem', height: '0.5rem' }}>
            <span style={{
              position: 'absolute', display: 'inline-flex', width: '100%', height: '100%',
              borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.75,
              animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
            }} />
            <span style={{
              position: 'relative', display: 'inline-flex', width: '0.5rem', height: '0.5rem',
              borderRadius: '50%', background: 'var(--color-primary)',
            }} />
          </span>
          {'// Available for new opportunities'}
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: "'Geist', sans-serif", fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
          fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.04em',
          margin: '0 0 2rem 0',
        }}>
          Welcome to my homepage, learn the{' '}
          <span style={{ color: 'var(--color-primary)', fontStyle: 'italic', fontWeight: 700 }}>
            inner workings
          </span>{' '}
          of a full stack developer
        </h1>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <a href="/portfolio" style={{
            display: 'inline-block', padding: '1rem 2rem',
            background: 'var(--color-primary)', color: '#003918',
            fontWeight: 700, borderRadius: '0.5rem',
            textDecoration: 'none',
            fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em',
            textTransform: 'uppercase' as const, fontSize: '0.8rem',
            transition: 'transform 0.15s, opacity 0.15s',
          }}>
            View My Work
          </a>
          <a href="/contact" style={{
            display: 'inline-block', padding: '1rem 2rem',
            background: 'transparent', color: 'var(--color-base-content)',
            fontWeight: 700, borderRadius: '0.5rem',
            border: '1px solid var(--color-base-300)',
            textDecoration: 'none', fontSize: '0.8rem',
            fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            transition: 'border-color 0.15s, opacity 0.15s',
          }}>
            Get in Touch
          </a>
        </div>

        {/* Dashboard preview image (desktop only) */}
        <div
          style={{
            display: 'none',
            marginTop: '5rem', width: '100%',
            aspectRatio: '21 / 9', borderRadius: '0.75rem',
            border: '1px solid var(--color-base-300)',
            overflow: 'hidden', position: 'relative',
            background: 'var(--color-base-200)',
          }}
          className="hero-dashboard-image"
        >
          <img
            src="/DashboardExample.jpg"
            alt="Dashboard Preview"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              filter: 'blur(3px) brightness(0.7)',
              transform: 'scale(1.05)',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, var(--color-base-100) 0%, transparent 60%)',
            zIndex: 1, pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'color-mix(in oklab, var(--color-primary) 8%, transparent)',
            zIndex: 1, pointerEvents: 'none',
          }} />
        </div>
      </div>
    </section>
  )
}

export default Hero
