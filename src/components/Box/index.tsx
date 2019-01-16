// Components:
import * as React from 'react'
import cx from 'classnames'
import VideoCover from 'react-video-cover'
import { getClassNames } from '../../utils/getClassNames'
import { TailWindCSS } from './../../types/TailWindProps'

// ================================================================================================

// Props:
export interface BoxProps extends TailWindCSS {
  children?: any
  className?: string
  /**Pass any normal div props here */
  divProps?: React.HTMLProps<HTMLDivElement>
  image?: string
  style?: React.CSSProperties
  type?: 'artikel' | 'footer' | 'header' | 'nav' | 'div' | 'section'
  video?: string
}

export const Box: React.FunctionComponent<BoxProps> = React.memo(props => {
  const { children, className, divProps, image, style, type, video } = props

  const Tag: any = type
  //background image
  const backgroundImage = image ? `url(${image})` : 'none'

  // ============================================

  const renderVideo = () =>
    video && (
      <VideoCover
        className="Box-video absolute"
        videoOptions={{
          src: video,
          autoPlay: true,
          loop: true,
          muted: true // needed for chrome
        }}
      />
    )
  return (
    <Tag
      className={cx(getClassNames(props), className && className)}
      style={{ ...style, backgroundImage }}
      {...divProps}
    >
      {renderVideo()} {children}
    </Tag>
  )
})

Box.defaultProps = {
  display: 'flex',
  position: 'relative',
  type: 'div',
  w: 'full'
}
