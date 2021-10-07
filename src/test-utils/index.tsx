import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '../ui-lib/theme'

const AllTheProviders: React.FC = ({ children }) => (
  <ThemeProvider>{children as React.ReactChild}</ThemeProvider>
)

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
export { times } from './times'
export { withTestId } from './withTestId'
