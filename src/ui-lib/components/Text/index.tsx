/** @jsxImportSource theme-ui */

import React from 'react'
import type { ThemeUICSSObject } from 'theme-ui'
import type { TextVariants } from './styles'
import { ThemeColor } from 'ui-lib/theme'
import { Property } from 'csstype'

interface TextProps {
  /** Color name according to the theme */
  color?: ThemeColor | Property.Color
  /** Variants according to the theme */
  variant?: TextVariants
  /** ThemeUI styling object */
  sx?: ThemeUICSSObject
}

/**
 *
 * Text component
 *
 */
export const Text: React.FC<TextProps> = ({
  variant = 'primary',
  color = 'black',
  sx,
  ...props
}) => {
  return <span sx={{ variant: `text.${variant}`, color, ...sx }} {...props} />
}
