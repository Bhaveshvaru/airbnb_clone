import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Details from '../../components/details/Details'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Card from '../../components/card/Card'
const Landing = () => {
  const [showCard, setShowCard] = useState(false)
  // useEffect(() => {
  //   console.log(history.pathname.slice(0, 5))
  //   if (history.pathname.slice(0, 5) === '/card') {
  //     setShowCard(true)
  //   } else {
  //     setShowCard(false)
  //   }
  // }, [history])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Header />
              <Card />
            </div>
          }
        />
        <Route path='/card/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Landing
