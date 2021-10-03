import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../index'

test('it renders', () => {
  render(<App />)
  const linkElement = screen.getByText(/React App/i)
  expect(linkElement).toBeInTheDocument()
})
