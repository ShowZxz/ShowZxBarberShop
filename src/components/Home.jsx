import '../styles/Home.css'

import { FaFacebookF, FaInstagram, FaSnapchatGhost } from "react-icons/fa";

function Home() {


  return (
    <div className="home-container">

        <div className="home">
            <img src='/images/svgs/line.svg' alt="upline_icon" className="upline" />
            <a href="#"><FaFacebookF className="icon" /></a>
            <a href="#"><FaInstagram className="icon" /></a>
            <a href="#"><FaSnapchatGhost className="icon" /></a>
            <img src='/images/svgs/line.svg' alt="downline" className="downline" />
        </div>

        <div className="home-text">
            <h4>Bienvenue chez <span className="highlight">ShowZx BarberShop</span></h4>
            <h1>Barber<br></br>shop</h1>
            <p><strong>
                Post quorum necem nihilo lenius ferociens Gallus ut leo 
                cadaveribus pastus multa huius modi scrutabatur. quae singula narrare non refert, 
                me professione modum, quod evitandum est, excedamus.
                </strong>
            </p>
            
        </div>
    </div>    
  );


}

export default Home