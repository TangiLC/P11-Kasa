import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../assets/arrow_down.svg'

import '../styles/dropdown.css';

const DropDown = (props) => {

  const [isOpen, setIsOpen] = useState(false)

  function handleDropDown(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <div className="drop-container"> 
    <div className="drop-label" onClick={handleDropDown}>
      {props.label}
      <div className={isOpen?"arrow-open":"arrow-closed"}>
      <img src={arrow}  alt="cliquer pour modifier la vue"></img>
      </div>
    </div>
    <div className={isOpen?"drop-open":"drop-closed"}>
      {props.content}
    </div>
        
    </div>
  );
};

export default DropDown;