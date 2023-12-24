import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import Navbar from './pages/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className=' w-full flex-box flex-col'>
      <Navbar/>
      <LandingPage/>
    </section>
  )
}

export default App
