import React from 'react'
import { withTestId, render, screen, cleanup } from 'test-utils'

import { SvgIcon } from '..'

describe('<SvgIcon  />', () => {
  afterEach(() => {
    cleanup()
  })

  it('should match snapshot', () => {
    const SvgComponent: any = () => <i>svg</i>
    const loadingIndicator = render(<SvgIcon Icon={SvgComponent} />)
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })
})
