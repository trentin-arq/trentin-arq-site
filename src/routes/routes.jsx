import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LaunchPage from '../Pages/LaunchPage'

export default function RouterApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LaunchPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}