import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/thumb.css';

const Thumb = (props) => {
  return (
    <div
      className="thumb-container"
    >
      <img src={props.cover} alt="galerie" />
      <div className="thumb-filter"></div>
      <div className="thumb-label">
        <div className="thumb-title">{props.label}</div>
      </div>
    </div>
  );
};

export default Thumb;
