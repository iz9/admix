import React from 'react'
import { render, cleanup } from 'test-utils'

import { Tag } from '..'

describe('<Tag  />', () => {
  afterEach(() => {
    cleanup()
  })

  it('should match snapshot', () => {
    const loadingIndicator = render(<Tag>tag</Tag>)
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })
})
