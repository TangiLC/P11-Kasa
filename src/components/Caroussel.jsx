import React, { useState } from 'react';
import arrow from '../assets/arrow_down.svg';
import blank from '../assets/_blank.png';

import '../styles/caroussel.css';

const Caroussel = (props) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === props.pictList.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? props.pictList.length - 1 : current - 1);
  };

  const [imagePSrc, setImagePSrc] = useState(blank);
  const handlePreviousIn = () => {
    let toggle =
      current - 1 < 0
        ? props.pictList[props.pictList.length - 1]
        : props.pictList[current - 1];
    setImagePSrc(toggle);
  };
  const handlePreviousOut = () => {
    setImagePSrc(blank);
  };

  const [imageNSrc, setImageNSrc] = useState(blank);
  const handleNextIn = () => {
    let toggle =
      current + 1 > props.pictList.length
        ? props.pictList[0]
        : props.pictList[current + 1];
    setImageNSrc(toggle);
  };
  const handleNextOut = () => {
    setImageNSrc(blank);
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

        <div className="nav-layer">
          <img
            key={`leftA${props.id}`}
            className={props.pictList.length > 1 ? 'arrow-left' : 'hide'}
            src={arrow}
            alt="vue précédente"
            onClick={prevSlide}
            onMouseEnter={handlePreviousIn}
            onMouseLeave={handlePreviousOut}
          />

          <img
            key={`rightA${props.id}`}
            className={props.pictList.length > 1 ? 'arrow-right' : 'hide'}
            src={arrow}
            alt="vue suivante"
            onClick={nextSlide}
            onMouseEnter={handleNextIn}
            onMouseLeave={handleNextOut}
          />
        </div>

        <div className="prev-next-layer">
          <img
            key={`previous${props.id}`}
            className="prev-img"
            alt="vue précédente"
            src={imagePSrc}
          />
          <div key={`pageCount${props.id}`} className="page-count">
            {current + 1}/{props.pictList.length}
          </div>
          <img
            key={`next${props.id}`}
            className="prev-img"
            alt="vue suivante"
            src={imageNSrc}
          />
        </div>
      </div>
    </>
  );
};
export default Caroussel;
