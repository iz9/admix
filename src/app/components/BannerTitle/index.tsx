/** @jsxImportSource theme-ui */

import React from 'react'
import { Text } from 'ui-lib/components/Text'
import type { ThemeUIStyleObject } from 'theme-ui'
import type { ThemeColor } from 'ui-lib/theme'

interface BannerTitleProps {
  /** ThemeUI styling object */
  sx?: ThemeUIStyleObject
  /** Color according to the theme */
  color?: ThemeColor
}

/**
 *
 * BannerTitle component
 *
 */
export const BannerTitle: React.FC<BannerTitleProps> = ({
  children,
  color = 'white',
  ...props
}) => {
  let value: string | null = null
  if (children && typeof children === 'string') {
    value = children.toUpperCase()
  }
  return (
    <Text variant="banner" color={color} {...props}>
      {value ?? children}
    </Text>
  )
}
