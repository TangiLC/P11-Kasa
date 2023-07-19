import React from 'react';

import './topPicture.css';

const TopPicture = (props) => {      //display picture and #var props.text# title above, complete with css

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