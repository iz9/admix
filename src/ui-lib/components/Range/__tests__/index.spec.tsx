import React from 'react'
import { render, cleanup } from 'test-utils'

import { Range } from '..'

describe('<Range  />', () => {
  let cb: jest.MockedFunction<any>
  beforeEach(() => {
    cb = jest.fn()
  })
  afterEach(() => {
    cleanup()
  })

  it('should match snapshot', () => {
    const loadingIndicator = render(<Range min={0} max={100} onChange={cb} />)
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })
})
