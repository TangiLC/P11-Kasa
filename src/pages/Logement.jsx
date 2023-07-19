import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchData } from '../tools/useFetchData';
import '../styles/logement.css';

import DropDown from '../components/DropDown/DropDown';
import Loader from '../components/Loader/Loader';
import Rating from '../components/Rating/Rating';
import Caroussel from '../components/Caroussel/Caroussel';

import genericUser from '../assets/user-regular.svg';

const Logement = () => {
  const navigate = useNavigate();
  let logementId = useParams();
  if (logementId.id === undefined || isNaN(parseInt(logementId.id, 16))) {
    navigate('/Page404');
  }

  const [allData, setAllData] = useState([]);
  const [houseData, setHouseData] = useState({});


 useEffect(() => {
    const getData = () => {
      fetch('/data/logements.json')      
        .then((response) => response.json())
        .then((json) => setAllData(json.data))
        .then(
          setHouseData(
            allData.filter((data) => {
              return data.id === logementId.id;
            })
          )
        )
        .catch((error) => console.log('erreur de fetch :', error));
    };
    getData();

  }, [allData, logementId.id]);


  if (!houseData || !houseData.length) {
    return (
      <>
        <Loader />
      </>
    );
  } else {
    return (
      <>
        <div className="caroussel-container">
          <Caroussel
            key={`caroussel-${houseData[0].id}`}
            pictList={houseData[0].pictures}
            title={houseData[0].title}
            id={houseData[0].id}
          />
        </div>

        <div className="title-container">
          <div className="house-title">
            <h2 key={`title-${houseData[0].id}`}>{houseData[0].title}</h2>
            {houseData[0].location}
            <div key={`tagList-${houseData[0].id}`} className="house-tags-list">
              {houseData[0].tags&& houseData[0].tags.map((elem, index) => {
                return (
                  <div className="tag-element" key={`elem${index}`}>
                    {`${elem}`}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="house-infos">
            <div className="house-owner">
              <div
                className="house-owner-name"
                key={`owner-${houseData[0].id}`}
              >
                {houseData[0].host.name}
              </div>
              <div className="house-owner-pic">
                <img
                  key={`ownerPic-${houseData[0].id}`}
                  src={houseData[0].host.picture?houseData[0].host.picture:genericUser}
                  alt="portrait du propriétaire"
                ></img>
              </div>
            </div>

            <div className="house-rating">
              <Rating
                key={`rating${houseData[0].id}`}
                mark={houseData[0].rating}
                outOf={5}
              />{' '}
            </div>
          </div>
        </div>
        <div className="house-dropdown-group">
          <DropDown
            unique={`descr${houseData[0].id}`}
            key={`descr${houseData[0].id}`}
            label="Description"
            content={houseData[0].description}
            initOpen={true}
          />
          <DropDown
            unique={`equip${houseData[0].id}`} 
            key={`equip${houseData[0].id}`}
            label="Équipement"
            content={houseData[0].equipments}
            initOpen={true}
          />
        </div>
      </>
    );
  }
};

export default Logement;
