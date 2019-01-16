import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from './'
import { text, boolean } from '@storybook/addon-knobs/react'

const CheckboxDemo = () => {
  const [checked, setCheck] = React.useState(false)

  return (
    <div style={{ padding: '20px 40px' }}>
      <p>Status: {checked ? 'checked' : 'unchecked'}</p>
      <Checkbox label="Status" checked={checked} onCheck={() => setCheck(!checked)} />
    </div>
  )
}

;(storiesOf('Components/Checkbox', module) as any).addWithJSX(
  'A basic component can be used as checkbox',
  () => {
    return (
      <div style={{ padding: '20px 40px' }}>
        <Checkbox
          checked={boolean('checked', false)}
          disabled={boolean('disabled', false)}
          label={text('label', 'Checkbox')}
          onCheck={() => true}
          small={boolean('small', false)}
        />
      </div>
    )
  }
)

;(storiesOf('Components/Checkbox/Demo', module) as any).addWithJSX('of Checkbox', () => (
  <CheckboxDemo />
))
