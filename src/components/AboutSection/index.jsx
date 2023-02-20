import './styles.sass'
import ActionButton from '../ActionButton'

export default function AboutSection(){
  return(
      <section className='about-section'>
        <div className='infos-container'>
          <h2 className='about-title'>Sobre nós</h2>
          <p className='about-paragraph'>Com projetos de design autoral e alto nível de apresentação gráfica, buscamos também a todo tempo, a concretização em obra do sonho de cada cliente.</p>
          <ActionButton
            buttonLink="/sobre"
            buttonText="Conheça nossa história"
          />
        </div>
        <img src='../images/about-home.png' alt='planejamento' loading='lazy' width={350} className='about-section-image'/>
      </section>
  )
}