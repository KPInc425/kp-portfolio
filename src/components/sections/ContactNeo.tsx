import { useThemeTransition } from '../../context/ThemeContext'

export function ContactNeo() {
  const { theme } = useThemeTransition()
  if (theme !== 'neo-dark') return null

  const glass: React.CSSProperties = {
    borderRadius: '0.75rem', padding: '1.5rem',
    border: '1px solid var(--color-base-300)',
    background: 'color-mix(in oklab, var(--color-base-200) 60%, transparent)',
    backdropFilter: 'blur(12px)',
  }

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px' }}>
      <section style={{ marginBottom: '40px', paddingTop: '40px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.35rem 0.85rem', borderRadius: '9999px',
          border: '1px solid var(--color-base-300)', background: 'var(--color-base-200)',
          marginBottom: '1.5rem', fontFamily: "'JetBrains Mono'", fontSize: '0.8rem',
          color: 'var(--color-base-content)', opacity: 0.85,
        }}>
          <span style={{ width: '0.4rem', height: '0.4rem', borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
          {'// Available for new opportunities'}
        </div>
        <h1 style={{ fontFamily: "'Geist'", fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', margin: '0', color: 'var(--color-base-content)' }}>Get In Touch</h1>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>
        {/* Form */}
        <div style={{ ...glass, padding: '2rem', gridColumn: 'span 7 / span 7' }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <input placeholder="Name" style={inputStyle} />
              <input placeholder="Email" type="email" style={inputStyle} />
            </div>
            <textarea placeholder="Message" rows={5} style={{ ...inputStyle, width: '100%', resize: 'vertical' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.75rem', color: 'var(--color-base-content)', opacity: 0.5 }}>
                {'// Security check: Encrypted transmission enabled'}
              </span>
              <button type="submit" style={{
                padding: '0.75rem 2rem', background: 'var(--color-primary)', color: '#003918',
                fontWeight: 700, borderRadius: '0.5rem', border: 'none', cursor: 'pointer',
                fontFamily: "'Inter'", fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <div style={{ gridColumn: 'span 5 / span 5', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { href: 'https://github.com/KPInc425', label: 'GitHub', desc: 'Check my repositories', icon: '🐙' },
            { href: 'https://www.linkedin.com/in/vreyes/', label: 'LinkedIn', desc: 'Connect professionally', icon: '🔗' },
            { href: 'mailto:VReyes.S.A@gmail.com', label: 'Email', desc: 'Get in touch directly', icon: '✉️' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ ...glass, display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Geist'", fontWeight: 600, color: 'var(--color-base-content)', fontSize: '0.95rem' }}>{s.label}</div>
                  <div style={{ fontFamily: "'Inter'", fontSize: '0.8rem', color: 'var(--color-base-content)', opacity: 0.5 }}>{s.desc}</div>
                </div>
              </div>
              <span style={{ color: 'var(--color-base-content)', opacity: 0.3, fontSize: '1.2rem' }}>→</span>
            </a>
          ))}
          <div style={{ ...glass, opacity: 0.8 }}>
            <div style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.75rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{'// Current Status'}</div>
            <div style={{ fontFamily: "'Inter'", fontSize: '0.9rem', color: 'var(--color-base-content)' }}>Coding from Washington, USA</div>
            <div style={{ fontFamily: "'Inter'", fontSize: '0.8rem', color: 'var(--color-base-content)', opacity: 0.5, marginTop: '0.25rem' }}>Available for remote collaboration</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  padding: '0.85rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--color-base-300)',
  background: 'var(--color-base-200)', color: 'var(--color-base-content)',
  fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', outline: 'none', width: '100%', boxSizing: 'border-box',
}

export default ContactNeo
