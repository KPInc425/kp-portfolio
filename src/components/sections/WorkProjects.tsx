import { useThemeTransition } from '../../context/ThemeContext'
import { useProjects } from '../../hooks/useProjects'

export function WorkProjects() {
  const { theme } = useThemeTransition()
  const projectsApi = useProjects()
  if (theme !== 'neo-dark') return null

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px' }}>
      <section style={{ marginBottom: '60px', paddingTop: '40px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--color-primary)', margin: '0 0 0.5rem 0' }}>{'// Selected Engineering Works'}</p>
        <h1 style={{ fontFamily: "'Geist'", fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', margin: '0', color: 'var(--color-base-content)' }}>My Work</h1>
      </section>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {projectsApi.projects.map((project, i) => (
          <div key={project.title} style={{
            borderRadius: '0.75rem', overflow: 'hidden',
            border: '1px solid var(--color-base-300)',
            background: 'color-mix(in oklab, var(--color-base-200) 60%, transparent)',
            backdropFilter: 'blur(12px)',
            display: 'flex', flexDirection: i === 0 && window.innerWidth >= 1024 ? 'row' : 'column',
          }}>
            <div style={{
              flex: i === 0 ? '1 1 60%' : 'none',
              height: i === 0 ? 'auto' : '192px',
              overflow: 'hidden', position: 'relative',
            }}>
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontFamily: "'Geist'", fontSize: '3rem', opacity: 0.15 }}>📁</div>
              )}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-base-200), transparent 50%)', pointerEvents: 'none' }} />
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: i === 0 ? '1 1 40%' : 'none' }}>
              <h3 style={{ fontFamily: "'Geist'", fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem 0', color: 'var(--color-base-content)' }}>{project.title}</h3>
              <p style={{ margin: '0 0 1rem 0', fontFamily: "'Inter'", fontSize: '0.9rem', lineHeight: 1.5, color: 'var(--color-base-content)', opacity: 0.65 }}>
                {project.description?.length > 200 ? project.description.substring(0, 200) + '…' : project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {project.bullets?.slice(0, 3).map((b, idx) => (
                  <span key={idx} style={{
                    padding: '0.15rem 0.5rem', borderRadius: '0.25rem', background: 'var(--color-base-100)',
                    border: '1px solid var(--color-base-300)', fontFamily: "'JetBrains Mono'", fontSize: '0.7rem',
                    fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--color-primary)',
                  }}>{b.length > 15 ? b.substring(0, 15) + '…' : b}</span>
                ))}
              </div>
              {project.projectUrl && (
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" style={{
                  color: 'var(--color-base-content)', fontFamily: "'Inter'", fontSize: '0.75rem',
                  fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}>
                  Explore Case Study →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <section style={{ marginTop: '80px', textAlign: 'center' }}>
        <div style={{ ...glassStyle(true), padding: '3rem 2rem' }}>
          <h2 style={{ fontFamily: "'Geist'", fontSize: '2rem', fontWeight: 700, margin: '0 0 1rem 0', color: 'var(--color-base-content)' }}>Have a project in mind?</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{
              display: 'inline-block', padding: '0.85rem 2rem', background: 'var(--color-primary)',
              color: '#003918', fontWeight: 700, borderRadius: '0.5rem', textDecoration: 'none',
              fontFamily: "'Inter'", fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>Start a Conversation</a>
            <a href="/resume" style={{
              display: 'inline-block', padding: '0.85rem 2rem', background: 'transparent',
              color: 'var(--color-base-content)', fontWeight: 700, borderRadius: '0.5rem',
              border: '1px solid var(--color-base-300)', textDecoration: 'none',
              fontFamily: "'Inter'", fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>Download CV</a>
          </div>
        </div>
      </section>
    </div>
  )
}

function glassStyle(hasBg: boolean): React.CSSProperties {
  return {
    borderRadius: '0.75rem',
    border: '1px solid var(--color-base-300)',
    background: hasBg ? 'color-mix(in oklab, var(--color-base-200) 60%, transparent)' : 'transparent',
    backdropFilter: hasBg ? 'blur(12px)' : 'none',
    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
  }
}

export default WorkProjects
