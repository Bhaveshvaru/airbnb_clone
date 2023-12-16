import React, { useState } from 'react'
import logo from '../../assets/Airbnb-logo_full.jpeg'
import ham from '../../assets/ham.svg'
import Search from '../search/Search'
import './header.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

const Header = () => {
  const [showLogin, setShowLogin] = useState(false)

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
        <Search />

        <div className='flex' onClick={() => setShowLogin(!showLogin)}>
          <img
            className='ham'
            src={ham}
            alt='globe'
            height='30px'
            width='30px'
          />
          <AccountCircleIcon style={{ cursor: 'pointer' }} fontSize='large' />
        </div>
      </div>
      <hr className='hr relative' />
      {showLogin ? (
        <Box
          className='absolute'
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <Divider />
          <nav aria-label='secondary mailbox folders'>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary='Log In' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component='a' href='#simple-list'>
                  <ListItemText primary='Sign Up' />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton component='a' href='#simple-list'>
                  <ListItemText primary='Help Center' />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse)
              }}
              onError={() => {
                console.log('Login Failed')
              }}
            />
          </GoogleOAuthProvider>
        </Box>
      ) : null}
    </div>
  )
}

export default Header
