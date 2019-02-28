// Components:
import * as React from 'react'
import cx from 'classnames'
import { getClassNames } from '../../utils/getClassNames'
import { TailWindCSS } from './../../types/TailWindProps'

// ================================================================================================

export interface ButtonProps extends TailWindCSS {
  /** pass any normal button props here */
  bg?: string
  btnProps?: React.HTMLProps<HTMLButtonElement>
  children?: any
  className?: string
  closeThickness?: string
  color?: string
  disabled?: boolean
  loading?: boolean
  hollow?: boolean
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  ref?: React.MutableRefObject<HTMLButtonElement>
  /** ripple effect on click */
  ripple?: boolean
  style?: React.CSSProperties
  type?: string
}

export const Button: React.FunctionComponent<ButtonProps> = React.memo(
  React.forwardRef((props, ref) => {
    const {
      bg,
      btnProps,
      children,
      className,
      color,
      disabled,
      loading,
      onClick,
      hollow,
      ripple,
      style,
      type,
      ...styleProps
    } = props

    // Hooks:
    const btnRef = React.useRef<HTMLButtonElement>(null)

    React.useImperativeHandle(ref, () => btnRef.current)

    // Styles:
    let border = 'border-transparent'
    let background = 'bg-transparent'
    let text = `text-${color}`

    switch (true) {
      case hollow:
        background = cx(`bg-transparent `, !disabled && `hover:bg-${bg}`)
        text = cx(`text-${bg}`, !disabled && `hover:text-${color}`)
        border = `border-${bg}`
        break
      default:
        background = cx(`bg-${bg} `, !disabled && `hover:bg-${bg}-dark`)
        text = `text-${color}`
    }

    const styleOptions = [background, border, text]

    const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
      try {
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
      } catch (error) {
        console.log('ripple effect not working.')
      }
    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !loading) {
        ripple && createRipple(e)
        onClick && onClick(e)
      }
    }

    return (
      <button
        className={cx(
          className && className,
          'Button focus:outline-none transition',
          loading && 'spinner',
          hollow && 'outline',
          disabled && 'cursor-not-allowed disabled',
          styleOptions,
          getClassNames(styleProps)
        )}
        onClick={handleClick}
        style={style && style}
        type={type}
        {...btnProps}
        ref={btnRef}
      >
        {!loading && children}
      </button>
    )
  })
)

Button.defaultProps = {
  bg: 'first',
  color: 'white',
  position: 'relative',
  overflow: 'hidden ',
  ripple: false,
  type: 'button'
}
