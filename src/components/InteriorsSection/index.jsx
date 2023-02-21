import { Link } from 'react-router-dom'
import ActionButton from '../ActionButton'
import ScrollRevealProvider from '../ScrollRevealProvider'
import './styles.sass'

export default function InteriorsSection(){
  return(
    <ScrollRevealProvider>
      <section className='interiors-section'>
        <div className='image-container'>
          <img src='../images/interiores.jpg' alt='interiores' width={330} className='section-image'/>
        </div>
        <div className='infos-container'>
          <h2 className='section-title'>Interiores</h2>
          <h3 className='section-subtitle'>Sofisticando interiores. Transformando estilos de vida.</h3>

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