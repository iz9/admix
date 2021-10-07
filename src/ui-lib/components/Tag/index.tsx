/** @jsxImportSource theme-ui */

import React from 'react'
import type { ThemeUICSSObject } from 'theme-ui'
import type { ThemeColor } from '../../theme'
import { Text } from '../Text'

interface TagProps {
  /** ThemeUI styling object */
  sx?: ThemeUICSSObject
  /** Color of the text and border. According to the theme */
  color?: ThemeColor
}

/**
 *
 * Tag component
 *
 */
export const Tag: React.FC<TagProps> = ({
  color = 'black',
  sx,
  children,
  ...props
}) => {
  return (
    <div
      {...{
        sx: {
          alignItems: 'center',
          borderColor: color,
          borderRadius: '6px',
          borderStyle: 'solid',
          borderWidth: '1px',
          color,
          display: 'inline-flex',
          justifyContent: 'center',
          padding: '2px 6px',
          ...sx,
        },
        ...props,
      }}
    >
      <Text variant="tag" color="inherit">
        {children}
      </Text>
    </div>
  )
}
