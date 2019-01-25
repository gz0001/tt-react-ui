import * as React from 'react'
import { configure } from '@storybook/react'
import { setAddon, addDecorator } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import LiveEdit, { setOptions, withLiveEditScope } from 'storybook-addon-react-live-edit'

import '../src/index.css'

addDecorator(withKnobs)
addDecorator(
  withInfo({
    inline: true,
    source: true
  })
)
addDecorator(withLiveEditScope({ React }))
setAddon(JSXAddon)
setOptions({ theme: '3024-night', presets: ['react'] })
setAddon(LiveEdit)

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/)
function loadStories() {
  require('./welcomeStory')
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
