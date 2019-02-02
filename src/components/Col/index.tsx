// Components:
import * as React from 'react'
import cx from 'classnames'
import { Box } from '../Box'
import { TailWindCSS } from './../../types/TailWindProps'

// ================================================================================================

const convertNum = (num: string): string => {
  switch (num.trim()) {
    case '1':
      return '1/12'
    case '2':
      return '1/6'
    case '3':
      return '1/4'
    case '4':
      return '1/3'
    case '5':
      return '5/12'
    case '6':
      return '1/2'
    case '7':
      return '7/12'
    case '8':
      return '2/3'
    case '9':
      return '3/4'
    case '10':
      return '5/6'
    case '11':
      return '11/12'
    default:
      return 'full'
  }
}

const getOffset = (offset: string): string => {
  if (!offset) return null
  let cols = offset.split(',')
  cols = cols.map(col => {
    let str = col.split(':')
    let num = str.length > 1 ? str[1] : str[0]
    num = convertNum(num)
    return str.length > 1 ? `${str[0].trim()}:${num}` : num
  })

  return cols.reduce((prev: string, cur: string) => {
    return prev + ',' + cur
  })
}

// Props:

export interface ColProps extends TailWindCSS {
  children?: any
  width?: string
  className?: string
  offset?: string
  px?: string
  style?: React.CSSProperties
}

export const Col: React.FunctionComponent<ColProps> = React.memo(props => {
  const { children, className, width, offset, px, style, ...styleProps } = props
  console.log('offset: ', getOffset(offset))
  return (
    <Box
      basis={width}
      className={cx('Col', className && className)}
      style={style}
      px={px}
      ml={getOffset(offset)}
      {...styleProps}
    >
      {children}
    </Box>
  )
})

Col.defaultProps = {
  width: 'default',
  display: 'block',
  px: '4'
}
