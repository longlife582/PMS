import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from 'react-router-dom'
import Routers from './routers'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routers />
  </StrictMode>,
)
