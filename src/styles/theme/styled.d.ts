import 'styled-components'
import { Theme } from './themes'

/* This is the suggested way of declaring theme types */
declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}
