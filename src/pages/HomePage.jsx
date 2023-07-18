import React from 'react';
import { NavLink } from 'react-router-dom';
import { FetchData } from '../tools/FetchData';
import '../styles/homepage.css';

import TopPicture from '../components/TopPicture/TopPicture';
import Thumb from '../components/Thumb/Thumb';
import logement from '../assets/home.png';


const HomePage = () => {

  const { data } = FetchData('/data/logements.json');


  return (
    
        <>
          <div className="top-picture">
            <TopPicture
              src={logement}
              text={'Chez vous,\n partout et ailleurs'}
            />
          </div>

          <div className="thumb-group">
            {data &&
              data.map((obj, index) => {
                return (
                  <NavLink
                    key={`thumb#${index}`}
                    to={`/Logement/${obj.id}`}
                    className="thumb"
                  >
                    <Thumb
                      key={`${obj.tags[0].substring(0, 5)}${obj.id}`}
                      label={obj.title}
                      cover={obj.cover}
                    />
                  </NavLink>
                );
              })}
          </div>
        </>
      )
};


export default HomePage;

