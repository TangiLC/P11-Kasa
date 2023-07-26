import React, { useState, useEffect } from 'react';

import arrow from '../../assets/arrow_down.svg';
import blank from '../../assets/_blank.png';

import './caroussel.css';

const Caroussel = (props) => {
  const [currentPic, setCurrentPic] = useState(0); //index of the current pict visible
  const [previous, setPrevious] = useState(props.pictList.length - 1); //index of previous pict
  const [next, setNext] = useState(1); //index of the next pict
  const [imagePSrc, setImagePSrc] = useState(blank); //url of the miniature previous pict
  const [imageNSrc, setImageNSrc] = useState(blank); //url of the miniature next pict

  useEffect(() => {
    currentPic - 1 < 0
      ? setPrevious(props.pictList.length - 1)
      : setPrevious(currentPic - 1);
    currentPic + 1 > props.pictList.length
      ? setNext(0)
      : setNext(currentPic + 1);
  }, [currentPic, props.pictList]);

  const handlePreviousIn = () => {
    //change url of the previous pict
    setPrevious({ ...previous });
    setImagePSrc(props.pictList[previous]);
  };
  const handlePreviousOut = () => {
    //change url to blank img
    
    setImagePSrc(blank);
  };

  const handleNextIn = () => {
    setNext({ ...next });
    setImageNSrc(props.pictList[next]);
  };
  const handleNextOut = () => {
    setImageNSrc(blank);
  };

  const changeSlide = (plusMinus) => {
    //change visible slide to previous (plusMinus=-1) or next (plusMinus=1)
    let changedSlide = currentPic + plusMinus;
    if (changedSlide < 0) {
      changedSlide = props.pictList.length - 1;
    }
    if (changedSlide > props.pictList.length) {
      changedSlide = 0;
    }
    setCurrentPic(changedSlide);
    
  };

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
            onClick={() => {
              changeSlide(-1);
              handlePreviousOut();
            }}
            onMouseEnter={handlePreviousIn}
            onMouseLeave={handlePreviousOut}
          />

          <img
            key={`rightA${props.id}`}
            className={props.pictList.length > 1 ? 'arrow-right' : 'hide'}
            src={arrow}
            alt="vue suivante"
            onClick={() => {
              changeSlide(1);
              handleNextOut();
            }}
            onMouseEnter={handleNextIn}
            onMouseLeave={handleNextOut}
          />
        </div>

        <div className="prev-next-layer">
          <img
            key={`previous${props.id}${currentPic}`}
            className="prev-img"
            alt="vue précédente"
            src={imagePSrc}
          />
          <div key={`pageCount${props.id}`} className="page-count">
            {currentPic + 1}/{props.pictList.length}
          </div>
          <img
            key={`next${props.id}${currentPic}`}
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
