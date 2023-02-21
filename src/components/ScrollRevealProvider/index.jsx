import { useEffect, useRef } from "react"
import scrollReveal from "scrollreveal"

export default function ScrollRevealProvider({children, style}, props){
  const sectinonRef = useRef(null)
  useEffect(() => {
    if(sectinonRef.current){
      scrollReveal().reveal(sectinonRef.current, {
        delay: 300
      })
    }
  },[])

  return(
    <section
      ref={sectinonRef}
      style={style}
      className="scroll-section"
      data-testid="section"
    >
      {children}
    </section>
  )
}
