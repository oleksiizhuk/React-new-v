import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  isTest: false
};

export const auth = createReducer(initialState, (builder) => {
  builder.addCase('', (state, payload) => ({
    ...state,
    isTest: payload,
  }));
});
