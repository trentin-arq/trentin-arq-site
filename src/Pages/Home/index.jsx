import AboutSection from '../../components/AboutSection'
import BannersCarousel from '../../components/BannersCarousel'
import ArchitectureSection from '../../components/ArchitectureSection'
import InteriorsSection from '../../components/InteriorsSection'

export default function Home(){
  return(
    <main>
      <BannersCarousel/>
      <ArchitectureSection/>
      <InteriorsSection/>
      <AboutSection/>
    </main>
  )
}