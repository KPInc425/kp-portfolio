// TopAppBar — the stitch's fixed nav bar for the neo-dark theme.
// Uses react-router-dom's NavLink for active-state highlighting.
// Conditionally rendered in App.tsx when theme === 'neo-dark'.

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
      <nav className="page-shell" style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingBlock: '0.75rem' }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginRight: 'auto' }}>
          <span
            className="material-symbols-outlined"
            style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}
          >
            terminal
          </span>
          <span style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-base-content)' }}>
            Victor Reyes
          </span>
        </div>

        {/* Desktop nav links (hidden on mobile) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
          }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'nav-link-active'
                  : 'nav-link-inactive'
              }
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

        {/* Dev mode tag (desktop only) */}
        <div
          className="dev-mode-tag"
          style={{
            display: 'none',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.8rem',
            color: 'var(--color-primary)',
            opacity: 0.8,
            whiteSpace: 'nowrap',
          }}
        >
          // dev_mode: true
        </div>

        {/* Mobile hamburger */}
        <button
          style={{
            display: 'none', // shown on mobile via media query
            background: 'none',
            border: 'none',
            color: 'var(--color-primary)',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>
            menu
          </span>
        </button>
      </nav>
    </header>
  )
}

export default TopAppBar
