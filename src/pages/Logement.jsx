import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/logement.css';

import TopPicture from '../components/TopPicture';
import DropDown from '../components/DropDown';
import logement from '../assets/home.png';
import Loader from '../components/Loader';
import Rating from '../components/Rating';

const Logement = () => {
  const navigate = useNavigate();
  let logementId = useParams();
  if (logementId.id === undefined || isNaN(parseInt(logementId.id, 16))) {
    navigate('/Page404');
  } else {
    console.log(logementId.id);
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
            allData.filter((dt) => {
              return dt.id === logementId.id;
            })
          )
        )
        .catch((error) => console.log('erreur de fetch :', error));
    };
    getData();
  }, [allData, logementId.id]);

  function TagList(myList) {
    let returnList = '';

    myList.map(
      (elem, index) =>
        (returnList += `<div class='tag-element' key={'elem${index}'}>${elem}</div>`)
    );
    return returnList;
  }

  if (!houseData || !houseData.length) {
    return (
      <>
        <Loader />
      </>
    );
  } else {
    console.log('house data', houseData);

    return (
      <>
        <div className="top-picture">
          <TopPicture
            src={logement}
            text={'Chez vous,\n partout et ailleurs'}
          />
        </div>

        <div className="title-container">
          <div className="house-title">
            <h2>{houseData[0].title}</h2>
            {houseData[0].location}
            <div
              className="house-tags-list"
              dangerouslySetInnerHTML={{ __html: TagList(houseData[0].tags) }}
            ></div>
          </div>

          <div className="house-infos">
            <div className="house-owner">
              <div className="house-owner-name">{houseData[0].host.name}</div>
              <div className="house-owner-pic">
                <img
                  src={houseData[0].host.picture}
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
            key={`descr${houseData[0].id}`}
            label="Description"
            content={houseData[0].description}
            initOpen={true}
          />
          <DropDown
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
