import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Overview from './components/Overview.jsx'
import CompServices from './components/CompServices.jsx'
import CompTeams from './components/CompTeams.jsx'
import CompContact from './components/CompContact.jsx'
import CompFooter from './components/CompFooter.jsx'
import CompGalerie from './components/CompGalerie.jsx'
import CompGalerieHeader from './components/CompGalerieHeader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
    <Overview />
    <CompServices />
    <CompTeams />
    <CompGalerieHeader />
    <CompGalerie />
    <CompContact />
    <CompFooter />
  </StrictMode>,
)
