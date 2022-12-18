import React from 'react';

// eslint-disable-next-line react/prop-types
export const PeopleTemplate = ({ peoples }) => {
  return (
    <div className="container">
      <ul className="list-group" />
      {/* eslint-disable-next-line react/prop-types */}
      {peoples ? peoples.map((item) => {
        return (
          <li key={item.name} className="list-group-item list-group-flush">
            {item.name}
          </li>
        );
      }) : null}
    </div>
  );
};
