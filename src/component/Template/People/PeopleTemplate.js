import React from 'react';
import PropTypes from 'prop-types';

export const PeopleTemplate = ({ people }) => {
  return (
    <div className="container">
      <ul className="list-group" />
      {people ? people.map((item) => {
        return (
          <li key={item.name} className="list-group-item list-group-flush">
            {item.name}
          </li>
        );
      }) : null}
    </div>
  );
};

PeopleTemplate.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  }))
};

PeopleTemplate.defaultProps = {
  people: null,
};
