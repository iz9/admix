/** @jsxImportSource theme-ui */

import React from 'react'
import type { ThemeUIStyleObject } from 'theme-ui'
import type { TextVariants } from './styles'
import { ThemeColor } from '../../theme/theme'

interface TextProps {
  /** Color name according to the theme */
  color?: ThemeColor
  /** Variants according to the theme */
  variant?: TextVariants
  /** ThemeUI styling object */
  sx?: ThemeUIStyleObject
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
