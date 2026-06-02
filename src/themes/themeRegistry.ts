/**
 * Theme registry — generic over N themes.
 *
 * Each theme declares:
 *   - id:             string key used by the engine (matches DaisyUI's `name`)
 *   - displayName:    human-readable label for the admin panel
 *   - description:    one-line description for the admin panel
 *   - isDark:         whether the theme is dark mode
 *   - daisyuiBlockId: matches the @plugin 'daisyui/theme' block name in App.css
 *   - daisyuiBlock:   raw CSS for the DaisyUI @plugin block (single source of truth)
 *   - tailwindTokens: optional Tailwind theme extension values
 *   - defaultTransition: TransitionConfig — the auto-transition that fires when
 *                       the engine decides to leave this theme (e.g. the time-delay
 *                       that auto-transitions legacy → neo-dark on first visit)
 *   - availableTransitions: list of trigger types this theme supports. Used by
 *                          the admin panel to render available transition controls.
 *
 * Adding a new theme = one entry here + one @plugin 'daisyui/theme' block in App.css.
 * No engine changes needed.
 */

export type TransitionTrigger =
  | 'time-delay'
  | 'scroll-percent'
  | 'first-click'
  | 'manual'
  | 'konami-code'
  | 'none'

export type TransitionType = 'cinematic' | 'glitch' | 'crossfade' | 'scanline' | 'wipe'

export type TransitionConfig = {
  /** What causes this transition to fire. */
  trigger: TransitionTrigger
  /** For 'time-delay' trigger. */
  delayMs: number
  /** For 'scroll-percent' trigger (0-100). */
  scrollPercent: number
  /** Visual style of the overlay. */
  transitionType: TransitionType
  /** How long the overlay animation runs. */
  durationMs: number
  /** When true, the engine will auto-fire this transition when its trigger condition is met. */
  autoEnabled: boolean
  /** Optional: which theme to land on after the transition. Defaults to the next theme in the registry. */
  targetThemeId?: string
}

export type ThemeDefinition = {
  id: string
  displayName: string
  description: string
  isDark: boolean
  /** The daisyuiBlockId must match the @plugin 'daisyui/theme' { name: "..." } in App.css. */
  daisyuiBlockId: string
  defaultTransition: TransitionConfig
  availableTransitions: TransitionType[]
}

const legacyTheme: ThemeDefinition = {
  id: 'legacy',
  displayName: 'Legacy',
  description: 'Original pre-transition look. Dark green accent, glass surfaces, Trebuchet MS.',
  isDark: true,
  daisyuiBlockId: 'legacy',
  defaultTransition: {
    trigger: 'time-delay',
    delayMs: 8000,
    scrollPercent: 20,
    transitionType: 'cinematic',
    durationMs: 3200,
    autoEnabled: true,
    targetThemeId: 'neo-dark',
  },
  availableTransitions: ['cinematic', 'glitch', 'crossfade'],
}

const neoDarkTheme: ThemeDefinition = {
  id: 'neo-dark',
  displayName: 'Neo-Dark',
  description: 'Modernized neo-dark theme. M3 color roles, Geist/Inter/JetBrains Mono, glass cards, bento grid.',
  isDark: true,
  daisyuiBlockId: 'neo-dark',
  defaultTransition: {
    trigger: 'manual',
    delayMs: 0,
    scrollPercent: 0,
    transitionType: 'cinematic',
    durationMs: 1800,
    autoEnabled: false,
  },
  availableTransitions: ['cinematic', 'glitch', 'crossfade', 'scanline'],
}

/**
 * The canonical theme list. Order matters: the first theme is the default.
 * To add a new theme: append a ThemeDefinition here AND add a matching
 * `@plugin 'daisyui/theme' { name: "<daisyuiBlockId>"; ... }` block in App.css.
 */
export const themes: ThemeDefinition[] = [legacyTheme, neoDarkTheme]

/** Look up a theme by id. Returns undefined if not found. */
export function getTheme(id: string): ThemeDefinition | undefined {
  return themes.find((t) => t.id === id)
}

/** Return the next theme in the registry, wrapping at the end. */
export function getNextTheme(id: string): ThemeDefinition | undefined {
  const idx = themes.findIndex((t) => t.id === id)
  if (idx === -1) return undefined
  return themes[(idx + 1) % themes.length]
}

/** Return the default theme (the first one in the registry). */
export function getDefaultTheme(): ThemeDefinition {
  return themes[0]
}
