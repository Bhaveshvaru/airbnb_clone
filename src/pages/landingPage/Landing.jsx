import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Icon from '../../components/icon/Icon.js'
import Card from '../../components/card/Card'
import Details from '../../components/details/Details'
import { useLocation } from 'react-router-dom'

const Landing = () => {
  const history = useLocation()
  const [showCard, setShowCard] = useState(false)
  useEffect(() => {
    if (history.pathname === '/card') {
      setShowCard(true)
    } else {
      setShowCard(false)
    }
  }, [history])

  return (
    <>
      <Header />
      <Icon />
      {showCard && showCard ? <Details /> : <Card />}
    </>
  )
}

export default Landing
