import { ThemeUIContextValue, useThemeUI } from 'theme-ui'
import { makeTheme } from './utils'
import { fontSizes } from './fontSizes'
import { fontWeights } from './fontWeights'
import type { FontSizesAlias } from './fontSizes'
import type { FontWeightsAlias } from './fontWeights'

import { buttons } from 'ui-lib/components/Button/styles'

const theme = makeTheme({
  colors: {
    primary: '#2622B5',
    secondary: '#0C0980',
    white: '#ffffff',
    black: '#0B0F32',
    black900: '#232747',
    black700: '#545770',
    black400: '#9D9FAD',
    gray: '#7F8193',
    gray800: '#C4CAD6',
    blueCrayola: '#1A73E9',
    accentPink: '#ED2EFF',
    background: {
      primary: '#fff',
      secondary: '#fff',
    },
  },
  fontSizes,
  fontWeights,
  fonts: {
    body: 'Mulish, sans-serif',
  },
  styles: {
    root: {
      fontFamily: 'body',
      boxSizing: 'border-box',
    },
  },
  buttons,
})

type ExactTheme = typeof theme

interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: ExactTheme
}

const useTheme = useThemeUI as unknown as () => ExactContextValue
export { useTheme, theme }
export type { FontWeightsAlias, FontSizesAlias }
