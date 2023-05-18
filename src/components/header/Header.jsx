import React from 'react'
import logo from '../../assets/Airbnb-logo_full.jpeg'
import ham from '../../assets/ham.svg'

import './header.css'

const Header = () => {
  return (
    <div className='sticky'>
      <div className='heading'>
        <img
          className='logo'
          src={logo}
          alt='logo'
          height='50px'
          width='100px'
        />
        <h3 style={{ color: 'black' }}>Filter</h3>

        <img className='ham' src={ham} alt='globe' height='30px' width='30px' />
      </div>
      <hr className='hr'  />
    </div>
  )
}

export default Header
