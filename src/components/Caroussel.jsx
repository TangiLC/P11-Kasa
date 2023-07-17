import React, { useState } from 'react';
import arrow from '../assets/arrow_down.svg';

import '../styles/caroussel.css';

const Caroussel = (props) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === props.pictList.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? props.pictList.length - 1 : current - 1);
  };

  return (
    <>
      <div className="caroussel" key={`carous${props.id}`}>
        {props.pictList &&
          props.pictList.map((pict, index) => (
            <div
              key={`imgdiv-${props.id}.${index}`}
              className={index === current ? 'slide-active' : 'hide'}
            >
              <img
                key={`img-${props.id}.${index}`}
                className="caroussel-img"
                src={pict}
                alt={`${props.title} ${index}`}
              />
            </div>
          ))}
      </div>
      <div className="nav-layer">
        <div>
          <img
            key={`leftA${props.id}`}
            className={props.pictList.length > 1 ? 'arrow-left' : 'hide'}
            src={arrow}
            alt="vue précédente"
            onClick={prevSlide}
          />
        </div>
        <div key={`paginat${props.id}`} className="pagination">
          {current + 1}/{props.pictList.length}
        </div>
        <div>
          <img
            key={`rightA${props.id}`}
            className={props.pictList.length > 1 ? 'arrow-right' : 'hide'}
            src={arrow}
            alt="vue suivante"
            onClick={nextSlide}
          />
        </div>
      </div>
    </>
  );
};
export default Caroussel;
