import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { configureAppStore } from 'state/configureStore'
import { ThemeProvider } from 'ui-lib/theme/ThemeProvider'

const store = configureAppStore()
const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  MOUNT_NODE,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
