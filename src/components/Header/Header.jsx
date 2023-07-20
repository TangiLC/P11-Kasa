import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png';
import './header.css';

const HeaderMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);       //state of burger-menu for width<480px

  const toggleMenu = () => {                             //toggle state on click
    setMenuOpen(!menuOpen); 
  };

  return (
    <><div className="ref"><h1>kasa, site de location d'appartements entre particuliers</h1></div>
    <div className="header-menu">
      
      <div className="logo">
        <NavLink to="/HomePage">
          <img
            src={logo}
            alt="kasa, site de location d'appartements entre particuliers"
          />
        </NavLink>
      </div>
      <nav>
        <div
          className={`nav-menu ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <NavLink
            to="/HomePage"
            className={({ isActive }) =>
              isActive ? 'active-page' : 'inactive'
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? 'active-page' : 'inactive'
            }
          >
            À Propos
          </NavLink>
        </div>
      </nav>
      <div
        className={`nav-burger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div></>
  );
};

export default HeaderMenu;
