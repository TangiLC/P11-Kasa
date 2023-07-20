import React from 'react';

import './houseTitle.css';

const HouseTitle = (props) => {
  return (
    <div className="house-title">
    <h2 key={`title-${props.id}`}>{props.title}</h2>
    {props.location}
    <div key={`tagList-${props.id}`} className="house-tags-list">
      {props.tags&& props.tags.map((elem, index) => {
        return (
          <div className="tag-element" key={`elem${index}`}>
            {`${elem}`}
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default HouseTitle;

