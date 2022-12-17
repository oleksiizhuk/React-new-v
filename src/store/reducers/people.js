import { createReducer } from '@reduxjs/toolkit';
import { setPeople, updateIsLoadingPeople } from '../actions-types/people';

const initialState = {
  isLoading: false,
  people: null,
};

export const people = createReducer(initialState, (builder) => {
  builder.addCase(updateIsLoadingPeople, (state, { payload }) => {
    return {
      ...state,
      isLoading: payload,
    };
  });

  builder.addCase(setPeople, (state, { payload }) => {
    return {
      ...state,
      people: payload,
    };
  });
});
