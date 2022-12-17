import { createReducer } from '@reduxjs/toolkit';
import { setPlanets, updateIsLoadingPlanets } from '../actions-types/planets';

const initialState = {
  isLoading: false,
  planets: null,
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
    };
  });
});
