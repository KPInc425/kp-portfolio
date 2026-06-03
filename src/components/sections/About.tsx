import { useThemeTransition } from '../../context/ThemeContext'

const glass: React.CSSProperties = {
  borderRadius: '0.75rem', padding: '1.5rem',
  border: '1px solid var(--color-base-300)',
  background: 'color-mix(in oklab, var(--color-base-200) 60%, transparent)',
  backdropFilter: 'blur(12px)', position: 'relative', overflow: 'hidden',
}

export function About() {
  const { theme } = useThemeTransition()
  if (theme !== 'neo-dark') return null

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px' }}>
      {/* Hero */}
      <section style={{ marginBottom: '80px', paddingTop: '40px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 300px' }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--color-primary)', margin: '0 0 0.5rem 0', letterSpacing: '0.02em' }}>
              {'// ABOUT_ME.JS'}
            </p>
            <h1 style={{ fontFamily: "'Geist', sans-serif", fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 0 1rem 0', color: 'var(--color-base-content)' }}>
              Crafting digital solutions<br />with precision.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--color-base-content)', opacity: 0.7, maxWidth: '540px', margin: 0 }}>
              I've spent years building systems that scale, interfaces that resonate, and tools that empower teams. Every project is an opportunity to push boundaries.
            </p>
          </div>
          <div style={{ ...glass, padding: '1.5rem', flex: '0 0 auto', minWidth: '240px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.75rem', background: 'var(--color-base-200)', border: '2px solid color-mix(in oklab, var(--color-primary) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Geist'", fontWeight: 700, color: 'var(--color-primary)', fontSize: '1rem' }}>VR</div>
              <div><div style={{ fontFamily: "'Geist'", fontWeight: 600, color: 'var(--color-base-content)' }}>Victor Reyes</div><div style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.75rem', color: 'var(--color-primary)' }}>{'// Full-Stack Engineer'}</div></div>
            </div>
            <div style={{ height: '2px', background: 'var(--color-base-300)', margin: '0.75rem 0' }} />
            <div style={{ fontFamily: "'Inter'", fontSize: '0.85rem', color: 'var(--color-base-content)', opacity: 0.7 }}>100+ Projects Shipped Globally</div>
          </div>
        </div>
      </section>

      {/* Core Technology Bento */}
      <section style={{ marginBottom: '80px' }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--color-primary)', margin: '0 0 1.5rem 0', letterSpacing: '0.02em' }}>{'// TECH_STACK'}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
          {[
            { icon: '⚛️', title: 'React / Next.js', desc: 'Component-driven UIs' },
            { icon: '🟢', title: 'Node.js', desc: 'Serverless & backend' },
            { icon: '🗄️', title: 'PostgreSQL', desc: 'Relational & vector DB' },
            { icon: '☁️', title: 'AWS / Cloud', desc: 'Infrastructure & CI/CD' },
          ].map(t => (
            <div key={t.title} style={glass}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{t.icon}</div>
              <h3 style={{ fontFamily: "'Geist'", fontSize: '1.1rem', fontWeight: 600, margin: '0 0 0.25rem 0', color: 'var(--color-base-content)' }}>{t.title}</h3>
              <p style={{ fontFamily: "'Inter'", fontSize: '0.85rem', margin: 0, color: 'var(--color-base-content)', opacity: 0.6 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--color-primary)', margin: '0 0 1.5rem 0', letterSpacing: '0.02em' }}>{'// PHILOSOPHY'}</p>
        <div style={{ ...glass, padding: '2.5rem 2rem', position: 'relative' }}>
          <div style={{ position: 'absolute', right: '-3rem', top: '-3rem', fontSize: '300px', opacity: 0.03, color: 'var(--color-primary)', pointerEvents: 'none', lineHeight: 1 }}>⚡</div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Geist'", fontSize: '2rem', fontWeight: 700, margin: '0 0 2rem 0', color: 'var(--color-base-content)' }}>Built with purpose.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Performance First', desc: 'Every millisecond counts. From optimized bundles to edge caching, I build for speed at every layer.' },
                { title: 'Scalable Systems', desc: 'Architecture that grows with you. Modular patterns, clean abstractions, and infrastructure as code.' },
                { title: 'Clean Code', desc: 'Readable, testable, maintainable. Code is communication, and I take that seriously.' },
              ].map(v => (
                <div key={v.title}>
                  <h3 style={{ fontFamily: "'Geist'", fontSize: '1.2rem', fontWeight: 600, margin: '0 0 0.5rem 0', color: 'var(--color-base-content)' }}>{v.title}</h3>
                  <p style={{ fontFamily: "'Inter'", fontSize: '0.9rem', lineHeight: 1.6, margin: 0, color: 'var(--color-base-content)', opacity: 0.6 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
