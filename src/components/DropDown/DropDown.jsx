import React, { useState } from 'react';
import arrow from '../../assets/arrow_down.svg';

import './dropdown.css';

const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(props.initOpen);   //state of visible content

  function handleDropDown(e) {                            //toggle state on click
    e.preventDefault();
    setIsOpen(!isOpen);
  }
  const processContent = (cont) => {                      //display content as string or list if object
    if (typeof cont !== 'object') {                       // (no other type should occur)
      return cont; 
    } else {
      return '<ul><li>' + cont.join('</li><li>') + '</li></ul>';
    }
  };

  return (
    <div className="drop-container">
      <div className="drop-label" onClick={handleDropDown} key={`label${props.unique}`}>
        {props.label}
        <div className={isOpen ? 'arrow-open' : 'arrow-closed'}>
          <img src={arrow} alt="cliquer pour modifier la vue"></img>
        </div>
      </div>
      <div key={`content${props.unique}`}
        className={isOpen ? 'drop-open' : 'drop-closed'}
        dangerouslySetInnerHTML={{ __html: processContent(props.content) }}
      />
    </div>
  );
};

export default DropDown;
