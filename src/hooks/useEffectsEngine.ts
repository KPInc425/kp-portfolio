import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import { useThemeTransition } from '../context/ThemeContext'

// ─── helpers ────────────────────────────────────────────────────────────────

function getPrimary(): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue('--color-primary')
    .trim() || '#22c55e'
}

// ─── individual effect runners ──────────────────────────────────────────────

function startConfetti(stopRef: React.MutableRefObject<(() => void) | null>) {
  const origin = { x: 0.5, y: 0.6 }
  confetti({ particleCount: 160, spread: 80, origin, startVelocity: 45 })
  const interval = window.setInterval(() => {
    confetti({ particleCount: 40, spread: 55, origin, startVelocity: 30 })
  }, 2400)
  stopRef.current = () => {
    clearInterval(interval)
    confetti.reset()
  }
}

function startFireworks(stopRef: React.MutableRefObject<(() => void) | null>) {
  const colors = ['#ff0', '#f0f', '#0ff', '#f60', '#6f0']
  let frame = 0
  const interval = window.setInterval(() => {
    const x = 0.2 + Math.random() * 0.6
    const y = 0.2 + Math.random() * 0.4
    confetti({
      particleCount: 60 + Math.floor(Math.random() * 40),
      angle: 90,
      spread: 360,
      startVelocity: 35 + Math.random() * 20,
      origin: { x, y },
      colors,
      shapes: ['circle'],
      scalar: 0.9,
    })
    frame++
    if (frame > 80) {
      clearInterval(interval)
      stopRef.current = null
    }
  }, 500)
  stopRef.current = () => {
    clearInterval(interval)
    confetti.reset()
  }
}

function startMatrix(
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
  stopRef: React.MutableRefObject<(() => void) | null>,
) {
  const canvas = document.createElement('canvas')
  canvas.id = 'effect-matrix-canvas'
  canvas.style.cssText =
    'position:fixed;inset:0;z-index:9998;pointer-events:none;opacity:0.18;'
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  document.body.appendChild(canvas)
  canvasRef.current = canvas

  const ctx = canvas.getContext('2d')!
  const cols = Math.floor(canvas.width / 16)
  const drops = Array.from({ length: cols }, () => Math.random() * -canvas.height)

  const onResize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  window.addEventListener('resize', onResize)

  let rafId: number
  const tick = () => {
    ctx.fillStyle = 'rgba(0,0,0,0.06)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = getPrimary()
    ctx.font = '14px "IBM Plex Mono", monospace'
    for (let i = 0; i < drops.length; i++) {
      const char = String.fromCharCode(0x30a0 + Math.random() * 96)
      ctx.fillText(char, i * 16, drops[i])
      if (drops[i] > canvas.height && Math.random() > 0.975) drops[i] = 0
      drops[i] += 16
    }
    rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)

  stopRef.current = () => {
    cancelAnimationFrame(rafId)
    window.removeEventListener('resize', onResize)
    canvas.remove()
    canvasRef.current = null
  }
}

function startParticles(
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
  stopRef: React.MutableRefObject<(() => void) | null>,
) {
  const canvas = document.createElement('canvas')
  canvas.id = 'effect-particles-canvas'
  canvas.style.cssText =
    'position:fixed;inset:0;z-index:9997;pointer-events:none;opacity:0.35;'
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  document.body.appendChild(canvas)
  canvasRef.current = canvas

  const ctx = canvas.getContext('2d')!
  const color = getPrimary()
  type Particle = { x: number; y: number; r: number; dx: number; dy: number }
  const particles: Particle[] = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 1.5 + Math.random() * 3,
    dx: (Math.random() - 0.5) * 0.6,
    dy: (Math.random() - 0.5) * 0.6,
  }))

  const onResize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  window.addEventListener('resize', onResize)

  let rafId: number
  const tick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = color
    for (const p of particles) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fill()
      p.x = (p.x + p.dx + canvas.width) % canvas.width
      p.y = (p.y + p.dy + canvas.height) % canvas.height
    }
    rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)

  stopRef.current = () => {
    cancelAnimationFrame(rafId)
    window.removeEventListener('resize', onResize)
    canvas.remove()
    canvasRef.current = null
  }
}

function startBubbles(stopRef: React.MutableRefObject<(() => void) | null>) {
  const container = document.createElement('div')
  container.id = 'effect-bubbles'
  container.style.cssText =
    'position:fixed;inset:0;z-index:9996;pointer-events:none;overflow:hidden;'
  document.body.appendChild(container)

  const color = getPrimary()
  const timers: number[] = []

  const spawnBubble = () => {
    const bubble = document.createElement('div')
    const size = 18 + Math.random() * 40
    bubble.style.cssText = `
      position:absolute;
      bottom:-${size}px;
      left:${Math.random() * 100}%;
      width:${size}px;
      height:${size}px;
      border-radius:50%;
      border:2px solid ${color};
      background:color-mix(in oklab, ${color} 12%, transparent);
      opacity:0.7;
      animation:bubble-rise ${4 + Math.random() * 6}s ease-in forwards;
    `
    container.appendChild(bubble)
    const t = window.setTimeout(() => bubble.remove(), 10500)
    timers.push(t)
  }

  const interval = window.setInterval(spawnBubble, 300)

  stopRef.current = () => {
    clearInterval(interval)
    timers.forEach(clearTimeout)
    container.remove()
  }
}

function startSnow(stopRef: React.MutableRefObject<(() => void) | null>) {
  const container = document.createElement('div')
  container.id = 'effect-snow'
  container.style.cssText =
    'position:fixed;inset:0;z-index:9995;pointer-events:none;overflow:hidden;'
  document.body.appendChild(container)

  const timers: number[] = []

  const spawnFlake = () => {
    const flake = document.createElement('div')
    const size = 4 + Math.random() * 8
    const drift = (Math.random() - 0.5) * 60
    flake.style.cssText = `
      position:absolute;
      top:-${size}px;
      left:${Math.random() * 100}%;
      width:${size}px;
      height:${size}px;
      border-radius:50%;
      background:#e8f4ff;
      opacity:${0.4 + Math.random() * 0.5};
      animation:snow-fall ${5 + Math.random() * 6}s linear forwards;
      --drift:${drift}px;
    `
    container.appendChild(flake)
    const t = window.setTimeout(() => flake.remove(), 11500)
    timers.push(t)
  }

  const interval = window.setInterval(spawnFlake, 160)

  stopRef.current = () => {
    clearInterval(interval)
    timers.forEach(clearTimeout)
    container.remove()
  }
}

function startCursorTrail(stopRef: React.MutableRefObject<(() => void) | null>) {
  const color = getPrimary()
  const spans: HTMLSpanElement[] = []

  const onMove = (e: MouseEvent) => {
    const span = document.createElement('span')
    span.style.cssText = `
      position:fixed;
      left:${e.clientX - 4}px;
      top:${e.clientY - 4}px;
      width:8px;
      height:8px;
      border-radius:50%;
      background:${color};
      pointer-events:none;
      z-index:9999;
      opacity:0.8;
      transition:opacity 600ms ease, transform 600ms ease;
    `
    document.body.appendChild(span)
    spans.push(span)
    requestAnimationFrame(() => {
      span.style.opacity = '0'
      span.style.transform = 'scale(2)'
    })
    window.setTimeout(() => {
      span.remove()
      const idx = spans.indexOf(span)
      if (idx !== -1) spans.splice(idx, 1)
    }, 650)
  }

  window.addEventListener('mousemove', onMove)

  stopRef.current = () => {
    window.removeEventListener('mousemove', onMove)
    spans.forEach(s => s.remove())
    spans.length = 0
  }
}

// ─── main hook ──────────────────────────────────────────────────────────────

export function useEffectsEngine() {
  const { effects } = useThemeTransition()

  // Per-effect stop functions stored in a single ref map
  const stopFns = useRef<Partial<Record<string, (() => void) | null>>>({})
  // Canvas element refs for canvas-based effects
  const matrixCanvas = useRef<HTMLCanvasElement | null>(null)
  const particlesCanvas = useRef<HTMLCanvasElement | null>(null)

  // Build a { current } shim that reads/writes into the stopFns map.
  // We call this inline in each useEffect to obtain a stable MutableRefObject shape.
  const makeStopRef = (key: string): React.MutableRefObject<(() => void) | null> => ({
    get current() { return stopFns.current[key] ?? null },
    set current(v) { stopFns.current[key] = v },
  })

  // ── confetti ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!effects.confetti) { stopFns.current['confetti']?.(); stopFns.current['confetti'] = null; return }
    startConfetti(makeStopRef('confetti'))
    return () => { stopFns.current['confetti']?.(); stopFns.current['confetti'] = null }
  }, [effects.confetti])

  // ── fireworks ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!effects.fireworks) { stopFns.current['fireworks']?.(); stopFns.current['fireworks'] = null; return }
    startFireworks(makeStopRef('fireworks'))
    return () => { stopFns.current['fireworks']?.(); stopFns.current['fireworks'] = null }
  }, [effects.fireworks])

  // ── matrix ────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!effects.matrix) { stopFns.current['matrix']?.(); stopFns.current['matrix'] = null; return }
    startMatrix(matrixCanvas, makeStopRef('matrix'))
    return () => { stopFns.current['matrix']?.(); stopFns.current['matrix'] = null }
  }, [effects.matrix])

  // ── particles ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!effects.particles) { stopFns.current['particles']?.(); stopFns.current['particles'] = null; return }
    startParticles(particlesCanvas, makeStopRef('particles'))
    return () => { stopFns.current['particles']?.(); stopFns.current['particles'] = null }
  }, [effects.particles])

  // ── bubbles ───────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!effects.bubbles) { stopFns.current['bubbles']?.(); stopFns.current['bubbles'] = null; return }
    startBubbles(makeStopRef('bubbles'))
    return () => { stopFns.current['bubbles']?.(); stopFns.current['bubbles'] = null }
  }, [effects.bubbles])

  // ── snow ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!effects.snow) { stopFns.current['snow']?.(); stopFns.current['snow'] = null; return }
    startSnow(makeStopRef('snow'))
    return () => { stopFns.current['snow']?.(); stopFns.current['snow'] = null }
  }, [effects.snow])

  // ── cursorTrail ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (!effects.cursorTrail) { stopFns.current['cursorTrail']?.(); stopFns.current['cursorTrail'] = null; return }
    startCursorTrail(makeStopRef('cursorTrail'))
    return () => { stopFns.current['cursorTrail']?.(); stopFns.current['cursorTrail'] = null }
  }, [effects.cursorTrail])

  // ── godMode ───────────────────────────────────────────────────────────────
  useEffect(() => {
    if (effects.godMode) {
      document.documentElement.classList.add('effect-god-mode')
    } else {
      document.documentElement.classList.remove('effect-god-mode')
    }
    return () => document.documentElement.classList.remove('effect-god-mode')
  }, [effects.godMode])

  // ── chaosOverlay ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (effects.chaosOverlay) {
      document.documentElement.classList.add('effect-chaos')
    } else {
      document.documentElement.classList.remove('effect-chaos')
    }
    return () => document.documentElement.classList.remove('effect-chaos')
  }, [effects.chaosOverlay])
}
