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
import Modal from '@mui/material/Modal'

const Header = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const style = {
    position: 'absolute',
    top: '15%',
    left: '85%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

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
        <>
          <Search />
        </>

        <div
          className='flex'
          style={{ justifyContent: 'end' }}
          onClick={() => setShowLogin(!showLogin)}
        >
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
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
          }}
        >
          <Divider />
          <nav aria-label='secondary mailbox folders'>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary='Log In' onClick={handleOpen} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component='a'>
                  <ListItemText primary='Sign Up' onClick={handleOpen} />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton component='a'>
                  <ListItemText primary='Help Center' />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      ) : null}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Box className='flex'>
              <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse)
                    handleClose()
                  }}
                  onError={() => {
                    window.alert('Login Failed')
                    handleClose()
                  }}
                />
              </GoogleOAuthProvider>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default Header
