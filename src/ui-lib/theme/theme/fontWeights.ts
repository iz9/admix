import type { ThemeScale } from './utils'

export type FontWeightsAlias = 'body' | 'bold' | 'bolder'

export const fontWeights: ThemeScale<number, FontWeightsAlias> = [600, 700, 800]
fontWeights.body = fontWeights[0]
fontWeights.bold = fontWeights[1]
fontWeights.bolder = fontWeights[2]
