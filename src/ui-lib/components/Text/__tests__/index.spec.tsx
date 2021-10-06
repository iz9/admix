import React from 'react'

import { Text } from '..'
import { render, screen, cleanup } from 'test-utils'

describe('<Text  />', () => {
  afterEach(() => {
    cleanup()
  })
  it('should match snapshot', () => {
    const loadingIndicator = render(<Text />)
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })

  it('should render children text ', () => {
    const text = 'text'
    render(<Text color={'black'}>{text}</Text>)
    expect(screen.getByText(text).innerHTML).toBe(text)
  })
})
