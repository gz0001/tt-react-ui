import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Overlay } from './'
import { Button } from 'components/Button'
import { text, boolean } from '@storybook/addon-knobs/react'

const OverlayDemo = () => {
  const [open, setOpen] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)

  return (
    <div style={{ padding: '20px 40px' }}>
      <Button onClick={() => setOpen(true)} mb="4">
        open fixed Overlay
      </Button>
      <Overlay
        className={text('className', 'flex justify-center items-center text-white')}
        open={open}
      >
        <Button onClick={() => setOpen(false)} type="error">
          close Overlay
        </Button>
      </Overlay>

      <div className="relative w-full h-32 border-2 border-black p-4">
        <Button onClick={() => setOpen2(true)}>open absolute Overlay</Button>
        <Overlay
          fixed={false}
          className={text('className', 'flex justify-center items-center text-white')}
          open={open2}
        >
          <Button onClick={() => setOpen2(false)} type="error">
            close Overlay
          </Button>
        </Overlay>
      </div>
    </div>
  )
}

;(storiesOf('Components/Overlay', module) as any).addWithJSX(
  'A basic component can be used as overlay',
  () => (
    <Overlay
      className={text('className', 'flex justify-center items-center text-white')}
      open={boolean('open', false)}
    >
      {text('chidren', 'i am an overlay')}
    </Overlay>
  )
)

;(storiesOf('Components/Overlay/Demo', module) as any).addWithJSX('of Overlay', () => (
  <OverlayDemo />
))
