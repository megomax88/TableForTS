import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'

function App (): JSX.Element {
  return (
    <div className="App">
      <Routes>

<Route path="/" element={<MainPage />} />

</Routes>
    </div>
  )
}

export default App
