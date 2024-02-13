import React, { useEffect, useState } from 'react'
import './card.css'
import axios from 'axios'
import apiData from './api'
import Ratings from '../ratings/Rating.jsx'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Carousel from '../carosel/Carousel'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Card = () => {
  const [data, setData] = useState(apiData)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage)
  }

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: 'GET',
        url: 'https://airbnb13.p.rapidapi.com/search-location',
        params: {
          location: 'Ubud',
          checkin: '2023-09-16',
          checkout: '2023-09-17',
          adults: '1',
          children: '0',
          infants: '0',
          pets: '0',
          page: '1',
          currency: 'SGD',
        },
        headers: {},
      }
      try {
        const response = await axios.request(options)
        console.log(response.data) // results
        setData(response.data) // Adjust this based on your API structure
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [currentPage, itemsPerPage])

  return (
    <div className='cards'>
      {currentItems &&
        currentItems.map((currentItems, index) => {
          return (
            <div className='card' key={currentItems.id}>
              {/* <div className='stage' onClick={() => setActive(true)}>
                <div
                  className={`heart ${currentItems.isWishlist ? 'is-active' : ''}`}
                ></div>
              </div> */}
              <AiOutlineHeart className='wish' />
              <AiFillHeart className='fill' />
              <Carousel index={index} images={currentItems.images} />
              <Link to={`/card/${index}`} style={{ textDecoration: 'none' }}>
                <p className='name'>{currentItems.name}</p>
              </Link>
              <p className='address'>{currentItems.address}</p>

              <div className='number'>
                <p>${currentItems.price.total.toLocaleString()}</p>
                {currentItems.rating === undefined ? (
                  <Ratings stars={4} />
                ) : (
                  <Ratings stars={currentItems.rating} />
                )}
              </div>
            </div>
          )
        })}
      <div className='flex'>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(data.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
          />
        </Stack>
      </div>
    </div>
  )
}

export default Card
