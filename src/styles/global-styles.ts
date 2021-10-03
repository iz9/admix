import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding-top: 4em;
    background-color: ${p => p.theme.colors.background};
  }
  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  p,
  label {
    line-height: 1.5em;
  }
  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }
  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`
