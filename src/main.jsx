import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import AuthProvider from './providers/authProvder/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Root}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
