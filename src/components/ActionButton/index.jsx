import { Link } from "react-router-dom"
import "./styles.sass"

export default function ActionButton(props){
  const {buttonText, buttonLink, external} = props
  const defaultLink = "https://api.whatsapp.com/send/?phone=5551997283636&text&type=phone_number&app_absent=0"
  
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