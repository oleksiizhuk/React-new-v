import React from 'react';

// eslint-disable-next-line react/prop-types
export const PeopleTemplate = ({ peoples }) => {
  console.log('BOT 4TO', peoples);
  return (
    <div className="container">
      <ul className="list-group" />
      {/* eslint-disable-next-line react/prop-types */}
      {peoples ? peoples.map((item) => {
        return (
          <li className="list-group-item list-group-flush">
            {'NAME: '}
            {item.name} 
            {' GENDER: '}
            {item.gender}
          </li>
        );
      }) : null}
    </div>
  );
};
