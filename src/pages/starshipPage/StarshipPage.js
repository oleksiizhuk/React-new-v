import React from 'react';
import { useStarshipData } from './hook/useStarshipData';
import { StarshipTemplate } from '../../component/Template/Starships/StarshipTemplate';

export const StarshipPage = () => {
  const { starships } = useStarshipData();

  return (
    <StarshipTemplate starships={starships} />
  );
};
