import { StyledEngineProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)
