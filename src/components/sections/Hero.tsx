import { useThemeTransition } from '../../context/ThemeContext'

const homeData = {
  heading: "Welcome to my homepage, learn the inner workings of a full stack developer",
  description:
    "I love leaning into new tech and incorporating my learnings into my developer flow, but I also appreciate the stability and merit of long standing paradigms. I am currently working on a few projects that I am excited to share with you. I am always open to new opportunities and would love to hear from you.",
  graphicText: "Powered by Passion and Enthusiasm",
}

export function Hero() {
  const { theme } = useThemeTransition()

  if (theme !== 'neo-dark') return null

  return (
    <section
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        marginBottom: '80px',
        position: 'relative',
      }}
    >
      {/* Decorative glow blob */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          left: '-80px',
          width: '260px',
          height: '260px',
          background: 'var(--color-primary)',
          opacity: 0.05,
          borderRadius: '50%',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '896px' }}>
        {/* Status pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            border: '1px solid var(--color-base-300)',
            background: 'var(--color-base-200)',
            marginBottom: '1.5rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
            color: 'var(--color-base-content)',
            opacity: 0.85,
          }}
        >
          <span style={{ position: 'relative', display: 'flex', width: '0.5rem', height: '0.5rem' }}>
            <span
              style={{
                position: 'absolute',
                display: 'inline-flex',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                opacity: 0.75,
                animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
              }}
            />
            <span
              style={{
                position: 'relative',
                display: 'inline-flex',
                width: '0.5rem',
                height: '0.5rem',
                borderRadius: '50%',
                background: 'var(--color-primary)',
              }}
            />
          </span>
          {'// Available for new opportunities'}
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            margin: '0 0 2rem 0',
            maxWidth: '1000px',
          }}
        >
          Welcome to my homepage, learn the{' '}
          <span style={{ color: 'var(--color-primary)', fontStyle: 'italic', fontWeight: 700 }}>
            inner workings
          </span>{' '}
          of a full stack developer
        </h1>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a
            href="/portfolio"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'var(--color-primary)',
              color: '#003918',
              fontWeight: 700,
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'transform 0.15s, opacity 0.15s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            View My Work
          </a>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'transparent',
              color: 'var(--color-base-content)',
              fontWeight: 700,
              borderRadius: '0.5rem',
              border: '1px solid var(--color-base-300)',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'border-color 0.15s, opacity 0.15s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-base-300)')}
          >
            Get in Touch
          </a>
        </div>

        {/* Description text below CTAs */}
        <div style={{ marginTop: '2.5rem', maxWidth: '700px' }}>
          <p
            style={{
              margin: 0,
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--color-base-content)',
              opacity: 0.7,
            }}
          >
            {homeData.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
