import { createSelector } from '@reduxjs/toolkit';

export const selectPlanet = (state) => state.planets;

export const selectLoading = createSelector(
  selectPlanet,
  ({ isLoading }) => {
    console.log('isLoading = ', isLoading);
    return isLoading;
  }
);
export const selectPlanets = createSelector(
  selectPlanet,
  ({ planets }) => planets
);

export const selectPlanetError = createSelector(
  selectPlanet,
  ({ isError }) => isError    
);
