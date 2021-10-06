import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { withTestId } from './withTestId'
import { ThemeProvider } from '../ui-lib/theme'
import { hexToRGB } from './hexToRgb'

const AllTheProviders: React.FC = ({ children }) => (
  <ThemeProvider>{children as React.ReactChild}</ThemeProvider>
)

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render, withTestId, hexToRGB }
