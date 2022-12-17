import { configureStore } from '@reduxjs/toolkit';
import { app } from './reducers/app';
import { auth } from './reducers/auth';
import { people } from './reducers/people';
import { planets } from './reducers/planets';
import { starships } from './reducers/starships';

export const store = configureStore({
  reducer: {
    app,
    auth,
    people,
    starships,
    planets,
  },
});
