import React from 'react';
import star from '../../assets/star.svg';

import './rating.css';

const Rating = (props) => {
  function Stars(mark, outOf) {            //return a node array of n-(mark)full stars out of N(outOf)empty stars
    let returnArray=[];
    for (let i = 1; i <= mark; i++) {
      returnArray.push(
        <div className="rating-solid-star" key={`starS${i}`}>
          <img src={`${star}`} alt="good rating" />
        </div>
      );
    }
    for (let i = 1; i <= outOf - mark; i++) {
      returnArray.push(
        <div className="rating-empty-star" key={`starE${i}`}>
          <img src={`${star}`} alt="could do better" />
        </div>
      );
    }
    return returnArray;
  }

  return (
    <div className="rating-container">
        {Stars(props.mark, props.outOf)}</div>
  );
};

export default Rating;
