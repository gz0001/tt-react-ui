import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Headline } from './'
import { text, boolean, select } from '@storybook/addon-knobs/react'

;(storiesOf('Components/Headline', module) as any).addWithJSX('Basic headline', () => {
  const colors = {
    first: 'first',
    second: 'second',
    third: 'third',
    fourth: 'fourth',
    error: 'error',
    success: 'success',
    grey: 'grey',
    text: 'text'
  }

  const levels = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6'
  }

  return (
    <div style={{ padding: '20px 40px' }}>
      <Headline
        center={boolean('center', false)}
        className={text('className', '')}
        color={select('color', colors, 'text')}
        level={select('level', levels, '3')}
        size={text('size', '')}
        uppercase={boolean('uppercase', false)}
      >
        {text('children', 'Headline')}
      </Headline>
    </div>
  )
})
