import React from 'react'
import './details.css'
import { useParams } from 'react-router-dom'
import apiData from '../card/api.js'

const CardDetails = () => {
  let { id } = useParams()
  let images = apiData[id].images
  return (
    <>
      {apiData &&
        images.map((item, index) => {
          return <img key={index} src={item} alt='images' />
        })}
    </>
  )
}

export default CardDetails
