import { Link } from 'react-router-dom'
import './styles.sass'
import ActionButton from '../ActionButton'
import ScrollRevealProvider from "../ScrollRevealProvider"

export default function ArchitectureSection(){
  return(
    <ScrollRevealProvider>
      <section className='architecture-section'>
        <div className='section-background'>
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
              <ActionButton
                external={true}
                buttonText="Planeje o seu imóvel"
              />
              <Link to={'/arquitetura'} className='external-link'>Conheça todos os projetos</Link>
            </div>
          </div>
        </div>
      </section>
    </ScrollRevealProvider>
  )
}