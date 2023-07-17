import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';
import '../styles/header.css';

const HeaderMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
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
    </div>
  );
};

export default HeaderMenu;
