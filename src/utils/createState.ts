import * as React from 'react'

type Obj = {
  [key: string]: any
}

export const createState = (initState: Obj): [Obj, (state: Obj) => void] => {
  const [state, setState] = React.useState(initState)

  const set = (newState: Obj) => {
    setState({ ...state, ...newState })
  }
  return [state, set]
}
