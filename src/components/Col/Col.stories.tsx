import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Col } from './'
import { text } from '@storybook/addon-knobs/react'

;(storiesOf('Components/Grid/Col', module) as any).addWithJSX(
  'A basic component can be used as column',
  () => (
    <div style={{ padding: '20px 40px' }}>
      <Col
        className={text('className', 'border-2')}
        width={text('cols', '6')}
        offset={text('offset', '6')}
      >
        {text('chidren', 'i am a column')}
      </Col>
    </div>
  )
)
