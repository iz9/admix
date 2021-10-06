import React from 'react'
import { withTestId, render, screen, cleanup } from 'test-utils'

import { BannerTitle } from '..'

describe('<BannerTitle  />', () => {
  afterEach(() => {
    cleanup()
  })

  it('should match snapshot', () => {
    const loadingIndicator = render(
      <BannerTitle color={'accentPink'}>Banner text</BannerTitle>,
    )
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })

  it('should render children text uppercase', () => {
    const text = 'text'
    const testID = 'testID'
    const Cmp = withTestId(BannerTitle)
    render(
      <Cmp testId={testID} color={'black'}>
        {text}
      </Cmp>,
    )
    expect(screen.getByTestId(testID).innerHTML).toBe(text.toUpperCase())
  })
})
