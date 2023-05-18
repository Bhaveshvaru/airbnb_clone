import React from 'react'
import './details.css'
import { useParams } from 'react-router-dom'

import apiData from '../card/api.js'

const Details = () => {
  let { id } = useParams()
  console.log(id)
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
