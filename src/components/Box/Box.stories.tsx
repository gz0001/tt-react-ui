import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from './'
import { text, select } from '@storybook/addon-knobs/react'

;(storiesOf('Components/Box', module) as any).addWithJSX(
  'A basic component can be used as div',
  () => {
    const colors = {
      first: 'first',
      second: 'second',
      third: 'third',
      fourth: 'fourth',
      error: 'error',
      success: 'success',
      grey: 'grey',
      transparent: 'transparent'
    }

    const type = {
      artikel: 'artikel',
      footer: 'footer',
      header: 'header',
      nav: 'nav',
      div: 'div',
      section: 'section'
    }

    return (
      <div style={{ padding: '20px 40px' }}>
        <Box
          bg={[select('background', colors, 'first'), 'lg:second']}
          border={text('border', '2, black')}
          rounded={text('border-radius', '')}
          className={text('className', '')}
          h={text('height', '')}
          m={text('margin', '')}
          p={text('padding', '2')}
          type={select('type', type, 'div')}
          w={text('width', '12')}
        >
          {text('chidren', 'i am a box')}
        </Box>
      </div>
    )
  }
)
