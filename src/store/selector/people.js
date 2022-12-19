import { createSelector } from '@reduxjs/toolkit';
import { preparePeopleMass } from '../transformator/people';

const selectPeople = (state) => state.people;

const selectLoading = createSelector(
  selectPeople,
  ({ isLoading }) => {
    console.log('isLoading = ', isLoading);
    return isLoading;
  }
);

const selectPeoples = createSelector(
  selectPeople,
  ({ people }) => people
);

const selectPeopleError = createSelector(selectPeople, ({ isError }) => isError);

const getPeopleMass = createSelector(
  selectPeople,
  ({ people }) => {
    return preparePeopleMass(people);
  }
);
  
export {
  selectPeople,
  selectPeoples,
  selectLoading,
  selectPeopleError,
  getPeopleMass  
};
