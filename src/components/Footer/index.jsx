import { BsInstagram, BsWhatsapp, BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import './styles.sass'

export default function Footer(){
  return(
    <section className='footer'>
      <div className='logo-container'>
        <img src='../images/logo-bg.png' alt='logo' className='logo-footer' width={180}/>
      </div>

      <div className='footer-contacts'>
        <span className='footer-message'>Arquitetura | Interiores | Execução</span>
        <div className='social-links'>
          <a   
            href='https://www.instagram.com/trentin.arquitetura/'
            target='_blank'
            rel='external'
            className='social-link'
          >
            <BsInstagram color='#fff' size={28}/>
          </a>
          <a 
            href={import.meta.env.VITE_WHATSAPP_LINK}
            target='_blank' 
            rel='external'
            className='social-link'
          >
            <BsWhatsapp color='#fff' size={28}/>
          </a>
        </div>
      </div>

      <div className='infos-container'>
        <span className='adress'> Rua Wofram Nicolau Metzler nº 157, Bairro Metzler - Campo Bom/RS </span>
        <span className='phone -info'>
          <BsFillTelephoneFill color='#fff'/>
          (51) 99728-3636
        </span>
        <span className='email -info'>
          <GrMail color='#fff'/>
          contato@trentinarquitetura.com.br
        </span>
      </div>

      <div className='agency-container'>
        <div className='agency'>
          <a href='https://www.zeelabtech.com.br' target='_blank' rel='external'>
            <img src='../icons/logo-svg-branco.svg' alt='zeelab icon' width={90} className='agency-icon'/>
          </a>
          <span className='agency-text'>Design e desenvolvimento</span>
        </div>

        <div className='terms'>
          <span className='rights-reserved'>2023 - Trentin Arquitetura © todos os direitos reservados</span>
        </div>
      </div>
    </section>
  )
}