import React from 'react'
import { mount } from 'enzyme'
import { MyStuff } from '.'

describe('Test', () => {
  it('should display stuff', () => {
    const component = mount(<MyStuff />)

    expect(component).toIncludeText('stuff')
  })
})
