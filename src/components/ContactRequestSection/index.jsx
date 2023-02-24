import { useState } from "react"
import emailjs from "@emailjs/browser"
import "./styles.sass"

export default function ContactRequestSection(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [confirmationMessage, setConfirmationMessage] = useState(false)

  
  function sendEmail(event){
    event.preventDefault()

    const seriveId = "service_9abz7fa"
    const templateId = "template_jhxj45a"
    const publicKey = "ClEP44WZ2lcV5LTot"
    const templateParams = {
      from_name: name,
      from_phone: phone,
      from_mail: email,
      message: message
    }

    emailjs.send(seriveId, templateId, templateParams, publicKey)
    .then(() => {
      setConfirmationMessage(true)
      setEmail('')
      setName('')
      setPhone('')
      setMessage('')
    }, (error) => {
      setConfirmationMessage(false)
      console.log(error)
    })
  }

  return(
    <div className="contact-request">
    <form className="contact-request-form" onSubmit={sendEmail}>
      <input 
        type="text" 
        placeholder="Seu nome" 
        className="form-input" 
        value={name}
        onChange={(event) => setName(event.target.value)}
        required 
        />

      <input 
        type="number" 
        placeholder="Seu telefone" 
        className="form-input" 
        value={phone} 
        onChange={(event) => setPhone(event.target.value)}
        required 
      />

      <input 
        type="email" 
        placeholder="Seu e-mail" 
        className="form-input" 
        value={email} 
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <textarea 
        cols="30" 
        rows="10" 
        placeholder="Digite sua mensagem" 
        className="form-text-area" 
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      ></textarea>
      <input type="submit" value="Enviar" className="form-button"/>
      {confirmationMessage && <span className="confirmation-message">Mensagem enviada com sucesso!</span>}
    </form>
  </div>
  )
}