import React, { useState } from 'react';
import star from '../assets/star.svg'

import '../styles/rating.css';

const Rating = (props) => {
    function Stars(mark,outOf){
        let stringToReturn="";
        for (let i=1;i<=mark;i++){stringToReturn+=`<div class='rating-solid-star'><img src=${star} alt='rating'></div>`}
        for (let i=1;i<=(outOf-mark);i++){stringToReturn+=`<div class='rating-empty-star'><img src=${star} alt='rating'></div>`}
        return (<div className="rating-container" dangerouslySetInnerHTML={{__html: stringToReturn}}/>);
        }
    

  return (
    <>
        {Stars(props.mark,props.outOf)}
    
    </>
  );
};

export default Rating;