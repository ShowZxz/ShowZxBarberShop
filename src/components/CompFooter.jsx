import "../styles/CompFooter.css";
import { FaFacebookF, FaInstagram, FaSnapchatGhost } from "react-icons/fa";

function CompFooter() {
  return (
    <div className="footer-container">
      <div className="footer-link">
        <h5>Liens Utiles</h5>
        <a href="#">Services</a>
        <a href="#">Mentions Légales</a>
        <a href="#">Politique de Confidentialité</a>
        <a href="#">Conditions d'Utilisation</a>
      </div>

      <div className="footer-social">
        <img src="/images/footer/logo.png" alt="Company Logo" />
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
        <p>Email: adressemail@exemple.com</p>
        <p>Téléphone: +33 1 23 45 67 89</p>
        <p>Adresse: 123 Rue du Commerce, 75001 Paris, France</p>
      </div>
    </div>
  );
}

export default CompFooter;
