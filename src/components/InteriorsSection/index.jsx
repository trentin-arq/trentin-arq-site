import Fade from 'react-reveal'
import { Link } from 'react-router-dom'
import './styles.sass'

export default function InteriorsSection(){
  return(
    <Fade right>
      <section className='interiors-section'>
        <div className='image-container'>
          <img src='../images/interiores.jpg' alt='interiores' width={330} className='section-image'/>
        </div>
        <div className='infos-container'>
          <h2 className='section-title'>Interiores</h2>
          <h3 className='section-subtitle'>Sofisticando interiores. Transformando estilos de vida.</h3>

          <div className='section-links'>
            <a 
              href='https://api.whatsapp.com/send/?phone=5551997283636&text&type=phone_number&app_absent=0'
              target='_blank'
              rel='external'
              className='redirect-link'
            >
              Transforme seus ambientes  
            </a>
            <Link to={'/interiores'} className='external-link'>Veja todos os designs</Link>
          </div>
        </div>
      </section>
    </Fade>
  )
}