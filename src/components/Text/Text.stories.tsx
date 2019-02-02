import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from './'
import { text, boolean, select } from '@storybook/addon-knobs/react'

;(storiesOf('Components/Text', module) as any).addWithJSX('Basic text', () => {
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

  return (
    <div style={{ padding: '20px 40px' }}>
      <Text
        bold={boolean('bold', false)}
        center={boolean('center', false)}
        className={text('className', '')}
        color={select('color', colors, 'text')}
        paragraph={boolean('paragraph', false)}
        size={text('size', 'base')}
        hover={text('hover', 'red')}
        text={text('text', '')}
        uppercase={boolean('uppercase', false)}
        /* textProps={{dangerouslySetInnerHTML:{__html: "<span>ascsasc</span>"}}} */
      >
        {text('children', 'i am a Text')}
      </Text>
    </div>
  )
})
