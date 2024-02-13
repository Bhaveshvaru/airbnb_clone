import React, { useState } from 'react'
import './details.css'
import { useParams } from 'react-router-dom'
import apiData from '../card/api.js'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { Button, Container, Divider, Typography } from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import Modal from '@mui/material/Modal'
import ClearIcon from '@mui/icons-material/Clear'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import IosShareIcon from '@mui/icons-material/IosShare'
import Listing from '../listing/Listing'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css'
import 'react-calendar/dist/Calendar.css'

const CardDetails = () => {
  const [value, onChange] = useState(new Date())
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  let { id } = useParams()
  let images = apiData[id].images.map((url) => ({ img: url }))
  console.log(apiData[id])
  let pageShowImage = apiData[id].images.filter(
    (item, index) => index > 0 && index <= 4
  )
  const newArray = pageShowImage.map((url) => ({ img: url }))
  let firstImage = apiData[id].images[0]
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'background.paper',
  }

  return (
    <>
      <Box sx={{ marginTop: 5, marginLeft: 10 }}>
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 20,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontFamily: 'Nunito Sans',
                  fontSize: '1.5rem',
                  fontWweight: 500,
                  marginBottom: 1,
                }}
              >
                {apiData[id].name}
              </Typography>
              <Typography variant='p' sx={{ textDecoration: 'underline' }}>
                {apiData[id].address}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'flex-end',
              }}
            >
              <Button
                startIcon={<IosShareIcon />}
                sx={{
                  textDecoration: 'underline',
                  borderColor: 'black',
                  textTransform: 'none',
                  color: 'black',
                  '&:hover': {
                    borderColor: 'black',
                    backgroundColor: 'white',
                    opacity: '0.8',
                    textDecoration: 'underline',
                  },
                }}
              >
                share
              </Button>

              <Button
                startIcon={<FavoriteBorderIcon />}
                sx={{
                  borderColor: 'black',
                  textTransform: 'none',
                  color: 'black',
                  textDecoration: 'underline',

                  '&:hover': {
                    borderColor: 'black',
                    backgroundColor: 'white',
                    opacity: '0.8',
                    textDecoration: 'underline',
                  },
                }}
              >
                save
              </Button>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box>
            <img
              className='rounded-left'
              src={firstImage}
              alt='pages'
              style={{ height: '396px' }}
            />
          </Box>
          <ImageList sx={{ width: 500, height: 400 }} cols={2} gap={5}>
            {newArray.map((item, index) => (
              <ImageListItem key={item.img}>
                <img
                  style={{ height: '100px', objectFit: 'cover' }}
                  srcSet={`${item.img}`}
                  src={`${item.img}`}
                  alt={item.title}
                  loading='lazy'
                  className={index % 2 !== 0 ? 'rounded-right' : ''}
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Button
            sx={{
              position: 'relative',
              backgroundColor: 'white',
              textTransform: 'lowercase',
              right: 200,
              top: 160,
              borderColor: 'black',
              color: 'black',
              '&:hover': {
                borderColor: 'black',
                backgroundColor: 'white',
                opacity: '0.8',
              },
            }}
            variant='outlined'
            startIcon={<DragIndicatorIcon />}
            onClick={handleOpen}
          >
            show all images
          </Button>
        </Box>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <ImageList sx={{ width: '70%', height: '80%' }} cols={2} gap={5}>
              {images.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}&w=348&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}&fit=crop&auto=format`}
                    alt={item.title}
                    loading='lazy'
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <ClearIcon
              onClick={handleClose}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                left: '50px',
                bottom: '350px',
              }}
            />
          </Box>
        </Modal>
      </Box>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '100%',
          }}
        >
          <Listing />
          <Box
            className='payment_card'
            sx={{
              marginLeft: 10,
              backgroundColor: '#ffffff',
              width: '50vh',
              height: '47vh',
              marginRight: 10,
            }}
          >
            <h1>
              $365 <span>Night</span>
            </h1>
            <div style={{ marginBottom: '10px', marginLeft: '10px' }}>
              <DateRangePicker onChange={onChange} value={value} />
            </div>
            <button className='btn-reserve'>Reserve</button>

            <p>you won't be charged yet </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <p style={{ textDecoration: 'underline' }}>$361 x 3 nights</p>
              <p>$1,083</p>
            </div>

            <div
              style={{
                marginTop: -15,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <p style={{ textDecoration: 'underline' }}>Airbnb service fee</p>
              <p>$153</p>
            </div>
            <Divider
              orientation='horizontal'
              sx={{ width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.52)' }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <p style={{ fontWeight: '700' }}>Total before taxes</p>
              <p style={{ fontWeight: '700' }}>$1,236</p>
            </div>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default CardDetails
