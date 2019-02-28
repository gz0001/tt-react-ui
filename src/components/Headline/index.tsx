import * as React from 'react'
import cx from 'classnames'
import { getClassNames } from '../../utils/getClassNames'
import { TailWindCSS } from './../../types/TailWindProps'

// ================================================================================================

// Props:
export interface HeadlineProps extends TailWindCSS {
  bold?: boolean
  center?: boolean
  children: any
  /**
   * color of headline
   */
  color?: string

  className?: string
  headingProps?: React.HTMLProps<HTMLHeadingElement>
  /**
   * headline size
   *
   */
  hover?: string
  level?: '1' | '2' | '3' | '4' | '5' | '6'
  uppercase?: boolean
  ref?: React.Ref<HTMLHeadingElement>
  /**
   * style object
   *
   */
  style?: React.CSSProperties
  size?: string
}

export const Headline: React.FunctionComponent<HeadlineProps> = React.memo(React.forwardRef((props, ref) => {
  const {
    bold,
    center,
    children,
    color,
    className,
    headingProps,
    hover,
    level,
    uppercase,
    style,
    size,
    text: tx,
    ...styleProps
  } = props
  const Tag: any = `h${level}`

  const textStyle = { text: tx ? tx : '' }

  if (color && color.length > 0) textStyle.text += ',' + color
  if (size && size.length > 0) textStyle.text += ',' + size
  if (hover && hover.length > 0)
    textStyle.text +=
      ',' +
      hover
        .split(',')
        .map(val => 'hover:' + val.trim())
        .reduce((prev, cur) => prev + ',' + cur)

  if (textStyle.text.charAt(0) === ',') textStyle.text = textStyle.text.substr(1)

  return (
    <Tag
      className={cx(
        'Headline',
        bold && 'font-bold',
        center && 'text-center',
        uppercase && 'uppercase',
        getClassNames(textStyle),
        getClassNames(styleProps),
        className && className
      )}
      style={style}
      {...headingProps}
      ref={ref}
    >
      {children}
    </Tag>
  )
}))

Headline.defaultProps = {
  level: '3'
}
