/** @jsxImportSource theme-ui */

import React from 'react'
import type { ThemeUICSSObject } from 'theme-ui'
import { getInputStyles, getIconContainerStyles, IconPosition } from './styles'

import { ThemeColor } from '../../theme'
import { Property } from 'csstype'

type RenderIconFn = () => JSX.Element
interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  /** text and border color */
  color?: ThemeColor | Property.Color
  disabled?: boolean
  placeholder?: string
  /** returns JSX markdown with <SvgIcon/> element */
  renderIconAfter?: RenderIconFn
  /** returns JSX markdown with <SvgIcon/> element */
  renderIconBefore?: RenderIconFn
  /** ThemeUI styling object */
  sx?: ThemeUICSSObject
}

/**
 *
 * Input component
 *
 */
export const Input: React.FC<InputProps> = ({
  color,
  disabled,
  renderIconAfter,
  renderIconBefore,
  sx,
  ...props
}) => {
  const styles = getInputStyles({
    color,
    isIconBefore: Boolean(renderIconBefore),
    isIconAfter: Boolean(renderIconAfter),
  })

  const renderIcon = (position: IconPosition) => {
    const styles = getIconContainerStyles(position)
    const fn = position === 'before' ? renderIconBefore : renderIconAfter
    return fn ? <div sx={styles}>{fn()}</div> : null
  }

  return (
    <div sx={{ position: 'relative' }}>
      {renderIcon('before')}
      <input {...{ sx: { ...styles, ...sx }, disabled, ...props }} />
      {renderIcon('after')}
    </div>
  )
}
