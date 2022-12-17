import { setStarships, updateIsLoadingStarships } from '../actions-types/starships';

export const fetchStarship = () => async (dispatch) => {
  try {
    console.log('1');
    dispatch(updateIsLoadingStarships(true));
    const response = await fetch('https://swapi.dev/api/starships');
    const data = await response.json();
    console.log('result = ', data);

    dispatch(setStarships(data.results));
    dispatch(updateIsLoadingStarships(false));
  } catch (e) {
    dispatch(updateIsLoadingStarships(false));
  }
};
