import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Radio } from './'
import { text, boolean } from '@storybook/addon-knobs/react'

const RadioDemo = () => {
  const [checked, setCheck] = React.useState(false)

  return (
    <div style={{ padding: '20px 40px' }}>
      <p>Status: {checked ? 'checked' : 'unchecked'}</p>
      <Radio label="Status" checked={checked} onCheck={() => setCheck(!checked)} />
    </div>
  )
}

;(storiesOf('Components/Radio', module) as any).addWithJSX(
  'A basic component can be used as Radio box',
  () => {
    return (
      <div style={{ padding: '20px 40px' }}>
        <Radio
          checked={boolean('checked', false)}
          label={text('label', 'Radio')}
          onCheck={() => true}
          small={boolean('small', false)}
        />
      </div>
    )
  }
)

;(storiesOf('Components/Radio/Demo', module) as any).addWithJSX('of Radio box', () => <RadioDemo />)
