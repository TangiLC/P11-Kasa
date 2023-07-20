import React from 'react';


import './houseOwner.css';
import genericUser from '../../assets/user-regular.svg';  //if no pic available

const HouseOwner = (props) => {
  return (
    <div className="house-owner">
              <div
                className="house-owner-name"
                key={`owner-${props.id}`}
              >
                {props.host.name}
              </div>
              <div className="house-owner-pic">
                <img
                  key={`ownerPic-${props.id}`}
                  src={props.host.picture?props.host.picture:genericUser}
                  alt="portrait du propriétaire"
                ></img>
              </div>
            </div>
  );
};

export default HouseOwner;