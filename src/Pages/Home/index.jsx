import AboutSection from '../../components/AboutSection'
import BannersCarousel from '../../components/BannersCarousel'
import ArchitectureSection from '../../components/ArchitectureSection'

export default function Home(){
  return(
    <main>
      <BannersCarousel/>
      <ArchitectureSection/>
      <AboutSection/>
    </main>
  )
}