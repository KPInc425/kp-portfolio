import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  themes as registeredThemes,
  getTheme,
  getDefaultTheme,
  type ThemeDefinition,
  type TransitionConfig,
} from '../themes/themeRegistry'

export type { TransitionConfig, TransitionType, TransitionTrigger } from '../themes/themeRegistry'

export type PortfolioTheme = ThemeDefinition['id']

type ThemeTransitionContextValue = {
  theme: PortfolioTheme
  setTheme: (theme: PortfolioTheme) => void
  availableThemes: ThemeDefinition[]
  currentThemeDefinition: ThemeDefinition
  adminUnlocked: boolean
  unlockAdmin: (reason: string) => void
  isAdminOpen: boolean
  setAdminOpen: (isOpen: boolean) => void
  effects: Record<string, boolean>
  toggleEffect: (effectKey: string) => void
  transitionConfig: TransitionConfig
  updateTransitionConfig: (updates: Partial<TransitionConfig>) => void
  resetTransitionConfig: () => void
  triggerTransition: (reason: string) => void
  isTransitioning: boolean
  hasTransitioned: boolean
  debugLogs: string[]
  pushDebugLog: (message: string) => void
}

const ThemeTransitionContext = createContext<ThemeTransitionContextValue | null>(null)

const storageKeys = {
  adminUnlocked: 'portfolio-admin-unlocked',
  effects: 'portfolio-effects',
  transitionOverrides: 'portfolio-transition-overrides',
}

const defaultEffectState: Record<string, boolean> = {
  confetti: false, bubbles: false, matrix: false, particles: false, snow: false,
  fireworks: false, cursorTrail: false, godMode: false, chaosOverlay: false,
}

function loadTransitionOverrides(): Record<string, TransitionConfig> {
  try {
    const stored = localStorage.getItem(storageKeys.transitionOverrides)
    return stored ? (JSON.parse(stored) as Record<string, TransitionConfig>) : {}
  } catch { return {} }
}

export function ThemeTransitionProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<PortfolioTheme>(getDefaultTheme().id)
  const [adminUnlocked, setAdminUnlocked] = useState(() => localStorage.getItem(storageKeys.adminUnlocked) === 'true')
  const [isAdminOpen, setAdminOpen] = useState(false)
  const [effects, setEffects] = useState<Record<string, boolean>>(() => {
    const stored = localStorage.getItem(storageKeys.effects)
    return stored ? (JSON.parse(stored) as Record<string, boolean>) : defaultEffectState
  })
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [hasTransitioned, setHasTransitioned] = useState(false)
  const [debugLogs, setDebugLogs] = useState<string[]>([])

  const currentThemeDefinition = useMemo<ThemeDefinition>(
    () => getTheme(theme) ?? getDefaultTheme(),
    [theme],
  )

  const [transitionOverrides, setTransitionOverrides] = useState<Record<string, TransitionConfig>>(loadTransitionOverrides)

  const transitionConfig: TransitionConfig = useMemo(
    () => transitionOverrides[theme] ?? currentThemeDefinition.defaultTransition,
    [transitionOverrides, theme, currentThemeDefinition],
  )

  useEffect(() => {
    if (theme !== 'legacy') document.documentElement.setAttribute('data-theme', theme); else document.documentElement.removeAttribute('data-theme')
  }, [theme])

  useEffect(() => {
    localStorage.setItem(storageKeys.effects, JSON.stringify(effects))
  }, [effects])

  useEffect(() => {
    if (Object.keys(transitionOverrides).length > 0) {
      localStorage.setItem(storageKeys.transitionOverrides, JSON.stringify(transitionOverrides))
    } else {
      localStorage.removeItem(storageKeys.transitionOverrides)
    }
  }, [transitionOverrides])

  const pushDebugLog = useCallback((message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setDebugLogs((current) => [`${timestamp} ${message}`, ...current].slice(0, 40))
  }, [])

  const setTheme = useCallback((nextTheme: PortfolioTheme) => {
    if (!getTheme(nextTheme)) {
      pushDebugLog(`Rejected unknown theme: ${nextTheme}.`)
      return
    }
    setThemeState(nextTheme)
    pushDebugLog(`Theme set to ${nextTheme}.`)
  }, [pushDebugLog])

  const unlockAdmin = useCallback((reason: string) => {
    setAdminUnlocked(true)
    localStorage.setItem(storageKeys.adminUnlocked, 'true')
    pushDebugLog(`Admin unlocked: ${reason}.`)
  }, [pushDebugLog])

  const toggleEffect = useCallback((effectKey: string) => {
    setEffects((current) => ({ ...current, [effectKey]: !current[effectKey] }))
    pushDebugLog(`Effect toggled: ${effectKey}.`)
  }, [pushDebugLog])

  const updateTransitionConfig = useCallback((updates: Partial<TransitionConfig>) => {
    setTransitionOverrides((current) => {
      const base = current[theme] ?? currentThemeDefinition.defaultTransition
      const next = { ...base, ...updates }
      return { ...current, [theme]: next }
    })
    pushDebugLog('Transition config updated.')
  }, [theme, currentThemeDefinition, pushDebugLog])

  const resetTransitionConfig = useCallback(() => {
    setTransitionOverrides((current) => {
      const next = { ...current }
      delete next[theme]
      return next
    })
    pushDebugLog('Transition config reset to default.')
  }, [theme, pushDebugLog])

  const triggerTransition = useCallback((reason: string) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setHasTransitioned(false)
    pushDebugLog(`Transition triggered: ${reason}.`)
    const targetId = transitionConfig.targetThemeId
      ?? registeredThemes[(registeredThemes.findIndex((t) => t.id === theme) + 1) % registeredThemes.length]?.id
    if (!targetId) {
      pushDebugLog('No target theme available; aborting transition.')
      setIsTransitioning(false)
      return
    }
    // Overlay fades in (600ms css). At 2s: swap theme under black cover.
    window.setTimeout(() => {
      setThemeState(targetId as PortfolioTheme)
      pushDebugLog(`Theme swapped to ${targetId}.`)
    }, 2000)
    // hasTransitioned triggers overlay fade-out css (800ms css).
    window.setTimeout(() => {
      setHasTransitioned(true)
      pushDebugLog('Theme revealed (overlay fading out).')
    }, 2100)
    window.setTimeout(() => {
      setIsTransitioning(false)
      pushDebugLog('Transition complete.')
    }, transitionConfig.durationMs)
  }, [isTransitioning, pushDebugLog, transitionConfig, theme])

  const value = useMemo<ThemeTransitionContextValue>(() => ({
    theme, setTheme, availableThemes: registeredThemes, currentThemeDefinition,
    adminUnlocked, unlockAdmin, isAdminOpen, setAdminOpen,
    effects, toggleEffect, transitionConfig,
    updateTransitionConfig, resetTransitionConfig,
    triggerTransition, isTransitioning, hasTransitioned, debugLogs, pushDebugLog,
  }), [
    theme, setTheme, currentThemeDefinition,
    adminUnlocked, unlockAdmin, isAdminOpen, setAdminOpen,
    effects, toggleEffect, transitionConfig,
    updateTransitionConfig, resetTransitionConfig,
    triggerTransition, isTransitioning, hasTransitioned, debugLogs, pushDebugLog,
  ])

  return <ThemeTransitionContext.Provider value={value}>{children}</ThemeTransitionContext.Provider>
}

export function useThemeTransition() {
  const context = useContext(ThemeTransitionContext)
  if (!context) throw new Error('useThemeTransition must be used within ThemeTransitionProvider')
  return context
}
