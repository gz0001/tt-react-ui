
export type MultipleStyle = string & {attr?: any}

export interface TailWindCSS {
  container?: boolean | string
  'clearfix'?: boolean | string
  'list-reset'?: boolean | string
  italic?: boolean | string
  roman?: boolean | string
  uppercase?: boolean | string
  lowercase?: boolean | string
  capitalize?: boolean | string
  'normal-case'?: boolean | string
  underline?: boolean | string
  'line-through'?: boolean | string
  'no-underline'?: boolean | string
  antialiased?: boolean | string
  'subpixel-antialiased'?: boolean| string
  truncate?: boolean | string
  transition?: boolean
  display?:
    | 'block'
    | 'inline-block'
    | 'inline'
    | 'table'
    | 'table-row'
    | 'table-cell'
    | 'none'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
    | MultipleStyle
  position?: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky' | MultipleStyle
  visibility?: 'visible' | 'invisible' | MultipleStyle
  float?: 'float-right' | 'float-left' | 'float-none' | MultipleStyle
  overflow?:
    | 'auto '
    | 'hidden '
    | 'visible '
    | 'scroll '
    | 'x-auto '
    | 'y-auto '
    | 'x-hidden '
    | 'y-hidden '
    | 'x-visible '
    | 'y-visible '
    | 'x-scroll '
    | 'y-scroll '
    | MultipleStyle
  scrolling?: 'touch' | 'auto' | MultipleStyle
  pin?: boolean | 't' | 'r' | 'b' | 'l' | 'y' | 'x' | 'none' | MultipleStyle
  z?: string 
  text?: string 
  font?: string 
  tracking?: 'tight' | 'normal' | 'wide'| MultipleStyle
  leading?: 'none' | 'tight' | 'normal' | 'loose' | MultipleStyle 
  align?: 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom' | MultipleStyle
  whitespace?: 'normal' | 'no-wrap' | 'pre' | 'pre-line' | 'pre-wrap' | MultipleStyle 
  break?: 'words' | 'normal' | MultipleStyle 
  bg?: string 
  border?: string 
  rounded?: string 
  flex?:
    | 'row'
    | 'row-reserve'
    | 'col'
    | 'col-reserve'
    | 'no-wrap'
    | 'wrap'
    | 'wrap-reverse'
    | 'initial'
    | '1'
    | 'auto'
    | 'none'
    | 'grow'
    | 'shrink'
    | 'no-grow'
    | 'no-shrink'
    | MultipleStyle
  items?: 'stretch' | 'start' | 'center' | 'end' | 'baseline' | MultipleStyle
  content?: 'start' | 'center' | 'end' | 'between' | 'around' | MultipleStyle
  self?: 'stretch' | 'start' | 'center' | 'end' | 'auto' | MultipleStyle
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | MultipleStyle
  basis?: string 
  p?: string 
  px?: string 
  py?: string 
  pt?: string 
  pr?: string 
  pb?: string 
  pl?: string 
  m?: string 
  mx?: string 
  my?: string 
  mt?: string 
  mr?: string 
  mb?: string 
  ml?: string 
  nm?: string 
  nmx?: string 
  nmy?: string 
  nmt?: string 
  nmr?: string 
  nmb?: string 
  nml?: string 
  w?: string 
  'min-w'?: string 
  'max-w'?: string 
  h?: string 
  'min-h'?: string 
  'max-h'?: string 
  table?: boolean | 'row' | 'cell' | MultipleStyle
  cursor?: 'auto' | 'default' | 'pointer' | 'wait' | 'move' | 'not-allowed' | MultipleStyle 
  'pointer-events'?: 'none' | 'auto' | MultipleStyle 
  resize?: boolean | 'none' | 'x' | 'y' | MultipleStyle  
  select?: 'none' | 'text' | MultipleStyle 
  appearance?: 'none' | MultipleStyle 
  shadow?: string 
  object?: string 
  opacity?: string 
  outline?: 'none' | MultipleStyle 
  fill?: string 
  stroke?: string 
}
