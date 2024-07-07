import React, { useLayoutEffect, useRef, useState } from 'react'
import './footer.css'
import CopyrightIcon from '@mui/icons-material/Copyright'
import LanguageIcon from '@mui/icons-material/Language'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CardTravelIcon from '@mui/icons-material/CardTravel'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Footer = () => {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth)
  }, [])

  return (
    <div ref={ref}>
      {width < 480 ? (
        <footer className='mobile_footer'>
          <div className='mob_footer'>
            <ul>
              <li>
                <SearchIcon />
                <p>Explore</p>
              </li>
              <li>
                <FavoriteBorderIcon />
                <p>Wishlist</p>
              </li>
              <li>
                <CardTravelIcon />
                <p>Trips</p>
              </li>
              <li>
                <AccountCircleIcon />
                <p>Profile</p>
              </li>
            </ul>
          </div>
        </footer>
      ) : (
        <footer className='main_footer'>
          <div className='footer'>
            <ul className='ul'>
              <li>Airbnb-Clone.</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
            <ul className='ul'>
              <LanguageIcon />
              <li>English</li>
              <li>Suppot & resources</li>
            </ul>
          </div>
        </footer>
      )}
    </div>
  )
}

export default Footer
