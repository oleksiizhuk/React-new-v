import React from 'react';

// eslint-disable-next-line react/prop-types
export const PlanetTemplate = ({ planets }) => {
  console.log('PLANET', planets);
  return (
    <div className="container">
      <ul className="list-group" />
      {/* eslint-disable-next-line react/prop-types */}
      {planets ? planets.map((item) => {
        console.log('ITEM', item.name);
        return (
          <li className="list-group-item list-group-flush">
            {item}
          </li>
        );
      }) : null}
    </div>
  );
};
