import { Link } from 'react-router-dom'
import ActionButton from '../ActionButton'
import ScrollRevealProvider from '../ScrollRevealProvider'
import './styles.sass'

export default function InteriorsSection(){
  return(
    <ScrollRevealProvider>
      <section className='interiors-section'>
        <div className='image-container'>
          <img src='../images/interiores.jpg' alt='interiores' width={380} className='section-image'/>
        </div>
        <div className='infos-container'>
          <h2 className='section-title'>Projetos de interiores</h2>
          <h3 className='section-subtitle'>Conheça nossos Projetos de Interiores com alto padrão de design e funcionalidade.</h3>

          <div className='section-links'>
            <ActionButton
              external={true}
              buttonText="Transforme seus ambientes"
            />
            <Link to={'/projetos'} className='external-link'>Veja todos os designs</Link>
          </div>
        </div>
      </section>
    </ScrollRevealProvider>
  )
}