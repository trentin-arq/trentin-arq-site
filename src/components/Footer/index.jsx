import { BsInstagram, BsWhatsapp, BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import './styles.sass'

export default function Footer(){
  return(
    <section className='footer'>
      <div className='logo-container'>
        <img src='../images/logo-bg.png' alt='logo' className='logo-footer' width={180}/>
        <span className='rights-reserved'>2023 - Trentin Arquitetura © todos os direitos reservados</span>
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
            href='https://api.whatsapp.com/send/?phone=5551997283636&text&type=phone_number&app_absent=0'
            target='_blank' 
            rel='external'
            className='social-link'
          >
            <BsWhatsapp color='#fff' size={28}/>
          </a>
        </div>
      </div>

      <div className='infos-container'>
        <span className='adress'> Rua XXX, 999 - Bairro X / Campo Bom </span>
        <span className='phone -info'>
          <BsFillTelephoneFill color='#fff'/>
          (51)99999-9999
        </span>
        <span className='email -info'>
          <GrMail color='#fff'/>
          trentinarq@gmail.com
        </span>
      </div>

      <div className='agency-container'>
        <span className='agency-text'>Design e desenvolvimento</span>
        <a href='https://www.zeelabtech.com.br' target='_blank' rel='external'>
          <img src='../icons/logo-svg-branco.svg' alt='zeelab icon' width={90} className='agency-icon'/>
        </a>
      </div>
    </section>
  )
}