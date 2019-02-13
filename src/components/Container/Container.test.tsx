import * as React from 'react'
import { shallow } from 'enzyme'
import { Container } from './'

const node = <Container />

describe('Testing <Container/>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(node)
    expect(wrapper.length).toBe(1)
  })
})
