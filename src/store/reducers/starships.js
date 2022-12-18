import { createReducer } from '@reduxjs/toolkit';
import { setStarships, updateIsLoadingStarships, setStarshipError } from '../actions-types/starships';

const initialState = {
  isLoading: false,
  starships: null,
  isError: false,
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
      isError: false,
      isLoading: false
    };
  });
  
  builder.addCase(setStarshipError, (state, { payload }) => {
    return {
      ...state,
      isError: payload,
    };
  });
});
