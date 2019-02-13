import * as React from 'react'
import cx from 'classnames'
import posed, { PoseGroup } from 'react-pose'
import { easing, tween } from 'popmotion'

const { useEffect, useRef } = React

// ================================================================================================

// Props:
export interface DialogProps {
  children?: any
  className?: string
  color?: string
  contentClassName?: string
  onClose: () => void
  opacity?: number
  open: boolean
  style?: React.CSSProperties
}

const DialogContainer = posed.div({
  preEnter: {
    opacity: 0
  },
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0,
    delay: 300,
    transition: {
      ease: 'easeIn',
      duration: 250
    }
  }
})

const DialogWrapper = posed.div({
  preEnter: {
    opacity: 0,
    y: '-20px'
  },
  enter: {
    opacity: 1,
    y: '0',
    delay: 250,
    transition: {
      duration: 350
    }
  },
  exit: {
    opacity: 0,
    y: '-20px',
    transition: {
      ease: 'easeIn'
    }
  }
})

export const Dialog: React.FunctionComponent<DialogProps> = React.memo(
  ({ children, className, color, contentClassName, onClose, opacity, open, style }) => {
    // Hooks:
    const background = useRef(null)
    const content = useRef(null)

    useEffect(() => {
      content.current && content.current.focus()
    })

    return (
      <PoseGroup preEnterPose="preEnter">
        {open && (
          <DialogContainer
            className={cx(
              `Dialog fixed pin overflow-y-auto overflow-x-hidden w-full h-screen flex justify-center items-center`,
              className && className
            )}
            key="DialogContainer"
          >
            <div
              className={cx(
                `Dialog-background pin bg-${color} overflow-y-auto overflow-x-hidden fixed w-full h-screen opacity-${opacity}`
              )}
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                e.target === background.current && onClose()
              }
              ref={background}
            />
            <DialogWrapper
              className={cx(
                'Dialog-content fixed bg-white min-w-6 p-4 focus:outline-none overflow-y-auto',
                contentClassName && contentClassName
              )}
              onKeyDown={(e: React.KeyboardEvent) => e.keyCode === 27 && onClose()}
              style={style}
              tabIndex={0}
              ref={content}
            >
              {children}
            </DialogWrapper>
          </DialogContainer>
        )}
      </PoseGroup>
    )
  }
)

Dialog.defaultProps = {
  color: 'black',
  opacity: 50
}
