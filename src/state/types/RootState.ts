import { ThemeState } from '../../styles/theme/slice/types'
// [IMPORT NEW CONTAINER STATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code.
  You have to declare them here manually.
  Properties has to be optional ({sliceName?: SliceType}),
  because they are injected when the components are mounted sometime in your application's life.
  So, not available always.
*/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {
  theme?: ThemeState
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
