// Components:
import * as React from 'react'
import cx from 'classnames'
import { Box } from '../Box'
import { TailWindCSS } from './../../types/TailWindProps'

// ================================================================================================

// Props:

export interface ContainerProps extends TailWindCSS {
  children?: any
  className?: string
  fluid?: boolean
  style?: React.CSSProperties
}

export const Container: React.FunctionComponent<ContainerProps> = React.memo(props => {
  const { children, className, fluid, ...styleProps } = props
  return (
    <Box className={cx('Container', !fluid && 'container', className && className)} {...styleProps}>
      {children}
    </Box>
  )
})

Container.defaultProps = {
  display: 'block',
  mx: 'auto',
  px: '4',
  w: 'full'
}
