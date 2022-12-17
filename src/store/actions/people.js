import { setPeople, updateIsLoadingPeople } from '../actions-types/people';

export const fetchPeople = () => async (dispatch) => {
  try {
    console.log('1');
    dispatch(updateIsLoadingPeople(true));
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    console.log('result = ', data);

    dispatch(setPeople(data.results));
    dispatch(updateIsLoadingPeople(false));
  } catch (e) {
    dispatch(updateIsLoadingPeople(false));
  }
};
