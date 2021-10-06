import React from 'react'

import { Text, TextVariant } from '..'
import { withTestId, render, screen, cleanup } from 'test-utils'

describe('<Text  />', () => {
  afterEach(() => {
    cleanup()
  })
  it('should match snapshot', () => {
    const loadingIndicator = render(<Text />)
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })

  it('should render text in corresponding case', () => {
    const text = 'Text'
    const asIsId = 'asIs'
    const capsId = 'caps'
    const lowId = 'low'
    const Cmp = withTestId(Text)

    render(
      <>
        <Cmp testId={asIsId}>{text}</Cmp>
        <Cmp testId={capsId} variant={TextVariant.uppercase}>
          {text}
        </Cmp>
        <Cmp testId={lowId} variant={TextVariant.lowercase}>
          {text}
        </Cmp>
      </>,
    )

    expect(screen.getByTestId(asIsId).innerHTML).toBe(text)
    expect(screen.getByTestId(capsId).innerHTML).toBe(text.toUpperCase())
    expect(screen.getByTestId(lowId).innerHTML).toBe(text.toLowerCase())
  })
})
