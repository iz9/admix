/** @jsxImportSource theme-ui */
import React from 'react'
import {
  sliderStyles,
  sliderTrackStyles,
  backSliderTrackStyles,
  rangeSliderTrackStyles,
} from './styles'

export const Slider: React.FC = props => {
  return <div {...{ sx: sliderStyles, ...props }} />
}

export const SliderTrack: React.FC<{
  isRange?: boolean
  forwardRef?: React.ForwardedRef<HTMLDivElement>
}> = ({ isRange = false, forwardRef }) => {
  const sx = { ...sliderTrackStyles }
  if (isRange) {
    Object.assign(sx, rangeSliderTrackStyles)
  } else {
    Object.assign(sx, backSliderTrackStyles)
  }
  return <div {...{ ref: forwardRef, sx }} />
}
