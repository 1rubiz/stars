import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mobile_nav from './components/mobile_nav'
import Home from './pages/home'
import Booking from './pages/booking'
import Contact from './pages/contact'
import About from './pages/about'
import Nav from './components/nav'
import Gallery from './pages/gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className='bg-[black] w-[100%] min-h-screen overflow-hidden overflow-y-scroll'>
      <Nav/>
      <div className='max-h-[88svh] pt-[14vh] overflow-scroll'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
      <Mobile_nav/>
    </div>
    </BrowserRouter>
  )
}

export default App
