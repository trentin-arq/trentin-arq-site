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
              <img src='../images/carousel/casa_jm.png' width={defaultWidthImage} loading='lazy' className='image-carousel'/>
              <div className='banner-infos'>
                <h2 className='banner-title'>Projetos Arquitetônicos</h2>
                <p className='banner-paragraph'> Projetos e execução de Residências únicas e exclusivas. Clique e conheça nossas casas assinadas.</p>
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
              <img src='../images/carousel/interiores.jpg' width={defaultWidthImage} loading='lazy' className='image-carousel'/>
              <div className='banner-infos'>
                <h2 className='banner-title'>Projetos de interiores</h2>
                <p className='banner-paragraph'>Conheça nossos Projetos de Interiores com alto padrão de design e funcionalidade.</p>
                <ActionButton
                  buttonText="Conheça todos os designs"
                  buttonLink="/interiores"
                />
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
                <p className='banner-paragraph -criativity-paragraph'>Acompanhamos e participamos ativamente de todo o processo de construção - do início do projeto à entrega final para cada cliente</p>
                <p className='banner-paragraph -criativity-paragraph'>Arquitetura para sua casa ou ambiente ficarem tal qual o idealizado</p>
                <ActionButton
                  external={true}
                  buttonText="Solicite sua proposta"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </section>
  )
}