import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/about.css';

import TopPicture from '../components/TopPicture';
import DropDown from '../components/DropDown';
import about from '../assets/about.png';
import aboutContent from '../data/about.json';

const About = () => {
  console.log({ aboutContent });
  console.log();

  return (
    <>
      <TopPicture src={about} text={""} />
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <DropDown
        label={Object.keys(aboutContent[0])}
        content={Object.values(aboutContent[0])}
      />
      <DropDown
        label={Object.keys(aboutContent[1])}
        content={Object.values(aboutContent[1])}
      />
      <DropDown
        label={Object.keys(aboutContent[2])}
        content={Object.values(aboutContent[2])}
      />
      <DropDown
        label={Object.keys(aboutContent[3])}
        content={Object.values(aboutContent[3])}
      />
    </>
  );
};

export default About;
