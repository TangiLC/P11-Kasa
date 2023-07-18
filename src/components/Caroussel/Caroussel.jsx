import React, { useState } from 'react';

import arrow from '../../assets/arrow_down.svg';
import blank from '../../assets/_blank.png';

import './caroussel.css';

const Caroussel = (props) => {
  const [currentPic, setCurrentPic] = useState(0);
  const [previous, setPrevious] = useState(props.pictList.length - 1);
  const [next, setNext] = useState(1);
  const [imagePSrc, setImagePSrc] = useState(blank);

  const handlePreviousIn = () => {
    setPrevious(previous);
    setImagePSrc(props.pictList[previous]);
  };
  const handlePreviousOut = () => {
    setImagePSrc(blank);
  };

  const [imageNSrc, setImageNSrc] = useState(blank);
  const handleNextIn = () => {
    setNext(next);
    setImageNSrc(props.pictList[next]);
  };
  const handleNextOut = () => {
    setImageNSrc(blank);
  };

  const changeSlide =(plusMinus) => {
    let changedSlide = currentPic +plusMinus;
    if (changedSlide<0){changedSlide=props.pictList.length - 1}
    if (changedSlide>props.pictList.length){changedSlide=0}
    setCurrentPic(changedSlide);
    setPrevious(previous === 0 ? props.pictList.length - 1 : previous - 1);
    setNext(next === 0 ? props.pictList.length - 1 : next - 1);
  }


  return (
    <>
      <div className="caroussel" key={`carous${props.id}`}>
        {props.pictList &&
          props.pictList.map((pict, index) => (
            <div
              key={`imgdiv-${props.id}.${index}`}
              className={index === currentPic ? 'slide-active' : 'hide'}
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
            onClick={()=>{changeSlide(-1);handlePreviousOut()}}
            onMouseEnter={handlePreviousIn}
            onMouseLeave={handlePreviousOut}
          />

          <img
            key={`rightA${props.id}`}
            className={props.pictList.length > 1 ? 'arrow-right' : 'hide'}
            src={arrow}
            alt="vue suivante"
            onClick={()=>{changeSlide(1);handleNextOut()}}
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
            {currentPic + 1}/{props.pictList.length}
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
