import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../styles/homepage.css';

import TopPicture from '../components/TopPicture';
import Thumb from '../components/Thumb';
import logement from '../assets/home.png';
import Loader from '../components/Loader';

const About = () => {
  const [rentList, setRentList] = useState(); //const for the apartments contents
  const [isLoading, setIsLoading] = useState(false); //boolean true while loading in progress
  useEffect(() => {
    function fetchData() {
      setIsLoading(true);
      let queryUrl = `data/logements.json`;
      fetch(queryUrl)
        .then((response) => response.json())
        .then((json) => setRentList(json.data), setIsLoading(false))
        .catch((error) => console.log('erreur de fetch :', error));
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="top-picture">
            <TopPicture
              src={logement}
              text={'Chez vous,\n partout et ailleurs'}
            />
          </div>

          <div className="thumb-group">
            {rentList &&
              rentList.map((obj, index) => {
                
                return (
                  <NavLink key={`thumb#${index}`} to={`/Logement/${obj.id}`} className="thumb" >
                    <Thumb
                      key={`${obj.tags[0].substring(0,5)}${obj.id}`}
                      label={obj.title}
                      cover={obj.cover}
                    />
                  </NavLink>
                );
              })}
          </div>
        </>
      )}
    </>
  );
};

export default About;
