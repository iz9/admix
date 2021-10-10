import React from 'react'
import { withTestId, render, screen, cleanup, fireEvent } from 'test-utils'

import { Select, SelectOption } from '..'

describe('<Select  />', () => {
  let cb: jest.MockedFunction<any>
  let options: SelectOption[]
  beforeEach(() => {
    cb = jest.fn()
    options = [
      { value: 1, label: 'one' },
      { value: 2, label: 'two' },
    ]
  })
  afterEach(() => {
    cleanup()
  })

  it('should match snapshot', () => {
    const loadingIndicator = render(<Select onChange={cb} options={options} />)
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })

  it('should call onChange callback', async () => {
    const Cmp = withTestId(Select)
    const testID = 'tid'
    const { container } = render(
      <Cmp testId={testID} onChange={cb} options={options} />,
    )

    const input = await container.querySelector('input')
    if (input) {
      fireEvent.focus(input)
      fireEvent.keyDown(input, { key: 'ArrowDown', code: 40 })

      const option = screen.getByText(options[1].label)
      fireEvent.click(option)
    }

    expect(cb).toHaveBeenCalledTimes(1)
  })
})
