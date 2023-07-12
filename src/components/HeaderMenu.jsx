import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';
import '../styles/header.css';

const HeaderMenu = () => {
    return (
        <div className="header-menu">
            <div className="logo">
                <NavLink to="/HomePage">
                    <img src={logo} alt="kasa, site de location d'appartements entre particuliers" />
                </NavLink>
            </div>
            <div className="nav-bar">
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
        </div>
    );
};

export default HeaderMenu;
