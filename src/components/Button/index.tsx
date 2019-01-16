// Components:
import * as React from 'react'
import cx from 'classnames'
import { getClassNames } from '../../utils/getClassNames'

// ================================================================================================

export interface ButtonProps extends TailWindCSS {
  /** pass any normal button props here */
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
  type?: 'first' | 'second' | 'third' | 'fourth' | 'success' | 'error' | 'grey'
}

export const Button: React.FunctionComponent<ButtonProps> = React.memo(props => {
  const {
    btnProps,
    children,
    className,
    disabled,
    inline,
    loading,
    onClick,
    outLine,
    style,
    type
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
      background = `bg-transparent hover:bg-${type}`
      text = `text-${type} hover:text-white`
      border = `border-2 border-${type}`
      break
    case inline:
      background = 'bg-transparent'
      text = `text-${type} hover:underline`
      break
    default:
      background = `bg-${type} hover:bg-${type}-dark`
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
    if (onClick && !disabled && !loading) {
      createRipple(e)
      onClick()
    }
  }

  return (
    <button
      className={cx(
        'Button focus:outline-none transition overflow-hidden relative',
        getClassNames(props),
        loading && 'spinner',
        styleOptions,
        className && className
      )}
      onClick={handleClick}
      ref={btnRef}
      style={style && style}
      {...btnProps}
    >
      {!loading && children}
    </button>
  )
})

Button.defaultProps = {
  p: '2',
  type: 'first'
}
