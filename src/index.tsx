import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { configureAppStore } from 'state/configureStore'

const store = configureAppStore()
const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  MOUNT_NODE,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
