import "../styles/CompFooter.css";
import { FaFacebookF, FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import { Link} from "react-router-dom";

function CompFooter() {
  return (
    <div className="footer-container">
      <div className="footer-link">
        <h3>Liens Utiles</h3>
        <Link to="/services">Services</Link>
        <Link to="/legal-mentions">Mentions Légales</Link>
        <Link to="/politique-de-confidentialite">Politique de Confidentialité</Link>
        <Link to="/conditions-d-utilisation">Conditions d'Utilisation</Link>
      </div>

      <div className="footer-social">
        <img src="/images/logo_barbershop.png" alt="Company Logo" />
        <div className="footer-social-icons">
          <a href="https://www.facebook.com/Le-Binks-Barbershop-100054430001781" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="icon" />
          </a>
          <a href="https://www.instagram.com/lebinks.barber" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://snapchat.com/add/lebinks.barber" target="_blank" rel="noopener noreferrer">
            <FaSnapchatGhost className="icon" />
          </a>
        </div>
      </div>

      <div className="footer-contact">
        <h3>Contactez-Nous</h3>
        <a href="mailto:adressemail@exemple.com">
          Email: adressemail@exemple.com
        </a>
        <a href="tel: 0187900597">
          Téléphone: 01.87.90.05.97
        </a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=3+Pl.+du+14+Juillet,+91270+Vigneux-sur-Seine" target="_blank" rel="noopener noreferrer">
          3 Pl. du 14 Juillet, 91270 Vigneux-sur-Seine
        </a>
      </div>
    </div>
  );
}

export default CompFooter;
