import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs/react'
import { Button } from './'
;(storiesOf('Components/Button', module) as any).addWithJSX('Basic button', () => {
  const bg = {
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
        bg={select('background', bg, 'first')}
        btnProps={{ onMouseUp: () => console.log('mouse up') }}
        color={text('color', 'white')}

        disabled={boolean('disabled', false)}
        loading={boolean('loading', false)}
        rounded={text('borderRadius', 'sm')}
        m={text('margin', '2')}
        p={text('padding', '4')}
        onClick={(e) => console.log('button clicked', e)}
        outLine={boolean('outline', false)}
        w={text('width', '32')}
        h={text('height', '12')}
      >
        {text('children', 'Im a button.')}
      </Button>
    </div>
  )
})
