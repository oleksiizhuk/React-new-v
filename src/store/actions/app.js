import { updateIsLoading, setPeopleList } from '../actions-types/app';

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(updateIsLoading(true));
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    console.log('result = ', data);

    dispatch(setPeopleList(data.results));
    dispatch(updateIsLoading(false));
  } catch (e) {
    dispatch(updateIsLoading(false));
  }
};
