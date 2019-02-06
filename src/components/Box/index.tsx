// Components:
import * as React from 'react'
import cx from 'classnames'
import VideoCover from 'react-video-cover'
import { getClassNames } from '../../utils/getClassNames'
import { TailWindCSS } from './../../types/TailWindProps'

// ================================================================================================

// Props:
export interface BoxProps extends TailWindCSS {
  children?: React.ReactNode
  className?: string
  /**Pass any normal div props here */
  divProps?: React.HTMLProps<HTMLDivElement>
  gradient?: string
  image?: string
  style?: React.CSSProperties
  type?: 'artikel' | 'footer' | 'header' | 'nav' | 'div' | 'section'
  video?: string
}

export const Box: React.FunctionComponent<BoxProps> = React.memo(props => {
  const { children, className, divProps, gradient, image, style, type, video, ...rest } = props

  // Typ:
  const Tag: any = type

  // Background image:
  let backgroundImage = 'none'
  if (image) backgroundImage = `url(${image})`
  if (gradient) backgroundImage = gradient

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
      className={cx(className && className, getClassNames(rest))}
      style={{ ...style, backgroundImage }}
      children={video ? [renderVideo(), children] : children}
      {...divProps}
    />
  )
})

Box.defaultProps = {
  display: 'flex',
  position: 'relative',
  type: 'div',
  w: 'full'
}
