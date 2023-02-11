import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/sass/app.sass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <App />
      <a 
        href='https://api.whatsapp.com/send/?phone=5551997283636&text&type=phone_number&app_absent=0' 
        className='whatsapp-icon'
        target='_blank'
        rel='external'
        >
        <img src='../icons/whatsapp-icon.svg' alt='whatsapp-icon' width={65}/>
      </a>
    </>
  </React.StrictMode>,
)
