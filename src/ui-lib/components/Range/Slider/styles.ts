import type { ThemeUICSSObject } from 'theme-ui'

export const sliderTrackStyles: ThemeUICSSObject = {
  position: 'absolute',
  borderRadius: '3px',
  height: '4px',
}

export const backSliderTrackStyles: ThemeUICSSObject = {
  backgroundColor: 'gray700',
  width: '100%',
  zIndex: 1,
}

export const rangeSliderTrackStyles: ThemeUICSSObject = {
  backgroundColor: 'primary',
  zIndex: 2,
}

export const sliderStyles: ThemeUICSSObject = {
  position: 'relative',
  width: '100%',
}
