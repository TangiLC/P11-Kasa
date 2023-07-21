import React from 'react';
import star from '../../assets/star.svg';  

import './rating.css';

const Rating = (props) => {
  function Vote(mark, outOf) {            //return a node array of n-(mark)full icon out of N(outOf)empty icon
    let returnArray=[];
    for (let i = 1; i <= mark; i++) {
      returnArray.push(
        <div className="rating-solid-vote" key={`voteS${i}`}>
          <img src={`${star}`} alt="good rating" />
        </div>
      );
    }
    for (let i = 1; i <= outOf - mark; i++) {
      returnArray.push(
        <div className="rating-empty-vote" key={`voteE${i}`}>
          <img src={`${star}`} alt="could do better" />
        </div>
      );
    }
    return returnArray;
  }

  return (
    <div className="rating-container">
        {Vote(props.mark, props.outOf)}</div>
  );
};

export default Rating;
