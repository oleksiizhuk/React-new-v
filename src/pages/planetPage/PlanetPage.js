import React from 'react';
import { usePlanetData } from './hook/usePlanetData';
import { PlanetTemplate } from '../../component/Template/Planet/PlanetTemplate';

export const PlanetPage = () => {
  const { planets } = usePlanetData();

  return (
    <PlanetTemplate planets={[planets]} />
  );
};
