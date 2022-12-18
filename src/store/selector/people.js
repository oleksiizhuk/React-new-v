import { createSelector } from '@reduxjs/toolkit';

export const selectPeople = (state) => state.people;

export const selectLoading = createSelector(
  selectPeople,
  ({ isLoading }) => {
    console.log('isLoading = ', isLoading);
    return isLoading;
  }
);
export const selectPeoples = createSelector(
  selectPeople,
  ({ people }) => people
);

export const selectPeopleError = createSelector(selectPeople, ({ isError }) => isError);
