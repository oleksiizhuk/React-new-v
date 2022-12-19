import React from 'react';
import PropTypes from 'prop-types';

export const StarshipTemplate = ({ starships }) => {
  return (
    <div className="container">
      <ul className="list-group" />
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

StarshipTemplate.propTypes = {
  starships: PropTypes.arrayOf(PropTypes.shape({
    name: null,
  }))
};

StarshipTemplate.defaultProps = {
  starships: null,
};
