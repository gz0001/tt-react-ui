import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Textfield } from './'
import { text, boolean } from '@storybook/addon-knobs/react'

const TextfieldDemo = () => {
  const [text, setText] = React.useState('React')

  return (
    <div style={{padding: '20px 40px'}}>
      <p className="mb-2">Input: {text}</p>
      <Textfield
        autocomplete={[
          'React',
          'React Native',
          'React Web App',
          'React Posed',
          'React UI',
          'React App',
          'React Lib'
        ]}
        onInput={text => setText(text)}
        onEnter={() => console.log(`submit: `, text)}
        label="Some text"
        material={boolean("material", false)}
        placeholder="You can type anything here"
        value={text}
      />
    </div>
  )
}
;(storiesOf('Components/Textfield', module) as any).addWithJSX(
  'A basic component can be used as textfield',
  () => (
    <div style={{padding: '20px 40px'}}>
      <Textfield
        className={text('className', '')}
        onInput={() => null}
        label="Some text"
        value={text('text', 'Hello World')}
      />
    </div>
  )
)
;(storiesOf('Components/Textfield/Demo', module) as any).addWithJSX('of Textfield', () => (
  <TextfieldDemo />
))
