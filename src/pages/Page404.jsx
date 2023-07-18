import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/page404.css';

const Page404 = () => {
  return (
    <>
      <div className="error-container">
        <span>
          <span>4</span>
        </span>
        <span>0</span>
        <span>
          <span>4</span>
        </span>
      </div>
      <div className="message-container">
        <div className="error-message">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <div className="error-redirect">
          <NavLink to="/HomePage">Retourner sur la page d’accueil</NavLink>
        </div>
      </div>
    </>
  );
};

export default Page404;
