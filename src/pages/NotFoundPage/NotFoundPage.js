import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.scss';
import image from './sad.png';

export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="z-flex">
        <img src={image} alt="sad dog" />
        <p className="display-1 error-text">This page is not Found!</p>
      </div>
      <p className="display-12">We can not seem to find page you are looking for.</p>
      <Link className="display-12 main-link" to="/">Go to main page</Link>
    </div>
  );
};
