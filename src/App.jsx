import './App.css'
import Home from './components/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services.jsx'
import ContactUs from './pages/ContactUs.jsx'
import NavBar from './components/NavBar.jsx'
import LegalMentions from './pages/LegalMentions.jsx'
import PolitiqueConfidential from './pages/PolitiqueConfidential.jsx'
import ConditionUtilisation from './pages/ConditionUtilisation.jsx'
import CompBtnScrollToTop from './components/CompBtnScrollToTop.jsx'

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';

// Composant pour gérer le scroll au changement de page
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <CompBtnScrollToTop />
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