import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import './rating.css'

const Rating = ({ stars }) => {
  let number = Math.floor(stars)
  let star = [...Array(Math.floor(number)).keys()].reverse()

  return (
    <div className='star'>
      {star &&
        star.map((item, index) => {
          return (
            <div key={index}>{item ? <AiFillStar /> : <AiOutlineStar />}</div>
          )
        })}
    </div>
  )
}

export default Rating
