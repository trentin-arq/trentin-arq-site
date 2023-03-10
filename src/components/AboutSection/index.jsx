import './styles.sass'
import ActionButton from '../ActionButton'
import ScrollRevealProvider from '../ScrollRevealProvider'

export default function AboutSection(){
  return(
    <ScrollRevealProvider>
      <section className='about-section'>
        <div className='infos-container'>
          <h2 className='about-title'>Sobre nós</h2>
          <p className='about-paragraph'>Com projetos de design autoral e alto nível de apresentação gráfica, buscamos também a todo tempo, a concretização em obra do sonho de cada cliente.</p>
          <ActionButton
            buttonLink="/sobre"
            buttonText="Conheça nosso trabalho"
          />
        </div>
        <img src='../images/about-home.png' alt='planejamento' loading='lazy' width={400} className='about-section-image'/>
      </section>
    </ScrollRevealProvider>
  )
}