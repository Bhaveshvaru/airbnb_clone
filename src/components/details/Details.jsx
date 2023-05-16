import React from 'react'
import './details.css'

import apiData from '../card/api.js'

const Details = () => {
  let images = apiData[0].images
  return (
    <>
      {apiData &&
        images.map((item) => {
          return <img src={item} alt='images' />
        })}
    </>
  )
}

export default Details
