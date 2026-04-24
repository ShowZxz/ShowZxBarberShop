import "../styles/NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {/* SIDEBAR */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
      <ul className={`sidebar ${isOpen ? "active" : ""}`}>
        <li>
          <img src="/images/logo_barbershop.png" alt="Logo" className="logo" />
        </li>

        <li onClick={() => setIsOpen(false)}>
          <img src="/images/svgs/close.svg" alt="Menu" className="close-icon" />
        </li>

        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            À propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </li>

        <li>
          <button className="btn-phone">01.87.90.05.97</button>
        </li>
      </ul>

      {/* NAVBAR */}
      <ul>
        <li>
          <img src="/images/logo_barbershop.png" alt="Logo" className="logo" />
        </li>

        <li className="hideOnMobile">
          <NavLink to="/">Accueil</NavLink>
        </li>

        <li className="hideOnMobile">
          <NavLink to="/about">À propos</NavLink>
        </li>

        <li className="hideOnMobile">
          <NavLink to="/services">Services</NavLink>
        </li>

        <li className="hideOnMobile">
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li className="hideOnMobile">
          <button className="btn-phone ">
            {" "}
            <a href="tel: 0187900597">Téléphone</a>
          </button>
        </li>

        <li className="menu-button" onClick={() => setIsOpen(true)}>
          <img src="/images/svgs/burger.svg" alt="Menu" className="menu-icon" />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
