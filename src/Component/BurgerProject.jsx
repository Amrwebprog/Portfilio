import burgerone from '../assets/burgerOne.jpg'
import burgertow from '../assets/burgerTow.jpg'
import burgerthree from '../assets/burgerfour.jpg'
import burgerfour from '../assets/burgerfive.jpg'
import burgersex from '../assets/burgerSex.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { useContext } from 'react'
import { ProjectContext } from './projectContext'

export default function BurgerProject() {
  const images = [burgerone, burgertow, burgerthree, burgerfour, burgersex]
  const { projectFour, setProjectFour } = useContext(ProjectContext)

  const hideproject = () => {
    setProjectFour(!projectFour)
  }

  const handleSwiperClick = (event) => {
    event.stopPropagation()
  }

  return (
    <div
      className="project"
      onClick={hideproject}
    >
      <h1>Burger project</h1>
      <div onClick={handleSwiperClick}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
