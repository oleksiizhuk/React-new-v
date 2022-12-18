import { createAction } from '@reduxjs/toolkit';

const updateIsLoadingStarships = createAction('UPDATE_IS_LOADING_STARSHIP');
const setStarships = createAction('SET_STARSHIP');
const setStarshipError = createAction('SET_STARSHIP_ERROR');

export { updateIsLoadingStarships, setStarships, setStarshipError };
