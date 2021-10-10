import type { ThemeUICSSObject } from 'theme-ui'
import { ThemeColor } from '../../theme'
import { Property } from 'csstype'
import { CSSSelector } from '../../utils'

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
  const styles: ThemeUICSSObject = {
    borderColor: 'gray700',
    borderRadius: '10px',
    borderStyle: 'solid',
    borderWidth: '1px',
    color,
    fontSize: 'm',
    padding: '12px',
    position: 'relative',
    width: '100%',
    [CSSSelector.FOCUS]: {
      borderColor: color,
      outline: 'none',
    },
    [CSSSelector.PLACEHOLDER]: {
      color: 'gray700',
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
