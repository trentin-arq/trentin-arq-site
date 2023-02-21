import { Link } from "react-router-dom"
import "./styles.sass"

export default function ActionButton(props){
  const {buttonText, buttonLink, external} = props
  const defaultLink = import.meta.env.VITE_WHATSAPP_LINK
  
  return(
    <>
      {
        external ? (
          <a href={buttonLink || defaultLink} className="button-action" target="_blank" rel="exrernal">
            <div>
              <span>{buttonText}</span>
              <span>{buttonText}</span>
            </div>
          </a>
        ) : (
          <Link to={buttonLink} className="button-action">
            <div>
              <span>{buttonText}</span>
              <span>{buttonText}</span>
            </div>
          </Link>
        )
      }
    </>
  )
}