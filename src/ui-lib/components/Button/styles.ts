import type { ThemeUICSSObject } from 'theme-ui'
import { CSSSelector } from 'ui-lib/utils'

const buttonBase: ThemeUICSSObject = {
  bg: 'primary',
  border: 'none',
  color: 'white',
  fontFamily: 'body',
  fontWeight: 'body',
  padding: '10px',
  [CSSSelector.HOVER]: {
    cursor: 'pointer',
  },
  [CSSSelector.ACTIVE]: {
    bg: 'secondary',
  },
  [CSSSelector.DISABLED]: {
    bg: 'gray',
  },
}

const transparent: ThemeUICSSObject = {
  ...buttonBase,
  bg: 'transparent',
  borderRadius: '0',
  color: 'primary',
  fontSize: 's',
  [CSSSelector.ACTIVE]: {
    bg: 'transparent',
  },
}

const primary: ThemeUICSSObject = {
  ...buttonBase,
  borderRadius: '10px',
  fontSize: 'm',
}

const primarySmall: ThemeUICSSObject = {
  ...primary,
  fontSize: 's',
  padding: '5px',
}

export const buttons = {
  transparent,
  primary,
  primarySmall,
}

export type ButtonVariant = keyof typeof buttons
