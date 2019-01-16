import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Triangle } from './'
import { text, select } from '@storybook/addon-knobs/react'
(storiesOf('Components/Triangle', module) as any).addWithJSX(
  'A basic component can be used as Triangle',
  () => {
    const directions = {
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right'
    }

    return (
      <div style={{ padding: '20px 40px' }}>
        <Triangle
          className={text('className', '')}
          color={text('color', 'green')}
          direction={select('direction', directions, 'up')}
          size={text('size', '2rem')}
        />
      </div>
    )
  }
)
