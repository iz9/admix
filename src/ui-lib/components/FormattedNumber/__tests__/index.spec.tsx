import React from 'react'
import { cleanup, render, withTestId, screen } from 'test-utils'

import { FormattedNumber } from '..'

describe('<FormattedNumber  />', () => {
  const data = {
    numberAsIs: { source: 29283774, expected: '29,283,774' },
    compactLT1K: { source: 788, expected: '788' },
    compactMT1K: { source: 78928, expected: '78.9K' },
    compactMT1M: { source: 78928928, expected: '78.9M' },
    compactMT1B: { source: 78928928273, expected: '78.9B' },
    currency: { source: 8.24, expected: '$8.24' },
    percent: { source: 69, expected: '69%' },
  }
  afterEach(() => {
    cleanup()
  })

  it('should match snapshot', () => {
    const { container } = render(<FormattedNumber value={12345} />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render numbers formatted as it is', () => {
    const { container } = render(
      <FormattedNumber value={data.numberAsIs.source} />,
    )
    expect(container.firstChild?.textContent).toBe(data.numberAsIs.expected)
  })
  it('should render number in compact mode', () => {
    render(
      <div>
        <div data-testid={data.compactLT1K.expected}>
          <FormattedNumber value={data.compactLT1K.source} variant="compact" />
        </div>
        <div data-testid={data.compactMT1K.expected}>
          <FormattedNumber value={data.compactMT1K.source} variant="compact" />
        </div>
        <div data-testid={data.compactMT1M.expected}>
          <FormattedNumber value={data.compactMT1M.source} variant="compact" />
        </div>
        <div data-testid={data.compactMT1B.expected}>
          <FormattedNumber value={data.compactMT1B.source} variant="compact" />
        </div>
      </div>,
    )

    expect(screen.getByTestId(data.compactLT1K.expected).innerHTML).toBe(
      data.compactLT1K.expected,
    )
    expect(screen.getByTestId(data.compactMT1K.expected).innerHTML).toBe(
      data.compactMT1K.expected,
    )
    expect(screen.getByTestId(data.compactMT1M.expected).innerHTML).toBe(
      data.compactMT1M.expected,
    )
    expect(screen.getByTestId(data.compactMT1B.expected).innerHTML).toBe(
      data.compactMT1B.expected,
    )
  })

  it('should render number as percents', () => {
    render(
      <div data-testid={data.percent.expected}>
        <FormattedNumber value={data.percent.source} variant="percent" />
      </div>,
    )

    expect(screen.getByTestId(data.percent.expected).innerHTML).toBe(
      data.percent.expected,
    )
  })

  it('should render number as currency', () => {
    render(
      <div data-testid={data.currency.expected}>
        <FormattedNumber value={data.currency.source} variant="currency" />
      </div>,
    )

    expect(screen.getByTestId(data.currency.expected).innerHTML).toBe(
      data.currency.expected,
    )
  })
})
