import React from 'react'
import './footer.css'
import CopyrightIcon from '@mui/icons-material/Copyright'
import LanguageIcon from '@mui/icons-material/Language'

const Footer = () => {
  return (
    <div className='main_footer'>
      <div className='footer'>
        <ul>
          <CopyrightIcon />
          <li>Airbnb.</li>
          <li>Privacy</li>

          <li>Terms</li>
        </ul>

        <ul>
          <LanguageIcon />
          <li>English</li>
          <li>Suppot & resources</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
