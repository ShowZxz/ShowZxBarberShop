import '../styles/Home.css'

import { FaFacebookF, FaInstagram, FaSnapchatGhost } from "react-icons/fa";

import Overview from '../components/Overview.jsx'
import CompServices from '../components/CompServices.jsx';
import CompTeams from '../components/CompTeams.jsx';
import CompContact from '../components/CompContact.jsx';
import CompFooter from '../components/CompFooter.jsx';
import CompGalerie from '../components/CompGalerie.jsx';


function Home() {


  return (
    <>
    <div className="home-container">

        <div className="home">
            <img src='/images/svgs/line.svg' alt="upline_icon" className="upline" />
            <a href="https://www.facebook.com/Le-Binks-Barbershop-100054430001781" target="_blank" rel="noopener noreferrer"><FaFacebookF className="icon" /></a>
            <a href="https://www.instagram.com/lebinks.barber" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a>
            <a href="https://snapchat.com/add/lebinks.barber" target="_blank" rel="noopener noreferrer"><FaSnapchatGhost className="icon" /></a>
            <img src='/images/svgs/line.svg' alt="downline" className="downline" />
        </div>

        <div className="home-text">
          <div className="hero-badge">Soin • Style • Tradition</div>
          <h4>Bienvenue chez <span className="highlight">ShowZx BarberShop</span></h4>
          <h1>Barber<br />shop</h1>
          <p>
            <strong>
              Post quorum necem nihilo lenius ferociens Gallus ut leo cadaveribus pastus
              multa huius modi scrutabatur. Quae singula narrare non refert, me professione modum,
              quod evitandum est, excedamus.
            </strong>
          </p>
          <a href="#contact-section" className="cta-button">Nous contacter</a>
        </div>
    </div> 

    <Overview />
    <CompServices />
    <CompTeams />
    <CompGalerie />
    <CompContact />
    <CompFooter />

    </>  
  );


}

export default Home