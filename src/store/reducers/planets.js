import { createReducer } from '@reduxjs/toolkit';
import { setPlanets, updateIsLoadingPlanets, setPlanetError } from '../actions-types/planets';

const initialState = {
  isLoading: false,
  planets: null,
  isError: false,
};

export const planets = createReducer(initialState, (builder) => {
  builder.addCase(updateIsLoadingPlanets, (state, { payload }) => {
    return {
      ...state,
      isLoading: payload,
    };
  });

  builder.addCase(setPlanets, (state, { payload }) => {
    return {
      ...state,
      planets: payload,
      isError: false,
      isLoading: false,
    };
  });
  builder.addCase(setPlanetError, (state, { payload }) => {
    return {
      ...state,
      isError: payload,
    };
  });
});
