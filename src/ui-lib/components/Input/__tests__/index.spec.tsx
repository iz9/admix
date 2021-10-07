import React from 'react'
import { withTestId, render, screen, cleanup } from 'test-utils'

import { Input } from '..'

describe('<Input  />', () => {
  let cb: jest.MockedFunction<any>
  beforeEach(() => {
    cb = jest.fn()
  })
  afterEach(() => {
    cleanup()
  })

  it('should match snapshot', () => {
    const loadingIndicator = render(<Input value={'value'} onChange={cb} />)
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })
})
