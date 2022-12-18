import React from 'react';
import { usePlanetData } from './hook/usePlanetData';
import { PlanetTemplate } from '../../component/Template/Planet/PlanetTemplate';
import { SuspenseView } from '../../component/SuspenseView/SuspenseView';

export const PlanetPage = () => {
  const {
    isLoading, planets, isError, loadPlanet
  } = usePlanetData();

  return (
    <SuspenseView isLoading={isLoading} isError={isError} onTryAgainClick={loadPlanet}>
      <PlanetTemplate planets={planets} />
    </SuspenseView>
  );
};
