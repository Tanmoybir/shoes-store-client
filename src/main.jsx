import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreateRoute from './route/myCreateRoute'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './provider/AuthProvider'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={myCreateRoute}/>
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
