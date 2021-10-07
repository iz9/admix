import type { ThemeUICSSObject } from 'theme-ui'
import { ThemeColor } from '../../theme'
import { Property } from 'csstype'

export const inputContainerStyles: ThemeUICSSObject = {
  position: 'relative',
}

export type IconPosition = 'before' | 'after'
export const getIconContainerStyles = (
  position: IconPosition,
): ThemeUICSSObject => {
  const styles: ThemeUICSSObject = {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: '40px',
    zIndex: 2,
  }
  if (position === 'before') {
    styles.left = 0
  } else if (position === 'after') {
    styles.right = 0
  }
  return styles
}

export const getInputStyles = ({
  color = 'black300',
  isIconAfter,
  isIconBefore,
}: {
  color?: ThemeColor | Property.Color
  isIconBefore?: boolean
  isIconAfter?: boolean
}): ThemeUICSSObject => {
  const PLACEHOLDER_SELECTOR = '&::placeholder'

  const styles: ThemeUICSSObject = {
    borderColor: color,
    borderRadius: '10px',
    borderStyle: 'solid',
    borderWidth: '1px',
    color,
    padding: '12px',
    position: 'relative',
    width: '100%',
    '&:focus': {
      borderColor: 'black700',
      outline: 'none',
    },
    [PLACEHOLDER_SELECTOR]: {
      color,
    },
  }

  if (isIconBefore) {
    styles.paddingLeft = '40px'
  }
  if (isIconAfter) {
    styles.paddingRight = '40px'
  }

  return styles
}
