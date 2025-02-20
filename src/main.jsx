import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route.jsx'
//import AuthProvider from './Provider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      
      <HelmetProvider>
      <RouterProvider router={Route} />
      </HelmetProvider>
      <Toaster position='top-center' reverseOrder={false} />
      
  </StrictMode>,
)
