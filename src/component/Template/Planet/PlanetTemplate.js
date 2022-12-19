import React from 'react';
import PropTypes from 'prop-types';

export const PlanetTemplate = ({ planets }) => {
  return (
    <div className="container">
      <ul className="list-group" />
      {planets?.length ? planets.map((item) => {
        return (
          <li key={item.name} className="list-group-item list-group-flush">
            {item.name}
          </li>
        );
      }) : null}
    </div>
  );
};

PlanetTemplate.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
};

PlanetTemplate.defaultProps = {
  planets: null,
};
