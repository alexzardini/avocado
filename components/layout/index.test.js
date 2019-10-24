import React from 'react'
import renderer from 'react-test-renderer'

import Layout from './index.js'

describe('With Snapshot Testing', () => {
  it('Layout struct snapshot', () => {
    const tree = renderer.create(<Layout />).toJSON()
    expect(tree).toMatchSnapshot();
    expect(tree).toMatchSnapshot()
  })
})