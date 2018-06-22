import React from 'react'
import { mount } from 'enzyme'
import Header from './header'

describe('Header', () => {
  it('should display stuff', () => {
    const component = mount(<Header />)

    expect(component).toIncludeText('stuff')
  })
})
