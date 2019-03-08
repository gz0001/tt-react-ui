import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Selectbox } from './'
import { text, boolean } from '@storybook/addon-knobs/react'
import { Option } from 'components/Selectbox'
const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'React Native', value: 'react native' },
  { label: 'AngularJS', value: 'angularjs' }
]

const moreOptions: Option[] = []

for (let index = 0; index < 50; index++) {
  moreOptions.push({ label: `List item ${index}`, value: index })
}

const SelectboxDemo = () => {
  const [select, setSelect] = React.useState<string | number | (string | number)[]>(null)
  return (
    <div style={{padding: '20px 40px'}}>
      <p className="mb-4">Select: {select}</p>
      <Selectbox
        onSelect={selection => setSelect(selection)}
        options={moreOptions}
        selection={select}
        label="Select"
        material={boolean('material', false)}
        multiple={boolean('multiple', false)}
        native={boolean('native', true)}
      />
    </div>
  )
}
;(storiesOf('Components/Selectbox', module) as any).addWithJSX(
  'A basic component can be used as selectbox',
  () => (
    <div style={{padding: '20px 40px', display: 'flex'}}>
      <Selectbox
        className={text('className', '')}
        onSelect={() => null}
        options={options}
        label="Select:"
      />
      <Selectbox
        className="ml-5"
        onSelect={() => null}
        options={options}
        label="Multiple Select:"
        multiple={true}
      />
    </div>
  )
)
;(storiesOf('Components/Selectbox/Demo', module) as any).addWithJSX('of Selectbox', () => (
  <SelectboxDemo />
))
