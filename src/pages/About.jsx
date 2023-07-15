import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/about.css';

import TopPicture from '../components/TopPicture';
import DropDown from '../components/DropDown';
import about from '../assets/about.png';
import Loader from '../components/Loader'

const About = () => {

    const [dataContent, setDataContent] =useState();   //const for the drop-down menus text
    const [isLoading, setIsLoading] =useState(false);  //boolean true while loading in progress
  useEffect(() => {
    function fetchData() {
        setIsLoading(true);
        let queryUrl = `data/about.json`;
     fetch(queryUrl)
            .then((response) => response.json())
            .then((json) => setDataContent(json.data), setIsLoading(false))
            .catch((error) => console.log('erreur de fetch :', error));
    }
    fetchData();
}, []);


  return (
    
    <>
    {isLoading?(<Loader />):(<>          
      <div className="top-picture">
        <TopPicture src={about} text={''} />
      </div>
      <div className="drop-group">
        {dataContent && dataContent.map((obj, index) => {
          const lbl = Object.keys(obj)[0];
          const txt = Object.values(obj)[0];
          const uniqueKey = `${lbl.substring(0,5)}-${index}`;

          return <DropDown key={uniqueKey} label={lbl} content={txt} />;
        })}
      </div>
    </>)}</>
  );
};

export default About;
