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
  const { children, className, fluid, mx, px, style, w, ...styleProps } = props
  return (
    <Box
      className={cx('Container', !fluid && 'container', className && className)}
      mx={mx}
      px={px}
      style={style}
      w={w}
      {...styleProps}
    >
      {children}
    </Box>
  )
})

Container.defaultProps = {
  mx: 'auto',
  px: '4',
  w: 'full'
}
