import { useThemeTransition } from '../../context/ThemeContext'

const glass: React.CSSProperties = {
  borderRadius: '0.75rem', padding: '1.5rem',
  border: '1px solid var(--color-base-300)',
  background: 'color-mix(in oklab, var(--color-base-200) 60%, transparent)',
  backdropFilter: 'blur(12px)',
}

const skills = [
  { cat: 'Frontend', items: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Theme-UI'] },
  { cat: 'Backend', items: ['Node.js', 'C#', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
  { cat: 'DevOps', items: ['AWS', 'Netlify', 'CI/CD', 'Git', 'Docker'] },
  { cat: 'Testing', items: ['Playwright', 'Jest', 'Unit Testing', 'E2E', 'TDD'] },
]

const experience = [
  { role: 'Software Engineer', company: 'Robot Builders Inc.', period: 'Feb 2023 - Apr 2023', desc: 'Full-stack development on React/Node.js platforms. Built and maintained component libraries, automated testing pipelines, and cross-team integrations.' },
  { role: 'Full Stack Developer (Student)', company: 'Full Stack Open', period: '2023', desc: 'Completed comprehensive training in modern web development: React, Redux, Node.js, MongoDB, GraphQL, TypeScript, CI/CD pipelines, and containerization.' },
  { role: 'Web Developer (Student)', company: 'The Odin Project', period: '2023', desc: 'Self-directed full-stack curriculum covering JavaScript, React, Node.js, Ruby on Rails, databases, testing, and deployment.' },
]

export function ResumeNeo() {
  const { theme } = useThemeTransition()
  if (theme !== 'neo-dark') return null

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px' }}>
      <section style={{ paddingTop: '40px', marginBottom: '40px' }}>
        <p style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.8rem', color: 'var(--color-primary)', margin: '0 0 0.5rem 0' }}>{'// RESUME'}</p>
        <h1 style={{ fontFamily: "'Geist'", fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', margin: '0', color: 'var(--color-base-content)' }}>
          Experience & Skills
        </h1>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px', marginBottom: '60px' }}>
        <div style={{ ...glass, gridColumn: 'span 8 / span 8' }}>
          <h2 style={{ fontFamily: "'Geist'", fontSize: '1.2rem', fontWeight: 600, margin: '0 0 1.5rem 0', color: 'var(--color-base-content)' }}>Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experience.map((exp, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                  <h3 style={{ fontFamily: "'Geist'", fontSize: '1rem', fontWeight: 600, margin: 0, color: 'var(--color-base-content)' }}>{exp.role}</h3>
                  <span style={{ fontFamily: "'Inter'", fontSize: '0.8rem', color: 'var(--color-base-content)', opacity: 0.5 }}>{exp.period}</span>
                </div>
                <p style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.8rem', color: 'var(--color-primary)', margin: '0 0 0.5rem 0' }}>{exp.company}</p>
                <p style={{ fontFamily: "'Inter'", fontSize: '0.85rem', lineHeight: 1.5, margin: 0, color: 'var(--color-base-content)', opacity: 0.65 }}>{exp.desc}</p>
                {i < experience.length - 1 && <div style={{ height: '1px', background: 'var(--color-base-300)', marginTop: '1.5rem' }} />}
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...glass, gridColumn: 'span 4 / span 4' }}>
          <h2 style={{ fontFamily: "'Geist'", fontSize: '1.2rem', fontWeight: 600, margin: '0 0 1.5rem 0', color: 'var(--color-base-content)' }}>Skills</h2>
          {skills.map(s => (
            <div key={s.cat} style={{ marginBottom: '1.25rem' }}>
              <h3 style={{ fontFamily: "'JetBrains Mono'", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.02em', margin: '0 0 0.5rem 0', color: 'var(--color-primary)' }}>{'// ' + s.cat}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {s.items.map(item => (
                  <span key={item} style={{
                    padding: '0.2rem 0.5rem', borderRadius: '0.25rem', background: 'var(--color-base-100)',
                    border: '1px solid var(--color-base-300)', fontFamily: "'Inter'", fontSize: '0.75rem',
                    color: 'var(--color-base-content)', opacity: 0.8,
                  }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResumeNeo
