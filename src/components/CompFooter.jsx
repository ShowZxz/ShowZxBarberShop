import "../styles/CompFooter.css";
import { FaFacebookF, FaInstagram, FaSnapchatGhost } from "react-icons/fa";

function CompFooter() {
  return (
    <div className="footer-container">
      <div className="footer-link">
        <h3>Liens Utiles</h3>
        <a href="#">Services</a>
        <a href="#">Mentions Légales</a>
        <a href="#">Politique de Confidentialité</a>
        <a href="#">Conditions d'Utilisation</a>
      </div>

      <div className="footer-social">
        <img src="/images/logo_barbershop.png" alt="Company Logo" />
        <div className="footer-social-icons">
          <a href="#">
            <FaFacebookF className="icon" />
          </a>
          <a href="#">
            <FaInstagram className="icon" />
          </a>
          <a href="#">
            <FaSnapchatGhost className="icon" />
          </a>
        </div>
      </div>

      <div className="footer-contact">
        <h3>Contactez-Nous</h3>
        <a href="mailto:adressemail@exemple.com" target="_blank" rel="noopener noreferrer">
          Email: adressemail@exemple.com
        </a>
        <a href="tel:+33123456789" target="_blank" rel="noopener noreferrer">
          Téléphone: +33 1 23 45 67 89
        </a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=123+Rue+du+Commerce,+75001+Paris,+France" target="_blank" rel="noopener noreferrer">
          Adresse: 123 Rue du Commerce, 75001 Paris, France
        </a>
      </div>
    </div>
  );
}

export default CompFooter;
