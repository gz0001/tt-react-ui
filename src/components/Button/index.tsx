// Components:
import * as React from 'react'
import cx from 'classnames'
import { getClassNames } from '../../utils/getClassNames'
import { TailWindCSS } from './../../types/TailWindProps'

// ================================================================================================

export interface ButtonProps extends TailWindCSS {
  /** pass any normal button props here */
  bg?: string | string[]
  btnProps?: React.HTMLProps<HTMLButtonElement>
  children?: any
  className?: string
  closeThickness?: string
  color?: string
  disabled?: boolean
  inline?: boolean
  loading?: boolean
  outLine?: boolean
  onClick?: () => void
  style?: React.CSSProperties
  type?: string
}

export const Button: React.FunctionComponent<ButtonProps> = React.memo(props => {
  const {
    bg,
    btnProps,
    children,
    className,
    disabled,
    inline,
    loading,
    onClick,
    outLine,
    style,
    type,
    ...styleProps
  } = props

  // Hook:
  const btnRef = React.useRef(null)

  // Styles:
  const display = inline ? 'inline-block' : 'block'
  let border = 'border-0'
  let background = 'bg-transparent'
  let text = 'text-text'

  switch (true) {
    case outLine:
      background = `bg-transparent hover:bg-${bg}`
      text = `text-${bg} hover:text-white`
      border = `border-2 border-${bg}`
      break
    case inline:
      background = 'bg-transparent'
      text = `text-${bg} hover:underline`
      break
    default:
      background = `bg-${bg} hover:bg-${bg}-dark`
      text = 'text-white'
  }

  if (disabled) {
    text = 'text-white'
    background = 'bg-grey cursor-not-allowed'
    border = 'border-0'
  }

  const styleOptions = [background, border, display, text]

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current
    if (btn) {
      if (btn.getElementsByClassName('Button-ripple').length > 0) {
        btn.getElementsByClassName('Button-ripple')[0].remove()
      }
      const circle = document.createElement('div')
      btn.appendChild(circle)
      const rect = btn.getBoundingClientRect()
      const d = Math.max(btn.clientHeight, btn.clientWidth)
      circle.style.width = circle.style.height = d + 'px'
      circle.style.left = e.clientX - rect.left - d / 2 + 'px'
      circle.style.top = e.clientY - rect.top - d / 2 + 'px'
      circle.classList.add('Button-ripple')
    }
  }
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      createRipple(e)
      onClick && onClick()
    }
  }

  return (
    <button
      className={cx(
        'Button focus:outline-none transition overflow-hidden relative',
        loading && 'spinner',
        styleOptions,
        getClassNames(styleProps),
        className && className
      )}
      onClick={handleClick}
      ref={btnRef}
      style={style && style}
      type={type}
      {...btnProps}
    >
      {!loading && children}
    </button>
  )
})

Button.defaultProps = {
  bg: 'first',
  type: 'button'
}
