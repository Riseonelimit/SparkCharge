import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Stations from './pages/StationsSearchPage.jsx'
import StationsSearchPage from './pages/StationsSearchPage.jsx'
import Station from './pages/Station.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'stations',
      element:<StationsSearchPage/>
    },
    {
      path:'stations/:station_slug',
      element:<Station/>
    }
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
