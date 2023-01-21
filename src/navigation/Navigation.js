import React from 'react';
import { Route, Routes } from 'react-router';
import { HomePage } from '../pages/homePage/HomePage';
import { AboutPage } from '../pages/aboutPage/AboutPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { Translate } from '../component/Template/Translate/Translate';
import { PeoplePage } from '../pages/peoplePage/PeoplePage';
import { StarshipPage } from '../pages/starshipPage/StarshipPage';
import { PlanetPage } from '../pages/planetPage/PlanetPage';
import { LoginPage } from '../pages/loginPage/loginPage';
import { CaesarsPage } from '../pages/caesarsPage/CaesarsPage';
import { VerbPage } from '../pages/verbs/VerbPage';

export const Navigation = () => {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/translate" element={<Translate />} />
      <Route path="/people" element={<PeoplePage />} />
      <Route path="/starships" element={<StarshipPage />} />
      <Route path="/planets" element={<PlanetPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/caesar" element={<CaesarsPage />} />
      <Route path="/verbs" element={<VerbPage />} />
    </Routes>
  );
};
