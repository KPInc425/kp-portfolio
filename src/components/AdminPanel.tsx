import { useMemo, useState } from 'react'
import { FaFlask, FaMagic, FaExchangeAlt, FaFolderOpen, FaBug, FaKey } from 'react-icons/fa'
import { useThemeTransition, type PortfolioTheme } from '../context/ThemeContext'
import { type TransitionType, type TransitionTrigger, themes as registeredThemes } from '../themes/themeRegistry'
import type { useProjects } from '../hooks/useProjects'

type ProjectsApi = ReturnType<typeof useProjects>

type AdminPanelProps = {
  adminUnlocked: boolean
  isOpen: boolean
  onToggleOpen: () => void
  projectsApi: ProjectsApi
}

type AdminTab = 'effects' | 'transitions' | 'projects' | 'debug' | 'secrets'

const themeOptions: PortfolioTheme[] = registeredThemes.map((t) => t.id)
const triggerOptions: TransitionTrigger[] = ['time-delay', 'scroll-percent', 'first-click', 'manual', 'konami-code', 'none']
const transitionOptions: TransitionType[] = ['cinematic', 'glitch', 'crossfade', 'scanline', 'wipe']

const effectMeta: Record<string, { icon: string; label: string; color: string; description: string }> = {
  confetti: { icon: '🎉', label: 'Confetti', color: '#f59e0b', description: 'Celebration burst on command' },
  bubbles: { icon: '🫧', label: 'Bubbles', color: '#38bdf8', description: 'Floating ambient bubbles' },
  matrix: { icon: '👾', label: 'Matrix', color: '#4ade80', description: 'Green code rain overlay' },
  particles: { icon: '✨', label: 'Particles', color: '#a78bfa', description: 'Ambient floating particles' },
  snow: { icon: '❄️', label: 'Snow', color: '#c7d2fe', description: 'Gentle snowfall effect' },
  fireworks: { icon: '🎆', label: 'Fireworks', color: '#f87171', description: 'Pyrotechnic display' },
  cursorTrail: { icon: '✦', label: 'Trail', color: '#c084fc', description: 'Magic trail follows cursor' },
  godMode: { icon: '⚡', label: 'God Mode', color: '#fbbf24', description: 'Golden aura glow' },
  chaosOverlay: { icon: '🔥', label: 'Chaos', color: '#ef4444', description: 'Reality distortion field' },
}

// Each theme's emoji and description is sourced from the registry.
// This is a per-theme display helper; the registry is the source of truth.
const themeEmoji: Record<string, string> = {
  legacy: '🌿',
  'neo-dark': '🌑',
}
function themeMetaFor(themeId: string) {
  const def = registeredThemes.find((t) => t.id === themeId)
  return { emoji: themeEmoji[themeId] ?? '🎨', description: def?.description ?? themeId }
}
// Keep `themeMeta` as an alias of themeMetaFor for any remaining references.
const themeMeta: Record<string, { emoji: string; description: string }> = new Proxy({}, {
  get: (_, key: string) => themeMetaFor(String(key)),
})

const tabDefs: { key: AdminTab; icon: React.FC<{ size?: number }>; label: string }[] = [
  { key: 'effects', icon: FaMagic, label: 'Effects' },
  { key: 'transitions', icon: FaExchangeAlt, label: 'Transitions' },
  { key: 'projects', icon: FaFolderOpen, label: 'Projects' },
  { key: 'debug', icon: FaBug, label: 'Debug' },
  { key: 'secrets', icon: FaKey, label: 'Secrets' },
]

const emptyDraft = {
  id: '',
  title: '',
  tagline: '',
  description: '',
  bullets: '',
  imageUrl: '',
  projectUrl: '#coming-soon',
  techStack: '',
  sortOrder: 999,
}

const AdminPanel = ({ adminUnlocked, isOpen, onToggleOpen, projectsApi }: AdminPanelProps) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('effects')
  const [draft, setDraft] = useState(emptyDraft)
  const [editingId, setEditingId] = useState<string | null>(null)
  const {
    theme,
    setTheme,
    effects,
    toggleEffect,
    transitionConfig,
    updateTransitionConfig,
    triggerTransition,
    debugLogs,
    pushDebugLog,
  } = useThemeTransition()

  const effectEntries = useMemo(() => Object.entries(effects), [effects])

  const resetDraft = () => {
    setDraft(emptyDraft)
    setEditingId(null)
  }

  const handleSubmit = async () => {
    const payload = {
      title: draft.title.trim(),
      tagline: draft.tagline.trim(),
      description: draft.description.trim(),
      bullets: draft.bullets.split('\n').map((item) => item.trim()).filter(Boolean),
      imageUrl: draft.imageUrl.trim(),
      projectUrl: draft.projectUrl.trim() || '#coming-soon',
      techStack: draft.techStack.split(',').map((item) => item.trim()).filter(Boolean),
      sortOrder: Number(draft.sortOrder),
      comingSoon: (draft.projectUrl.trim() || '#coming-soon').startsWith('#'),
    }

    if (!payload.title || !payload.description) {
      pushDebugLog('Project form rejected: title and description are required.')
      return
    }

    if (editingId) {
      await projectsApi.updateProject(editingId, payload)
      pushDebugLog(`Project updated: ${payload.title}.`)
    } else {
      await projectsApi.createProject(payload)
      pushDebugLog(`Project created: ${payload.title}.`)
    }
    resetDraft()
  }

  if (!adminUnlocked) {
    return (
      <div className="admin-theme-indicator">
        <span className="admin-status-dot" />
        {theme.toUpperCase()}
      </div>
    )
  }

  return (
    <>
      {/* ── Toggle button ── */}
      <button className="admin-toggle-btn" type="button" onClick={onToggleOpen}>
        <FaFlask size={13} />
        <span>{isOpen ? 'Hide lab' : 'Open lab'}</span>
      </button>

      {/* ── Always-visible theme badge ── */}
      <div className="admin-theme-indicator">
        <span className="admin-status-dot" />
        {theme.toUpperCase()}
      </div>

      {isOpen ? (
        <aside className="admin-panel">
          {/* ── Panel header ── */}
          <div className="admin-panel-header">
            <div className="admin-panel-brand">
              <FaFlask size={11} style={{ opacity: 0.8 }} />
              <span className="admin-panel-title">Control Lab</span>
            </div>
            <div className="admin-panel-meta-row">
              <span className="admin-status-pill theme-pill">{theme}</span>
              <span className={`admin-status-pill source-pill ${projectsApi.isSupabaseConfigured ? 'connected' : 'local'}`}>
                {projectsApi.isSupabaseConfigured ? '◉ supabase' : '◌ local'}
              </span>
              <button className="admin-close-btn" type="button" onClick={onToggleOpen} aria-label="Close">×</button>
            </div>
          </div>

          {/* ── Tab bar ── */}
          <div className="admin-tab-row">
            {tabDefs.map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                type="button"
                className={`admin-tab-btn${activeTab === key ? ' active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                <Icon size={11} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* ── EFFECTS ── */}
          {activeTab === 'effects' ? (
            <div className="admin-section">
              <div className="admin-subsection-label">Theme</div>
              <div className="admin-theme-grid">
                {themeOptions.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`admin-theme-swatch${theme === t ? ' active' : ''}`}
                    data-theme-option={t}
                    onClick={() => setTheme(t)}
                    title={themeMeta[t]?.description}
                  >
                    <span className="admin-swatch-emoji">{themeMeta[t]?.emoji}</span>
                    <span className="admin-swatch-name">{t}</span>
                  </button>
                ))}
              </div>
              <div className="admin-subsection-label" style={{ marginTop: '0.5rem' }}>Effects</div>
              <div className="admin-effect-grid">
                {effectEntries.map(([effectKey, enabled]) => {
                  const meta = effectMeta[effectKey]
                  return (
                    <button
                      key={effectKey}
                      type="button"
                      className={`admin-effect-badge${enabled ? ' on' : ''}`}
                      style={enabled && meta ? { '--effect-color': meta.color } as React.CSSProperties : undefined}
                      title={meta?.description}
                      onClick={() => toggleEffect(effectKey)}
                    >
                      <span className="admin-effect-icon">{meta?.icon ?? '◈'}</span>
                      <span className="admin-effect-name">{meta?.label ?? effectKey}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          ) : null}

          {/* ── TRANSITIONS ── */}
          {activeTab === 'transitions' ? (
            <div className="admin-section">
              <div className="admin-two-col">
                <div className="admin-field">
                  <label htmlFor="trigger-select">Trigger</label>
                  <select id="trigger-select" value={transitionConfig.trigger} onChange={(e) => updateTransitionConfig({ trigger: e.target.value as TransitionTrigger })}>
                    {triggerOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div className="admin-field">
                  <label htmlFor="transition-type">Style</label>
                  <select id="transition-type" value={transitionConfig.transitionType} onChange={(e) => updateTransitionConfig({ transitionType: e.target.value as TransitionType })}>
                    {transitionOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div className="admin-field">
                <label htmlFor="delay-range">
                  Delay <span className="admin-field-value">{Math.round(transitionConfig.delayMs / 1000)}s</span>
                </label>
                <input id="delay-range" type="range" min="1000" max="20000" step="500"
                  value={transitionConfig.delayMs}
                  onChange={(e) => updateTransitionConfig({ delayMs: Number(e.target.value) })} />
              </div>
              <div className="admin-field">
                <label htmlFor="scroll-range">
                  Scroll trigger <span className="admin-field-value">{transitionConfig.scrollPercent}%</span>
                </label>
                <input id="scroll-range" type="range" min="5" max="90" step="5"
                  value={transitionConfig.scrollPercent}
                  onChange={(e) => updateTransitionConfig({ scrollPercent: Number(e.target.value) })} />
              </div>
              <button className="admin-action-btn primary" type="button" onClick={() => triggerTransition('manual-admin-trigger')}>
                ⚡ Transform now
              </button>
            </div>
          ) : null}

          {/* ── PROJECTS ── */}
          {activeTab === 'projects' ? (
            <div className="admin-section">
              <div className="admin-source-badge">
                {projectsApi.isSupabaseConfigured ? '◉ Supabase connected' : '◌ Local fallback only'}
              </div>
              <div className="admin-two-col">
                <div className="admin-field">
                  <label htmlFor="project-title">Title</label>
                  <input id="project-title" value={draft.title} onChange={(e) => setDraft((c) => ({ ...c, title: e.target.value }))} />
                </div>
                <div className="admin-field">
                  <label htmlFor="project-tagline">Tagline</label>
                  <input id="project-tagline" value={draft.tagline} onChange={(e) => setDraft((c) => ({ ...c, tagline: e.target.value }))} />
                </div>
              </div>
              <div className="admin-field">
                <label htmlFor="project-description">Description</label>
                <textarea id="project-description" rows={4} value={draft.description} onChange={(e) => setDraft((c) => ({ ...c, description: e.target.value }))} />
              </div>
              <div className="admin-field">
                <label htmlFor="project-bullets">Bullets (one per line)</label>
                <textarea id="project-bullets" rows={3} value={draft.bullets} onChange={(e) => setDraft((c) => ({ ...c, bullets: e.target.value }))} />
              </div>
              <div className="admin-two-col">
                <div className="admin-field">
                  <label htmlFor="project-image">Image URL</label>
                  <input id="project-image" value={draft.imageUrl} onChange={(e) => setDraft((c) => ({ ...c, imageUrl: e.target.value }))} />
                </div>
                <div className="admin-field">
                  <label htmlFor="project-url">Project URL</label>
                  <input id="project-url" value={draft.projectUrl} onChange={(e) => setDraft((c) => ({ ...c, projectUrl: e.target.value }))} />
                </div>
              </div>
              <div className="admin-two-col">
                <div className="admin-field">
                  <label htmlFor="project-stack">Tech stack (comma-separated)</label>
                  <input id="project-stack" value={draft.techStack} onChange={(e) => setDraft((c) => ({ ...c, techStack: e.target.value }))} />
                </div>
                <div className="admin-field">
                  <label htmlFor="project-order">Sort order</label>
                  <input id="project-order" type="number" value={draft.sortOrder} onChange={(e) => setDraft((c) => ({ ...c, sortOrder: Number(e.target.value) }))} />
                </div>
              </div>
              <div className="admin-action-row">
                <button className="admin-action-btn primary" type="button" onClick={handleSubmit}>
                  {editingId ? '💾 Save project' : '+ Add project'}
                </button>
                <button className="admin-action-btn" type="button" onClick={resetDraft}>Reset</button>
              </div>
              <div className="admin-project-list">
                {projectsApi.projects.map((project) => (
                  <div key={project.id} className="admin-project-card">
                    <div className="admin-project-card-title">{project.title}</div>
                    <div className="admin-project-card-tagline">{project.tagline}</div>
                    <div className="admin-action-row">
                      <button className="admin-action-btn" type="button"
                        onClick={() => {
                          setEditingId(project.id)
                          setDraft({
                            id: project.id,
                            title: project.title,
                            tagline: project.tagline,
                            description: project.description,
                            bullets: project.bullets.join('\n'),
                            imageUrl: project.imageUrl,
                            projectUrl: project.projectUrl,
                            techStack: (project.techStack ?? []).join(', '),
                            sortOrder: project.sortOrder,
                          })
                        }}>✏️ Edit
                      </button>
                      <button className="admin-action-btn danger" type="button" onClick={() => void projectsApi.deleteProject(project.id)}>
                        🗑 Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* ── DEBUG ── */}
          {activeTab === 'debug' ? (
            <div className="admin-section">
              <div className="admin-terminal">
                <div className="admin-terminal-header">
                  <span className="admin-terminal-dot red" />
                  <span className="admin-terminal-dot yellow" />
                  <span className="admin-terminal-dot green" />
                  <span className="admin-terminal-label">state snapshot</span>
                </div>
                <pre className="admin-terminal-body">
                  {JSON.stringify({ theme, transitionConfig, projectCount: projectsApi.projects.length, supabase: projectsApi.isSupabaseConfigured, loading: projectsApi.isLoading, error: projectsApi.error }, null, 2)}
                </pre>
              </div>
              {debugLogs.length > 0 && (
                <div className="admin-terminal">
                  <div className="admin-terminal-header">
                    <span className="admin-terminal-dot red" />
                    <span className="admin-terminal-dot yellow" />
                    <span className="admin-terminal-dot green" />
                    <span className="admin-terminal-label">event log</span>
                  </div>
                  <div className="admin-log-list">
                    {debugLogs.map((entry, i) => (
                      <div key={i} className="admin-log-entry">{entry}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : null}

          {/* ── SECRETS ── */}
          {activeTab === 'secrets' ? (
            <div className="admin-section admin-secrets">
              <section className="admin-secrets-section">
                <div className="admin-secrets-heading">🔐 Easter egg codes</div>
                <div className="admin-secrets-list">
                  {[
                    { code: 'kpinc425', label: 'Unlock this panel — type anywhere on the page' },
                    { code: 'iddqd', label: 'God Mode — golden aura activation' },
                    { code: 'idkfa', label: 'Chaos overlay — reality distortion' },
                    { code: '↑↑↓↓←→←→BA', label: 'Konami code — special transition' },
                  ].map(({ code, label }) => (
                    <div key={code} className="admin-secret-entry">
                      <code className="admin-secret-code">{code}</code>
                      <span className="admin-secret-label">{label}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="admin-secrets-section">
                <div className="admin-secrets-heading">🎨 Available themes</div>
                <div className="admin-secrets-list">
                  {themeOptions.map((t) => (
                    <div key={t} className="admin-secret-entry">
                      <span className="admin-secret-code">{themeMeta[t]?.emoji} {t}</span>
                      <span className="admin-secret-label">{themeMeta[t]?.description}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="admin-secrets-section">
                <div className="admin-secrets-heading">🎬 Transition types</div>
                <div className="admin-secrets-list">
                  {[
                    { type: 'cinematic', desc: 'Full-screen bloom wash with pulse' },
                    { type: 'glitch', desc: 'Scanline distortion flicker' },
                    { type: 'crossfade', desc: 'Smooth background blend' },
                    { type: 'scanline', desc: 'Horizontal scanline wipe with chromatic shift' },
                    { type: 'wipe', desc: 'Directional slide-wipe reveal' },
                  ].map(({ type, desc }) => (
                    <div key={type} className="admin-secret-entry">
                      <code className="admin-secret-code">{type}</code>
                      <span className="admin-secret-label">{desc}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="admin-secrets-section">
                <div className="admin-secrets-heading">✨ Effects palette</div>
                <div className="admin-secrets-list">
                  {Object.entries(effectMeta).map(([key, meta]) => (
                    <div key={key} className="admin-secret-entry">
                      <span className="admin-secret-code">{meta.icon} {meta.label}</span>
                      <span className="admin-secret-label">{meta.description}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="admin-secrets-section">
                <div className="admin-secrets-heading">⌨️ Typewriter ghost</div>
                <p className="admin-secret-note">
                  Type anywhere outside input fields to see a faint glowing typewriter effect in the top-left corner.
                  Secret codes are detected from this keystroke stream — keep typing!
                </p>
              </section>
            </div>
          ) : null}
        </aside>
      ) : null}
    </>
  )
}

export default AdminPanel
