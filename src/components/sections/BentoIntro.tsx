import { useThemeTransition } from '../../context/ThemeContext'

export function BentoIntro() {
  const { theme } = useThemeTransition()
  if (theme !== 'neo-dark') return null

  const glass: React.CSSProperties = {
    borderRadius: '0.75rem', padding: '1.5rem',
    border: '1px solid var(--color-base-300)',
    background: 'color-mix(in oklab, var(--color-base-200) 60%, transparent)',
    backdropFilter: 'blur(12px)',
    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
    position: 'relative', overflow: 'hidden',
  }

  const secStyle: React.CSSProperties = {
    maxWidth: '1280px', margin: '0 auto', padding: '0 24px',
    marginBottom: '80px',
  }

  return (
    <>
      {/* ── Desktop: Bio + Tech Grid ── */}
      <section style={secStyle}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px', alignItems: 'stretch',
        }}>
          {/* Bio Card — 7 cols */}
          <div style={{ ...glass, gridColumn: 'span 7 / span 7', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '5rem', height: '5rem', borderRadius: '0.75rem',
                border: '2px solid color-mix(in oklab, var(--color-primary) 20%, transparent)',
                background: 'var(--color-base-200)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Geist', sans-serif", fontWeight: 700,
                fontSize: '1.5rem', color: 'var(--color-primary)',
                flexShrink: 0,
              }}>
                VR
              </div>
              <div>
                <h3 style={{ margin: 0, fontFamily: "'Geist', sans-serif", fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-base-content)' }}>
                  Victor Reyes
                </h3>
                <p style={{ margin: '0.25rem 0 0 0', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: 'var(--color-primary)' }}>
                  {'// Full-Stack Engineer'}
                </p>
              </div>
            </div>
            <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--color-base-content)', opacity: 0.7 }}>
              I am currently working on a few projects that push the boundaries of modern web architecture, focusing on building scalable, performant systems that solve real-world problems.
            </p>
          </div>

          {/* Tech Grid — 5 cols (2col grid of tiles) */}
          <div style={{ ...glass, gridColumn: 'span 5 / span 5' }}>
            <h4 style={{
              margin: '0 0 1.25rem 0', fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: 'var(--color-base-content)', opacity: 0.4,
            }}>
              Core Technology
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: '🗄️', label: 'PostgreSQL' },
                { icon: '⚛️', label: 'React / Next.js' },
                { icon: '🟢', label: 'Node.js' },
                { icon: '☁️', label: 'AWS Infra' },
                { icon: '🔒', label: 'OAuth 2.0', span: 2 },
              ].map((t) => (
                <div key={t.label} style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.75rem', borderRadius: '0.5rem',
                  background: 'var(--color-base-200)',
                  border: '1px solid var(--color-base-300)',
                  gridColumn: t.span === 2 ? 'span 2 / span 2' : undefined,
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem',
                  color: 'var(--color-base-content)',
                }}>
                  <span style={{ fontSize: '1.1rem' }}>{t.icon}</span>
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── "Powered by Passion" Full-bleed card ── */}
      <section style={secStyle}>
        <div style={{
          position: 'relative', padding: '4rem 3rem',
          borderRadius: '1.5rem', overflow: 'hidden',
          border: '1px solid var(--color-base-300)',
          background: 'var(--color-base-200)',
        }}>
          <div style={{
            position: 'absolute', right: '-5rem', top: '-5rem',
            fontSize: '400px', opacity: 0.04, color: 'var(--color-primary)',
            pointerEvents: 'none', lineHeight: 1,
          }}>
            ⚡
          </div>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px' }}>
            <h2 style={{
              fontFamily: "'Geist', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 3rem)',
              fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em',
              margin: '0 0 1.5rem 0', color: 'var(--color-base-content)',
            }}>
              Powered by Passion<br />and Enthusiasm
            </h2>
            <p style={{
              margin: '0 0 1rem 0', fontFamily: "'Inter', sans-serif", fontSize: '1.125rem',
              lineHeight: 1.6, color: 'var(--color-base-content)', opacity: 0.7,
            }}>
              Engineering isn't just about writing code; it's about the relentless pursuit of elegant solutions for complex challenges. Every line of code is an opportunity to optimize performance and improve user experience.
            </p>
            <p style={{
              margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '1.125rem',
              lineHeight: 1.6, color: 'var(--color-base-content)', opacity: 0.7,
            }}>
              I specialize in creating robust digital ecosystems that are as scalable as they are beautiful. My process integrates technical rigor with a deep understanding of user-centric design principles.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default BentoIntro
