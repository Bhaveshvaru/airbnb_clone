import React, { useState } from 'react'
import './details.css'
import { useParams } from 'react-router-dom'
import apiData from '../card/api.js'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { Button } from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import Modal from '@mui/material/Modal'

const CardDetails = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  let { id } = useParams()
  let images = apiData[id].images.map((url) => ({ img: url }))
  console.log(images)
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
    width: '80%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  return (
    <>
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
            style={{ height: '400px' }}
          />
        </Box>
        <ImageList sx={{ width: 500, height: 400 }} cols={2} gap={5}>
          {newArray.map((item, index) => (
            <ImageListItem key={item.img}>
              <img
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
            position: 'fixed',
            backgroundColor: 'white',
            textTransform: 'lowercase',
            right: 150,
            top: 430,
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
          <ImageList
            sx={{ width: '70%', height: 750 }}
            variant='woven'
            cols={2}
            gap={1}
          >
            {images.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}`}
                  src={`${item.img}`}
                  alt={item.title}
                  loading='lazy'
                  style={{ width: '20rem', height: '20rem' }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Modal>
    </>
  )
}

export default CardDetails
