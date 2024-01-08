import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Stations from './pages/StationsSearchPage.jsx'
import StationsSearchPage from './pages/StationsSearchPage.jsx'
import Station from './pages/Station.jsx'
import DataContext from './context/DataContext.jsx'
import Login from './pages/Login.jsx'

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
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'register',
      element:<Login/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContext>
      <RouterProvider router={router}/>
    </DataContext>
  </React.StrictMode>,
)
