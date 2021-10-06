import type { Theme } from 'theme-ui'

export const makeTheme = <T extends Theme>(t: T): T => t

export type ThemeScale<Type, Aliases extends string> = Array<Type> &
  Partial<Record<Aliases, Type>>
