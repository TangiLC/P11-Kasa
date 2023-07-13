import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/about.css';

import TopPicture from '../components/TopPicture';
import DropDown from '../components/DropDown';
import about from '../assets/about.png';
import aboutData from '../data/about.json';

const About = () => {


  return (
    <>
      <div className="top-picture">
        <TopPicture src={about} text={''} />
      </div>
      <div className="drop-group">
        {aboutData.map((obj, index) => {
          const lbl = Object.keys(obj)[0];
          const txt = Object.values(obj)[0];
          const uniqueKey = `dropdown-${index}`;

          return <DropDown key={uniqueKey} label={lbl} content={txt} />;
        })}
      </div>
    </>
  );
};

export default About;
