import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FetchData } from '../tools/FetchData';
import '../styles/about.css';

import TopPicture from '../components/TopPicture';
import DropDown from '../components/DropDown';
import about from '../assets/about.png';
import Loader from '../components/Loader';

const About = () => {
  const { data } = FetchData('/data/about.json');

  return (
    <>
      <div className="top-picture">
        <TopPicture src={about} text={''} />
      </div>
      <div className="drop-group">
        {data &&
          data.map((obj, index) => {
            const lbl = Object.keys(obj)[0];
            const txt = Object.values(obj)[0];
            const uniqueKey = `${lbl.substring(0, 5)}-${index}`;

            return <DropDown key={uniqueKey} label={lbl} content={txt} initOpen={false} />;
          })}
      </div>
    </>
  );
};

export default About;
