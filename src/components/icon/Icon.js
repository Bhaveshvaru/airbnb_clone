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

let iconObj = [
  { title: 'Design', icon: design },
  { title: 'Beach', icon: beach },
  { title: 'Castle', icon: castle },
  { title: 'Amazing ', icon: window },
  { title: 'Luxe', icon: city },
  { title: 'Pool', icon: views },
  { title: 'Cabins', icon: single_home },
  { title: 'Trending', icon: trending },
  { title: 'Cities', icon: building },
  { title: 'Island', icon: water },
  { title: 'Camping', icon: camping },
]

const icon = () => {
  return (
    <div className='icon_list' style={{ zindex: 99999999 }}>
      {iconObj.map((item) => {
        return (
          <div key={item.icon}>
            <div className='list' key={item}>
              <img width='25px' height='25px' src={`${item.icon}`} alt='icon' />
              <p className='title'>{item.title}</p>
              <hr className='icon_hr' />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default icon
