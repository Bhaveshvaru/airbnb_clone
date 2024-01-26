import React from 'react'
import './listing.css'
import { Box, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import StarIcon from '@mui/icons-material/Star'

const Listing = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant='h1'
          sx={{
            fontFamily: 'Nunito Sans',
            fontSize: '1.5rem',
            fontWeight: 500,
            marginBottom: 1,
          }}
        >
          4 Palms Retreat
        </Typography>

        <Typography
          variant='p'
          sx={{
            fontFamily: 'Nunito Sans',
            fontSize: '1rem',
            fontWeight: 200,
          }}
        >
          12 guests . 4 bedroom . 12 beds . 3 bathrooms
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',

            marginTop: '10px',
          }}
        >
          <StarIcon />

          <Typography
            sx={{
              fontFamily: 'Nunito Sans',
              fontSize: '1rem',
              fontWeight: 100,
              textDecoration: 'underline',
              marginBottom: '10px',
            }}
            variant='p'
          >
            4.86
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Nunito Sans',
              fontSize: '1rem',
              fontWeight: 100,
            }}
          >
            104 reviews
          </Typography>
        </Box>
        <Divider
          orientation='horizontal'
          sx={{ width: '40rem', backgroundColor: 'rgba(0, 0, 0, 0.52)' }}
        />
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          <img
            style={{ borderRadius: '50%', height: '4rem', width: '4rem' }}
            src='https://a0.muscache.com/im/pictures/user/f735e15f-0648-466d-9a82-e59ee678dbdc.jpg?aki_policy=profile_x_medium'
            alt='profile'
          />
          <Box>
            <Typography
              sx={{
                fontFamily: 'Nunito Sans',
                fontSize: '1rem',
                fontWeight: 100,
              }}
            >
              Hosted by Madhumita
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Nunito Sans',
                fontSize: '1rem',
                fontWeight: 100,
              }}
            >
              6 years hosting
            </Typography>
          </Box>
        </Box>
        <Divider
          orientation='horizontal'
          sx={{ width: '40rem', backgroundColor: 'rgba(0, 0, 0, 0.52)' }}
        />
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          <img
            style={{ borderRadius: '50%', height: '4rem', width: '4rem' }}
            src='https://a0.muscache.com/im/pictures/user/f735e15f-0648-466d-9a82-e59ee678dbdc.jpg?aki_policy=profile_x_medium'
            alt='profile'
          />
          <Box>
            <Typography
              sx={{
                fontFamily: 'Nunito Sans',
                fontSize: '1rem',
                fontWeight: 100,
              }}
            >
              Hosted by Madhumita
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Nunito Sans',
                fontSize: '1rem',
                fontWeight: 100,
              }}
            >
              6 years hosting
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Listing
