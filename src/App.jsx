import { useCallback, useContext, useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { authLogin } from './api/auth/auth'
import { Data } from './context/DataContext'
import { userAction } from './action/action'

function App() {

  const {pathname} = useLocation()

  const context = useContext(Data);

  const auth = useCallback(async ()=>{
    const userData = await authLogin(localStorage.getItem("accessToken"))
    console.log(userData);
    context.USER_DATA_DISPATCH({
      type: userAction.LOGGED_IN,
      payload: userData,
  });
  })

  useEffect(()=>{
    auth()
  },[])
  
  return (
    <section className=' w-full flex-box flex-col'>
      <Navbar />
      {pathname == '/'  ?  <LandingPage/>: <Outlet/>}
      
    </section>
  )
}

export default App
