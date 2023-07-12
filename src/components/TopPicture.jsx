import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/topPicture.css';

const TopPicture = (props) => {

  return (
    <>
    <div className="topPic-pic">
        <img src={props.src} alt="paysage"/>
        <div className="topPic-motto">{props.text}</div>
    </div>
    </>
  );
};

export default TopPicture;