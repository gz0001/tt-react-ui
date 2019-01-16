// Components:
import * as React from 'react'
import cx from 'classnames'

// ================================================================================================

// Props:

export interface TriangleProps {
  className?: string
  /** css text color */
  color?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  size?: string
  style?: React.CSSProperties
}

export const Triangle: React.FunctionComponent<TriangleProps> = React.memo(
  ({ className, direction, color, size, style }) => {
    const triangleStyles: any = {}

    switch (direction) {
      case 'up':
        triangleStyles.borderBottomColor = color
        triangleStyles.borderBottomWidth = size
        triangleStyles.borderRightWidth = size
        triangleStyles.borderLeftWidth = size
        break
      case 'right':
        triangleStyles.borderLeftColor = color
        triangleStyles.borderLeftWidth = size
        triangleStyles.borderTopWidth = size
        triangleStyles.borderBottomWidth = size
        break
      case 'down':
        triangleStyles.borderTopColor = color
        triangleStyles.borderTopWidth = size
        triangleStyles.borderRightWidth = size
        triangleStyles.borderLeftWidth = size
        break
      case 'left':
        triangleStyles.borderRightColor = color
        triangleStyles.borderRightWidth = size
        triangleStyles.borderTopWidth = size
        triangleStyles.borderBottomWidth = size
        break
    }

    return (
      <div
        className={cx(
          'Triangle block w-0 h-0 border-solid',
          className && className,
          triangleStyles
        )}
        style={{ ...triangleStyles, ...style }}
      />
    )
  }
)

Triangle.defaultProps = {
  direction: 'up',
  size: '0.5rem',
  color: 'grey'
}
