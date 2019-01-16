import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Row } from './'
import { text } from '@storybook/addon-knobs/react'

;(storiesOf('Components/Grid/Row', module) as any).addWithJSX(
  'A basic component can be used as row',
  () => (
    <div style={{ padding: '20px 40px' }}>
      <Row className={text('className', '')}>{text('chidren', 'i am a Row')}</Row>
    </div>
  )
)
