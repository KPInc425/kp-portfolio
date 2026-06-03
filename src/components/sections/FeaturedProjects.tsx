import { useThemeTransition } from '../../context/ThemeContext'
import { useProjects } from '../../hooks/useProjects'

export function FeaturedProjects() {
  const { theme } = useThemeTransition()
  const projectsApi = useProjects()
  if (theme !== 'neo-dark') return null

  return (
    <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', marginBottom: '80px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem' }}>
        <div>
          <h2 style={{ fontFamily: "'Geist', sans-serif", fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontWeight: 700, margin: '0 0 0.25rem 0', color: 'var(--color-base-content)' }}>
            Featured Projects
          </h2>
          <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: 'var(--color-base-content)', opacity: 0.6 }}>
            Recent engineering challenges and their solutions.
          </p>
        </div>
        <a href="/portfolio" style={{
          fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)',
          textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', whiteSpace: 'nowrap',
        }}>
          View All Projects →
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '32px' }}>
        {projectsApi.projects.map((project) => (
          <div key={project.title} style={{
            borderRadius: '0.75rem', overflow: 'hidden',
            border: '1px solid var(--color-base-300)',
            background: 'color-mix(in oklab, var(--color-base-200) 60%, transparent)',
            backdropFilter: 'blur(12px)', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ height: '192px', overflow: 'hidden', background: 'var(--color-base-200)', position: 'relative' }}>
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  loading="lazy" />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontFamily: "'Geist'", fontSize: '3rem', opacity: 0.15 }}>📁</div>
              )}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%',
                background: 'linear-gradient(to top, var(--color-base-200), transparent)', opacity: 0.5, pointerEvents: 'none',
              }} />
            </div>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                {project.bullets?.slice(0, 2).map((bullet, i) => (
                  <span key={i} style={{
                    padding: '0.2rem 0.6rem', borderRadius: '0.25rem', background: 'var(--color-base-100)',
                    border: '1px solid var(--color-base-300)', fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--color-primary)',
                  }}>
                    {bullet.length > 15 ? bullet.substring(0, 15) + '…' : bullet}
                  </span>
                ))}
              </div>
              <h3 style={{ fontFamily: "'Geist', sans-serif", fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem 0', color: 'var(--color-base-content)' }}>
                {project.title}
              </h3>
              <p style={{ margin: '0 0 1rem 0', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', lineHeight: 1.5, color: 'var(--color-base-content)', opacity: 0.65, flexGrow: 1 }}>
                {project.description?.length > 120 ? project.description.substring(0, 120) + '…' : project.description}
              </p>
              {project.projectUrl && (
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" style={{
                  color: 'var(--color-base-content)', fontFamily: "'Inter', sans-serif", fontSize: '0.75rem',
                  fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                  transition: 'color 0.2s', marginTop: 'auto',
                }}>
                  Case Study →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
