import type { TransitionType } from '../themes/themeRegistry'

type TransitionOverlayProps = {
  active: boolean
  type: TransitionType
  /** True once the theme has been swapped under the overlay cover. */
  themeSwapped: boolean
}

const TransitionOverlay = ({ active, type, themeSwapped }: TransitionOverlayProps) => {
  const classes = [
    'transition-overlay',
    active ? 'active' : '',
    themeSwapped ? 'theme-swapped' : '',
  ].filter(Boolean).join(' ')
  return <div className={classes} data-transition-type={type} aria-hidden="true" />
}

export default TransitionOverlay
