import { useEffect, useRef } from 'react'

type UseEasterEggOptions = {
  onSecretWord: () => void
  onKonami: () => void
  onIddqd: () => void
  onIdkfa: () => void
}

const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

export function useEasterEgg({ onSecretWord, onKonami, onIddqd, onIdkfa }: UseEasterEggOptions) {
  const recentKeys = useRef<string[]>([])
  const secretBuffer = useRef('')

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
        return
      }

      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
      recentKeys.current = [...recentKeys.current, key].slice(-konamiSequence.length)

      if (recentKeys.current.join('|') === konamiSequence.join('|')) {
        onKonami()
      }

      if (event.key.length === 1) {
        secretBuffer.current = `${secretBuffer.current}${event.key.toLowerCase()}`.slice(-16)
        if (secretBuffer.current.includes('kpinc425')) {
          onSecretWord()
        }
        if (secretBuffer.current.includes('iddqd')) {
          onIddqd()
        }
        if (secretBuffer.current.includes('idkfa')) {
          onIdkfa()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onSecretWord, onKonami, onIddqd, onIdkfa])
}