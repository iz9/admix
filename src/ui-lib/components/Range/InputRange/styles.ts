import type { ThemeUICSSObject } from 'theme-ui'

const pseudoThumbStyles: ThemeUICSSObject = {
  appearance: 'unset',
  backgroundColor: 'white',
  borderColor: 'primary',
  borderRadius: '50%',
  borderStyle: 'solid',
  borderWidth: '7px',
  boxShadow: '0px 8px 20px rgba(62, 91, 203, 0.5)', // todo: converter from hex theme colors to rgba
  color: 'primary',
  cursor: 'pointer',
  height: '24px',
  pointerEvents: 'all',
  position: 'relative',
  width: '24px',
}

export const inputStyles: ThemeUICSSObject = {
  WebkitAppearance: 'none',
  WebkitTapHighlightColor: 'transparent',
  height: 0,
  outline: 'none',
  pointerEvents: 'none',
  position: 'absolute',
  width: '100%',
  zIndex: 3,
  '&::-webkit-slider-thumb': { ...pseudoThumbStyles },
  '&::-moz-range-thumb': { ...pseudoThumbStyles },
}
