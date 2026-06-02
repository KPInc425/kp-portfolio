# The KP Portfolio Glow-Up Playbook
*A reusable recipe for upgrading any React/Vite project with a theming engine, transition system, effects palette, and admin layer.*

---

## Table of Contents
1. [What We Built](#what-we-built)
2. [Stack](#stack)
3. [Phase 1 — CSS Foundation](#phase-1--css-foundation)
4. [Phase 2 — Theme Engine](#phase-2--theme-engine)
5. [Phase 3 — Transition Engine](#phase-3--transition-engine)
6. [Phase 4 — Effects Palette](#phase-4--effects-palette)
7. [Phase 5 — Admin Control Lab](#phase-5--admin-control-lab)
8. [Phase 6 — Typewriter Ghost](#phase-6--typewriter-ghost)
9. [Phase 7 — Easter Eggs](#phase-7--easter-eggs)
10. [Hardening: Theme-Aware Components](#hardening-theme-aware-components)
11. [Extraction: Turning This Into a Library](#extraction-turning-this-into-a-library)
12. [Known Pitfalls](#known-pitfalls)

---

## What We Built

A fully-themed, animated, easter-egg-enabled portfolio site.  
From a plain React/Tailwind startup to:

- **6 custom DaisyUI themes** (dark + light, each with a personality)
- **Cinematic auto-transition** from legacy → jade on first visit
- **9 togglable visual effects** (confetti, matrix, bubbles, particles, snow, fireworks, cursorTrail, godMode, chaosOverlay)
- **Hidden admin "Control Lab"** unlocked by typing a secret code anywhere
- **Typewriter ghost** — ambient display of keystrokes with theme-colored glow
- **Secrets tab** — in-app mini documentation

---

## Stack

| Layer | Tool | Why |
|---|---|---|
| Build | Vite 8 + `@tailwindcss/vite` | `@plugin` at-rules need the vite plugin (NOT postcss) |
| CSS | Tailwind v4 + DaisyUI v5 | `@plugin` themes, all CSS vars auto-generated from `data-theme` |
| Components | React 18 + Theme-UI v0.16 | `sx` prop with CSS var bridge |
| State | React Context + localStorage | Theme config, effects, admin unlock persist across sessions |
| Data | Supabase v2 (with local fallback) | Project CMS layer |
| Fonts | Space Grotesk + IBM Plex Mono | Google Fonts, referenced in `App.css` |

---

## Phase 1 — CSS Foundation

### Critical: `@tailwindcss/vite` Plugin

The single most important discovery. Without this, DaisyUI's `@plugin 'daisyui/theme'` at-rules are silently stripped by lightningcss during build, so **all CSS custom properties are empty at runtime**.

```ts
// vite.config.ts
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [tailwindcss(), react()],  // tailwindcss() MUST come first
})
```

```bash
npm install --save-dev @tailwindcss/vite --legacy-peer-deps
```

### App.css Structure

```css
/* 1. Google Fonts */
@import url('...');

/* 2. Tailwind v4 core */
@import "tailwindcss";

/* 3. DaisyUI v5 base */
@plugin "daisyui";

/* 4. Custom themes (one @plugin block per theme) */
@plugin 'daisyui/theme' {
  name: 'legacy';
  /* ... custom OKLCH color vars ... */
}

/* 5. Base HTML styles */
html {
  background: radial-gradient(...);
  transition: background-color 1.8s ease, color 1.8s ease; /* smooth theme swap */
}

/* 6. App-specific utility classes */
```

### Smooth Theme Transitions

Adding `transition` to `html` gives free cross-fade when `data-theme` changes:

```css
html {
  transition: background-color 1.8s ease, color 1.8s ease;
}
```

---

## Phase 2 — Theme Engine

### The Bridge Pattern: Theme-UI ↔ DaisyUI

Theme-UI uses named color tokens (`bg`, `primary`…). DaisyUI uses CSS custom properties (`--color-primary`, …).  
Bridge them in `mainTheme.ts`:

```ts
colors: {
  text: 'var(--color-base-content)',
  background: 'var(--color-base-100)',
  primary: 'var(--color-primary)',
  surfaceGlass: 'color-mix(in oklab, var(--color-base-200) 80%, transparent)',
  surfaceOpaque: 'var(--color-base-200)',
  surfaceSecondary: 'var(--color-base-300)',
}
```

Now `sx={{ backgroundColor: 'surfaceGlass' }}` **automatically reacts to theme changes** — no component rewrites needed.

### Critical: Never Hardcode Colors in Components

Every hardcoded color breaks in a different theme:

| ❌ Hardcoded (breaks) | ✅ Theme-aware |
|---|---|
| `backgroundColor: 'black'` | `backgroundColor: 'var(--color-base-100)'` |
| `border: '8px solid #20421A'` | `border: '8px solid var(--color-primary)'` |
| `textShadow: '0 0 20px #15B400'` | `textShadow: '0 0 20px var(--color-primary)'` |
| `color: 'grey'` | `color: 'secondaryText'` (Theme-UI token) |
| `borderTop: '3px solid white'` | `borderColor: 'var(--color-base-content)'` |
| `WebkitTextStroke: '1px #000'` | `WebkitTextStroke: '1px var(--color-base-100)'` |

### `ThemeContext.tsx` — Key Decisions

```ts
// Always start at 'legacy' so transition plays on every visit
const [theme, setThemeState] = useState<PortfolioTheme>('legacy')

// Apply to DOM via data-theme — DaisyUI picks this up
useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme)
  // Intentionally do NOT localStorage.setItem the theme
  // Persist effects config + transition config, but not theme
}, [theme])
```

---

## Phase 3 — Transition Engine

### `useTransitionEngine.ts`

Lives outside context so it can be consumed at app root.  
Pattern: listen for the configured trigger → call `triggerTransition()` from context.

Supported triggers:
- `time-delay` — `setTimeout(delayMs)`
- `scroll-percent` — `IntersectionObserver` or `scroll` event
- `first-click` — one-time `click` listener
- `manual` — only from admin panel

```ts
// In your App root
useTransitionEngine()  // Hooks into context, fires when trigger conditions are met
```

### `TransitionOverlay` Component

```tsx
<TransitionOverlay active={isTransitioning} type={transitionConfig.transitionType} />
```

CSS classes:
- `.transition-overlay` — fixed full screen, `pointer-events: none`
- `.transition-overlay.active` — `opacity: 1`, animated
- `.transition-overlay[data-transition-type='glitch']` — scanline overlay variant

---

## Phase 4 — Effects Palette

### Architecture

Effects are stored as `Record<string, boolean>` in `ThemeContext`. Each key maps to an effect name.

The `useEffects` hook (or a dedicated `EffectsLayer` component) watches this record and mounts/unmounts visual layers:

```ts
// effects in context
{
  confetti: false,
  bubbles: false,
  matrix: false,
  particles: false,
  snow: false,
  fireworks: false,
  cursorTrail: false,
  godMode: false,
  chaosOverlay: false,
}
```

### Implementation per Effect

| Effect | Technique |
|---|---|
| `confetti` | `canvas-confetti` npm package — fire on toggle |
| `matrix` | `<canvas>` overlay, `requestAnimationFrame` rain loop |
| `bubbles` | CSS-animated `<div>` bubbles, created dynamically |
| `particles` | Canvas or CSS `clip-path: circle()` random particles |
| `snow` | Same as bubbles with white circles + slow drift |
| `fireworks` | `canvas-confetti` with `spread: 360, startVelocity: 50` |
| `cursorTrail` | `mousemove` listener, spawns fading `<span>` elements |
| `godMode` | CSS filter + `box-shadow` golden glow on `html` root |
| `chaosOverlay` | `hue-rotate`, `contrast`, `saturate` CSS animation on root |

### Key: Always Clean Up

```ts
useEffect(() => {
  if (!effects.godMode) return
  document.documentElement.classList.add('effect-god-mode')
  return () => document.documentElement.classList.remove('effect-god-mode')
}, [effects.godMode])
```

---

## Phase 5 — Admin Control Lab

### Architecture

- Rendered always at App root level (outside `MainLayout`)
- Shows minimal theme indicator pill when admin is NOT unlocked
- Unlocks via secret code sequence (see Phase 7)
- Floats bottom-right as `position: fixed`

### Tab Structure

```
Effects      → Theme swatches + Effect toggles
Transitions  → Trigger / style / delay / scroll controls
Projects     → Full CMS CRUD for portfolio data
Debug        → JSON state snapshot + event log
Secrets      → In-app documentation / easter egg guide
```

### Design System

```css
.admin-panel {
  background: linear-gradient(145deg, 
    color-mix(in oklab, var(--color-primary) 8%, var(--color-base-100)),
    var(--color-base-100)
  );
  border: 1px solid color-mix(in oklab, var(--color-primary) 28%, var(--color-base-300));
  box-shadow: 0 0 60px color-mix(in oklab, var(--color-primary) 8%, transparent);
  backdrop-filter: blur(24px);
}
```

Key: use `color-mix(in oklab, var(--color-primary) X%, ...)` everywhere for automatic theme reactivity.

### Effect Badge Pattern

```tsx
<button
  className={`admin-effect-badge${enabled ? ' on' : ''}`}
  style={enabled ? { '--effect-color': meta.color } as React.CSSProperties : undefined}
  onClick={() => toggleEffect(effectKey)}
>
```

```css
.admin-effect-badge.on {
  border-color: var(--effect-color, var(--color-primary));
  box-shadow: 0 0 14px color-mix(in oklab, var(--effect-color, var(--color-primary)) 40%, transparent);
}
```

---

## Phase 6 — Typewriter Ghost

### `useTypewriterGhost.ts`

```ts
// Watch global keydown (skip inputs/textareas/selects)
// Build rolling 32-char buffer
// Set visible=true on keystroke, visible=false after 2400ms idle
// Clear chars 500ms after invisible (allow CSS fade)
```

### `TypewriterGhost.tsx`

```tsx
<div className={`typewriter-ghost${visible ? ' visible' : ''}`}>
  <span className="typewriter-chars">
    {chars.map(gc => <span key={gc.id} className="typewriter-char">{gc.char}</span>)}
  </span>
  <span className="typewriter-cursor" />
</div>
```

### CSS

```css
.typewriter-ghost {
  position: fixed; top: 1.5rem; left: 1.75rem; z-index: 200;
  font-family: 'IBM Plex Mono', monospace;
  color: color-mix(in oklab, var(--color-primary) 65%, var(--color-base-content));
  text-shadow: 0 0 12px color-mix(in oklab, var(--color-primary) 55%, transparent);
  opacity: 0; transition: opacity 300ms ease;
}
.typewriter-ghost.visible { opacity: 0.48; }
.typewriter-char { animation: typewriter-pop 0.14s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
```

---

## Phase 7 — Easter Eggs

### `useEasterEgg.ts`

Watches the same global keydown stream as the typewriter ghost.  
Maintains a rolling string buffer and checks for known sequences:

```ts
const SEQUENCES = {
  secretWord: 'kpinc425',
  godMode: 'iddqd',
  chaosMode: 'idkfa',
  konami: '↑↑↓↓←→←→ba',
}
```

### Wiring

```tsx
useEasterEgg({
  onSecretWord: () => { unlockAdmin('secret word'); setAdminOpen(true) },
  onKonami: () => triggerTransition('konami'),
  onIddqd: () => toggleEffect('godMode'),
  onIdkfa: () => toggleEffect('chaosOverlay'),
})
```

---

## Hardening: Theme-Aware Components

### The Audit Checklist

When porting any existing component, scan for:

- [ ] `color: 'black'` or `color: 'white'` — replace with `'text'` or `'background'` tokens
- [ ] `backgroundColor: 'black'` — replace with `'var(--color-base-100)'`
- [ ] Any hex color in `sx` prop — replace with CSS var or Theme-UI token
- [ ] `border` with hardcoded hex — replace with `'var(--color-base-300)'` or `'var(--color-primary)'`
- [ ] `textShadow` with hardcoded color — replace with `'var(--color-primary)'`
- [ ] `WebkitTextStroke` with hardcoded color — replace with `'var(--color-base-100)'` (inverted from bg)

### Quick Reference Mapping

```
black / #000    → var(--color-base-100)     (darkest background)
white / #fff    → var(--color-base-content) (text color)
brand green     → var(--color-primary)      (theme accent)
grey text       → secondaryText token       (55% mixed base-content)
surface cards   → surfaceGlass / surfaceOpaque  tokens
borders         → var(--color-base-300)
active borders  → var(--color-primary)
glows           → color-mix(in oklab, var(--color-primary) 40%, transparent)
```

---

## Extraction: Turning This Into a Library

### Package: `@kpinc/portfolio-engine`

Candidate exports:

```ts
// Core
export { ThemeTransitionProvider, useThemeTransition } from './context/ThemeContext'
export type { PortfolioTheme, TransitionConfig, TransitionType, TransitionTrigger }

// Hooks
export { useTransitionEngine } from './hooks/useTransitionEngine'
export { useEasterEgg } from './hooks/useEasterEgg'
export { useTypewriterGhost } from './hooks/useTypewriterGhost'

// Components
export { default as AdminPanel } from './components/AdminPanel'
export { default as TransitionOverlay } from './components/TransitionOverlay'
export { default as TypewriterGhost } from './components/TypewriterGhost'
export { default as EffectsLayer } from './components/EffectsLayer'

// CSS
export './styles/admin-panel.css'
export './styles/typewriter-ghost.css'
export './styles/transition-overlay.css'
```

### What Needs Parameterizing Before Extraction

1. **Theme list** — hardcoded to 6 named themes. Should accept `theme[]` generic
2. **Secret codes** — hardcoded strings. Should accept `Record<string, string>` or config object
3. **Effect implementations** — currently abstract (toggled but not rendered). Each effect needs an `EffectRenderer` interface
4. **CSS** — currently coupled to DaisyUI CSS vars. Should accept `--color-primary` override or theme token map

### Recommended Library Shape

```ts
<PortfolioEngineProvider
  themes={['legacy', 'jade', 'vapor']}
  defaultTheme="legacy"
  autoTransitionTo="jade"
  secrets={{ adminPanel: 'myadmincode', godMode: 'iddqd' }}
  effects={['confetti', 'matrix', 'snow']}
>
  {children}
  <AdminPanel />
  <TypewriterGhost />
  <TransitionOverlay />
  <EffectsLayer />
</PortfolioEngineProvider>
```

---

## Known Pitfalls

| Pitfall | Fix |
|---|---|
| `@tailwindcss/vite` missing → all CSS vars empty | Always add to `vite.config.ts`, comes BEFORE `react()` in plugins |
| `npm install` peer dependency conflict | Use `--legacy-peer-deps` |
| Old admin CSS orphaned after `replace_string_in_file` | Trim file lines with PowerShell after complex string replacements |
| Theme persisted in localStorage → transition never plays | Never persist `theme` key; start at 'legacy' every visit |
| Effects toggled but nothing renders | Must wire effects from context into a rendering layer (canvas / DOM) |
| `lightningcss` `@plugin` unknown at-rule warnings | Pre-existing, non-blocking with `@tailwindcss/vite` (minifier is less strict than strict mode) |
| Theme-UI `WebkitTextStroke: '1px black'` breaks on light themes | Replace with `'1px var(--color-base-100)'` — picks the "background inverse" |
| `color: 'grey'` on text doesn't adapt | Use `color: 'secondaryText'` token or `'color-mix(in oklab, var(--color-base-content) 55%, transparent)'` |

---

*Written from the kp-portfolio glow-up session, March 2025.*  
*Next: extract `@kpinc/portfolio-engine` as a standalone npm package.*
