import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export const Header = () => {
  return (
    <div>
      <ul className="b-flex">
        <li className="custom-li">
          <Link to="/people">People</Link>
        </li>
        <li className="custom-li">
          <Link to="/starships">Starships</Link>
        </li>
        <li className="custom-li">
          <Link to="/planets">Planets</Link>
        </li>
        <li className="custom-li">
          <Link to="/translate">Translate</Link>
        </li>
        <li className="custom-li">
          <Link to="/">Home</Link>
        </li>
        <li className="custom-li">
          <Link to="about">About Us</Link>
        </li>
        <li className="custom-li">
          <Link to="login">Login</Link>
        </li>
      </ul>
    </div>
  );
};
