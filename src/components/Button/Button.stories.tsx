import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs/react'
import { Button } from './'
;(storiesOf('Components/Button', module) as any).addWithJSX('Basic button', () => {
  const types = {
    first: 'first',
    second: 'second',
    third: 'third',
    fourth: 'fourth',
    error: 'error',
    success: 'success',
    grey: 'grey'
  }
  return (
    <div style={{ padding: '20px 40px' }}>
      <Button
        btnProps={{ onMouseUp: () => console.log('mouse up') }}
        disabled={boolean('disabled', false)}
        inline={boolean('inline', false)}
        loading={boolean('loading', false)}
        rounded={text('borderRadius', 'sm')}
        m={text('margin', '2')}
        p={text('padding', '4')}
        onClick={() => console.log('button clicked')}
        outLine={boolean('outline', false)}
        type={select('type', types, 'first')}
        w={text('width', '32')}
      >
        {text('children', 'Im a button.')}
      </Button>
    </div>
  )
})
