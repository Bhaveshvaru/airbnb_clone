import React from 'react'

import design from '../../assets/design.svg'
import beach from '../../assets/beach.svg'
import castle from '../../assets/castle.svg'
import window from '../../assets/window.svg'
import city from '../../assets/city.svg'
import views from '../../assets/views.svg'
import single_home from '../../assets/single_home.svg'
import trending from '../../assets/trending.svg'
import building from '../../assets/building.svg'
import water from '../../assets/water.svg'
import camping from '../../assets/camping.svg'

import './icon.css'

const arrIcon = []
arrIcon.push(
  design,
  beach,
  castle,
  window,
  city,
  views,
  single_home,
  trending,
  building,
  water,
  camping
)

const icon = () => {
  return (
    <div className='icon_list'>
      {arrIcon.map((item) => {
        return (
          <div key={item}>
            <img width='45x' height='45px' src={`${item}`} />
            <hr className='icon_hr' />
          </div>
        )
      })}
    </div>
  )
}

export default icon
