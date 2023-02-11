import { Link } from "react-router-dom"
import './styles.sass'

export default function About(){
  return(
    <section className='about-section-container'>
      <div className='image-container'>
        <img src='../images/murilo.jpg' alt='sobre-nós' className='progile-image' width={270} loading='lazy'/>
        <span>Murilo Trentin</span>
      </div>

      <div className='about-infos'>
        <h1 className='about-section-title'>Sobre nós</h1>
        <p className='about-paragraph'>
          Somos um escritório de arquitetura contemporânea com espírito jovem.
        </p>
        <p className='about-paragraph'>
          Buscamos aliar criatividade e performance para transformar o jeito de morar, viver e experimentar, por meio de projetos que conectem boas ideias, pessoas, espaços e natureza.
        </p>
        <p className='about-paragraph'>
        Com projetos de design autoral e alto nível de apresentação gráfica, buscamos também a todo tempo, a concretização em obra do sonho de cada cliente.
        </p>

        <div className='contact-container'>
          <p className='contact-paragraph'>
            Venha fazer parte desta história.
          </p>

          <a 
            href='https://api.whatsapp.com/send/?phone=5551997283636&text&type=phone_number&app_absent=0'
            target='_blank'
            rel='external'
            className='link'
          >
            Entre em contato
          </a>

          <Link to={'/arquitetura'} className='link'>Conheça nossos projetos</Link>
        </div>

      </div>


    </section>
  )
}