import { getClassNames } from './getClassNames'

it('output classes should be correct', () => {
  const props = { w: ['1/2', 'md:1/4'] }
  const classes = getClassNames(props)
  expect(classes).toBe('w-1/2 md:w-1/4')
})
