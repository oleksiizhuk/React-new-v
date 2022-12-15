import { configureStore } from '@reduxjs/toolkit';
import { app } from './reducers/app';
import { auth } from './reducers/auth';

export const store = configureStore({
  reducer: {
    app,
    auth,
  },
});
