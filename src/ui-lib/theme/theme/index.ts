/** @jsxImportSource theme-ui */
import { ThemeUIContextValue, useThemeUI } from 'theme-ui'
import { makeTheme } from './utils'
import { fontSizes } from './fontSizes'
import { fontWeights } from './fontWeights'
import { colors } from './colors'
import { buttons } from 'ui-lib/components/Button/styles'
import { text } from 'ui-lib/components/Text/styles'

import type { FontSizesAlias } from './fontSizes'
import type { FontWeightsAlias } from './fontWeights'
import type { ThemeColor } from './colors'

const theme = makeTheme({
  colors,
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
  text,
})

type ExactTheme = typeof theme

interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: ExactTheme
}

const useTheme = useThemeUI as unknown as () => ExactContextValue
export { useTheme, theme }
export type { FontWeightsAlias, FontSizesAlias, ThemeColor }
