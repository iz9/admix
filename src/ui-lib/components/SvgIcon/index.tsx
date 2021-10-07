/** @jsxImportSource theme-ui */

import React from 'react'
import { SvgContainer } from './SvgContainer'
import { Property } from 'csstype'
import { ThemeUICSSObject } from 'theme-ui'
import { ThemeColor, theme } from 'ui-lib/theme'
import { hexToCSSFilter } from 'ui-lib/utils'

interface SvgIconProps {
  /** Icon imported as React.Component */
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  /** ThemeUI styling object */
  sx?: ThemeUICSSObject
  height?: Property.Height | number
  width?: Property.Width | number
  /** one of the colors theme includes */
  color?: ThemeColor
}

/**
 *
 * SvgIcon component
 *
 */
export const SvgIcon: React.FC<SvgIconProps> = ({
  Icon,
  sx,
  height = 20,
  width = 20,
  color,
  ...props
}) => {
  const themedColorToCSSFilter = (color: ThemeColor) => {
    return hexToCSSFilter(theme.colors[color]).filter
  }

  const [cssFilter, setCssFilter] = React.useState<string>('')

  React.useLayoutEffect(() => {
    color && setCssFilter(themedColorToCSSFilter(color))
  }, [color])

  return (
    <SvgContainer>
      <Icon
        {...{ sx: { height, width, filter: cssFilter, ...sx }, ...props }}
      />
    </SvgContainer>
  )
}
