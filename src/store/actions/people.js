import { setPeople, setPeopleError, updateIsLoadingPeople } from '../actions-types/people';
import { getRandomAPI } from '../../services/getRandomApi/getRandomAPI';

export const fetchPeople = () => async (dispatch) => {
  try {
    const api = getRandomAPI('people');
    dispatch(updateIsLoadingPeople(true));
    const response = await fetch(api);
    const data = await response.json();
    dispatch(setPeople(data.results));
  } catch (e) {
    dispatch(setPeopleError(true));
    dispatch(updateIsLoadingPeople(false));
  }
};
