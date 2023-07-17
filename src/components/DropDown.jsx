import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../assets/arrow_down.svg'

import '../styles/dropdown.css';

const DropDown = (props) => {

  const [isOpen, setIsOpen] = useState(props.initOpen)

  function handleDropDown(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }
  const processContent=(cont) =>{
    if (typeof(cont)!=="object") {
      return cont;
    } 
    else {
      return ("<ul><li>"+cont.join("</li><li>")+"</li></ul>");
    }
  }

  return (
    <div className="drop-container"> 
    <div className="drop-label" onClick={handleDropDown}>
      {props.label}
      <div className={isOpen?"arrow-open":"arrow-closed"}>
      <img src={arrow}  alt="cliquer pour modifier la vue"></img>
      </div>
    </div>
    <div className={isOpen?"drop-open":"drop-closed"}
     dangerouslySetInnerHTML={{__html: processContent(props.content)}} />
      
      
    </div>
        
    
  );
};

export default DropDown;