import React from 'react';

// eslint-disable-next-line react/prop-types
export const StarshipTemplate = ({ starships }) => {
  return (
    <div className="container">
      <ul className="list-group" />
      {/* eslint-disable-next-line react/prop-types */}
      {starships?.length ? starships.map((item) => {
        return (
          <li key={item.name} className="list-group-item list-group-flush">
            {'NAME: '}
            {item.name}
          </li>
        );
      }) : null}
    </div>
  );
};
