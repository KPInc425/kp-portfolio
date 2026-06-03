import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Details' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export function TopAppBar() {
  return (
    <header
      className="navbar-shell"
      style={{
        fontFamily: "'Geist', 'Inter', sans-serif",
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          paddingBlock: '0.75rem',
          width: 'min(1360px, calc(100% - 2rem))',
          margin: '0 auto',
        }}
      >
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginRight: 'auto' }}>
          <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem', lineHeight: 1, fontFamily: "'JetBrains Mono', monospace" }}>
            {'>_'}
          </span>
          <span style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-base-content)', fontFamily: "'Geist', 'Inter', sans-serif" }}>
            Victor Reyes
          </span>
        </div>

        {/* Desktop nav links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'var(--color-primary)' : 'var(--color-base-content)',
                borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                paddingBottom: '0.25rem',
                transition: 'color 0.2s, border-color 0.2s',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Dev mode tag */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.8rem',
            color: 'var(--color-primary)',
            opacity: 0.8,
            whiteSpace: 'nowrap',
          }}
        >
          {'// dev_mode: true'}
        </div>
      </nav>
    </header>
  )
}

export default TopAppBar
