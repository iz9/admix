import type { ThemeScale } from './utils'

export type FontSizesAlias = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'

export const fontSizes: ThemeScale<number, FontSizesAlias> = [
  11, 12, 13, 14, 16, 18, 34,
]
fontSizes.xxs = fontSizes[0]
fontSizes.xs = fontSizes[1]
fontSizes.s = fontSizes[3]
fontSizes.m = fontSizes[4]
fontSizes.l = fontSizes[5]
fontSizes.xl = fontSizes[6]
