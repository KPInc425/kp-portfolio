import { useEffect, useRef, useState } from 'react'

export type GhostChar = {
  id: string
  char: string
}

export function useTypewriterGhost() {
  const [chars, setChars] = useState<GhostChar[]>([])
  const [visible, setVisible] = useState(false)
  const clearTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const counterRef = useRef(0)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return
      // Only printable single characters
      if (event.key.length !== 1) return

      const id = `gc-${Date.now()}-${counterRef.current++}`

      setChars((prev) => {
        const next = [...prev, { id, char: event.key }]
        // Rolling 32-char buffer
        return next.length > 32 ? next.slice(next.length - 32) : next
      })
      setVisible(true)

      if (clearTimerRef.current) clearTimeout(clearTimerRef.current)
      clearTimerRef.current = setTimeout(() => {
        setVisible(false)
        // Allow the fade-out CSS transition to finish before clearing DOM
        setTimeout(() => setChars([]), 500)
      }, 2400)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      if (clearTimerRef.current) clearTimeout(clearTimerRef.current)
    }
  }, [])

  return { chars, visible }
}
