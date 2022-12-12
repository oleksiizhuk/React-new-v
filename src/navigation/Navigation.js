import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { HomePage } from '../pages/homePage/HomePage';
import { AboutPage } from '../pages/aboutPage/AboutPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import translate from '../services/translate/TranslateService';

export const Navigation = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="about">About Us</Link>

        <button type="button" onClick={() => translate.changeLanguage('en')}>
          <p>change language en</p>
        </button>

        <button type="button" onClick={() => translate.changeLanguage('pl')}>
          <p>change language pl</p>
        </button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
