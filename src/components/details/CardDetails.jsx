import React from 'react'
import './details.css'
import { useParams } from 'react-router-dom'
import apiData from '../card/api.js'
import Columned from '@durrtagnan/react-columned'

const CardDetails = () => {
  let { id } = useParams()
  let images = apiData[id].images
  return (
    <div>
      <Columned>
        {images.map((item, index) => {
          return <img key={index} src={item} alt='images' />
        })}
      </Columned>
      ;
    </div>
  )
}

export default CardDetails
