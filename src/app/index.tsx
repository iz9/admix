import React, { useEffect } from 'react'
import { loadFont } from 'ui-lib/utils/loadFont'

export function App() {
  useEffect(() => {
    loadFont()
  }, [])
  return <div className="App">React App</div>
}
