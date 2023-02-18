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
      </section>
    </main>
  )
}