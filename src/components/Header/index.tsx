import React from "react"
import { Link } from "react-router-dom"
import './styles.sass'

export default function Header(){
  return(
    <header className="header">
      <Link to={'/'}>
        <img src="../images/top-logo.png" alt="" width={200} className="logo-header"/>
      </Link>

      <nav className='menus'>
        <Link to={'projetos'} className='menu-item'>Projetos</Link>
        <Link to={'contato'} className='menu-item'>Contato</Link>
        <Link to={'sobre'} className='menu-item'>Sobre</Link>
      </nav>
    </header>
  )
}