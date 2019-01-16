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

  const handleClick = () => {
    if (onClick && !disabled && !loading) {
      onClick()
    }
  }

  return (
    <button
      className={cx(
        'Button focus:outline-none transition',
        getClassNames(props),
        loading && 'spinner',
        styleOptions,
        className && className
      )}
      onClick={onClick && handleClick}
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
