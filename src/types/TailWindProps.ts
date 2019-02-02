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
  antialiased?: string
  'subpixel-antialiased'?: string
  truncate?: boolean | string
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
    | string
  position?: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky' | string
  visibility?: 'visible' | 'invisible' | string
  float?: 'float-right' | 'float-left' | 'float-none' | string
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
    | string
  scrolling?: 'touch' | 'auto' | string
  pin?: boolean | 't' | 'r' | 'b' | 'l' | 'y' | 'x' | 'none' | string
  z?: string 
  text?: string 
  font?: string 
  tracking?: string 
  leading?: string 
  align?: 'start' | 'center' | 'end' | 'between' | 'around' | string
  whitespace?: string 
  break?: string 
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
    | string
  items?: 'stretch' | 'start' | 'center' | 'end' | 'baseline' | string
  content?: 'start' | 'center' | 'end' | 'between' | 'around' | string
  self?: 'stretch' | 'start' | 'center' | 'end' | 'auto' | string
  justify?:string | 'start' | 'center' | 'end' | 'between' | 'around' 
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
  table?: string 
  cursor?: string 
  'pointer-events'?: string 
  resize?: string 
  select?: string 
  appearance?: string 
  shadow?: string 
  object?: string 
  opacity?: string 
  outline?: string 
  fill?: string 
  stroke?: string 
}
