import './App.css'
import Home from './components/Home.jsx'

function App() {

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
        <li><a href="#">Accueil</a></li>
        <li><a href="#">À propos de nous</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contacts</a></li>
        <li><a href="#"><button className="btn-phone">Numéros de tel</button></a></li>
        
      </ul>
      
      
      <ul>
        <li><img src="/images/logo_barbershop.png" alt="Logo du ShowZx BarberShop" className="logo" /></li>
        <li className='hideOnMobile'><a href="#">Accueil</a></li>
        <li className='hideOnMobile'><a href="#">À propos de nous</a></li>
        <li className='hideOnMobile'><a href="#">Services</a></li>
        <li className='hideOnMobile'><a href="#">Contacts</a></li>
        <li className='hideOnMobile'><a href="#"><button className="btn-phone">Numéros de tel</button></a></li>
        <li className='menu-button' onClick={showSidebar}><a href="#"><img src='/svgs/menu.svg' alt="Menu" className="menu-icon" /></a></li>
      </ul>

    </nav>
    <Home />
    </div>
    </>
  )
}

export default App
