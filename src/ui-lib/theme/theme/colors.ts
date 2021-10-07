export const colors = {
  primary: '#2622B5',
  secondary: '#0C0980',
  white: '#ffffff',
  black: '#0B0F32',
  black900: '#232747',
  black700: '#545770',
  black400: '#9D9FAD',
  gray: '#7F8193',
  gray800: '#C4CAD6',
  gray700: '#DCDFEE',
  blueCrayola: '#1A73E9',
  accentPink: '#ED2EFF',
  accentYellow: '#FCC012',
  bgPrimary: '#fff',
  bgSecondary: '#fff',
  bgBanner: '#2522b5',
}

export type ThemeColor = keyof typeof colors | 'inherit'
