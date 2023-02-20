import { useEffect } from "react"
import { Link } from "react-router-dom"
import AboutPageImages from "../../components/AboutPageImages"
import AboutPageInfos from "../../components/AboutPageInfos"
import './styles.sass'

export default function About(){
  useEffect(() => {
    scrollTo(0,0)
  })

  return(
    <main>    
      <section className='about-section-container'>
        <AboutPageInfos/>
        <AboutPageImages/>
      </section>
    </main>
  )
}