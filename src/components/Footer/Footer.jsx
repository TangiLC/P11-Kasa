import React from 'react';

import './footer.css';
import whiteLogo from '../../assets/logo-white.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img
          src={whiteLogo}
          alt="kasa, site de location d'appartements entre particuliers"
        />
      </div>
      <div className="footer-copyright">© 2020 Kasa. All rights reserved</div>
    </div>
  );
};

export default Footer;
