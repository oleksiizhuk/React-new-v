import { createSelector } from '@reduxjs/toolkit';

export const selectApp = (state) => state.app;

export const selectLoading = createSelector(
  selectApp,
  ({ isLoading }) => {
    console.log('isLoading = ', isLoading);
    return isLoading;
  }
);
export const selectPeople = createSelector(
  selectApp,
  ({ people }) => people
);
