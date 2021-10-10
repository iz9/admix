import React from 'react'
import { withTestId, render, screen, cleanup } from 'test-utils'

import { Rating } from '..'

describe('<Rating  />', () => {
  let cb: jest.MockedFunction<any>
  beforeEach(() => {
    cb = jest.fn()
  })
  afterEach(() => {
    cleanup()
  })

  it('should match snapshot', () => {
    const loadingIndicator = render(<Rating onChange={cb} value={3} />)
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })
})
