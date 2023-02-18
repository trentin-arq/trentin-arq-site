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
      </div>
    </div>
  )
}