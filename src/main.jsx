import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/sass/app.sass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <App />
      <a 
        href={import.meta.env.VITE_WHATSAPP_LINK} 
        className='whatsapp-icon'
        target='_blank'
        rel='external'
        >
        <img src='../icons/whatsapp-icon-2.svg' alt='whatsapp-icon' width={65}/>
      </a>
    </>
  </React.StrictMode>,
)
