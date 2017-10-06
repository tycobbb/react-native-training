/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { Champion } from '../Champion'

// setup
let subject

function loadSubject (props) {
  subject = shallow(<Champion {...props} />)
}

// spec
afterEach(() => {
  subject = null
})

describe('#render', () => {
  it('renders properly', () => {
    loadSubject()
    expect(subject).toMatchSnapshot()
  })
})
