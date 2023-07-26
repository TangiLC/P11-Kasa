import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/logement.css';

import DropDown from '../components/DropDown/DropDown';
import Rating from '../components/Rating/Rating';
import Caroussel from '../components/Caroussel/Caroussel';
import HouseTitle from '../components/HouseTitle/HouseTitle';
import HouseOwner from '../components/HouseOwner/HouseOwner';
import Page404 from './Page404';
import Loader from '../components/Loader/Loader';



const Logement = () => {
  const navigate = useNavigate();
  let logementId = useParams();

  if (logementId.id === undefined || isNaN(parseInt(logementId.id, 16))) {
    navigate('/Page404');
  }

  const [allData, setAllData] = useState([]);
  const [houseData, setHouseData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = () => {
      setIsLoading(true);
      fetch('/data/logements.json')
        .then((response) => response.json())
        .then((json) => setAllData(json.data))
        .then(
          setHouseData(
            allData.filter((data) => {
              return data.id === logementId.id;
            })
          ),
          setIsLoading(false)
        )
        .catch((error) => console.log('erreur de fetch :', error));
    };
    getData();
  }, [allData, logementId.id]);

  if (!houseData || !houseData.length) {
    return <>{isLoading ? <Loader /> : <Page404 />}</>;
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
          <HouseTitle
            id={houseData[0].id}
            title={houseData[0].title}
            location={houseData[0].location}
            tags={houseData[0].tags}
          />

          <div className="house-infos">
            <HouseOwner id={houseData[0].id} host={houseData[0].host} />

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
