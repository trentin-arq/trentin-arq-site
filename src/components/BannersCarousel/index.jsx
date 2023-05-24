import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import ActionButton from '../ActionButton'
import { gql, useQuery } from '@apollo/client'
import { EffectFade } from 'swiper'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import './styles.sass'
import 'swiper/css/effect-fade'

const GET_BANNERS = gql `
  query GetBanners {
    bannersCarrossels {
      bannerDesktop {
        url
      }
      bannerMobile{
        url
      }
    }
  }
`

export default function BannersCarousel(){
  const { data, loading } = useQuery(GET_BANNERS)

  if(loading) return <p>Loading...</p>

  console.log('data', data)

  const bannersCarouselData = [
    {
      title: 'Criatividade e autenticidade',
      text: 'Acompanhamos e participamos ativamente de todo o processo de construção - do início do projeto à entrega final para cada cliente. Arquitetura para sua casa ou ambiente ficarem tal qual o idealizado.',
      buttonText: 'Solicite sua proposta'
    },
    {
      title: 'Projetos Arquitetônicos',
      text: 'Projetos e execução de Residências únicas e exclusivas. Clique e conheça nossas casas assinadas.',
      buttonText: 'Realize seu projeto'
    },
    {
      title: 'Projetos de interiores',
      text: 'Conheça nossos Projetos de Interiores com alto padrão de design e funcionalidade.',
      buttonText: 'Entrar em contato'
    }
  ]

  return(
      <section className='banners-carousel'>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{
          delay: 7000,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        effect='fade'
      >
        {
          data.bannersCarrossels && data.bannersCarrossels.map((element, index) => {
            return(
              <SwiperSlide>
                <div className='wrapper-container'>
                  <picture className='image-container'>
                    <source srcSet={element.bannerMobile.url} media="(max-width: 600px)" width={'100%'}/>
                    <img src={element.bannerDesktop.url} width={'100%'} />
                  </picture>

                  <div className='infos-container'>
                    <div className='infos'>
                      <h1 className='title'>{bannersCarouselData[index].title}</h1>
                      <p className='description'>{bannersCarouselData[index].text}</p>
                      <ActionButton buttonText={bannersCarouselData[index].buttonText} external={true}/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      </section>
  )
}