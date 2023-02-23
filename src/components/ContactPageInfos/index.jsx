import { BsInstagram, BsWhatsapp, BsFacebook, BsPinterest } from "react-icons/bs"
import { FaMapMarkerAlt } from "react-icons/fa"
import "./styles.sass"

export default function ContactPageInfos() {
  return (
    <div className="contact-infos">
      <h2 className="contact-title">Entre em contato com a gente para que possamos conhecer você</h2>
      <p className="contact-paragraph">
        Nosso propósito é tornar o seu sonho concreto.
        E para começar, nada melhor do que uma boa conversa. Vamos lá?
      </p>
      <p className="contact-paragraph">
        Basta preencher o formulário, que entraremos em contato com você! Obrigado!
      </p>

      <div className="contact-social-medias">
        <a href="" target="_blank" rel="external">
          <BsWhatsapp color="#676767" size={24} />
        </a>
        <a href="https://www.instagram.com/trentin.arquitetura/" target="_blank" rel="external">
          <BsInstagram color="#676767" size={24}/>
        </a>
        <a href="https://www.facebook.com/trentin.arquitetura/" target="_blank" rel="external">
          <BsFacebook color="#676767" size={24}/>
        </a>
        <a href="https://br.pinterest.com/trentinarq/" target="_blank" rel="external">
          <BsPinterest color="#676767" size={24}/>
        </a>
      </div>

      <div className="contact-adress">
        <FaMapMarkerAlt color="#676767" size={24} className="adress-icon"/>
        <span className="adress-content">
          Rua Wofram Nicolau Metzler, Esquina com João Alberto Ermel, nº 157, Bairro Metzler - Campo Bom/RS
        </span>
          {navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) ? (
            <div className="local-mobile">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719.8641581750605!2d-51.05945118984133!3d-29.66533933537741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951941c1a3403229%3A0xa8996cd74259bc05!2sTrentin%20Arquitetura!5e0!3m2!1spt-BR!2sbr!4v1677177459877!5m2!1spt-BR!2sbr" width="300" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{border: "none", margin: "auto", paddingTop: "32px"}}/>
            </div>
          ) : null}
      </div>
    </div>
  )
}