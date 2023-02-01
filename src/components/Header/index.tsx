import React from "react"
import { Link } from "react-router-dom"
import './styles.sass'

export default function Header(){
  return(
    <header className="header">
      <Link to={'/'}>
        <picture>
        <source srcSet='../images/logo-mobile.png' media='(max-width: 768px)'/>
        <img src='../images/logo-bg.png' alt='logo' width={200} className='logo-header'/>
        </picture>
      </Link>

      <nav className='menus'>
        <Link to={'arquitetura'} className='menu-item'>Arquitetura</Link>
        <Link to={'interiores'} className='menu-item'>Interiores</Link>
        <Link to={'contato'} className='menu-item'>Contato</Link>
        <Link to={'sobre'} className='menu-item'>Sobre</Link>
      </nav>
    </header>
  )
}