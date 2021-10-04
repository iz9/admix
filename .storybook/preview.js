import {ThemeProvider} from "../src/ui-lib/theme";
import {useEffect} from "react";
import {loadFont} from "../src/ui-lib/utils/loadFont";

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const decorators = [
  (Story) => {
    useEffect(() => {
        loadFont()
    },[])
    return (
      <ThemeProvider>
        <Story/>
      </ThemeProvider>
    )
  }
]
