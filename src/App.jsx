import './App.css'
import Home from './components/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services.jsx'
import ContactUs from './pages/ContactUs.jsx'
import NavBar from './components/NavBar.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>

      <div className="hero-section">

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App