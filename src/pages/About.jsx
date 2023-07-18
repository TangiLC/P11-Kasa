import React from 'react';
import { FetchData } from '../tools/FetchData';
import '../styles/about.css';

import TopPicture from '../components/TopPicture/TopPicture';
import DropDown from '../components/DropDown/DropDown';
import about from '../assets/about.png';

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

            return <DropDown key={uniqueKey} unique={uniqueKey} label={lbl} content={txt} initOpen={false} />;
          })}
      </div>
    </>
  );
};

export default About;
