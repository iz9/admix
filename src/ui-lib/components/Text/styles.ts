const base = {
  color: 'black',
  fontFamily: 'body',
  fontSize: 'm',
  fontWeight: 'body',
}

const primary = {
  ...base,
  fontSize: 'l',
}

const input = {
  ...base,
}

const tag = {
  ...base,
  fontSize: 's',
}

const title = {
  ...base,
  color: 'black900',
  fontSize: 'xl',
  fontWeight: 'bold',
}

const banner = {
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
