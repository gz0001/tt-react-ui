import * as React from 'react'

export const createState = <T extends Record<string, any>>(initState: T): [T, (state: Partial<T>) => void] => {
  const [state, setState] = React.useState(initState)

  const set = (newState: Partial<T>) => {
    setState({ ...state, ...newState })
  }
  return [state, set]
}
