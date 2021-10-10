/** @jsxImportSource theme-ui */

import React from 'react'
import { selectStyles, selectThemeMapper } from './styles'
import ReactSelect, { OnChangeValue, ActionMeta } from 'react-select'

export type SelectOption = {
  label: string
  value: unknown
}

interface SelectProps {
  onChange: (
    value: OnChangeValue<any, any>,
    actionMeta: ActionMeta<any>,
  ) => void
  disabled?: boolean
  placeholder?: string
  options: SelectOption[]
}

/**
 *
 * Select component
 *
 */
export const Select: React.FC<SelectProps> = ({
  disabled,
  options,
  onChange,
  ...props
}) => {
  return (
    <div sx={{ position: 'relative' }}>
      <ReactSelect
        onChange={onChange}
        isDisabled={disabled}
        options={options}
        styles={selectStyles}
        theme={selectThemeMapper}
      />
    </div>
  )
}
