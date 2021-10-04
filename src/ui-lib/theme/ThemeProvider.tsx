import { ThemeProvider as OriginalThemeProvider } from 'theme-ui'
import React from 'react'
import { theme } from './theme'

export const ThemeProvider = (props: { children: React.ReactChild }) => (
  <OriginalThemeProvider theme={theme}>
    {React.Children.only(props.children)}
  </OriginalThemeProvider>
)
