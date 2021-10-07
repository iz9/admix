import type { ThemeUICSSObject } from 'theme-ui'

const base: ThemeUICSSObject = {
  color: 'black',
  fontFamily: 'body',
  fontSize: 'm',
  fontWeight: 'body',
  lineHeight: 1.25,
}

const primary: ThemeUICSSObject = {
  ...base,
  fontSize: 'l',
}

const input: ThemeUICSSObject = {
  ...base,
}

const tag: ThemeUICSSObject = {
  ...base,
  fontSize: 's',
  lineHeight: 1,
}

const title: ThemeUICSSObject = {
  ...base,
  color: 'black900',
  fontSize: 'xl',
  fontWeight: 'bold',
}

const banner: ThemeUICSSObject = {
  ...base,
  color: 'white',
  fontSize: 'xxl',
  fontWeight: 'bolder',
}

export const text = {
  primary,
  input,
  tag,
  title,
  banner,
}

export type TextVariants = keyof typeof text
