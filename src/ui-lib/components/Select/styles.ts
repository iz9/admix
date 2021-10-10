import { StylesConfig, Theme } from 'react-select'
import { theme } from '../../theme'

export const selectStyles: StylesConfig = {
  control: provided => ({
    ...provided,
    fontSize: theme.fontSizes.m,
    fontFamily: theme.fonts.body,
    boxShadow: 'none',
    borderRadius: '10px',
  }),
  input: provided => ({
    ...provided,
    padding: '10px',
    margin: 0,
  }),
  option: provided => ({
    ...provided,
    fontWeight: theme.fontWeights.body,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.m,
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
}

export const selectThemeMapper = (selectTheme: Theme) => ({
  ...selectTheme,
  colors: {
    ...selectTheme.colors,
    primary: theme.colors.gray700,
    primary25: theme.colors.gray700,
    primary50: theme.colors.gray700,
  },
})
