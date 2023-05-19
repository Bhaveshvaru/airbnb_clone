import React, { useEffect, useState } from 'react'
import './card.css'
import axios from 'axios'
import apiData from './api'
import Ratings from '../ratings/Rating.jsx'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Carousel from '../carosel/Carousel'

const Card = () => {
  const [data, setData] = useState(apiData)
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
      } catch (error) {
        console.error(error)
      }
    }
  }, [])

  return (
    <div className='cards'>
      {data &&
        data.map((data, index) => {
          return (
            <div className='card' key={data.id}>
              <AiOutlineHeart className='wish' />
              <AiFillHeart className='fill' />
              <Link to={`/card${index}`}>
                <Carousel images={data.images} />
              </Link>

              <Link to='/card' style={{ textDecoration: 'none' }}>
                <p className='name'>{data.name}</p>
              </Link>
              <p className='address'>{data.address}</p>

              <div className='number'>
                <p>${data.price.total.toLocaleString()}</p>
                {data.rating === undefined ? (
                  <Ratings stars={4} />
                ) : (
                  <Ratings stars={data.rating} />
                )}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Card
