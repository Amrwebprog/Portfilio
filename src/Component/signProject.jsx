import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import Oneimg from '../assets/Capture.jpg'
import { useContext } from 'react'
import { ProjectContext } from './projectContext'

export default function SinProject() {
  const { projectTr, setProjectTr } = useContext(ProjectContext)
  const images = [Oneimg]

  const hideproject = () => {
    setProjectTr(!projectTr)
  }

  const handleSwiperClick = (event) => {
    event.stopPropagation()
  }

  return (
    <div
      className="project"
      onClick={hideproject}
    >
      <h1>Sign in and Signup System</h1>
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
