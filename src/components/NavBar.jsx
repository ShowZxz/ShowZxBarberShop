import '../styles/NavBar.css'

import { Link } from "react-router-dom";

function NavBar() {

  const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }

    const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }

  return (
    <>
    <div className="hero-section">
    <nav>
      <ul className='sidebar'>
        <li><img src="/images/logo_barbershop.png" alt="Logo du ShowZx BarberShop" className="logo" /></li>
        <li onClick={hideSidebar}><a href="#"><img src='/svgs/close.svg' alt="Menu" className="close-icon" /></a></li>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos de nous</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contacts</Link></li>
        <li><a href="#"><button className="btn-phone">Numéros de tel</button></a></li>
        
      </ul>
      
      
      <ul>
        <li><img src="/images/logo_barbershop.png" alt="Logo du ShowZx BarberShop" className="logo" /></li>
        <li className='hideOnMobile'><Link to="/">Accueil</Link></li>
        <li className='hideOnMobile'><Link to="/about">À propos de nous</Link></li>
        <li className='hideOnMobile'><Link to="/services">Services</Link></li>
        <li className='hideOnMobile'><Link to="/contact">Contacts</Link></li>
        <li className='hideOnMobile'><a href="#"><button className="btn-phone">Numéros de tel</button></a></li>
        <li className='menu-button' onClick={showSidebar}><a href="#"><img src='/svgs/menu.svg' alt="Menu" className="menu-icon" /></a></li>
      </ul>

    </nav>
    </div>
    </>
  )
}

export default NavBar
