// Components:
import * as React from 'react'
import cx from 'classnames'

const { useEffect, useState } = React
// ================================================================================================

// Props:

export interface ScrollTopProps {
  className?: string
  color?: string
  icon?: React.ReactNode
  showAfter?: number
  size?: number
  style?: React.CSSProperties
}

const scrollTop = () => {
  window.scroll({ top: 0, behavior: 'smooth' })
}

export const ScrollTop: React.FunctionComponent<ScrollTopProps> = React.memo(
  ({ className, color, icon, size, showAfter, style }) => {
    const [show, setShow] = useState(false)

    const showButton = () => {
      const doc = document.documentElement
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      if (show !== top > showAfter) setShow(top > showAfter)
    }

    useEffect(() => {
      window.addEventListener('scroll', showButton)
      return () => {
        window.removeEventListener('scroll', showButton)
      }
    })

    const scrolltopIcon = icon ? (
      icon
    ) : (
      <div className="ScrollTop-icon mt-px w-3 h-3 border-white rotate-45 border-t-2 border-l-2" />
    )
    return (
      <div
        className={cx(
          `ScrollTop w-${size} h-${size} bg-${color} hover:bg-${color}-dark fixed rounded-1/2 b-2 r-2 flex justify-center items-center cursor-pointer transition`,
          show ? 'visible scale-100' : 'invisible  scale-0',
          className && className
        )}
        onClick={scrollTop}
        style={style}
      >
        {scrolltopIcon}
      </div>
    )
  }
)

ScrollTop.defaultProps = {
  color: 'first',
  showAfter: 200,
  size: 10
}
