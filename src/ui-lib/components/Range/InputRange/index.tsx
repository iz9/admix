/** @jsxImportSource theme-ui */
import React from 'react'
import { inputStyles } from './styles'

export const rangeDirectionAttr = 'data-range-direction'

export enum InputRangeDirection {
  min = 'min',
  max = 'max',
}
export const InputRange: React.FC<{
  value: number
  min: number
  max: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  direction: InputRangeDirection
}> = ({ min, max, value, onChange, direction }) => {
  const sx = { ...inputStyles }

  if (direction === InputRangeDirection.max) {
    sx.zIndex = 4
  }

  const changeHandler = (e: any) => {
    console.log('INPUT CHANGE EVENT! from input!')
    onChange(e)
  }

  return (
    <input
      {...{
        type: 'range',
        min,
        max,
        value,
        onChange: changeHandler,
        [rangeDirectionAttr]: direction,
        sx,
      }}
    />
  )
}
