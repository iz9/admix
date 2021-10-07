/** @jsxImportSource theme-ui */

import React from 'react'
import { svgContainerStyles } from './styles'

/**
 *
 * SvgIcon component
 *
 */
export const SvgContainer: React.FC = props => {
  return <div {...{ sx: svgContainerStyles, ...props }} />
}
