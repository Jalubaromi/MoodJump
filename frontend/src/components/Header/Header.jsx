import React from "react";
import "./Header.css";
import logo from "../../assets/logo_minia.png";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo du site" />
      </div>

      <nav className="menu">
        <Link to="/Profil">Profil</Link>
        <Link to="/Flux">Flux</Link>
        <Link to="/Bot">Chat with bot</Link>
    </nav>


      <div className="search">
        <input type="text" placeholder="Rechercher..." />
      </div>
    </header>
  );
};

export default Header;
