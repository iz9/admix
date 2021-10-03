import {ThemeProvider} from "../src/styles/theme/ThemeProvider";
import {configureAppStore} from "../src/state/configureStore";
import {Provider} from "react-redux";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const store = configureAppStore()

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </Provider>

  ),
]
