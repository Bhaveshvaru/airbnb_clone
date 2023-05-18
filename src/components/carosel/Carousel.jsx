import React, { useEffect, useState } from 'react'
import './carosel.css'
import ImageGallery from 'react-image-gallery'

const Carousel = ({ images }) => {
  let arr = []
  images.map((item) => {
    let obj = { original: item }
    arr.push(obj)
  })

  return (
    <>
      {arr.length > 0 ? (
        <ImageGallery
          originalHeight='16rem'
          originalWidth='18rems'
          showPlayButton={false}
          showFullscreenButton={false}
          loading='lazy'
          
          items={arr}
        />
      ) : null}
    </>
  )
}

export default Carousel
