import './carosel.css'
import ImageGallery from 'react-image-gallery'

import { useNavigate } from 'react-router-dom'

const Carousel = ({ images, index }) => {
  const navigate = useNavigate()
  let arr = []
  images.map((item) => {
    let obj = { original: item }
    return arr.push(obj)
  })
  const handleClick = () => {
    navigate(`card/${index}`)
  }

  return (
    <>
      {arr.length > 0 ? (
        <div style={{ cursor: 'pointer' }}>
          <ImageGallery
            onClick={handleClick}
            originalHeight='16rem'
            originalWidth='18rems'
            showPlayButton={false}
            showFullscreenButton={false}
            loading='lazy'
            items={arr}
          />
        </div>
      ) : null}
    </>
  )
}

export default Carousel
