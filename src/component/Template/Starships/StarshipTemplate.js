import React from 'react';

// eslint-disable-next-line react/prop-types
export const StarshipTemplate = ({ starships }) => {
  console.log('BOT 4TO', starships);
  return (
    <div className="container">
      <ul className="list-group" />
      {/* eslint-disable-next-line react/prop-types */}
      {starships ? starships.map((item) => {
        return (
          <li className="list-group-item list-group-flush">
            {'NAME: '}
            {item.name}
          </li>
        );
      }) : null}
    </div>
  );
};
