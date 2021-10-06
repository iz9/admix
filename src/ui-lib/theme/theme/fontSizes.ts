import type { ThemeScale } from './utils'

export type FontSizesAlias = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

const fontSizes: ThemeScale<number, FontSizesAlias> = [
  11, 12, 13, 14, 16, 18, 34,
]
fontSizes.xxs = fontSizes[0]
fontSizes.xs = fontSizes[1]
fontSizes.s = fontSizes[2]
fontSizes.m = fontSizes[3]
fontSizes.l = fontSizes[4]
fontSizes.xl = fontSizes[5]
fontSizes.xxl = fontSizes[6]

export { fontSizes }
