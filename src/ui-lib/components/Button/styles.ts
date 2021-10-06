const buttonBase = {
  bg: 'primary',
  border: 'none',
  color: 'white',
  fontFamily: 'body',
  fontWeight: 'body',
  padding: '10px',
  '&:hover': {
    cursor: 'pointer',
  },
  '&:active': {
    bg: 'secondary',
  },
  '&:disabled': {
    bg: 'gray',
  },
}

const transparent = {
  ...buttonBase,
  bg: 'transparent',
  borderRadius: '0',
  color: 'primary',
  fontSize: 's',
}

const primary = {
  ...buttonBase,
  borderRadius: '10px',
  fontSize: 'm',
}

const primarySmall = {
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
