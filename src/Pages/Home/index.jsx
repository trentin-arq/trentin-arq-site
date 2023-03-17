import AboutSection from '../../components/AboutSection'
import BannersCarousel from '../../components/BannersCarousel'
import ArchitectureSection from '../../components/ArchitectureSection'
import InteriorsSection from '../../components/InteriorsSection'
import { Helmet } from 'react-helmet'

export default function Home(){
  return(
    <>
      <Helmet>
        <meta name='title' content='Trentin Arquitetura - Escritório de arquitetura contemporânea | Campo Bom'/>
        <meta name='description' content='Projetos e execução de residências únicas e exclusivas. Arquitetura contemporânea de alto padrão. Escritório de arquitetura localizado em Campo Bom.'/>
      </Helmet>
      <main>
        <BannersCarousel/>
        <ArchitectureSection/>
        <InteriorsSection/>
        <AboutSection/>
      </main>
    </>
  )
}