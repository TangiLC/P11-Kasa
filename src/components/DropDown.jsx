import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/dropdown.css';

const DropDown = (props) => {

  return (
    <div className="drop-container"> /*key*/
    <div className="drop-label">
      {props.label}
    </div>
    <div className="drop-content">
      {props.content}
    </div>
        
    </div>
  );
};

export default DropDown;