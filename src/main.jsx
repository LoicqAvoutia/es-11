import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Authprovider } from './context/Authcontext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <App />
    </Authprovider>
  </StrictMode>,
)
