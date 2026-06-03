import { useThemeTransition } from '../../context/ThemeContext'
import { useProjects } from '../../hooks/useProjects'

const placeholderImages: Record<string, string> = {
  'TMRA.ai': '🗺️',
  'TMRA Landing Page': '🛬',
  'Word Search Kingdom': '🔍',
  'Willows Wonderland': '🎨',
  'KnG Auto Detail': '🚗',
}

export function FeaturedProjects() {
  const { theme } = useThemeTransition()
  const projectsApi = useProjects()
  if (theme !== 'neo-dark') return null

  const cardBase: React.CSSProperties = {
    borderRadius: '0.75rem',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid var(--color-base-300)',
    background: 'color-mix(in oklab, var(--color-base-200) 60%, transparent)',
    backdropFilter: 'blur(12px)',
    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
  }

  return (
    <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', marginBottom: '80px' }}>
      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
        <h2
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: '2rem',
            fontWeight: 600,
            color: 'var(--color-base-content)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Featured Projects
        </h2>
        <div style={{ height: '1px', flexGrow: 1, background: 'var(--color-base-300)' }} />
      </div>

      {/* Projects grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '24px',
        }}
      >
        {projectsApi.projects.map((project) => {
          const emoji = placeholderImages[project.title] ?? '📁'
          return (
            <div key={project.title} style={cardBase}>
              {/* Image area */}
              <div
                style={{
                  aspectRatio: '16 / 9',
                  width: '100%',
                  background: 'var(--color-base-200)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                ) : (
                  <span style={{ fontSize: '3rem', opacity: 0.3 }}>{emoji}</span>
                )}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '50%',
                    background: 'linear-gradient(to top, var(--color-base-200), transparent)',
                    opacity: 0.6,
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Card body */}
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                    margin: '0 0 0.75rem 0',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    margin: '0 0 1.5rem 0',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1rem',
                    lineHeight: 1.5,
                    color: 'var(--color-base-content)',
                    opacity: 0.65,
                    flexGrow: 1,
                  }}
                >
                  {project.description?.length > 200
                    ? project.description.substring(0, 200) + '...'
                    : project.description}
                </p>

                {/* Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.bullets?.slice(0, 3).map((bullet, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.125rem 0.625rem',
                        borderRadius: '9999px',
                        background: 'var(--color-base-200)',
                        border: '1px solid var(--color-base-300)',
                        fontSize: '0.625rem',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-base-content)',
                        opacity: 0.7,
                      }}
                    >
                      {bullet.length > 20 ? bullet.substring(0, 20) + '...' : bullet}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--color-primary)',
                      fontWeight: 700,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'gap 0.2s',
                    }}
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FeaturedProjects
