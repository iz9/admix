import React from 'react'

import { Text } from '..'
import { render, screen, cleanup, withTestId } from 'test-utils'

describe('<Text  />', () => {
  afterEach(() => {
    cleanup()
  })
  it('should match snapshot', () => {
    const primaryID = '0'
    const inputID = '1'
    const tagID = '2'
    const titleID = '3'
    const bannerID = '4'
    const Cmp = withTestId(Text)
    render(
      <>
        <Cmp testId={primaryID} variant="primary">
          text
        </Cmp>
        <Cmp testId={inputID} variant="input">
          text
        </Cmp>
        <Cmp testId={tagID} variant="tag">
          text
        </Cmp>
        <Cmp testId={titleID} variant="title">
          text
        </Cmp>
        <Cmp testId={bannerID} variant="banner">
          text
        </Cmp>
      </>,
    )
    expect(screen.getByTestId(primaryID)).toMatchSnapshot()
    expect(screen.getByTestId(inputID)).toMatchSnapshot()
    expect(screen.getByTestId(tagID)).toMatchSnapshot()
    expect(screen.getByTestId(titleID)).toMatchSnapshot()
    expect(screen.getByTestId(bannerID)).toMatchSnapshot()
  })

  it('should render children text ', () => {
    const text = 'text'
    render(<Text color={'black'}>{text}</Text>)
    expect(screen.getByText(text).innerHTML).toBe(text)
  })
})
