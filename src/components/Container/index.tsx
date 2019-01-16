// Components:
import * as React from 'react'
import cx from 'classnames'
import { Box } from '../Box'

// ================================================================================================

// Props:

export interface ContainerProps extends TailWindCSS {
  children?: any
  className?: string
  fluid?: boolean
  style?: React.CSSProperties
}

export const Container: React.FunctionComponent<ContainerProps> = React.memo(props => {
  const { children, className, fluid, style, ...styleProps } = props
  return (
    <Box
      className={cx('Container w-full mx-auto px-4', !fluid && 'container', className && className)}
      style={style}
      {...styleProps}
    >
      {children}
    </Box>
  )
})
