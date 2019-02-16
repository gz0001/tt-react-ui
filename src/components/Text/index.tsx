import * as React from 'react'
import cx from 'classnames'
import { getClassNames } from '../../utils/getClassNames'
import { TailWindCSS } from './../../types/TailWindProps'

// ================================================================================================

// Props:
export interface TextProps extends TailWindCSS {
  bold?: boolean
  center?: boolean
  /**
   * color of text
   */
  children?: React.ReactNode
  color?: string
  className?: string
  hover?: string
  paragraph?: boolean
  size?: string
  textProps?: React.HTMLProps<HTMLParagraphElement | HTMLSpanElement>
  /**
   * style object
   *
   */
  style?: React.CSSProperties
}

export const Text: React.FunctionComponent<TextProps> = React.memo(props => {
  const {
    bold,
    center,
    children,
    color,
    className,
    hover,
    paragraph,
    size,
    style,
    text: tx,
    textProps,
    ...styleProps
  } = props

  const Tag = paragraph ? 'p' : 'span'

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
    // @ts-ignore
    <Tag
      className={cx(
        'Text',
        bold && 'font-bold',
        center && 'text-center',
        getClassNames(textStyle),
        getClassNames(styleProps),
        className && className
      )}
      style={style}
      {...textProps}
    >
      {children}
    </Tag>
  )
})

