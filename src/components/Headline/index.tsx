import * as React from 'react'
import cx from 'classnames'
import { getClassNames } from '../../utils/getClassNames'
import { TailWindCSS } from './../../types/TailWindProps'

// ================================================================================================

// Props:
export interface HeadlineProps extends TailWindCSS {
  center?: boolean
  children: any
  /**
   * color of headline
   */
  color?: 'grey' | 'first' | 'second' | 'third' | 'fourth' | 'error' | 'success' | 'text' | 'white'

  className?: string
  headingProps?: React.HTMLProps<HTMLHeadingElement>
  /**
   * headline size
   *
   */
  level?: '1' | '2' | '3' | '4' | '5' | '6'
  uppercase?: boolean
  /**
   * style object
   *
   */
  style?: React.CSSProperties
  size?: string
}

export const Headline: React.FunctionComponent<HeadlineProps> = React.memo(props => {
  const {
    center,
    children,
    color,
    className,
    headingProps,
    level,
    uppercase,
    style,
    size,
    ...styleProps
  } = props
  const Tag: any = `h${level}`

  return (
    <Tag
      className={cx(
        'Headline',
        color && `text-${color}`,
        center && 'text-center',
        uppercase && 'uppercase',
        size && getClassNames(size, 'text-'),
        getClassNames(styleProps),
        className && className
      )}
      style={style}
      {...headingProps}
    >
      {children}
    </Tag>
  )
})

Headline.defaultProps = {
  level: '3'
}
