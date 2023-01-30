import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LaunchPage from '../Pages/LaunchPage'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RouterApp(){
  return(
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/lancamento' element={<LaunchPage/>}/>
          <Route path='/projetos' element={<Projects/>}/>
          <Route path='/sobre' element={<About/>}/>
          <Route path='/contato' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}