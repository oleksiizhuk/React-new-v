import { createReducer } from '@reduxjs/toolkit';
import { setPeopleList, updateIsLoading } from '../actions-types/app';

const initialState = {
  isLoading: false,
  people: null,
  test: ''
};

export const app = createReducer(initialState, (builder) => {
  builder.addCase(updateIsLoading, (state, { payload }) => {
    return {
      ...state,
      isLoading: payload,
    };
  });

  builder.addCase(setPeopleList, (state, { payload }) => {
    return {
      ...state,
      people: payload,
    };
  });

  // builder.addCase('', (state, { payload }) => {
  // eslint-disable-next-line no-param-reassign
  // state.test = payload.cartId;
  // });
});
