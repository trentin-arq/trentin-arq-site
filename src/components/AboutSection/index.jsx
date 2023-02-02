import { Link } from 'react-router-dom'
import Fade from 'react-reveal'
import './styles.sass'

export default function AboutSection(){
  return(
    <Fade right>
      <section className='about-section'>
        <div className='infos-container'>
          <h2 className='about-title'>Sobre nós</h2>
          <p className='about-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sed dolorem excepturi, esse, cum inventore fuga, minima nam architecto officiis facilis non nobis dignissimos doloremque mollitia hic nihil velit natus?</p>
          <Link to={'sobre'} className='about-link-redirect'>Conheça nossa história</Link>
        </div>
        <img src='../images/planning.jpg' alt='planejamento' loading='lazy' width={400} className='about-section-image'/>
      </section>
    </Fade>
  )
}