/** @jsxImportSource theme-ui */

import React from 'react'
import type { ThemeUIStyleObject } from 'theme-ui'
import type { ButtonVariant } from './styles'

interface ButtonProps {
  /** Click handler */
  onClick: (e?: React.MouseEvent) => void
  /** Same as html disabled attr */
  disabled?: boolean
  /** ThemeUI styling object */
  sx?: ThemeUIStyleObject
  /** Button variant according to the theme */
  variant?: ButtonVariant
}

/**
 *
 * Button component
 *
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  sx,
  ...props
}) => {
  return (
    <button {...{ sx: { variant: `buttons.${variant}`, ...sx }, ...props }} />
  )
}
