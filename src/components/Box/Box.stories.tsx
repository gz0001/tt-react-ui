import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from './'
import { text, select } from '@storybook/addon-knobs/react'
;(storiesOf('Components/Box', module) as any).addWithJSX(
  'A basic component can be used as div',
  () => {
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
          bg={text('background', 'first')}
          border={text('border', '2, black')}
          rounded={text('border-radius', '')}
          className={text('className', '')}
          h={text('height', '')}
          m={text('margin', '')}
          p={text('padding', '2')}
          type={select('type', type, 'div')}
          w={text('width', '16')}
          justify={text('hustify', 'center')}
        >
          {text('chidren', 'i am a box')}
        </Box>
      </div>
    )
  }
)
;(storiesOf('Components/Box/LiveEdit', module) as any).addLiveSource(
  'Demo',
  `return  <div style={{ padding: '20px 40px' }}>
            <Box
              bg="first"
              border="2, black"
              className="BoxClass"
              h="24"
              mt="2"
              p="2"
              type="div"
              w="32"
            >
              im a box
            </Box>
           </div>`,
  {
    Box
  }
)
