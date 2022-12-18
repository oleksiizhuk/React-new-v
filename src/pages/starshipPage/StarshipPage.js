import React from 'react';
import { useStarshipData } from './hook/useStarshipData';
import { StarshipTemplate } from '../../component/Template/Starships/StarshipTemplate';
import { SuspenseView } from '../../component/SuspenseView/SuspenseView';

export const StarshipPage = () => {
  const {
    starships, loadStarship, isError, isLoading 
  } = useStarshipData();

  return (
    <SuspenseView isLoading={isLoading} isError={isError} onTryAgainClick={loadStarship}>
      <StarshipTemplate starships={starships} />
    </SuspenseView>
  );
};
