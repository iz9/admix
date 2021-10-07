/** @jsxImportSource theme-ui */

import React, { useCallback } from 'react'
import type { ThemeUICSSObject } from 'theme-ui'
import {
  InputRange,
  InputRangeDirection,
  rangeDirectionAttr,
} from './InputRange'
import { Slider, SliderTrack } from './Slider'

interface RangeProps {
  /** ThemeUI styling object */
  sx?: ThemeUICSSObject
  min: number
  max: number
  onChange: (e: { min: number; max: number }) => void
}

/**
 *
 * Range component
 *
 */
export const Range: React.FC<RangeProps> = ({
  min,
  max,
  onChange,
  ...rest
}) => {
  const [currentMin, setCurrentMin] = React.useState<number>(min)
  const [currentMax, setCurrentMax] = React.useState<number>(max)
  const minValRef = React.useRef<number>(min)
  const maxValRef = React.useRef<number>(max)
  const rangeRef = React.useRef<HTMLInputElement>(null)
  const getPercent: (value: number) => number = React.useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  )

  const updateRangeStyles = useCallback(
    (width: number, left?: number) => {
      requestAnimationFrame(() => {
        if (rangeRef.current) {
          rangeRef.current.style.width = `${width}%`
          left ? (rangeRef.current.style.left = `${left}%`) : void 0
        }
      })
    },
    [rangeRef.current],
  )

  const onInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const direction = e.target.getAttribute(rangeDirectionAttr)
      if (direction === InputRangeDirection.min) {
        const value = Math.min(Number(e?.target?.value), currentMax - 1)
        setCurrentMin(value)
        minValRef.current = value
      } else {
        const value = Math.max(Number(e?.target?.value), currentMin + 1)
        setCurrentMax(value)
        maxValRef.current = value
      }
    },
    [currentMin, currentMax],
  )

  React.useEffect(
    function handleChangeLeftSide() {
      const minPercent = getPercent(currentMin)
      const maxPercent = getPercent(maxValRef.current)

      updateRangeStyles(maxPercent - minPercent, minPercent)
    },
    [currentMin, getPercent],
  )

  React.useEffect(
    function handleChangeRightSide() {
      const minPercent = getPercent(minValRef.current)
      const maxPercent = getPercent(currentMax)

      updateRangeStyles(maxPercent - minPercent)
    },
    [currentMax, getPercent],
  )

  React.useEffect(
    function onChangeCbTrigger() {
      onChange({ min: currentMin, max: currentMax })
    },
    [currentMin, currentMax, onChange],
  )

  return (
    <Slider {...rest}>
      <InputRange
        value={currentMin}
        min={min}
        max={max}
        onChange={onInputChange}
        direction={InputRangeDirection.min}
      />
      <InputRange
        value={currentMax}
        min={min}
        max={max}
        onChange={onInputChange}
        direction={InputRangeDirection.max}
      />
      <SliderTrack />
      <SliderTrack isRange forwardRef={rangeRef} />
    </Slider>
  )
}
