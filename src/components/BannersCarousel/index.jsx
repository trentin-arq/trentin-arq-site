import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './styles.sass'

export default function BannersCarousel(){
  const defaultWidthImage = 420

  return(
    <section className='banners-carousel'>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      autoplay={true}
      delay={7000}
      pagination={{
        type: 'bullets'
      }}
      loop={true}
    >
      <SwiperSlide>
        <div  className='banner-carousel-item'>
          <div className='image-container'>
            <img src='../images/carousel/casa_jm.jpg' width={defaultWidthImage} loading='lazy'/>
            <div className='banner-infos'>
              <h2 className='banner-title'>Texto de título</h2>
              <p className='banner-paragraph'>Texto de descrição Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente corporis, ipsum et doloremque incidunt.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div  className='banner-carousel-item'>
          <div className='image-container'>
            <img src='../images/carousel/living.jpg' width={defaultWidthImage} loading='lazy'/>
            <div className='banner-infos'>
              <h2 className='banner-title'>Texto de título</h2>
              <p className='banner-paragraph'>Texto de descrição Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente corporis, ipsum et doloremque incidunt.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div  className='banner-carousel-item'>
          <div className='image-container'>
            <img src='../images/carousel/interiores.jpg' width={defaultWidthImage} loading='lazy'/>
            <div className='banner-infos'>
              <h2 className='banner-title'>Texto de título</h2>
              <p className='banner-paragraph'>Texto de descrição Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente corporis, ipsum et doloremque incidunt.</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </section>

  )
}