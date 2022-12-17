import { createReducer } from '@reduxjs/toolkit';
import { setStarships, updateIsLoadingStarships } from '../actions-types/starships';

const initialState = {
  isLoading: false,
  starships: null,
};

export const starships = createReducer(initialState, (builder) => {
  builder.addCase(updateIsLoadingStarships, (state, { payload }) => {
    return {
      ...state,
      isLoading: payload,
    };
  });

  builder.addCase(setStarships, (state, { payload }) => {
    return {
      ...state,
      starships: payload,
    };
  });
});
