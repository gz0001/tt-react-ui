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

const getWidth = (width: string): string[] => {
  if (!width) return null
  let cols = width.split(',')
  cols = cols.map(col => {
    let str = col.split(':')
    let num = str.length > 1 ? str[1] : str[0]
    num = convertNum(num)

    return str.length > 1 ? `${str[0].trim()}:${num}` : num
  })

  return cols
}

// Props:

export interface ColProps extends TailWindCSS {
  children?: any
  cols?: string
  className?: string
  offset?: string
  style?: React.CSSProperties
}

export const Col: React.FunctionComponent<ColProps> = React.memo(props => {
  const { children, className, cols, offset, style, ...styleProps } = props
  return (
    <Box
      className={cx('Col px-2 max-w-full', className && className)}
      style={style}
      w={getWidth(cols)}
      ml={getWidth(offset)}
      {...styleProps}
    >
      {children}
    </Box>
  )
})

Col.defaultProps = {
  cols: '12'
}
