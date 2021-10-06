import React from 'react'
import { render, screen, cleanup } from 'test-utils'
import { times } from 'test-utils'
import { Button } from '..'

describe('<Button  />', () => {
  let fn: () => void
  beforeEach(() => {
    fn = jest.fn()
  })
  afterEach(() => {
    cleanup()
  })

  it('should match snapshot', () => {
    const loadingIndicator = render(<Button onClick={fn}>Button</Button>)
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })

  it('should call onClick cb', () => {
    const text = 'Button'
    render(<Button onClick={fn}>{text}</Button>)
    const elem = screen.getByText(text)
    elem.click()
    expect(fn).toHaveBeenCalledTimes(1)
    times(10, elem.click.bind(elem))
    expect(fn).toHaveBeenCalledTimes(11)
  })

  it('should not click when disable', () => {
    const text = 'Disable'
    render(
      <Button disabled onClick={fn}>
        {text}
      </Button>,
    )
    const elem = screen.getByText(text)
    elem.click()
    expect(fn).toHaveBeenCalledTimes(0)
    times(10, elem.click.bind(elem))
    expect(fn).toHaveBeenCalledTimes(0)
  })
})
