import React from "react";
import "./Footer.css";
import logo from "../../assets/logo_minia.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo2">
        <img src={logo} alt="Logo du site" />
      </div>

      <div className="contact">
        <h4>Contact</h4>
        <p>0123456789</p>
        <p>itAkademy@itakademy.fr</p>
        <p>Campus numérique</p>
        <p>Charbonnières-les-Bains</p>
      </div>

      <div className="reseaux">
        <h4>Nous retrouver</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="utile">
        <h4>Utiles</h4>
        <a href="#">Plan du site</a>
        <a href="#">RGPD</a>
        <a href="#">Mentions légales</a>
        <a href="#">F.A.Q</a>
      </div>

      <div className="credits">
        <h4>Créateurs</h4>
        <p>Sites réalisé par l’entreprise Jalubaromi</p>
        <p>www.jalubaromi.com</p>
        <p>0498765432</p>
      </div>

      <div className="bottom">
        &copy; 2025 MonSite. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
