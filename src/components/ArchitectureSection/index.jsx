import { Link } from 'react-router-dom'
import './styles.sass'
import Fade from 'react-reveal'

export default function ArchitectureSection(){
  return(
    <Fade left>
      <section className='architecture-section'>
        <div className='image-container'>
          <img src='../images/arquitetura.jpg' alt='arquitetura' width={330} className='architecture-image'/>
        </div>
        <div className='section-infos'>
          <div className='title-container'>
            <h2 className='section-title architecture-section-title -first'>
              Arq
            </h2>
            <h2 className='section-title architecture-section-title'>
              uitetura
            </h2>
          </div>
          <h3 className='section-subtitle'>
            Criando e concretizando sonhos. Transformando o jeito de morar.
          </h3>
          <div className='section-links'>
            <Link to={'/arquitetura'} className='redirect-button'>Conheça todos os projetos</Link>
            <a 
              href='https://api.whatsapp.com/send/?phone=5551997283636&text&type=phone_number&app_absent=0'
              target='_blank'
              rel='external'
              className='external-link'
            >
              Entre em contato e planeje seu imóvel
            </a>
          </div>
        </div>
      </section>
    </Fade>
  )
}