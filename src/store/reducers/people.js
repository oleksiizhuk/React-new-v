import { createReducer } from '@reduxjs/toolkit';
// eslint-disable-next-line import/named
import { setPeople, setPeopleError, updateIsLoadingPeople, } from '../actions-types/people';

const initialState = {
  isLoading: false,
  people: null,
  isError: false,
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
      isError: false,
      isLoading: false
    };
  });
  
  builder.addCase(setPeopleError, (state, { payload }) => {
    return {
      ...state,
      isError: payload,
    };
  });
});
