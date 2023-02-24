import { useEffect } from "react"
import ContactPageInfos from "../../components/ContactPageInfos"
import ContactRequestSection from "../../components/ContactRequestSection"
import "./styles.sass"

export default function Contact(){
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return(
    <main>
      <section className="contact-section">
        <ContactPageInfos/>
        <ContactRequestSection/>
        <div className="local">
          <h3>Veja como chegar</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719.8641581750605!2d-51.05945118984133!3d-29.66533933537741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951941c1a3403229%3A0xa8996cd74259bc05!2sTrentin%20Arquitetura!5e0!3m2!1spt-BR!2sbr!4v1677177459877!5m2!1spt-BR!2sbr" width="1000" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{border: "none", margin: "auto", padding: "32px"}}/>
        </div>
      </section>
    </main>
  )
}