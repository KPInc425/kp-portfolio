import type { TransitionType } from '../themes/themeRegistry'

type TransitionOverlayProps = {
  active: boolean
  type: TransitionType
}

const TransitionOverlay = ({ active, type }: TransitionOverlayProps) => {
  return <div className={`transition-overlay${active ? ' active' : ''}`} data-transition-type={type} aria-hidden="true" />
}

export default TransitionOverlay
