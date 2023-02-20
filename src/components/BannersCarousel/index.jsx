import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Link } from 'react-router-dom'
import ActionButton from '../ActionButton'
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
        type: 'bullets',
        clickable: true
      }}
      loop={true}
    >
      <SwiperSlide>
        <div  className='banner-carousel-item'>
          <div className='image-container'>
            <img src='../images/carousel/casa_jm.jpg' width={defaultWidthImage} loading='lazy' className='image-carousel'/>
            <div className='banner-infos'>
              <h2 className='banner-title'>Transformando moradias</h2>
              <p className='banner-paragraph'>Estamos sempre em busca de transformar projetos e realizar sonhos.</p>
              <ActionButton
                external={true}
                buttonText="Realize seu projeto"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div  className='banner-carousel-item'>
          <div className='image-container'>
            <img src='../images/carousel/living.png' width={defaultWidthImage} loading='lazy' className='image-carousel'/>
            <div className='banner-infos'>
              <h2 className='banner-title'>Design de interiores</h2>
              <p className='banner-paragraph'>Trazendo personalidade, novas experiências e conforto</p>
              <Link to={'/projetos'} className='banner-carousel-link'>Conheça todos os designs</Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div  className='banner-carousel-item'>
          <div className='image-container'>
            <img src='../images/carousel/office.png' width={defaultWidthImage} loading='lazy' className='image-carousel'/>
            <div className='banner-infos'>
              <h2 className='banner-title'>Criatividade e autenticidade</h2>
              <p className='banner-paragraph'>Conheça todos os nosso projetos, pensados sob medida.</p>
              <Link to={'/projetos'} className='banner-carousel-link'>Confira</Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </section>

  )
}