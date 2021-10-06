/** @jsxImportSource theme-ui */

import React from 'react'
import { convertCase, TextCase } from '../../utils/textCase'
import { Text as ThemeUIText, ThemeUIStyleObject } from 'theme-ui'

interface TextProps {
  variant?: TextCase
  sx?: ThemeUIStyleObject
}

/**
 *
 * Text component
 *
 */
const Text: React.FC<TextProps> = ({
  variant = TextCase.asIs,
  children,
  sx,
  ...rest
}) => {
  let value
  if (typeof children === 'string') {
    value = convertCase(children, variant)
  }
  return (
    <ThemeUIText sx={sx} {...rest}>
      {value ?? children}
    </ThemeUIText>
  )
}

export { Text, TextCase as TextVariant }
