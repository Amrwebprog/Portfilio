import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import gen1 from '../assets/gen1.jpg'
import gen2 from '../assets/gen2.jpg'
import gen3 from '../assets/gen3.jpg'
import gen4 from '../assets/gen4.jpg'
import gen5 from '../assets/gen5.jpg'
import gen6 from '../assets/gen6.jpg'
import gen7 from '../assets/gen7.jpg'
import gen8 from '../assets/gen8.jpg'
import gen9 from '../assets/gen9.jpg'
import gen10 from '../assets/gen10.jpg'
import gen11 from '../assets/gen11.jpg'
import gen12 from '../assets/gen12.jpg'
import gen13 from '../assets/gen13.jpg'
import gen14 from '../assets/gen14.jpg'
import gen15 from '../assets/gen15.jpg'
import { useContext } from 'react'
import { ProjectContext } from './projectContext'

export default function GeniusOnline() {
  const images = [
    gen1,
    gen2,
    gen3,
    gen4,
    gen5,
    gen6,
    gen7,
    gen8,
    gen9,
    gen10,
    gen11,
    gen12,
    gen13,
    gen14,
    gen15,
  ]
  const { projectO, setProjectO } = useContext(ProjectContext)
  const hideproject = () => {
    setProjectO(!projectO)
  }

  const handleSwiperClick = (event) => {
    event.stopPropagation()
  }

  return (
    <div
      className="project"
      onClick={hideproject}
    >
      <h1>Genius Online</h1>
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
