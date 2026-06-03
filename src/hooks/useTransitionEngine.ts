import { useEffect } from 'react'
import { useThemeTransition } from '../context/ThemeContext'

export function useTransitionEngine() {
  const { transitionConfig, theme, hasTransitioned, triggerTransition, pushDebugLog } = useThemeTransition()

  useEffect(() => {
    if (!transitionConfig.autoEnabled || theme !== 'legacy' || hasTransitioned) {
      return
    }

    if (transitionConfig.trigger !== 'time-delay') {
      return
    }

    pushDebugLog(`Auto transition scheduled for ${transitionConfig.delayMs}ms.`)
    const timeout = window.setTimeout(() => triggerTransition('time-delay'), transitionConfig.delayMs)

    return () => window.clearTimeout(timeout)
  }, [transitionConfig, theme, hasTransitioned, triggerTransition, pushDebugLog])

  useEffect(() => {
    if (!transitionConfig.autoEnabled || theme !== 'legacy' || hasTransitioned) {
      return
    }

    if (transitionConfig.trigger !== 'scroll-percent') {
      return
    }

    const onScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollableHeight <= 0) {
        return
      }

      const progress = (window.scrollY / scrollableHeight) * 100
      if (progress >= transitionConfig.scrollPercent) {
        triggerTransition('scroll-percent')
        window.removeEventListener('scroll', onScroll)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [transitionConfig, theme, hasTransitioned, triggerTransition])

  useEffect(() => {
    if (!transitionConfig.autoEnabled || theme !== 'legacy' || hasTransitioned) {
      return
    }

    if (transitionConfig.trigger !== 'first-click') {
      return
    }

    const onPointerDown = () => {
      triggerTransition('first-click')
      window.removeEventListener('pointerdown', onPointerDown)
    }

    window.addEventListener('pointerdown', onPointerDown, { once: true })
    return () => window.removeEventListener('pointerdown', onPointerDown)
  }, [transitionConfig, theme, hasTransitioned, triggerTransition])
}