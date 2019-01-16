import * as React from 'react'
import cx from 'classnames'
import posed, { PoseGroup } from 'react-pose'

// ================================================================================================

// Animated wrapper:
const AnimatedOverlay = posed.div({
  preEnter: {
    y: '10%',
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 300
    }
  },
  exit: {
    y: '10%',
    opacity: 0,
    delay: 0,
    staggerChildren: 0,
    transition: {
      duration: 200
    }
  }
})

// Props:
export interface OverlayProps {
  children?: any
  className?: string
  color?: string
  fixed?: boolean
  open: boolean
  style?: React.CSSProperties
  zIndex?: number
}

export const Overlay: React.FunctionComponent<OverlayProps> = React.memo(
  ({ className, children, color, fixed, open, style, zIndex }) => {
    return (
      <PoseGroup preEnterPose="preEnter">
        {open && (
          <AnimatedOverlay
            className={cx(
              `Overlay pin overflow-y-auto overflow-x-hidden w-full bg-${color} z-${zIndex}`,
              fixed ? 'fixed h-screen' : 'absolute h-full',
              className && className
            )}
            key="overlay"
            style={style}
          >
            {children}
          </AnimatedOverlay>
        )}
      </PoseGroup>
    )
  }
)

Overlay.defaultProps = {
  color: 'grey',
  fixed: true,
  zIndex: 10
}
