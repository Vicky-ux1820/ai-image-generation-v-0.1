import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Result from './pages/Result.jsx'
import BuyCredit from './pages/BuyCredit.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'




const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-violet-100 to-blue-100'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buy' element={<BuyCredit />}/>
        <Route path='/result' element={<Result />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App