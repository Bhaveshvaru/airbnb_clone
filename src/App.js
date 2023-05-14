import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Landing from './pages/landingPage/Landing.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
