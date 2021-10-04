import { Theme, ThemeUIContextValue, useThemeUI } from 'theme-ui'

const makeTheme = <T extends Theme>(t: T): T => t

type ThemeScale<Type, Aliases extends string> = Array<Type> &
  Partial<Record<Aliases, Type>>

type FontSizesAlias = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
const fontSizes: ThemeScale<number, FontSizesAlias> = [
  11, 12, 13, 14, 16, 18, 34,
]
fontSizes.xxs = fontSizes[0]
fontSizes.xs = fontSizes[1]
fontSizes.s = fontSizes[3]
fontSizes.m = fontSizes[4]
fontSizes.l = fontSizes[5]
fontSizes.xl = fontSizes[6]

type FontWeightsAlias = 'body' | 'bold' | 'bolder'
const fontWeights: ThemeScale<number, FontWeightsAlias> = [600, 700, 800]
fontWeights.body = fontWeights[0]
fontWeights.bold = fontWeights[1]
fontWeights.bolder = fontWeights[2]

export const theme = makeTheme({
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
    },
  },
})

type ExactTheme = typeof theme

interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: ExactTheme
}

export const useTheme = useThemeUI as unknown as () => ExactContextValue
