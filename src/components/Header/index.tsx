import React from "react"
import { Link } from "react-router-dom"
import './styles.sass'

export default function Header(){
  return(
    <header className="header">
      <img src='../images/top-logo.png' alt='logo' width={200}/>
      <nav className='menus'>
        <Link to={'projetos'} className='menu-item'>Projetos</Link>
        <Link to={'contato'} className='menu-item'>Contatos</Link>
        <Link to={'sobre'} className='menu-item'>Sobre</Link>
      </nav>
    </header>
  )
}