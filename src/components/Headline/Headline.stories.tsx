import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Headline } from './'
import { text, boolean, select } from '@storybook/addon-knobs/react'

;(storiesOf('Components/Headline', module) as any).addWithJSX('Basic headline', () => {
 

  return (
    <div style={{ padding: '20px 40px' }}>
      <Headline
        center={boolean('center', false)}
        className={text('className', '')}
        size={text('size', '')}
        uppercase={boolean('uppercase', false)}
      >
        {text('children', 'Headline')}
      </Headline>
    </div>
  )
})
