import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ScrollTop } from './'
import { text } from '@storybook/addon-knobs/react'
;(storiesOf('Components/ScrollTop', module) as any).addWithJSX(
  'A basic component can be used as ScrollTop',
  () => (
    <div style={{ padding: '20px 40px' }}>
      <ScrollTop className={text('className', '')}>{text('chidren', 'i am a ScrollTop')}</ScrollTop>
    </div>
  )
)
