import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import GitHub from './components/GitHub/GitHub'

function App() {
  

  return (
    <BrowserRouter>
  
    <Header/>
    <Routes>
    <Route exact path='/'element={<Home />}>  </Route>
    <Route path='/about' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route path='github' element={<GitHub/>}/>
    </Routes>
    <Footer/>
    
    </BrowserRouter>
  )
}

export default App
