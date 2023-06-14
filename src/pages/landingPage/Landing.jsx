import React from 'react'
import Header from '../../components/header/Header'
import CardDetails from '../../components/details/CardDetails'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Card from '../../components/card/Card'
import Icon from '../../components/icon/Icon'
import Footer from '../../components/footer/Footer'

const Landing = () => {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <Icon />
                <Card />
              </div>
            }
          />
          <Route path='/card/:id' element={<CardDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default Landing
