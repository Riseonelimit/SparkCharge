import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'

function App() {

  const {pathname} = useLocation()
  
  return (
    <section className=' w-full flex-box flex-col'>
      <Navbar />
      {pathname == '/'  ?  <LandingPage/>: <Outlet/>}
      
    </section>
  )
}

export default App
