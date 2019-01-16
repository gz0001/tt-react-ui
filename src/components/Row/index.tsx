// Components:
import * as React from 'react'
import cx from 'classnames'
import { Box } from '../Box'
import { TailWindCSS } from './../../types/TailWindProps'

// ================================================================================================

// Props:

export interface RowProps extends TailWindCSS {
  children?: any
  className?: string
  style?: React.CSSProperties
}

export const Row: React.FunctionComponent<RowProps> = React.memo(props => {
  const { children, className, style, ...styleProps } = props
  return (
    <Box
      className={cx('Row flex flex-wrap max-w-full', className && className)}
      style={style}
      {...styleProps}
    >
      {children}
    </Box>
  )
})
