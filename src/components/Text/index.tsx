import * as React from 'react'
import cx from 'classnames'
import { getClassNames } from '../../utils/getClassNames'
import { TailWindCSS } from './../../types/TailWindProps'

// ================================================================================================

// Props:
export interface TextProps extends TailWindCSS {
  bold?: boolean
  center?: boolean
  children: any
  /**
   * color of headline
   */
  color?: 'grey' | 'first' | 'second' | 'third' | 'fourth' | 'error' | 'success' | 'text' | 'white'
  className?: string
  paragraph?: boolean
  textProps?: React.HTMLProps<HTMLParagraphElement | HTMLSpanElement>
  uppercase?: boolean
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
    paragraph,
    uppercase,
    style,
    textProps,
    ...styleProps
  } = props

  const Tag = paragraph ? 'p' : 'span'

  return (
    // @ts-ignore
    <Tag
      className={cx(
        'Headline',
        bold && 'font-bold',
        color && `text-${color}`,
        center && 'text-center',
        uppercase && 'uppercase',
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

Text.defaultProps = {
  color: 'text'
}
