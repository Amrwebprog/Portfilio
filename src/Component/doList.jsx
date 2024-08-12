import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import dolistone from '../assets/dolst1.jpg'
import dolisttow from '../assets/dolst2.jpg'
import dolistthre from '../assets/dolst3.jpg'
import { useContext } from 'react'
import { ProjectContext } from './projectContext'

export default function DoList() {
  const images = [dolistone, dolisttow, dolistthre]
  const { projectT, setProjectT } = useContext(ProjectContext)

  const hideproject = () => {
    setProjectT(!projectT)
  }

  const handleSwiperClick = (event) => {
    event.stopPropagation()
  }

  return (
    <div
      className="project"
      onClick={hideproject}
    >
      <h1>Do to list</h1>
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
