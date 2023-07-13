import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/about.css';

import TopPicture from '../components/TopPicture';
import DropDown from '../components/DropDown';
import about from '../assets/about.png';
import Loader from '../components/Loader';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('../data/about.json')
        .then((resp) => resp.json())
        .then((json) => setAboutData(json.data))
        .then(console.log(aboutData))
        .then(()=>{if(aboutData.length!==0){setIsLoading(false)}})
      .catch ((err) =>(console.error('Erreur de fetch :', err)));
    };

    fetchData()},[aboutData])
  

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="top-picture">
            <TopPicture src={about} text={''} />
          </div>
          <div className=""></div>
          <DropDown
            label={(aboutData[0])}
            content={(aboutData[0])}
          />
          <DropDown
            label={(aboutData[1])}
            content={(aboutData[1])}
          />
          <DropDown
            label={(aboutData[2])}
            content={(aboutData[2])}
          />
          <DropDown
            label={(aboutData[3])}
            content={(aboutData[3])}
          />
        </>
      )}
    </>
  );
};

export default About;
