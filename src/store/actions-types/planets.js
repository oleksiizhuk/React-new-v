import { createAction } from '@reduxjs/toolkit';

const updateIsLoadingPlanets = createAction('UPDATE_IS_LOADING_PLANET');
const setPlanets = createAction('SET_PLANET');
const setPlanetError = createAction('SET_PLANET_ERROR');

export {
  updateIsLoadingPlanets,
  setPlanets,
  setPlanetError
};
