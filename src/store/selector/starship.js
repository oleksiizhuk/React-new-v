import { createSelector } from '@reduxjs/toolkit';

export const selectStarship = (state) => state.starships;

export const selectLoading = createSelector(
  selectStarship,
  ({ isLoading }) => {
    console.log('isLoading = ', isLoading);
    return isLoading;
  }
);
export const selectStarships = createSelector(
  selectStarship,
  ({ starships }) => starships
);
