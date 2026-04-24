import './App.css'
import Home from './components/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services.jsx'
import ContactUs from './pages/ContactUs.jsx'
import NavBar from './components/NavBar.jsx'
import LegalMentions from './pages/LegalMentions.jsx'
import PolitiqueConfidential from './pages/PolitiqueConfidential.jsx'
import ConditionUtilisation from './pages/ConditionUtilisation.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>

      

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/legal-mentions" element={<LegalMentions />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidential />} />
          <Route path="/conditions-d-utilisation" element={<ConditionUtilisation />} />
        </Routes>



    </BrowserRouter>
  )
}

export default App