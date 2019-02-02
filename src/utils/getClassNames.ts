import classnames from 'classnames'

export const getClassNames = (reactProps: any, prefix = ':'): string => {
  const TailwindStaticClasses = [
    'container',
    'clearfix',
    'list-reset',
    'italic',
    'roman',
    'uppercase',
    'lowercase',
    'capitalize',
    'normalCase',
    'underline',
    'line-through',
    'no-underline',
    'antialiased',
    'subpixel-antialiased',
    'truncate'
  ]

  const TailwindSpecialClasses = ['display', 'position', 'visibility']
  const TailwindClasses = [
    'basis',
    'float',
    'overflow',
    'scrolling',
    'pin',
    'z',
    'text',
    'font',
    'tracking',
    'leading',
    'align',
    'whitespace',
    'break',
    'bg',
    'border',
    'rounded',
    'flex',
    'items',
    'content',
    'self',
    'justify',
    'p',
    'px',
    'py',
    'pt',
    'pr',
    'pb',
    'pl',
    'm',
    'mx',
    'my',
    'mt',
    'mr',
    'mb',
    'ml',
    'nm',
    'nmx',
    'nmy',
    'nmt',
    'nmr',
    'nmb',
    'nml',
    'w',
    'min-w',
    'max-w',
    'h',
    'min-h',
    'max-h',
    'table',
    'cursor',
    'pointer-events',
    'resize',
    'select',
    'appearance',
    'shadow',
    'object',
    'opacity',
    'outline',
    'fill',
    'stroke'
  ]

  const classNamesArray = Object.keys(reactProps).map(key => {
    const value = reactProps[key]
    const type = typeof reactProps[key]

    if (TailwindStaticClasses.includes(key)) {
      if (type === 'boolean' && value === true) {
        return `${key}`
      }
      if (type === 'string') {
        return value.split(',').map((v: string) => `${v.trim()}${prefix}${key}`)
      }
    }
    if (TailwindSpecialClasses.includes(key)) {
      if (type === 'string') {
        return value.split(',').map((v: string) => v.trim())
      }
    }

    if (TailwindClasses.includes(key)) {
      const editedKey = key.includes('nm') ? key.replace('n', '-') : key
      if (type === 'boolean' && value === true) {
        return `${editedKey}`
      }
      if (type === 'string') {
        const vals = value.split(',').map((v: string) => v.trim())

        const classes = vals.map((vl: string) => {
          const cls = vl.split(prefix)
          switch (cls.length) {
            case 3:
              return `${cls[0]}:${cls[1]}:${editedKey}-${cls[2]}`
            case 2:
              return `${cls[0]}:${editedKey}-${cls[1]}`
            default:
              return `${editedKey}-${cls[0]}`
          }
        })

        return classes
      }
    }
  })

  return classnames(classNamesArray)
}
