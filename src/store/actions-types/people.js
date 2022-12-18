import { createAction } from '@reduxjs/toolkit';

export const updateIsLoadingPeople = createAction('UPDATE_IS_LOADING_PEOPLE');
export const setPeople = createAction('SET_PEOPLE');
export const setPeopleError = createAction('SET_PEOPLE_ERROR');
