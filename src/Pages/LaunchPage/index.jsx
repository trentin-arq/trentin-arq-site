import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import './styles.sass'

export default function LaunchPage(){
  return(
    <section className='launch-page-section'>
      <div className='info-container'>
        <img src="../images/logo.jpeg" alt="logo" className='launch-page-image'/>
        <div className='titles-container'>
          <h2 className='launch-page-title'>Escritório de arquitetura comtemporânea</h2>
          <h2 className='launch-page-subtitle'>Arquitetura | Interiores | Execução</h2>
        </div>

        <div className='contact-card'>
          <p className='contact-title'>Contato:</p>
          <div className='social-card'>
            <a 
              href="https://www.instagram.com/trentin.arquitetura/" 
              target='_blank'
              rel='external'
              className='social-link'
            >
              <BsInstagram color='#fff' size={28}/>
            </a>

            <a 
              href="https://api.whatsapp.com/send/?phone=5551997283636&text&type=phone_number&app_absent=0" 
              target='_blank' 
              rel='external'
              className='social-link'
            >
              <BsWhatsapp color='#fff' size={28}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}