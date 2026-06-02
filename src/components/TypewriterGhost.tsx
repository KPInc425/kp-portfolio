import { useTypewriterGhost } from '../hooks/useTypewriterGhost'

const TypewriterGhost = () => {
  const { chars, visible } = useTypewriterGhost()

  if (chars.length === 0) return null

  return (
    <div
      className={`typewriter-ghost${visible ? ' visible' : ''}`}
      aria-hidden="true"
      aria-live="off"
    >
      <div className="typewriter-chars">
        {chars.map((gc) => (
          <span key={gc.id} className="typewriter-char">
            {gc.char}
          </span>
        ))}
        <span className="typewriter-cursor" aria-hidden="true" />
      </div>
    </div>
  )
}

export default TypewriterGhost
